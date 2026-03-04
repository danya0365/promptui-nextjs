'use client';

import React, { useEffect, useRef, useState } from 'react';

// Post-Human Transcendence Digital Portal - Gemini 3.1 Pro Implementation
// Spiritual technology, ascending through layers of consciousness into pure light.

export const PostHumanTranscendenceDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Calculate scroll progress from 0 to 1 based on container height
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      const currentScroll = window.scrollY;
      
      const progress = Math.min(1, Math.max(0, currentScroll / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ascension Stages Data
  const stages = [
    { id: 'physical', label: 'PHYSICAL BINDING', zIndex: 5, startPhase: 0, endPhase: 0.2 },
    { id: 'cognitive', label: 'COGNITIVE DISSOLUTION', zIndex: 4, startPhase: 0.15, endPhase: 0.45 },
    { id: 'astral', label: 'ASTRAL PROJECTION', zIndex: 3, startPhase: 0.4, endPhase: 0.7 },
    { id: 'quantum', label: 'QUANTUM SINGULARITY', zIndex: 2, startPhase: 0.65, endPhase: 0.9 },
  ];

  return (
    <div className="transcendence-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Jura:wght@300;400;500&display=swap');

        :root {
          --ethereal-white: #ffffff;
          --ethereal-silver: #e0e5ec;
          --ethereal-cyan: #e0faff;
          --bg-void: #020508;
        }

        .transcendence-container {
          position: relative;
          background: var(--bg-void);
          color: var(--ethereal-white);
          font-family: 'Jura', sans-serif;
          min-height: 500vh; /* Long scroll for slow ascension */
          overflow-x: hidden;
          perspective: 1500px;
        }

        /* --- Ambient Particle Dust --- */
        .celestial-dust {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image: 
            radial-gradient(circle at center, rgba(224, 250, 255, 0.1) 0%, transparent 50%),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.4)" filter="blur(1px)"/><circle cx="200" cy="150" r="1" fill="rgba(224,250,255,0.6)"/><circle cx="350" cy="300" r="2" fill="rgba(255,255,255,0.2)" filter="blur(2px)"/></svg>');
          animation: float-dust 150s linear infinite;
          opacity: calc(1 - var(--scroll-progress) * 0.8); /* Fades out slightly as light increases */
        }
        @keyframes float-dust {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10%) scale(1.1); }
          100% { transform: translateY(-20%) scale(1); }
        }

        /* --- 3D Ascension Chamber --- */
        .ascension-viewport {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          pointer-events: none;
        }

        /* --- Dimensional Planes (Cards) --- */
        .dimensional-plane {
          position: absolute;
          width: 60vw;
          max-width: 800px;
          height: 60vh;
          max-height: 600px;
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(224,250,255,0.01) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transform-origin: center center;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05);
          /* Hardware acceleration */
          will-change: transform, opacity;
        }

        .plane-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          letter-spacing: 0.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, var(--ethereal-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .plane-subtitle {
          font-family: 'Jura', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.3rem;
          color: rgba(255,255,255,0.6);
          font-weight: 300;
        }

        /* Glowing energetic border effect */
        .plane-glow {
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, transparent, rgba(224,250,255,0.3), transparent);
          z-index: -1;
          filter: blur(10px);
          opacity: 0.5;
        }

        /* --- Pure Light Convergence (Final State) --- */
        .pure-light-convergence {
          position: fixed;
          inset: 0;
          background: var(--ethereal-white);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
          /* Visibility controlled by React inline styles based on scroll */
        }

        .transcendent-message {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(2rem, 5vw, 4rem);
          color: #111;
          text-align: center;
          letter-spacing: 0.1em;
          opacity: 0;
          transform: translateY(20px);
          transition: all 2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .transcendent-message.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Floating interaction hints */
        .ascension-hint {
          position: fixed;
          bottom: 5vh;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          letter-spacing: 0.5rem;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          animation: pulse-hint 3s infinite alternate;
          z-index: 50;
        }
        @keyframes pulse-hint {
          0% { opacity: 0.2; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0.6; transform: translateX(-50%) translateY(-10px); }
        }

      `}</style>

      {/* Exposes scrollProgress to CSS variables for potential complex CSS calc() usage, 
          though we use React inline styles for the main 3D transforms for easier interpolation */}
      <div style={{ '--scroll-progress': scrollProgress } as React.CSSProperties}>
        
        <div className="celestial-dust" />

        <div className="ascension-hint" style={{ opacity: scrollProgress > 0.8 ? 0 : 1, transition: 'opacity 1s' }}>
          Ascend
        </div>

        <div className="ascension-viewport">
          {stages.map((stage, index) => {
            // Calculate interpolation for this specific plane
            // Start far back, come forward, pass through camera, and fade out
            
            // Map scrollProgress [startPhase, endPhase] to localProgress [0, 1]
            let localProgress = 0;
            if (scrollProgress > stage.startPhase) {
              localProgress = Math.min(1, (scrollProgress - stage.startPhase) / (stage.endPhase - stage.startPhase));
            }

            // Transform logic:
            // 0 progress -> deeply pushed back (-1000px Z), small scale, low opacity
            // 0.5 progress -> center screen (0px Z), normal scale, full opacity
            // 1.0 progress -> beyond camera (800px Z), large scale, 0 opacity

            // We use a curve to make the approach feel smooth
            const easeInOut = (t: number) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const curvedProgress = easeInOut(localProgress);

            let zTranslate = -1500 + (curvedProgress * 2500); // Crosses 0 at 0.6 progress
            let opacity = 0;
            let scale = 1;
            let blur = 0;

            if (localProgress === 0) {
              opacity = 0; // Not yet visible
            } else if (localProgress < 0.2) {
              // Fading in from distance
              opacity = localProgress / 0.2;
              blur = 10 - (localProgress / 0.2) * 10;
            } else if (localProgress < 0.7) {
              // Full visibility passing through center
              opacity = 1;
              blur = 0;
            } else {
              // Fading out as it passes behind camera
              opacity = 1 - ((localProgress - 0.7) / 0.3);
              scale = 1 + ((localProgress - 0.7) * 2); // Expanding significantly
              blur = ((localProgress - 0.7) / 0.3) * 20;
            }

            // Add a slight rotation that straightens out as it approaches
            const rotateX = 20 - (curvedProgress * 20);

            return (
              <div 
                key={stage.id} 
                className="dimensional-plane"
                style={{
                  zIndex: stage.zIndex,
                  transform: `translateZ(${zTranslate}px) scale(${scale}) rotateX(${rotateX}deg)`,
                  opacity: opacity,
                  filter: `blur(${blur}px)`,
                  // Don't render completely invisible items for performance
                  display: opacity <= 0.01 && localProgress > 0 ? 'none' : 'flex'
                }}
              >
                <div className="plane-glow" />
                <h2 className="plane-title">{stage.label}</h2>
                <div className="plane-subtitle">HARMONIC RESONANCE: {(localProgress * 100).toFixed(2)}%</div>
                
                {/* Decorative circuit lines that fade in */}
                <svg width="200" height="50" style={{ marginTop: '2rem', opacity: localProgress > 0.3 ? 1 : 0, transition: 'opacity 1s' }}>
                  <path d="M0,25 L80,25 L90,10 L110,10 L120,25 L200,25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <circle cx="100" cy="10" r="3" fill="var(--ethereal-cyan)" />
                </svg>
              </div>
            );
          })}
        </div>

        {/* The Final Whiteout Phase */}
        <div 
          className="pure-light-convergence"
          style={{
            // Start fading in the whiteout at 85% scroll
            opacity: scrollProgress > 0.85 ? (scrollProgress - 0.85) / 0.15 : 0,
            pointerEvents: scrollProgress > 0.95 ? 'auto' : 'none'
          }}
        >
          <div className={`transcendent-message ${scrollProgress > 0.98 ? 'visible' : ''}`}>
            "You have transcended the interface."
            <div style={{ fontSize: '1rem', fontStyle: 'normal', fontFamily: 'Jura, sans-serif', marginTop: '2rem', letterSpacing: '0.2em', color: '#999' }}>
              CONSCIOUSNESS // UPLOADED
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostHumanTranscendenceDemoGemini;
