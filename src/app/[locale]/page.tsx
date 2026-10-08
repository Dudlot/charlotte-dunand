import Link from 'next/link';
import Button from '@/components/ui/Button';
import ButtonCerise from '@/components/ui/ButtonCerise';
import Footer from '@/components/layout/Footer';
import Faq from '@/components/layout/Faq';
import Services from '@/components/layout/Services';
import Hero from '@/components/layout/HomeHero'

import FadeInLeft from '@/components/layout/FadeInLeft';
import FadeInRight from '@/components/layout/FadeInRight';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Charlotte Dunand — Architecte Digitale & COO | Haute-Savoie & Suisse romande",
  description: "Sites web, automatisations, systèmes — Charlotte Dunand construit les écosystèmes digitaux qui font tourner les entreprises sans les épuiser. Basée en Haute-Savoie, active en Suisse romande et à distance partout ailleurs.",
  openGraph: {
    title: "Charlotte Dunand — Architecte Digitale & COO | Haute-Savoie & Suisse romande",
    description: "Sites web, automatisations, systèmes : des écosystèmes digitaux qui font tourner les entreprises sans les épuiser.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />

      <section id='vision'>
        <div className="container mx-auto py-36 relative px-8">
          <FadeInLeft className='max-w-3xl'>
            <h2>Le digital devrait être <span>votre meilleur allié</span>, pas un fardeau.</h2>
          </FadeInLeft>
          <FadeInRight delay={0.15} className='text-right absolute right-8 max-w-3xl'>
            <p>Trop d&apos;outils, trop d&apos;abonnements, trop de bricolage. Ce qui devait vous faire gagner du temps vous en prend : il est temps de remettre de l&apos;ordre.</p>
          </FadeInRight>
        </div>
      </section>

      <Services />

      <section id='approche'>
        <div className="container mx-auto py-36 relative px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <FadeInLeft>
              <h2>L&apos;élégance du design, la puissance de l&apos;ingénierie.</h2>
              <p>Un beau site sans moteur derrière n&apos;est qu&apos;une coquille vide. Un système performant mais complexe est un fardeau. Mon obsession : réunir les deux.</p>
              <ButtonCerise href="/vision">En savoir plus sur mon approche</ButtonCerise>
            </FadeInLeft>

            <FadeInRight>
              <div className="stuff-grid ">
                <div className="stuff-item stuff1">
                  <h3>Audit Digital</h3>
                  <p>Avant de construire ou d&apos;optimiser, on regarde ce qui existe. Un diagnostic complet, un appel de débrief, un rapport actionnable : pour repartir avec une vision claire.</p>
                  <Link href='/shop/audit-digital'>Découvrir l&apos;Audit</Link>
                </div>
                <div className="stuff-item stuff2">
                  <h3>Outils</h3>
                  <p>Des outils construits pour les mêmes problèmes que vous rencontrez. Générateur de contenu, assistant de traduction, automatisations prêtes à l&apos;emploi — la liste s&apos;allonge.</p>
                  <p  className='font-bold italic'>Bientôt disponible</p>
                </div>
                <div className="stuff-item stuff3">
                  <h3>Ressources</h3>
                  <p>Templates, guides, références, ce que je partage quand on me pose toujours les mêmes bonnes questions.</p>
                  <p className='font-bold italic'>Bientôt disponible</p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      <section id='cta' className='gradient-primary'>
        <div className="container mx-auto py-36 px-8">
          <div className="flex flex-col sm:flex-row justify-between text-white items-end gap-8">
            <div className='flex-1'>
              <p>Remplissez votre brief en quelques minutes, on se retrouve ensuite pour un premier échange, en visio ou en personne, en Haute-Savoie ou en Suisse romande.</p>
              <h2>Prenons un café.</h2>
              <Button href="/contact">Remplir mon brief</Button>
            </div>
            <Faq className='flex-2'/>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}