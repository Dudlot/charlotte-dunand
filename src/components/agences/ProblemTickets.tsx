'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

interface Ticket {
  label: string;
  text: string;
}

interface ProblemTicketsProps {
  tickets: Ticket[];
  resolution: string; // « Je prends cette partie-là, sous votre nom. »
}

// Désordre de départ (décalages par rapport à la colonne finale) : les tickets s'empilent de travers
const MESS = [
  { x: 18, y: 70, rotate: -4 },
  { x: -14, y: 4, rotate: 3 },
  { x: 12, y: -64, rotate: -2.5 },
];

export default function ProblemTickets({ tickets, resolution }: ProblemTicketsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  // Les tickets se rangent dans la seconde moitié du parcours
  const settle = useTransform(() => (reduce ? 1 : Math.min(1, Math.max(0, (scrollYProgress.get() - 0.35) / 0.5))));
  const check = useTransform(settle, [0.85, 1], [0, 1]);

  return (
    <div ref={ref}>
      <ol className="flex flex-col gap-4">
        {tickets.map((ticket, i) => (
          <TicketCard key={ticket.label} ticket={ticket} index={i} settle={settle} />
        ))}
      </ol>
      <p className="agences-resolution">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="agences-check">
          <motion.path d="M4 12.5l5 5L20 6.5" style={{ pathLength: check }} />
        </svg>
        {resolution}
      </p>
    </div>
  );
}

function TicketCard({ ticket, index, settle }: { ticket: Ticket; index: number; settle: MotionValue<number> }) {
  const mess = MESS[index];
  const x = useTransform(settle, (v) => mess.x * (1 - v));
  const y = useTransform(settle, (v) => mess.y * (1 - v));
  const rotate = useTransform(settle, (v) => mess.rotate * (1 - v));
  // Trait cerise qui « valide » chaque ticket une fois rangé
  const done = useTransform(settle, [0.7 + index * 0.08, 0.86 + index * 0.08], [0, 1]);

  return (
    <motion.li className="agences-ticket" style={{ x, y, rotate, zIndex: 3 - index }}>
      <motion.span aria-hidden="true" className="agences-ticket-done" style={{ scaleY: done }} />
      <p className="agences-ticket-label">{ticket.label}</p>
      <p>{ticket.text}</p>
    </motion.li>
  );
}
