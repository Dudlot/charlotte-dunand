import Footer from './components/layout/Footer';
import Image from './components/ui/Image';

export default function Home() {
  return (
    <>
      <section id='hero' className='px-6 md:px-12 lg:px-24 pb-16 md:pb-18 lg:pb-24 bg-secondary-500'>
        <div className='flex flex-col justify-center text-center'>
          <Image src="/img/Charlotte-Dunand.webp" alt="Charlotte Dunand" className="w-1/3 mx-auto" />
          <h1 className='font-charlotte text-neutral-500 text-9xl -mt-16'>Charlotte Dunand</h1>
          <h2 className='text-neutral-500 text-xl uppercase font-extralight'>Architecte digitale et communication humaine</h2>
        </div>
      </section>

      <section id='infos' className='px-6 md:px-12 lg:px-24 py-2 md:py-4 lg:py-8 bg-neutral-500 rotate-[-2deg] -mt-12 shadow-lg'>
        <div className='flex gap-8 justify-center'>
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:contact@charlotte-dunand.com" className='secondary'>contact@charlotte-dunand.com</a>
          </div>
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <a href="tel:+41783241103">+41 78 324 11 03</a>
          </div>
        </div>
      </section>

      <section id='manifest' className='px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16 bg-neutral-500'>
        <div className='flex flex-col justify-center text-center px-6 md:px-12 lg:px-24'>
          <h2 className='font-charlotte text-secondary-500 text-7xl mb-2'>Manifeste</h2>
          <h3 className='text-xl uppercase font-extralight mb-2'>Bâtir des espaces, créer des liens</h3>
          <strong>Pourquoi Architecte ?</strong>
          <p className='text-lg mb-4 px-6 md:px-12 lg:px-24'>Parce que j’aime construire. J’aime l’idée qu’une ligne de code, comme une brique, participe à élever un édifice. J’aborde chaque projet numérique avec l’œil d’un bâtisseur : je cherche la stabilité, l’ergonomie et l’élégance de la structure.</p>
          <strong>Pourquoi Humaine ?</strong>
          <p className='text-lg mb-4 px-6 md:px-12 lg:px-24'>Parce que la plus belle des architectures reste vide sans vie. J’ai compris très tôt que le design n’est pas de la décoration, c’est du langage. Un événement réussi, une interface fluide, une identité marquante, tout cela ne sert qu’à une seule chose : connecter les gens entre eux.</p>
          <strong>Mon rôle ?</strong>
          <p className='text-lg mb-4 px-6 md:px-12 lg:px-24'>Être le point de liaison. Je traduis vos besoins humains en solutions techniques, et je m’assure que la technologie reste toujours au service de l’expérience, jamais l’inverse.</p>
        </div>
      </section>

      <section id='pastelles' className='px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16'>
        <div className='bg-secondary-500 rounded-xl px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16 shadow-lg'>Pastelles</div>
      </section>

      <section id='declic' className='px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16'>
        <div className='bg-secondary-500 rounded-xl px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16 shadow-lg'>Declic</div>
      </section>

      <Footer />
    </>
  );
}
