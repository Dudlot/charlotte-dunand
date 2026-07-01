import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import BriefForm from '@/components/forms/BriefForm';

import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Merci — Démarrer votre projet | Charlotte Dunand",
  description: "Page de prise de rendez-vous.",
};

export default function Merci() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Merci, c&apos;est noté.</h1>
                <p>Votre brief vient d&apos;arriver. La dernière étape : choisissez comment on se retrouve.</p>
                <Button href='https://zcal.co/charlottedunand/decouverte' target="_blank" rel="noopener noreferrer">Réserver un appel (visio ou téléphone)</Button>
                <Button href='https://zcal.co/charlottedunand/cafe' target="_blank" rel="noopener noreferrer">Réserver un rendez-vous au bureau, à Genève</Button>
            </div>
        </section>

      <Footer />
    </main>
  );
}
