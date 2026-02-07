import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services | Facilitation stratégique et formations IA — Kodra Conseil",
  description:
    "Planification stratégique, Design Sprint, alignement d'équipe, formations IA en entreprise. Des services sur mesure pour les organisations qui veulent travailler mieux ensemble.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Facilitation stratégique et formations IA — Kodra Conseil",
    description:
      "Planification stratégique, Design Sprint, alignement d'équipe, formations IA en entreprise. Des services sur mesure pour les organisations qui veulent travailler mieux ensemble.",
  },
};

const facilitationServices = [
  {
    title: "Planification stratégique",
    description:
      "Définissez une vision claire et des priorités concrètes avec l'ensemble de vos parties prenantes.",
    ideal: "Conseils d'administration, équipes de direction, OBNL",
  },
  {
    title: "Alignement stratégique",
    description:
      "Harmonisez vos priorités, clarifiez les rôles et renforcez la collaboration au sein de votre équipe de gestion.",
    ideal: "Équipes de direction, comités de gestion",
  },
  {
    title: "Clarification de la vision commune",
    description:
      "Élaborez une vision partagée qui guide la prise de décision au quotidien.",
    ideal: "Organisations en transition, fusions, nouveaux projets",
  },
  {
    title: "Analyse de la situation",
    description:
      "Identifiez vos défis prioritaires, mobilisez vos acteurs clés et définissez un plan d'action concret.",
    ideal: "Organisations qui sentent qu'elles tournent en rond",
  },
  {
    title: "Teambuilding",
    description:
      "Améliorez la communication et la cohésion de votre équipe à travers des activités immersives et significatives.",
    ideal: "Nouvelles équipes, équipes en difficulté",
  },
  {
    title: "Résolution de problèmes",
    description:
      "Générez des idées, testez des solutions et accélérez la prise de décision avec des méthodes structurées.",
    ideal: "Défis opérationnels ou stratégiques urgents",
  },
  {
    title: "Design Sprint (5 jours)",
    description:
      "Passez de l'idée au prototype testé par de vrais utilisateurs en une semaine. Méthode développée chez Google Ventures.",
    ideal: "Lancement de produit/service, innovation",
  },
];

const formationFormats = [
  {
    title: "Formations en entreprise (sur mesure)",
    description:
      "Contenu adapté à votre secteur, vos outils et vos besoins spécifiques. De l'initiation à l'utilisation avancée.",
    duration: "Demi-journée à journée complète",
  },
  {
    title: "Ateliers pratiques",
    description:
      "Sessions interactives où les participants apprennent en faisant. Hands-on, avec leurs propres cas concrets.",
    duration: "2 à 4 heures",
  },
  {
    title: "Conférences et présentations",
    description:
      "Sensibilisation et inspiration pour vos événements, colloques ou assemblées.",
    duration: "45 à 90 minutes",
  },
  {
    title: "Consultation stratégique IA",
    description:
      "Accompagnement personnalisé pour intégrer l'IA dans vos processus. Évaluation de maturité, plan d'implantation, accompagnement au changement.",
    duration: "Sur mesure",
  },
];

const themes = [
  "Introduction à l'IA générative (ChatGPT, Claude, etc.)",
  "L'art du prompt : communiquer efficacement avec l'IA",
  "IA et productivité : automatiser les tâches répétitives",
  "IA pour les gestionnaires : prise de décision augmentée",
  "IA et ressources humaines",
  "IA pour le secteur communautaire et les OBNL",
  "Enjeux éthiques et utilisation responsable de l'IA",
];

export default function Services() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qu'est-ce que la facilitation stratégique ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "La facilitation stratégique est un processus structuré qui aide les organisations à aligner leur vision, prendre des décisions collectives et élaborer des plans d'action concrets à travers des ateliers collaboratifs animés par un facilitateur professionnel.",
              },
            },
            {
              "@type": "Question",
              name: "Quels types d'ateliers propose Kodra Conseil ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kodra propose des ateliers de planification stratégique, d'alignement d'équipe, de Design Sprint, de résolution de problèmes complexes et de formation en intelligence artificielle. Chaque atelier est adapté aux besoins spécifiques de l'organisation.",
              },
            },
            {
              "@type": "Question",
              name: "Comment la formation en IA peut-elle aider mon organisation ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "La formation en IA permet aux équipes de comprendre et d'adopter les outils d'intelligence artificielle pertinents à leur secteur, augmentant la productivité et la compétitivité. Plus de 1 000 personnes ont été formées par Kodra Conseil.",
              },
            },
          ],
        }}
      />
      <SiteNavbar />

      {/* Header */}
      <section className="bg-blue-dark px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Nos services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Deux expertises complémentaires pour vous aider à travailler mieux.
          </p>
        </div>
      </section>

      {/* Facilitation */}
      <section id="facilitation" className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-brand/10">
              <svg className="h-7 w-7 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Facilitation stratégique</h2>
            </div>
          </div>

          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-300">
            Les problèmes complexes ne se règlent pas en silo. On conçoit et anime des ateliers sur mesure qui mobilisent l&apos;intelligence de votre équipe pour prendre de meilleures décisions et passer à l&apos;action.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilitationServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/5 bg-blue-dark p-6 transition-all hover:border-white/10"
              >
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>
                <p className="mt-4 text-xs text-orange-brand">
                  Idéal pour&nbsp;: {service.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations IA */}
      <section id="formations-ia" className="bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-brand/10">
              <svg className="h-7 w-7 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0l-3.5-3.5M5 14.5l3.5-3.5" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">
                Formations en intelligence artificielle
              </h2>
            </div>
          </div>

          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-300">
            L&apos;IA change la façon dont on travaille. Nos formations pratiques permettent à vos équipes de maîtriser les outils d&apos;IA pour gagner du temps, améliorer la qualité de leur travail et se concentrer sur ce qui compte vraiment&nbsp;: les relations humaines.
          </p>

          {/* Formats */}
          <h3 className="mb-6 text-xl font-semibold text-white">Formats disponibles</h3>
          <div className="mb-16 grid gap-6 sm:grid-cols-2">
            {formationFormats.map((format) => (
              <div
                key={format.title}
                className="rounded-2xl border border-white/5 bg-blue-dark-light p-6 transition-all hover:border-white/10"
              >
                <h4 className="text-lg font-semibold text-white">{format.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {format.description}
                </p>
                <p className="mt-4 inline-block rounded-full bg-orange-brand/10 px-3 py-1 text-xs font-medium text-orange-brand">
                  {format.duration}
                </p>
              </div>
            ))}
          </div>

          {/* Thèmes */}
          <h3 className="mb-6 text-xl font-semibold text-white">Thèmes couverts</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {themes.map((theme) => (
              <div key={theme} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-brand" />
                <p className="text-sm leading-relaxed text-gray-400">{theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Vous ne savez pas par où commencer&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Réservez un appel découverte gratuit — on identifie ensemble le meilleur point de départ pour votre organisation.
          </p>
          <a
            href="https://www.calendly.com/sbelisle/30"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-orange-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
          >
            Planifier un appel
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
