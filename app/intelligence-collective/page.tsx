import SiteNavbar from "@/components/SiteNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobilisez l'intelligence collective — Kodra Conseil",
  description:
    "Kodra Conseil accompagne les dirigeants pour transformer leur vision en résultats concrets. Stratégie, transformation digitale, performance opérationnelle.",
};

export default function IntelligenceCollective() {
  return (
    <>
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
