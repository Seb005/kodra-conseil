import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Kodra Conseil",
  description:
    "Contactez Kodra Conseil pour vos besoins en facilitation, intelligence collective et formation en intelligence artificielle.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* En-tête */}
          <div className="mb-16 max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold text-blue-dark sm:text-4xl">
              Parlons de votre projet
            </h1>
            <p className="text-lg text-gray-600">
              Vous avez un défi à relever, une équipe à mobiliser ou un besoin
              en formation ? Écrivez-nous — on vous revient rapidement.
            </p>
          </div>

          {/* Grille : formulaire + infos */}
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Formulaire (3/5) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Infos de contact (2/5) */}
            <aside className="space-y-8 lg:col-span-2">
              {/* Courriel */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg
                    className="h-5 w-5 text-orange-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-dark">Courriel</h3>
                <a
                  href="mailto:seb@kodra.ca"
                  className="mt-1 block text-orange-brand transition-colors hover:text-orange-brand-hover"
                >
                  seb@kodra.ca
                </a>
              </div>

              {/* Adresse */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg
                    className="h-5 w-5 text-orange-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-dark">Adresse</h3>
                <p className="mt-1 text-gray-600">
                  15, rue Audet
                  <br />
                  La Sarre (Québec) J9Z 2T9
                  <br />
                  Canada
                </p>
              </div>

              {/* Disponibilité */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10">
                  <svg
                    className="h-5 w-5 text-orange-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-dark">Disponibilité</h3>
                <p className="mt-1 text-gray-600">
                  Du lundi au vendredi
                  <br />
                  Nous répondons habituellement sous 48&nbsp;heures.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
