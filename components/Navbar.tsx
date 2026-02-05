"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-dark border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Kodra <span className="text-orange-brand">Conseil</span>
        </a>
        <a
          href="#cta"
          className="rounded-lg bg-orange-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-brand-hover"
        >
          Télécharger le guide
        </a>
      </div>
    </nav>
  );
}
