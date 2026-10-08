import { cookies, headers } from 'next/headers';
import { CURRENCY_COOKIE, isCurrency, type Currency } from '@/lib/prices';

// Pays où l'on affiche les prix en CHF ; partout ailleurs, en EUR
const CHF_COUNTRIES = ['CH', 'LI'];

// En-têtes de géolocalisation posés par les hébergeurs / CDN courants.
// À compléter avec celui d'Infomaniak une fois identifié (voir /api/geo-debug).
const COUNTRY_HEADERS = ['cf-ipcountry', 'x-country-code', 'x-geoip-country', 'x-vercel-ip-country'];

function countryFromAcceptLanguage(value: string | null) {
  // "fr-CH,fr;q=0.9" -> "CH" : on ne retient que la langue préférée
  const region = value?.split(',')[0]?.split(';')[0]?.split('-')[1];
  return region && /^[a-z]{2}$/i.test(region) ? region.toUpperCase() : null;
}

export async function getCountry() {
  const h = await headers();
  for (const name of COUNTRY_HEADERS) {
    const country = h.get(name);
    if (country && /^[a-z]{2}$/i.test(country)) return country.toUpperCase();
  }
  return countryFromAcceptLanguage(h.get('accept-language'));
}

export async function getCurrency(): Promise<Currency> {
  const chosen = (await cookies()).get(CURRENCY_COOKIE)?.value;
  if (isCurrency(chosen)) return chosen;

  const country = await getCountry();
  // Pays inconnu : on garde le CHF, comme avant
  if (!country) return 'CHF';
  return CHF_COUNTRIES.includes(country) ? 'CHF' : 'EUR';
}
