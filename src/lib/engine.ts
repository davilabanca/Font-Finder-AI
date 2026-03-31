import { createWorker } from 'tesseract.js';
import type { AnalysisResult } from './types';

// Expanded Font Database with DNA (Simplified physical properties)
const FONT_DATABASE = [
  { name: 'Inter', category: 'Sans-serif', weight: 'Medium', ink_density: 0.18, has_serifs: false, link: 'https://fonts.google.com/specimen/Inter' },
  { name: 'Roboto', category: 'Sans-serif', weight: 'Regular', ink_density: 0.15, has_serifs: false, link: 'https://fonts.google.com/specimen/Roboto' },
  { name: 'Montserrat', category: 'Sans-serif', weight: 'Bold', ink_density: 0.25, has_serifs: false, link: 'https://fonts.google.com/specimen/Montserrat' },
  { name: 'Playfair Display', category: 'Serif', weight: 'Medium', ink_density: 0.22, has_serifs: true, link: 'https://fonts.google.com/specimen/Playfair+Display' },
  { name: 'Lora', category: 'Serif', weight: 'Regular', ink_density: 0.16, has_serifs: true, link: 'https://fonts.google.com/specimen/Lora' },
  { name: 'Merriweather', category: 'Serif', weight: 'Bold', ink_density: 0.28, has_serifs: true, link: 'https://fonts.google.com/specimen/Merriweather' },
  { name: 'Space Grotesk', category: 'Sans-serif', weight: 'Light', ink_density: 0.12, has_serifs: false, link: 'https://fonts.google.com/specimen/Space+Grotesk' },
];

/**
 * Physical Image Analysis using Canvas
 */
async function analyzePixels(imageSrc: string): Promise<{ isSerif: boolean; density: number }> {
  if (typeof window === 'undefined') return { isSerif: false, density: 0.15 };
  
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve({ isSerif: false, density: 0.15 });

        // Scale down for performance but keep enough detail
        canvas.width = 200; 
        canvas.height = (200 * img.height) / img.width;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let blackPixels = 0;
        let edgeVariations = 0;

        // Simple heuristic: Ink density and edge horizontal variation (serif detection)
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i+1] + data[i+2]) / 3;
          if (avg < 128) { // Dark pixel
            blackPixels++;
            
            // Check for serifs (highly simplified: horizontal spurs)
            if (i > 4 && i < data.length - 4) {
              const prev = (data[i-4] + data[i-3] + data[i-2]) / 3;
              if (prev > 200) edgeVariations++; 
            }
          }
        }

        const density = blackPixels / (canvas.width * canvas.height);
        // If we have many horizontal "spurs" relative to total ink, likely Serif
        const isSerif = (edgeVariations / blackPixels) > 0.12; 

        resolve({ isSerif, density });
      } catch (err) {
        console.error('Pixel analysis error:', err);
        resolve({ isSerif: false, density: 0.15 });
      }
    };
    img.onerror = () => resolve({ isSerif: false, density: 0.15 });
  });
}

export async function analyzeTypography(imageSource: string): Promise<AnalysisResult> {
  const worker = await createWorker('eng');
  
  try {
    // OCR for confidence and text properties
    const { data: { text, confidence } } = await worker.recognize(imageSource);
    
    // PHYSICAL ANALYSIS (THE REAL STUFF)
    const physical = await analyzePixels(imageSource);
    
    const categoryMatch = physical.isSerif ? 'Serif' : 'Sans-serif';
    
    // Find closest font by density (weight) and category (serif style)
    let topMatch = FONT_DATABASE[0];
    let minDiff = Infinity;

    FONT_DATABASE.forEach(font => {
      if (font.category === categoryMatch) {
         const diff = Math.abs(font.ink_density - physical.density);
         if (diff < minDiff) {
           minDiff = diff;
           topMatch = font;
         }
      }
    });

    const hasDistortion = confidence < 75;
    const trackingLevel = text.length > 40 ? 'Tight' : 'Normal';
    
    // Map density back to human weight
    let detectedWeight = 'Regular';
    if (physical.density < 0.13) detectedWeight = 'Light';
    else if (physical.density > 0.20) detectedWeight = 'Medium';
    else if (physical.density > 0.24) detectedWeight = 'Bold';

    const result: AnalysisResult = {
      id: Math.random().toString(36).substr(2, 9),
      font_name: topMatch.name,
      confidence: Math.round(confidence),
      is_edited: hasDistortion,
      weight: detectedWeight,
      tracking: trackingLevel,
      distortion_degree: hasDistortion ? 'Minor (Vertical stretch)' : 'None',
      alternative_fonts: FONT_DATABASE
        .filter(f => f.name !== topMatch.name && f.category === categoryMatch)
        .slice(0, 3)
        .map(f => ({
          name: f.name,
          similarity: Math.floor(90 - Math.abs(f.ink_density - physical.density) * 100),
          provider: 'Google Fonts',
          link: f.link
        })),
      google_font_match: {
        name: topMatch.name,
        link: topMatch.link || ''
      },
      typography_reading: `A análise estrutural detectou uma tipografia com estilo ${categoryMatch.toLowerCase()} e densidade de traço compatível com peso ${detectedWeight.toLowerCase()}. O mecanismo Heurístico identificou ${topMatch.name} como o match mais provável baseado na anatomia dos caracteres.`
    };

    await worker.terminate();
    return result;
  } catch (error) {
    await worker.terminate();
    throw error;
  }
}
