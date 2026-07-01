// src/components/GoogleAnalytics.tsx
'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const GTM_ID = 'GTM-NBLTTSXG';
const STORAGE_KEY = 'cookie-consent';

export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      setAllowed(stored === 'accepted');
    };

    checkConsent();

    window.addEventListener('cookie-consent-changed', checkConsent);
    return () => window.removeEventListener('cookie-consent-changed', checkConsent);
  }, []);

  if (!allowed) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
}