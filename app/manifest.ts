import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tales',
    short_name: 'Tales',
    description: 'Personalized story videos for your child',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    theme_color: '#ff6700',
    background_color: '#ffe8d9',
    display: 'standalone',
  };
}
