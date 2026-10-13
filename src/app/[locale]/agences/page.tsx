import { MotionConfig } from 'motion/react';
import Footer from '@/components/layout/Footer';
import FacadeHero from '@/components/agences/FacadeHero';
import MethodPath from '@/components/agences/MethodPath';
import ProblemTickets from '@/components/agences/ProblemTickets';
import ServiceFloors from '@/components/agences/ServiceFloors';
import SketchToPlan from '@/components/agences/SketchToPlan';
import TrackedCta from '@/components/agences/TrackedCta';
import WhiteLabelDemo from '@/components/agences/WhiteLabelDemo';
import { SITE_URL } from '@/lib/site';

import type { Metadata } from 'next';

const TITLE = 'Partenaire technique pour agences | Charlotte Dunand';
const DESCRIPTION =
  'Développement et maintenance de sites en marque blanche pour les agences. Vous gardez le client et la marge, je prends la technique.';

// Les demandes arrivent étiquetées « agence » dans Tally (champ caché source), puis dans Notion
const CTA_HREF = '/contact?source=agence';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/agences' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/agences',
    siteName: 'Charlotte Dunand',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/opengraph.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/opengraph.jpg'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Partenaire technique pour agences',
  serviceType: 'Développement et maintenance de sites en marque blanche',
  description: DESCRIPTION,
  url: `${SITE_URL}/agences`,
  provider: { '@id': `${SITE_URL}/#charlotte-dunand` },
  areaServed: [
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'France' },
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'Agences web, design et communication' },
};

const tickets = [
  {
    label: 'Lundi, 9 h 00',
    text: "Le développeur freelance qui devait commencer lundi est pris jusqu'à la fin du mois.",
  },
  {
    label: 'Vendredi, 18 h 47',
    text: "Le plugin qui casse la mise en page un vendredi soir n'était prévu dans aucun devis.",
  },
  {
    label: 'Ticket n° 214, non facturé',
    text: 'Et la maintenance, on la fait par loyauté, on la facture rarement.',
  },
];

const floors = [
  {
    number: '01',
    title: 'Le développement.',
    text: 'Vos maquettes deviennent des sites qui tiennent, en WordPress, Next.js ou Webflow selon le projet, avec les automatisations dont vos clients ont besoin. Chaque projet est cadré par écrit, avec un prix fixe.',
  },
  {
    number: '02',
    title: 'La maintenance.',
    text: "Les sites que vous livrez restent surveillés, mis à jour et sécurisés. Vous la revendez sous votre marque, à votre prix. Les sites que vous n'avez pas construits avec moi passent d'abord par un état des lieux technique.",
  },
  {
    number: '03',
    title: 'Établi, bientôt.',
    text: 'Des modules prêts à brancher sur les sites de vos clients, à commencer par la traduction et le contenu de blog. Les agences partenaires y auront accès en priorité.',
    upcoming: true,
  },
];

export default function Agences() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section id="hero" className="gradient-primary">
          <FacadeHero
            title="Le partenaire technique de votre agence"
            facadeLine="Vous vendez la vitrine."
            structureLine="Je construis ce qu'il y a derrière."
            cta={
              <TrackedCta href={CTA_HREF} event="cta_agences_hero">
                Parlons de vos projets
              </TrackedCta>
            }
          />
        </section>

        <section id="probleme">
          <div className="container mx-auto px-8 py-28 sm:py-36 grid lg:grid-cols-2 gap-16">
            <h2 className="agences-h2">Le problème arrive après la maquette</h2>
            <ProblemTickets tickets={tickets} resolution="Je prends cette partie-là, sous votre nom." />
          </div>
        </section>

        <section id="briques" className="bg-[var(--vin)] text-white">
          <div className="container mx-auto px-8 py-28 sm:py-36">
            <h2 className="agences-h2 pb-16">Ce que vous me confiez</h2>
            <ServiceFloors floors={floors} />
          </div>
        </section>

        <section id="methode">
          <div className="container mx-auto px-8 py-28 sm:py-36">
            <h2 className="agences-h2 pb-16">Comment on travaille</h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <p className="agences-text">
                Votre client reste le vôtre. Mon nom n&apos;apparaît nulle part sans votre accord, et je ne sollicite jamais vos clients pour mon compte. Si vous préférez que je réponde directement à leurs questions techniques, je le fais en votre nom, avec vous en copie.
              </p>
              <WhiteLabelDemo />
            </div>
            <div className="pt-28">
              <p className="agences-text max-w-3xl">
                Pas de facturation à l&apos;heure. Un brief, un cadrage écrit, un prix fixe, une recette sur environnement de test avant que votre client ne voie le site.
              </p>
              <MethodPath />
            </div>
          </div>
        </section>

        <section id="architecte" className="border-t border-[var(--froid)]">
          <div className="container mx-auto px-8 py-28 sm:py-36 grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
            <div>
              <h2 className="agences-h2 pb-10">Une architecte, pas une exécutante</h2>
              <p className="agences-text agences-text-large">
                Je viens du design et j&apos;ai appris à coder pour construire moi-même ce que je dessinais. Je vois l&apos;intention avant les pixels. Je ne prends pas une maquette pour la recopier, je la prends pour qu&apos;elle tienne.
              </p>
            </div>
            <SketchToPlan />
          </div>
        </section>

        <section id="commencer" className="agences-final bg-[var(--vin)] text-white">
          <div className="relative container mx-auto px-8 py-36 sm:py-48 text-center flex flex-col items-center">
            <h2 className="agences-h2 max-w-3xl">Commencez par un seul site</h2>
            <p className="agences-text max-w-2xl pt-8">
              Un projet en cours ou un site à reprendre en maintenance. Vous jugerez sur pièce. La grille partenaire vous est envoyée après un premier échange de 30 minutes.
            </p>
            <TrackedCta href={CTA_HREF} event="cta_agences_footer">
              Réserver un échange
            </TrackedCta>
          </div>
        </section>

        <Footer />
      </main>
    </MotionConfig>
  );
}
