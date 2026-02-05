import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kodra Conseil — Accélérez la croissance de votre entreprise",
  description:
    "Kodra Conseil accompagne les dirigeants pour transformer leur vision en résultats concrets. Stratégie, transformation digitale, performance opérationnelle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
