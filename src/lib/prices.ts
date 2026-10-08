export type Currency = 'CHF' | 'EUR';

export const CURRENCY_COOKIE = 'currency';

export function isCurrency(value: unknown): value is Currency {
  return value === 'CHF' || value === 'EUR';
}

// Grille tarifaire : prix fixés à la main, pas de conversion automatique
export const PRICES = {
  audit: { CHF: '500 chf', EUR: '490 €' },
  landing: { CHF: '1 200 chf', EUR: '1 100 €' },
  vitrine: { CHF: '3 500 chf', EUR: '3 200 €' },
  ecommerce: { CHF: '5 500 chf', EUR: '4 900 €' },
  securite: { CHF: '90 chf/mois', EUR: '85 €/mois' },
  data: { CHF: '250 chf/mois', EUR: '230 €/mois' },
} as const;

export type PriceKey = keyof typeof PRICES;

export function price(key: PriceKey, currency: Currency) {
  return PRICES[key][currency];
}
