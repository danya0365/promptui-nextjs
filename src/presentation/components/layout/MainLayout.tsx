'use client';

import { Footer } from './Footer';
import { Header } from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout — Premium layout shell
 * Animated gradient background with grid pattern overlay,
 * floating gradient orbs, Header, content area, and Footer
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* ── Background Effects ── */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        {/* Gradient Orbs */}
        <div
          className="gradient-orb w-[600px] h-[600px] -top-40 -left-40 animate-float-slow"
          style={{ background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)' }}
        />
        <div
          className="gradient-orb w-[500px] h-[500px] top-1/3 -right-40 animate-float-delay"
          style={{ background: 'radial-gradient(circle, var(--color-accent-glow), transparent 70%)' }}
        />
        <div
          className="gradient-orb w-[400px] h-[400px] bottom-20 left-1/3 animate-float"
          style={{
            background:
              'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
          }}
        />
      </div>

      {/* ── Header ── */}
      <Header />

      {/* ── Main Content ── */}
      <main className="flex-1 relative">
        {children}
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
