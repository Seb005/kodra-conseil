"use client";

import { useState, type FormEvent } from "react";

export default function ContactFormDark() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [sujet, setSujet] = useState("");
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
        body: JSON.stringify({ name, email, message: `[${sujet || "Autre"}] [Org: ${organisation}]\n\n${message}` }),
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
      <div className="rounded-2xl border border-orange-brand/20 bg-orange-brand/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-brand/10">
          <svg className="h-6 w-6 text-orange-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white">Message envoyé&nbsp;!</h3>
        <p className="mt-2 text-gray-400">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-orange-brand focus:outline-none focus:ring-1 focus:ring-orange-brand";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
          Adresse courriel
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@courriel.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="organisation" className="mb-2 block text-sm font-medium text-gray-300">
          Organisation
        </label>
        <input
          type="text"
          id="organisation"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
          placeholder="Nom de votre organisation"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="sujet" className="mb-2 block text-sm font-medium text-gray-300">
          Sujet
        </label>
        <select
          id="sujet"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="" className="bg-blue-dark">Sélectionner un sujet</option>
          <option value="Facilitation" className="bg-blue-dark">Facilitation stratégique</option>
          <option value="Formation IA" className="bg-blue-dark">Formation en IA</option>
          <option value="Autre" className="bg-blue-dark">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Comment pouvons-nous vous aider ?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-orange-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-orange-brand-hover disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      <p className="text-xs text-gray-500">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/confidentialite" className="text-orange-brand transition-colors hover:text-orange-brand-hover">
          politique de confidentialité
        </a>.
      </p>
    </form>
  );
}
