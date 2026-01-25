import { Urbanist } from 'next/font/google';
import localFont from 'next/font/local';

// 🌐 GOOGLE FONT
export const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'], 
});

// 📁 FONT LOCALE
export const charlotteFont = localFont({
  src: [
    {
      path: '../../public/fonts/Charlotte Southern.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-charlotte',
  display: 'swap',
});
