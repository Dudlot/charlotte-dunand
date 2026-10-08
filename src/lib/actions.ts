'use server';

import { cookies } from 'next/headers';
import { CURRENCY_COOKIE, isCurrency } from '@/lib/prices';

export async function setCurrency(currency: string) {
  if (!isCurrency(currency)) return;
  (await cookies()).set(CURRENCY_COOKIE, currency, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/',
  });
}
