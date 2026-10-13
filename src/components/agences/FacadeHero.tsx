'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import Header from '@/components/layout/Header';
import { useIsDesktop } from '@/components/agences/useIsDesktop';

interface FacadeHeroProps {
  title: string;
  facadeLine: string; // « Vous vendez la vitrine. »
  structureLine: string; // « Je construis ce qu'il y a derrière. »
  cta: React.ReactNode;
}

// Correspondance façade / structure : chaque tranche du site fini recouvre une brique technique
const SLICES = [
  { label: 'Structure', x: -0.38, y: -14, rotate: -6 },
  { label: 'Données', x: 0.34, y: -6, rotate: 5 },
  { label: 'Automatisations', x: -0.3, y: 6, rotate: -4 },
  { label: 'Hébergement', x: 0.36, y: 14, rotate: 6 },
];

// État figé utilisé en mouvement réduit : façade entrouverte, structure visible
const REDUCED_PROGRESS = 0.6;

export default function FacadeHero({ title, facadeLine, structureLine, cta }: FacadeHeroProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const facadeRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reduce = useReducedMotion();

  // Ordinateur : hero épinglé, la décomposition suit le scroll. Mobile : elle se joue pendant que la façade traverse l'écran
  const { scrollYProgress: desktopProgress } = useScroll({ target: outerRef, offset: ['start start', 'end end'] });
  const { scrollYProgress: mobileProgress } = useScroll({ target: facadeRef, offset: ['start 0.85', 'end 0.25'] });
  const progress = useTransform(() => {
    if (reduce) return REDUCED_PROGRESS;
    return isDesktop ? desktopProgress.get() : mobileProgress.get();
  });

  // Mouvement réduit : le trait reste sur la phrase « structure » (état final)
  const markProgress = useTransform(() => (reduce ? 1 : progress.get()));
  const facadeMark = useTransform(markProgress, [0.15, 0.45], [1, 0]);
  const structureMark = useTransform(markProgress, [0.45, 0.8], [0, 1]);

  return (
    <div ref={outerRef} className="relative lg:h-[170vh] motion-reduce:lg:h-auto">
      <div className="lg:sticky lg:top-0 lg:min-h-svh motion-reduce:lg:static flex flex-col">
        <div className="relative z-20 container mx-auto px-8">
          <Header />
        </div>

        <div className="container mx-auto px-8 flex-1 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center pt-24 pb-24 lg:pt-12 lg:pb-12">
          <div className="text-white">
            <h1 className="agences-hero-title">{title}</h1>
            <p className="agences-hero-lead">
              <span className="agences-marked">
                <motion.span aria-hidden="true" className="agences-mark" style={{ scaleY: facadeMark }} />
                {facadeLine}
              </span>{' '}
              <span className="agences-marked">
                <motion.span aria-hidden="true" className="agences-mark" style={{ scaleY: structureMark }} />
                {structureLine}
              </span>
            </p>
            {cta}
          </div>

          <div ref={facadeRef} aria-hidden="true">
            <Facade progress={progress} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Facade({ progress }: { progress: MotionValue<number> }) {
  const frameOpacity = useTransform(progress, [0, 0.35], [1, 0]);
  const blueprintOpacity = useTransform(progress, [0.05, 0.6], [0.35, 1]);
  const blueprintScale = useTransform(progress, [0, 1], [0.96, 1]);

  return (
    <div className="agences-facade relative mx-auto w-full max-w-[560px] aspect-[4/3]">
      {/* Le plan : grille, cotes et briques techniques */}
      <motion.div className="agences-blueprint absolute inset-0 rounded-2xl" style={{ opacity: blueprintOpacity, scale: blueprintScale }}>
        <div className="agences-cote" />
        <div className="absolute inset-[10%] grid grid-rows-[1fr_2fr_2fr_1fr] gap-3">
          {SLICES.map(({ label }) => (
            <div key={label} className="agences-brick">
              <span>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* La façade : un site fini, en tranches qui s'écartent */}
      <motion.div className="absolute inset-0 rounded-2xl bg-white shadow-2xl" style={{ opacity: frameOpacity }} />
      <div className="absolute inset-0 flex flex-col">
        <motion.div className="agences-chrome" style={{ opacity: frameOpacity }}>
          <i /><i /><i />
        </motion.div>
        <div className="flex-1 grid grid-rows-[1fr_2fr_2fr_1fr] gap-3 p-[6%] pt-[3%]">
          {SLICES.map((slice, i) => (
            <FacadeSlice key={slice.label} index={i} slice={slice} progress={progress} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FacadeSlice({
  index,
  slice,
  progress,
}: {
  index: number;
  slice: (typeof SLICES)[number];
  progress: MotionValue<number>;
}) {
  // Les tranches partent l'une après l'autre
  const start = 0.08 + index * 0.08;
  const local = useTransform(progress, [start, start + 0.5], [0, 1]);
  const x = useTransform(local, (v) => `${slice.x * v * 100}%`);
  const y = useTransform(local, (v) => slice.y * v);
  const rotate = useTransform(local, (v) => slice.rotate * v);
  const opacity = useTransform(local, [0, 1], [1, 0.3]);
  const scale = useTransform(local, [0, 1], [1, 0.92]);

  return (
    <motion.div className={`agences-slice agences-slice-${index}`} style={{ x, y, rotate, opacity, scale }}>
      <SliceContent index={index} />
    </motion.div>
  );
}

function SliceContent({ index }: { index: number }) {
  switch (index) {
    case 0: // navigation
      return (
        <div className="flex h-full items-center justify-between px-[5%]">
          <b className="h-[30%] w-[18%] rounded-sm bg-[var(--vin)]" />
          <div className="flex h-full items-center gap-[6%] w-[45%] justify-end">
            <b className="h-[18%] w-[22%] rounded-sm bg-[var(--froid)]" />
            <b className="h-[18%] w-[22%] rounded-sm bg-[var(--froid)]" />
            <b className="h-[38%] w-[30%] rounded-full bg-[var(--cerise)]" />
          </div>
        </div>
      );
    case 1: // bandeau
      return (
        <div className="flex h-full flex-col justify-center gap-[7%] px-[5%]">
          <b className="h-[16%] w-[78%] rounded-sm bg-[var(--vin)]" />
          <b className="h-[16%] w-[56%] rounded-sm bg-[var(--vin)]" />
          <b className="h-[8%] w-[64%] rounded-sm bg-[var(--froid)]" />
          <b className="h-[16%] w-[26%] rounded-full bg-[var(--cerise)]" />
        </div>
      );
    case 2: // cartes
      return (
        <div className="grid h-full grid-cols-3 gap-[4%] p-[4%]">
          {[0, 1, 2].map((n) => (
            <div key={n} className="flex flex-col gap-[8%] rounded-md bg-[var(--froid)] p-[8%]">
              <b className="h-[40%] w-full rounded-sm bg-white" />
              <b className="h-[10%] w-[80%] rounded-sm bg-[var(--vin)]/70" />
              <b className="h-[10%] w-[60%] rounded-sm bg-[var(--vin)]/30" />
            </div>
          ))}
        </div>
      );
    default: // pied de page
      return (
        <div className="flex h-full items-center justify-between rounded-md bg-[var(--vin)] px-[5%]">
          <b className="h-[22%] w-[20%] rounded-sm bg-white/70" />
          <b className="h-[16%] w-[34%] rounded-sm bg-white/30" />
        </div>
      );
  }
}
