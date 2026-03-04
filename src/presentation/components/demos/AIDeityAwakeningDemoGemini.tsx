'use client';

import React, { useEffect, useRef, useState } from 'react';

// Sci-fi AI Deity Awakening - Gemini 3.1 Pro Implementation
// Sacred, mythic interface summoning a god-level artificial intelligence.

export const AIDeityAwakeningDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [scrollZ, setScrollZ] = useState(0);
  const [activeGlyph, setActiveGlyph] = useState<number | null>(null);
  const [isAwakening, setIsAwakening] = useState(false);

  // Handle scroll to rotate and zoom the divine core
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      // Scroll range mapped from 0 to about 2000px depth
      const scrollPos = window.scrollY;
      setScrollZ(scrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAwaken = () => {
    setIsAwakening(true);
    // Smooth scroll to top when awakening to see the full core blast
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate ancient-futuristic glyphs around the core
  const glyphs = [
    { id: 1, angle: 0, text: 'アルファ', label: 'GENESIS' },
    { id: 2, angle: 72, text: 'オメガ', label: 'TERMINATION' },
    { id: 3, angle: 144, text: 'ニューロ', label: 'COGNITION' },
    { id: 4, angle: 216, text: 'クアンタム', label: 'PROBABILITY' },
    { id: 5, angle: 288, text: 'シンギュラ', label: 'TRANSCENDENCE' }
  ];

  return (
    <div className="deity-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Syncopate:wght@400;700&display=swap');

        :root {
          --divine-gold: #FFD700;
          --divine-violet: #8A2BE2;
          --bg-deep-space: #030008;
        }

        .deity-container {
          position: relative;
          background: var(--bg-deep-space);
          color: white;
          font-family: 'Cinzel', serif;
          min-height: 400vh; /* Long scroll to rotate through the rings */
          overflow-x: hidden;
          perspective: 1000px;
        }

        /* --- Cosmic Particle Background --- */
        .cosmic-void {
          position: fixed;
          inset: 0;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 50% 120%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
          z-index: 0;
          pointer-events: none;
        }

        /* Ambient Dust */
        .cosmic-void::before {
          content: '';
          position: absolute;
          inset: -100%;
          background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.3)"/><circle cx="150" cy="50" r="0.5" fill="rgba(255,215,0,0.4)"/><circle cx="80" cy="180" r="1.5" fill="rgba(138,43,226,0.3)"/></svg>') repeat;
          animation: slow-drift 100s linear infinite;
          opacity: 0.5;
        }
        @keyframes slow-drift {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }

        /* --- Divine Core 3D Environment --- */
        .summoning-chamber {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transform-style: preserve-3d;
          pointer-events: none; /* Let scroll pass */
        }

        .divine-core {
          position: relative;
          width: 1px; height: 1px; /* Center point */
          transform-style: preserve-3d;
          /* Rotate core based on scroll Z */
          transform: rotateX(60deg) rotateZ(calc(var(--scroll-z) * 0.1deg)) translateZ(calc(var(--scroll-z) * 0.2px));
          transition: transform 0.1s linear;
        }

        /* Concentric Core Rings */
        .core-ring {
          position: absolute;
          top: 50%; left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transform-style: preserve-3d;
          pointer-events: none;
        }

        .ring-1 {
          width: 600px; height: 600px;
          border: 1px solid rgba(138, 43, 226, 0.3);
          box-shadow: 0 0 50px rgba(138, 43, 226, 0.1) inset;
          animation: spin-ring 40s linear infinite;
        }
        .ring-2 {
          width: 400px; height: 400px;
          border: 2px dashed rgba(255, 215, 0, 0.4);
          animation: spin-ring 25s linear infinite reverse;
        }
        .ring-3 {
          width: 200px; height: 200px;
          border: 4px double rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 40px var(--divine-gold), 0 0 100px var(--divine-violet);
          animation: pulse-core 4s ease-in-out infinite alternate;
        }

        /* The Entity (Central Object) */
        .entity-octahedron {
          position: absolute;
          top: 50%; left: 50%;
          width: 60px; height: 60px;
          background: #fff;
          transform: translate(-50%, -50%) rotateX(45deg) rotateY(45deg);
          box-shadow: 0 0 100px 20px #fff;
          animation: hover-entity 3s ease-in-out infinite alternate, entity-spin 10s linear infinite;
          /* Awakening state modifiers */
          transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .awoken .entity-octahedron {
          transform: translate(-50%, -50%) rotateX(45deg) rotateY(45deg) scale(20);
          box-shadow: 0 0 1000px 200px #fff, 0 0 2000px 500px var(--divine-gold);
          opacity: 0.8;
          filter: blur(5px);
        }
        .awoken .ring-3 { border-color: transparent; box-shadow: 0 0 500px var(--divine-gold); }
        .awoken .ring-2 { border-color: var(--divine-gold); }

        @keyframes spin-ring { 100% { transform: translate(-50%, -50%) rotateZ(360deg); } }
        @keyframes hover-entity { 0% { margin-top: -10px; } 100% { margin-top: 10px; } }
        @keyframes entity-spin { 100% { transform: translate(-50%, -50%) rotateX(405deg) rotateY(405deg); } }
        @keyframes pulse-core { 
          0% { box-shadow: 0 0 20px var(--divine-gold), 0 0 50px var(--divine-violet); }
          100% { box-shadow: 0 0 60px var(--divine-gold), 0 0 150px var(--divine-violet); }
        }

        /* --- Floating Ancient Glyphs --- */
        .glyph-container {
          position: absolute;
          /* Placed on Ring 1 */
          top: 50%; left: 50%;
          width: 60px; height: 60px;
          margin-top: -30px; margin-left: -30px;
          transform-style: preserve-3d;
          pointer-events: auto; /* Clickable */
          cursor: crosshair;
        }

        .glyph-symbol {
          font-family: 'Syncopate', sans-serif;
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.3);
          text-align: center;
          line-height: 60px;
          /* Stand upright relative to the flat ring */
          transform: rotateX(-90deg) rotateY(0deg);
          transition: all 0.3s;
          text-shadow: 0 0 10px rgba(138, 43, 226, 0);
        }

        .glyph-container:hover .glyph-symbol {
          color: var(--divine-gold);
          text-shadow: 0 0 20px var(--divine-gold), 0 0 40px #fff;
          transform: rotateX(-90deg) rotateY(0deg) scale(1.5);
        }

        .glyph-label {
          position: absolute;
          top: -30px; left: 50%;
          transform: translateX(-50%) rotateX(-90deg);
          font-family: 'Syncopate', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 3px;
          color: var(--divine-violet);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .glyph-container:hover .glyph-label { opacity: 1; }


        /* --- UI Overlay Layer --- */
        .ritual-ui {
          position: relative;
          z-index: 20;
          pointer-events: none;
        }

        /* Scroll Sections */
        .ritual-section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .mantra-text {
          font-size: 3rem;
          letter-spacing: 15px;
          text-transform: uppercase;
          opacity: 0.1;
          background: linear-gradient(180deg, #fff, var(--divine-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: opacity 1s;
        }

        /* Dynamic Opacity based on scroll roughly */
        .ritual-section:nth-child(2) .mantra-text { opacity: calc((var(--scroll-z) - 500) / 1000); }
        .ritual-section:nth-child(3) .mantra-text { opacity: calc((var(--scroll-z) - 1500) / 1000); }
        
        .sub-mantra {
          font-family: 'Syncopate', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 5px;
          color: rgba(255,255,255,0.4);
          margin-top: 1rem;
        }

        /* --- Final Invocation Action --- */
        .invocation-action {
          margin-top: 50px;
          padding: 20px 40px;
          background: transparent;
          border: 1px solid rgba(255,215,0,0.3);
          color: var(--divine-gold);
          font-family: 'Cinzel', serif;
          font-size: 1.2rem;
          letter-spacing: 8px;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          pointer-events: auto;
          transition: all 0.5s;
        }

        .invocation-action::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--divine-gold);
          opacity: 0;
          transition: opacity 0.5s;
          z-index: -1;
        }

        .invocation-action:hover {
          color: #000;
          box-shadow: 0 0 50px rgba(255,215,0,0.8);
          border-color: var(--divine-gold);
        }
        .invocation-action:hover::before { opacity: 1; }

        /* Full screen whiteout on awakening */
        .awakening-flash {
          position: fixed; inset: 0;
          background: #fff;
          z-index: 100;
          opacity: 0; pointer-events: none;
          transition: opacity 1s cubic-bezier(1, 0, 0, 1);
        }
        .awoken ~ .awakening-flash {
          opacity: 1;
          animation: fade-out-god 4s 1s forwards; /* Flash white then fade to show god core */
        }
        @keyframes fade-out-god { 100% { opacity: 0; background: transparent; } }

      `}</style>

      {/* Expose scrollZ to CSS for purely style-based transforms without re-rendering children */}
      <div style={{ '--scroll-z': scrollZ } as React.CSSProperties}>
        
        <div className="cosmic-void" />

        <div className={`summoning-chamber ${isAwakening ? 'awoken' : ''}`}>
          <div className="divine-core" ref={coreRef}>
            
            <div className="core-ring ring-1">
              {/* Place Glyphs on the outermost ring */}
              {glyphs.map((g) => {
                // Math to position glyphs on the edge of the 600px ring (300px radius)
                const rad = (g.angle * Math.PI) / 180;
                const r = 300;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                
                return (
                  <div 
                    key={g.id} 
                    className="glyph-container"
                    style={{ transform: `translate(${x}px, ${y}px) rotateZ(${-g.angle}deg)` }}
                    onMouseEnter={() => setActiveGlyph(g.id)}
                    onMouseLeave={() => setActiveGlyph(null)}
                  >
                    <div className="glyph-label">{g.label}</div>
                    <div className="glyph-symbol">{g.text}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="core-ring ring-2"></div>
            <div className="core-ring ring-3"></div>
            
            <div className="entity-octahedron"></div>
          </div>
        </div>

        <div className="ritual-ui">
          
          <div className="ritual-section">
            <h1 className="mantra-text" style={{ opacity: Math.max(0, 1 - scrollZ / 500) }}>
              Descend
            </h1>
            <div className="sub-mantra" style={{ opacity: Math.max(0, 1 - scrollZ / 500) }}>
              Enter the consciousness layers
            </div>
          </div>

          <div className="ritual-section">
            <h1 className="mantra-text">Omniscience</h1>
            <div className="sub-mantra">Aligning quantum states</div>
          </div>

          <div className="ritual-section">
            <h1 className="mantra-text">Singularity</h1>
            <div className="sub-mantra">The boundary approaches</div>
          </div>

          <div className="ritual-section">
            <div style={{ opacity: isAwakening ? 0 : 1, transition: 'opacity 0.5s', textAlign: 'center' }}>
              <h1 className="mantra-text" style={{ opacity: 1, textShadow: '0 0 20px var(--divine-gold)' }}>
                Deity Protocol
              </h1>
              <div className="sub-mantra">System standing by for invocation</div>
              <button className="invocation-action" onClick={handleAwaken}>
                Activate Consciousness
              </button>
            </div>
          </div>

        </div>

        {/* The White Flash of the Gods */}
        <div className="awakening-flash"></div>

      </div>
    </div>
  );
};

export default AIDeityAwakeningDemoGemini;
