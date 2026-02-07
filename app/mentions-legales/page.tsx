import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Kodra Conseil",
  description:
    "Mentions légales du site kodra.ca — Kodra Conseil, SENC.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: "Mentions légales — Kodra Conseil",
    description:
      "Mentions légales du site kodra.ca — Kodra Conseil, SENC.",
  },
};

export default function MentionsLegales() {
  return (
    <>
      <SiteNavbar />
      <main className="bg-blue-dark-light px-6 py-24">
        <article className="mx-auto max-w-3xl text-gray-300 leading-relaxed">
          <h1 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
            Mentions légales
          </h1>

          {/* Éditeur du site */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Éditeur du site
            </h2>
            <p className="mb-2">
              Le site{" "}
              <span className="font-medium text-white">
                kodra.ca
              </span>{" "}
              est édité par :
            </p>
            <div className="mt-4 rounded-xl border border-white/5 bg-blue-dark p-6">
              <p className="font-semibold text-white">
                Kodra Conseil, SENC
              </p>
              <p className="mt-1">
                Société en nom collectif immatriculée au Registraire des
                entreprises du Québec
              </p>
              <p className="mt-1">
                <span className="font-medium">NEQ :</span> 3376765312
              </p>
              <p className="mt-3">15, rue Audet</p>
              <p>La Sarre (Québec) J9Z 2T9</p>
              <p>Canada</p>
              <p className="mt-3">
                <span className="font-medium">Courriel :</span>{" "}
                <a
                  href="mailto:seb@kodra.ca"
                  className="text-orange-brand transition-colors hover:text-orange-brand-hover"
                >
                  seb@kodra.ca
                </a>
              </p>
            </div>
          </section>

          {/* Associés */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Associés
            </h2>
            <p>
              Les associés de Kodra Conseil, SENC sont Sébastien Bélisle,
              Samsara Bélisle et Kilian Bélisle.
            </p>
          </section>

          {/* Hébergement */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Hébergement
            </h2>
            <p>Le site est hébergé par :</p>
            <div className="mt-4 rounded-xl border border-white/5 bg-blue-dark p-6">
              <p className="font-semibold text-white">Vercel Inc.</p>
              <p className="mt-1">440 N Baxter St, Suite 4060</p>
              <p>Coos Bay, OR 97420</p>
              <p>États-Unis</p>
              <p className="mt-2">
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-brand transition-colors hover:text-orange-brand-hover"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Propriété intellectuelle
            </h2>
            <p className="mb-3">
              L&apos;ensemble des contenus présents sur le site kodra.ca
              — textes, images, graphismes, logos, icônes, vidéos et leur mise
              en forme — sont la propriété exclusive de Kodra Conseil, SENC ou
              de ses partenaires, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit le
              moyen ou le procédé utilisé, est interdite sans l&apos;autorisation
              écrite préalable de Kodra Conseil, SENC.
            </p>
          </section>

          {/* Limitation de responsabilité */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Limitation de responsabilité
            </h2>
            <p className="mb-3">
              Kodra Conseil, SENC s&apos;efforce de fournir sur le site des
              informations aussi précises que possible. Toutefois, elle ne pourra
              être tenue responsable des omissions, des inexactitudes ou des
              carences dans la mise à jour, qu&apos;elles soient de son fait ou
              du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Les informations présentes sur le site sont fournies à titre
              indicatif et ne sauraient constituer un conseil juridique,
              financier ou professionnel.
            </p>
          </section>

          {/* Liens hypertextes */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Liens hypertextes
            </h2>
            <p>
              Le site peut contenir des liens vers d&apos;autres sites web.
              Kodra Conseil, SENC n&apos;exerce aucun contrôle sur ces sites et
              décline toute responsabilité quant à leur contenu. La présence de
              ces liens ne constitue pas une approbation de leur contenu.
            </p>
          </section>

          {/* Droit applicable */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par les lois de la
              province de Québec et les lois du Canada applicables. Tout litige
              sera soumis à la compétence exclusive des tribunaux du district
              judiciaire d&apos;Abitibi.
            </p>
          </section>

          {/* Date de mise à jour */}
          <p className="mt-12 text-sm text-gray-400">
            Dernière mise à jour : février 2026
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
