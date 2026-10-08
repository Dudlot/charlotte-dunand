'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <motion.div
      id="hero"
      className="relative overflow-hidden bg-[#3a1f1e] px-2 [&_a]:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/HOMEPAGE.webm" type="video/webm" />
        <source src="/videos/HOMEPAGE.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        <Header />
      </div>

      <div className="relative z-10 container mx-auto py-28">
        <motion.div
          className="flex flex-col justify-center items-center text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <Image src="/logo.svg" alt="Logo" width={200} height={55} className="mt-28" />
          <p className="mt-28">
            Sites web, automatisations, design : tout ce qu&apos;il faut pour que votre entreprise tourne sans vous épuiser.
          </p>
          <h1>Vos systèmes travaillent, <span className="text-[var(--cerise)]">vous respirez</span></h1>
          <Button href="/contact">Remplir mon brief</Button>
        </motion.div>
      </div>
    </motion.div>
  );
}