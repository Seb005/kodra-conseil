"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/formation-ia", label: "Formation IA" },
  { href: "/outils", label: "Outils" },
  { href: "/a-propos", label: "À propos" },
  { href: "https://kodraconseil.substack.com", label: "Réflexions", external: true },
  { href: "/contact", label: "Contact" },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-blue-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Kodra Conseil"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://www.calendly.com/sbelisle/30"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-orange-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-brand-hover"
          >
            Réserver un appel
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-label="Menu"
        >
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-blue-dark px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://www.calendly.com/sbelisle/30"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-orange-brand px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-brand-hover"
            >
              Réserver un appel
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
