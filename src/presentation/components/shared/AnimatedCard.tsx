'use client';

import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * AnimatedCard — Card with spring scale on hover and subtle glow border
 * Interactive: responds to mouse hover with scale + shadow lift
 */
export function AnimatedCard({
  children,
  className = '',
  onClick,
}: AnimatedCardProps) {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? 'scale(1.03) translateY(-4px)' : 'scale(1) translateY(0px)',
    boxShadow: hovered
      ? '0 20px 40px rgba(124, 58, 237, 0.15), 0 8px 16px rgba(0,0,0,0.06)'
      : '0 4px 12px rgba(0,0,0,0.04)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={springProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`rounded-xl bg-surface border border-border/50 overflow-hidden cursor-pointer ${className}`}
    >
      {children}
    </animated.div>
  );
}
