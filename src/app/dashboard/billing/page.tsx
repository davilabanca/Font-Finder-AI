'use client';

import Sidebar from '@/components/Sidebar';
import { CreditCard, Check, Zap, ShieldCheck, ArrowRight, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState<'free' | 'pro'>('free');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CreditCard size={24} />
            Planos e Assinatura
          </h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Gerencie seu plano e visualize o histórico de pagamentos.</p>
        </header>

        {/* Current Plan Overview */}
        <div className="glass-card" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 2.5rem', border: '1px solid hsla(var(--foreground), 0.05)' }}>
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
            <button className="btn-outline">Gerenciar Assinatura</button>
          )}
        </div>

        {/* Pricing Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
          {/* Free Plan */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '3.5rem 2.5rem', opacity: currentPlan === 'free' ? 1 : 0.6 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem', letterSpacing: '-0.5px' }}>Plano Free</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', fontWeight: 200 }}>Para uso ocasional e testes rápidos.</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '3rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-2px' }}>R$ 0</span>
              <span style={{ color: 'hsl(var(--muted))', fontSize: '1rem' }}>/mês</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200 }}><Check size={18} className="text-cyan" /> 3 análises por mês</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200 }}><Check size={18} className="text-cyan" /> Resultado base (Nome e Confiança)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, opacity: 0.3 }}><ShieldAlert size={18} /> Histórico completo</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 200, opacity: 0.3 }}><ShieldAlert size={18} /> Detecção de distorção</li>
            </ul>

            <button disabled={currentPlan === 'free'} className="btn-outline" style={{ width: '100%', padding: '1rem', fontWeight: 300 }}>
              {currentPlan === 'free' ? 'PLANO ATUAL' : 'DOWNGRADE'}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '3.5rem 2.5rem', border: '1px solid hsla(var(--primary), 0.2)', position: 'relative', background: 'linear-gradient(145deg, hsla(var(--primary), 0.05), transparent)' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'hsl(var(--primary))', color: '#001011', padding: '6px 16px', borderRadius: '30px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em' }}>PREMIUM</div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '-0.5px' }}>
              Plano Pro
              <Zap size={20} fill="currentColor" className="text-cyan" />
            </h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', fontWeight: 200 }}>Acesso total para designers profissionais.</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '3rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-2px' }}>R$ 19</span>
              <span style={{ color: 'hsl(var(--muted))', fontSize: '1rem' }}>/mês</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> <strong>Análises Ilimitadas</strong></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> Histórico Completo & Favoritos</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> Detecção de Tracking e Outline</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> Exportação de relatórios em PDF</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 300 }}><Check size={18} className="text-cyan" /> Suporte prioritário</li>
            </ul>

            <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', backgroundColor: 'hsl(var(--accent))', color: '#001011', fontWeight: 600 }}>
              OBTER ACESSO VITALÍCIO (PRO)
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Security Badge */}
        <div style={{ marginTop: '4rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
          <ShieldCheck size={20} />
          Pagamentos seguros processados pelo Stripe. Cancele a qualquer momento.
        </div>
      </main>
    </div>
  );
}
