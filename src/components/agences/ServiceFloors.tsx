'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface Floor {
  number: string; // « 01 »
  title: string; // « Le développement. »
  text: string;
  upcoming?: boolean; // Établi : étage en construction
}

// Étages d'un bâtiment : chaque carte se pose sur sa dalle, se soulève au survol
export default function ServiceFloors({ floors }: { floors: Floor[] }) {
  return (
    <ol className="flex flex-col gap-10 sm:gap-12">
      {floors.map((floor, i) => (
        <FloorCard key={floor.number} floor={floor} index={i} />
      ))}
    </ol>
  );
}

function FloorCard({ floor, index }: { floor: Floor; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const reduce = useReducedMotion();
  const landed = reduce || inView;

  return (
    <li ref={ref} className={`agences-floor group ${floor.upcoming ? 'agences-floor-upcoming' : ''}`}>
      {/* Dalle : la couche du dessous, révélée quand l'étage se soulève */}
      <span aria-hidden="true" className="agences-floor-slab" />
      <motion.div
        className="agences-floor-card"
        initial={false}
        animate={landed ? { y: 0, scale: 1 } : { y: 28, scale: 0.97 }}
        transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <p aria-hidden="true" className="agences-floor-number">{floor.number}</p>
          <div className="flex-1">
            <h3 className="agences-floor-title">
              <span className="sr-only">{floor.number} · </span>
              {floor.title}
            </h3>
            <p>{floor.text}</p>
          </div>
        </div>
        {floor.upcoming && <PendingModules landed={landed} reduce={!!reduce} />}
      </motion.div>
    </li>
  );
}

// Modules prêts à brancher, qui descendent vers leurs emplacements sans s'emboîter
function PendingModules({ landed, reduce }: { landed: boolean; reduce: boolean }) {
  return (
    <div aria-hidden="true" className="agences-modules">
      {[0, 1, 2].map((n) => (
        <span key={n} className="agences-module-slot">
          <motion.span
            className="agences-module"
            initial={false}
            animate={landed ? { y: -7 } : { y: -26 }}
            transition={reduce ? { duration: 0 } : { duration: 0.9, delay: 0.5 + n * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
      ))}
    </div>
  );
}
