'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
      <div className="container" style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Outfit' }}>
          <div style={{ backgroundColor: 'hsl(var(--primary))', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Search size={20} color="white" />
          </div>
          <span>FontFinder<span style={{ color: 'hsl(var(--primary))' }}>AI</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '32px' }} className="md-flex">
          <Link href="#features" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'hsl(var(--muted-foreground))' }}>Funcionalidades</Link>
          <Link href="#how-it-works" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'hsl(var(--muted-foreground))' }}>Como Funciona</Link>
          <Link href="#pricing" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'hsl(var(--muted-foreground))' }}>Preços</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/login" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'hsl(var(--muted-foreground))' }} className="md-block">Entrar</Link>
          <Link href="/signup" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>Começar Grátis</Link>
          
          <button 
            style={{ background: 'none', color: 'white', display: 'none' }} 
            className="md-hide"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-block { display: block !important; }
          .md-hide { display: none !important; }
        }
      `}</style>
    </header>
  );
}
