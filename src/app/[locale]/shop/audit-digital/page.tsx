import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AuditForm from '@/components/forms/AuditForm';

import { getCurrency } from '@/lib/currency';
import { price } from '@/lib/prices';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Audit Digital — Charlotte Dunand",
  description: "Une analyse complète de votre écosystème digital, un appel de débrief et un rapport avec des recommandations claires.",
};

export default async function AuditDigital() {
  const currency = await getCurrency();

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
                        <p className='h4'>{price('audit', currency)}</p>
                        <p className='pb-8 text-xs'>Une fois le formulaire envoyé, je vérifie vos informations et vous recevez sous 48h un email de prise en charge avec le lien de paiement sécurisé. Délai : rapport sous une semaine après le paiement.</p>
                        <h3>Le process</h3>
                        <p className='py-2'><span className='font-semibold'>1. Vous remplissez le formulaire</span>, quelques informations pour qu&apos;on puisse démarrer (accès, contexte)</p>
                        <p className='py-2'><span className='font-semibold'>2. Je vérifie et je vous envoie le lien de paiement</span>, par email sous 48h, avec la confirmation de prise en charge</p>
                        <p className='py-2'>3. Une fois le paiement reçu et les accès transmis, <span className='font-semibold'>on commence l&apos;analyse</span>. On passe en revue votre écosystème : structure, performance, ce qui fonctionne, ce qui freine</p>
                        <p className='py-2'><span className='font-semibold'>4. L&apos;appel de débrief</span>, on discute ensemble des résultats, vous pouvez poser vos questions</p>
                        <p className='py-2'><span className='font-semibold'>5. Le rapport</span>, vous recevez un document avec les recommandations claires : ajustements ciblés ou refonte complète</p>
                    </div>
                    <div className="flex-2">
                        <AuditForm currency={currency} />
                    </div>
                </div>
            </div>
        </section>

        <section id='message' className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8 text-white text-center">
                <h2>Prêt à démarrer ? Remplissez le formulaire, je m&apos;occupe du reste.</h2>
            </div>
        </section>

        <Footer />
    </main>
  );
}
