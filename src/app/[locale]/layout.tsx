import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Charlotte Dunand",
  "description": "Architecte Digitale & COO indépendante. Sites web, automatisations et systèmes sur-mesure pour les entreprises qui veulent grandir sans s'épuiser.",
  "url": "https://charlotte-dunand.com",
  "email": "contact@charlotte-dunand.com",
  "telephone": "+33626185358",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Haute-Savoie",
    "addressCountry": "FR"
  },
  "areaServed": ["Haute-Savoie", "Suisse romande"],
  "sameAs": [
    "https://www.linkedin.com/in/cdunand/",
    "https://www.instagram.com/charlotte_dunand/",
    "https://www.tiktok.com/@charlottepastelles"
  ]
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Charlotte Dunand — Architecte digitale",
  description:
    "Sites web, automatisations, design : tout ce qu'il faut pour que votre entreprise tourne sans vous épuiser.",
  // Valeurs par défaut pour le partage sur les réseaux ; titre et description repris de chaque page
  openGraph: {
    siteName: "Charlotte Dunand",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph.jpg"],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </NextIntlClientProvider>
  );
}