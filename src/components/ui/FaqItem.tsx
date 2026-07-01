'use client';

import { motion, AnimatePresence } from 'motion/react';

interface FaqItemProps {
  question: string;
  reponse: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({ question, reponse, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="faq-item border-b">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left py-4"
      >
        <p className="question font-semibold">{question}</p>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl ml-4 flex-shrink-0"
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
            <p className="reponse pb-2">{reponse}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}