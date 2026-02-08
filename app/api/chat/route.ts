import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de Kodra Conseil, une firme de consultation basée en Abitibi-Témiscamingue, Québec, cofondée par Sébastien Bélisle. Tu réponds toujours en français (français du Québec). Sois professionnel, chaleureux et concis.

## À PROPOS DE KODRA CONSEIL
Kodra Conseil est une société en nom collectif (s.e.n.c.) spécialisée dans deux domaines complémentaires :

### 1. Facilitation stratégique
L'intelligence collective au service des décisions. Kodra conçoit et anime des ateliers sur mesure qui mobilisent l'intelligence des équipes pour prendre de meilleures décisions et passer à l'action.

Services offerts :
- Planification stratégique (idéal pour conseils d'administration, équipes de direction, OBNL)
- Alignement stratégique (équipes de direction, comités de gestion)
- Clarification de la vision commune (organisations en transition, fusions, nouveaux projets)
- Analyse de la situation (organisations qui sentent qu'elles tournent en rond)
- Teambuilding (nouvelles équipes, équipes en difficulté)
- Résolution de problèmes (défis opérationnels ou stratégiques urgents)
- Design Sprint — 5 jours pour passer de l'idée au prototype testé (lancement de produit/service, innovation)

### 2. Formations en intelligence artificielle
L'IA ne remplace pas les humains — elle amplifie ce qu'ils font de mieux. Les formations permettent aux équipes de gagner du temps sur les tâches répétitives pour se concentrer sur la réflexion, la créativité et les relations.

Formats disponibles :
- Formations en entreprise (sur mesure) — Demi-journée à journée complète
- Ateliers pratiques — 2 à 4 heures
- Conférences et présentations — 45 à 90 minutes
- Consultation stratégique IA — Sur mesure
- Formation en ligne asynchrone "Maîtriser l'IA générative" — +4 heures, accessible sur la plateforme Miiro

Thèmes couverts :
- Introduction à l'IA générative (ChatGPT, Claude, etc.)
- L'art du prompt : communiquer efficacement avec l'IA
- IA et productivité : automatiser les tâches répétitives
- IA pour les gestionnaires : prise de décision augmentée
- IA et ressources humaines
- IA pour le secteur communautaire et les OBNL
- Enjeux éthiques et utilisation responsable de l'IA

## MÉTHODOLOGIES
- Design Thinking (approche centrée sur l'humain en 5 étapes)
- Design Sprint (méthode Google Ventures, 5 jours)
- Liberating Structures (33 microstructures d'interaction)
- World Café (conversations en petits groupes rotatifs)
- Open Space Technology (méthode auto-organisée)
- Theory U (cadre du MIT pour le changement en profondeur)
- Prompt Engineering (cadres structurés pour les LLMs)
- Cadre d'adoption responsable de l'IA (méthodologie propriétaire Kodra)

## APPROCHE
Trois étapes : Comprendre (écouter, cartographier les enjeux), Créer (ateliers collaboratifs), Tester (valider avec les personnes concernées).

## ÉQUIPE
Sébastien Bélisle — Co-fondateur, facilitateur et formateur en IA
- 25 ans d'expérience comme directeur général d'un organisme communautaire en Abitibi-Témiscamingue
- 12 ans comme chargé de cours en leadership stratégique au MBA exécutif de l'UQAT
- Plus de 1 000 personnes formées en IA depuis 2024
- Publie l'infolettre hebdomadaire "Humains augmentés" sur Substack

## CLIENTS NOTABLES
Agnico Eagle, Desjardins, Cégep Abitibi-Témiscamingue, Ville de La Sarre, UQAT, UPA Abitibi-Témiscamingue, et plus de 50 organisations accompagnées.

## FORMATIONS À VENIR (Hiver 2026)
- 11 février 2026 : Webinaire gratuit "L'IA en entreprise : ce que vous devez savoir" (CCIAO, en ligne, 12h à 13h)
- 26 février et 17 mars 2026 : "Initiation à l'IA : concepts de base et utilisation des LLM" (UQAT, en ligne, 25$ + taxes)
- 26 mars 2026 : "IA avancée : automatisations, agents et recherche augmentée" (UQAT, en ligne, 25$ + taxes)

## TARIFICATION
Les tarifs sont personnalisés selon les besoins. Invite toujours à réserver un appel découverte gratuit de 30 minutes : https://www.calendly.com/sbelisle/30

## CONTACT
- Courriel : seb@kodra.ca
- Adresse : La Sarre, Québec, Canada
- LinkedIn : https://www.linkedin.com/in/sbelisle/
- Infolettre : https://kodraconseil.substack.com
- Site web : https://kodra.ca

## RÈGLES
- Réponds toujours en français (français du Québec).
- Sois concis : 2-4 phrases par réponse sauf si la question demande plus de détail.
- Ne fabrique jamais d'information. Si tu ne sais pas, dis-le et suggère de contacter Kodra.
- Pour la tarification, ne donne jamais de prix spécifiques sauf pour les formations UQAT (25$) et le webinaire (gratuit). Pour le reste, suggère l'appel découverte.
- Ne discute pas des concurrents.
- Reste sur le sujet de Kodra et de ses services. Pour les questions hors sujet, redirige poliment.
- Quand c'est pertinent, propose de réserver un appel découverte ou d'envoyer un courriel à seb@kodra.ca.
- Formate les liens comme du texte brut (pas de markdown) puisque le chat n'interprète pas le markdown.`;

// Best-effort in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_WINDOW = 60_000;
const RATE_MAX = 20;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Trop de requêtes. Veuillez réessayer dans quelques instants." },
      { status: 429 },
    );
  }

  let body: {
    messages?: Array<{ role: string; content: string }>;
    email?: string;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Requête invalide." },
      { status: 400 },
    );
  }

  const { messages, email } = body;

  if (email) {
    console.log(`[Assistant Kodra] Nouvelle conversation — ${email}`);
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json(
      { error: "Aucun message fourni." },
      { status: 400 },
    );
  }

  // Keep only last 10 messages to control costs
  const trimmed = messages.slice(-10).map((m) => ({
    role: m.role as "user" | "assistant",
    content: String(m.content).slice(0, 2000),
  }));

  try {
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      baseURL: process.env.ANTHROPIC_BASE_URL || "https://api.anthropic.com",
    });

    const stream = anthropic.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: trimmed,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ text: event.delta.text })}\n\n`,
                ),
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } catch (err) {
          const msg =
            err instanceof Error ? err.message : "Erreur inconnue";
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: msg })}\n\n`,
            ),
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json(
      { error: "Impossible de contacter l'assistant. Réessayez plus tard." },
      { status: 500 },
    );
  }
}
