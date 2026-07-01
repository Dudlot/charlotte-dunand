'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import ButtonCerise from '@/components/ui/ButtonCerise';

interface Offre {
  title: string;
  description: string;
  features: string[];
  price: string;
}

interface OffresSectionProps {
  heading: string;
  intro: string;
  ctaHref: string;
  ctaLabel: string;
  offres: Offre[];
}

export default function OffresSection({ heading, intro, ctaHref, ctaLabel, offres }: OffresSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const count = offres.length;

  return (
    <section id="offres">
      {/* Desktop : pinned scroll */}
      <div ref={targetRef} className="relative hidden lg:block" style={{ height: `${count * 125}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto py-36 px-8 h-full">
            <div className="flex flex-col sm:flex-row justify-between gap-8 h-full">
              <div className="flex-1">
                <h2>{heading}</h2>
                <p className="mb-4">{intro}</p>
                <ButtonCerise href={ctaHref}>{ctaLabel}</ButtonCerise>
              </div>

              <div className="flex-2 flex flex-col h-full text-sm">
                {offres.map((offre, i) => (
                  <OffreAnimatedItem
                    key={i}
                    offre={offre}
                    scrollYProgress={scrollYProgress}
                    index={i}
                    total={count}
                    isLast={i === count - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/tablette : layout normal avec fade-in */}
      <div className="container mx-auto py-36 px-8 lg:hidden">
        <div className="flex flex-col gap-8">
          <div>
            <h2>{heading}</h2>
            <p className="mb-4">{intro}</p>
            <ButtonCerise href={ctaHref}>{ctaLabel}</ButtonCerise>
          </div>

          {offres.map((offre, i) => (
            <FadeInItem
              key={i}
              className={`offre-item flex flex-col gap-8 ${i === count - 1 ? 'pt-8' : 'border-b pb-8'}`}
            >
              <OffreContent offre={offre} />
            </FadeInItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffreAnimatedItem({
  offre,
  scrollYProgress,
  index,
  total,
  isLast,
}: {
  offre: Offre;
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  isLast: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const progress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(progress, [0, 1], [60, 0]);

  return (
    <motion.div
      style={{ opacity: progress, y }}
      className={`offre-item flex-1 flex flex-col sm:flex-row gap-8 ${isLast ? 'pt-4' : 'border-b pb-4'}`}
    >
      <OffreContent offre={offre} />
    </motion.div>
  );
}

function OffreContent({ offre }: { offre: Offre }) {
  return (
    <>
      <div className="flex-1 py-4">
        <h3 className="mb-4">{offre.title}</h3>
        <p className="text-xs">{offre.description}</p>
      </div>
      <div className="flex-1 py-4">
        <h5>Ce qui est compris</h5>
        <ul className="mb-4 custom-list">
          {offre.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <p className="h4">{offre.price}</p>
      </div>
    </>
  );
}

function FadeInItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}