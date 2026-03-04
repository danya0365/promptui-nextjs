'use client';

import React, { useEffect, useRef, useState } from 'react';

// Next-Gen Spatial OS Interface - Gemini 3.1 Pro Implementation
// Post-desktop computing with multi-layer glass depth, dynamic refractions, and deep infinite environment.

interface OSCard {
  id: string;
  type: 'system' | 'ai' | 'media' | 'comms';
  title: string;
  subtitle: string;
  colSpan: number;
  rowSpan: number;
}

export const NextGenSpatialOSDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  
  // Track mouse for global spatial tilt and refractions
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (activeCardId) return; // Freeze parallax when focused
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalized coordinates: -1 to 1
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activeCardId]);

  const cards: OSCard[] = [
    { id: 'OS-1', type: 'system', title: 'Core Node', subtitle: 'Processing Status', colSpan: 1, rowSpan: 2 },
    { id: 'OS-2', type: 'ai', title: 'Neural Web', subtitle: 'Live Synthesis', colSpan: 2, rowSpan: 1 },
    { id: 'OS-3', type: 'media', title: 'Spatial Memory', subtitle: 'Archive 4B', colSpan: 1, rowSpan: 1 },
    { id: 'OS-4', type: 'comms', title: 'Quantum Link', subtitle: 'Encrypted Stream', colSpan: 1, rowSpan: 1 }
  ];

  // Calculate global rotation based on mouse
  const rx = mousePos.y * -8; // Pitch
  const ry = mousePos.x * 8;  // Yaw

  return (
    <div className={`os-viewport ${mounted ? 'mounted' : ''}`} ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500&display=swap');

        :root {
          /* Environment Variables */
          --os-bg-core: #0a0d14;
          --os-bg-edge: #111823;
          
          /* Accents */
          --os-accent: #3399ff;
          --os-accent-glow: rgba(51, 153, 255, 0.4);
          
          /* Glass Materials */
          --os-glass-base: rgba(20, 25, 35, 0.4);
          --os-glass-highlight: rgba(255, 255, 255, 0.08);
          --os-glass-border: rgba(255, 255, 255, 0.12);
          
          /* Typography */
          --font-os: 'Outfit', sans-serif;
        }

        body {
          margin: 0;
          overflow: hidden;
          background-color: var(--os-bg-core);
          color: #fff;
          font-family: var(--font-os);
        }

        .os-viewport {
          position: fixed;
          inset: 0;
          perspective: 1500px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, var(--os-bg-edge) 0%, var(--os-bg-core) 100%);
          overflow: hidden;
        }

        /* Ambient floating particles / Stardust */
        .ambient-particles {
          position: absolute;
          inset: -50%;
          background-image: radial-gradient(var(--os-glass-border) 1px, transparent 1px);
          background-size: 80px 80px;
          opacity: 0.15;
          transform: translateZ(-1000px);
          animation: slowDrift 60s linear infinite;
        }
        @keyframes slowDrift {
          from { transform: translateZ(-1000px) translateY(0); }
          to { transform: translateZ(-1000px) translateY(160px); }
        }

        /* The Spatial Operating System Grid */
        .os-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(250px, 300px));
          gap: 2rem;
          transform-style: preserve-3d;
          
          /* Physics-based tilt linked to mouse state */
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 10;
        }

        /* When focused, grid drops back deeply */
        .os-viewport.has-active .os-grid {
          transform: translateZ(-600px) !important; /* Override mouse tilt */
        }
        
        .os-viewport.has-active .os-card:not(.active) {
          opacity: 0.2;
          filter: blur(12px) brightness(0.4);
          pointer-events: none;
        }

        /* -----------------------------------
           Spatial Control Cards
           ----------------------------------- */
        .os-card {
          position: relative;
          background: var(--os-glass-base);
          border-radius: 30px;
          padding: 2.5rem;
          
          box-shadow: 
            inset 0 1px 0 var(--os-glass-highlight),     /* Top Edge Light */
            inset 0 0 0 1px var(--os-glass-border),      /* Thin Rim */
            0 30px 60px rgba(0,0,0,0.5),                 /* Deep Drop Shadow */
            0 10px 20px rgba(0,0,0,0.3);                 /* Contact Shadow */
          
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          
          cursor: pointer;
          transform-style: preserve-3d;
          
          /* Smooth out magnetic snappiness and hover changes */
          transition: 
            all 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            backdrop-filter 0.4s;
            
          /* Entrance Animation */
          opacity: 0;
          transform: translateZ(100px) scale(0.9);
        }

        .mounted .os-card {
          opacity: 1;
          transform: translateZ(0) scale(1);
        }
        
        /* Grid Spans */
        .col-span-2 { grid-column: span 2; }
        .row-span-2 { grid-row: span 2; }

        /* Hover: Light shift / Refraction effect
           When hovering an individual card, it pops out from the grid's plane */
        .os-card:hover {
          transform: translateZ(40px);
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.3),     
            inset 0 0 0 1px rgba(255,255,255,0.2),      
            0 50px 100px rgba(0,0,0,0.6),
            0 0 40px var(--os-accent-glow);
          /* Increase blur to simulate thicker glass depth */
          backdrop-filter: blur(60px) saturate(120%);
          -webkit-backdrop-filter: blur(60px) saturate(120%);
        }

        /* -----------------------------------
           Nested Sub-Panels (Multi-layer Depth)
           ----------------------------------- */
        .nested-panel {
          margin-top: 2rem;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 1.5rem;
          height: 120px;
          
          /* The magic: Push the sub-panel IN or OUT of the main glass Z-plane */
          transform: translateZ(30px); 
          transition: transform 0.4s ease;
        }
        
        .os-card:hover .nested-panel {
          /* Parallax enhancement on hover */
          transform: translateZ(50px);
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        /* Typography */
        .os-card h3 {
          margin: 0;
          font-weight: 300;
          font-size: 1.5rem;
          letter-spacing: 1px;
          transform: translateZ(20px);
        }
        .os-card p {
          margin: 0.5rem 0 0 0;
          font-weight: 300;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 2px;
          transform: translateZ(20px);
        }

        /* -----------------------------------
           Focus Expansion (Immersive Window)
           ----------------------------------- */
        .os-card.active {
          position: fixed;
          top: 50%; left: 50%;
          width: 80vw; height: 80vh;
          margin-left: -40vw; margin-top: -40vh;
          z-index: 100;
          cursor: default;
          
          /* Pull massive object all the way to user */
          transform: translateZ(200px);
          backdrop-filter: blur(80px) saturate(150%);
          -webkit-backdrop-filter: blur(80px) saturate(150%);
          border-radius: 40px;
          
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.2),
            inset 0 0 0 1px rgba(255,255,255,0.1),
            0 100px 300px rgba(0,0,0,0.9);
        }

        /* Content adjustments when expanded */
        .os-card.active .nested-panel {
          height: 400px;
          transform: translateZ(40px);
        }

        .btn-close {
          position: absolute;
          top: 3rem; right: 3rem;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.2);
          color: var(--os-accent);
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s;
          z-index: 50;
        }
        .os-card.active .btn-close { opacity: 1; }
        .btn-close:hover {
          background: var(--os-accent);
          color: #fff;
          transform: scale(1.1);
        }

        /* Glowing data line effect */
        .data-stream {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
          margin-top: 1rem;
        }
        .data-stream::after {
          content: '';
          position: absolute;
          top: 0; left: -50%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--os-accent), transparent);
          animation: streamData 2s infinite linear;
        }
        @keyframes streamData { 100% { left: 100%; } }

      `}</style>

      {/* Deep Background Depth */}
      <div className="ambient-particles" />

      {/* Center Reticle (subtle spatial anchor) */}
      <div style={{
         position: 'absolute', width: '20px', height: '20px',
         border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%',
         pointerEvents: 'none', zIndex: 0
      }} />

      {/* The 3D Grid mapping mouse to global plane rotation */}
      <div 
        className="os-grid" 
        style={!activeCardId ? { transform: `rotateX(${rx}deg) rotateY(${ry}deg)` } : undefined}
      >
        {cards.map((card, i) => {
          const isActive = activeCardId === card.id;

          return (
            <div
              key={card.id}
              className={`os-card col-span-${card.colSpan} row-span-${card.rowSpan} ${isActive ? 'active' : ''}`}
              style={{ transitionDelay: mounted && !isActive ? `${i * 0.1}s` : '0s' }}
              onClick={() => { if (!isActive) setActiveCardId(card.id); }}
            >
              {isActive && (
                <button className="btn-close" onClick={(e) => { e.stopPropagation(); setActiveCardId(null); }}>×</button>
              )}
              
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
              
              <div className="nested-panel">
                 <div style={{ color: 'var(--os-accent)', fontSize: '0.8rem', letterSpacing: '2px' }}>SYSTEM LOG_{card.id}</div>
                 <div className="data-stream" />
                 {isActive && (
                   <div style={{ marginTop: '2rem', animation: 'fadeIn 1s forwards' }}>
                     <p style={{ color: '#fff', textTransform: 'none', fontSize: '1.2rem', lineHeight: '1.6' }}>
                       Expanding spatial module into primary view.<br/>
                       In a post-desktop spatial OS, windows are not flat rectangles; they are physical volumes containing multi-layered data. Notice how the nested panels retain their relative depth even when the primary card is transformed into an immersive window.
                     </p>
                   </div>
                 )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default NextGenSpatialOSDemoGemini;
