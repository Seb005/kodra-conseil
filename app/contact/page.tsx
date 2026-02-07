import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import ContactFormDark from "@/components/ContactFormDark";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kodra Conseil",
  description:
    "Contactez Kodra Conseil pour discuter de vos besoins en facilitation stratégique ou en formation IA. Appel découverte gratuit de 30 minutes.",
};

export default function Contact() {
  return (
    <>
      <SiteNavbar />

      {/* Header */}
      <section className="bg-blue-dark px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Parlons-en.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Un appel de 30 minutes, gratuit et sans engagement, pour discuter de vos besoins.
          </p>
        </div>
      </section>

      {/* Formulaire + infos */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Formulaire (3/5) */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/5 bg-blue-dark p-8">
                <ContactFormDark />
              </div>
            </div>

            {/* Infos de contact (2/5) */}
            <aside className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-white/5 bg-blue-dark p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg className="h-5 w-5 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Courriel</h3>
                <a href="mailto:seb@kodra.ca" className="mt-1 block text-sm text-orange-brand transition-colors hover:text-orange-brand-hover">
                  seb@kodra.ca
                </a>
              </div>

              <div className="rounded-2xl border border-white/5 bg-blue-dark p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg className="h-5 w-5 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Adresse</h3>
                <p className="mt-1 text-sm text-gray-400">La Sarre, Québec, Canada</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-blue-dark p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg className="h-5 w-5 text-orange-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/sbelisle/" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-orange-brand transition-colors hover:text-orange-brand-hover">
                  linkedin.com/in/sbelisle
                </a>
              </div>

              <div className="rounded-2xl border border-white/5 bg-blue-dark p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg className="h-5 w-5 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Disponibilité</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Du lundi au vendredi<br />
                  Réponse sous 48&nbsp;heures.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-brand/20 bg-blue-dark p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg className="h-5 w-5 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Réserver un appel découverte</h3>
                <p className="mt-1 text-sm text-gray-400">
                  30 minutes, gratuit et sans engagement.
                </p>
                <a
                  href="https://www.calendly.com/sbelisle/30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-lg bg-orange-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-brand-hover"
                >
                  Choisir un créneau
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
