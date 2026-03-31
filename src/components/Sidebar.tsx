'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, LayoutDashboard, FileSearch, History, Star, CreditCard, User, LogOut, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
    { name: 'Nova Análise', icon: <FileSearch size={18} />, path: '/dashboard/new' },
    { name: 'Histórico', icon: <History size={18} />, path: '/dashboard/history' },
    { name: 'Favoritos', icon: <Star size={18} />, path: '/dashboard/favorites' },
  ];

  const bottomItems = [
    { name: 'Planos', icon: <CreditCard size={18} />, path: '/dashboard/billing' },
    { name: 'Perfil', icon: <User size={18} />, path: '/dashboard/profile' },
  ];

  return (
    <aside style={{ 
      width: '260px', 
      height: '100vh', 
      borderRight: '1px solid hsla(var(--foreground), 0.05)', 
      backgroundColor: 'hsl(var(--background))', 
      position: 'sticky', 
      top: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '2rem 1.5rem' 
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.5px', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: 'hsl(var(--primary))', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Search size={20} color="#001011" />
        </div>
        <span style={{ fontWeight: 600 }}>FontFinder<span className="text-cyan">AI</span></span>
      </Link>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name}
              href={item.path} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '0.875rem 1rem', 
                borderRadius: 'var(--radius)', 
                fontSize: '0.875rem', 
                fontWeight: isActive ? 400 : 300,
                color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                backgroundColor: isActive ? 'hsla(var(--primary), 0.05)' : 'transparent',
                transition: 'all 0.2s ease',
                border: isActive ? '1px solid hsla(var(--primary), 0.1)' : '1px solid transparent'
              }}
            >
              <div style={{ opacity: isActive ? 1 : 0.7 }}>{item.icon}</div>
              {item.name}
              {isActive && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />}
            </Link>
          );
        })}
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', borderTop: '1px solid hsla(var(--foreground), 0.05)', paddingTop: '2rem' }}>
        {bottomItems.map((item) => (
          <Link 
            key={item.name}
            href={item.path} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '0.75rem 1rem', 
              borderRadius: 'var(--radius)', 
              fontSize: '0.875rem', 
              fontWeight: 300,
              color: 'hsl(var(--muted-foreground))',
              transition: 'all 0.2s ease'
            }}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
        
        <button 
          onClick={() => window.location.href = '/'}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '0.75rem 1rem', 
            borderRadius: 'var(--radius)', 
            fontSize: '0.875rem', 
            fontWeight: 300,
            color: '#ff4b4b',
            background: 'none',
            cursor: 'pointer',
            marginTop: '0.5rem',
            transition: 'all 0.2s ease'
          }}
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}
