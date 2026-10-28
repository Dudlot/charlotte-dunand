import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import FadeInStagger from '@/components/layout/FadeInStagger';
import FadeInRight from '@/components/layout/FadeInRight';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Charlotte Dunand",
  description: "Sites web, automatisations, systèmes sur mesure : Charlotte Dunand construit l'écosystème digital qui fait tourner votre entreprise sans vous épuiser.",
};

const benefits = [
  "Votre site travaille pour vous, même quand vous dormez.",
  "Vos outils se parlent — vous n'intervenez plus entre eux.",
  "Votre écosystème évolue avec vous, sans tout reconstruire.",
];

const realisations = [
  {
    title: "Plugin de traduction multilingue sur mesure",
    text: "Un site de plusieurs centaines de pages, traduit en masse grâce à une intégration Claude directement dans WordPress. Une traduction cohérente, contrôlable, sans abonnement SaaS à prix prohibitif — et sans perdre la main sur le contenu.",
  },
  {
    title: "Système de réservation pour un restaurant genevois",
    text: "Zéro abonnement mensuel, zéro dépendance à une plateforme tierce. Un système taillé pour les contraintes réelles du restaurant — fiable, simple à gérer, propriété totale du client.",
  },
  {
    title: "Plateforme événementielle avec validation automatique",
    text: "Récupération de données en temps réel pour valider ou invalider automatiquement des attestations selon les dates de sortie. Ce qui prenait des heures de vérification manuelle se fait maintenant sans intervention humaine.",
  },
];

export default function Contact() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Vous venez de scanner mon QR code.</h1>
                <p>Sites web, automatisations, systèmes sur mesure — je construis l&apos;écosystème digital qui fait tourner votre entreprise sans vous épuiser.</p>
            </div>
        </section>


        <section id="concretement">
            <div className="container mx-auto py-36 px-8">
                <h2 className='mb-12'>Ce que ça donne concrètement</h2>
                <FadeInStagger staggerDelay={0.15}>
                    {benefits.map((benefit) => (
                        <p key={benefit} className='h3 mb-6'>{benefit}</p>
                    ))}
                </FadeInStagger>
            </div>
        </section>


        <section id='realisations' className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8">
                <h2 className='text-white mb-12'>Ce qu&apos;on a déjà construit</h2>
                <FadeInRight>
                    <div className="flex flex-col sm:flex-row gap-8">
                        {realisations.map((realisation) => (
                            <div key={realisation.title} className="approche-item flex-1 text-white flex flex-col justify-between">
                                <p>{realisation.text}</p>
                                <h3 className='pt-18'>{realisation.title}</h3>
                            </div>
                        ))}
                    </div>
                </FadeInRight>
            </div>
        </section>


        <section id='cta' className='gradient-primary'>
            <div className="container mx-auto py-36 px-8 text-center text-white">
                <Button href='/reserver-appel'>Réserver un premier échange</Button>
            </div>
        </section>

      <Footer />
    </main>
  );
}
