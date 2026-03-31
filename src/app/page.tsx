'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ArrowRight, Zap, Target, MousePointer2, ShieldCheck, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        {/* Animated Background Placeholder (using system-generated hero) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'radial-gradient(circle at top right, hsla(var(--primary), 0.15) 0%, transparent 50%), radial-gradient(circle at bottom left, hsla(var(--primary), 0.05) 0%, transparent 40%)' }}></div>
        
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <div className="animate animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <span style={{ 
              backgroundColor: 'hsla(var(--primary), 0.1)', 
              color: 'hsl(var(--primary))', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '0.875rem', 
              fontWeight: 600,
              border: '1px solid hsla(var(--primary), 0.2)'
            }}>
              Nova Geração de Identificação Tipográfica
            </span>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', margin: '1.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Identifique Fontes com <span className="gradient-text">Precisão Cirúrgica</span> no Clique.
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'hsl(var(--muted-foreground))', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              A primeira IA que entende de verdade a tipografia. Detecte famílias, trackings alterados e alternativas semelhantes em segundos.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/signup" className="btn-primary pulse" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                Começar Agora Grátis
                <ArrowRight size={20} />
              </Link>
              <Link href="#how-it-works" className="btn-outline" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                Ver Demonstração
              </Link>
            </div>
            
            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', opacity: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Star size={16} /> 4.9/5 Avaliação</div>
              <div style={{ width: '1px', height: '16px', backgroundColor: 'hsl(var(--border))' }}></div>
              <div>+10.000 de designers usam hoje</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Proof Section */}
      <section id="features" style={{ padding: '5rem 0', borderTop: '1px solid hsl(var(--border))', background: 'hsl(var(--secondary) / 0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Por que o FontFinder AI?</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Desenvolvido para fluxos de trabalho profissionais exigentes.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card">
              <div style={{ color: 'hsl(var(--primary))', marginBottom: '1rem' }}><Zap size={32} /></div>
              <h3>Velocidade Extrema</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Análise completa em menos de 3 segundos, direto no seu navegador.</p>
            </div>
            <div className="glass-card">
              <div style={{ color: 'hsl(var(--primary))', marginBottom: '1rem' }}><Target size={32} /></div>
              <h3>Detecção de Distorções</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Identificamos se a fonte foi esticada, condensada ou possui outlines aplicados.</p>
            </div>
            <div className="glass-card">
              <div style={{ color: 'hsl(var(--primary))', marginBottom: '1rem' }}><MousePointer2 size={32} /></div>
              <h3>Alternativas Similares</h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Sugestões imediatas de fontes gratuitas equivalentes no Google Fonts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sempre saiba qual fonte usar.</h2>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Escolha o plano ideal para o seu volume de trabalho.</p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {/* Free Plan */}
            <div className="glass-card" style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Free</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>R$ 0</span>
                  <span style={{ color: 'hsl(var(--muted-foreground))' }}>/mês</span>
                </div>
              </div>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> 3 análises por mês</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Resultado base</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.5 }}><ShieldCheck size={20} /> Histórico avançado</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.5 }}><ShieldCheck size={20} /> Sugestões premium</li>
              </ul>
              
              <Link href="/signup" className="btn-outline" style={{ textAlign: 'center' }}>Começar Agora</Link>
            </div>
            
            {/* Pro Plan */}
            <div className="glass-card" style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', border: '1px solid hsl(var(--primary))', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'hsl(var(--primary))', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>RECOMENDADO</div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Pro</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>R$ 19</span>
                  <span style={{ color: 'hsl(var(--muted-foreground))' }}>/mês</span>
                </div>
              </div>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> <strong>Análises Ilimitadas</strong></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Histórico Completo & Favoritos</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Sugestões de Fontes Premium</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Detecção de Tracking/Distorsão</li>
              </ul>
              
              <Link href="/signup" className="btn-primary" style={{ textAlign: 'center' }}>Obter Acesso Pro</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { opacity: 0; animation: fadeIn 0.8s ease forwards; }
      `}</style>
    </main>
  );
}
