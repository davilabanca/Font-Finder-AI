'use client';

import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { Plus, BarChart3, Clock, Zap, Star, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock data for recent analyses
  const recentAnalyses = [
    { id: '1', font: 'Inter', confidence: 98, date: 'Hoje, 14:30', status: 'completed' },
    { id: '2', font: 'Playfair Display', confidence: 92, date: 'Ontem, 09:15', status: 'completed' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '2.5rem' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Olá, Designer!</h1>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Pronto para descobrir novas tipografias hoje?</p>
          </div>
          <Link href="/dashboard/new" className="btn-primary pulse" style={{ padding: '0.75rem 1.75rem' }}>
            <Plus size={20} />
            Nova Análise
          </Link>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '12px', borderRadius: '12px' }}>
              <BarChart3 size={24} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Uso Mensal</p>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>1 / 3 <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'hsl(var(--muted-foreground))' }}>Free</span></h3>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '12px', borderRadius: '12px' }}>
              <Zap size={24} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Plano Atual</p>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>Free</h3>
            </div>
            <Link href="/dashboard/billing" style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--primary))', borderBottom: '1px solid currentColor' }}>Upgrade</Link>
          </div>

          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '12px', borderRadius: '12px' }}>
              <Star size={24} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Favoritos</p>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>12</h3>
            </div>
          </div>
        </div>

        {/* Recent Analyses Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Clock size={20} />
            Análises Recentes
          </h2>
          <div className="glass" style={{ display: 'flex', padding: '4px', borderRadius: '8px' }}>
            <button 
              onClick={() => setViewMode('grid')}
              style={{ backgroundColor: viewMode === 'grid' ? 'hsla(var(--primary), 0.2)' : 'transparent', color: viewMode === 'grid' ? 'white' : 'hsl(var(--muted-foreground))', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
            >
              <LayoutGrid size={16} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              style={{ backgroundColor: viewMode === 'list' ? 'hsla(var(--primary), 0.2)' : 'transparent', color: viewMode === 'list' ? 'white' : 'hsl(var(--muted-foreground))', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Empty State or List */}
        {recentAnalyses.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : '1fr', gap: '1.25rem' }}>
            {recentAnalyses.map((analysis) => (
              <Link href={`/dashboard/analysis/${analysis.id}`} key={analysis.id} className="glass-card" style={{ display: 'flex', flexDirection: viewMode === 'grid' ? 'column' : 'row', gap: '1.25rem', alignItems: viewMode === 'list' ? 'center' : 'stretch' }}>
                <div style={{ width: viewMode === 'grid' ? '100%' : '80px', height: viewMode === 'grid' ? '140px' : '60px', backgroundColor: '#111', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>Preview</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '1.125rem' }}>{analysis.font}</h4>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--primary))', backgroundColor: 'hsla(var(--primary), 0.1)', padding: '2px 8px', borderRadius: '10px' }}>{analysis.confidence}% Match</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>{analysis.date}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Nenhuma análise ainda</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Envie sua primeira imagem para descobrir qual fonte ela usa.</p>
            <Link href="/dashboard/new" className="btn-primary">Criar Primeira Análise</Link>
          </div>
        )}
      </main>
    </div>
  );
}
