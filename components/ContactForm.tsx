"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setError("Impossible d'envoyer le message. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800">
          Message envoyé !
        </h3>
        <p className="mt-2 text-green-700">
          Merci pour votre message. Nous vous répondrons dans les plus brefs
          délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-blue-dark"
        >
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-blue-dark placeholder-gray-400 transition-colors focus:border-orange-brand focus:outline-none focus:ring-2 focus:ring-orange-brand/20"
        />
      </div>

      {/* Courriel */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-blue-dark"
        >
          Adresse courriel
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@courriel.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-blue-dark placeholder-gray-400 transition-colors focus:border-orange-brand focus:outline-none focus:ring-2 focus:ring-orange-brand/20"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-blue-dark"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Comment pouvons-nous vous aider ?"
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-blue-dark placeholder-gray-400 transition-colors focus:border-orange-brand focus:outline-none focus:ring-2 focus:ring-orange-brand/20"
        />
      </div>

      {/* Erreur */}
      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Bouton */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-orange-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-orange-brand-hover disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      <p className="text-xs text-gray-400">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a
          href="/confidentialite"
          className="text-orange-brand transition-colors hover:text-orange-brand-hover"
        >
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}
