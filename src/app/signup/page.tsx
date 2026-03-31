'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ArrowRight, Globe, Check } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_name', name);
    }
    window.location.href = '/dashboard';
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at bottom left, hsla(var(--primary), 0.05), transparent)' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: '1000px', gap: '4rem', padding: '2rem' }}>
        {/* Left Side: Info */}
        <div style={{ flex: 1, display: 'none', flexDirection: 'column', justifyContent: 'center', gap: '2.5rem' }} className="md-flex animate">
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.5px' }}>
            <div style={{ backgroundColor: 'hsl(var(--primary))', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search size={22} color="#001011" />
            </div>
            <span>FontFinder<span className="text-cyan">AI</span></span>
          </Link>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-1.5px' }}>Comece a identificar fontes como um <span className="text-cyan" style={{ fontWeight: 500 }}>Pro</span> em segundos.</h2>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200 }}><Check size={20} className="text-cyan" /> 3 análises gratuitas mensais</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200 }}><Check size={20} className="text-cyan" /> Detecção de famílias tipográficas</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200 }}><Check size={20} className="text-cyan" /> Alternativas do Google Fonts</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200 }}><Check size={20} className="text-cyan" /> Histórico persistente</li>
          </ul>
          
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid hsla(var(--primary), 0.1)' }}>
            <p style={{ fontStyle: 'italic', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6 }}>
              "Mudou completamente minha velocidade de entrega em projetos de rebranding. Indispensável!"
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 500, fontSize: '0.875rem' }} className="text-lime">— Lucas R., Diretor de Arte</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-card animate" style={{ width: '100%', maxWidth: '440px', padding: '3.5rem 3rem', flexShrink: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '-0.5px' }}>Criar Conta</h2>
            <p style={{ color: 'hsl(var(--muted))', fontSize: '0.875rem', marginTop: '0.75rem', fontWeight: 200 }}>
              Gratuito para sempre. Sem cartão.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSignup}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <label style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--muted))', letterSpacing: '0.05em' }}>NOME COMPLETO</label>
              <input 
                type="text" 
                placeholder="Seu nome" 
                style={{ padding: '1rem', backgroundColor: 'hsla(var(--foreground), 0.02)', border: '1px solid hsla(var(--foreground), 0.1)', borderRadius: '12px', color: 'white', fontSize: '0.875rem', fontWeight: 200 }} 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <label style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--muted))', letterSpacing: '0.05em' }}>E-MAIL</label>
              <input 
                type="email" 
                placeholder="seu@email.com" 
                style={{ padding: '1rem', backgroundColor: 'hsla(var(--foreground), 0.02)', border: '1px solid hsla(var(--foreground), 0.1)', borderRadius: '12px', color: 'white', fontSize: '0.875rem', fontWeight: 200 }} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <label style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--muted))', letterSpacing: '0.05em' }}>SENHA</label>
              <input 
                type="password" 
                placeholder="Mínimo 8 caracteres" 
                style={{ padding: '1rem', backgroundColor: 'hsla(var(--foreground), 0.02)', border: '1px solid hsla(var(--foreground), 0.1)', borderRadius: '12px', color: 'white', fontSize: '0.875rem', fontWeight: 200 }} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.25rem', backgroundColor: 'hsl(var(--primary))', color: '#001011', fontWeight: 600 }}>
              COMEÇAR AGORA
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
