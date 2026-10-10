'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ArticleFaqProps {
  items: { question: string; answer: React.ReactNode }[];
}

// Même comportement que la FAQ de l'accueil, mais les réponses peuvent contenir du Markdown (liens…)
export default function ArticleFaq({ items }: ArticleFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="journal-faq">
      <h2>Questions fréquentes</h2>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="faq-item border-b">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex justify-between items-center w-full text-left py-4 cursor-pointer"
            >
              <h3 className="question">{item.question}</h3>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl ml-4 flex-shrink-0"
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-4">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
