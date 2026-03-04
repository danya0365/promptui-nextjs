'use client';

import React, { useEffect, useRef, useState } from 'react';

// Cyberpunk City Platform - Gemini 3.1 Pro Implementation
// 3D neon megacity at night with rain, holograms, and flying traffic.

export const CyberpunkCityPlatformDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollZ, setScrollZ] = useState(0);
  const [hoveredBuilding, setHoveredBuilding] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Scale scroll to create a deep Z-axis movement
      setScrollZ(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate deterministic but random-looking buildings along the street
  const buildings = Array.from({ length: 16 }).map((_, i) => {
    // Alternate sides: Even on left, Odd on right
    const side = i % 2 === 0 ? -1 : 1;
    // Push them back in Z space further into the city
    const zPos = -1000 - (i * 800);
    // X Position pushes them off the center street
    const xPos = side * (600 + Math.random() * 400);
    // Random Heights
    const height = 1000 + Math.random() * 1500;
    // Random Width
    const width = 400 + Math.random() * 400;

    return {
      id: i,
      x: xPos,
      z: zPos,
      height,
      width,
      side,
      hasHologram: Math.random() > 0.6,
      color: Math.random() > 0.5 ? 'var(--neon-pink)' : 'var(--neon-cyan)',
      label: `SECTOR ${String.fromCharCode(65 + (i % 26))}-${i}`
    };
  });

  return (
    <div className="cyberpunk-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Orbitron:wght@500;900&display=swap');

        :root {
          --neon-cyan: #00f3ff;
          --neon-pink: #ff00ff;
          --neon-purple: #9d00ff;
          --bg-city: #050510;
        }

        .cyberpunk-container {
          position: relative;
          background: var(--bg-city);
          color: white;
          font-family: 'Chakra Petch', sans-serif;
          min-height: 500vh; /* Deep scroll distance */
          overflow-x: hidden;
          perspective: 1200px;
          perspective-origin: 50% 50%;
        }

        /* --- Ambient Fog and Glow --- */
        .ambient-fog {
          position: fixed;
          inset: 0;
          background: linear-gradient(to bottom, rgba(5,5,16,0) 0%, rgba(157,0,255,0.1) 60%, rgba(255,0,255,0.2) 100%);
          z-index: 100;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        /* Rain Overlay */
        .rain-layer {
          position: fixed;
          inset: -20%;
          width: 140%; height: 140%;
          background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="100"><line x1="5" y1="0" x2="5" y2="20" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></svg>') repeat;
          animation: rain-fall 0.5s linear infinite;
          transform: rotate(10deg);
          z-index: 99;
          pointer-events: none;
        }
        @keyframes rain-fall {
          0% { transform: rotate(10deg) translateY(0); }
          100% { transform: rotate(10deg) translateY(100px); }
        }

        /* --- 3D City Camera --- */
        .city-camera {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          transform-style: preserve-3d;
          /* Move the camera FORWARD on Z axis based on scroll */
          transform: translateZ(calc(var(--scroll-z) * 1.5px)) translateY(100px);
          pointer-events: none;
        }

        /* --- Reflective Wet Street --- */
        .street-ground {
          position: absolute;
          bottom: -500px; left: -200vw;
          width: 400vw; height: 1000vw;
          background: #020205;
          transform-style: preserve-3d;
          transform: rotateX(90deg) translateZ(0);
          /* Neon reflections baked into background */
          background-image: 
            linear-gradient(90deg, transparent 48%, rgba(0,243,255,0.3) 50%, transparent 52%),
            radial-gradient(ellipse at 50% 10%, rgba(255,0,255,0.2) 0%, transparent 40%);
          background-size: 200px 100%, 100% 100%;
          border-top: 2px solid var(--neon-cyan);
          box-shadow: 0 0 100px var(--neon-cyan) inset;
        }

        /* Grid lines on street */
        .street-ground::after {
          content: '';
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(0,243,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,243,255,0.1) 1px, transparent 1px);
          background-size: 100px 100px;
          transform: perspective(1000px) rotateX(0deg);
        }

        /* --- Massive Skyscrapers --- */
        .building {
          position: absolute;
          bottom: 0; /* Align to street level (roughly) */
          left: 50%;
          transform-style: preserve-3d;
          background: #0a0a15;
          border: 1px solid rgba(255,255,255,0.1);
          border-bottom: none;
          /* Basic grid texture for windows */
          background-image: 
            linear-gradient(rgba(0,243,255,0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0,243,255,0.05) 2px, transparent 2px);
          background-size: 20px 30px;
          pointer-events: auto; /* Allow hover */
          cursor: pointer;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        /* Front face of building */
        .building::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          pointer-events: none;
        }

        .building:hover {
          border-color: var(--color-theme);
          box-shadow: 0 0 50px var(--color-theme) inset, 0 0 100px var(--color-theme);
          z-index: 10;
        }

        /* Interactive Content Zone on Hover */
        .building-ui {
          position: absolute;
          top: 20%; left: 110%;
          width: 300px;
          padding: 20px;
          background: rgba(5,5,16,0.9);
          border: 1px solid var(--color-theme);
          box-shadow: 0 0 20px var(--color-theme);
          font-family: 'Orbitron', sans-serif;
          opacity: 0;
          transform: translateX(-50px) translateZ(50px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
        }
        /* Swap side if building is on the right */
        .building.right-side .building-ui {
          left: auto; right: 110%;
          transform: translateX(50px) translateZ(50px);
        }

        .building:hover .building-ui {
          opacity: 1;
          transform: translateX(0) translateZ(50px);
        }

        .b-ui-title { font-size: 1.5rem; color: var(--color-theme); margin-bottom: 10px; text-transform: uppercase; }
        .b-ui-data { font-family: 'Chakra Petch', sans-serif; font-size: 0.9rem; color: #ccc; line-height: 1.5; }
        .b-ui-btn { 
          margin-top: 15px; padding: 5px 15px; 
          background: transparent; border: 1px solid var(--color-theme); 
          color: var(--color-theme); font-family: 'Orbitron'; cursor: pointer;
        }
        .b-ui-btn:hover { background: var(--color-theme); color: #000; }

        /* Holographic Billboards */
        .hologram {
          position: absolute;
          top: 10%; left: -20%;
          width: 140%; height: 200px;
          background: rgba(0,243,255,0.1);
          border: 2px solid var(--neon-cyan);
          box-shadow: 0 0 30px var(--neon-cyan), inset 0 0 20px var(--neon-cyan);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Orbitron'; font-size: 3rem; color: #fff;
          text-shadow: 0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan);
          /* float in front of building */
          transform: translateZ(100px);
          animation: holo-flicker 4s infinite alternate;
        }

        @keyframes holo-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.9; text-shadow: 0 0 10px var(--color-theme); }
          20%, 24%, 55% { opacity: 0.4; text-shadow: none; }
        }

        /* --- Flying Traffic Trails --- */
        .traffic-stream {
          position: absolute;
          width: 2px; height: 200px;
          background: var(--neon-pink);
          box-shadow: 0 0 20px 5px var(--neon-pink);
          transform-style: preserve-3d;
          animation: fly-by 2s linear infinite;
        }
        .stream-1 { top: -200px; left: -400px; background: var(--neon-cyan); box-shadow: 0 0 20px 5px var(--neon-cyan); animation-duration: 1.5s; animation-delay: 0.5s; }
        .stream-2 { top: -400px; right: -300px; animation-duration: 3s; animation-delay: 1s; }
        .stream-3 { top: -100px; left: 200px; background: var(--neon-cyan); box-shadow: 0 0 20px 5px var(--neon-cyan); animation-duration: 0.8s; }

        @keyframes fly-by {
          0% { transform: translateZ(-5000px); }
          100% { transform: translateZ(2000px); }
        }

        /* --- HUD Overlay --- */
        .city-hud {
          position: fixed; inset: 0; z-index: 50; pointer-events: none;
          padding: 2rem;
          display: flex; justify-content: space-between;
          font-family: 'Orbitron', sans-serif;
          color: var(--neon-cyan); text-shadow: 0 0 5px var(--neon-cyan);
        }
        .hud-crosshair {
          position: absolute; top: 50%; left: 50%;
          width: 40px; height: 40px; border: 1px solid rgba(0,243,255,0.3);
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
        .hud-crosshair::before, .hud-crosshair::after {
          content: ''; position: absolute; background: rgba(0,243,255,0.5);
        }
        .hud-crosshair::before { top: 50%; left: -10px; right: -10px; height: 1px; }
        .hud-crosshair::after { left: 50%; top: -10px; bottom: -10px; width: 1px; }
      `}</style>

      {/* Global CSS Variable passing for scroll Z */}
      <div style={{ '--scroll-z': scrollZ } as React.CSSProperties}>
        
        <div className="rain-layer" />
        <div className="ambient-fog" />

        <div className="city-hud">
          <div>SYS. NAV // NIGHT_CITY</div>
          <div>Z-DEPTH: {scrollZ}m</div>
          <div className="hud-crosshair"></div>
        </div>

        {/* 3D Scene Container moves based on scroll */}
        <div className="city-camera">
          
          <div className="street-ground" />

          {/* Render Buildings */}
          {buildings.map((b) => (
            <div 
              key={b.id} 
              className={`building ${b.side === 1 ? 'right-side' : ''}`}
              style={{
                '--color-theme': b.color,
                width: `${b.width}px`,
                height: `${b.height}px`,
                // Position X based on side, Z based on depth calculation
                transform: `translateX(calc(-50% + ${b.x}px)) translateZ(${b.z}px)`,
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredBuilding(b.id)}
              onMouseLeave={() => setHoveredBuilding(null)}
            >
              
              {/* Optional Hologram Billboard */}
              {b.hasHologram && (
                <div className="hologram" style={{ borderColor: b.color, color: b.color }}>
                  {b.label}
                </div>
              )}

              {/* Data UI that pops out on hover */}
              <div className="building-ui">
                <div className="b-ui-title">{b.label}</div>
                <div className="b-ui-data">
                  STATUS: SECURED<br/>
                  POPULATION: {Math.floor(Math.random() * 90000 + 10000)}<br/>
                  CORP LINK: ACTIVE
                </div>
                <button className="b-ui-btn">ACCESS MAINFRAME</button>
              </div>

            </div>
          ))}

          {/* Flying Traffic */}
          <div className="traffic-stream stream-1" />
          <div className="traffic-stream stream-2" />
          <div className="traffic-stream stream-3" />

        </div>

      </div>
    </div>
  );
};

export default CyberpunkCityPlatformDemoGemini;
