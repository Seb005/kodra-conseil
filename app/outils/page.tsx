import Link from "next/link";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Nos outils et cadres de travail | Kodra Conseil",
  description:
    "Découvrez les cadres, modèles et méthodologies utilisés par Kodra en facilitation stratégique et formations IA : Design Thinking, Design Sprint, Liberating Structures et plus.",
  alternates: { canonical: "/outils" },
  openGraph: {
    title: "Nos outils et cadres de travail | Kodra Conseil",
    description:
      "Découvrez les cadres, modèles et méthodologies utilisés par Kodra en facilitation stratégique et formations IA : Design Thinking, Design Sprint, Liberating Structures et plus.",
  },
};

const outils = [
  {
    nom: "Design Thinking",
    slug: "design-thinking",
    categorie: "Facilitation",
    description:
      "Approche centrée sur l\u2019humain en 5 étapes : empathie, définition, idéation, prototypage et test. Un cadre rigoureux pour résoudre des problèmes complexes en plaçant les besoins réels des utilisateurs au centre de chaque décision.",
    quand:
      "Quand vous devez repenser un service, un processus ou un produit en partant des besoins réels de vos utilisateurs.",
    pratique:
      "On utilise le Design Thinking comme colonne vertébrale de nos mandats de facilitation stratégique. Chaque atelier intègre au minimum les phases d\u2019empathie et d\u2019idéation pour ancrer les solutions dans la réalité terrain.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    nom: "Design Sprint",
    slug: "design-sprint",
    categorie: "Facilitation",
    description:
      "Méthode développée chez Google Ventures : 5 jours pour passer de l\u2019idée au prototype testé. Un processus intensif et structuré qui compresse des mois de travail en une semaine.",
    quand:
      "Quand vous avez un défi stratégique précis et que vous voulez valider une solution rapidement avant d\u2019investir temps et ressources.",
    pratique:
      "On adapte le format classique de 5 jours selon votre contexte — parfois en 3 jours intensifs, parfois étalé sur 2 semaines. L\u2019essentiel : arriver au test utilisateur le plus vite possible.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    nom: "Liberating Structures",
    slug: "liberating-structures",
    categorie: "Facilitation",
    description:
      "Un répertoire de 33 microstructures d\u2019interaction conçues pour libérer la participation de tous. Elles remplacent les formats conventionnels (présentations, brainstorms classiques) par des activités qui incluent chaque voix.",
    quand:
      "Quand vos réunions manquent d\u2019engagement, que les mêmes personnes parlent toujours, ou que vous voulez générer des idées plus diversifiées.",
    pratique:
      "On intègre systématiquement des structures comme 1-2-4-All, Troika Consulting ou TRIZ dans nos ateliers. C\u2019est notre boîte à outils quotidienne pour garantir une participation équitable.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    nom: "World Café",
    slug: "world-cafe",
    categorie: "Facilitation",
    description:
      "Des conversations en petits groupes rotatifs qui font émerger l\u2019intelligence collective. Les participants changent de table à intervalles réguliers, pollinisant les idées d\u2019un groupe à l\u2019autre.",
    quand:
      "Quand vous devez explorer un sujet en profondeur avec un grand groupe (20+ personnes) et que vous voulez que chaque personne contribue.",
    pratique:
      "On utilise le World Café lors de consultations organisationnelles, de planifications stratégiques participatives ou de journées de réflexion collective. Format idéal pour 30 à 100 personnes.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    nom: "Open Space Technology",
    slug: "open-space",
    categorie: "Facilitation",
    description:
      "Une méthode auto-organisée où les participants créent eux-mêmes l\u2019ordre du jour et choisissent les sujets auxquels ils contribuent. Fondée sur la « loi des deux pieds » : si vous n\u2019apprenez rien et ne contribuez pas, changez de groupe.",
    quand:
      "Quand vous abordez un sujet complexe avec un grand groupe et que vous faites confiance à l\u2019intelligence collective pour faire émerger les bonnes priorités.",
    pratique:
      "On utilise l\u2019Open Space pour les grandes consultations ou les événements où la diversité des perspectives est essentielle. Particulièrement efficace après une phase de diagnostic.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    nom: "Theory U",
    slug: "theory-u",
    categorie: "Facilitation",
    description:
      "Cadre développé par Otto Scharmer (MIT) pour accompagner le changement en profondeur. Le processus en U invite à « lâcher prise » sur les modèles mentaux existants pour « laisser émerger » de nouvelles possibilités.",
    quand:
      "Quand votre organisation fait face à une transformation profonde et que les solutions habituelles ne suffisent plus.",
    pratique:
      "On s\u2019inspire de la Theory U pour structurer les mandats de transformation organisationnelle. Les phases de « sensing » et de « presencing » guident notre façon d\u2019accompagner les équipes dans le changement.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    ),
  },
  {
    nom: "Prompt Engineering",
    slug: "prompt-engineering",
    categorie: "IA",
    description:
      "Cadres structurés (RICE, chaîne de pensée, few-shot, etc.) pour communiquer efficacement avec les grands modèles de langage. L\u2019art de formuler des instructions claires pour obtenir des résultats précis et fiables.",
    quand:
      "Quand vos équipes utilisent l\u2019IA mais obtiennent des résultats inégaux, ou quand vous voulez maximiser la valeur extraite des outils comme ChatGPT, Claude ou Copilot.",
    pratique:
      "C\u2019est le cœur de nos formations IA. On enseigne des cadres concrets et reproductibles que vos équipes peuvent appliquer dès le lendemain — pas de la théorie abstraite, mais des techniques testées en contexte professionnel.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    nom: "Cadre d\u2019adoption responsable de l\u2019IA",
    slug: "adoption-responsable-ia",
    categorie: "IA",
    description:
      "Méthodologie Kodra pour intégrer l\u2019intelligence artificielle de façon éthique et progressive dans les organisations. Un processus en 4 phases : sensibilisation, expérimentation, intégration et gouvernance.",
    quand:
      "Quand votre organisation veut adopter l\u2019IA mais ne sait pas par où commencer, ou quand vous voulez vous assurer que l\u2019adoption se fait de manière responsable et alignée avec vos valeurs.",
    pratique:
      "C\u2019est notre cadre propriétaire qui structure l\u2019ensemble de nos interventions en IA. Il combine formation, accompagnement et gouvernance pour assurer une adoption durable et éthique.",
    icone: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function OutilsPage() {
  return (
    <>
      <SiteNavbar />

      {/* ======== HEADER ======== */}
      <section className="relative overflow-hidden bg-blue-dark px-6 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-orange-brand/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full bg-orange-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-brand">
            Méthodologies
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Nos outils et cadres de travail
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Chaque intervention s&apos;appuie sur des cadres reconnus et éprouvés.
            Voici les méthodologies que nous utilisons en facilitation stratégique
            et en formation à l&apos;intelligence artificielle.
          </p>
        </div>
      </section>

      {/* ======== MINI-NAV ======== */}
      <nav className="border-y border-white/5 bg-blue-dark-light px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
          {outils.map((outil) => (
            <a
              key={outil.slug}
              href={`#${outil.slug}`}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                outil.categorie === "IA"
                  ? "border-purple-500/20 text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10"
                  : "border-orange-brand/20 text-orange-brand hover:border-orange-brand/40 hover:bg-orange-brand/10"
              }`}
            >
              {outil.nom}
            </a>
          ))}
        </div>
      </nav>

      {/* ======== GRILLE DES OUTILS ======== */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {outils.map((outil) => (
              <div
                key={outil.nom}
                id={outil.slug}
                className="scroll-mt-24 rounded-2xl border border-white/5 bg-blue-dark p-8 transition-all hover:border-white/10"
              >
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-brand/10 text-orange-brand">
                    {outil.icone}
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      outil.categorie === "IA"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-orange-brand/10 text-orange-brand"
                    }`}
                  >
                    {outil.categorie}
                  </span>
                </div>

                {/* Nom et description */}
                <h2 className="text-xl font-bold text-white">{outil.nom}</h2>
                <p className="mt-3 leading-relaxed text-gray-400">
                  {outil.description}
                </p>

                {/* Quand l'utiliser */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-brand">
                    Quand l&apos;utiliser
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {outil.quand}
                  </p>
                </div>

                {/* En pratique chez Kodra */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-brand">
                    En pratique chez Kodra
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {outil.pratique}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="border-t border-orange-brand/10 bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Envie d&apos;appliquer ces méthodes dans votre organisation&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Discutons de vos besoins. On vous proposera l&apos;approche la mieux
            adaptée à votre contexte.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.calendly.com/sbelisle/30"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-orange-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
            >
              Réserver un appel découverte
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/10 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/5"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
