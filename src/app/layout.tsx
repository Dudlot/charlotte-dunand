import { alphazet, calloveya } from '@/fonts';
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}