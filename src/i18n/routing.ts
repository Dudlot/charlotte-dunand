import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Anglais désactivé tant que le site n'est pas traduit : ajouter 'en' pour le réactiver
  locales: ['fr'] as const,
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
