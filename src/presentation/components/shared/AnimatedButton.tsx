'use client';

import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * AnimatedButton — Button with spring press-down animation on click
 * Features: scale-down on press, subtle lift on hover
 */
export function AnimatedButton({
  children,
  className = '',
  variant = 'primary',
  onClick,
  disabled = false,
}: AnimatedButtonProps) {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: pressed
      ? 'scale(0.95)'
      : hovered
        ? 'scale(1.03)'
        : 'scale(1)',
    config: { tension: 400, friction: 18 },
  });

  const baseClass =
    variant === 'primary' ? 'btn-primary' : 'btn-ghost';

  return (
    <animated.button
      style={springProps}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => {
        setPressed(false);
        setHovered(false);
      }}
      onMouseEnter={() => setHovered(true)}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} inline-flex items-center justify-center gap-2 text-sm font-semibold select-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {children}
    </animated.button>
  );
}
