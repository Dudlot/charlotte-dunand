'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export type ConsentStatus = 'accepted' | 'refused' | null;

const STORAGE_KEY = 'cookie-consent';
export const OPEN_SETTINGS_EVENT = 'open-cookie-settings';

// Supprime les cookies Google Analytics (_ga, _ga_XXXX, _gid) sur le domaine courant et le domaine parent
function clearAnalyticsCookies() {
  const domain = window.location.hostname.replace(/^www\./, '');
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (/^(_ga|_gid|_gat)/.test(name)) {
      document.cookie = `${name}=; max-age=0; path=/`;
      document.cookie = `${name}=; max-age=0; path=/; domain=.${domain}`;
    }
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus;
    if (stored !== 'accepted' && stored !== 'refused') {
      setVisible(true);
    }

    // Lien « Gérer les cookies » du footer
    const open = () => setVisible(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  const handleChoice = (choice: 'accepted' | 'refused') => {
    const previous = localStorage.getItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);

    // Retrait du consentement : GTM est déjà chargé, on nettoie et on recharge pour l'arrêter
    if (previous === 'accepted' && choice === 'refused') {
      clearAnalyticsCookies();
      window.location.reload();
      return;
    }

    // Notifie le reste de l'app (pour charger GA dynamiquement sans reload)
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: choice }));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--vin)] text-white p-6 sm:p-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm max-w-2xl">
          Ce site utilise des cookies pour mesurer son audience et améliorer votre expérience.
          En cliquant sur &quot;Accepter&quot;, vous consentez à leur utilisation.{' '}
          <Link href="/legales/mentions-politiques#cookies" className="underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={() => handleChoice('refused')}
            className="px-4 py-2 border border-white rounded-lg text-sm hover:bg-white/10 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={() => handleChoice('accepted')}
            className="px-4 py-2 bg-white text-[var(--vin)] rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}