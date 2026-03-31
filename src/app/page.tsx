'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ArrowRight, Zap, Target, MousePointer2, ShieldCheck, Star, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'hsl(var(--background))' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '95vh', display: 'flex', alignItems: 'center', padding: '4rem 0' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'radial-gradient(circle at 50% -20%, hsla(var(--primary), 0.15) 0%, transparent 70%), radial-gradient(circle at 0% 100%, hsla(var(--accent), 0.05) 0%, transparent 40%)' }}></div>
        
        <div className="container animate" style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'hsla(var(--primary), 0.05)', color: 'hsl(var(--primary))', padding: '8px 20px', borderRadius: '30px', fontSize: '0.875rem', fontWeight: 400, border: '1px solid hsla(var(--primary), 0.1)', marginBottom: '2.5rem' }}>
            <Sparkles size={16} />
            Nova Geração de Identificação Tipográfica
          </div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: 300, marginBottom: '2rem', letterSpacing: '-2px', lineHeight: 1, color: 'hsl(var(--foreground))' }}>
            Identifique Fontes com <span className="text-cyan" style={{ fontWeight: 500 }}>Precisão Master</span> em segundos.
          </h1>
          
          <p style={{ fontSize: '1.25rem', fontWeight: 200, color: 'hsl(var(--muted-foreground))', maxWidth: '700px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
            A primeira IA desenvolvida para designers técnicos. Detecte famílias, trackings complexos e alternativas gratuitas equivalentes no clique.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/signup" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', boxShadow: '0 15px 40px -10px hsla(var(--accent), 0.4)' }}>
              CRIAR CONTA GRÁTIS
              <ArrowRight size={20} />
            </Link>
            <Link href="#pricing" style={{ fontSize: '1rem', fontWeight: 400, color: 'hsl(var(--muted))', borderBottom: '1px solid hsla(var(--muted), 0.3)', paddingBottom: '2px' }}>
              Ver Planos
            </Link>
          </div>
          
          <div style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
             <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 500 }}>4.9/5</div>
                <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted))', fontWeight: 600 }}>DESIGNER RATING</div>
             </div>
             <div style={{ width: '1px', height: '40px', backgroundColor: 'hsla(var(--foreground), 0.1)' }}></div>
             <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 500 }}>85k+</div>
                <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted))', fontWeight: 600 }}>ANALYSES RUN</div>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '8rem 0', backgroundColor: 'hsla(var(--foreground), 0.01)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '1rem', letterSpacing: '-1px' }}>Power features for <span className="text-cyan">Creative Minds</span>.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <div className="text-cyan" style={{ marginBottom: '1.5rem' }}><Zap size={40} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Análise em Tempo Real</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontWeight: 200, lineHeight: 1.6 }}>O motor mais rápido do mercado. Processamento instantâneo direto no navegador.</p>
            </div>
            <div className="glass-card" style={{ padding: '3rem', border: '1px solid hsla(var(--primary), 0.1)' }}>
              <div className="text-lime" style={{ marginBottom: '1.5rem' }}><Target size={40} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Engine Heurística</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontWeight: 200, lineHeight: 1.6 }}>Detectamos distorções, tracking e pesos variáveis com precisão estatística.</p>
            </div>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <div className="text-cyan" style={{ marginBottom: '1.5rem' }}><MousePointer2 size={40} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Match Inteligente</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', fontWeight: 200, lineHeight: 1.6 }}>Sugestões imediatas de alternativas gratuitas no Google Fonts para seus projetos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '10rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-1.5px', marginBottom: '1rem' }}>Planos Simples. <span className="text-lime">Poder Ilimitado.</span></h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {/* Free */}
            <div className="glass-card" style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'hsl(var(--muted))', marginBottom: '2rem' }}>BASIC</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '3rem' }}>
                <span style={{ fontSize: '4.5rem', fontWeight: 300, letterSpacing: '-3px' }}>$0</span>
                <span style={{ fontSize: '1rem', color: 'hsl(var(--muted))' }}>/month</span>
              </div>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200 }}><Check size={18} className="text-cyan" /> 3 análises mensais</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, opacity: 0.5 }}><Sparkles size={18} /> Histórico avançado</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, opacity: 0.5 }}><ShieldCheck size={18} /> OCR Pro</li>
              </ul>
              
              <Link href="/signup" className="btn-outline" style={{ textAlign: 'center', fontWeight: 300 }}>COMEÇAR AGORA</Link>
            </div>
            
            {/* Pro */}
            <div className="glass-card" style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', border: '1px solid hsla(var(--primary), 0.2)', backgroundColor: 'hsla(var(--primary), 0.02)' }}>
              <div style={{ marginBottom: '1rem' }}><span className="text-cyan" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>MOST POPULAR</span></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '2rem' }}>PRO DESIGNER</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '3rem' }}>
                <span style={{ fontSize: '4.5rem', fontWeight: 300, letterSpacing: '-3px' }}>$19</span>
                <span style={{ fontSize: '1rem', color: 'hsl(var(--muted))' }}>/month</span>
              </div>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> Análises Ilimitadas</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> OCR Avançado & Tracking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> Coleção de Favoritos</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> Exportação em PDF High-Res</li>
              </ul>
              
              <Link href="/signup" className="btn-primary" style={{ textAlign: 'center', fontWeight: 400 }}>UPGRADE TO PRO</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
