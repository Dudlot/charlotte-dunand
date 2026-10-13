'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

const STEPS = ['Brief', 'Cadrage', 'Production', 'Recette', 'Livraison'];

// Tracé de plan : un trait qui se dessine au scroll et relie les étapes
export default function MethodPath() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const draw = useTransform(() => (reduce ? 1 : scrollYProgress.get()));

  return (
    <div ref={ref} className="agences-method">
      {/* Ordinateur : trait horizontal à travers les 5 étapes, avec repères de cote */}
      <svg aria-hidden="true" viewBox="0 0 1000 24" preserveAspectRatio="none" className="agences-method-line hidden md:block">
        <path className="agences-method-guide" d="M100 12 H900 M100 4 V20 M900 4 V20" />
        <motion.path d="M100 12 H900" style={{ pathLength: draw }} />
      </svg>
      {/* Mobile : même tracé, vertical */}
      <svg aria-hidden="true" viewBox="0 0 24 100" preserveAspectRatio="none" className="agences-method-line-v md:hidden">
        <path className="agences-method-guide" d="M12 0 V100" />
        <motion.path d="M12 0 V100" style={{ pathLength: draw }} />
      </svg>

      <ol className="agences-method-steps">
        {STEPS.map((step, i) => (
          <Step key={step} label={step} index={i} draw={draw} />
        ))}
      </ol>
    </div>
  );
}

function Step({ label, index, draw }: { label: string; index: number; draw: MotionValue<number> }) {
  const at = index / (STEPS.length - 1);
  // Bornes limitées à [0, 1] : la dernière étape doit pouvoir s'allumer entièrement
  const lit = useTransform(draw, [Math.max(0, at - 0.06), Math.min(1, at + 0.02)], [0, 1]);

  return (
    <li className="agences-method-step">
      <span aria-hidden="true" className="agences-method-node">
        <motion.span style={{ scale: lit, opacity: lit }} />
      </span>
      <span className="agences-method-label">{label}</span>
    </li>
  );
}
