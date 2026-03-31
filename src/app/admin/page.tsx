'use client';

import Sidebar from '@/components/Sidebar';
import { Users, FileSearch, TrendingUp, DollarSign, ArrowUpRight, BarChart, ShieldCheck } from 'lucide-react';

export default function AdminPage() {
  const stats = [
    { name: 'Total Usuários', value: '1,284', icon: <Users />, color: 'var(--primary)', trend: '+12%' },
    { name: 'Análises Realizadas', value: '8,432', icon: <FileSearch />, color: '#10B981', trend: '+8%' },
    { name: 'Conversão Pro', value: '6.4%', icon: <TrendingUp />, color: '#FBBF24', trend: '+1.2%' },
    { name: 'Receita Estimada', value: 'R$ 15,240', icon: <DollarSign />, color: '#8B5CF6', trend: '+15%' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ShieldCheck size={32} color="hsl(var(--primary))" />
              Painel Administrativo
            </h1>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Visão geral de métricas, crescimento e performance do SaaS.</p>
          </div>
          <div className="glass" style={{ padding: '4px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', fontWeight: 600 }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%' }}></div>
            Sistema Operacional
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {stats.map((stat) => (
            <div key={stat.name} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ backgroundColor: `${stat.color}15`, color: stat.color, padding: '10px', borderRadius: '10px' }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <ArrowUpRight size={14} />
                  {stat.trend}
                </div>
              </div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', letterSpacing: '0.05em' }}>{stat.name}</h3>
              <p style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Secondary Charts/Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChart size={20} />
              Crescimento de Usuários (30 dias)
            </h3>
            <div style={{ width: '100%', height: '300px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px dashed hsl(var(--border))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>Gráfico de Crescimento [Simulado]</p>
            </div>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Distribuição de Planos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <span>Free</span>
                  <span>92%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'hsl(var(--border))', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', backgroundColor: 'hsl(var(--muted-foreground))' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <span>Pro</span>
                  <span>8%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'hsl(var(--border))', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '8%', height: '100%', backgroundColor: 'hsl(var(--primary))' }}></div>
                </div>
              </div>
              <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'hsla(var(--primary), 0.05)', borderRadius: 'var(--radius)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                A taxa de conversão subiu <strong>0.4%</strong> desde a implementação do novo checkout.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
