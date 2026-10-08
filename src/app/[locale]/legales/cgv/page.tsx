import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Charlotte Dunand",
  description: "Conditions générales de vente des prestations de Charlotte Dunand : sites web, automatisations, audits et maintenance.",
};

export default function CGV() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Conditions Générales de Vente</h1>
                <p>Charlotte Dunand, entrepreneur individuel (EI), SIREN 878 570 381, Haute-Savoie, France. TVA non applicable, article 293 B du CGI.</p>
                </div>
        </section>

        <section id='content'>
            <div className="container mx-auto py-36 px-8">
                <h2>1. Champ d&apos;application</h2>
                <p>Les présentes conditions générales s&apos;appliquent à toute prestation fournie par Charlotte Dunand (ci-après &quot;la prestataire&quot;) à ses clients professionnels, dans le cadre des services présentés sur ce site : création de sites web, automatisations, audits digitaux et abonnements de maintenance.</p>

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

                <h2 className='pt-8'>6. Annulation</h2>
                <p>En cas d&apos;annulation du projet par le client en cours de réalisation, l&apos;acompte versé reste dû à la prestataire. Les frais déjà engagés pour le compte du client (achats de licences, outils tiers, etc.) restent à la charge du client et seront facturés en complément si nécessaire.</p>

                <h2 className='pt-8'>7. Abonnements de maintenance</h2>
                <p>Les abonnements de maintenance sont facturés annuellement (engagement minimum 1 an) ou mensuellement (engagement minimum 1 an également), avec reconduction tacite.
                    Toute résiliation doit être communiquée au moins un mois avant la date de reconduction. À défaut, l&apos;abonnement est automatiquement renouvelé pour une nouvelle période.</p>

                <h2 className='pt-8'>8. Audit Digital</h2>
                <p>La demande d&apos;Audit Digital se fait via le formulaire du site. Après vérification des informations transmises, la prestataire envoie au client un email de prise en charge contenant le lien de paiement. L&apos;audit est payable en totalité et d&apos;avance ; il démarre à réception du paiement et de l&apos;ensemble des accès nécessaires.</p>
                <p>Le rapport est livré dans un délai indicatif d&apos;une semaine à compter du démarrage. Une fois l&apos;analyse commencée, l&apos;audit n&apos;est pas remboursable. Si la prestataire ne peut pas réaliser l&apos;audit (accès impossibles, demande hors périmètre), le montant payé est intégralement remboursé.</p>

                <h2 className='pt-8'>9. Prix et devises</h2>
                <p>Les prix sont indiqués en francs suisses (CHF) ou en euros (€) selon la localisation du client. La devise retenue est celle mentionnée sur le devis ou dans l&apos;email de prise en charge. Les prix sont exprimés hors taxes, la TVA n&apos;étant pas applicable (article 293 B du CGI).</p>

                <h2 className='pt-8'>10. Responsabilité</h2>
                <p>La prestataire est tenue à une obligation de moyens. Sa responsabilité ne saurait être engagée en cas de dysfonctionnement lié à des outils ou services tiers (hébergeurs, plug-ins, plateformes), à une mauvaise utilisation par le client, ou à des contenus fournis par ce dernier. En tout état de cause, sa responsabilité est limitée au montant effectivement payé par le client pour la prestation concernée.</p>

                <h2 className='pt-8'>11. Clientèle professionnelle</h2>
                <p>Les prestations sont exclusivement destinées aux professionnels (entreprises, indépendants, associations) agissant dans le cadre de leur activité. Les dispositions du Code de la consommation relatives au droit de rétractation ne s&apos;appliquent donc pas.</p>

                <h2 className='pt-8'>12. Droit applicable et litiges</h2>
                <p>Les présentes conditions sont soumises au droit français. En cas de différend, les parties s&apos;engagent à rechercher une solution amiable avant toute action. À défaut, le litige sera porté devant les tribunaux compétents du ressort du domicile professionnel de la prestataire.</p>
            </div>
        </section>

      <Footer />
    </main>
  );
}
