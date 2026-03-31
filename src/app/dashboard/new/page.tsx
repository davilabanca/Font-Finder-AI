'use client';

import Sidebar from '@/components/Sidebar';
import { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Loader2, ArrowRight } from 'lucide-react';
import { analyzeTypography } from '@/lib/engine';
import { useRouter } from 'next/navigation';

export default function NewAnalysisPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('Arquivo muito grande. O limite é 5MB.');
        return;
      }
      setFile(selectedFile);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const startAnalysis = async () => {
    if (!preview) return;
    setIsAnalyzing(true);
    setError(null);
    
    try {
      // Functional call to the typography engine
      const result = await analyzeTypography(preview);
      
      // Save result to localStorage for MVP persistence (simulating DB)
      const existingHistory = JSON.parse(localStorage.getItem('analysis_history') || '[]');
      const newEntry = {
        id: result.id,
        image: preview,
        result: result,
        date: new Date().toLocaleString('pt-BR'),
        font: result.font_name,
        confidence: result.confidence
      };
      localStorage.setItem('analysis_history', JSON.stringify([newEntry, ...existingHistory]));
      
      // Redirect to results page
      // For the MVP, we'll pass the ID in the URL
      router.push(`/dashboard/analysis/${result.id}`);
    } catch (err) {
      console.error(err);
      setError('Erro ao analisar a imagem. Verifique se o texto está legível.');
      setIsAnalyzing(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nova Análise</h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '3rem' }}>
            Envie um print ou foto contendo texto para descobrir a tipografia.
          </p>

          {!preview ? (
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="glass-card"
              style={{ 
                border: '2px dashed hsl(var(--border))', 
                padding: '4rem 2rem', 
                cursor: 'pointer', 
                transition: 'border-color 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(var(--primary))'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(var(--border))'}
            >
              <div style={{ backgroundColor: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '1.5rem', borderRadius: '50%' }}>
                <Upload size={32} />
              </div>
              <div>
                <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>Clique ou arraste sua imagem</p>
                <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem' }}>PNG, JPG ou WEBP (Max. 5MB)</p>
              </div>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
            </div>
          ) : (
            <div className="glass-card animate" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: 'var(--radius)', overflow: 'hidden', backgroundColor: '#000', marginBottom: '2rem' }}>
                <img src={preview} alt="Upload Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                <button 
                  onClick={() => { setPreview(null); setFile(null); }}
                  style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: '4px', borderRadius: '50%', cursor: 'pointer' }}
                >
                  <X size={20} />
                </button>
              </div>

              {error && (
                <div style={{ color: 'hsl(var(--destructive))', fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {error}
                </div>
              )}

              <button 
                onClick={startAnalysis}
                disabled={isAnalyzing}
                className="btn-primary" 
                style={{ width: '100%', padding: '1rem', position: 'relative' }}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 size={18} className="animate-spin" style={{ position: 'absolute', left: '1.5rem' }} />
                    Analisando Tipografia...
                  </>
                ) : (
                  <>
                    Iniciar Análise Inteligente
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          )}

          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', opacity: 0.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem' }}><ImageIcon size={16} /> Suporta High-Res</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem' }}><Loader2 size={16} /> OCR Integrado</div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 2s linear infinite; }
      `}</style>
    </div>
  );
}
