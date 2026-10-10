import { SUBSTACK_URL } from '@/lib/site';

// Lien vers la page d'abonnement Substack : aucun script ni cookie tiers chargé sur le site
export default function NewsletterSection() {
  return (
    <section id="newsletter" className="bg-[var(--vin)]">
      <div className="container mx-auto py-28 px-8 text-white text-center flex flex-col items-center">
        <p className="h5">La newsletter</p>
        <h2 className="max-w-3xl">Recevoir les prochains articles</h2>
        <p className="max-w-xl pt-4">
          Méthodes, retours d&apos;expérience et réflexions sur le digital qui fait tourner les entreprises. Un email quand un nouvel article sort, rien de plus.
        </p>
        <a
          href={`${SUBSTACK_URL}/subscribe`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative isolate inline-block px-6 py-3 rounded-2xl bg-transparent text-white font-medium uppercase mt-12 border border-white transition-colors duration-300 hover:text-[var(--vin)] overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-white before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 hover:before:scale-y-100"
        >
          S&apos;abonner sur Substack
        </a>
      </div>
    </section>
  );
}
