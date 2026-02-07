import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide — Mobiliser l'intelligence collective | Kodra Conseil",
  description:
    "5 leviers pour résoudre des problèmes complexes avec votre équipe. Guide gratuit par Seb Bélisle, Kodra Conseil.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guide — Mobiliser l'intelligence collective | Kodra Conseil",
    description:
      "5 leviers pour résoudre des problèmes complexes avec votre équipe. Guide gratuit par Seb Bélisle, Kodra Conseil.",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
