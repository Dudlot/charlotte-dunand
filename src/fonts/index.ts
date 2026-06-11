import localFont from 'next/font/local';

export const alphazet = localFont({
  src: [
    { path: './Alphazet-Light.woff2', weight: '400', style: 'normal' },
    { path: './Alphazet-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-alphazet',
  display: 'swap',
});

export const calloveya = localFont({
  src: './Calloveya.woff2',
  variable: '--font-calloveya',
  display: 'swap',
});