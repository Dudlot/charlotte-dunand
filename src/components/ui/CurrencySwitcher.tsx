'use client';

import { useTransition } from 'react';
import { setCurrency } from '@/lib/actions';
import type { Currency } from '@/lib/prices';

const OPTIONS: { value: Currency; label: string }[] = [
  { value: 'CHF', label: 'CHF' },
  { value: 'EUR', label: '€' },
];

export default function CurrencySwitcher({ current }: { current: Currency }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className={`flex items-center gap-2 ${isPending ? 'opacity-50' : ''}`}>
      <span>Devise :</span>
      {OPTIONS.map((option, i) => (
        <span key={option.value} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => startTransition(() => setCurrency(option.value))}
            disabled={isPending || option.value === current}
            aria-pressed={option.value === current}
            className={option.value === current ? 'font-semibold' : 'underline cursor-pointer'}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}
