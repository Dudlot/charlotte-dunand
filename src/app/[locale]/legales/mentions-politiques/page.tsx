import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions légales & Politique de confidentialité | Charlotte Dunand",
  description: "Mentions légales, politique de confidentialité et gestion des cookies du site de Charlotte Dunand.",
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
                    Charlotte Dunand, entrepreneur individuel (EI)<br />
                    SIREN : 878 570 381<br />
                    9 avenue de la Gare, 74440 Taninges, France<br />
                    Email : contact@charlotte-dunand.com<br />
                    TVA non applicable, article 293 B du Code général des impôts
                </p>
                <h3 className='pt-8'>Directrice de la publication</h3>
                <p>Charlotte Dunand</p>
                <h3 className='pt-8'>Hébergement</h3>
                <p>Ce site est hébergé par Infomaniak Network SA, Rue Eugène Marziano 25, 1227 Les Acacias (GE), Suisse.</p>
                <h3 className='pt-8'>Propriété intellectuelle</h3>
                <p>L&apos;ensemble des contenus de ce site (textes, visuels, logo, vidéos) est la propriété de Charlotte Dunand, sauf mention contraire. Toute reproduction sans autorisation écrite préalable est interdite.</p>


                <h2 className='pt-16'>Politique de confidentialité</h2>
                <p>Cette page explique quelles données sont collectées sur ce site, pourquoi, et comment elles sont utilisées.</p>

                <h3 className='pt-8'>Responsable du traitement</h3>
                <p>Charlotte Dunand, joignable à l&apos;adresse contact@charlotte-dunand.com.</p>

                <h3 className='pt-8'>Données collectées</h3>
                <p>Lorsque vous remplissez le formulaire de brief, de contact ou de demande d&apos;audit, les informations suivantes sont collectées : nom, prénom, nom de l&apos;entreprise, email, téléphone (si fourni), et les réponses apportées aux questions du formulaire. Pour l&apos;audit, des accès à vos outils peuvent également être transmis.</p>
                <p>Si vous acceptez les cookies de mesure d&apos;audience, des données de navigation anonymisées sont également collectées (pages consultées, durée de visite, type d&apos;appareil, provenance approximative).</p>

                <h3 className='pt-8'>Finalités et bases légales</h3>
                <ul className='custom-list'>
                    <li>Répondre à votre demande et préparer un devis ou un échange : mesures précontractuelles</li>
                    <li>Réaliser les prestations commandées, facturer et encaisser les paiements : exécution du contrat et obligations légales</li>
                    <li>Mesurer l&apos;audience du site pour l&apos;améliorer : votre consentement</li>
                </ul>
                <p className='pt-4'>Vos données ne sont jamais vendues ni transmises à des tiers à des fins commerciales.</p>

                <h3 className='pt-8'>Durées de conservation</h3>
                <ul className='custom-list'>
                    <li>Demandes sans suite (brief, contact) : 3 ans après le dernier échange</li>
                    <li>Données clients : pendant la relation commerciale, puis 3 ans après sa fin</li>
                    <li>Factures et pièces comptables : 10 ans, conformément aux obligations légales</li>
                    <li>Accès transmis pour un audit : supprimés à la fin de la mission</li>
                    <li>Données de mesure d&apos;audience : 14 mois maximum</li>
                </ul>

                <h3 className='pt-8'>Outils utilisés et destinataires</h3>
                <p>Pour le fonctionnement de ce site et la gestion de la relation client, les prestataires suivants peuvent traiter vos données :</p>
                <ul className='custom-list'>
                    <li>Infomaniak (Suisse) — hébergement du site</li>
                    <li>Tally (Belgique) — collecte des formulaires de contact, de brief et d&apos;audit</li>
                    <li>Notion (États-Unis) — gestion interne des projets et des contacts</li>
                    <li>Zcal (États-Unis) — prise de rendez-vous</li>
                    <li>Stripe (Irlande / États-Unis) — traitement des paiements</li>
                    <li>Google Analytics, Google Tag Manager et Google Search Console (États-Unis) — mesure d&apos;audience et performance du site</li>
                </ul>
                <p className='pt-4'>Certains de ces prestataires sont situés hors de Suisse et de l&apos;Union européenne. Ces transferts sont encadrés par les garanties prévues par la loi : décisions d&apos;adéquation (notamment le Data Privacy Framework UE–États-Unis et Suisse–États-Unis) ou clauses contractuelles types. Chacun de ces outils traite les données conformément à sa propre politique de confidentialité.</p>

                <h3 id='cookies' className='pt-8'>Cookies</h3>
                <p>Ce site utilise :</p>
                <ul className='custom-list'>
                    <li><span className='font-semibold'>Votre choix de cookies</span> (stockage local, nécessaire) : retient si vous avez accepté ou refusé la mesure d&apos;audience</li>
                    <li><span className='font-semibold'>Votre devise</span> (cookie « currency », 1 an) : retient la devise choisie pour l&apos;affichage des prix (CHF ou €)</li>
                    <li><span className='font-semibold'>Mesure d&apos;audience</span> (cookies Google Analytics « _ga », 13 mois maximum) : déposés uniquement si vous les acceptez</li>
                </ul>
                <p className='pt-4'>Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser les cookies de mesure d&apos;audience. Vous pouvez modifier votre choix à tout moment grâce au lien « Gérer les cookies » en bas de chaque page.</p>

                <h3 className='pt-8'>Vos droits</h3>
                <p>Conformément au Règlement général sur la protection des données (RGPD) et à la loi suisse sur la protection des données (LPD), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données, ainsi que du droit de retirer votre consentement à tout moment. Pour exercer ces droits, contactez contact@charlotte-dunand.com.</p>
                <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (France, cnil.fr) ou au Préposé fédéral à la protection des données et à la transparence (Suisse, edoeb.admin.ch).</p>

            </div>
        </section>

      <Footer />
    </main>
  );
}
