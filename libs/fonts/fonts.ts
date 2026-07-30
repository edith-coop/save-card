// src/libs/fonts.ts
import localFont from 'next/font/local';

export const playpenSansFont = localFont({
  variable: '--font-playpenSans',
  src: [
    {
      path: '../../public/fonts/playpen-sans/PlaypenSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/playpen-sans/PlaypenSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
     path: '../../public/fonts/playpen-sans/PlaypenSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
