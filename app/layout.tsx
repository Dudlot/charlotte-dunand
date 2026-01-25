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
      <body className={`${urbanist.className} bg-neutral-500 antialiased`}> 
        {children}
      </body>
    </html>
  );
}
