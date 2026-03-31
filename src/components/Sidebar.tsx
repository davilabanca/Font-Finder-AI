'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, LayoutDashboard, FileSearch, History, Star, CreditCard, User, LogOut, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Nova Análise', icon: <FileSearch size={20} />, path: '/dashboard/new' },
    { name: 'Histórico', icon: <History size={20} />, path: '/dashboard/history' },
    { name: 'Favoritos', icon: <Star size={20} />, path: '/dashboard/favorites' },
  ];

  const bottomItems = [
    { name: 'Planos', icon: <CreditCard size={20} />, path: '/dashboard/billing' },
    { name: 'Perfil', icon: <User size={20} />, path: '/dashboard/profile' },
  ];

  return (
    <aside style={{ width: '260px', height: '100vh', borderRight: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', position: 'sticky', top: 0, display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Outfit', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: 'hsl(var(--primary))', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Search size={20} color="white" />
        </div>
        <span>FontFinder<span style={{ color: 'hsl(var(--primary))' }}>AI</span></span>
      </Link>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
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
                padding: '0.75rem 1rem', 
                borderRadius: 'var(--radius)', 
                fontSize: '0.875rem', 
                fontWeight: 500,
                color: isActive ? 'white' : 'hsl(var(--muted-foreground))',
                backgroundColor: isActive ? 'hsla(var(--primary), 0.1)' : 'transparent',
                transition: 'all 0.2s ease'
              }}
              className="sidebar-item"
            >
              <div style={{ color: isActive ? 'hsl(var(--primary))' : 'inherit' }}>{item.icon}</div>
              {item.name}
              {isActive && <ChevronRight size={16} style={{ marginLeft: 'auto' }} />}
            </Link>
          );
        })}
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid hsl(var(--border))', paddingTop: '1.5rem' }}>
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
              fontWeight: 500,
              color: 'hsl(var(--muted-foreground))',
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
            fontWeight: 500,
            color: 'hsl(var(--destructive))',
            background: 'none',
            cursor: 'pointer',
            marginTop: '0.5rem'
          }}
        >
          <LogOut size={20} />
          Sair
        </button>
      </div>

      <style jsx>{`
        .sidebar-item:hover {
          color: white !important;
          background-color: hsla(var(--primary), 0.05) !important;
        }
      `}</style>
    </aside>
  );
}
