import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-blue-dark px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Col 1 — Logo + description */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="Kodra Conseil"
              width={120}
              height={40}
              className="mb-4 h-7 w-auto opacity-80"
            />
            <p className="text-sm leading-relaxed text-gray-500">
              Facilitation stratégique et formations en IA — Abitibi-Témiscamingue, Québec
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "/formation-ia", label: "Formation IA" },
                { href: "/outils", label: "Outils" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="mailto:seb@kodra.ca"
                  className="transition-colors hover:text-orange-brand"
                >
                  seb@kodra.ca
                </a>
              </li>
              <li>La Sarre, Québec, Canada</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sbelisle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange-brand"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://kodraconseil.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange-brand"
                >
                  Substack
                </a>
              </li>
              <li>
                <a
                  href="https://labo.kodra.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange-brand"
                >
                  Labo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Infolettre */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Infolettre
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              Chaque semaine, des réflexions pratiques sur l&apos;IA, le leadership et l&apos;intelligence collective.
            </p>
            <a
              href="https://kodraconseil.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-orange-brand/30 px-4 py-2 text-sm font-medium text-orange-brand transition-colors hover:bg-orange-brand hover:text-white"
            >
              S&apos;abonner
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Kodra Conseil s.e.n.c. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <Link href="/mentions-legales" className="transition-colors hover:text-gray-400">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-gray-400">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
