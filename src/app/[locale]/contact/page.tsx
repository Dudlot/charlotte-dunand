import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import FadeInStagger from '@/components/layout/FadeInStagger';
import FadeInRight from '@/components/layout/FadeInRight';
import ServicesPlan from '@/components/contact/ServicesPlan';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Charlotte Dunand",
  description: "Sites web, automatisations, systèmes sur mesure : Charlotte Dunand construit l'écosystème digital qui fait tourner votre entreprise sans vous épuiser.",
};

const benefits = [
  "Votre site travaille pour vous, même quand vous dormez.",
  "Vos outils se parlent, vous n'intervenez plus entre eux.",
  "Votre écosystème évolue avec vous, sans tout reconstruire.",
];

const realisations = [
  {
    title: "Plugin de traduction multilingue sur mesure",
    text: "Un site de plusieurs centaines de pages, traduit en masse grâce à une intégration Claude directement dans WordPress. Une traduction cohérente, contrôlable, sans abonnement SaaS à prix prohibitif et sans perdre la main sur le contenu.",
  },
  {
    title: "Système de réservation pour un restaurant genevois",
    text: "Zéro abonnement mensuel, zéro dépendance à une plateforme tierce. Un système taillé pour les contraintes réelles du restaurant, fiable, simple à gérer, propriété totale du client.",
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

                <p className='pt-36 pb-6 text-xs uppercase tracking-widest'>Vous venez de scanner mon QR code.</p>
                <h1>Ici, rien n&apos;a été fait en 30 secondes.</h1>
                <p className='h5 pt-8 pb-4'>Et ça se voit en 3.</p>
                <p>L&apos;IA, je l&apos;utilise : comme un outil, pas comme un raccourci. Sites web, automatisations, systèmes sur mesure : je construis l&apos;écosystème digital qui fait tourner votre entreprise sans vous épuiser.</p>
            </div>
        </section>


        <section id='plan'>
            <div className="container mx-auto py-36 px-8">
                <h2 className='mb-4'>Les pièces de votre écosystème</h2>
                <p className='mb-12'>Une seule ou toutes ensemble : chaque pièce se construit pour s&apos;emboîter avec les autres.</p>
                <ServicesPlan />
            </div>
        </section>


        <section id="concretement" className='gradient-primary'>
            <div className="container mx-auto py-36 px-8 text-white">
                <h2 className='mb-4'>Ce que ça donne concrètement</h2>
                <p className='mb-12'>Un site généré se ressemble partout. Ce qui fait la différence, c&apos;est ce qu&apos;il y a derrière.</p>
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
                <FadeInStagger staggerDelay={0.15}>
                    <h2>Et votre site, il se voit en combien de secondes ?</h2>
                    <p className='py-8'>Parlez-moi de votre activité et de ce qui vous freine : on regarde ensemble ce qui peut être construit.</p>
                    <Button href='/reserver-appel'>Réserver un premier échange</Button>
                </FadeInStagger>
            </div>
        </section>

      <Footer />
    </main>
  );
}
