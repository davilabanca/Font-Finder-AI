'use client';

import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { Plus, BarChart3, Clock, Zap, Star, LayoutGrid, List, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [userName, setUserName] = useState('Designer');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = localStorage.getItem('user_name');
      if (name) setUserName(name);
      
      const favorites = JSON.parse(localStorage.getItem('font_favorites') || '[]');
      setFavoritesCount(favorites.length);
    }
  }, []);

  const recentAnalyses = [
    { id: '1', font: 'Inter', confidence: 98, date: 'Hoje, 14:30', category: 'Sans-serif' },
    { id: '2', font: 'Playfair Display', confidence: 92, date: 'Ontem, 09:15', category: 'Serif' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '3rem 4rem' }} className="animate">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        `}</style>

        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '0.75rem', letterSpacing: '-1px' }}>
              Olá, <span style={{ fontWeight: 500 }} className="text-cyan">{userName}!</span>
            </h1>
            <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.125rem', fontWeight: 200 }}>
              Pronto para descobrir novas tipografias hoje?
            </p>
          </div>
          <Link href="/dashboard/new" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem', boxShadow: '0 10px 30px -10px hsla(var(--accent), 0.3)' }}>
            <Plus size={20} />
            Nova Análise
          </Link>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ color: 'hsl(var(--primary))' }}><BarChart3 size={24} /></div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--muted))' }}>MENSAL</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', fontWeight: 200 }}>Uso de créditos</p>
            <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 300 }}>1 / 3 <span style={{ fontSize: '1rem', color: 'hsl(var(--muted))' }}>análises</span></h3>
          </div>

          <div className="glass-card" style={{ padding: '2rem', border: '1px solid hsla(var(--primary), 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div className="text-cyan"><Zap size={24} /></div>
              <Link href="/dashboard/billing" className="text-cyan" style={{ fontSize: '0.75rem', fontWeight: 600 }}>UPGRADE</Link>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', fontWeight: 200 }}>Plano ativo</p>
            <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 300 }}>Free <span style={{ fontSize: '1rem', color: 'hsl(var(--muted))' }}>Account</span></h3>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div className="text-lime"><Star size={24} /></div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--muted))' }}>COLEÇÃO</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', fontWeight: 200 }}>Itens salvos</p>
            <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', fontWeight: 300 }}>{favoritesCount} <span style={{ fontSize: '1rem', color: 'hsl(var(--muted))' }}>favoritos</span></h3>
          </div>
        </div>

        {/* Recent Analyses Sections */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Clock size={20} className="text-muted" />
            Análises Recentes
          </h2>
          <div style={{ display: 'flex', gap: '8px' }}>
             <button onClick={() => setViewMode('grid')} style={{ color: viewMode === 'grid' ? 'white' : 'hsl(var(--muted))' }}><LayoutGrid size={20} /></button>
             <button onClick={() => setViewMode('list')} style={{ color: viewMode === 'list' ? 'white' : 'hsl(var(--muted))' }}><List size={20} /></button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(320px, 1fr))' : '1fr', gap: '1.5rem' }}>
          {recentAnalyses.map((analysis) => (
            <Link 
              href={`/dashboard/analysis/${analysis.id}`} 
              key={analysis.id} 
              className="glass-card" 
              style={{ 
                padding: '1.5rem', 
                display: 'flex', 
                flexDirection: viewMode === 'grid' ? 'column' : 'row', 
                gap: '1.5rem',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                width: viewMode === 'grid' ? '100%' : '120px', 
                aspectRatio: viewMode === 'grid' ? '16/9' : '1/1',
                backgroundColor: 'hsla(var(--foreground), 0.03)', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid hsla(var(--foreground), 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  fontFamily: `"${analysis.font}", serif`, 
                  fontSize: '2rem', 
                  color: 'white', 
                  textAlign: 'center',
                  opacity: 0.8
                }}>
                  Ag
                </div>
                <div style={{ position: 'absolute', bottom: '8px', right: '12px', fontSize: '0.6rem', color: 'hsl(var(--muted))', letterSpacing: '0.1em' }}>PREVIEW</div>
              </div>
              
              <div style={{ flex: 1, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.25rem' }}>{analysis.font}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted))', fontWeight: 200 }}>{analysis.category} • {analysis.date}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="text-cyan" style={{ fontSize: '1.25rem', fontWeight: 300 }}>{analysis.confidence}%</div>
                    <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted))', fontWeight: 600 }}>MATCH</div>
                  </div>
                </div>
                {viewMode === 'grid' && (
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid hsla(var(--foreground), 0.03)', display: 'flex', justifyContent: 'flex-end' }}>
                    <ArrowRight size={16} className="text-cyan" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
