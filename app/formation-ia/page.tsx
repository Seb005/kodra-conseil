import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation en ligne — Maîtriser l'IA générative",
  description:
    "Plus de 4 heures de formation asynchrone pour comprendre l'IA, maîtriser les LLMs et utiliser l'IA générative de façon professionnelle, efficace et éthique.",
  alternates: { canonical: "/formation-ia" },
  openGraph: {
    url: "https://kodra.ca/formation-ia",
  },
};

const modules = [
  {
    num: "01",
    title: "Les fondamentaux de l'IA",
    items: [
      "Qu'est-ce que l'intelligence artificielle\u00a0?",
      "IA traditionnelle vs IA générative",
      "Les concepts clés à connaître",
    ],
  },
  {
    num: "02",
    title: "Comprendre les LLMs",
    items: [
      "Comment fonctionnent les grands modèles de langage",
      "Forces, limites et hallucinations",
      "Les modèles disponibles et leurs différences",
    ],
  },
  {
    num: "03",
    title: "Outils et plateformes",
    items: [
      "ChatGPT, Claude, Gemini et autres",
      "Choisir le bon outil pour chaque tâche",
      "Démonstrations pratiques",
    ],
  },
  {
    num: "04",
    title: "L'art du prompt",
    items: [
      "Cadres de travail pour des résultats précis",
      "Techniques avancées de prompting",
      "Exemples concrets par métier",
    ],
  },
  {
    num: "05",
    title: "Utilisation professionnelle",
    items: [
      "Intégrer l'IA dans vos processus de travail",
      "Automatiser les tâches répétitives",
      "Cas d'usage par secteur",
    ],
  },
  {
    num: "06",
    title: "Éthique et responsabilité",
    items: [
      "Enjeux de confidentialité et de sécurité",
      "Biais algorithmiques et pensée critique",
      "Cadre d'utilisation responsable",
    ],
  },
];

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "À votre rythme",
    text: "Plus de 4 heures de contenu accessible 24/7. Avancez quand vous voulez, revenez quand vous en avez besoin.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Concret et pratique",
    text: "Pas de théorie abstraite. Des démonstrations, des exemples réels et des cadres de travail directement applicables.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Éthique intégrée",
    text: "L'efficacité ne suffit pas. Apprenez à utiliser l'IA de manière responsable, avec un cadre éthique clair.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Par un formateur terrain",
    text: "Créée par Sébastien Bélisle, qui a formé plus de 1\u00a0000 personnes en IA depuis 2024.",
  },
];

const audiences = [
  "Gestionnaires et dirigeants qui veulent comprendre l'IA",
  "Professionnels qui veulent gagner en productivité",
  "Équipes qui démarrent leur virage IA",
  "Travailleurs autonomes et entrepreneurs",
  "Employés du secteur communautaire et des OBNL",
  "Toute personne curieuse qui veut démystifier l'IA",
];

export default function FormationIA() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qu'est-ce que la formation en IA générative de Kodra ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "C'est une formation asynchrone de plus de 4 heures qui couvre les fondamentaux de l'IA, les modèles de langage (LLMs), l'art du prompting et les applications concrètes de l'IA générative en contexte professionnel. Accessible en ligne, à votre rythme.",
              },
            },
            {
              "@type": "Question",
              name: "À qui s'adresse la formation IA de Kodra Conseil ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "La formation s'adresse aux professionnels, gestionnaires et équipes qui veulent comprendre et utiliser l'IA générative de façon efficace et éthique dans leur travail quotidien. Aucun prérequis technique n'est nécessaire.",
              },
            },
            {
              "@type": "Question",
              name: "La formation en IA est-elle disponible en entreprise ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, Kodra offre des formations IA sur mesure pour les organisations, en présentiel ou en ligne. Les contenus sont adaptés au secteur d'activité et aux besoins spécifiques de l'équipe.",
              },
            },
          ],
        }}
      />
      <SiteNavbar />

      {/* ======== HERO ======== */}
      <section className="relative overflow-hidden bg-blue-dark px-6 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-brand/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="inline-block rounded-full bg-orange-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-brand">
                Formation en ligne — asynchrone
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Maîtriser l&apos;IA générative
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                De la compréhension des fondamentaux à l&apos;utilisation professionnelle et éthique.
              </p>
              <p className="mt-6 max-w-lg leading-relaxed text-gray-300">
                Plus de <strong className="text-white">4 heures de contenu</strong> pour comprendre le fonctionnement des LLMs, découvrir les meilleurs outils et adopter des cadres de travail concrets pour intégrer l&apos;IA dans votre quotidien professionnel. Écoutez quand ça vous chante, à votre rythme&nbsp;!
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://xceptio.miiro.ca/formations/625-initiation-a-l-ia-generative-au-travail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-orange-brand px-8 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
                >
                  Accéder à la formation
                </a>
                <a
                  href="#contenu"
                  className="rounded-lg border border-white/10 px-8 py-4 text-center text-base font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  Voir le contenu
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  +4h de contenu
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                  100% en ligne
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                  Accès illimité
                </span>
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-orange-brand/5">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/WO3BWAlq01Y"
                    title="Formation IA — Kodra Conseil"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== POURQUOI CETTE FORMATION ======== */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Pourquoi cette formation&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            L&apos;IA change la façon dont on travaille. Mais entre le battage médiatique et la réalité, il y a un fossé. Cette formation le comble.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-brand/10 text-orange-brand">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CONTENU ======== */}
      <section id="contenu" className="bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ce que vous allez apprendre
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            6 modules progressifs pour passer de débutant à utilisateur confiant et responsable.
          </p>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="relative rounded-2xl border border-white/5 bg-blue-dark-light p-6 transition-all hover:border-orange-brand/20"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-orange-brand px-3 py-0.5 text-xs font-bold text-white">
                  Module {mod.num}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {mod.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== POUR QUI ======== */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Pour qui&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            Aucun prérequis technique. Si vous savez utiliser un navigateur web, vous pouvez suivre cette formation.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {audiences.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-blue-dark p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg className="h-4 w-4 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA FINAL ======== */}
      <section className="relative overflow-hidden bg-blue-dark px-6 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-brand/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Prêt à maîtriser l&apos;IA&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Commencez dès maintenant. Avancez à votre rythme. Revenez quand vous en avez besoin.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="https://xceptio.miiro.ca/formations/625-initiation-a-l-ia-generative-au-travail"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-orange-brand px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
            >
              Accéder à la formation
            </a>
            <p className="text-sm text-gray-500">
              Vous préférez une formation en groupe&nbsp;?{" "}
              <Link
                href="/contact"
                className="text-orange-brand transition-colors hover:text-orange-brand-hover"
              >
                Contactez-nous
              </Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
