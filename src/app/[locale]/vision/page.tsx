import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import FadeInStagger from '@/components/layout/FadeInStagger';
import FadeInLeft from '@/components/layout/FadeInLeft';
import FadeInRight from '@/components/layout/FadeInRight';
import OffresSection from '@/components/layout/OffresSection';
import Image from 'next/image';


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vision | Charlotte Dunand",
  description: "Graphiste de formation, passée par le code, l'entrepreneuriat et l'IA : découvrez le parcours et la philosophie derrière Charlotte Dunand, Architecte Digitale entre la Haute-Savoie et la Suisse romande.",
};

export default function Vision() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='h5 pt-36'>« Un beau site sans moteur derrière n&apos;est qu&apos;une coquille vide. Un système performant mais complexe est un fardeau. Mon obsession : réunir les deux. »</h1>
                <h2 className='h1'>Derrière cette philosophie, il y a un parcours.</h2>
                <p>Graphiste à l&apos;origine, passée par le code, l&apos;entrepreneuriat et l&apos;IA : voici comment tout ça s&apos;est assemblé.</p>
            </div>
        </section>


        <section id="problem">
            <div className="container mx-auto py-36 px-8">
                <div className="flex items-center">
                    <div>
                        <FadeInLeft>
                            <p className='mb-9 max-w-3xl'>Tout a commencé par le design. Une formation de graphiste, 
                                l&apos;envie de créer des choses qui ont de l&apos;allure et puis la découverte du code, presque par curiosité. 
                                Ce qui n&apos;était qu&apos;une compétence technique en plus est devenu une révélation : donner vie à un projet, pas seulement l&apos;imaginer.
                            </p>
                        </FadeInLeft>
                        <FadeInLeft>
                            <p className='mb-9 max-w-3xl pl-16'>De là, tout s&apos;est enchaîné naturellement. 
                                L&apos;entrepreneuriat, parce qu&apos;il fallait bien structurer cette nouvelle façon de travailler. 
                                L&apos;intelligence artificielle, parce que les possibilités décuplaient à vue d&apos;œil. 
                                Et au milieu de tout ça, une envie qui n&apos;a jamais changé : accompagner des gens ambitieux sur des projets qui sortent du cadre.
                            </p>
                        </FadeInLeft>
                        <FadeInLeft>
                            <p className='mb-9 max-w-3xl pl-32 text-[var(--cerise)]'>Architecte Digitale, c&apos;est le titre qui est resté parce qu&apos;aucun autre ne couvrait vraiment ce que recouvre ce métier aujourd&apos;hui.</p>
                        </FadeInLeft>
                    </div>
                    <div className='px-24'>
                        <FadeInRight>
                        <Image
                            src="/img/dude-cafe-nb1.jpeg"
                            alt="Charlotte Dunand au café"
                            width={844}
                            height={1500}
                            className="w-full h-auto rounded-2xl"
                            />
                            </FadeInRight>
                    </div>
                </div>
            </div>
        </section>
        
        <section id='approche' className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8">
                <FadeInRight>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Le prix d&apos;un projet reflète sa valeur et son impact, pas le nombre d&apos;heures passées dessus.</p>
                            <h3 className='pt-18'>On vend des résultats, pas du temps</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Tout passe par un espace de travail centralisé et des points de contact définis. Moins de messages éparpillés, plus de clarté sur l&apos;avancement.</p>
                            <h3 className='pt-18'>Un cadre clair, pour vous comme pour moi</h3>
                        </div>
                        <div className="approche-item flex-1 text-white flex flex-col justify-between">
                            <p>Les projets ont des hauts et des bas. Je préfère montrer comment les choses se construisent vraiment plutôt qu&apos;une image lissée.</p>
                            <h3 className='pt-18'>La transparence, même quand ce n&apos;est pas parfait</h3>
                        </div>
                    </div>
                </FadeInRight>
            </div>
        </section>
      

        <div id="geneve">
            <div className="flex flex-col sm:flex-row">
                <div className="flex-1 py-36 px-8">
                    <h3 className="mb-4">Un pied en Haute-Savoie, une portée plus large</h3>
                    <p className="text-xs">Basée en Haute-Savoie, avec une activité qui s&apos;étend à la Suisse romande et bien au-delà. Le travail se fait principalement à distance, les échanges en personne se planifient au cas par cas, selon les disponibilités.</p>
                </div>
                <div className="flex-1 gradient-primary text-white flex flex-col justify-center gap-6 py-24 px-8">
                    <p className="h3">Haute-Savoie</p>
                    <p className="h3">Suisse romande</p>
                    <p className="h3">À distance, partout ailleurs</p>
                </div>
            </div>
        </div>


        <section id='for' className='gradient-primary'>
            <div className="container mx-auto py-36 px-8 text-center text-white">
                <FadeInStagger staggerDelay={0.15}>
                    <h2>Envie de construire quelque chose ensemble ?</h2>
                    <p className='py-8'>Maintenant que vous savez qui se cache derrière l&apos;écran, parlons de votre projet.</p>
                    <Button href='/contact'>Remplir mon brief</Button>
                </FadeInStagger>
            </div>
        </section>


      <Footer />
    </main>
  );
}
