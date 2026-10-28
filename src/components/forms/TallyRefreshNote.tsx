'use client';

// L'embed Tally ne se charge pas toujours du premier coup : on propose de rafraîchir
export default function TallyRefreshNote() {
  return (
    <p className='text-xs text-center opacity-70 mb-6'>
      Le formulaire ne s&apos;affiche pas ?{' '}
      <button type='button' onClick={() => window.location.reload()} className='underline cursor-pointer'>
        Rafraîchissez la page
      </button>
      , il apparaîtra.
    </p>
  );
}
