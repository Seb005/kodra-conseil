import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://kodra.ca";
const siteName = "Kodra Conseil";
const defaultTitle = "Kodra Conseil | Facilitation stratégique et formations IA — Abitibi-Témiscamingue";
const defaultDescription =
  "Kodra accompagne les organisations en facilitation stratégique et formations en intelligence artificielle. Basé en Abitibi-Témiscamingue, Québec. Plus de 1 000 personnes formées.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Kodra Conseil — Facilitation stratégique et formations IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og_image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": ["ProfessionalService", "LocalBusiness"],
            "@id": "https://kodra.ca/#organization",
            name: "Kodra Conseil",
            url: "https://kodra.ca",
            logo: "https://kodra.ca/logo.png",
            image: "https://kodra.ca/og_image.png",
            description: defaultDescription,
            email: "seb@kodra.ca",
            address: {
              "@type": "PostalAddress",
              addressLocality: "La Sarre",
              addressRegion: "QC",
              addressCountry: "CA",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Abitibi-Témiscamingue" },
              { "@type": "AdministrativeArea", name: "Québec" },
              { "@type": "Country", name: "Canada" },
            ],
            knowsAbout: [
              "Facilitation stratégique",
              "Formation en intelligence artificielle",
              "Intelligence collective",
              "Strategic facilitation",
              "AI training",
              "Collective intelligence",
            ],
            founder: {
              "@type": "Person",
              name: "Sébastien Bélisle",
              jobTitle: "Fondateur et facilitateur",
              url: "https://www.linkedin.com/in/sbelisle/",
            },
            sameAs: [
              "https://www.linkedin.com/in/sbelisle/",
              "https://kodraconseil.substack.com",
              "https://labo.kodra.ca",
            ],
          }}
        />
        {children}
      </body>
    </html>
  );
}
