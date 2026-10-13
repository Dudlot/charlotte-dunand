'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(min-width: 1024px)';

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

// Écran large (breakpoint lg de Tailwind) : sections épinglées au scroll ; sinon animations à l'entrée dans l'écran
export function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
