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
  "telephone": "+41783240133",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rue de Chantepoulet 10, 1201 Genève",
    "addressCountry": "CH"
  },
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