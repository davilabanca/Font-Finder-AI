'use client';

import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, Search, Trash2, ArrowRight } from 'lucide-react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    // For MVP, we'll just filter from history (simulating actual favorites storage)
    const savedHistory = JSON.parse(localStorage.getItem('analysis_history') || '[]');
    // Mock: everything with confidence > 95 is a favorite for this demo
    setFavorites(savedHistory.filter((h: any) => h.confidence > 95));
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Star size={24} color="hsl(var(--primary))" fill="currentColor" />
            Favoritos
          </h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>As fontes que você mais gostou e salvou para referência futura.</p>
        </header>

        {favorites.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {favorites.map((entry) => (
              <div key={entry.id} className="glass-card animate" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ width: '100%', height: '160px', backgroundColor: '#000', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid hsl(var(--border))' }}>
                  <img src={entry.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem' }}>{entry.font}</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--primary))', backgroundColor: 'hsla(var(--primary), 0.1)', padding: '2px 8px', borderRadius: '10px' }}>
                      {entry.confidence}% Match
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{entry.date}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <Link href={`/dashboard/analysis/${entry.id}`} className="btn-primary" style={{ flex: 1, fontSize: '0.875rem', padding: '10px' }}>
                    Ver Detalhes
                  </Link>
                  <button className="btn-outline" style={{ padding: '10px', color: 'hsl(var(--destructive))' }}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
            <div style={{ backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '1.5rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '1.5rem' }}>
              <Star size={32} />
            </div>
            <h3>Nenhum favorito ainda</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem', marginTop: '0.5rem' }}>Salve suas análises favoritas para acessá-las rapidamente depois.</p>
            <Link href="/dashboard" className="btn-primary">Explorar Análises</Link>
          </div>
        )}
      </main>
    </div>
  );
}
