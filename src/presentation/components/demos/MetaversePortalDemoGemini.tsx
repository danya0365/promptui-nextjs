'use client';

import React, { useEffect, useRef, useState } from 'react';

// Metaverse Portal Website - Gemini 3.1 Pro Implementation
// Scroll maps to Z-axis translation to simulate flying through space and portals

export const MetaversePortalDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollZ, setScrollZ] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scroll handles Z depth
    const handleScroll = () => {
      // Map scroll Y directly to Z depth (exaggerated for speed)
      setScrollZ(window.scrollY * 1.5);
    };

    // Mouse handles X/Y parallax tilt
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Helper to generate stars
  const stars = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 3000,
    y: (Math.random() - 0.5) * 3000,
    z: Math.random() * 8000 * -1, // Distribute deeply into negative Z space
    size: Math.random() * 3 + 1,
    glow: Math.random() > 0.8
  }));

  return (
    <div className="metaverse-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap');

        :root {
          --space-bg: #030305;
          --portal-cyan: #00f3ff;
          --portal-magenta: #ff00ea;
          --portal-amber: #ffaa00;
        }

        /* 
          The container needs to be very tall to enable scrolling.
          We make it 500vh to give a long "runway" to fly down.
        */
        .metaverse-container {
          position: relative;
          background: var(--space-bg);
          height: 1000vh; /* Long scroll */
          font-family: 'Rajdhani', sans-serif;
          color: #fff;
          overflow-x: hidden;
        }

        /* The viewport acts as the camera lens */
        .camera-lens {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          perspective: 1000px;
          perspective-origin: 50% 50%;
          overflow: hidden;
          pointer-events: none; /* Let scroll pass through to body */
        }

        /* 
          The 3D Space. 
          We translate this entire space forward (positive Z) as we scroll down,
          making objects inside it appear to fly towards us and past us.
        */
        .the-universe {
          position: absolute;
          width: 100%; height: 100%;
          transform-style: preserve-3d;
          /* apply scrollZ to move universe forward */
          transition: transform 0.1s linear; 
        }

        /* --- Starfield --- */
        .star {
          position: absolute;
          top: 50%; left: 50%;
          background: #fff;
          border-radius: 50%;
          transform-style: preserve-3d;
        }
        .star.glowing {
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
          background: #eef;
        }

        /* --- Portals --- */
        .portal-group {
          position: absolute;
          top: 50%; left: 50%;
          transform-style: preserve-3d;
          pointer-events: auto; /* Portals are clickable */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .portal-ring {
          position: absolute;
          border-radius: 50%;
          border: 4px solid transparent; /* controlled via inline styles */
          box-shadow: inset 0 0 50px rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          cursor: crosshair;
          transition: filter 0.3s, background 0.3s;
          /* Internal 3D structure */
          transform-style: preserve-3d;
        }

        .portal-ring:hover {
          filter: brightness(1.5);
          background: rgba(255, 255, 255, 0.05);
        }

        /* The swirling inner effect */
        .portal-vortex {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          border: 2px dashed rgba(255,255,255,0.2);
          animation: spin 20s linear infinite;
          pointer-events: none;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }

        /* Portal Content */
        .portal-content {
          text-align: center;
          transform: translateZ(50px); /* Push text out of the ring slightly */
          pointer-events: none;
        }
        
        .portal-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: 0.2em;
          text-shadow: 0 0 20px currentColor; /* Inherits color from parent */
        }
        
        .portal-sub {
          font-size: 1.2rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          opacity: 0.8;
          margin-top: 1rem;
        }

        /* --- Audio Visualizer Rings --- */
        .audio-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dotted rgba(255,255,255,0.3);
          animation: pulse-ring 2s ease-out infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        /* --- UI Overlay (Fixed to screen, doesn't move in 3D) --- */
        .hud {
          position: fixed;
          z-index: 100;
          pointer-events: none;
        }
        .hud-top {
          top: 2rem; left: 2rem; right: 2rem;
          display: flex; justify-content: space-between;
          font-family: 'Orbitron', sans-serif;
        }
        .hud-brand { font-size: 1.5rem; letter-spacing: 5px; color: var(--portal-cyan); text-shadow: 0 0 10px var(--portal-cyan); }
        .hud-coords { font-size: 1rem; opacity: 0.7; font-family: monospace; display: flex; gap: 2rem; }
        
        .hud-bottom {
          bottom: 2rem; left: 50%; transform: translateX(-50%);
          text-align: center;
          animation: bounce 2s infinite;
        }
        .scroll-icon {
          width: 30px; height: 50px; border: 2px solid #fff; border-radius: 15px;
          margin: 0 auto 10px; position: relative;
        }
        .scroll-wheel {
          width: 4px; height: 8px; background: #fff; border-radius: 2px;
          position: absolute; left: 50%; top: 10px; transform: translateX(-50%);
          animation: scroll-wheel 2s infinite;
        }
        @keyframes bounce { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, -10px); } }
        @keyframes scroll-wheel { 0% { top: 10px; opacity: 1; } 100% { top: 30px; opacity: 0; } }

      `}</style>

      {/* 2D Fixed HUD Overlay */}
      <div className="hud hud-top">
        <div className="hud-brand">METAVERSE_HQ</div>
        <div className="hud-coords">
          <span>X: {(mousePos.x * 100).toFixed(2)}</span>
          <span>Y: {(mousePos.y * 100).toFixed(2)}</span>
          <span style={{ color: 'var(--portal-magenta)' }}>Z: {scrollZ.toFixed(0)}</span>
        </div>
      </div>
      <div className="hud hud-bottom" style={{ opacity: scrollZ > 500 ? 0 : 1, transition: 'opacity 0.5s' }}>
        <div className="scroll-icon"><div className="scroll-wheel"></div></div>
        <div style={{ letterSpacing: '4px', fontSize: '0.8rem', textTransform: 'uppercase' }}>Initiate Dimensional Jump (Scroll)</div>
      </div>

      {/* 3D Camera Lens */}
      <div className="camera-lens">
        {/* The Moving Universe Scene */}
        <div 
          className="the-universe"
          style={{
            // The magic happens here: 
            // 1. Move the universe forward along Z based on scroll
            // 2. Add subtle camera tilt based on mouse position (Parallax)
            transform: `translateZ(${scrollZ}px) rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg)`
          }}
        >
          {/* Scatter Stars */}
          {stars.map(s => (
            <div 
              key={s.id} 
              className={`star ${s.glow ? 'glowing' : ''}`}
              style={{
                width: `${s.size}px`, height: `${s.size}px`,
                transform: `translate3d(${s.x}px, ${s.y}px, ${s.z}px)`
              }}
            ></div>
          ))}

          {/* 
            Portal 1: Cyber Realm (Close)
            Z-position determines how far "down the scroll" it is.
            e.g., Z = -2000 means you hit it when scrollZ = 2000.
          */}
          <Portal 
            title="CYBER_NET" 
            sub="Neo-Tokyo Data Hub"
            color="var(--portal-cyan)"
            size={500}
            zPos={-1500}
            xOffset={-400}
            yOffset={-100}
            mousePos={mousePos}
          />

          {/* Portal 2: Ethereal Void (Medium distance) */}
          <Portal 
            title="THE_VOID" 
            sub="Deep Engine Analysis"
            color="var(--portal-magenta)"
            size={600}
            zPos={-4500}
            xOffset={500}
            yOffset={200}
            mousePos={mousePos}
          />

          {/* Portal 3: Solar Core (Far distance) */}
          <Portal 
            title="SOLAR_CORE" 
            sub="Experimental Fusion reactor"
            color="var(--portal-amber)"
            size={800}
            zPos={-8500}
            xOffset={0}
            yOffset={-300}
            mousePos={mousePos}
          />

        </div>
      </div>
    </div>
  );
};

// --- Portal Sub-Component ---
interface PortalProps {
  title: string;
  sub: string;
  color: string;
  size: number;
  zPos: number;
  xOffset: number;
  yOffset: number;
  mousePos: { x: number, y: number };
}

const Portal: React.FC<PortalProps> = ({ title, sub, color, size, zPos, xOffset, yOffset, mousePos }) => {
  return (
    <div 
      className="portal-group"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        // Position it in 3D space
        transform: `translate3d(${xOffset}px, ${yOffset}px, ${zPos}px)`
      }}
    >
      {/* 
        The Portal Ring itself reacts slightly to mouse movement 
        (local parallax effect, independent of the main camera)
      */}
      <div 
        className="portal-ring"
        style={{
          width: '100%', height: '100%',
          borderColor: color,
          boxShadow: `0 0 80px ${color}, inset 0 0 40px ${color}`,
          // Local hover parallax
          transform: `rotateX(${mousePos.y * 15}deg) rotateY(${mousePos.x * -15}deg)`
        }}
        onClick={() => alert(`Initiating warp sequence to: ${title}`)}
      >
        <div className="portal-vortex" style={{ borderColor: color }}></div>
        <div className="portal-vortex" style={{ animationDirection: 'reverse', animationDuration: '15s', opacity: 0.5 }}></div>
        
        {/* Spatial Audio Visualizer Rings */}
        <div className="audio-ring" style={{ width: '110%', height: '110%', animationDelay: '0s' }}></div>
        <div className="audio-ring" style={{ width: '120%', height: '120%', animationDelay: '0.6s' }}></div>
        <div className="audio-ring" style={{ width: '130%', height: '130%', animationDelay: '1.2s' }}></div>

        <div className="portal-content" style={{ color: color }}>
          <h2 className="portal-title">{title}</h2>
          <div className="portal-sub" style={{ color: '#fff' }}>{sub}</div>
        </div>
      </div>
    </div>
  );
};

export default MetaversePortalDemoGemini;
