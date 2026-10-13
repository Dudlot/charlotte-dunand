'use client';

import Link from 'next/link';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

interface TrackedCtaProps {
  href: string;
  event: string; // nom de l'événement GTM (ex. cta_agences_hero)
  children: React.ReactNode;
}

const CLASS_NAME =
  'relative isolate inline-block px-6 py-3 rounded-2xl bg-transparent text-white font-medium uppercase mt-12 border border-white transition-colors duration-300 hover:text-[var(--vin)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-white before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 hover:before:scale-y-100';

// Bouton blanc du site, avec un événement GTM au clic, envoyé seulement si les cookies ont été acceptés
export default function TrackedCta({ href, event, children }: TrackedCtaProps) {
  const track = () => {
    try {
      if (localStorage.getItem('cookie-consent') === 'accepted') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event });
      }
    } catch {
      // Stockage indisponible : pas de suivi
    }
  };

  // Lien externe : nouvel onglet ; lien interne : navigation Next
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener" onClick={track} className={CLASS_NAME}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={track} className={CLASS_NAME}>
      {children}
    </Link>
  );
}
