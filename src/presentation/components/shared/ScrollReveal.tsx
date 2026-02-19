'use client';

import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

/**
 * ScrollReveal — Fade-in on scroll with Intersection Observer + react-spring
 * Configurable direction and delay for staggered reveals
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-40px)';
      case 'right':
        return 'translateX(40px)';
      default:
        return 'translateY(30px)';
    }
  };

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) translateX(0px)' : getInitialTransform(),
    delay: isVisible ? delay : 0,
    config: { tension: 180, friction: 22 },
  });

  return (
    <animated.div ref={ref} style={springProps} className={className}>
      {children}
    </animated.div>
  );
}
