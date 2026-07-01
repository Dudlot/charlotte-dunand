'use client';

import Script from 'next/script';

export default function AuditForm() {
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/eqo9Ol?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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