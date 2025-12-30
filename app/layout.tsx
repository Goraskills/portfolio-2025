import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

// Import de vos composants globaux
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Noise from '@/components/Noise';
import GridBackground from '@/components/GridBackground'; // 1. IMPORT AJOUTÉ

// Configuration des polices
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const mono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
});

// CONFIGURATION SEO (MÉTADONNÉES)
export const metadata: Metadata = {
  title: 'Lamine Cissé | Creative Developer & Pilot',
  description: 'Portfolio de Lamine Cissé. Expert en Architecture Système, Aviation Civile et Développement Web Premium.',
  keywords: ['Developpeur', 'Pilote', 'Aviation', 'Next.js', 'React', 'Sénégal', 'Tech'],
  openGraph: {
    title: 'Lamine Cissé | Le Code avec la Rigueur de l\'Aviation',
    description: 'Découvrez l\'arsenal technique et les projets de Lamine Cissé.',
    url: 'https://laminecisse.com',
    siteName: 'Lamine Cissé Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-[#050508] text-white antialiased selection:bg-blue-500/30 selection:text-white">
        
        {/* 1. ÉCRAN DE CHARGEMENT */}
        <Preloader />

        {/* 2. GRAIN GLOBAL */}
        <Noise />

        {/* 3. GRILLE TECHNIQUE DE FOND (AJOUTÉ) */}
        <GridBackground />

        {/* 4. CURSEUR PERSONNALISÉ */}
        <CustomCursor />

        {/* 5. DÉFILEMENT FLUIDE (Englobe tout le site) */}
        <SmoothScroll>
          {children}
        </SmoothScroll>

      </body>
    </html>
  );
}