import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AuditForm from '@/components/forms/AuditForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Merci — Démarrer votre projet | Charlotte Dunand",
  description: "Page de prise de rendez-vous.",
};

export default function AuditDigital() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Votre Audit Digital</h1>
                <h2 className='h5'>Voici ce qui vous attend : une analyse complète de votre écosystème actuel, un appel pour en discuter ensemble, et un rapport avec des recommandations claires.</h2>
            </div>
        </section>

        <section id='product'>
            <div className="container mx-auto py-36 px-8">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1">
                        <h3>Ce qui est compris</h3>
                        <ul className='custom-list pt-2'>
                            <li>Analyse complète de l&apos;existant</li>
                            <li>Appel de débrief pour discuter des résultats</li>
                            <li>Rapport détaillé avec recommandations claires</li>
                        </ul>
                        <p className='h4'>500 chf</p>
                        <p className='pb-8 text-xs'>Une fois le formulaire envoyé, vous serez redirigé vers le paiement sécurisé. Délai : sous une semaine après réception du formulaire complet.</p>
                        <h3>Le process</h3>
                        <p className='py-2'><span className='font-semibold'>1. Vous remplissez le formulaire et payez</span>, quelques informations pour qu&apos;on puisse démarrer (accès, contexte)</p>
                        <p className='py-2'>2. Si tous les accès sont transmis, <span className='font-semibold'>on commence l&apos;analyse</span>. On passe en revue votre écosystème : structure, performance, ce qui fonctionne, ce qui freine</p>
                        <p className='py-2'><span className='font-semibold'>3. L&apos;appel de débrief</span>, on discute ensemble des résultats, vous pouvez poser vos questions</p>
                        <p className='py-2'><span className='font-semibold'>4. Le rapport</span>, vous recevez un document avec les recommandations claires : ajustements ciblés ou refonte complète</p>
                    </div>
                    <div className="flex-2">
                        <AuditForm />
                    </div>
                </div>
            </div>
        </section>

        <section id='message' className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8 text-white text-center">
                <h2>Prêt à démarrer ? Le paiement se fait en un clic, sécurisé via Stripe.</h2>
            </div>
        </section>

        <Footer />
    </main>
  );
}
