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
        <div className="glass-card" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.5rem' }}>Seu plano atual</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{currentPlan}</h2>
              <span style={{ backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
                Ativo
              </span>
            </div>
          </div>
          {currentPlan === 'free' ? (
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Próxima renovação: <strong>12 de Abril, 2026</strong></p>
              <p style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>1 / 3 análises utilizadas este mês</p>
            </div>
          ) : (
            <button className="btn-outline">Gerenciar Assinatura</button>
          )}
        </div>

        {/* Pricing Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
          {/* Free Plan */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', opacity: currentPlan === 'free' ? 1 : 0.6 }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Plano Free</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Para uso ocasional e testes rápidos.</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>R$ 0</span>
              <span style={{ color: 'hsl(var(--muted-foreground))' }}>/mês</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> 3 análises por mês</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Resultado base (Nome e Confiança)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.5 }}><ShieldAlert size={20} /> Histórico completo</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.5 }}><ShieldAlert size={20} /> Detecção de distorção</li>
            </ul>

            <button disabled={currentPlan === 'free'} className="btn-outline" style={{ width: '100%' }}>
              {currentPlan === 'free' ? 'Plano Atual' : 'Downgrade'}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="glass-card" style={{ border: '1px solid hsl(var(--primary))', position: 'relative', background: 'linear-gradient(145deg, hsla(var(--primary), 0.05), transparent)' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'hsl(var(--primary))', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>PREMIUM</div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Plano Pro
              <Zap size={20} fill="currentColor" color="hsl(var(--primary))" />
            </h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Acesso total para designers profissionais.</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>R$ 19</span>
              <span style={{ color: 'hsl(var(--muted-foreground))' }}>/mês</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> <strong>Análises Ilimitadas</strong></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Histórico Completo & Favoritos</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Detecção de Tracking e Outline</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Exportação de relatórios em PDF</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="hsl(var(--primary))" /> Suporte prioritário</li>
            </ul>

            <button className="btn-primary pulse" style={{ width: '100%', padding: '1rem' }}>
              Obter Acesso Vitalício (PRO)
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
