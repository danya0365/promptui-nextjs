'use client';

import React, { useEffect, useRef, useState } from 'react';

// Post-Human Digital Interface - Gemini 3.1 Pro Implementation
// No traditional UI. Magnetic repulsions, morphing gradients, contextual reveals.

export const PostHumanInterfaceDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeArea, setActiveArea] = useState<string | null>(null);

  // Smooth mouse tracking for magnetic interactions
  const currentMouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      targetMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const totalScroll = containerRef.current.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrame: number;
    const render = () => {
      // Lerp mouse for ultra-smooth buttery feeling
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.1;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.1;
      setMousePos({ x: currentMouse.current.x, y: currentMouse.current.y });
      animationFrame = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Helpers to calculate magnetic repulsion or attraction
  const getMagneticStyle = (x: number, y: number, radius: number, isRepel: boolean = true) => {
    const dx = mousePos.x - x;
    const dy = mousePos.y - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist < radius) {
      const force = (radius - dist) / radius; // 0 to 1
      const moveX = (dx / dist) * force * 50 * (isRepel ? -1 : 1);
      const moveY = (dy / dist) * force * 50 * (isRepel ? -1 : 1);
      return {
        transform: `translate3d(${moveX}px, ${moveY}px, 0) scale(${1 + force * 0.1})`,
        filter: `blur(${force * 5}px)`,
        opacity: 1 - force * 0.5
      };
    }
    return { transform: 'translate3d(0, 0, 0) scale(1)', filter: 'blur(0)', opacity: 1 };
  };

  const getRevealStyle = (id: string, x: number, y: number, radius: number) => {
    const dx = mousePos.x - x;
    const dy = mousePos.y - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    const isRevealed = dist < radius;
    // We update state without causing infinite re-renders by doing it delicately,
    // but for UI sake, we'll just derive it mathematically here for CSS.
    
    if (isRevealed && activeArea !== id) {
       // Timeout prevents setState warnings during render
       setTimeout(() => setActiveArea(id), 0);
    } else if (!isRevealed && activeArea === id) {
       setTimeout(() => setActiveArea(null), 0);
    }

    return {
      opacity: isRevealed ? 1 : 0,
      transform: `translateY(${isRevealed ? 0 : 20}px)`,
      transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
      pointerEvents: isRevealed ? 'auto' as const : 'none' as const
    };
  };

  // Safe window dimensions to avoid hydration mismatch
  const getCenter = () => {
    if (typeof window === 'undefined') return { x: 500, y: 500 };
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  };

  const center = getCenter();

  return (
    <div className="post-human-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap');

        :root {
          --bg-dark: #0a0a0c;
          --glass-bg: rgba(255, 255, 255, 0.02);
          --glass-border: rgba(255, 255, 255, 0.05);
          --text-muted: rgba(255, 255, 255, 0.5);
        }

        .post-human-container {
          position: relative;
          background: var(--bg-dark);
          color: #fff;
          font-family: 'Inter', sans-serif;
          min-height: 300vh; /* Scroll drives morphism, not layout */
          overflow-x: hidden;
          cursor: crosshair;
        }

        /* --- Liquid/Morphing Gradient Background --- */
        .liquid-bg {
          position: fixed;
          inset: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(100,200,255,0.1), transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(200,100,255,0.05), transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(100,255,150,0.05), transparent 50%);
          filter: blur(80px); /* Massive blur for fluid feel */
          pointer-events: none;
          z-index: 0;
          /* Rotation mapped to scroll progress */
          transition: transform 0.1s linear;
        }

        /* --- Fixed Viewport UI (The Canvas) --- */
        .fixed-canvas {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: 10;
          pointer-events: none; /* Let pointer events fall through to document for scroll */
        }

        /* --- Geometric Morphing Nucleus --- */
        .nucleus {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 300px; height: 300px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%; /* Morphs from circle to rounded rect based on scroll */
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          pointer-events: none;
        }

        .nucleus::before, .nucleus::after {
          content: '';
          position: absolute; inset: -20px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: inherit;
          transition: all 0.5s ease;
        }
        .nucleus::after { inset: -40px; border-color: rgba(255,255,255,0.02); }

        /* --- Magnetic Floating Data Nodes --- */
        .data-node {
          position: absolute;
          padding: 1.5rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          pointer-events: auto; /* clickable theoretically */
          transition: transform 0.1s linear, filter 0.1s linear, opacity 0.1s linear;
          font-weight: 300;
          letter-spacing: 1px;
        }
        .node-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem; }
        .node-value { font-size: 1.5rem; font-weight: 100; }

        /* --- Contextual Reveal Zones --- */
        .reveal-content {
          position: absolute;
          padding: 3rem;
          max-width: 400px;
          pointer-events: auto;
          /* opacity/transform handled inline via JS */
        }
        .reveal-title {
          font-size: 2.5rem;
          font-weight: 100;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }
        .reveal-body {
          font-size: 0.9rem;
          line-height: 1.8;
          color: var(--text-muted);
          font-weight: 300;
        }

        /* Minimal scroll instruction */
        .scroll-hint {
          position: fixed;
          bottom: 2rem; left: 50%; transform: translateX(-50%);
          font-size: 0.7rem; letter-spacing: 4px;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          pointer-events: none;
          transition: opacity 1s;
        }

      `}</style>

      {/* The Liquid Background that rotates with scroll */}
      <div 
        className="liquid-bg" 
        style={{ transform: `rotate(${scrollProgress * 180}deg) scale(${1 + scrollProgress * 0.5})` }}
      />

      <div className="fixed-canvas">
        
        {/* The Nucleus (Shape shifts based on scroll) */}
        <div 
          className="nucleus"
          style={{
            // Morphs from 50% circle to 2% sharp box
            borderRadius: `${50 - (scrollProgress * 48)}%`,
            // Breathes slightly with mouse movement
            width: `${300 + (mousePos.x / window.innerWidth) * 50}px`,
            height: `${300 + (mousePos.y / window.innerHeight) * 50}px`,
            // Rotating contrary to background
            transform: `translate(-50%, -50%) rotate(${scrollProgress * -90}deg)`
          }}
        >
           {/* Active Area Indicator inside Nucleus */}
           <div style={{
             position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
             textAlign: 'center', transition: 'opacity 0.5s', opacity: activeArea ? 1 : 0
           }}>
             <div style={{ fontSize: '0.6rem', letterSpacing: '4px', color: 'rgba(255,255,255,0.4)' }}>NEURAL LINK</div>
             <div style={{ fontSize: '1.2rem', fontWeight: 100 }}>{activeArea?.toUpperCase()}</div>
           </div>
        </div>

        {/* Magnetic Nodes (Repel from cursor) */}
        <div 
          className="data-node" 
          style={{ top: '20%', left: '20%', ...getMagneticStyle(window.innerWidth * 0.2, window.innerHeight * 0.2, 300, true) }}
        >
          <div className="node-label">Synaptic Load</div>
          <div className="node-value">{(0.12 + scrollProgress * 0.8).toFixed(3)} TFLOPS</div>
        </div>

        <div 
          className="data-node" 
          style={{ bottom: '25%', right: '15%', ...getMagneticStyle(window.innerWidth * 0.85, window.innerHeight * 0.75, 400, true) }}
        >
          <div className="node-label">Consciousness Drift</div>
          <div className="node-value">{(mousePos.x / window.innerWidth * 100).toFixed(1)}%</div>
        </div>

        {/* Contextual Reveals (Hover to reveal content) - Positioned in corners */}
        
        {/* Top Right Zone */}
        <div className="reveal-content" style={{ top: '10%', right: '10%', ...getRevealStyle('genesis_protocol', window.innerWidth * 0.8, window.innerHeight * 0.2, 400) }}>
          <h2 className="reveal-title">GENESIS<br/>PROTOCOL</h2>
          <p className="reveal-body">
            The era of buttons is over. The interface does not require commands, only intent. 
            Proximity dictates relevance. Distance implies disinterest.
          </p>
        </div>

        {/* Bottom Left Zone */}
        <div className="reveal-content" style={{ bottom: '10%', left: '10%', ...getRevealStyle('void_architecture', window.innerWidth * 0.2, window.innerHeight * 0.8, 400) }}>
          <h2 className="reveal-title">VOID<br/>ARCHITECTURE</h2>
          <p className="reveal-body">
            Space is not empty; it is waiting. Navigational structures have been dissolved to allow geometry and light to convey absolute meaning without language constraint.
          </p>
        </div>

        {/* Subliminal Cursor */}
        <div style={{
          position: 'absolute',
          top: mousePos.y, left: mousePos.x,
          width: '4px', height: '4px', background: '#fff', borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none', mixBlendMode: 'difference',
          boxShadow: '0 0 20px 5px rgba(255,255,255,0.2)'
        }}></div>

      </div>

      <div className="scroll-hint" style={{ opacity: scrollProgress > 0.1 ? 0 : 1 }}>
        Distort Geometry (Scroll)
      </div>

    </div>
  );
};

export default PostHumanInterfaceDemoGemini;
