'use client';

import React, { useEffect, useRef, useState } from 'react';

// Spatial Computing Interface - Gemini 3.1 Pro Implementation
// Inspired by Apple Vision Pro: 3D floating glass, extreme blur, calm aesthetics.

interface SpatialApp {
  id: string;
  name: string;
  icon: string;
  color: string;
  content: React.ReactNode;
}

export const SpatialComputingDemoGemini: React.FC = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Only track parallax if no app is fully expanded
      if (!activeApp) {
        setMousePos({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activeApp]);

  // Subtle Parallax calculation (max 3 degrees for elegance)
  const rotX = (mousePos.y - 0.5) * -6; 
  const rotY = (mousePos.x - 0.5) * 6;

  const apps: SpatialApp[] = [
    { 
      id: 'APP-1', name: 'Environment', icon: '⛰️', color: 'rgba(50, 150, 200, 0.2)',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ width: '100%', height: '200px', borderRadius: '16px', background: 'url(https://images.unsplash.com/photo-1506744626753-1fa44df31c7f?auto=format&fit=crop&q=80&w=2000) center/cover' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 300, margin: '1rem 0 0' }}>Yosemite</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.6 }}>Immerse yourself in a high-fidelity volumetric capture of Yosemite National Park. Audio is spatially mapped to the environment.</p>
        </div>
      )
    },
    { 
      id: 'APP-2', name: 'Messages', icon: '💬', color: 'rgba(50, 200, 100, 0.2)',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, margin: '0 0 1rem' }}>Messages</h2>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ccc' }} />
            <div>
              <div style={{ fontWeight: 500 }}>Elena Rostova</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Are we still meeting in the virtual space?</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#888' }} />
            <div>
              <div style={{ fontWeight: 500 }}>Architectural Team</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Shared a new 3D model.</div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'APP-3', name: 'Focus', icon: '🧘', color: 'rgba(200, 100, 200, 0.2)',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.2)', borderTopColor: 'rgba(255,255,255,0.8)', animation: 'spin 4s linear infinite' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 300, margin: '2rem 0 0' }}>Breathe</h2>
          <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </div>
      )
    },
    { 
      id: 'APP-4', name: 'Browser', icon: '🌐', color: 'rgba(220, 150, 50, 0.2)',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '0.5rem 1rem', color: 'rgba(255,255,255,0.5)' }}>
            Search or enter website name
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Bookmarks</div>
            <div style={{ height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>History</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`spatial-environment ${activeApp ? 'immersive-mode' : ''}`} ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap');

        :root {
          --spatial-bg-1: #eef2f5;
          --spatial-bg-2: #d6e0e9;
          --spatial-glass: rgba(255, 255, 255, 0.45);
          --spatial-glass-dark: rgba(30, 30, 30, 0.45);
          --spatial-glass-light: rgba(255, 255, 255, 0.6);
          --spatial-border: rgba(255, 255, 255, 0.8);
          --spatial-shadow: 0 20px 40px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05);
          --text-light: rgba(255, 255, 255, 0.9);
          --text-dark: rgba(0, 0, 0, 0.8);
        }

        body {
          margin: 0;
          font-family: 'Inter', system-ui, sans-serif;
          overflow: hidden; /* Prevent scrolling in a VR/AR context */
        }

        .spatial-environment {
          width: 100vw;
          height: 100vh;
          position: relative;
          background: linear-gradient(135deg, var(--spatial-bg-1) 0%, var(--spatial-bg-2) 100%);
          perspective: 1200px; /* The spatial camera lens */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 1s ease;
        }

        /* Abstract soft background shapes */
        .spatial-environment::before,
        .spatial-environment::after {
          content: '';
          position: absolute;
          width: 80vw; height: 80vw;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          transition: opacity 1s, transform 3s ease;
          opacity: 0.6;
        }
        
        .spatial-environment::before {
          top: -20%; left: -10%;
          background: radial-gradient(circle, rgba(200,225,255,0.8), transparent 70%);
        }
        
        .spatial-environment::after {
          bottom: -20%; right: -10%;
          background: radial-gradient(circle, rgba(240,230,250,0.8), transparent 70%);
        }

        /* Deepen background when immersive */
        .spatial-environment.immersive-mode::before,
        .spatial-environment.immersive-mode::after {
          opacity: 0.1;
          transform: scale(0.8);
        }
        .spatial-environment.immersive-mode {
          background: #111;
        }

        /* The 3D wrapper that tilts with the mouse */
        .spatial-view-layer {
          position: relative;
          z-index: 10;
          transform-style: preserve-3d;
          width: 100%; height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s linear, filter 0.5s;
        }

        .immersive-mode .spatial-view-layer {
          transform: rotateX(0deg) rotateY(0deg) !important;
        }

        /* Main Grid of Apps */
        .apps-grid {
          display: flex;
          gap: 2rem;
          transform-style: preserve-3d;
          transition: opacity 0.5s;
        }
        
        /* Blur background glass when in immersive mode */
        .immersive-mode .apps-grid {
          filter: blur(20px);
          opacity: 0.2;
          transform: translateZ(-200px);
          pointer-events: none;
        }

        /* --- Glass Panel (The App Card) --- */
        .glass-panel {
          width: 220px;
          height: 300px;
          border-radius: 24px;
          background: var(--spatial-glass);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          
          /* The premium Apple-style edge highlight */
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.9), 
            inset 0 0 0 1px rgba(255,255,255,0.3),
            var(--spatial-shadow);
            
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          color: var(--text-dark);
          cursor: pointer;
          position: relative;
          transform-style: preserve-3d;
          
          /* Smooth interactions */
          transition: 
            transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), 
            box-shadow 0.4s, 
            background 0.4s;
        }

        /* Hover Elevation */
        .glass-panel:hover {
          transform: translateZ(30px);
          background: var(--spatial-glass-light);
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,1), 
            inset 0 0 0 1px rgba(255,255,255,0.5),
            0 30px 60px rgba(0,0,0,0.15), 
            0 4px 10px rgba(0,0,0,0.05);
        }

        /* App Icon */
        .app-icon-wrap {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,1),
            0 10px 20px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          transform: translateZ(10px); /* Popped out slightly from the glass */
          transition: transform 0.4s;
        }
        
        .glass-panel:hover .app-icon-wrap {
          transform: translateZ(20px) scale(1.05);
        }

        .app-name {
          font-weight: 400;
          font-size: 1.1rem;
          letter-spacing: -0.5px;
          transform: translateZ(5px);
        }

        /* --- Immersive Expanded App View --- */
        .immersive-container {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          pointer-events: none; /* Let clicks pass through if empty */
        }
        
        .immersive-container.active {
          pointer-events: auto;
        }

        .immersive-window {
          width: 80vw;
          max-width: 1000px;
          height: 70vh;
          border-radius: 32px;
          background: var(--spatial-glass-dark);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          color: var(--text-light);
          
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.3),
            inset 0 0 0 1px rgba(255,255,255,0.1),
            0 50px 100px rgba(0,0,0,0.5);
            
          padding: 3rem;
          position: relative;
          
          /* Immersive entrance animation */
          opacity: 0;
          transform: translateZ(-300px) scale(0.8);
          transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .immersive-container.active .immersive-window {
          opacity: 1;
          transform: translateZ(100px) scale(1);
        }

        .btn-close-app {
          position: absolute;
          top: -20px; left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.8);
          color: #000;
          border: none;
          padding: 8px 24px;
          border-radius: 20px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          opacity: 0;
          transition: transform 0.3s, opacity 0.3s;
        }
        
        .immersive-window:hover .btn-close-app {
          opacity: 1;
          transform: translate(-50%, -10px);
        }
        .btn-close-app:hover {
          background: #fff;
          transform: translate(-50%, -12px) scale(1.05);
        }

      `}</style>

      {/* 3D Wrapper Layer */}
      <div 
        className="spatial-view-layer"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`
        }}
      >
        <div className="apps-grid">
          {apps.map((app) => (
            <div 
              key={app.id} 
              className="glass-panel"
              onClick={() => setActiveApp(app.id)}
            >
              <div className="app-icon-wrap" style={{ background: app.color }}>
                {app.icon}
              </div>
              <div className="app-name">{app.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Window Overlay */}
      <div className={`immersive-container ${activeApp ? 'active' : ''}`} onClick={(e) => {
        if(e.target === e.currentTarget) setActiveApp(null);
      }}>
        {activeApp && (
          <div className="immersive-window" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-app" onClick={() => setActiveApp(null)}>Close Window</button>
            
            {(() => {
              const app = apps.find(a => a.id === activeApp);
              return app ? app.content : null;
            })()}
            
          </div>
        )}
      </div>

    </div>
  );
};

export default SpatialComputingDemoGemini;
