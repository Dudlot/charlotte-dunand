'use client';

import { motion } from 'motion/react';

interface OffreItemProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  progress: number; // 0 à 1, contrôle l'apparition
  isLast?: boolean;
}

export default function OffreItem({ title, description, features, price, progress, isLast }: OffreItemProps) {
  return (
    <motion.div
      style={{
        opacity: progress,
        y: (1 - progress) * 60,
      }}
      className={`offre-item flex flex-col sm:flex-row gap-8 ${isLast ? 'pt-8' : 'border-b pb-8'}`}
    >
      <div className="flex-1">
        <h3 className="mb-4">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex-1">
        <h5>Ce qui est compris</h5>
        <ul className="mb-8 custom-list">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <p className="h4">{price}</p>
      </div>
    </motion.div>
  );
}