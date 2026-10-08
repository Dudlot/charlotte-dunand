// TEMPORAIRE : sert à identifier l'en-tête pays fourni par Infomaniak. À supprimer ensuite.
import { headers } from 'next/headers';
import { getCountry, getCurrency } from '@/lib/currency';

export async function GET() {
  const h = await headers();
  const all = [...h.keys()].sort();
  const geo = Object.fromEntries(
    all.filter((name) => /country|geo|region|city|cf-|forwarded|real-ip/i.test(name)).map((name) => [name, h.get(name)]),
  );

  return Response.json({
    detectedCountry: await getCountry(),
    currency: await getCurrency(),
    acceptLanguage: h.get('accept-language'),
    geoHeaders: geo,
    allHeaderNames: all,
  });
}
