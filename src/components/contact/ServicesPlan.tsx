'use client';

import { motion, useReducedMotion } from 'motion/react';

// Les pièces du plan : `area` place la pièce sur desktop (voir .contact-plan), `large` l'agrandit
const rooms = [
  { area: 'vitrine', name: "Site vitrine", note: "Votre activité, ouverte 24h/24", large: true },
  { area: 'boutique', name: "Boutique en ligne", note: "Vendre sans vous", large: true },
  { area: 'billet', name: "Billetterie" },
  { area: 'resa', name: "Réservation" },
  { area: 'automat', name: "Automatisations", note: "Les tâches qui se font seules", large: true },
  { area: 'crm', name: "CRM connecté" },
  { area: 'multi', name: "Site multilingue" },
  { area: 'blog', name: "Blog & SEO", note: "Être trouvé" },
  { area: 'membre', name: "Espace membre" },
  { area: 'paiement', name: "Paiement en ligne" },
  { area: 'news', name: "Newsletter", note: "Garder le lien" },
  { area: 'dash', name: "Tableau de bord", note: "Vos chiffres en un coup d'œil" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// Chaque pièce se pose légèrement, murs compris : aucun vide pendant l'apparition
const room = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ServicesPlan() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="contact-plan"
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {rooms.map((item, i) => (
        <motion.div
          key={item.area}
          variants={room}
          className={`contact-room contact-room-${item.area}${item.large ? ' contact-room-lg' : ''}`}
        >
          <span className='contact-room-number' aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <p className='contact-room-name'>{item.name}</p>
          {item.note && <p className='contact-room-note'>{item.note}</p>}
        </motion.div>
      ))}
    </motion.div>
  );
}
