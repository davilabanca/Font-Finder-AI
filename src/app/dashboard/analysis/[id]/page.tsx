'use client';

import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, Download, Copy, ArrowLeft, Check, AlertCircle, ExternalLink, RefreshCcw, Bookmark } from 'lucide-react';
import type { AnalysisResult } from '@/lib/types';

export default function AnalysisResultPage() {
  const { id } = useParams();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('analysis_history') || '[]');
    const entry = history.find((h: any) => h.id === id);
    if (entry) {
      setResult(entry);
      const favorites = JSON.parse(localStorage.getItem('font_favorites') || '[]');
      setIsFavorite(favorites.includes(id));
    } else {
      const timer = setTimeout(() => { if (!result) router.push('/dashboard'); }, 2000);
      return () => clearTimeout(timer);
    }
  }, [id, router, result]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('font_favorites') || '[]');
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((favId: string) => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    localStorage.setItem('font_favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  if (!result) return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--muted))', gap: '1.5rem' }}>
       <RefreshCcw className="animate-spin" size={32} style={{ opacity: 0.5 }} />
       <div style={{ fontSize: '1rem', fontWeight: 200, letterSpacing: '0.1em' }}>ANALISANDO CONTEXTO...</div>
    </div>
  );

  const data = result.result as AnalysisResult;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.font_name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '3rem 4rem' }} className="animate">
        <header style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <button onClick={() => router.back()} style={{ color: 'hsl(var(--muted))' }}>
            <ArrowLeft size={24} />
          </button>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 300, color: 'hsl(var(--muted))' }}>RELATÓRIO DE ANÁLISE</h1>
          
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
            <button 
              onClick={toggleFavorite} 
              className="btn-outline" 
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: isFavorite ? 'hsl(var(--accent))' : 'white', borderColor: isFavorite ? 'hsla(var(--accent), 0.3)' : 'hsla(var(--foreground), 0.1)' }}
            >
              <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
              {isFavorite ? 'Salvo' : 'Salvar'}
            </button>
            <button className="btn-primary" style={{ backgroundColor: 'hsl(var(--primary))', color: '#001011' }}>
              <Download size={18} />
              Exportar PDF
            </button>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '4rem' }}>
          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Main Result Card */}
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ width: '320px', aspectRatio: '16/10', borderRadius: '12px', overflow: 'hidden', border: '1px solid hsla(var(--foreground), 0.05)', backgroundColor: 'hsla(var(--foreground), 0.02)' }}>
                <img src={result.image} alt="Upload" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                  <span className="text-cyan" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em' }}>{data.confidence}% CONFIANÇA</span>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'hsla(var(--foreground), 0.2)' }}></div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500, color: data.is_edited ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}>
                    {data.is_edited ? 'CUSTOMIZADA' : 'ORIGINAL'}
                  </span>
                </div>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 400, marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>{data.font_name}</h2>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                   <button onClick={handleCopy} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}>
                      {copied ? 'Copiado' : 'Copiar Nome'}
                   </button>
                   {data.google_font_match && (
                     <Link href={data.google_font_match.link} target="_blank" className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', display: 'flex', gap: '6px' }}>
                       <ExternalLink size={14} /> Google Fonts
                     </Link>
                   )}
                </div>
              </div>
            </div>

            {/* AI Reading */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <div className="text-cyan"><Bookmark size={20} /></div>
                <h3 style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '0.05em' }}>ANÁLISE ESTRUTURAL</h3>
              </div>
              <p style={{ fontSize: '1.25rem', fontWeight: 200, lineHeight: 1.6, color: 'hsl(var(--foreground))', marginBottom: '3rem' }}>
                {data.typography_reading}
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                <div>
                  <label style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--muted))', display: 'block', marginBottom: '0.5rem' }}>CATEGORIA</label>
                  <div style={{ fontSize: '1.125rem', fontWeight: 300 }}>{data.details?.category || 'Desconhecida'}</div>
                </div>
                <div>
                  <label style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--muted))', display: 'block', marginBottom: '0.5rem' }}>PESO</label>
                  <div style={{ fontSize: '1.125rem', fontWeight: 300 }}>{data.weight}</div>
                </div>
                <div>
                  <label style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--muted))', display: 'block', marginBottom: '0.5rem' }}>TRACKING</label>
                  <div style={{ fontSize: '1.125rem', fontWeight: 300 }}>{data.tracking}</div>
                </div>
                <div>
                  <label style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--muted))', display: 'block', marginBottom: '0.5rem' }}>DISTORÇÃO</label>
                  <div style={{ fontSize: '1.125rem', fontWeight: 300 }}>{data.distortion_degree}</div>
                </div>
              </div>
            </div>

            {/* visually Similar */}
            <div>
               <h3 style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '0.05em', marginBottom: '2rem' }}>ALTERNATIVAS RECOMENDADAS</h3>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {data.alternative_fonts.map((alt) => (
                    <div key={alt.name} className="glass-card" style={{ padding: '1.5rem', transition: 'all 0.3s ease' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                          <span className="text-lime" style={{ fontSize: '0.75rem', fontWeight: 500 }}>{alt.similarity}% MATCH</span>
                          <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted))' }}>FREE</span>
                       </div>
                       <h4 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '1.5rem' }}>{alt.name}</h4>
                       <Link href={alt.link || '#'} className="btn-outline" style={{ display: 'block', textAlign: 'center', fontSize: '0.75rem', borderRadius: '8px' }}>
                          Explorar Fonte
                       </Link>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <div className="glass-card" style={{ padding: '2rem', border: '1px solid hsla(var(--primary), 0.1)' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>Sugestão da IA</h4>
                <p style={{ fontSize: '0.875rem', fontWeight: 200, color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Para este estilo, recomendamos o uso de fontes com terminação limpa para manter o contraste do projeto.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                   {data.alternative_fonts.slice(0, 2).map((alt) => (
                     <div key={alt.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: 'hsla(var(--foreground), 0.02)', borderRadius: '8px' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 300 }}>{alt.name}</span>
                        <Check size={14} className="text-lime" />
                     </div>
                   ))}
                </div>
             </div>

             <div className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ color: 'hsl(var(--primary))', marginBottom: '1rem', display: 'inline-flex' }}>
                   <RefreshCcw size={24} />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 400, marginBottom: '0.5rem' }}>Não é essa?</h4>
                <p style={{ fontSize: '0.875rem', fontWeight: 200, color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>Tente recortar apenas uma palavra para maior precisão.</p>
                <Link href="/dashboard/new" className="btn-outline" style={{ display: 'block', fontSize: '0.875rem' }}>Refazer Análise</Link>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
