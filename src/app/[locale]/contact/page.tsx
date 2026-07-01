import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import BriefForm from '@/components/forms/BriefForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact — Démarrer votre projet | Charlotte Dunand",
  description: "Parlons de votre projet digital. Remplissez le brief initial et choisissez votre format d'échange en visio ou dans nos bureaux à Genève.",
};

export default function Contact() {
  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white text-center pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Parlons de votre projet</h1>
                <p>Quelques minutes pour me parler de votre activité, vos objectifs et votre contexte. Une fois le formulaire envoyé, vous choisissez comment on se retrouve en visio ou dans nos bureaux à Genève.</p>
            </div>
        </section>


        <section id="brief">
            <div className="container mx-auto py-36 px-8">
                <BriefForm />
            </div>
        </section>

        <section className='bg-[var(--vin)]'>
            <div className="container mx-auto py-36 px-8 text-white text-center">
                <h2>Pour tout autre demande</h2>
                 <a href="tel:+41783240133">+41 78 324 01 33</a><br />
              <a href="mailto:contact@charlotte-dunand.com" >contact@charlotte-dunand.com</a>
            </div>
        </section>

      <Footer />
    </main>
  );
}
