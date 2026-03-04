'use client';

import React, { useEffect, useState } from 'react';

// Advanced Cyberpunk Neon Interface - Gemini 3.1 Pro Implementation
// High-tech city underworld, pink/cyan glowing borders, glitch animations, layered metrics.

interface SectorData {
  id: string;
  name: string;
  load: number;
  threatLevel: 'LOW' | 'ELEVATED' | 'CRITICAL';
  activeNodes: number;
}

export const AdvancedCyberpunkNeonDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [globalFlicker, setGlobalFlicker] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerFlicker = () => {
    setGlobalFlicker(true);
    setTimeout(() => setGlobalFlicker(false), 300);
  };

  const sectors: SectorData[] = [
    { id: 'SEC-01', name: 'NEURO_GRID', load: 84, threatLevel: 'ELEVATED', activeNodes: 1204 },
    { id: 'SEC-02', name: 'NEXUS_CORE', load: 99, threatLevel: 'CRITICAL', activeNodes: 430 },
    { id: 'SEC-03', name: 'DATA_HAVEN', load: 12, threatLevel: 'LOW', activeNodes: 8900 },
    { id: 'SEC-04', name: 'SYNTH_FAB', load: 45, threatLevel: 'LOW', activeNodes: 112 }
  ];

  return (
    <div className={`cyber-viewport ${mounted ? 'mounted' : ''} ${globalFlicker ? 'global-flicker' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');

        :root {
          /* Neon Palette */
          --c-bg: #0e0f12;
          --c-panel: #14161a;
          --c-cyan: #00f0ff;
          --c-pink: #ff0055;
          --c-cyan-dim: rgba(0, 240, 255, 0.2);
          --c-pink-dim: rgba(255, 0, 85, 0.2);
          
          --font-cyber: 'Rajdhani', sans-serif;
        }

        body {
          margin: 0;
          overflow-x: hidden;
          background-color: var(--c-bg);
          font-family: var(--font-cyber);
          color: #fff;
        }

        /* ---------------------------------
           Background Env: Noise & Grid
           --------------------------------- */
        .cyber-viewport {
          min-height: 100vh;
          width: 100vw;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* SVG Noise Texture Overlay */
        .cyber-viewport::after {
          content: "";
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none;
          z-index: 1;
          opacity: 0.04;
          background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
        }

        /* Background Light Flicker Effect */
        .cyber-viewport.global-flicker {
          animation: bgFlicker 0.3s forwards;
        }
        @keyframes bgFlicker {
          0% { filter: brightness(1) contrast(1); }
          30% { filter: brightness(1.5) contrast(1.2) hue-rotate(15deg); }
          60% { filter: brightness(0.8) contrast(1.5); }
          100% { filter: brightness(1) contrast(1); }
        }

        /* Ambient Cyan/Pink Glow Behind Grid */
        .ambient-glow {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vh;
          background: radial-gradient(circle at 30% 30%, var(--c-cyan-dim) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, var(--c-pink-dim) 0%, transparent 50%);
          filter: blur(80px);
          z-index: 0;
          pointer-events: none;
        }

        /* ---------------------------------
           Grid & Card Layout
           --------------------------------- */
        .cyber-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, minmax(320px, 400px));
          gap: 2rem;
          width: 100%;
          max-width: 900px;
        }

        .neon-card {
          background: var(--c-panel);
          border-radius: 6px;
          position: relative;
          padding: 2rem;
          cursor: pointer;
          
          /* Neon gradient border effect */
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
          
          /* Entrance Glitch Animation */
          opacity: 0;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          transform: translateX(-40px);
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .mounted .neon-card {
          opacity: 1;
          transform: translateX(0);
          animation: slideGlitchIn 0.6s forwards;
        }

        .mounted .neon-card:nth-child(1) { animation-delay: 0.1s; }
        .mounted .neon-card:nth-child(2) { animation-delay: 0.2s; }
        .mounted .neon-card:nth-child(3) { animation-delay: 0.3s; }
        .mounted .neon-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes slideGlitchIn {
          0% { clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%); transform: translateX(-40px); }
          40% { clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%); transform: translateX(10px); }
          60% { clip-path: polygon(0 30%, 100% 30%, 100% 70%, 0 70%); transform: translateX(-5px); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); transform: translateX(0); }
        }

        /* Glowing Border on Hover */
        .neon-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 8px;
          background: linear-gradient(45deg, var(--c-cyan), transparent 40%, transparent 60%, var(--c-pink));
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .neon-card:hover::before {
          opacity: 1;
          animation: borderPulse 2s infinite linear;
        }

        @keyframes borderPulse {
          0% { filter: hue-rotate(0deg) blur(2px); }
          100% { filter: hue-rotate(360deg) blur(2px); }
        }

        .neon-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.5), 
                      0 0 20px var(--c-cyan-dim);
        }

        /* ---------------------------------
           Card Internal UI
           --------------------------------- */
        /* Holographic Title */
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          
          /* Hologram text clip */
          background: linear-gradient(90deg, #fff, var(--c-cyan), #fff);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: holoSlide 3s linear infinite;
        }

        @keyframes holoSlide {
          to { background-position: 200% center; }
        }

        .glitch-line {
          height: 2px;
          width: 100%;
          background: var(--c-pink);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        .glitch-line::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 20%; height: 100%;
          background: #fff;
          animation: lineGlitch 1.5s infinite steps(5);
        }

        @keyframes lineGlitch {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }

        /* Layered Metric Sub-Panels */
        .metric-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .metric-block {
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px;
          padding: 1rem;
          position: relative;
          overflow: hidden;
        }
        
        .metric-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 4px; height: 100%;
          background: var(--c-cyan);
        }
        .metric-block.threat-CRITICAL::before { background: var(--c-pink); }
        .metric-block.threat-CRITICAL .metric-value { color: var(--c-pink); text-shadow: 0 0 10px var(--c-pink-dim); }

        .metric-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--c-cyan);
          text-shadow: 0 0 10px var(--c-cyan-dim);
          line-height: 1;
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
        }

        /* Animated Number Spinner Simulation */
        .val-num {
          display: inline-block;
          animation: numFlicker 3s infinite steps(2);
        }
        @keyframes numFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* ---------------------------------
           Active State (Expansion)
           --------------------------------- */
        .cyber-grid.has-active .neon-card:not(.active) {
          opacity: 0.1;
          pointer-events: none;
          transform: scale(0.95);
          filter: blur(5px);
        }

        .neon-card.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw;
          max-width: 800px;
          height: auto;
          z-index: 100;
          cursor: default;
          
          background: rgba(20, 22, 26, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid var(--c-cyan);
          box-shadow: 0 0 50px var(--c-cyan-dim),
                      inset 0 0 20px var(--c-cyan-dim);
        }
        
        /* Overriding hover for active State */
        .neon-card.active:hover { transform: translate(-50%, -50%); } 
        .neon-card.active::before { display: none; }

        .btn-close {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: transparent;
          border: 1px solid var(--c-pink);
          color: var(--c-pink);
          width: 40px; height: 40px;
          border-radius: 4px;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .btn-close:hover {
          background: var(--c-pink);
          color: #fff;
          box-shadow: 0 0 15px var(--c-pink);
        }

        .active-details {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px dashed rgba(255,255,255,0.1);
          animation: fadeIn 0.5s ease 0.3s both;
        }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

      `}</style>
      
      <div className="ambient-glow" />

      <div className={`cyber-grid ${activeCardId ? 'has-active' : ''}`}>
        {sectors.map(sector => {
          const isActive = activeCardId === sector.id;

          return (
            <div 
              key={sector.id} 
              className={`neon-card ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (!isActive) {
                  setActiveCardId(sector.id);
                  triggerFlicker(); // Flash background on click
                }
              }}
            >
              {isActive && (
                <button className="btn-close" onClick={(e) => { e.stopPropagation(); setActiveCardId(null); triggerFlicker(); }}>×</button>
              )}

              <h2 className="card-title">[{sector.id}] {sector.name}</h2>
              <div className="glitch-line" />

              <div className="metric-grid">
                <div className="metric-block">
                  <div className="metric-label">SYS_LOAD</div>
                  <div className="metric-value"><span className="val-num">{sector.load}</span><span style={{ fontSize: '1rem' }}>%</span></div>
                </div>
                <div className={`metric-block threat-${sector.threatLevel}`}>
                  <div className="metric-label">THREAT_LVL</div>
                  <div className="metric-value" style={{ fontSize: '1.2rem', marginTop: '0.4rem' }}>{sector.threatLevel}</div>
                </div>
              </div>

              {isActive && (
                <div className="active-details">
                  <div className="metric-block" style={{ width: '100%', marginBottom: '1rem' }}>
                    <div className="metric-label">ACTIVE_NODES</div>
                    <div className="metric-value"><span className="val-num">{sector.activeNodes.toLocaleString()}</span></div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                    &gt; DIAGNOSTIC RUNNING... NO ANOMALIES DETECTED IN MAIN CLUSTER.<br/>
                    &gt; REROUTING POWER TO CYAN_NEON_GRID... SUCCESS.<br/>
                    &gt; AWAITING OVERRIDE PROTOCOL.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvancedCyberpunkNeonDemoGemini;
