import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import FadeInStagger from '@/components/layout/FadeInStagger';
import FadeInLeft from '@/components/layout/FadeInLeft';
import FadeInRight from '@/components/layout/FadeInRight';
import OffresSection from '@/components/layout/OffresSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Suivi & Évolution | Charlotte Dunand",
  description: "Un site ou un système livré n'est qu'un début. Maintenance, sécurité, suivi de performance et évolutions, pour que votre écosystème digital reste à la hauteur de votre activité.",
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

export default function SuiviEvolution() {
  return (
    <main>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white pb-18 px-8">
                <Header />

                <h1 className='h5 pt-36'>Suivi & Évolution</h1>
                <h2 className='h1'>Votre écosystème digital est vivant. Il a besoin d&apos;attention pour rester performant, sécurisé, et aligné avec votre activité.</h2>
                <Button href="/vision">Découvrir comment je travaille</Button>
            </div>
        </section>


        <section id="problem">
            <div className="container mx-auto py-36 px-8">
                <FadeInLeft>
                    <p className='h5 mb-9'>Un site bien construit reste une fondation solide mais sans suivi, ce qui était performant peut devenir vulnérable ou dépassé </p>
                </FadeInLeft>
                <FadeInRight>
                    <p className='h5 text-right'><span>Pendant ce temps, votre activité évolue aussi.</span> Ce qui répondait à vos besoins il y a un an ne suffit peut-être plus aujourd&apos;hui.</p>
                </FadeInRight>
            </div>
        </section>
        
        <section id='approche' className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8">
                <FadeInRight>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Pas besoin de ré-expliquer votre projet à quelqu&apos;un de nouveau, on l&apos;a construit, on continue de s&apos;en occuper.</p>
                            <h3 className='pt-18'>On connaît déjà votre système</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Le travail de fond se fait en arrière-plan, pour que votre site reste fiable.</p>
                            <h3 className='pt-18'>La sécurité et les mises à jour, sans que vous y pensiez</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Quand votre activité change, votre écosystème suit : sans rupture, sans tout reconstruire.</p>
                            <h3 className='pt-18'>On évolue avec vous, pas après vous</h3>
                        </div>
                    </div>
                </FadeInRight>
            </div>
        </section>
      

        <OffresSection
        heading="On grandit avec vous"
        intro="Le suivi de votre écosystème n'est pas figé, il évolue avec vos besoins. Voici comment ça se structure, du socle indispensable à l'accompagnement growth."
        ctaHref="/contact"
        ctaLabel="Remplir mon brief"
        offres={[
            {
            title: "Sécurité & Stabilité",
            description: "La base : votre site reste à jour, sauvegardé et sécurisé. Vous n'avez pas à y penser.",
            features: [
                "Mises à jour techniques régulières",
                "Sauvegardes automatiques",
                "Surveillance et sécurité",
            ],
            price: "Des 90 chf/mois.",
            },
            {
            title: "Data & Conversion",
            description: "En plus de la sécurité, un suivi de vos performances pour savoir ce qui fonctionne et identifier les axes d'amélioration.",
            features: [
                "Tout le Palier 1 (sécurité, mises à jour, sauvegardes)",
                "Rapport trimestriel : trafic, comportement des visiteurs, taux de conversion",
                "Appel de débrief pour analyser les résultats ensemble",
            ],
            price: "Des 250 chf/mois.",
            },
            {
            title: "Évolution",
            description: "Votre activité a des projets d'évolution déjà identifiés : un nouveau service, une boutique en ligne, un système de réservation ? Ce palier garantit que ces évolutions seront prises en charge dès qu'elles seront prêtes, sans recommencer un nouveau processus à chaque fois.",
            features: [
                "Tout le Palier 2 (sécurité, data, appels de débrief)",
                "Temps de développement réservé pour vos évolutions planifiées",
                "Mise en œuvre prioritaire, sans nouveau brief à chaque demande",
            ],
            price: "Sur mesure",
            },
        ]}
        />


        <section id='for' className='gradient-primary'>
            <div className="container mx-auto py-36 px-8 text-center text-white">
                <FadeInStagger staggerDelay={0.15}>
                    <h2>C&apos;est le bon moment si...</h2>
                    <p className='py-8'>Votre site ou votre système vient d&apos;être livré, et vous voulez qu&apos;il reste performant</p>
                    <p className='py-8'>Vous n&apos;avez plus le temps (ni l&apos;envie) — de penser aux mises à jour et à la sécurité</p>
                    <p className='py-8'>Vous voulez savoir ce qui fonctionne sur votre site, pas juste espérer que ça marche</p>
                    <p className='py-8'>Votre activité évolue, et vous voulez que votre écosystème suive sans tout reconstruire</p>
                    <h3 className='pt-8'>Ce sujet, on en parle au bon moment</h3>
                    <p>Si vous travaillez déjà avec moi sur votre site ou vos automatisations, le suivi se met en place naturellement à la fin du projet. Si ce n&apos;est pas encore le cas, tout commence par les Fondations Digitales ou l&apos;Ingénierie & Automatisations.</p>
                    <Button href='/fondations-digitales'>Découvrir les Fondations Digitales</Button>
                    <Button href='/ingenierie-automatisation'>Découvrir l&apos;Ingénierie & Automatisations</Button>
                </FadeInStagger>
            </div>
        </section>


      <Footer />
    </main>
  );
}
