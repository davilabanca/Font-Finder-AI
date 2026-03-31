'use client';

import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { User, Mail, Shield, Bell, Camera, Save, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Davi Labanca',
    email: 'davi@fontfinder.ai',
    plan: 'Premium Pro'
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <Sidebar />
      
      <main style={{ flex: 1, padding: '3rem 4rem' }} className="animate">
        <header style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '16px', letterSpacing: '-1.5px' }}>
            <User size={32} className="text-cyan" />
            Configurações de <span style={{ fontWeight: 500 }} className="text-cyan">Perfil</span>
          </h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '0.75rem', fontSize: '1.125rem', fontWeight: 200 }}>
            Gerencie suas informações e preferências da conta.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '4rem' }}>
          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Profile Info */}
            <div className="glass-card" style={{ padding: '3rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginBottom: '3rem' }}>
                  <div style={{ position: 'relative' }}>
                     <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'hsla(var(--primary), 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid hsla(var(--primary), 0.2)' }}>
                        <User size={40} className="text-cyan" />
                     </div>
                     <button style={{ position: 'absolute', bottom: 0, right: 0, padding: '8px', backgroundColor: 'hsl(var(--accent))', color: '#001011', borderRadius: '50%', border: 'none', cursor: 'pointer' }}>
                        <Camera size={16} />
                     </button>
                  </div>
                  <div>
                     <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>{profile.name}</h3>
                     <p style={{ color: 'hsl(var(--muted))', fontSize: '0.875rem', fontWeight: 300 }}>Membro desde Março 2024</p>
                  </div>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                     <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--muted))', letterSpacing: '0.05em' }}>NOME COMPLETO</label>
                     <input 
                        type="text" 
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        style={{ padding: '1rem', backgroundColor: 'hsla(var(--foreground), 0.02)', border: '1px solid hsla(var(--foreground), 0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', fontWeight: 200 }}
                     />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                     <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--muted))', letterSpacing: '0.05em' }}>E-MAIL</label>
                     <input 
                        type="email" 
                        value={profile.email}
                        disabled
                        style={{ padding: '1rem', backgroundColor: 'hsla(var(--foreground), 0.02)', border: '1px solid hsla(var(--foreground), 0.1)', borderRadius: '12px', color: 'hsl(var(--muted))', fontSize: '1rem', fontWeight: 200, cursor: 'not-allowed' }}
                     />
                  </div>
               </div>

               <button className="btn-primary" style={{ marginTop: '3rem', padding: '1rem 2rem', fontWeight: 500 }}>
                  <Save size={18} />
                  SALVAR ALTERAÇÕES
               </button>
            </div>

            {/* Security Section */}
            <div className="glass-card" style={{ padding: '3rem' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Shield size={20} className="text-lime" />
                  Segurança
               </h3>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', backgroundColor: 'hsla(var(--foreground), 0.02)', borderRadius: '12px', border: '1px solid hsla(var(--foreground), 0.05)' }}>
                  <div>
                     <p style={{ fontSize: '1rem', fontWeight: 300 }}>Autenticação em Duas Etapas</p>
                     <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted))', fontWeight: 200 }}>Aumente a segurança da sua conta.</p>
                  </div>
                  <button className="btn-outline" style={{ fontSize: '0.75rem' }}>ATIVAR</button>
               </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid hsla(var(--primary), 0.1)', backgroundColor: 'hsla(var(--primary), 0.02)' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>PLANO ATUAL</h4>
                <div style={{ marginBottom: '2rem' }}>
                   <span className="text-cyan" style={{ fontSize: '1.5rem', fontWeight: 300 }}>PRO</span>
                   <span style={{ fontSize: '1.5rem', fontWeight: 300 }}> DESIGNER</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 200 }}>
                   Você tem acesso ilimitado a todas as ferramentas e suporte prioritário.
                </p>
                <Link href="/dashboard/billing" className="btn-outline" style={{ width: '100%', textAlign: 'center', fontSize: '0.875rem' }}>GERENCIAR PLANO</Link>
             </div>

             <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>PREFERÊNCIAS</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Bell size={18} className="text-cyan" />
                      <span style={{ fontSize: '0.875rem', fontWeight: 300 }}>Notificações de Sistema</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Mail size={18} className="text-cyan" />
                      <span style={{ fontSize: '0.875rem', fontWeight: 300 }}>Relatórios Semanais</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
