import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import MurmurationBg from "@/components/MurmurationBg";

export const metadata = {
  title: "Test Murmuration — Kodra Conseil",
  robots: "noindex, nofollow",
};

export default function TestMurmuration() {
  return (
    <>
      <SiteNavbar />

      {/* ======== HERO WITH MURMURATION ======== */}
      <section className="relative overflow-hidden bg-blue-dark px-6 py-24 md:py-36">
        {/* Murmuration animated background */}
        <MurmurationBg />

        {/* Subtle radial glow behind text for readability */}
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
            Facilitation stratégique et formations en IA pour les organisations
            qui veulent résoudre leurs vrais problèmes — ensemble.
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

      {/* Placeholder section to show contrast */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Page de test — animation murmuration
          </h2>
          <p className="mt-4 text-gray-400">
            Cette page est un prototype pour tester l&apos;animation de
            murmuration des étourneaux en arrière-plan du hero. Elle ne sera pas
            indexée par les moteurs de recherche.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
