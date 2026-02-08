import Link from "next/link";
import Image from "next/image";
import BlueprintBg from "@/components/BlueprintBg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labo",
  description:
    "Le laboratoire de Kodra Conseil. Projets web, prototypes et expérimentations.",
  alternates: { canonical: "/labo" },
  openGraph: {
    url: "https://kodra.ca/labo",
  },
};

const projects = [
  {
    slug: "/intelligence-collective",
    title: "Mobilisez l'intelligence collective",
    description:
      "Landing page pour le service phare de Kodra Conseil — facilitation, ateliers collaboratifs et formations IA pour les organisations.",
    status: "live" as const,
    tags: ["Next.js", "Landing page", "Loops"],
  },
];

const statusConfig = {
  live: {
    label: "En ligne",
    dot: "bg-emerald-400",
    bg: "bg-emerald-400/10",
    text: "text-emerald-400",
  },
  dev: {
    label: "En développement",
    dot: "bg-amber-400",
    bg: "bg-amber-400/10",
    text: "text-amber-400",
  },
  idea: {
    label: "Idée",
    dot: "bg-blue-400",
    bg: "bg-blue-400/10",
    text: "text-blue-400",
  },
};

export default function Labo() {
  return (
    <div className="relative min-h-screen bg-blue-dark">
      <BlueprintBg />
      <header className="border-b border-white/5 px-6 py-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Kodra Conseil"
                width={120}
                height={40}
                className="h-7 w-auto opacity-70"
                priority
              />
              <div className="h-6 w-px bg-white/10" />
              <span className="font-mono text-sm tracking-wide text-gray-500">
                labo
              </span>
            </div>
            <Link
              href="/"
              className="flex items-center gap-1.5 font-mono text-xs text-gray-500 transition-colors hover:text-orange-brand"
            >
              kodra.ca
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-brand animate-pulse" />
              <span className="font-mono text-xs text-gray-400">
                {projects.length} projet{projects.length > 1 ? "s" : ""}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Le labo de Kodra
            </h1>
            <p className="max-w-xl text-lg text-gray-400">
              Nos projets web, prototypes et expérimentations. Un espace pour
              construire, tester et itérer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => {
              const status = statusConfig[project.status];
              return (
                <Link
                  key={project.slug}
                  href={project.slug}
                  className="group relative rounded-2xl border border-white/5 bg-blue-dark-light p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${status.bg}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      <span className={`font-mono text-xs ${status.text}`}>{status.label}</span>
                    </div>
                    <svg className="h-4 w-4 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-white group-hover:text-orange-brand transition-colors">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-xs text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}

            <div className="flex items-center justify-center rounded-2xl border border-dashed border-white/10 p-6 min-h-[200px]">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Prochain projet</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-white/5 px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Kodra Conseil, SENC
          </p>
          <div className="flex items-center gap-4 font-mono text-xs text-gray-600">
            <Link href="/" className="transition-colors hover:text-orange-brand">
              www.kodra.ca
            </Link>
            <span className="text-white/10">|</span>
            <a href="mailto:seb@kodra.ca" className="transition-colors hover:text-orange-brand">
              seb@kodra.ca
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
