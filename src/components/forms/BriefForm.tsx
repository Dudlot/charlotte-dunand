'use client';

import { Suspense } from 'react';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';

// Sources acceptées dans l'URL (?source=…), transmises au champ caché « source » de Tally
const ALLOWED_SOURCES = ['agence'];

// Le formulaire s'affiche aussitôt ; la source est ajoutée dès que l'URL est lue (Suspense requis par useSearchParams)
export default function TallyForm() {
  return (
    <Suspense fallback={<TallyEmbed sourceParam="" />}>
      <TallyFormWithSource />
    </Suspense>
  );
}

function TallyFormWithSource() {
  const source = useSearchParams().get('source');
  const sourceParam = source && ALLOWED_SOURCES.includes(source) ? `&source=${source}` : '';
  return <TallyEmbed sourceParam={sourceParam} />;
}

function TallyEmbed({ sourceParam }: { sourceParam: string }) {
  return (
    <>
      <iframe
        data-tally-src={`https://tally.so/embed/ODV80R?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1${sourceParam}`}
        loading="lazy"
        width="80%"
        height="544"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Parlons de votre projet"
        className='mx-auto'
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-expect-error Tally n'est pas typé
          if (typeof Tally !== 'undefined') {
            // @ts-expect-error Tally n'est pas typé
            Tally.loadEmbeds();
          }
        }}
      />
    </>
  );
}