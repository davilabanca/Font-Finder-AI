'use client';

import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { History as HistoryIcon, Search, Star, Trash2, ArrowRight } from 'lucide-react';

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('analysis_history') || '[]');
    setHistory(savedHistory);
  }, []);

  const deleteEntry = (id: string) => {
    const newHistory = history.filter(h => h.id !== id);
    setHistory(newHistory);
    localStorage.setItem('analysis_history', JSON.stringify(newHistory));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <HistoryIcon size={24} />
            Histórico de Análises
          </h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>Todas as suas descobertas tipográficas em um só lugar.</p>
        </header>

        {history.length > 0 ? (
          <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsla(var(--primary), 0.03)' }}>
                <tr>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))' }}>Preview</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))' }}>Fonte Sugerida</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))' }}>Confiança</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))' }}>Data</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ width: '64px', height: '40px', backgroundColor: '#000', borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={entry.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{entry.font}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ color: entry.confidence > 90 ? '#10B981' : '#FBBF24', fontWeight: 500 }}>{entry.confidence}%</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>{entry.date}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <Link href={`/dashboard/analysis/${entry.id}`} className="btn-outline" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
                          Abrir
                        </Link>
                        <button onClick={() => deleteEntry(entry.id)} style={{ color: 'hsl(var(--destructive))', background: 'none', cursor: 'pointer' }}>
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="glass-card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
            <div style={{ backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '1.5rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '1.5rem' }}>
              <Search size={32} />
            </div>
            <h3>Seu histórico está vazio</h3>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem', marginTop: '0.5rem' }}>Faça sua primeira análise para começar a salvar seu histórico.</p>
            <Link href="/dashboard/new" className="btn-primary">Criar Nova Análise</Link>
          </div>
        )}
      </main>
    </div>
  );
}
