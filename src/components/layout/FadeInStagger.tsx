'use client';

import { motion } from 'motion/react';

interface FadeInStaggerProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

export default function FadeInStagger({
  children,
  className,
  itemClassName,
  staggerDelay = 0.15,
}: FadeInStaggerProps) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={item} className={itemClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}