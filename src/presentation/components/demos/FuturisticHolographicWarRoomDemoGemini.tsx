'use client';

import React, { useEffect, useState } from 'react';

// Futuristic Holographic War-Room Interface - Gemini 3.1 Pro Implementation
// Tactical intelligence hub with glowing panels, hard edges, and a projection grid.

interface TacticalUnit {
  id: string;
  designation: string;
  status: 'DEPLOYED' | 'STANDBY' | 'ENGAGED';
  efficiency: number;
  integrity: number;
  coordinates: string;
}

export const FuturisticHolographicWarRoomDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeUnit, setActiveUnit] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const units: TacticalUnit[] = [
    { id: 'SQ-77', designation: 'STRIKE_FORCE_A', status: 'ENGAGED', efficiency: 92, integrity: 84, coordinates: '34.2N 18.5E' },
    { id: 'DEF-01', designation: 'PERIMETER_GRID', status: 'DEPLOYED', efficiency: 100, integrity: 98, coordinates: '00.0N 00.0E' },
    { id: 'UAV-X9', designation: 'AERIAL_RECON', status: 'STANDBY', efficiency: 100, integrity: 100, coordinates: '45.1N 12.0W' },
  ];

  return (
    <div className={`war-room-viewport ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@500;700&display=swap');

        :root {
          --w-bg-deep: #0a101d; /* Very dark slate/navy */
          --w-cyan: #00f5d4;
          --w-cyan-dim: rgba(0, 245, 212, 0.2);
          --w-cyan-glow: rgba(0, 245, 212, 0.5);
          --w-white: #ffffff;
          --w-text: #b0c4de;
          --w-alert: #ff3366;
          
          --font-mono: 'Share Tech Mono', monospace;
          --font-head: 'Rajdhani', sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--w-bg-deep);
          color: var(--w-text);
          font-family: var(--font-mono);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Environment: Projection Grid & Particles
           --------------------------------- */
        .war-room-viewport {
          min-height: 100vh;
          width: 100vw;
          padding: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          perspective: 1200px;
          overflow: hidden;
          background: radial-gradient(circle at 50% 0%, #112236 0%, var(--w-bg-deep) 70%);
        }

        /* The 3D Floor Grid */
        .holographic-floor {
          position: absolute;
          bottom: -40%; left: -50%;
          width: 200%; height: 150%;
          background-image: 
            linear-gradient(var(--w-cyan-dim) 1px, transparent 1px),
            linear-gradient(90deg, var(--w-cyan-dim) 1px, transparent 1px);
          background-size: 50px 50px;
          transform-origin: top center;
          transform: rotateX(75deg);
          animation: gridMove 20s linear infinite;
          opacity: 0.4;
          z-index: 0;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 500px; }
        }

        /* Pulsing Floor on Interaction */
        .war-room-viewport.has-active .holographic-floor {
          animation: gridPulse 2s ease infinite, gridMove 20s linear infinite;
        }
        @keyframes gridPulse {
          0%, 100% { box-shadow: inset 0 0 50px var(--w-bg-deep); opacity: 0.4; }
          50% { box-shadow: inset 0 0 150px var(--w-cyan-glow); opacity: 0.8; }
        }

        /* Ambient light from center */
        .core-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(0, 245, 212, 0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        /* ------------------------------------
           Tactical Hologram Cards
           ------------------------------------ */
        .tactical-grid {
          position: relative;
          z-index: 10;
          display: flex;
          gap: 3rem;
          width: 100%;
          max-width: 1100px;
          transform-style: preserve-3d;
        }

        .tactical-card {
          position: relative;
          flex: 1;
          background: rgba(10, 25, 47, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 2px; /* Space for the animated border */
          
          /* Hard Edges */
          border-radius: 0; 
          cursor: pointer;
          
          /* Initial Magnetic Snap Animation */
          opacity: 0;
          transform: translateY(-100px) scale(1.1);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
        }

        /* Staggered load */
        .mounted .tactical-card:nth-child(1) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.1s; }
        .mounted .tactical-card:nth-child(2) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.2s; }
        .mounted .tactical-card:nth-child(3) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.3s; }

        /* Animated Scanning Border Effect via wrapper */
        .tactical-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, var(--w-cyan), transparent);
          background-size: 200% 100%;
          animation: scanBorder 3s linear infinite;
          z-index: -1;
          opacity: 0.5;
        }
        @keyframes scanBorder { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        /* Inner container to block border gradient where not needed */
        .card-inner {
          background: rgba(5, 12, 25, 0.85);
          height: 100%;
          padding: 2rem;
          position: relative;
          border: 1px solid rgba(0, 245, 212, 0.1);
          transition: all 0.3s;
        }

        /* Hover reveals hidden layers and glow */
        .tactical-card:hover .card-inner {
          background: rgba(5, 12, 25, 0.95);
          border-color: var(--w-cyan);
          box-shadow: 
            0 0 30px rgba(0, 245, 212, 0.2),
            inset 0 0 20px rgba(0, 245, 212, 0.1);
        }
        .tactical-card:hover { transform: translateZ(30px) translateY(-5px); }

        /* ---------------------------------
           Card Typography & Data Visualization
           --------------------------------- */
        .card-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--w-cyan-dim);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .unit-id {
          color: var(--w-cyan);
          font-weight: bold;
          letter-spacing: 2px;
          font-size: 0.9rem;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .unit-id::before {
          content: ''; display: inline-block; width: 8px; height: 8px; background: var(--w-cyan);
        }

        .unit-designation {
          font-family: var(--font-head);
          font-size: 1.8rem;
          color: var(--w-white);
          margin: 0.5rem 0;
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
          letter-spacing: 1px;
        }

        .status-box {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border: 1px solid currentColor;
          background: rgba(0,0,0,0.5);
          letter-spacing: 1px;
        }
        .status-ENGAGED { color: var(--w-alert); box-shadow: 0 0 10px rgba(255,51,102,0.3); animation: blinkAlert 1s infinite alternate; }
        .status-DEPLOYED { color: var(--w-cyan); }
        .status-STANDBY { color: #888; border-color: #555; }

        @keyframes blinkAlert { 100% { opacity: 0.5; } }

        /* Data Readouts */
        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .data-item {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 0.8rem;
        }

        .d-label {
          font-size: 0.65rem; color: rgba(255,255,255,0.4); margin-bottom: 0.4rem; letter-spacing: 1px;
        }
        .d-value {
          font-family: var(--font-head); font-size: 1.4rem; color: var(--w-white);
        }

        /* Animated Data Waveform (Simulated) */
        .waveform {
          margin-top: 1.5rem;
          height: 40px;
          display: flex;
          align-items: flex-end;
          gap: 2px;
          opacity: 0.6;
        }
        .wave-bar {
          flex: 1;
          background: var(--w-cyan-dim);
          animation: pulseWave 1s ease-in-out infinite alternate;
        }
        /* Randomize animation delays for waveform effect */
        .wave-bar:nth-child(odd) { animation-duration: 0.8s; }
        .wave-bar:nth-child(3n) { animation-duration: 1.2s; }

        @keyframes pulseWave {
          0% { height: 20%; background: var(--w-cyan-dim); }
          100% { height: 100%; background: var(--w-cyan); box-shadow: 0 0 5px var(--w-cyan); }
        }

        /* Hidden Analytic Layer (Revealed on Hover/Active) */
        .hidden-layer {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: var(--w-cyan);
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s;
          border-left: 2px solid var(--w-cyan);
          padding-left: 0.5rem;
        }
        .tactical-card:hover .hidden-layer, .tactical-card.active .hidden-layer {
          opacity: 1; max-height: 100px; padding-top: 0.5rem; padding-bottom: 0.5rem;
        }

        /* ---------------------------------
           Active Expansion (Full Dashboard)
           --------------------------------- */
        .tactical-grid.has-active .tactical-card:not(.active) {
          opacity: 0;
          pointer-events: none;
          transform: translateY(200px) translateZ(-500px);
        }

        .tactical-card.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) !important;
          width: 90vw; height: 85vh; max-width: 1400px;
          z-index: 100;
          cursor: default;
        }

        .tactical-card.active .card-inner {
          background: rgba(2, 6, 12, 0.95);
          display: flex;
          flex-direction: column;
        }

        .expanded-grid {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
          flex: 1;
          opacity: 0;
          animation: fadeSlightlyUp 0.5s ease 0.4s forwards;
        }

        @keyframes fadeSlightlyUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .dashboard-panel {
          border: 1px solid rgba(0, 245, 212, 0.2);
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 245, 212, 0.02),
            rgba(0, 245, 212, 0.02) 1px,
            transparent 1px,
            transparent 20px
          );
          position: relative;
          padding: 1.5rem;
        }

        .dashboard-panel::before {
          content: 'TACTICAL_OVERVIEW';
          position: absolute; top: -10px; left: 20px;
          background: #02060c; padding: 0 10px; color: var(--w-cyan);
          font-size: 0.8rem; letter-spacing: 2px;
        }

        /* Fake Map/Radar inside the expanded panel */
        .radar-display {
          width: 100%; height: 100%;
          border: 1px solid var(--w-cyan-dim);
          border-radius: 50%;
          position: relative;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          max-height: 400px; max-width: 400px; margin: 2rem auto;
        }
        .radar-display::before, .radar-display::after {
          content: ''; position: absolute; border: 1px solid rgba(0,245,212,0.2); border-radius: 50%;
        }
        .radar-display::before { inset: 20%; }
        .radar-display::after { inset: 40%; }
        
        .radar-sweep-line {
          position: absolute; top: 50%; left: 50%; width: 50%; height: 2px;
          background: linear-gradient(90deg, transparent, var(--w-cyan));
          transform-origin: left center;
          animation: radarSweepAnim 4s linear infinite;
        }
        @keyframes radarSweepAnim { 100% { transform: rotate(360deg); } }

        .btn-close {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: transparent;
          border: 1px solid var(--w-cyan);
          color: var(--w-cyan);
          font-family: var(--font-mono);
          padding: 0.5rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-close:hover { background: var(--w-cyan); color: #000; box-shadow: 0 0 15px var(--w-cyan); }

      `}</style>
      
      <div className="holographic-floor" />
      <div className="core-glow" />

      <div className={`tactical-grid ${activeUnit ? 'has-active' : ''}`}>
        {units.map((unit) => {
          const isActive = activeUnit === unit.id;
          
          // Generate wave bars
          const waveBars = Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s` }} />
          ));

          return (
            <div 
              key={unit.id} 
              className={`tactical-card ${isActive ? 'active' : ''}`}
              onClick={() => { if (!isActive) setActiveUnit(unit.id); }}
            >
              <div className="card-inner">
                {isActive && (
                  <button className="btn-close" onClick={(e) => { e.stopPropagation(); setActiveUnit(null); }}>
                    DISENGAGE_VIEW
                  </button>
                )}

                <div className="card-header">
                  <div>
                    <div className="unit-id">{unit.id}</div>
                    <div className="unit-designation">{unit.designation}</div>
                  </div>
                  <div>
                    <span className={`status-box status-${unit.status}`}>{unit.status}</span>
                  </div>
                </div>

                <div className="data-grid">
                  <div className="data-item">
                    <div className="d-label">EFFICIENCY</div>
                    <div className="d-value">{unit.efficiency}%</div>
                  </div>
                  <div className="data-item">
                    <div className="d-label">INTEGRITY</div>
                    <div className="d-value">{unit.integrity}%</div>
                  </div>
                  <div className="data-item" style={{ gridColumn: 'span 2' }}>
                    <div className="d-label">COORDS</div>
                    <div className="d-value" style={{ fontSize: '1rem' }}>{unit.coordinates}</div>
                  </div>
                </div>

                {!isActive && (
                  <div className="waveform">
                    {waveBars}
                  </div>
                )}

                <div className="hidden-layer">
                  &gt; LINK_SECURE<br/>
                  &gt; LATENCY: 12ms<br/>
                  &gt; AWAITING_COMMAND...
                </div>

                {isActive && (
                  <div className="expanded-grid">
                    <div className="dashboard-panel">
                      <div className="radar-display">
                        <div className="radar-sweep-line" />
                        {/* Fake target dots */}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', width: '4px', height: '4px', background: 'var(--w-alert)', borderRadius: '50%', boxShadow: '0 0 10px var(--w-alert)' }} />
                        <div style={{ position: 'absolute', top: '60%', right: '20%', width: '4px', height: '4px', background: 'var(--w-cyan)', borderRadius: '50%' }} />
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className="dashboard-panel" style={{ flex: 1 }}>
                         <div style={{ color: 'var(--w-cyan)', marginBottom: '1rem' }}>SYS_LOGS</div>
                         <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                           [04:00] Connection established.<br/>
                           [04:01] Bio-metrics stable.<br/>
                           [04:05] <span style={{color: 'var(--w-alert)'}}>Perimeter breach detected in Sec-B.</span><br/>
                           [04:06] Rerouting defensive measures.<br/>
                           [04:07] Standby for further instructions.
                         </div>
                      </div>
                      <div className="dashboard-panel" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(0, 245, 212, 0.1)', border: '1px solid var(--w-cyan)', cursor: 'pointer' }}>
                        <div style={{ color: 'var(--w-cyan)', fontWeight: 'bold', fontSize: '1.2rem' }}>INITIATE_PROTOCOL</div>
                      </div>
                    </div>
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

export default FuturisticHolographicWarRoomDemoGemini;
