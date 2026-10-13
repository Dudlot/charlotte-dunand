'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

const STUDIO = 'Charlotte Dunand';
const AGENCY = 'Votre agence';
const CREDIT = 'Site réalisé par';
const STEP_MS = 55;

type View = 'agence' | 'client';

// Démonstration de la marque blanche : la signature du pied de page passe de « Charlotte Dunand » à « Votre agence »
export default function WhiteLabelDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [view, setView] = useState<View>('agence');
  const [signature, setSignature] = useState(STUDIO);
  const target = view === 'client' ? AGENCY : STUDIO;

  // Première apparition à l'écran : bascule automatique vers la vue client
  useEffect(() => {
    if (!inView) return;
    const timer = window.setTimeout(() => setView('client'), 700);
    return () => window.clearTimeout(timer);
  }, [inView]);

  // Effacement lettre par lettre, puis écriture de la nouvelle signature
  useEffect(() => {
    if (signature === target) return;
    if (reduce) {
      const timer = window.setTimeout(() => setSignature(target), 0);
      return () => window.clearTimeout(timer);
    }
    const next = target.startsWith(signature) ? target.slice(0, signature.length + 1) : signature.slice(0, -1);
    const timer = window.setTimeout(() => setSignature(next), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [signature, target, reduce]);

  const isClient = view === 'client';

  return (
    <div ref={ref} className="agences-demo">
      <div aria-hidden="true" className="agences-demo-site">
        <div className="agences-chrome agences-chrome-light">
          <i /><i /><i />
        </div>
        <div className="agences-demo-nav">
          <span className="agences-demo-brand">Atelier Rivage</span>
          <span className="flex gap-2">
            <b /><b /><b />
          </span>
        </div>
        <div className="agences-demo-body">
          <b className="w-[70%]" />
          <b className="w-[52%]" />
          <b className="w-[60%] agences-demo-muted" />
          <span className="agences-demo-button" />
        </div>
        <div className="agences-demo-footer">
          <span>{CREDIT}</span>{' '}
          <span className={`agences-demo-signature ${isClient ? 'is-agency' : ''}`}>
            {signature}
            <span className="agences-demo-caret" />
          </span>
        </div>
      </div>

      <div className="agences-switch-row">
        <span className={isClient ? '' : 'is-active'}>Vue agence</span>
        <button
          type="button"
          className="agences-switch"
          aria-pressed={isClient}
          aria-label="Afficher la signature vue par le client"
          onClick={() => setView(isClient ? 'agence' : 'client')}
        >
          <span className="agences-switch-knob" />
        </button>
        <span className={isClient ? 'is-active' : ''}>Vue client</span>
      </div>

      {/* Annonce aux lecteurs d'écran : la signature finale, pas chaque lettre */}
      <p className="sr-only" aria-live="polite">
        {CREDIT} {target}
      </p>
    </div>
  );
}
