'use client';

import React, { useEffect, useRef, useState } from 'react';

// Digital Tile Physics Interface - Gemini 3.1 Pro Implementation
// 3D physics-based interface where cards exist as physical floating objects.

interface PhysicsCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  hue: number;
  // Positioning in 3D space
  xPos: number; // -1 to 1 (left to right)
  yPos: number; // -1 to 1 (top to bottom)
  zPos: number; // depth value
}

export const DigitalTilePhysicsDemoGemini: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 }); // Normalized 0-1
  const containerRef = useRef<HTMLDivElement>(null);

  const cards: PhysicsCard[] = [
    { id: 'C-01', title: 'ASTRAL FORGE', subtitle: 'Environment Engine', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', hue: 280, xPos: -0.8, yPos: -0.3, zPos: 100 },
    { id: 'C-02', title: 'QUANTUM PHYSICS', subtitle: 'Rigid Body Sim', image: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2148&auto=format&fit=crop', hue: 200, xPos: 0.2, yPos: 0.4, zPos: -300 },
    { id: 'C-03', title: 'VOLUMETRIC LIGHT', subtitle: 'Global Illumination', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2938&auto=format&fit=crop', hue: 45, xPos: 0.7, yPos: -0.5, zPos: 400 },
    { id: 'C-04', title: 'MATERIAL GRAPH', subtitle: 'PBR Shaders', image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2940&auto=format&fit=crop', hue: 320, xPos: -0.4, yPos: 0.6, zPos: 800 },
    { id: 'C-05', title: 'FLUID DYNAMICS', subtitle: 'Particle Systems', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop', hue: 180, xPos: 0.8, yPos: 0.2, zPos: 1200 },
  ];

  // Track global scroll for Z-axis camera movement
  useEffect(() => {
    const handleScroll = () => {
      if (activeCard) return; // Freeze scroll logic if a card is open
      
      const scrolled = window.scrollY;
      // Map scroll distance to Z depth units (e.g. 1px scrolled = 2 units deeper)
      setScrollDepth(scrolled * 2);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCard]);

  // Track global mouse for tilt effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (activeCard) return;
      
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activeCard]);

  // Global mouse tilt influence (-1 to 1)
  const tiltX = (mousePos.y - 0.5) * 2; // Invert Y for UI rotation mapping
  const tiltY = (mousePos.x - 0.5) * 2;

  return (
    <div className={`physics-world ${activeCard ? 'focus-mode' : ''}`} ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap');

        :root {
          --space-bg: #090b10;
        }

        body {
          margin: 0;
          background-color: var(--space-bg);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          /* Need a tall body to enable scroll-based Z movement */
          min-height: 400vh; 
          overflow-x: hidden;
        }

        .physics-world {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          perspective: 1200px; /* The camera lens */
          background: radial-gradient(circle at 50% 50%, #151a28 0%, var(--space-bg) 100%);
          overflow: hidden;
          pointer-events: none; /* Let scroll hit the tall body */
        }
        
        .physics-world.focus-mode {
          /* Freeze scroll interactions during focus */
          pointer-events: auto;
        }

        /* Ambient Starfield / Noise */
        .ambient-noise {
          position: absolute;
          inset: -50%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
          z-index: 0;
          /* Slowly move the background to simulate space */
          animation: slow-drift 100s linear infinite;
        }

        @keyframes slow-drift {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* --- 3D Camera Container --- */
        .camera-rig {
          position: absolute;
          top: 50%; left: 50%;
          transform-style: preserve-3d;
          /* 
             Move the camera forward (positive Z translation of the WORLD) 
             based on scroll depth. Plus global slight mouse parallax.
          */
          transition: transform 0.1s linear, filter 0.5s ease;
          width: 0; height: 0;
          z-index: 10;
        }
        
        /* Blur the background when a card is active */
        .physics-world.focus-mode .camera-rig {
          filter: blur(15px) brightness(0.4);
          transform: translate3d(0,0, -500px) !important; /* Push world back slightly */
          transition: transform 1s cubic-bezier(0.2, 0.8, 0.2, 1), filter 1s ease;
        }

        /* --- Physical Cards --- */
        .phys-card-wrapper {
          position: absolute;
          transform-style: preserve-3d;
          pointer-events: auto;
          cursor: pointer;
          /* Transition for hover state ONLY, base transform is applied inline for performance */
          transition: filter 0.3s ease;
        }

        .phys-card {
          width: 340px;
          height: 480px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          overflow: hidden;
          position: relative;
          
          /* Simulate Physical Thickness utilizing layered shadows */
          box-shadow: 
            /* Top edge highlight */
            inset 0 1px 0 rgba(255,255,255,0.4),
            /* Left/Right rim lights */
            inset 1px 0 0 rgba(255,255,255,0.1),
            inset -1px 0 0 rgba(255,255,255,0.1),
            /* Depth shadows to create "thickness" */
            -2px 2px 0 rgba(0,0,0,0.8),
            -4px 4px 0 rgba(0,0,0,0.6),
            -6px 6px 0 rgba(0,0,0,0.4),
            -8px 8px 0 rgba(0,0,0,0.2),
            /* Soft ambient shadow */
            -20px 30px 50px rgba(0,0,0,0.7);
            
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
        }

        /* Hover Reaction - pops forward slightly and tilts more */
        .phys-card-wrapper:hover .phys-card {
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.6),
            -5px 5px 0 rgba(0,0,0,0.8),
            -10px 10px 0 rgba(0,0,0,0.6),
            -15px 15px 0 rgba(0,0,0,0.4),
            -30px 40px 80px rgba(0,0,0,0.9);
          filter: brightness(1.2);
        }

        /* Visual Structure inside Card */
        .card-image {
          width: 100%;
          height: 60%;
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          position: relative;
        }
        
        .card-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8));
        }

        .card-content {
          padding: 2rem;
          height: 40%;
          background: linear-gradient(to bottom, rgba(20,20,20,0.8), rgba(10,10,10,0.95));
          position: relative;
          z-index: 2;
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          letter-spacing: 1px;
        }

        .card-subtitle {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* The glowing dot indicator */
        .status-dot {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          width: 10px; height: 10px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
          z-index: 3;
        }

        /* --- Expanded Focal Mode --- */
        .focal-card-container {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 100;
          perspective: 1000px;
          pointer-events: auto;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center; justify-content: center;
        }

        .focal-card {
          width: 800px;
          height: 60vh;
          border-radius: 20px;
          background: #000;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 30px 100px rgba(0,0,0,1);
          display: flex;
          overflow: hidden;
          
          /* Animation for flying in */
          opacity: 0;
          transform: translateZ(500px) rotateX(-20deg);
          animation: fly-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes fly-in {
          100% { opacity: 1; transform: translateZ(0) rotateX(0); }
        }

        .focal-hero {
          flex: 1;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        .focal-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent, #000);
        }

        .focal-details {
          width: 400px;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        
        .btn-close {
          position: absolute;
          top: 2rem; right: 2rem;
          background: rgba(255,255,255,0.1);
          border: none;
          color: #fff;
          width: 40px; height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          backdrop-filter: blur(5px);
          transition: background 0.2s;
        }
        .btn-close:hover { background: rgba(255,255,255,0.2); }

        /* UI Hint */
        .scroll-hint {
          position: fixed;
          bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          pointer-events: none;
          z-index: 50;
          transition: opacity 0.3s;
        }
        .physics-world.focus-mode .scroll-hint {
          opacity: 0;
        }

      `}</style>

      <div className="ambient-noise" />

      {/* 
        The Camera Rig: moves into the screen (TranslateZ) based on scroll depth.
        We also add a slight opposite-pan based on mouse to make it feel like 
        we're looking around the scene.
      */}
      <div 
        className="camera-rig"
        style={{
          transform: activeCard 
            ? 'undefined' // Handled by CSS class .focus-mode
            : `translate3d(${tiltY * -100}px, ${tiltX * 100}px, ${scrollDepth}px) rotateX(${tiltX * -2}deg) rotateY(${tiltY * 2}deg)`
        }}
      >
        {cards.map((card) => {
          // Spread cards out in the 3D space
          // Multiply xPos and yPos to spread them across a wide view port area
          const spreadX = card.xPos * 1200; 
          const spreadY = card.yPos * 800;
          
          return (
            <div 
              key={card.id}
              className="phys-card-wrapper"
              onClick={() => setActiveCard(card.id)}
              style={{
                // Absolute position relative to the camera center
                transform: `translate3d(calc(-50% + ${spreadX}px), calc(-50% + ${spreadY}px), ${card.zPos}px)`
              }}
            >
              {/* The actual physical entity that tilts */}
              <div 
                className="phys-card"
                style={{
                  // Slight counter-rotation toward mouse creates parallax 
                  // Add subtle floating effect based on node Z to offset them chronologically
                  transform: `rotateX(${tiltX * 15}deg) rotateY(${tiltY * 15}deg)`
                }}
              >
                <div 
                  className="status-dot" 
                  style={{ color: `hsl(${card.hue}, 100%, 50%)` }}
                />
                <div 
                  className="card-image" 
                  style={{ backgroundImage: `url(${card.image})` }} 
                />
                <div className="card-content">
                  <h3 className="card-title" style={{ color: `hsl(${card.hue}, 80%, 80%)`}}>{card.title}</h3>
                  <div className="card-subtitle">{card.subtitle}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="scroll-hint">
        Scroll to travel // Click to inspect
      </div>

      {/* Focal Mode Overlay */}
      {activeCard && (
        <div className="focal-card-container" onClick={(e) => {
          if(e.target === e.currentTarget) setActiveCard(null);
        }}>
          {(() => {
            const card = cards.find(c => c.id === activeCard);
            if(!card) return null;
            
            return (
              <div className="focal-card">
                <div className="focal-hero" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="focal-details">
                  <button className="btn-close" onClick={() => setActiveCard(null)}>×</button>
                  <p style={{ color: `hsl(${card.hue}, 80%, 60%)`, letterSpacing: '3px', fontSize: '0.8rem', margin: 0 }}>SYSTEM DIAGNOSTIC</p>
                  <h2 style={{ fontSize: '3rem', margin: '1rem 0', lineHeight: 1.1 }}>{card.title}</h2>
                  <h3 style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 2rem 0', fontWeight: 300 }}>{card.subtitle}</h3>
                  
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                    This asset has been instantiated with physical properties and collision data. It resides within the immersive simulation environment utilizing global illumination and real-time rigid body dynamics.
                  </p>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                    <button style={{ flex: 1, padding: '1rem', background: '#fff', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>INITIATE</button>
                    <button style={{ flex: 1, padding: '1rem', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer' }}>PROPERTIES</button>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      )}

    </div>
  );
};

export default DigitalTilePhysicsDemoGemini;
