'use client';

import { siteConfig } from '@/src/config/site.config';
import Link from 'next/link';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { ThemeToggle } from './ThemeToggle';

/**
 * Header — Glassmorphism sticky navbar
 * Features: gradient logo, nav links with hover animation,
 * ThemeToggle, and mobile hamburger menu
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileMenuSpring = useSpring({
    opacity: mobileOpen ? 1 : 0,
    transform: mobileOpen ? 'translateY(0%)' : 'translateY(-10%)',
    config: { tension: 280, friction: 24 },
  });

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/50"
      style={{ background: 'var(--header-bg)', backdropFilter: 'blur(20px)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white font-bold text-lg shadow-lg group-hover:shadow-primary-glow transition-shadow duration-300">
              P
              <span className="absolute inset-0 rounded-lg animate-glow-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="text-xl font-bold text-gradient tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground mt-1 transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <animated.div
          style={mobileMenuSpring}
          className="md:hidden border-t border-border/50 glass-panel"
        >
          <nav className="flex flex-col py-4 px-4 gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-alt rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </animated.div>
      )}
    </header>
  );
}
