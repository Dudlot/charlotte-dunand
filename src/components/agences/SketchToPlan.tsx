'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

// Croquis à main levée (traits irréguliers) qui se redresse lentement en plan net : volontairement discret
const SKETCH =
  'M42 118 C60 117 140 121 158 119 M44 118 C43 96 46 70 43 62 M157 120 C159 98 155 76 158 61 M40 63 C70 40 88 27 101 21 C118 33 138 47 161 62 M86 119 C85 106 88 96 86 88 C94 87 104 89 112 88 C113 99 111 110 113 120 M56 74 C64 75 74 73 79 75 C80 81 78 87 80 92 C72 91 63 93 57 91 C56 85 58 79 56 74 M121 74 C128 73 138 76 144 74 C145 81 143 86 145 92 C138 93 128 90 122 92 C121 86 123 80 121 74';
const PLAN =
  'M42 120 H158 M42 120 V62 M158 120 V62 M42 62 L100 22 L158 62 M86 120 V88 H114 V120 M56 74 H80 V92 H56 Z M120 74 H144 V92 H120 Z';

export default function SketchToPlan() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Parcours long (toute la traversée de l'écran) pour une transformation lente
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const progress = useTransform(() => (reduce ? 1 : scrollYProgress.get()));
  const plan = useTransform(progress, [0.25, 0.75], [0, 1]);
  const sketch = useTransform(progress, [0.3, 0.8], [0.9, 0.25]);

  return (
    <div ref={ref} aria-hidden="true" className="agences-sketch">
      <svg viewBox="0 0 200 140">
        <motion.path className="agences-sketch-hand" d={SKETCH} style={{ opacity: sketch }} />
        <motion.path className="agences-sketch-plan" d={PLAN} style={{ pathLength: plan }} />
      </svg>
    </div>
  );
}
