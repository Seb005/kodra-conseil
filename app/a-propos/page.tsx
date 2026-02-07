import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "À propos | L'équipe Kodra Conseil",
  description:
    "25 ans d'expérience en gestion et leadership. Plus de 1 000 personnes formées en IA. Découvrez l'équipe derrière Kodra Conseil.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos | L'équipe Kodra Conseil",
    description:
      "25 ans d'expérience en gestion et leadership. Plus de 1 000 personnes formées en IA. Découvrez l'équipe derrière Kodra Conseil.",
  },
};

export default function APropos() {
  return (
    <>
      <SiteNavbar />

      {/* Header */}
      <section className="bg-blue-dark px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            L&apos;intelligence collective, amplifiée.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Kodra est née d&apos;une conviction&nbsp;: les meilleures solutions émergent quand on réunit les bonnes personnes, avec les bonnes méthodes et les bons outils.
          </p>
        </div>
      </section>

      {/* Philosophie */}
      <section className="bg-blue-dark-light px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Ce qu&apos;on croit</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              On croit que les équipes portent en elles la majorité des réponses à leurs défis. Notre rôle n&apos;est pas d&apos;arriver avec des solutions toutes faites, mais de créer les conditions pour que l&apos;intelligence collective s&apos;exprime pleinement.
            </p>
            <p>
              On croit aussi que l&apos;intelligence artificielle est un amplificateur, pas un remplaçant. Bien utilisée, elle libère du temps pour ce qui ne peut pas être automatisé&nbsp;: la réflexion profonde, la créativité, les relations humaines.
            </p>
            <p>
              C&apos;est cette double conviction — la puissance du collectif et le potentiel de l&apos;IA — qui est au c&oelig;ur de tout ce qu&apos;on fait chez Kodra.
            </p>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-blue-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">
            L&apos;équipe
          </h2>

          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative h-96 w-80 overflow-hidden rounded-2xl md:h-[480px] md:w-96">
                <Image
                  src="/photo.png"
                  alt="Sébastien Bélisle — Kodra Conseil"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-2xl font-bold text-white">Sébastien Bélisle</h3>
              <p className="mt-1 text-sm font-medium text-orange-brand">
                Co-fondateur | Facilitateur | Formateur en IA
              </p>

              <div className="mt-6 space-y-4 leading-relaxed text-gray-300">
                <p>
                  Sébastien cumule 25 ans d&apos;expérience comme directeur général d&apos;un organisme communautaire en Abitibi-Témiscamingue et 12 ans comme chargé de cours en leadership stratégique au MBA exécutif de l&apos;UQAT.
                </p>
                <p>
                  Passionné par l&apos;intelligence collective et les approches systémiques, il a accompagné des dizaines d&apos;organisations dans leur planification stratégique, leur gestion du changement et leur résolution de problèmes complexes.
                </p>
                <p>
                  Depuis 2024, il a formé plus de 1&nbsp;000 personnes à l&apos;utilisation pratique de l&apos;IA en milieu de travail. Il publie chaque semaine l&apos;infolettre «&nbsp;Humains augmentés&nbsp;» sur Substack.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sbelisle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/20 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://kodraconseil.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/20 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                  Substack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-dark-light px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Envie de collaborer&nbsp;?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-orange-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-brand-hover"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
