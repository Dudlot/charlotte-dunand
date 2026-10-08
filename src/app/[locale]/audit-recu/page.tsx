import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Merci — Demande d'audit reçue | Charlotte Dunand",
  description: "Votre demande d'Audit Digital a bien été reçue.",
  robots: { index: false, follow: false },
};

export default function AuditRecu() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Merci, c&apos;est bien reçu.</h1>
                <p>Vos informations sont arrivées. Je les vérifie, puis je vous envoie sous 48h un email de prise en charge avec le lien de paiement sécurisé.</p>
                <p>Une fois le paiement effectué, l&apos;audit démarre — vous recevrez le rapport sous une semaine.</p>
            </div>
        </section>

      <Footer />
    </main>
  );
}
