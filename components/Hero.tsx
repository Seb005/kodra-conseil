"use client";

import { useState, FormEvent } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="bg-blue-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Accélérez la croissance
          <br />
          <span className="text-orange-brand">de votre entreprise</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Kodra Conseil accompagne les dirigeants et leurs équipes pour
          transformer leur vision en résultats concrets. Stratégie, digital,
          performance&nbsp;: nous sommes à vos côtés.
        </p>

        <div className="mx-auto mt-10 max-w-md">
          {submitted ? (
            <p className="rounded-lg bg-orange-brand/10 px-6 py-4 text-orange-brand font-medium">
              Merci&nbsp;! Vous recevrez le guide sous peu.
            </p>
          ) : (
            <>
              <p className="mb-4 text-sm text-gray-400">
                Recevez notre guide gratuit&nbsp;: «&nbsp;Les 5 leviers de
                croissance pour les PME&nbsp;»
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
                  className="rounded-lg bg-orange-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-brand-hover"
                >
                  Télécharger
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
