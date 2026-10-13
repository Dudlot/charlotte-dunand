'use client';

import { OPEN_SETTINGS_EVENT } from '@/components/CookieBanner';

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className="cursor-pointer inline-block py-1"
    >
      Gérer les cookies
    </button>
  );
}
