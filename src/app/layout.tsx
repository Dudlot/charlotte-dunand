import { alphazet, calloveya } from '@/fonts';
import CookieBanner from '@/components/CookieBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import "./globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://charlotte-dunand.com'),
};

// Root layout — site uniquement en français pour l'instant
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${alphazet.variable} ${calloveya.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}