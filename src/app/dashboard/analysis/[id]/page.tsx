'use client';

import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, Download, Copy, ArrowLeft, Check, AlertCircle, ExternalLink, RefreshCcw } from 'lucide-react';
import type { AnalysisResult } from '@/lib/types';

export default function AnalysisResultPage() {
  const { id } = useParams();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Load result from localStorage for MVP
    const history = JSON.parse(localStorage.getItem('analysis_history') || '[]');
    const entry = history.find((h: any) => h.id === id);
    if (entry) {
      setResult(entry);
    } else {
      // Fallback or error
    }
  }, [id]);

  if (!result) return <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>;

  const data = result.result as AnalysisResult;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.font_name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '2.5rem' }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <button onClick={() => router.back()} className="glass" style={{ padding: '8px', borderRadius: '50%', color: 'white', cursor: 'pointer' }}>
            <ArrowLeft size={20} />
          </button>
          <h1 style={{ fontSize: '1.5rem' }}>Resultado da Análise</h1>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
            <button 
              onClick={() => setIsFavorite(!isFavorite)} 
              className="glass" 
              style={{ padding: '10px', borderRadius: '12px', color: isFavorite ? 'hsl(var(--primary))' : 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Star size={20} fill={isFavorite ? 'currentColor' : 'none'} />
              {isFavorite ? 'Favoritado' : 'Favoritar'}
            </button>
            <button className="btn-primary" style={{ padding: '10px 20px' }}>
              <Download size={18} />
              Exportar PDF
            </button>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' }}>
          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Top Analysis Header */}
            <div className="glass-card" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ width: '240px', height: '160px', borderRadius: 'var(--radius)', overflow: 'hidden', backgroundColor: '#000', border: '1px solid hsl(var(--border))' }}>
                <img src={result.image} alt="Original Upload" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--primary))', backgroundColor: 'hsla(var(--primary), 0.1)', padding: '4px 10px', borderRadius: '20px' }}>
                    {data.confidence}% de Confiança
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: data.is_edited ? '#FBBF24' : '#10B981' }}>
                    {data.is_edited ? 'Possível Edição Detectada' : 'Original Detectado'}
                  </span>
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{data.font_name}</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={handleCopy} className="btn-outline" style={{ padding: '6px 12px', fontSize: '0.75rem', height: 'auto' }}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copiado' : 'Copiar Nome'}
                  </button>
                  {data.google_font_match && (
                    <Link href={data.google_font_match.link} target="_blank" className="btn-outline" style={{ padding: '6px 12px', fontSize: '0.75rem', height: 'auto', display: 'flex', gap: '6px' }}>
                      <ExternalLink size={14} />
                      Ver no Google Fonts
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* In-depth Analysis Section */}
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={20} color="hsl(var(--primary))" />
                Leitura Tipográfica Profissional
              </h3>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'hsl(var(--foreground))', marginBottom: '2rem' }}>
                {data.typography_reading}
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', borderRight: '1px solid hsl(var(--border))' }}>
                  <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Peso</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem' }}>{data.weight}</p>
                </div>
                <div style={{ padding: '1rem', borderRight: '1px solid hsl(var(--border))' }}>
                  <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tracking</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem' }}>{data.tracking}</p>
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Distorção</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem' }}>{data.distortion_degree}</p>
                </div>
              </div>
            </div>

            {/* Alternatives */}
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Fontes Visualmente Parecidas</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                {data.alternative_fonts.map((alt, i) => (
                  <div key={alt.name} className="glass-card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'hsl(var(--primary))' }}>{alt.similarity}% similar</span>
                      <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{alt.provider}</span>
                    </div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{alt.name}</h4>
                    <Link href={alt.link || '#'} className="btn-outline" style={{ display: 'block', textAlign: 'center', fontSize: '0.75rem' }}>
                      Explorar Fonte
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ backgroundColor: 'hsla(var(--primary), 0.03)', border: '1px solid hsla(var(--primary), 0.1)' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Matches Sugeridos</h4>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Baseado na nossa IA, estas fontes oferecem o melhor custo-benefício visual para este estilo.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {data.alternative_fonts.slice(0, 2).map((alt) => (
                  <div key={alt.name} style={{ padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.875rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{alt.name}</span>
                    <span style={{ color: 'hsl(var(--primary))' }}>Gratuita</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
              <div style={{ padding: '1rem', backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', borderRadius: '12px', display: 'inline-flex', alignSelf: 'center' }}>
                <RefreshCcw size={24} />
              </div>
              <h4 style={{ fontSize: '1.125rem' }}>Análise Incompleta?</h4>
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Tente fazer o recorte apenas da letra ou de uma palavra curta para maior precisão.</p>
              <Link href="/dashboard/new" className="btn-outline" style={{ marginTop: '0.5rem' }}>Refazer Análise</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
