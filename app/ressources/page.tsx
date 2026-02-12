import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ressources",
  robots: { index: false, follow: false },
};

const brandAssets = [
  { name: "Logo (fond foncé)", file: "/logo.png" },
  { name: "Logo (fond pâle)", file: "/logo-dark.png" },
  { name: "Photo profil", file: "/photo.png" },
];

const claudeSkills = [
  {
    name: "Ton de marque Kodra",
    description: "Skill pour écrire dans le ton Kodra : direct, humain, stratégique.",
    file: "/ressources/skill-ton-kodra.md",
  },
];

const documents = [
  {
    name: "Guide — Intelligence collective",
    description: "Guide PDF pour mobiliser l'intelligence collective.",
    href: "/guide",
  },
];

export default function RessourcesPage() {
  return (
    <main className="min-h-screen bg-blue-dark text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-orange-brand text-sm font-semibold tracking-widest uppercase mb-4">
          Accès privé
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Ressources
        </h1>
        <p className="text-gray-400 mb-12">
          Fichiers de marque, skills Claude et documents utiles.
        </p>

        {/* Brand assets */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-orange-brand text-sm font-bold flex items-center justify-center">
              1
            </span>
            Brand
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {brandAssets.map((asset) => (
              <a
                key={asset.file}
                href={asset.file}
                download
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-4 transition-colors"
              >
                <Image
                  src={asset.file}
                  alt={asset.name}
                  width={120}
                  height={40}
                  className="object-contain h-10"
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {asset.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Claude skills */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-orange-brand text-sm font-bold flex items-center justify-center">
              2
            </span>
            Skills Claude
          </h2>
          <div className="space-y-3">
            {claudeSkills.map((skill) => (
              <a
                key={skill.file}
                href={skill.file}
                download
                className="group block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-colors"
              >
                <p className="font-semibold group-hover:text-orange-brand transition-colors">
                  {skill.name}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {skill.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-orange-brand text-sm font-bold flex items-center justify-center">
              3
            </span>
            Documents
          </h2>
          <div className="space-y-3">
            {documents.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                className="group block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-colors"
              >
                <p className="font-semibold group-hover:text-orange-brand transition-colors">
                  {doc.name}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {doc.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <p className="text-gray-600 text-xs text-center mt-16">
          Cette page n&apos;est pas indexée et n&apos;apparaît pas dans la navigation.
        </p>
      </div>
    </main>
  );
}
