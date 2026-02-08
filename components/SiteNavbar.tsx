"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/services", label: "Services" },
  { href: "/formation-ia", label: "Formation IA", highlight: true },
  { href: "/outils", label: "Outils" },
  { href: "https://kodraconseil.substack.com", label: "Substack", external: true },
  { href: "/contact", label: "Contact" },
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string, highlight?: boolean) =>
    `text-sm transition-colors ${
      isActive(href)
        ? "text-orange-brand font-semibold"
        : highlight
          ? "text-white font-semibold hover:text-orange-brand"
          : "text-gray-400 hover:text-white"
    }`;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-blue-dark/98 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-blue-dark/95 border-b border-white/5"
      }`}
    >
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
                className={linkClass(link.href, link.highlight)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(link.href, link.highlight)}
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

      {/* Mobile menu — always in DOM, animated */}
      <div
        className={`overflow-hidden border-t bg-blue-dark transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          open
            ? "max-h-[500px] opacity-100 border-white/5"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={linkClass(link.href, link.highlight)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={linkClass(link.href, link.highlight)}
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
      </div>
    </nav>
  );
}
