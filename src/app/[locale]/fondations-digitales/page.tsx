import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import FadeInStagger from '@/components/layout/FadeInStagger';
import FadeInLeft from '@/components/layout/FadeInLeft';
import FadeInRight from '@/components/layout/FadeInRight';
import OffresSection from '@/components/layout/OffresSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fondations digitales — Charlotte Dunand",
  description: "Sites web sur-mesure, structurés pour convertir et évoluer avec votre activité.",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Dois-je avoir une idée précise de mes besoins avant de vous contacter ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pas du tout. C'est justement pour ça que le brief existe. Vous décrivez votre situation, vos frustrations, vos objectifs — et c'est à partir de là qu'on construit ensemble."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous uniquement sur la création de sites web ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le site web est souvent une première étape, mais mon travail va bien au-delà. Automatisations, intégrations, maintenance — j'interviens sur l'ensemble de votre écosystème digital."
      }
    },
    {
      "@type": "Question",
      "name": "Quels outils utilisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ceux qui correspondent à votre projet. WordPress, Webflow, n8n, Notion — je sélectionne en fonction de vos besoins et de vos objectifs, pas par habitude."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le budget moyen pour un accompagnement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque projet est différent. Le brief me permet de comprendre vos enjeux et de vous proposer quelque chose d'adapté à votre situation et à votre enveloppe budgétaire."
      }
    }
  ]
}

export default function FondationsDigitales() {
  return (
    <main>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white pb-18 px-8">
                <Header />

                <h1 className='h5 pt-36'>Fondations Digitales</h1>
                <h2 className='h1'>Votre présence digitale est la première impression que vous donnez. Faisons en sorte qu&apos;elle soit à la hauteur.</h2>
                <Button href="/contact">Remplir mon brief</Button>
            </div>
        </section>


        <section id="problem">
            <div className="container mx-auto py-36 px-8">
                <FadeInLeft>
                    <p className='h5 mb-9'>Beaucoup d&apos;entreprises avancent sans véritable présence digitale : un site vague fait il y a des années, ou rien du tout. D&apos;autres ont un site, mais il ne reflète plus qui elles sont devenues, et il ne convertit pas. </p>
                </FadeInLeft>
                <FadeInRight>
                    <p className='h5 text-right'><span>Dans les deux cas, le résultat est le même : des visiteurs qui passent, et qui repartent.</span> <br />
                    Un site n&apos;est pas une formalité. C&apos;est souvent le premier contact entre vous et un client potentiel et parfois le seul avant qu&apos;il décide de vous faire confiance, ou pas.</p>
                </FadeInRight>
            </div>
        </section>
        
        <section id='approche' className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8">
                <FadeInRight>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>La structure et les outils découlent de votre projet, jamais l&apos;inverse.</p>
                            <h3 className='pt-18'>Sur-mesure, pas standard</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Pas de page superflue, pas de section qui ne sert à rien.</p>
                            <h3 className='pt-18'>Chaque élément a une raison d&apos;être</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Un site qui vous ressemble donne immédiatement le ton.</p>
                            <h3 className='pt-18'>Le design, c&apos;est la confiance</h3>
                        </div>
                    </div>
                </FadeInRight>
            </div>
        </section>
      

        <OffresSection
        heading="Deux points de départ, une même destination"
        intro="Que vous partiez de zéro ou que vous ayez déjà une présence digitale, l'objectif est le même : un site qui vous représente et qui travaille pour vous. Le chemin pour y arriver dépend simplement d'où vous en êtes."
        ctaHref="/contact"
        ctaLabel="Remplir mon brief"
        offres={[
            {
            title: "Vous partez de zéro",
            description: "Vous n'avez pas encore de site, ou ce que vous avez ne reflète plus votre activité. Qu'il s'agisse d'une vitrine, d'un blog, d'une plateforme e-commerce ou de tout autre projet digital, on construit ensemble une base pensée pour votre activité, votre cible et vos objectifs, pas pour rentrer dans un format prédéfini.",
            features: [
                "Stratégie et structure sur-mesure, pensées pour vos objectifs",
                "Design entièrement personnalisé, cohérent avec votre image",
                "Développement orienté performance, rapidité et SEO",
                "Choix technologique adapté à votre projet, pas par habitude",
            ],
            price: "Des 1 200 chf",
            },
            {
            title: "Vous avez déjà un site",
            description: "Avant de reconstruire, on regarde ce qui existe. L'Audit Digital permet d'identifier ce qui doit être gardé, ajusté, ou entièrement repensé pour que chaque décision soit justifiée, jamais automatique.",
            features: [
                "Analyse complète de l'existant : structure, design, performance",
                "Appel de débrief pour discuter des résultats",
                "Rapport détaillé avec recommandations claires : ajustements ciblés ou refonte complète",
            ],
            price: "500 chf",
            },
        ]}
        />


        <section id='for' className='gradient-primary'>
            <div className="container mx-auto py-36 px-8 text-center text-white">
                <FadeInStagger staggerDelay={0.15}>
                    <h2>Vous êtes au bon endroit si...</h2>
                    <p className='py-8'>Vous lancez votre activité et vous avez besoin d&apos;une présence digitale qui inspire confiance dès le départ</p>
                    <p className='py-8'>Votre site actuel ne reflète plus qui vous êtes devenus</p>
                    <p className='py-8'>Vous recevez du trafic, mais il ne se transforme pas en clients</p>
                    <p className='py-8'>Vous voulez vendre en ligne, mais vous ne savez pas par où commencer</p>
                    <p className='py-8'>Vous avez besoin d&apos;un site, mais aussi de quelqu&apos;un qui pense la stratégie derrière</p>
                    <h3 className='pt-8'>Prêt à poser des fondations qui vous portent ?</h3>
                    <p>Que vous partiez de zéro ou que vous ayez déjà un site, la première étape est la même : parlons de votre projet.</p>
                    <Button href='/contact'>Remplir mon brief</Button>
                </FadeInStagger>
            </div>
        </section>


      <Footer />
    </main>
  );
}
