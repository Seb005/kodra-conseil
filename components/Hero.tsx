"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-blue-dark px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-brand">
            Facilitation &middot; Leadership &middot; Intelligence collective
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Mobilisez l&apos;intelligence collective
            <br />
            <span className="text-orange-brand">de votre équipe</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            J&apos;aide les leaders à trouver des solutions créatives à des
            problèmes complexes — en utilisant la facilitation, le leadership
            stratégique et les meilleurs outils disponibles, dont l&apos;IA.
          </p>

          <div className="mt-10 max-w-md">
            {submitted ? (
              <p className="rounded-lg bg-orange-brand/10 px-6 py-4 font-medium text-orange-brand">
                Merci&nbsp;! Vous recevrez le guide sous peu.
              </p>
            ) : (
              <>
                <p className="mb-4 text-sm text-gray-400">
                  Recevez mon guide gratuit&nbsp;: «&nbsp;Mobiliser
                  l&apos;intelligence collective de votre équipe&nbsp;»
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-brand focus:ring-1 focus:ring-orange-brand"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-lg bg-orange-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-brand-hover disabled:opacity-50"
                  >
                    {loading ? "..." : "Télécharger"}
                  </button>
                </form>
                {error && (
                  <p className="mt-3 text-sm text-red-400">{error}</p>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-80 w-80 overflow-hidden rounded-2xl md:h-96 md:w-96">
            <Image
              src="/photo.png"
              alt="Seb Bélisle — Kodra Conseil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
