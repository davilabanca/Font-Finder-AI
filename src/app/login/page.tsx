'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ArrowRight, Globe } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at top right, hsla(var(--primary), 0.05), transparent)' }}>
      <div className="glass-card animate" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit', marginBottom: '1rem' }}>
            <div style={{ backgroundColor: 'hsl(var(--primary))', padding: '6px', borderRadius: '8px' }}>
              <Search size={24} color="white" />
            </div>
            <span>FontFinder<span style={{ color: 'hsl(var(--primary))' }}>AI</span></span>
          </Link>
          <h2 style={{ fontSize: '1.5rem' }}>Bem-vindo de volta</h2>
          <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Entre na sua conta para continuar suas análises.
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Senha</label>
              <Link href="#" style={{ fontSize: '0.75rem', color: 'hsl(var(--primary))' }}>Esqueceu a senha?</Link>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="glass" 
              style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius)', color: 'white' }} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Entrar
            <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ position: 'relative', margin: '1.5rem 0', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: 'hsl(var(--border))', zIndex: -1 }}></div>
          <span style={{ backgroundColor: 'hsl(var(--card))', padding: '0 10px', color: 'hsl(var(--muted-foreground))', fontSize: '0.75rem' }}>OU CONTINUE COM</span>
        </div>

        <button className="btn-outline" style={{ width: '100%', display: 'flex', gap: '10px' }}>
          <Globe size={20} />
          GitHub
        </button>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
          Não tem uma conta? <Link href="/signup" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>Criar agora</Link>
        </p>
      </div>
    </main>
  );
}
