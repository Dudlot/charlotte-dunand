import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import FadeInStagger from '@/components/layout/FadeInStagger';
import FadeInLeft from '@/components/layout/FadeInLeft';
import FadeInRight from '@/components/layout/FadeInRight';
import OffresSection from '@/components/layout/OffresSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ingénierie & Automatisations | Charlotte Dunand",
  description: "Vos outils ne communiquent pas, vos process sont chronophages ? Audit, intégrations et automatisations sur-mesure pour que votre écosystème digital travaille pour vous.",
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

export default function IngenierieAutomatisation() {
  return (
    <main>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white pb-18 px-8">
                <Header />

                <h1 className='h5 pt-36'>Ingénierie & Automatisations</h1>
                <h2 className='h1'>Plus vous grandissez, plus vos outils se multiplient. À un moment, c&apos;est vous qui devenez la pièce manquante entre eux.</h2>
                <Button href="/contact">Remplir mon brief</Button>
            </div>
        </section>


        <section id="problem">
            <div className="container mx-auto py-36 px-8">
                <FadeInLeft>
                    <p className='h5 mb-9'>Un CRM pour les contacts, un outil de facturation, un autre pour les emails, un tableur pour suivre les projets : chaque outil fait bien son travail, pris individuellement</p>
                </FadeInLeft>
                <FadeInRight>
                    <p className='h5 text-right'>Ce n&apos;est jamais assez grave pour s&apos;arrêter et tout changer. <span>Mais ça grignote du temps, jour après jour</span>, du temps qui devrait aller à votre activité, pas à la maintenance de vos outils.</p>
                </FadeInRight>
            </div>
        </section>
        
        <section id='approche' className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8">
                <FadeInRight>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Avant de connecter ou d&apos;automatiser quoi que ce soit, on regarde ce que vous utilisez déjà et pourquoi.</p>
                            <h3 className='pt-18'>On part de l&apos;existant, jamais de zéro</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Le bon outil au bon endroit, qui communique avec le reste — pas un nouvel outil qui s&apos;ajoute à la pile.</p>
                            <h3 className='pt-18'>Connecter avant d&apos;ajouter</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Chaque automatisation doit vous rendre du temps réel, pas juste être technologiquement impressionnante.</p>
                            <h3 className='pt-18'>Automatiser ce qui vous coûte du temps, pas ce qui est gadget</h3>
                        </div>
                    </div>
                </FadeInRight>
            </div>
        </section>
      

        <OffresSection
        heading="Le point de départ : voir clair sur votre écosystème"
        intro="Avant de connecter ou d'automatiser quoi que ce soit, il faut savoir ce qu'on a entre les mains. L'Audit Digital est la première étape, toujours."
        ctaHref="/contact"
        ctaLabel="Remplir mon brief"
        offres={[
            {
            title: "Audit Digital",
            description: "Une analyse complète de vos outils actuels, de vos process et de vos flux de données. À la fin, vous savez précisément ce qui fonctionne, ce qui freine, et ce qui peut être amélioré.",
            features: [
                "Analyse complète de l'existant : outils, process, flux de données",
                "Appel de débrief pour discuter des résultats",
                "Rapport détaillé avec recommandations claires",
            ],
            price: "500 chf",
            },
            {
            title: "Et après l'audit ?",
            description: "Selon les conclusions, deux types d'intervention sont possibles :",
            features: [
                "Setup de Base : connexions et automatisations simples (ex : formulaire connecté à votre CRM)",
                "Workflow Complet : un processus métier entier repensé et automatisé (ex : onboarding client de A à Z)",
            ],
            price: "Tarifs selon l'audit",
            },
        ]}
        />


        <section id='for' className='gradient-primary'>
            <div className="container mx-auto py-36 px-8 text-center text-white">
                <FadeInStagger staggerDelay={0.15}>
                    <h2>Vous êtes au bon endroit si...</h2>
                    <p className='py-8'>Vous utilisez plusieurs outils, mais aucun ne se parle</p>
                    <p className='py-8'>Vous passez du temps à transférer des informations d&apos;un endroit à l&apos;autre</p>
                    <p className='py-8'>Certaines tâches reviennent chaque semaine et pourraient se faire seules</p>
                    <p className='py-8'>Vous avez l&apos;impression que votre activité a grandi plus vite que votre organisation</p>
                    <p className='py-8'>Vous voulez de la clarté avant d&apos;investir dans de nouveaux outils</p>
                    <h3 className='pt-8'>Prêt à faire respirer votre écosystème ?</h3>
                    <p>La première étape, c&apos;est l&apos;audit. En une analyse, vous saurez exactement où se situent les frictions et ce qui peut être amélioré.</p>
                    <Button href='/'>Remplir mon brief</Button>
                </FadeInStagger>
            </div>
        </section>


      <Footer />
    </main>
  );
}
