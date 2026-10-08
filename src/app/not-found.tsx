import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Page introuvable | Charlotte Dunand",
  description: "Cette page n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <p className='h5 pt-36'>Erreur 404</p>
                <h1>Ce lien ne mène nulle part.</h1>
                <p>La page que vous cherchez n&apos;existe pas ou a été déplacée. Pas de panique : tout le reste fonctionne.</p>
                <Button href="/">Retour à l&apos;accueil</Button>

                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-12 text-xs">
                    <Link href='/fondations-digitales'>Fondations digitales</Link>
                    <Link href='/ingenierie-automatisation'>Ingénierie & Automatisation</Link>
                    <Link href='/suivi-evolution'>Suivi & évolution</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
        </section>

      <Footer />
    </main>
  );
}
