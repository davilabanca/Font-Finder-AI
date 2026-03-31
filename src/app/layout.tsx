import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

