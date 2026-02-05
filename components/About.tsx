const credentials = [
  { number: "25+", label: "ans de facilitation en entreprise" },
  { number: "13", label: "ans d'enseignement du leadership stratégique (eMBA, UQAT)" },
  { number: "12", label: "ans comme conseiller municipal" },
];

export default function About() {
  return (
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-brand">
              Qui suis-je
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-blue-dark md:text-4xl">
              Un praticien, pas un théoricien
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Je pratique la facilitation depuis 25&nbsp;ans dans mon rôle de
                dirigeant d&apos;entreprise. J&apos;ai aussi été formé par les
                meilleurs — notamment chez{" "}
                <span className="font-semibold text-blue-dark">AJ&amp;Smart</span>,
                référence mondiale en facilitation et design de workshops.
              </p>
              <p>
                Mon parcours m&apos;a emmené de la direction générale aux
                conseils d&apos;administration régionaux et nationaux, en
                passant par 12&nbsp;ans comme conseiller municipal. Depuis
                13&nbsp;ans, j&apos;enseigne le leadership stratégique aux
                étudiants du eMBA de l&apos;UQAT.
              </p>
              <p>
                Ce que tout ça m&apos;a appris&nbsp;? Que les meilleures
                solutions ne viennent jamais d&apos;une seule personne. Elles
                émergent quand on sait{" "}
                <span className="font-semibold text-blue-dark">
                  mobiliser l&apos;intelligence collective
                </span>{" "}
                — avec les bonnes méthodes, les bons outils et le bon cadre.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {credentials.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-orange-brand md:text-4xl">
                  {item.number}
                </p>
                <p className="mt-2 text-sm leading-snug text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
