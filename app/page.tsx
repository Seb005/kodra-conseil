import Link from "next/link";
import Image from "next/image";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import CountUp from "@/components/CountUp";
import MurmurationBg from "@/components/MurmurationBg";

const stats = [
  { value: 1000, prefix: "+", suffix: "", label: "personnes formées", sub: "en IA depuis 2024" },
  { value: 25, prefix: "", suffix: " ans", label: "d'expérience", sub: "en gestion et leadership" },
  { value: 50, prefix: "", suffix: "+", label: "organisations", sub: "accompagnées" },
  { value: 2, prefix: "", suffix: "", label: "services", sub: "complémentaires" },
];

const approach = [
  {
    num: "01",
    title: "Comprendre",
    text: "On plonge dans votre réalité. On écoute vos équipes, on cartographie vos enjeux et on identifie ce qui bloque vraiment — avant de chercher des solutions.",
  },
  {
    num: "02",
    title: "Créer",
    text: "On anime des ateliers structurés où votre équipe génère et développe des solutions concrètes. Pas de PowerPoint théorique\u00a0: du travail collaboratif intense et productif.",
  },
  {
    num: "03",
    title: "Tester",
    text: "On valide les solutions avec les personnes concernées avant de tout déployer. On ajuste, on raffine, on s'assure que ça tient la route dans le vrai monde.",
  },
];

const testimonials = [
  {
    quote: "L'atelier de planification stratégique animé par Sébastien a transformé notre façon de travailler. En deux jours, on avait un plan clair et l'adhésion de toute l'équipe.",
    name: "Témoignage à venir",
    title: "Client facilitation",
  },
  {
    quote: "La formation en IA a été une révélation pour notre équipe. Concrète, pratique, directement applicable. On a gagné des heures chaque semaine.",
    name: "Témoignage à venir",
    title: "Client formation IA",
  },
  {
    quote: "Ce qui distingue Kodra, c'est la capacité à créer un espace où tout le monde contribue réellement. Les résultats parlent d'eux-mêmes.",
    name: "Témoignage à venir",
    title: "Client planification stratégique",
  },
];

