'use client';

import ButtonCerise from '@/components/ui/ButtonCerise';

interface Offre {
  title: string;
  description: string;
  featuresLabel: string;
  features: string[];
  price: string;
  ctaHref: string;
  ctaLabel: string;
}

interface OffresSectionProps {
  heading: string;
  intro: string;
  ctaHref: string;
  ctaLabel: string;
  offres: Offre[];
}

export default function OffresSection({ heading, intro, ctaHref, ctaLabel, offres }: OffresSectionProps) {
  const count = offres.length;

  return (
    <section id="offres">
      <div className="container mx-auto py-36 px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* Colonne gauche */}
          <div className="flex-1">
            <h2>{heading}</h2>
            <p className="mb-4">{intro}</p>
            <ButtonCerise href={ctaHref}>{ctaLabel}</ButtonCerise>
          </div>

          {/* Colonne droite */}
          <div className="flex-2 flex flex-col text-sm">
            {offres.map((offre, i) => (
              <div
                key={i}
                className={`offre-item flex flex-col sm:flex-row gap-8 ${i === count - 1 ? 'pt-4' : 'border-b pb-4'}`}
              >
                <OffreContent offre={offre} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function OffreContent({ offre }: { offre: Offre }) {
  return (
    <>
      <div className="flex-1 py-4">
        <h3 className="mb-4">{offre.title}</h3>
        <p className="text-xs">{offre.description}</p>
      </div>
      <div className="flex-1 py-4">
        <h5>{offre.featuresLabel}</h5>
        <ul className="mb-4 custom-list">
          {offre.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <p className="h4 mb-4">{offre.price}</p>
        <ButtonCerise href={offre.ctaHref}>{offre.ctaLabel}</ButtonCerise>
      </div>
    </>
  );
}