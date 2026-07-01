// src/components/ui/MobileNavAccordion.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

interface SubLink {
  href: string;
  label: string;
}

interface MobileNavAccordionProps {
  label: string;
  subLinks: SubLink[];
  onLinkClick?: () => void;
}

export default function MobileNavAccordion({ label, subLinks, onLinkClick }: MobileNavAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-white inline-flex items-center gap-2"
      >
        {label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden list-none mt-2"
          >
            {subLinks.map((sub) => (
              <li key={sub.href} className="py-2">
                <Link
                  href={sub.href}
                  onClick={onLinkClick}
                  className="text-base text-white/80"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}