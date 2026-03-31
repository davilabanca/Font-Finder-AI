'use client';

import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, Search, Trash2, ArrowRight } from 'lucide-react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const favoriteIds = JSON.parse(localStorage.getItem('font_favorites') || '[]');
    const history = JSON.parse(localStorage.getItem('analysis_history') || '[]');
    
    const favoriteItems = history.filter((h: any) => favoriteIds.includes(h.id));
    setFavorites(favoriteItems);
  };

  const removeFavorite = (id: string) => {
    const favoriteIds = JSON.parse(localStorage.getItem('font_favorites') || '[]');
    const newFavorites = favoriteIds.filter((favId: string) => favId !== id);
    localStorage.setItem('font_favorites', JSON.stringify(newFavorites));
    loadFavorites();
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '3rem 4rem' }} className="animate">
        <header style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '16px', letterSpacing: '-1px' }}>
            <Star size={32} className="text-lime" fill="currentColor" />
            Sua <span style={{ fontWeight: 500 }} className="text-cyan">Coleção</span>
          </h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.75rem', fontSize: '1.125rem', fontWeight: 200 }}>
            As fontes que você salvou para seus projetos.
          </p>
        </header>

        {favorites.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {favorites.map((entry) => (
              <div key={entry.id} className="glass-card animate" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1.5rem' }}>
                <div style={{ width: '100%', aspectRatio: '16/10', backgroundColor: 'hsla(var(--foreground), 0.02)', borderRadius: '12px', overflow: 'hidden', border: '1px solid hsla(var(--foreground), 0.05)' }}>
                  <img src={entry.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 400, letterSpacing: '-0.5px' }}>{entry.result?.font_name || 'Desconhecida'}</h3>
                    <span className="text-cyan" style={{ fontSize: '1.125rem', fontWeight: 300 }}>
                      {entry.result?.confidence || 0}%
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted))', fontWeight: 200 }}>Salvo em {entry.date || 'Recente'}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                  <Link href={`/dashboard/analysis/${entry.id}`} className="btn-outline" style={{ flex: 1, fontSize: '0.875rem', textAlign: 'center', fontWeight: 300 }}>
                    DETALHES
                  </Link>
                  <button 
                    onClick={() => removeFavorite(entry.id)}
                    className="btn-outline" 
                    style={{ padding: '0 12px', borderColor: 'hsla(255, 0, 0, 0.1)', color: '#ff4b4b' }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card" style={{ textAlign: 'center', padding: '6rem 2rem', border: '1px dashed hsla(var(--foreground), 0.1)' }}>
            <div style={{ color: 'hsl(var(--muted))', marginBottom: '2rem' }}>
              <Star size={48} strokeWidth={1} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.5rem' }}>Nenhum favorito ainda</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', fontWeight: 200 }}>Salve suas análises favoritas para acessá-las rapidamente depois.</p>
            <Link href="/dashboard" className="btn-primary">EXPLORAR DASHBOARD</Link>
          </div>
        )}
      </main>
    </div>
  );
}
