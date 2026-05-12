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

export const metadata: Metadata = {
  title: 'Tales — Personalized story videos for your child',
  description:
    "Upload a photo, pick a world, and we'll generate a short personalized video where your kid is the hero of their own adventure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
