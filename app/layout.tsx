import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  style: ['normal', 'italic'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const siteUrl = 'https://tales-landing-page.vercel.app'; // TODO: update to final domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tales — Personalized story videos for your child',
  description:
    "Upload a photo, pick a world, and we'll generate a short personalized video where your kid is the hero of their own adventure.",
  openGraph: {
    title: 'Tales — Personalized story videos for your child',
    description:
      "Upload a photo, pick a world, and we'll generate a short personalized video where your kid is the hero of their own adventure.",
    url: siteUrl,
    siteName: 'Tales',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tales — Personalized story videos for your child',
    description:
      "Upload a photo, pick a world, and we'll generate a short personalized video where your kid is the hero of their own adventure.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
