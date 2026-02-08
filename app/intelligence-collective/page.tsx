import SiteNavbar from "@/components/SiteNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobilisez l'intelligence collective",
  description:
    "Kodra Conseil accompagne les dirigeants pour transformer leur vision en résultats concrets. Stratégie, transformation digitale, performance opérationnelle.",
  alternates: { canonical: "/intelligence-collective" },
  openGraph: {
    url: "https://kodra.ca/intelligence-collective",
  },
};

export default function IntelligenceCollective() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qu'est-ce que l'intelligence collective en entreprise ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "L'intelligence collective en entreprise est la capacité d'un groupe à résoudre des problèmes et prendre des décisions meilleures que celles que pourraient prendre ses membres individuellement. Elle repose sur la diversité des perspectives, la sécurité psychologique et des processus de facilitation structurés.",
              },
            },
            {
              "@type": "Question",
              name: "Comment Kodra aide à mobiliser l'intelligence collective ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kodra utilise des méthodologies éprouvées de facilitation stratégique pour créer les conditions de l'intelligence collective : ateliers structurés, techniques de brainstorming, prise de décision collaborative et intégration de l'IA comme coéquipier. Plus de 1 000 personnes formées en Abitibi-Témiscamingue et partout au Québec.",
              },
            },
          ],
        }}
      />
      <SiteNavbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
