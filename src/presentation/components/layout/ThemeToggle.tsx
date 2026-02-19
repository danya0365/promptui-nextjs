'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

/**
 * ThemeToggle — Sun/Moon toggle with react-spring rotation animation
 */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  const springProps = useSpring({
    transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 200, friction: 20 },
  });

  const glowSpring = useSpring({
    boxShadow: isDark
      ? '0 0 16px rgba(124, 58, 237, 0.4)'
      : '0 0 16px rgba(251, 191, 36, 0.4)',
    config: { tension: 200, friction: 20 },
  });

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full bg-surface-alt border border-border flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <span className="w-5 h-5" />
      </button>
    );
  }

  return (
    <animated.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-full bg-surface-alt border border-border flex items-center justify-center cursor-pointer overflow-hidden transition-colors hover:border-primary"
      style={glowSpring}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <animated.span
        style={springProps}
        className="text-xl leading-none select-none"
      >
        {isDark ? '🌙' : '☀️'}
      </animated.span>
    </animated.button>
  );
}
