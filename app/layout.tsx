import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kodra Conseil | Facilitation stratégique et formations IA — Abitibi-Témiscamingue",
  description:
    "Kodra accompagne les organisations en facilitation stratégique et formations en intelligence artificielle. Basé en Abitibi-Témiscamingue, Québec. Plus de 1 000 personnes formées.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RE43BML4L2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RE43BML4L2');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-blue-dark text-white">
        {children}
      </body>
    </html>
  );
}
