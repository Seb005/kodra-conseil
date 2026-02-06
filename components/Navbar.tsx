"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-dark border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/intelligence-collective">
          <Image
            src="/logo.png"
            alt="Kodra Conseil"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
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
