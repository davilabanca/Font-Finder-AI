'use client';

import Sidebar from '@/components/Sidebar';
import { CreditCard, Check, Zap, ShieldCheck, ArrowRight, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState<'free' | 'pro'>('free');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate professional checkout process
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentPlan('pro');
      alert('Parabéns! Sua conta agora é PRO. Aproveite o acesso ilimitado.');
    }, 2500);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '3rem 4rem' }} className="animate">
        <header style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '16px', letterSpacing: '-1.5px' }}>
            <CreditCard size={32} className="text-cyan" />
            Planos e <span style={{ fontWeight: 500 }} className="text-cyan">Assinatura</span>
          </h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.75rem', fontSize: '1.125rem', fontWeight: 200 }}>Gerencie seu plano e visualize o histórico de pagamentos.</p>
        </header>

        {/* Current Plan Overview */}
        <div className="glass-card" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', border: '1px solid hsla(var(--foreground), 0.05)' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--muted))', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>SEU PLANO ATUAL</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-1px' }}>{currentPlan.toUpperCase()}</h2>
              <span className="text-cyan" style={{ backgroundColor: 'hsla(var(--primary), 0.05)', padding: '6px 16px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 500, border: '1px solid hsla(var(--primary), 0.1)' }}>
                ATIVO
              </span>
            </div>
          </div>
          {currentPlan === 'free' ? (
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted))', fontWeight: 200 }}>Próxima renovação: <strong style={{ fontWeight: 400 }}>12 de Abril, 2026</strong></p>
              <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'hsl(var(--muted))', fontWeight: 200 }}>1 / 3 análises utilizadas este mês</p>
            </div>
          ) : (
            <button className="btn-outline" style={{ fontSize: '0.875rem' }}>Gerenciar Assinatura</button>
          )}
        </div>

        {/* Pricing Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 400px))', gap: '3rem', justifyContent: 'center' }}>
          {/* Free Plan */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '3.5rem 2.5rem', opacity: currentPlan === 'free' ? 1 : 0.6, transform: 'scale(0.95)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '1rem', letterSpacing: '0.05em' }}>PLANO FREE</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', fontWeight: 200, fontSize: '0.875rem' }}>Para uso ocasional e testes rápidos.</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '3rem' }}>
              <span style={{ fontSize: '4rem', fontWeight: 300, letterSpacing: '-3px' }}>R$ 0</span>
              <span style={{ color: 'hsl(var(--muted))', fontSize: '1rem' }}>/mês</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, fontSize: '0.875rem' }}><Check size={16} className="text-cyan" /> 3 análises por mês</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, fontSize: '0.875rem' }}><Check size={16} className="text-cyan" /> Resultado base</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, fontSize: '0.875rem', opacity: 0.3 }}><ShieldAlert size={16} /> Histórico completo</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, fontSize: '0.875rem', opacity: 0.3 }}><ShieldAlert size={16} /> Detecção Pro</li>
            </ul>

            <button disabled className="btn-outline" style={{ width: '100%', padding: '1rem', fontWeight: 400, fontSize: '0.75rem' }}>
              {currentPlan === 'free' ? 'PLANO ATUAL' : 'LIMITADO'}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="glass-card glow-premium" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            padding: '3.5rem 2.5rem', 
            border: '1px solid hsla(var(--primary), 0.3)', 
            position: 'relative', 
            background: 'linear-gradient(145deg, hsla(var(--primary), 0.08), transparent)',
            boxShadow: '0 0 40px -10px hsla(var(--primary), 0.2)'
          }}>
            <style jsx>{`
              .glow-premium {
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .glow-premium:hover {
                transform: translateY(-10px) scale(1.02);
                box-shadow: 0 20px 60px -15px hsla(var(--primary), 0.3);
                border-color: hsla(var(--primary), 0.6);
              }
              @keyframes borderGlow {
                0% { border-color: hsla(var(--primary), 0.2); }
                50% { border-color: hsla(var(--primary), 0.5); }
                100% { border-color: hsla(var(--primary), 0.2); }
              }
            `}</style>

            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'hsl(var(--primary))', color: '#001011', padding: '8px 24px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', boxShadow: '0 5px 20px hsla(var(--primary), 0.4)' }}>RECOMENDADO</div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '0.05em' }}>
              PLANO PRO
              <Zap size={22} className="text-cyan" fill="currentColor" />
            </h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', fontWeight: 200, fontSize: '0.875rem' }}>Acesso total para designers profissionais.</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '3rem' }}>
              <span style={{ fontSize: '4.5rem', fontWeight: 400, letterSpacing: '-4px' }} className="text-cyan">R$ 19</span>
              <span style={{ color: 'hsl(var(--muted))', fontSize: '1rem' }}>/mês</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300, fontSize: '0.925rem' }}><Check size={18} className="text-cyan" /> <strong>Análises Ilimitadas</strong></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300, fontSize: '0.925rem' }}><Check size={18} className="text-cyan" /> Histórico Completo & Favoritos</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300, fontSize: '0.925rem' }}><Check size={18} className="text-cyan" /> Detecção de Tracking e Outline</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300, fontSize: '0.925rem' }}><Check size={18} className="text-cyan" /> Exportação em PDF High-Res</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300, fontSize: '0.925rem' }}><Check size={18} className="text-cyan" /> Suporte Prioritário</li>
            </ul>

            <button 
              onClick={handleCheckout} 
              disabled={currentPlan === 'pro' || isProcessing}
              className="btn-primary" 
              style={{ 
                width: '100%', 
                padding: '1.5rem', 
                backgroundColor: 'hsl(var(--accent))', 
                color: '#001011', 
                fontWeight: 600,
                fontSize: '0.875rem',
                boxShadow: '0 10px 30px -10px hsla(var(--accent), 0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {isProcessing ? 'PROCESSANDO...' : currentPlan === 'pro' ? 'PLANO ATIVO' : 'OBTER ACESSO PRO'}
              {!isProcessing && currentPlan !== 'pro' && <ArrowRight size={20} style={{ marginLeft: '10px' }} />}
            </button>
          </div>
        </div>

        <div style={{ marginTop: '5rem', textAlign: 'center', borderTop: '1px solid hsla(var(--foreground), 0.05)', paddingTop: '3rem' }}>
          <p style={{ color: 'hsl(var(--muted))', fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <ShieldCheck size={18} className="text-lime" />
            Pagamentos seguros via Stripe. Cancele a qualquer momento.
          </p>
        </div>
      </main>
    </div>
  );
}
