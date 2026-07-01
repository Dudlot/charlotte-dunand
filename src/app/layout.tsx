import { alphazet, calloveya } from '@/fonts';
import CookieBanner from '@/components/CookieBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import "./globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://charlotte-dunand.com'),
};

// Root layout — lang is set per-locale in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${alphazet.variable} ${calloveya.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NBLTTSXG"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
        {children}
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}