export default function Home() {
  return (
    <>
      <SiteNavbar />

      {/* ======== HERO ======== */}
      <section className="relative overflow-hidden bg-blue-dark px-6 py-24 md:py-36">
        <MurmurationBg />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-radial-[ellipse_60%_50%_at_50%_50%] from-blue-dark/80 via-transparent to-transparent"
        />
        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl animate-fade-in-up">
            Vos équipes ont les réponses.
            <br />
            <span className="text-orange-brand">On les aide à les trouver.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl animate-fade-in-up-delay-1">
            Facilitation stratégique et formations en IA pour les organisations qui veulent résoudre leurs vrais problèmes — ensemble.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up-delay-2">
            <a
              href="https://www.calendly.com/sbelisle/30"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-orange-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
            >
              Réserver un appel découverte
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/10 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/5"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* ======== STATS ======== */}
      <section className="bg-blue-dark-light px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-orange-brand md:text-5xl lg:text-6xl">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======== FORMATIONS À VENIR ======== */}
      <section className="relative overflow-hidden border-t border-orange-brand/20 bg-blue-dark px-6 py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-orange-brand/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-orange-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-brand">
              Hiver 2026
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Formations à venir
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Webinaire CCIAO */}
            <div className="group relative rounded-2xl border border-orange-brand/20 bg-blue-dark-light p-6 transition-all hover:border-orange-brand/40">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  Gratuit
                </span>
                <span className="text-xs text-gray-500">En ligne</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                L&apos;IA en entreprise&nbsp;: ce que vous devez savoir
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Webinaire pour les membres de la Chambre de commerce d&apos;Abitibi-Ouest (CCIAO).
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="h-4 w-4 shrink-0 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  11 février 2026 &middot; 12h à 13h
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="h-4 w-4 shrink-0 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Zoom
                </div>
              </div>
              <a
                href="https://webinaire-ia.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-orange-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-brand-hover"
              >
                S&apos;inscrire gratuitement
              </a>
            </div>

            {/* Initiation IA - UQAT */}
            <div className="group relative rounded-2xl border border-white/5 bg-blue-dark-light p-6 transition-all hover:border-white/10">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-orange-brand/10 px-3 py-1 text-xs font-semibold text-orange-brand">
                  25$ + taxes
                </span>
                <span className="text-xs text-gray-500">UQAT</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Initiation à l&apos;IA&nbsp;: concepts de base et utilisation des LLM
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Formation continue via le Service de formation continue de l&apos;UQAT. 2 séances de 3&nbsp;heures.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="h-4 w-4 shrink-0 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  26 février et 17 mars 2026
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="h-4 w-4 shrink-0 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  En ligne &middot; 3h par séance
                </div>
              </div>
              <a
                href="https://offrefc.uqat.ca/Web/MyCatalog/ViewP?pid=P0xJnLxSS9G0QJ3vD7yArw%3d%3d&id=z0xVEkfJvLAWnCaDdYacQw%3d%3d"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg border border-orange-brand/30 px-6 py-2.5 text-sm font-semibold text-orange-brand transition-colors hover:bg-orange-brand hover:text-white"
              >
                S&apos;inscrire via l&apos;UQAT
              </a>
            </div>

            {/* IA Avancée - UQAT */}
            <div className="group relative rounded-2xl border border-white/5 bg-blue-dark-light p-6 transition-all hover:border-white/10">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-orange-brand/10 px-3 py-1 text-xs font-semibold text-orange-brand">
                  25$ + taxes
                </span>
                <span className="text-xs text-gray-500">UQAT</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                IA avancée&nbsp;: automatisations, agents et recherche augmentée
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Formation continue via le Service de formation continue de l&apos;UQAT. 1 séance de 3&nbsp;heures.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="h-4 w-4 shrink-0 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  26 mars 2026
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="h-4 w-4 shrink-0 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  En ligne &middot; 3h
                </div>
              </div>
              <a
                href="https://offrefc.uqat.ca/Web/MyCatalog/ViewP?pid=P0xJnLxSS9G0QJ3vD7yArw%3d%3d&id=nxWaX25uSsXn4DNkieLIww%3d%3d"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg border border-orange-brand/30 px-6 py-2.5 text-sm font-semibold text-orange-brand transition-colors hover:bg-orange-brand hover:text-white"
              >
                S&apos;inscrire via l&apos;UQAT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======== CLIENTS ======== */}
      <section className="border-t border-white/5 bg-blue-dark px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-gray-500">
            Ils nous font confiance
          </p>
          <div className="grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[
              { src: "/clients/agnico-eagle.png", alt: "Agnico Eagle" },
              { src: "/clients/desjardins.png", alt: "Desjardins" },
              { src: "/clients/cegep-at.png", alt: "Cégep Abitibi-Témiscamingue" },
              { src: "/clients/ville-la-sarre.png", alt: "Ville de La Sarre" },
              { src: "/clients/cld-rouyn-noranda.png", alt: "CLD Rouyn-Noranda" },
              { src: "/clients/ccirn.png", alt: "CCIRN" },
              { src: "/clients/groupement-forestier.png", alt: "Groupement forestier coopératif" },
              { src: "/clients/adria-power.png", alt: "Adria Power Systems" },
              { src: "/clients/sdem.png", alt: "SDÉM Malartic" },
              { src: "/clients/sdbj.png", alt: "Société de développement de la Baie-James" },
              { src: "/clients/chambre-commerce-valdor.png", alt: "Chambre de commerce de Val-d'Or" },
              { src: "/clients/chambre-commerce-amos.png", alt: "Chambre de commerce d'Amos-Harricana" },
              { src: "/clients/upa.png", alt: "UPA Abitibi-Témiscamingue" },
              { src: "/clients/css-harricana.png", alt: "CSS Harricana" },
              { src: "/clients/css-lac-abitibi.png", alt: "CSS du Lac-Abitibi" },
              { src: "/clients/cld-abitibi.png", alt: "CLD Abitibi" },
              { src: "/clients/crcatnq.png", alt: "CRCATNQ" },
              { src: "/clients/acee.png", alt: "ACEE du Québec" },
              { src: "/clients/action-reussite.png", alt: "Action Réussite" },
              { src: "/clients/place-aux-jeunes.png", alt: "Place aux jeunes en région" },
              { src: "/clients/miiro.png", alt: "Miiro" },
              { src: "/clients/miniere.png", alt: "Minière" },
              { src: "/clients/reseau-libre-savoir.png", alt: "Réseau Libre Savoir" },
            ].map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 max-w-[160px] object-contain opacity-60 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== DEUX EXPERTISES ======== */}
      <section id="services" className="bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Facilitation */}
            <Link
              href="/services#facilitation"
              className="group rounded-2xl border border-white/5 bg-blue-dark-light p-8 transition-all hover:border-white/10 md:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-brand/10">
                <svg className="h-7 w-7 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-orange-brand transition-colors">
                Facilitation stratégique
              </h2>
              <p className="mt-2 text-sm font-medium text-orange-brand/80">
                L&apos;intelligence collective au service de vos décisions
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                Vos défis sont complexes. Les réponses sont rarement dans la tête d&apos;une seule personne. On crée les conditions pour que votre équipe réfléchisse mieux, ensemble — et passe à l&apos;action.
              </p>
              <ul className="mt-6 space-y-2">
                {["Planification stratégique", "Alignement d'équipe", "Design Sprint", "Résolution de problèmes"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-orange-brand group-hover:underline">
                En savoir plus &rarr;
              </p>
            </Link>

            {/* Formations IA */}
            <Link
              href="/services#formations-ia"
              className="group rounded-2xl border border-white/5 bg-blue-dark-light p-8 transition-all hover:border-white/10 md:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-brand/10">
                <svg className="h-7 w-7 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0l-3.5-3.5M5 14.5l3.5-3.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-orange-brand transition-colors">
                Formations en intelligence artificielle
              </h2>
              <p className="mt-2 text-sm font-medium text-orange-brand/80">
                Travailler mieux. Se concentrer sur ce qui compte.
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                L&apos;IA ne remplace pas les humains — elle amplifie ce qu&apos;ils font de mieux. Nos formations pratiques permettent à vos équipes de gagner du temps sur les tâches répétitives pour se concentrer sur la réflexion, la créativité et les relations.
              </p>
              <ul className="mt-6 space-y-2">
                {["Formations en entreprise (sur mesure)", "Ateliers pratiques", "Conférences", "Consultation stratégique IA"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-orange-brand group-hover:underline">
                En savoir plus &rarr;
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ======== PROMO FORMATION EN LIGNE ======== */}
      <section className="relative overflow-hidden border-y border-orange-brand/20 bg-gradient-to-r from-blue-dark via-blue-dark-light to-blue-dark px-6 py-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-orange-brand/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-5">
            {/* Video preview */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-orange-brand/10">
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

            {/* Text */}
            <div className="lg:col-span-3">
              <span className="inline-block rounded-full bg-orange-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-brand">
                Nouveau — Formation en ligne
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Maîtriser l&apos;IA générative
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-gray-300">
                +4&nbsp;heures de formation asynchrone pour comprendre les LLMs, découvrir les meilleurs outils et adopter des cadres de travail professionnels et éthiques. Écoutez quand ça vous chante, à votre rythme&nbsp;!
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-brand" />
                  100% en ligne
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-brand" />
                  À votre rythme
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-brand" />
                  Accès illimité
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/formation-ia"
                  className="rounded-lg bg-orange-brand px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
                >
                  En savoir plus
                </Link>
                <a
                  href="https://xceptio.miiro.ca/formations/625-initiation-a-l-ia-generative-au-travail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  Accéder directement
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== APPROCHE ======== */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Une approche simple et éprouvée
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {approach.map((step) => (
              <div key={step.num} className="relative">
                <span className="absolute -top-6 left-0 text-7xl font-extrabold text-orange-brand/10">
                  {step.num}
                </span>
                <div className="relative pt-8">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== MÉTHODES ÉPROUVÉES (aperçu) ======== */}
      <section className="bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-orange-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-brand">
              Méthodologies
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Des méthodes éprouvées
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Chaque intervention s&apos;appuie sur des cadres reconnus en facilitation et en intelligence artificielle.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                nom: "Design Thinking",
                categorie: "Facilitation",
                description: "Approche centrée sur l\u2019humain en 5 étapes pour résoudre des problèmes complexes.",
                icone: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
              },
              {
                nom: "Design Sprint",
                categorie: "Facilitation",
                description: "5 jours pour passer de l\u2019idée au prototype testé avec de vrais utilisateurs.",
                icone: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                nom: "Liberating Structures",
                categorie: "Facilitation",
                description: "33 microstructures pour libérer la participation et l\u2019intelligence de tous.",
                icone: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
              {
                nom: "Prompt Engineering",
                categorie: "IA",
                description: "Cadres structurés pour communiquer efficacement avec les grands modèles de langage.",
                icone: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
              },
            ].map((outil) => (
              <div
                key={outil.nom}
                className="rounded-2xl border border-white/5 bg-blue-dark-light p-6 transition-all hover:border-white/10"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10 text-orange-brand">
                    {outil.icone}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      outil.categorie === "IA"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-orange-brand/10 text-orange-brand"
                    }`}
                  >
                    {outil.categorie}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{outil.nom}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {outil.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/outils"
              className="inline-block text-sm font-semibold text-orange-brand transition-colors hover:text-orange-brand-hover"
            >
              Voir tous nos outils &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ======== TÉMOIGNAGES ======== */}
      <section className="bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ce qu&apos;ils en disent
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-blue-dark-light p-8"
              >
                <span className="text-5xl font-bold leading-none text-orange-brand/30">&ldquo;</span>
                <p className="mt-2 leading-relaxed text-gray-300">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== QUI SOMMES-NOUS (aperçu) ======== */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <div className="relative h-80 md:h-[400px]">
                <Image
                  src="/1763220275543.jpeg"
                  alt="Sébastien Bélisle en action — facilitation d'un atelier collaboratif"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-brand">
                Qui sommes-nous
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Sébastien Bélisle
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Co-fondateur, facilitateur et formateur
              </p>
              <p className="mt-6 leading-relaxed text-gray-300">
                Après 25 ans à diriger un organisme communautaire et 12 ans à enseigner le leadership stratégique à l&apos;université, j&apos;ai co-fondé Kodra pour aider les équipes à résoudre des problèmes complexes en misant sur ce qu&apos;elles ont de plus puissant&nbsp;: leur intelligence collective. Depuis 2024, j&apos;ai aussi formé plus de 1&nbsp;000 personnes à utiliser l&apos;IA de manière concrète et responsable.
              </p>
              <Link
                href="/a-propos"
                className="mt-6 inline-block text-sm font-semibold text-orange-brand transition-colors hover:text-orange-brand-hover"
              >
                En savoir plus sur l&apos;équipe &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== INFOLETTRE ======== */}
      <section className="bg-blue-dark px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Humains augmentés — l&apos;infolettre
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Chaque semaine, des réflexions pratiques sur l&apos;IA, le leadership et l&apos;intelligence collective.
          </p>
          <a
            href="https://kodraconseil.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-orange-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
          >
            S&apos;abonner gratuitement
          </a>
        </div>
      </section>

      {/* ======== CTA FINAL ======== */}
      <section className="border-t border-orange-brand/10 bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Prêt à passer à l&apos;action&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Réservez un appel découverte gratuit de 30 minutes. On discute de vos besoins, sans engagement.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="https://www.calendly.com/sbelisle/30"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-orange-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
            >
              Planifier un appel
            </a>
            <a
              href="mailto:seb@kodra.ca"
              className="text-sm text-gray-500 transition-colors hover:text-orange-brand"
            >
              Ou écrivez-nous à seb@kodra.ca
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
