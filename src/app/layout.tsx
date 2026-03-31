import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Including 300 as requested
  variable: '--font-host-grotesk',
});

export const metadata: Metadata = {
  title: 'Font Finder AI - Identificação Profissional de Fontes',
  description: 'Descubra qual fonte está sendo usada em qualquer imagem com precisão de IA. Analise tracking, distorção e encontre alternativas gratuitas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={hostGrotesk.variable}>
      <body className={hostGrotesk.className}>{children}</body>
    </html>
  );
}

