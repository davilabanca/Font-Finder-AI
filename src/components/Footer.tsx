import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid hsl(var(--border))', padding: '4rem 0 2rem', background: 'hsl(var(--background))' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>FontFinder AI</h4>
            <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', lineHeight: 1.6 }}>
              A plataforma definitiva para designers e entusiastas da tipografia. Identifique, aprenda e crie com precisão absoluta.
            </p>
          </div>
          
          <div>
            <h5 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Produto</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><Link href="#features" style={{ color: 'hsl(var(--muted-foreground))' }}>Funcionalidades</Link></li>
              <li><Link href="#pricing" style={{ color: 'hsl(var(--muted-foreground))' }}>Preços</Link></li>
              <li><Link href="/dashboard" style={{ color: 'hsl(var(--muted-foreground))' }}>Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Empresa</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><Link href="#" style={{ color: 'hsl(var(--muted-foreground))' }}>Sobre Nós</Link></li>
              <li><Link href="#" style={{ color: 'hsl(var(--muted-foreground))' }}>Termos de Uso</Link></li>
              <li><Link href="#" style={{ color: 'hsl(var(--muted-foreground))' }}>Privacidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>Suporte</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><Link href="mailto:contato@fontfinder.ai" style={{ color: 'hsl(var(--muted-foreground))' }}>Contato</Link></li>
              <li><Link href="#" style={{ color: 'hsl(var(--muted-foreground))' }}>FAQ</Link></li>
              <li><Link href="#" style={{ color: 'hsl(var(--muted-foreground))' }}>Ajuda</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '2rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))', fontSize: '0.75rem' }}>
          <p>© 2026 FontFinder AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
