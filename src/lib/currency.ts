import path from 'node:path';
import { cookies, headers } from 'next/headers';
import maxmind, { type CountryResponse, type Reader } from 'maxmind';
import { CURRENCY_COOKIE, isCurrency, type Currency } from '@/lib/prices';

// Pays où l'on affiche les prix en CHF ; partout ailleurs, en EUR
const CHF_COUNTRIES = ['CH', 'LI'];

// En-têtes de géolocalisation posés par certains hébergeurs / CDN (Infomaniak n'en fournit pas)
const COUNTRY_HEADERS = ['cf-ipcountry', 'x-country-code', 'x-geoip-country', 'x-vercel-ip-country'];

// Base IP -> pays « DB-IP Country Lite » (CC BY 4.0), mise à jour avec `npm run update-geoip`
const GEOIP_DB = path.join(process.cwd(), 'data', 'dbip-country-lite.mmdb');

let readerPromise: Promise<Reader<CountryResponse> | null> | undefined;

function getReader() {
  readerPromise ??= maxmind.open<CountryResponse>(GEOIP_DB).catch((error) => {
    console.error('[currency] Base GeoIP introuvable :', error);
    return null;
  });
  return readerPromise;
}

async function countryFromIp(ip: string | null) {
  if (!ip || !maxmind.validate(ip)) return null;
  const reader = await getReader();
  return reader?.get(ip)?.country?.iso_code ?? null;
}

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

  // Infomaniak transmet l'IP du visiteur ; x-forwarded-for peut contenir une chaîne de proxys
  const ip = h.get('x-envoy-external-address') ?? h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
  return (await countryFromIp(ip)) ?? countryFromAcceptLanguage(h.get('accept-language'));
}

export async function getCurrency(): Promise<Currency> {
  const chosen = (await cookies()).get(CURRENCY_COOKIE)?.value;
  if (isCurrency(chosen)) return chosen;

  const country = await getCountry();
  // Pays inconnu : on garde le CHF, comme avant
  if (!country) return 'CHF';
  return CHF_COUNTRIES.includes(country) ? 'CHF' : 'EUR';
}
