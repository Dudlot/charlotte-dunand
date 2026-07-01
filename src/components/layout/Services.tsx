'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import FadeInLeft from '@/components/layout/FadeInLeft';

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%']);

  return (
    <section id="services" className="bg-[var(--vin)] px-2">
      <div className="container mx-auto pt-36 px-8">
        <FadeInLeft>
          <h2 className="text-white mb-28">
            Construire, optimiser, faire évoluer, selon là où vous en êtes.
          </h2>
        </FadeInLeft>
      </div>

      {/* Pinned horizontal scroll zone */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-24">
          <motion.div style={{ x }} className="flex gap-8">
            {/* Item 01 */}
            <div className="service-item rounded-2xl border border-white p-10 sm:p-20 bg-white/5 w-[calc(100vw-3rem)] sm:w-[calc(100vw-6rem)] lg:w-[calc(100vw-12rem)] h-[85vh] sm:h-[70vh] flex-shrink-0 flex flex-col justify-between overflow-y-auto">
              <div className="flex justify-between text-white">
                <p className="h1">01</p>
                <div className="text-right mb-28">
                  <h3 className="text-xl sm:text-2xl">Fondations digitales</h3>
                  <h4 className="text-base sm:text-lg">Fondations digitales</h4>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-white sm:items-end items-start gap-2">
                <div className="max-w-md">
                  <p className="font-semibold text-sm sm:text-base">Un site qui convertit et qui vous ressemble.</p>
                  <p className="text-sm sm:text-base">
                    Une vitrine c&apos;est bien. Un outil commercial qui reflète votre niveau d&apos;exigence et transforme vos visiteurs en clients, c&apos;est mieux. <br />
                    Technologie, structure, nombre de pages : tout se décide en fonction de votre projet, pas l&apos;inverse.
                  </p>
                </div>
                <Link href="/fondations-digitales" className="text-link text-left sm:text-right relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Découvrir
                </Link>
              </div>
            </div>

            {/* Item 02 */}
            <div className="service-item rounded-2xl border border-white p-10 sm:p-20 bg-white/5 w-[calc(100vw-3rem)] sm:w-[calc(100vw-6rem)] lg:w-[calc(100vw-12rem)] h-[85vh] sm:h-[70vh] flex-shrink-0 flex flex-col justify-between overflow-y-auto">
              <div className="flex justify-between text-white">
                <p className="h1">02</p>
                <div className="text-right mb-28">
                  <h3 className="text-xl sm:text-2xl">Ingénierie &amp; Automatisations</h3>
                  <h4 className="text-base sm:text-lg">Ingenierie &amp; Automatisations</h4>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-white sm:items-end items-start gap-2">
                <div className="max-w-md">
                  <p className="font-semibold text-sm sm:text-base">Vos outils travaillent enfin ensemble.</p>
                  <p className="text-sm sm:text-base">
                    Vous avez les outils. Vous les utilisez. Mais chacun dans son coin et entre les deux, c&apos;est vous qui faites la jonction à la main. <br />
                    On cartographie ce que vous avez, on élimine ce qui ne sert à rien, on connecte le reste et on automatise ce qui vous prend du temps sans vous apporter de valeur.
                  </p>
                </div>
                <Link href="/ingenierie-automatisation" className="text-link text-left sm:text-right relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Découvrir
                </Link>
              </div>
            </div>

            {/* Item 03 */}
            <div className="service-item rounded-2xl border border-white p-10 sm:p-20 bg-white/5 w-[calc(100vw-3rem)] sm:w-[calc(100vw-6rem)] lg:w-[calc(100vw-12rem)] h-[85vh] sm:h-[70vh] flex-shrink-0 flex flex-col justify-between overflow-y-auto">
              <div className="flex justify-between text-white">
                <p className="h1">03</p>
                <div className="text-right mb-28">
                  <h3 className="text-xl sm:text-2xl">Suivi &amp; évolution</h3>
                  <h4 className="text-base sm:text-lg">Suivi &amp; evolution</h4>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-white sm:items-end items-start gap-2">
                <div className="max-w-md">
                  <p className="font-semibold text-sm sm:text-base">On ne vous livre pas un système, on reste.</p>
                  <p className="text-sm sm:text-base">
                    Un site lancé ou des automatisations en place, ce n&apos;est pas une fin. Votre entreprise évolue, vos besoins aussi.
                    On assure la maintenance, les mises à jour, la sécurité et quand il est temps de passer à l&apos;étape suivante, on est déjà là.
                  </p>
                </div>
                <Link href="/suivi-evolution" className="text-link text-left sm:text-right relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Découvrir
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}