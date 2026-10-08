'use client';

import { OPEN_SETTINGS_EVENT } from '@/components/CookieBanner';

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className="cursor-pointer"
    >
      Gérer les cookies
    </button>
  );
}
