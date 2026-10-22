'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const MATOMO_URL = 'https://matomo.charlotte-dunand.com/';
const SITE_ID = '2';
const STORAGE_KEY = 'cookie-consent';

declare global {
  interface Window {
    _paq?: unknown[][];
  }
}

export default function Matomo() {
  const [allowed, setAllowed] = useState(false);
  const pathname = usePathname();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    const checkConsent = () => {
      try {
        setAllowed(localStorage.getItem(STORAGE_KEY) === 'accepted');
      } catch {
        setAllowed(false);
      }
    };

    checkConsent();

    window.addEventListener('cookie-consent-changed', checkConsent);
    return () => window.removeEventListener('cookie-consent-changed', checkConsent);
  }, []);

  // Navigation côté client : le script d'init ne compte que la première page vue
  useEffect(() => {
    if (!allowed) return;
    if (lastTracked.current === null) {
      lastTracked.current = pathname;
      return;
    }
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;

    const paq = (window._paq = window._paq || []);
    paq.push(['setCustomUrl', window.location.href]);
    paq.push(['setDocumentTitle', document.title]);
    paq.push(['trackPageView']);
  }, [allowed, pathname]);

  if (!allowed) return null;

  return (
    <Script id="matomo-init" strategy="afterInteractive">
      {`
        var _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u='${MATOMO_URL}';
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '${SITE_ID}']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      `}
    </Script>
  );
}
