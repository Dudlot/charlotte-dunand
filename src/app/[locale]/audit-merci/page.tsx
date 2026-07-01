import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import BriefForm from '@/components/forms/BriefForm';

import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Merci — L'audit va démarrer | Charlotte Dunand",
  description: "Paiement confirmé, c'est parti.",
};

export default function Merci() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Paiement confirmé, c&apos;est parti.</h1>
                <p>Tout est reçu. Je reviens vers vous sous 48h pour confirmer le démarrage de l&apos;audit — vous recevrez le rapport sous une semaine.</p>
              </div>
        </section>

      <Footer />
    </main>
  );
}
