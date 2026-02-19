'use client';

import { Footer } from './Footer';
import { Header } from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout — Full-screen viewport layout
 * Header and Footer are always visible (pinned).
 * Main content area scrolls independently.
 * Background uses blurred gradient orbs for a premium glassmorphism feel.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      {/* ── Background Effects (behind everything, blurred) ── */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Base blur layer */}
        <div
          className="absolute inset-0"
          style={{ backdropFilter: 'blur(80px)', WebkitBackdropFilter: 'blur(80px)' }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        {/* Gradient Orbs — diffused with blur */}
        <div
          className="gradient-orb w-[600px] h-[600px] -top-40 -left-40 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="gradient-orb w-[500px] h-[500px] top-1/3 -right-40 animate-float-delay"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-glow), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="gradient-orb w-[400px] h-[400px] bottom-20 left-1/3 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* ── Header (always visible, pinned top) ── */}
      <Header />

      {/* ── Scrollable Content Area ── */}
      <main className="flex-1 overflow-y-auto relative">
        {children}

        {/* Footer lives inside the scroll area so it's reachable */}
        <Footer />
      </main>
    </div>
  );
}
