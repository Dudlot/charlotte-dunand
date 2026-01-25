import type { Metadata } from "next";
import { urbanist, charlotteFont } from "./config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlotte Dunand",
  description: "Architecte digitale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="fr" className={`${urbanist.variable} ${charlotteFont.variable}`}>
      <body className={`${urbanist.className} bg-gradient-to-br from-neutral-500 to-neutral-600 antialiased`}> 
        {children}
      </body>
    </html>
  );
}
