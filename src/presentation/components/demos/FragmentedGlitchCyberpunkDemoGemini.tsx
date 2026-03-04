'use client';

import React, { useEffect, useState } from 'react';

// Fragmented Cyberpunk Glitch Interface - Gemini 3.1 Pro Implementation
// Corrupted digital reality with RGB split, light leaks, and violent clip-path glitches.

interface CorruptNode {
  id: string;
  hash: string;
  integrity: number;
  status: 'STABLE' | 'ERR' | 'FATAL';
}

export const FragmentedGlitchCyberpunkDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  
  // Track scroll for perspective warp
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nodes: CorruptNode[] = [
    { id: 'NV-01', hash: '0x3F8A2B', integrity: 84, status: 'STABLE' },
    { id: 'NV-02', hash: '0xFF00FF', integrity: 12, status: 'FATAL' },
    { id: 'NV-03', hash: '0x11A0C4', integrity: 45, status: 'ERR' },
    { id: 'NV-04', hash: '0x88B3E1', integrity: 92, status: 'STABLE' }
  ];

  // Calculate warp based on scroll (max ~15deg)
  const warpAngle = Math.min(Math.max((scrollY / 500) * -15, -15), 15);

  return (
    <div className={`glitch-viewport ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        :root {
          --g-bg: #030305;
          --g-panel: #0a0a0f;
          --g-cyan: #00f0ff;
          --g-fuchsia: #ff0055;
          --g-purple: #b026ff;
          --g-text: #e0e0e0;
          
          --font-glitch: 'Share Tech Mono', monospace;
        }

        body {
          margin: 0;
          background-color: var(--g-bg);
          color: var(--g-text);
          font-family: var(--font-glitch);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Background: Light Leaks & Noise
           --------------------------------- */
        .glitch-viewport {
          min-height: 150vh; /* Extra height to demonstrate scroll warp */
          width: 100vw;
          padding: 6rem 4rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          perspective: 1000px;
        }

        /* Static Noise */
        .glitch-viewport::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 99;
          opacity: 0.15;
          mix-blend-mode: screen;
          background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
        }

        /* Ambient Light Leaks */
        .light-leaks {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: 
            radial-gradient(circle at 20% 80%, rgba(176, 38, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(0, 240, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 0, 85, 0.05) 0%, transparent 60%);
          filter: blur(40px);
        }

        /* ---------------------------------
           Grid & Perspective Warp
           --------------------------------- */
        .broken-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, minmax(300px, 400px));
          gap: 3rem 2rem;
          width: 100%;
          max-width: 900px;
          
          /* The Scroll Warp Effect */
          transform-style: preserve-3d;
          transition: transform 0.1s linear;
        }

        /* ---------------------------------
           Corrupted Cards
           --------------------------------- */
        .glitch-card {
          position: relative;
          background: var(--g-panel);
          padding: 2rem;
          cursor: pointer;
          
          /* Intentional Misalignment */
          transform: skew(-2deg);
          
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.8);
          
          /* Float in on mount */
          opacity: 0;
          animation: floatIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mounted .glitch-card:nth-child(1) { animation-delay: 0.1s; }
        .mounted .glitch-card:nth-child(2) { animation-delay: 0.2s; }
        .mounted .glitch-card:nth-child(3) { animation-delay: 0.3s; }
        .mounted .glitch-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes floatIn {
          from { opacity: 0; transform: skew(-2deg) translateY(40px); }
          to { opacity: 1; transform: skew(-2deg) translateY(0); }
        }

        /* RGB Split Edge Frames */
        .glitch-card::before, .glitch-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid;
          pointer-events: none;
          z-index: -1;
          opacity: 0.5;
        }
        .glitch-card::before {
          border-color: var(--g-cyan);
          transform: translate(-3px, -3px);
          mix-blend-mode: screen;
        }
        .glitch-card::after {
          border-color: var(--g-fuchsia);
          transform: translate(3px, 3px);
          mix-blend-mode: screen;
        }

        /* ---------------------------------
           Card Content & RGB Typography
           --------------------------------- */
        .node-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 1rem;
          position: relative;
        }

        .node-id {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          /* RGB Text Shadow Glitch */
          text-shadow: 
            2px 0 var(--g-fuchsia), 
            -2px 0 var(--g-cyan);
          letter-spacing: 2px;
          margin: 0;
        }

        .status-box {
          padding: 0.3rem 0.8rem;
          font-size: 0.8rem;
          font-weight: bold;
          letter-spacing: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .status-FATAL { color: var(--g-fuchsia); border-color: var(--g-fuchsia); animation: blinkErr 0.2s infinite; }
        .status-ERR { color: #ffb800; border-color: #ffb800; }
        .status-STABLE { color: var(--g-cyan); border-color: var(--g-cyan); }

        @keyframes blinkErr {
          0%, 100% { opacity: 1; transform: translate(0); }
          50% { opacity: 0.5; transform: translate(-1px, 1px); }
        }

        .data-block {
          background: rgba(0,0,0,0.4);
          padding: 1rem;
          margin-bottom: 1rem;
          border-left: 2px solid var(--g-purple);
          position: relative;
          overflow: hidden;
        }

        .data-label { color: rgba(255,255,255,0.4); font-size: 0.75rem; margin-bottom: 0.3rem; }
        .data-val { font-size: 1.25rem; color: #fff; }

        /* ---------------------------------
           Violent Hover Glitch Animation 
           --------------------------------- */
        .glitch-card:hover {
          animation: violentGlitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          z-index: 20;
        }

        @keyframes violentGlitch {
          0% { clip-path: inset(0 0 0 0); transform: skew(-2deg) translate(0); }
          20% { clip-path: inset(20% -20px 60% 0); transform: skew(-2deg) translate(-5px, 2px); }
          40% { clip-path: inset(60% -20px 10% 0); transform: skew(-2deg) translate(5px, -2px); }
          60% { clip-path: inset(10% -20px 80% 0); transform: skew(-2deg) translate(-2px, 5px); }
          80% { clip-path: inset(80% -20px 5% 0); transform: skew(-2deg) translate(2px, -5px); filter: hue-rotate(90deg); }
          100% { clip-path: inset(0 0 0 0); transform: skew(-2deg) translate(0); filter: hue-rotate(0deg); }
        }

        /* ---------------------------------
           Reassembly Mode (Active Expansion)
           --------------------------------- */
        /* Hiding inactive cards intrusively */
        .broken-grid.has-active .glitch-card:not(.active) {
          opacity: 0;
          pointer-events: none;
          transform: skew(-10deg) translateX(-100px) scale(0.8);
          transition: all 0.4s ease;
        }

        .glitch-card.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) skew(0deg) !important;
          width: 90vw; max-width: 1000px;
          height: 85vh;
          z-index: 100;
          cursor: default;
          
          background: #050508;
          border: 1px solid var(--g-fuchsia);
          box-shadow: 0 0 60px rgba(255, 0, 85, 0.15);
          
          /* Reassembly Animation */
          animation: assembleFullscreen 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes assembleFullscreen {
          0% { clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%); opacity: 0; }
          40% { clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%); opacity: 1; }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; }
        }

        .glitch-card.active::before, .glitch-card.active::after { display: none; }
        .glitch-card.active:hover { animation: none; }

        .btn-restore {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: rgba(255,0,85,0.1);
          border: 1px solid var(--g-fuchsia);
          color: var(--g-fuchsia);
          padding: 0.5rem 1rem;
          font-family: var(--font-glitch);
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-restore:hover {
          background: var(--g-fuchsia); color: #fff;
          box-shadow: 0 0 20px var(--g-fuchsia);
        }

        .corrupted-data-feed {
          margin-top: 2rem;
          padding: 1rem;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.05) 2px, rgba(0, 240, 255, 0.05) 4px);
          height: calc(100% - 120px);
          border: 1px solid rgba(0,240,255,0.2);
          overflow: hidden;
          position: relative;
        }

        .corrupt-text {
          font-size: 1.2rem;
          color: var(--g-cyan);
          line-height: 1.6;
          text-shadow: 2px 0 var(--g-fuchsia);
        }

      `}</style>

      <div className="light-leaks" />

      <div 
        className={`broken-grid ${activeNodeId ? 'has-active' : ''}`}
        style={!activeNodeId ? { transform: `rotateX(${warpAngle}deg) translateY(${scrollY * -0.2}px)` } : undefined}
      >
        {nodes.map(node => {
          const isActive = activeNodeId === node.id;
          
          return (
            <div 
              key={node.id} 
              className={`glitch-card ${isActive ? 'active' : ''}`}
              onClick={() => { if (!isActive) setActiveNodeId(node.id); }}
            >
              {isActive && (
                <button className="btn-restore" onClick={(e) => { e.stopPropagation(); setActiveNodeId(null); }}>
                  [RESTORE_SYSTEM]
                </button>
              )}

              <div className="node-header">
                <h2 className="node-id">{node.id}</h2>
                <div className={`status-box status-${node.status}`}>{node.status}</div>
              </div>

              <div className="data-block">
                <div className="data-label">MEMORY_ADDR_HASH</div>
                <div className="data-val">{node.hash}</div>
              </div>

              <div className="data-block">
                <div className="data-label">CORE_INTEGRITY</div>
                <div className="data-val" style={{ color: node.integrity < 50 ? 'var(--g-fuchsia)' : 'var(--g-cyan)' }}>
                  {node.integrity}%
                </div>
              </div>

              {isActive && (
                <div className="corrupted-data-feed">
                  <div className="corrupt-text">
                    [FATAL_ERROR] MEMORY LEAK DETECTED AT {node.hash}.<br/>
                    SYSTEM COMPROMISED. <br/>
                    <span style={{ color: 'var(--g-fuchsia)' }}>$#@&!*(^*&%^#$#@QWED!@</span><br/>
                    ATTEMPTING SAFE REBOOT... FAILED.<br/>
                    <br/>
                    {`
                      if (sys.integrity < 50) {
                        triggerFailSafe();
                        // ERR: _triggerFailSafe is not defined
                      }
                    `}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FragmentedGlitchCyberpunkDemoGemini;
