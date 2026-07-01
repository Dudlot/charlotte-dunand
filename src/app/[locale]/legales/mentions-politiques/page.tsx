import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions légales & Politique de confidentialité | Charlotte Dunand",
  description: "Mentions légales & Politique de confidentialité",
};

export default function MentionsPolitiques() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Mentions légales & Politique de confidentialité</h1>
            </div>
        </section>

        <section id='content'>
            <div className="container mx-auto py-36 px-8">
                <h2>Mentions légales</h2>
                <h3 className='pt-8'>Éditeur du site</h3>
                <p>
                    Charlotte Dunand, entreprise individuelle <br />
                    Rue de Chantepoulet 10, 1201 Genève, Suisse<br />
                    {/* Numéro IDE : [À compléter]<br /> */}
                    Email : contact@charlotte-dunand.com<br />
                    Non assujettie à la TVA
                </p>
                <h3 className='pt-8'>Hébergement</h3>
                <p>Ce site est hébergé par Infomaniak Network SA, Rue Eugène Marziano 25, 1227 Les Acacias (GE)</p>


                <h2 className='pt-16'>Politique de confidentialité</h2>
                <p>Cette page explique quelles données sont collectées sur ce site, pourquoi, et comment elles sont utilisées.</p>
                
                <h3 className='pt-8'>Données collectées</h3>
                <p>Lorsque vous remplissez le formulaire de brief ou de contact, les informations suivantes sont collectées : nom, prénom, nom de l&apos;entreprise, email, téléphone (si fourni), et les réponses apportées aux questions du formulaire. Ces données sont utilisées uniquement pour préparer et organiser votre échange avec Charlotte Dunand, et ne sont jamais transmises à des tiers à des fins commerciales.</p>

                <h3 className='pt-8'>Outils utilisés</h3>
                <p>Pour le fonctionnement de ce site et la gestion de la relation client, les outils suivants sont utilisés :</p>
                <ul className='custom-list'>
                    <li>Tally — collecte des formulaires de contact et de brief</li>
                    <li>Notion — gestion interne des projets et des contacts</li>
                    <li>Zcal — prise de rendez-vous</li>
                    <li>Stripe — traitement des paiements</li>
                    <li>Google Analytics et Google Search Console — mesure d&apos;audience et performance du site</li>
                </ul>
                <p className='pt-8'>Chacun de ces outils peut traiter des données conformément à ses propres politiques de confidentialité.</p>
            
                <h3 className='pt-8'>Cookies</h3>
                <p>Ce site utilise des cookies de mesure d&apos;audience (Google Analytics) pour comprendre comment il est utilisé et l&apos;améliorer.
                    Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser ces cookies.
                    Vous pouvez modifier votre choix à tout moment en effaçant les cookies de votre navigateur.</p>

                <h3 className='pt-8'>Vos droits</h3>
                <p>Conformément à la législation suisse sur la protection des données (LPD) et, le cas échéant, au RGPD pour les visiteurs européens, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez contact@charlotte-dunand.com.</p>

            </div>
        </section>

      <Footer />
    </main>
  );
}
