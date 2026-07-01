import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <div className="container mx-auto pt-28 pb-14 px-8">
          <div className="flex flex-col sm:flex-row text-xs gap-4">
            <div className='flex-2'>
              <p className='font-semibold'>Architecte digitale</p>
              {/* <p>Chem. du Pavillon 2,</p>
              <p className="mb-5">1218 Le Grand-Saconnex, Suisse</p> */}
              <p>Rue de Chantepoulet 10,</p>
              <p className="mb-5">1201 Genève, Suisse</p>
              <a href="tel:+41783240133">+41 78 324 01 33</a><br />
              <a href="mailto:contact@charlotte-dunand.com" >contact@charlotte-dunand.com</a>
            </div>
            <div className='flex-1'>
              <p className='font-semibold'>Navigation</p>
              <Link href='/fondations-digitales' className='block'>Fondations digitales</Link>
              <Link href='/ingenierie-automatisation' className='block'>Ingénierie & Automatisation</Link>
              <Link href='/suivi-evolution' className='block'>Suivi & évolution</Link>
              <br />
              <Link href='/vision' className='block'>À propos</Link>
              <Link href='/shop/audit-digital' className='block'>Audit digital</Link>

            </div>
            <div className='flex-1 text-left sm:text-right'>
              <p className='font-semibold'>Réseaux</p>
              <Link href={'https://www.linkedin.com/in/cdunand/'} target='blank'>Linkedin</Link>
              <Link href={'https://www.instagram.com/charlotte_dunand/'} target='blank'>Instagram</Link>
              <Link href={'https://www.tiktok.com/@charlottepastelles'} target='blank'>Tiktok</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end text-xs">
              <Image src="/logo-cerise.svg" alt="Logo" width={506} height={139} className="mt-5" />
              <p className='text-left sm:text-right mt-1'><Link href={'/legales/mentions-politiques'}>Mentions légales - Politique de confidentialité</Link> - <Link href={'/legales/cgv'}>CGV</Link> <br />
              2026 Charlotte Dunand. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
  );
}