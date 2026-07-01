import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Charlotte Dunand",
  description: "Conditions Générales de Vente",
};

export default function CGV() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Conditions Générales de Vente</h1>
                <p>Charlotte Dunand, entreprise individuelle, [adresse complète], [numéro IDE], non assujettie à la TVA.</p>
                </div>
        </section>

        <section id='content'>
            <div className="container mx-auto py-36 px-8">
                <h2>1. Champ d&apos;application</h2>
                <p>Les présentes conditions générales s&apos;appliquent à toute prestation fournie par Charlotte Dunand (ci-après &quot;la prestataire&quot;) à ses clients, dans le cadre des services présentés sur ce site : création de sites web, automatisations, audits digitaux et abonnements de maintenance.</p>

                <h2 className='pt-8'>2. Prestations et devis</h2>
                <p>Les prestations fournies sont celles définies lors de l&apos;échange initial et confirmées par écrit (email ou document de cadrage). Toute prestation non mentionnée n&apos;est pas comprise et fera l&apos;objet d&apos;une proposition complémentaire.</p>
                
                <h2 className='pt-8'>3. Modalités de paiement</h2>
                <p>Un acompte de 30% est dû à la confirmation du projet. Le solde est réparti selon un échéancier défini pour chaque projet, communiqué au client avant le démarrage.</p>

                <h2 className='pt-8'>4. Délais</h2>
                <p>Les délais communiqués sont indicatifs et établis sur la base d&apos;un retour rapide du client (validations, fourniture de contenus). Tout retard de la part du client dans la fourniture des éléments nécessaires (textes, visuels, accès) peut entraîner un report proportionnel du calendrier, sans que cela constitue un manquement de la prestataire.</p>
            
                <h2 className='pt-8'>5. Propriété intellectuelle</h2>
                <p>Une fois le projet livré et intégralement payé, le client devient propriétaire des éléments développés dans le cadre de la prestation (code, design).
                    Les éléments tiers utilisés dans le cadre du projet (polices de caractères, visuels issus de banques d&apos;images, modules ou plug-ins payants, etc.) restent soumis à leurs propres licences. Le client doit s&apos;assurer de leur acquisition ou de leur renouvellement, le cas échéant à ses frais.
                </p>

                <h2 className='pt-8'>Annulation</h2>
                <p>En cas d&apos;annulation du projet par le client en cours de réalisation, l&apos;acompte versé reste dû à la prestataire. Les frais déjà engagés pour le compte du client (achats de licences, outils tiers, etc.) restent à la charge du client et seront facturés en complément si nécessaire.</p>

                <h2 className='pt-8'>7. Abonnements de maintenance</h2>
                <p>Les abonnements de maintenance sont facturés annuellement (engagement minimum 1 an) ou mensuellement (engagement minimum 1 an également), avec reconduction tacite.
                    Toute résiliation doit être communiquée au moins un mois avant la date de reconduction. À défaut, l&apos;abonnement est automatiquement renouvelé pour une nouvelle période.</p>
            </div>
        </section>

      <Footer />
    </main>
  );
}
