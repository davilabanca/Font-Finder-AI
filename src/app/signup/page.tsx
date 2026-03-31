'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ArrowRight, Globe, Check } from 'lucide-react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at bottom left, hsla(var(--primary), 0.05), transparent)' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: '1000px', gap: '3rem', padding: '2rem' }}>
        {/* Left Side: Info */}
        <div style={{ flex: 1, display: 'none', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }} className="md-flex">
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>
            <div style={{ backgroundColor: 'hsl(var(--primary))', padding: '6px', borderRadius: '8px' }}>
              <Search size={24} color="white" />
            </div>
            <span>FontFinder<span style={{ color: 'hsl(var(--primary))' }}>AI</span></span>
          </Link>
          
          <h2 style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>Comece a identificar fontes como um <span style={{ color: 'hsl(var(--primary))' }}>pro</span> em segundos.</h2>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ color: 'hsl(var(--primary))' }}><Check size={20} /></div> 3 análises gratuitas mensais</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ color: 'hsl(var(--primary))' }}><Check size={20} /></div> Detecção de famílias tipográficas</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ color: 'hsl(var(--primary))' }}><Check size={20} /></div> Alternativas do Google Fonts</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ color: 'hsl(var(--primary))' }}><Check size={20} /></div> Histórico persistente</li>
          </ul>
          
          <div style={{ backgroundColor: 'hsla(var(--primary), 0.05)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid hsla(var(--primary), 0.1)' }}>
            <p style={{ fontStyle: 'italic', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
              "Mudou completamente minha velocidade de entrega em projetos de rebranding. Indispensável!"
            </p>
            <p style={{ marginTop: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}>— Lucas R., Diretor de Arte</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-card animate" style={{ width: '100%', maxWidth: '420px', padding: '2.5rem', flexShrink: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Criar conta</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Gratuito para sempre. Sem cartão de crédito.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>E-mail</label>
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className="glass" 
                style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius)', color: 'white' }} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Crie uma senha</label>
              <input 
                type="password" 
                placeholder="Mínimo 8 caracteres" 
                className="glass" 
                style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius)', color: 'white' }} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Começar Agora
              <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ position: 'relative', margin: '1.5rem 0', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: 'hsl(var(--border))', zIndex: -1 }}></div>
            <span style={{ backgroundColor: 'hsl(var(--card))', padding: '0 10px', color: 'hsl(var(--muted-foreground))', fontSize: '0.75rem' }}>OU CADASTRE COM</span>
          </div>

          <button className="btn-outline" style={{ width: '100%', display: 'flex', gap: '10px' }}>
            <Globe size={20} />
            GitHub
          </button>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
            Já possui uma conta? <Link href="/login" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>Entrar</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
        }
      `}</style>
    </main>
  );
}
