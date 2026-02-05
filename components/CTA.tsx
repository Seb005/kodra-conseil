"use client";

import { useState, FormEvent } from "react";

export default function CTA() {
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
    <section id="cta" className="bg-blue-dark px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Recevez mon guide <span className="text-orange-brand">gratuit</span>
        </h2>
        <p className="mt-4 text-gray-300">
          Comment mobiliser l&apos;intelligence collective de votre équipe pour
          résoudre des problèmes complexes — un guide actionnable tiré de
          25&nbsp;ans de pratique en facilitation et en leadership.
        </p>

        <div className="mt-10">
          {submitted ? (
            <p className="rounded-lg bg-orange-brand/10 px-6 py-4 text-orange-brand font-medium">
              Merci&nbsp;! Vous recevrez le guide sous peu.
            </p>
          ) : (
            <>
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
                  {loading ? "..." : "Recevoir le guide"}
                </button>
              </form>
              {error && (
                <p className="mt-3 text-sm text-red-400">{error}</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
