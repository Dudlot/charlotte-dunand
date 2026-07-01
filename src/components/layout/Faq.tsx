'use client';

import { useState } from 'react';
import FaqItem from '@/components/ui/FaqItem';

const faqData = [
  {
    question: "Dois-je avoir une idée précise de mes besoins avant de vous contacter ?",
    reponse: "Pas du tout. C'est justement pour ça que le brief existe. Vous décrivez votre situation, vos frustrations, vos objectifs et c'est à partir de là qu'on construit ensemble.",
  },
  {
    question: "Quels outils utilisez-vous ?",
    reponse: "Ceux qui correspondent à votre projet. WordPress, Webflow, n8n, Notion : je sélectionne en fonction de vos besoins et de vos objectifs, pas par habitude.",
  },
  {
    question: "Intervenez-vous uniquement sur la création de sites web ?",
    reponse: "Non. Le site web est souvent une première étape, mais mon travail va bien au-delà. Automatisations, intégrations, maintenance, j'interviens sur l'ensemble de votre écosystème digital.",
  },
  {
    question: "Quel est le budget moyen pour un accompagnement ?",
    reponse: "Chaque projet est différent. Le brief me permet de comprendre vos enjeux et de vous proposer quelque chose d'adapté à votre situation et à votre enveloppe budgétaire.",
  },
];

interface FaqProps {
  className?: string;
}

export default function Faq({ className }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className={className}>
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          reponse={item.reponse}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}