import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Kodra Conseil",
  description:
    "Politique de confidentialité et protection des renseignements personnels — Kodra Conseil, SENC.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SiteNavbar />
      <main className="bg-blue-dark-light px-6 py-24">
        <article className="mx-auto max-w-3xl text-gray-300 leading-relaxed">
          <h1 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
            Politique de confidentialité
          </h1>

          {/* Introduction */}
          <section className="mb-10">
            <p className="mb-3">
              Kodra Conseil, SENC (&laquo;&nbsp;nous&nbsp;&raquo;,
              &laquo;&nbsp;notre&nbsp;&raquo;) s&apos;engage à protéger les
              renseignements personnels des visiteurs de son site web
              kodra.ca. La présente politique explique quels
              renseignements nous recueillons, pourquoi nous les recueillons et
              comment nous les utilisons.
            </p>
            <p>
              Cette politique est conforme à la{" "}
              <span className="font-medium text-white">
                Loi sur la protection des renseignements personnels dans le
                secteur privé
              </span>{" "}
              (LPRPSP, L.R.Q., c. P-39.1) du Québec et à la{" "}
              <span className="font-medium text-white">Loi 25</span>{" "}
              (Loi modernisant des dispositions législatives en matière de
              protection des renseignements personnels).
            </p>
          </section>

          {/* Responsable */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Responsable de la protection des renseignements personnels
            </h2>
            <div className="rounded-xl border border-white/5 bg-blue-dark p-6">
              <p className="font-semibold text-white">
                Sébastien Bélisle
              </p>
              <p className="mt-1">Kodra Conseil, SENC</p>
              <p className="mt-1">15, rue Audet, La Sarre (Québec) J9Z 2T9</p>
              <p className="mt-2">
                <a
                  href="mailto:seb@kodra.ca"
                  className="text-orange-brand transition-colors hover:text-orange-brand-hover"
                >
                  seb@kodra.ca
                </a>
              </p>
            </div>
          </section>

          {/* Renseignements collectés */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Renseignements collectés
            </h2>
            <p className="mb-3">
              Nous recueillons uniquement les renseignements que vous nous
              fournissez volontairement. Plus précisément :
            </p>
            <div className="rounded-xl border border-white/5 bg-blue-dark p-6">
              <p className="mb-2 font-medium text-white">
                Adresse courriel
              </p>
              <p>
                Lorsque vous vous inscrivez pour recevoir notre guide gratuit ou
                notre infolettre, nous recueillons votre adresse courriel. Aucun
                autre renseignement personnel n&apos;est demandé.
              </p>
            </div>
          </section>

          {/* Finalités */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Finalités de la collecte
            </h2>
            <p className="mb-3">
              Votre adresse courriel est recueillie aux fins suivantes :
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-brand" />
                <p>
                  Vous transmettre le guide gratuit que vous avez demandé.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-brand" />
                <p>
                  Vous envoyer occasionnellement des contenus, conseils ou
                  nouvelles en lien avec nos services (intelligence collective,
                  facilitation, formation en IA).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-brand" />
                <p>
                  Répondre à vos demandes de contact, le cas échéant.
                </p>
              </div>
            </div>
          </section>

          {/* Consentement */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Consentement
            </h2>
            <p>
              En soumettant votre adresse courriel via l&apos;un de nos
              formulaires, vous consentez expressément à la collecte et à
              l&apos;utilisation de votre adresse courriel conformément à la
              présente politique. Ce consentement est libre, éclairé et donné à
              des fins spécifiques. Vous pouvez retirer votre consentement en
              tout temps en utilisant le lien de désabonnement présent dans
              chacun de nos courriels ou en nous écrivant à{" "}
              <a
                href="mailto:seb@kodra.ca"
                className="text-orange-brand transition-colors hover:text-orange-brand-hover"
              >
                seb@kodra.ca
              </a>
              .
            </p>
          </section>

          {/* Conservation */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Conservation des renseignements
            </h2>
            <p>
              Votre adresse courriel est conservée aussi longtemps que vous êtes
              inscrit à nos communications. Dès que vous vous désabonnez ou que
              vous demandez la suppression de vos données, nous détruisons votre
              adresse courriel dans un délai raisonnable n&apos;excédant pas
              30 jours.
            </p>
          </section>

          {/* Partage et sous-traitants */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Partage avec des tiers
            </h2>
            <p className="mb-3">
              Nous ne vendons ni ne louons vos renseignements personnels. Votre
              adresse courriel peut toutefois être traitée par les fournisseurs
              suivants, nécessaires au fonctionnement du site :
            </p>
            <div className="space-y-3">
              <div className="rounded-xl border border-white/5 bg-blue-dark p-4">
                <p className="font-medium text-white">Loops</p>
                <p className="mt-1 text-sm">
                  Service d&apos;envoi de courriels. Vos données peuvent être
                  hébergées aux États-Unis.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-blue-dark p-4">
                <p className="font-medium text-white">Vercel Inc.</p>
                <p className="mt-1 text-sm">
                  Hébergement du site web. Les données transitent par des
                  serveurs situés aux États-Unis.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Conformément à la Loi 25, nous vous informons que certains
              renseignements peuvent être communiqués à l&apos;extérieur du
              Québec. Nous nous assurons que ces fournisseurs offrent un niveau
              de protection adéquat.
            </p>
          </section>

          {/* Droits */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Vos droits
            </h2>
            <p className="mb-3">
              Conformément à la législation québécoise, vous disposez des droits
              suivants :
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-brand" />
                <p>
                  <span className="font-medium text-white">
                    Droit d&apos;accès :
                  </span>{" "}
                  vous pouvez demander quels renseignements nous détenons à votre
                  sujet.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-brand" />
                <p>
                  <span className="font-medium text-white">
                    Droit de rectification :
                  </span>{" "}
                  vous pouvez demander la correction de renseignements inexacts.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-brand" />
                <p>
                  <span className="font-medium text-white">
                    Droit de suppression :
                  </span>{" "}
                  vous pouvez demander la suppression de vos renseignements
                  personnels.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-brand" />
                <p>
                  <span className="font-medium text-white">
                    Droit de retrait du consentement :
                  </span>{" "}
                  vous pouvez retirer votre consentement en tout temps.
                </p>
              </div>
            </div>
            <p className="mt-4">
              Pour exercer l&apos;un de ces droits, écrivez-nous à{" "}
              <a
                href="mailto:seb@kodra.ca"
                className="text-orange-brand transition-colors hover:text-orange-brand-hover"
              >
                seb@kodra.ca
              </a>
              . Nous traiterons votre demande dans un délai de 30 jours.
            </p>
          </section>

          {/* Sécurité */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Sécurité
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité raisonnables pour
              protéger vos renseignements personnels contre l&apos;accès non
              autorisé, la divulgation, la modification ou la destruction. Le
              site utilise le protocole HTTPS pour sécuriser les échanges de
              données.
            </p>
          </section>

          {/* Témoins (cookies) */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Témoins de connexion (cookies)
            </h2>
            <p>
              Le site n&apos;utilise pas de témoins de connexion à des fins de
              suivi publicitaire ou analytique. Des témoins techniques
              strictement nécessaires au fonctionnement du site peuvent être
              utilisés par notre hébergeur (Vercel).
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Modifications de la politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique à
              tout moment. En cas de modification substantielle, un avis sera
              publié sur le site. La date de dernière mise à jour figure au bas
              de cette page.
            </p>
          </section>

          {/* Plainte */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Plainte
            </h2>
            <p>
              Si vous estimez que vos renseignements personnels n&apos;ont pas
              été traités conformément à la loi, vous pouvez déposer une plainte
              auprès de la{" "}
              <a
                href="https://www.cai.gouv.qc.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-brand transition-colors hover:text-orange-brand-hover"
              >
                Commission d&apos;accès à l&apos;information du Québec
              </a>
              .
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
