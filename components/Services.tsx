const services = [
  {
    title: "Facilitation stratégique",
    subtitle: "Débloquez vos enjeux complexes en quelques jours",
    description:
      "Vos réunions tournent en rond\u00a0? J'anime des ateliers structurés qui permettent à vos équipes de prendre des décisions, résoudre des problèmes et repartir avec un plan d'action concret — en 1 à 3 jours.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Leadership & intelligence collective",
    subtitle: "Les meilleures idées sont déjà dans votre équipe",
    description:
      "25 ans de direction d'entreprise et 13 ans d'enseignement du leadership m'ont appris une chose\u00a0: les leaders qui réussissent ne trouvent pas les réponses seuls. Je vous aide à créer les conditions pour que votre équipe les trouve.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "IA & outils de demain",
    subtitle: "L'IA au service de vos décisions, pas à votre place",
    description:
      "L'IA transforme la façon de travailler, mais la plupart des équipes ne savent pas par où commencer. Je vous aide à intégrer les meilleurs outils — dont l'IA — dans vos processus de décision et de résolution de problèmes.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0-3.5-3.5M5 14.5l3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Formation & conférences",
    subtitle: "Apprenez à faciliter vous-même",
    description:
      "Le même contenu que j'enseigne aux étudiants du eMBA de l'UQAT, adapté à votre réalité. Formations en facilitation, en leadership stratégique et en prise de décision — pour que vos leaders deviennent autonomes.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c3.586-1.252 7.3-2.1 11.106-2.51M4.26 10.147A50.636 50.636 0 0 1 12 9.75c2.755 0 5.455.276 8.05.792M4.26 10.147A60.096 60.096 0 0 1 12 9.206c2.79 0 5.509.312 8.05.941M12 2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-blue-dark md:text-4xl">
          Comment je peux vous aider
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Des approches concrètes, testées sur le terrain depuis 25&nbsp;ans —
          de la salle de conseil d&apos;administration à la salle de classe.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-100 p-6 transition-all hover:border-orange-brand/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-brand/10 text-orange-brand">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-dark">
                {service.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-orange-brand">
                {service.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
