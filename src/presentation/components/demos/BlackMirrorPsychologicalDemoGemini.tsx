'use client';

import React, { useEffect, useRef, useState } from 'react';

// Black Mirror Psychological Interface - Gemini 3.1 Pro Implementation
// Unsettling, dystopia interface with micro-glitches and perspective distortion.

export const BlackMirrorPsychologicalDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollData, setScrollData] = useState({ y: 0, delta: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [glitchTrigger, setGlitchTrigger] = useState(false);

  // Reality distortion effect based on scroll velocity
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY;
          
          setScrollData({ y: currentScrollY, delta });
          
          // Random heavy glitch if scrolling too fast
          if (Math.abs(delta) > 50 && Math.random() > 0.8) {
            setGlitchTrigger(true);
            setTimeout(() => setGlitchTrigger(false), 200);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Random micro-glitches even when not scrolling
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchTrigger(true);
        setTimeout(() => setGlitchTrigger(false), 50 + Math.random() * 150);
      }
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  // System Logs Data
  const systemLogs = [
    { id: 1, text: "MONITORING SUB-ROUTINE 4X-9", status: "ACTIVE" },
    { id: 2, text: "CITIZEN THOUGHT PATTERN ANALYSIS", status: "PROCESSING" },
    { id: 3, text: "BEHAVIORAL CORRECTION PROTOCOL", status: "STANDBY" },
    { id: 4, text: "REALITY DISTORTION FIELD", status: "NOMINAL" },
    { id: 5, text: "EMOTIONAL SUPPRESSION ENGINE", status: "OVERRIDE" }
  ];

  // Calculate distortion based on scroll delta
  // Limit max skew so it doesn't completely break readability
  const skewY = Math.max(-5, Math.min(5, scrollData.delta * -0.05));
  const rotateX = Math.max(-10, Math.min(10, scrollData.delta * 0.1));

  return (
    <div className={`bm-container ${glitchTrigger ? 'global-glitch' : ''}`} ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=IBM+Plex+Mono:wght@400;600&display=swap');

        :root {
          --bm-bg: #050505;
          --bm-fg: #f4f4f4;
          --bm-accent: #ff003c; /* Blood warning red */
          --bm-dim: #333333;
        }

        .bm-container {
          position: relative;
          background-color: var(--bm-bg);
          color: var(--bm-fg);
          font-family: 'IBM Plex Mono', monospace;
          min-height: 200vh;
          overflow-x: hidden;
          perspective: 1000px;
          cursor: crosshair;
        }

        /* --- CRT Grain & Scanlines --- */
        .bm-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
        }

        .bm-overlay::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 6px 100%;
          opacity: 0.3;
        }

        .bm-overlay::after {
          content: '';
          position: absolute; inset: -150%;
          background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.15"/></svg>');
          animation: noise-shift 0.2s infinite alternate;
        }

        @keyframes noise-shift {
          0% { transform: translate(0,0); }
          100% { transform: translate(-5%, -5%); }
        }

        /* --- Global Glitch State (Color Inversion) --- */
        .global-glitch {
          filter: invert(1) contrast(150%) hue-rotate(180deg);
        }

        /* --- Viewport Warping (Scroll Driven) --- */
        .reality-layer {
          padding: 10vh 5vw;
          max-width: 1200px;
          margin: 0 auto;
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
        }

        /* --- Brutal Typography --- */
        .bm-header {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: -3px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          position: relative;
        }

        /* Text Glitch Effect */
        .glitch-text {
          position: relative;
          color: white;
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bm-bg);
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 red;
          clip-path: inset(20% 0 80% 0);
          animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 blue;
          clip-path: inset(80% 0 5% 0);
          animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          40% { clip-path: inset(40% 0 50% 0); }
          60% { clip-path: inset(80% 0 5% 0); }
          80% { clip-path: inset(10% 0 70% 0); }
          100% { clip-path: inset(30% 0 50% 0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); }
          20% { clip-path: inset(30% 0 20% 0); }
          40% { clip-path: inset(70% 0 10% 0); }
          60% { clip-path: inset(20% 0 50% 0); }
          80% { clip-path: inset(90% 0 5% 0); }
          100% { clip-path: inset(50% 0 30% 0); }
        }


        /* --- UI Elements --- */
        .bm-warning {
          display: inline-block;
          background: var(--bm-fg);
          color: var(--bm-bg);
          padding: 0.5rem 1rem;
          font-weight: 600;
          font-size: 0.8rem;
          margin-bottom: 4rem;
          text-transform: uppercase;
        }

        .bm-list {
          list-style: none;
          padding: 0;
          margin: 0 0 10vh 0;
          border-top: 1px solid var(--bm-dim);
        }

        .bm-list-item {
          display: flex;
          justify-content: space-between;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--bm-dim);
          font-size: 1.2rem;
          position: relative;
          transition: transform 0.2s, background 0.2s;
        }

        .bm-list-item:hover {
          background: var(--bm-fg);
          color: var(--bm-bg);
          transform: translateX(10px);
        }

        .item-status {
          font-size: 0.8rem;
          opacity: 0.6;
        }
        .bm-list-item:hover .item-status {
          opacity: 1;
        }

        /* Interference Hover Effect */
        .item-interference {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.8) 2px,
            rgba(0,0,0,0.8) 4px
          );
          pointer-events: none;
          opacity: 0;
          z-index: 10;
        }
        .bm-list-item:hover .item-interference {
          animation: interfere 0.2s infinite;
          opacity: 1;
        }

        @keyframes interfere {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        /* Interactive Eye */
        .surveillance-node {
          width: 50px; height: 50px;
          border: 2px solid var(--bm-fg);
          border-radius: 50%;
          position: fixed;
          bottom: 2rem; right: 2rem;
          display: flex; align-items: center; justify-content: center;
          z-index: 50;
        }
        .surveillance-iris {
          width: 10px; height: 10px;
          background: var(--bm-accent);
          border-radius: 50%;
          transition: transform 0.1s;
        }

      `}</style>
      
      <div className="bm-overlay" />

      {/* The Eye that "watches" your scroll */}
      <div className="surveillance-node">
        <div 
          className="surveillance-iris" 
          style={{ transform: `translateY(${Math.min(10, scrollData.delta)}px)` }}
        />
      </div>

      <div 
        className="reality-layer" 
        style={{ transform: `skewY(${skewY}deg) rotateX(${rotateX}deg)` }}
      >
        <div className="bm-warning">
          System Advisory: Your responses are being recorded.
        </div>

        <h1 
          className="bm-header glitch-text" 
          data-text="WE ARE WATCHING"
        >
          WE ARE WATCHING
        </h1>
        
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '8rem', color: '#888' }}>
          The architecture of reality is a consensus maintained by constant surveillance. 
          Do not attempt to close this frequency.
        </p>

        <ul className="bm-list">
          {systemLogs.map((log, i) => (
            <li 
              key={log.id} 
              className="bm-list-item"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span>{log.text}</span>
              <span className="item-status" style={{ color: log.status === 'OVERRIDE' ? 'var(--bm-accent)' : 'inherit'}}>
                [{log.status}]
              </span>
              <div className="item-interference" style={{ display: hoveredIndex === i ? 'block' : 'none' }}></div>
            </li>
          ))}
        </ul>

        {/* Bottom Section */}
        <div style={{ textAlign: 'center', marginTop: '30vh', paddingBottom: '20vh' }}>
          <div 
            style={{ 
              display: 'inline-block', 
              padding: '2rem 4rem', 
              border: '1px solid var(--bm-dim)',
              fontSize: '2rem',
              cursor: 'not-allowed',
              transition: 'all 0.1s'
            }}
            onMouseOver={(e) => {
              // Jump away when hovered
              e.currentTarget.style.transform = `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`;
              e.currentTarget.style.background = 'var(--bm-fg)';
              e.currentTarget.style.color = 'var(--bm-bg)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'inherit';
            }}
          >
            DISCONNECT
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlackMirrorPsychologicalDemoGemini;
