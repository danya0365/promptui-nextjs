'use client';

import React, { useEffect, useState } from 'react';

// Cyber Warfare Dashboard - Gemini 3.1 Pro Implementation
// High-risk military-grade command center with radar sweeps, heavy industrial blocks, and red alerts.

interface OperationTarget {
  id: string;
  designation: string;
  status: 'MONITORING' | 'ENGAGING' | 'COMPROMISED';
  distance: string;
  signalStrength: number;
}

export const CyberWarfareDashboardDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTargetId, setActiveTargetId] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const targets: OperationTarget[] = [
    { id: 'TGT-A1', designation: 'SAT_UPLINK_OMEGA', status: 'MONITORING', distance: '12,400 KM', signalStrength: 88 },
    { id: 'TGT-B4', designation: 'ENEMY_MAINFRAME', status: 'ENGAGING', distance: '450 KM', signalStrength: 100 },
    { id: 'TGT-C9', designation: 'ROGUE_DRONE_SWARM', status: 'COMPROMISED', distance: '12 KM', signalStrength: 24 },
    { id: 'TGT-D2', designation: 'SEC_GATEWAY_X', status: 'MONITORING', distance: '8,000 KM', signalStrength: 92 }
  ];

  return (
    <div className={`warfare-viewport ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

        :root {
          /* Military Palette */
          --w-bg: #1a1c20;
          --w-panel: #22252a;
          --w-panel-border: #333840;
          --w-alert-red: #ff1133;
          --w-alert-red-dim: rgba(255, 17, 51, 0.2);
          --w-success: #ffb800; /* Radar yellow/orange */
          --w-text: #e2e8f0;
          --w-text-muted: #8492a6;
          
          --font-display: 'Oswald', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        body {
          margin: 0;
          background-color: var(--w-bg);
          color: var(--w-text);
          font-family: var(--font-display);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Background Env: Steel Grain & Radar
           --------------------------------- */
        .warfare-viewport {
          min-height: 100vh;
          width: 100vw;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Scanlines */
        .warfare-viewport::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.1) 0px,
            rgba(0,0,0,0.1) 1px,
            transparent 1px,
            transparent 3px
          );
          pointer-events: none;
          z-index: 99;
        }
        
        /* Steel Grain overlay */
        .warfare-viewport::after {
          content: '';
          position: fixed;
          inset: 0;
          opacity: 0.15;
          mix-blend-mode: overlay;
          background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
          pointer-events: none;
          z-index: 1;
        }

        /* Massive Background Radar Sweeps */
        .radar-container {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120vw; height: 120vw;
          max-width: 1500px; max-height: 1500px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.02);
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        
        /* Concentric Rings */
        .radar-container::before {
          content: '';
          position: absolute;
          inset: 10%;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.03);
        }
        /* Inner Ring */
        .radar-container::after {
          content: '';
          position: absolute;
          inset: 30%;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.03);
        }

        .radar-sweep {
          position: absolute;
          top: 0; left: 50%;
          width: 50%; height: 50%;
          background: conic-gradient(from 180deg at 0 100%, transparent 0deg, var(--w-alert-red-dim) 90deg, transparent 100deg);
          transform-origin: 0 100%;
          animation: sweep 8s linear infinite;
        }
        @keyframes sweep { to { transform: rotate(360deg); } }


        /* ---------------------------------
           Command Grid Layout
           --------------------------------- */
        .command-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, minmax(350px, 450px));
          gap: 2rem;
          width: 100%;
          max-width: 1000px;
        }

        /* ---------------------------------
           Heavy Industrial Cards
           --------------------------------- */
        .heavy-card {
          background: var(--w-panel);
          border: 2px solid var(--w-panel-border);
          padding: 2rem;
          position: relative;
          cursor: pointer;
          
          /* Industrial rigid borders */
          border-radius: 2px;
          box-shadow: 
            inset 0 2px 0 rgba(255,255,255,0.05),
            inset 0 -2px 0 rgba(0,0,0,0.5),
            0 10px 30px rgba(0,0,0,0.5);
            
          /* Mechanical Lock-in Entrance */
          opacity: 0;
          transform: translateY(-80px);
          transition: all 0.3s;
        }

        .mounted .heavy-card {
          opacity: 1;
          transform: translateY(0);
          /* Very stiff, heavy mechanical bounce */
          animation: mechanicalDrop 0.5s cubic-bezier(0.3, 1.4, 0.4, 0.9) forwards;
        }

        .mounted .heavy-card:nth-child(1) { animation-delay: 0.1s; }
        .mounted .heavy-card:nth-child(2) { animation-delay: 0.25s; }
        .mounted .heavy-card:nth-child(3) { animation-delay: 0.4s; }
        .mounted .heavy-card:nth-child(4) { animation-delay: 0.55s; }

        @keyframes mechanicalDrop {
          0% { transform: translateY(-80px); opacity: 0; box-shadow: 0 50px 0 rgba(0,0,0,0.2); }
          100% { transform: translateY(0); opacity: 1; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        }

        /* ------------------------------------
           Internal Grid Structure & Typography
           ------------------------------------ */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid var(--w-panel-border);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .tgt-id {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--w-text-muted);
          background: rgba(0,0,0,0.4);
          padding: 0.2rem 0.6rem;
          border: 1px solid var(--w-panel-border);
        }

        .tgt-name {
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 0.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .status-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border: 1px solid;
          letter-spacing: 1px;
        }
        
        .status-MONITORING { color: var(--w-text-muted); border-color: var(--w-panel-border); }
        .status-ENGAGING { color: #ffb800; border-color: #ffb800; background: rgba(255, 184, 0, 0.1); }
        .status-COMPROMISED { color: var(--w-alert-red); border-color: var(--w-alert-red); background: var(--w-alert-red-dim); box-shadow: 0 0 15px var(--w-alert-red-dim); }

        /* Data Bar */
        .data-row {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        
        .signal-bar-container {
          width: 100%;
          height: 6px;
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--w-panel-border);
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .signal-bar-fill {
          height: 100%;
          background: var(--w-text-muted);
          transition: width 1s ease;
        }
        
        /* Threat Status Colored Bars */
        .heavy-card:has(.status-ENGAGING) .signal-bar-fill { background: #ffb800; }
        .heavy-card:has(.status-COMPROMISED) .signal-bar-fill { background: var(--w-alert-red); }

        /* ---------------------------------
           Hover Interactions (Hidden Diagnostics)
           --------------------------------- */
        .diag-layer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--w-alert-red);
        }
        
        .heavy-card:hover {
          border-color: #555c66;
          box-shadow: 0 15px 40px rgba(0,0,0,0.8);
          transform: translateY(-4px);
        }

        .heavy-card:hover .diag-layer {
          max-height: 100px;
          opacity: 1;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--w-panel-border);
        }

        /* Active Target (Red Alert Explosion) */
        .command-grid.has-active .heavy-card:not(.active) {
          opacity: 0.3;
          pointer-events: none;
          filter: grayscale(100%);
        }

        .heavy-card.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw; max-width: 800px;
          z-index: 100;
          cursor: default;
          
          /* Full red alert state */
          border-color: var(--w-alert-red);
          background: #180a0d;
          box-shadow: 
            0 0 50px rgba(255, 17, 51, 0.4),
            inset 0 0 20px rgba(255, 17, 51, 0.2);
            
          animation: alertFlash 2s infinite;
        }

        @keyframes alertFlash {
          0%, 100% { box-shadow: 0 0 50px rgba(255,17,51,0.4), inset 0 0 20px rgba(255,17,51,0.2); }
          50% { box-shadow: 0 0 80px rgba(255,17,51,0.6), inset 0 0 40px rgba(255,17,51,0.4); }
        }

        .heavy-card.active:hover {
          transform: translate(-50%, -50%);
        }

        .btn-cancel {
          background: transparent;
          border: 2px solid var(--w-alert-red);
          color: var(--w-alert-red);
          font-family: var(--font-display);
          font-size: 1.2rem;
          text-transform: uppercase;
          padding: 0.5rem 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 2rem;
          width: 100%;
        }
        .btn-cancel:hover {
          background: var(--w-alert-red);
          color: #111;
        }

        /* ---------------------------------
           Terminal Block (Active Mode only)
           --------------------------------- */
        .terminal-block {
          background: #000;
          border: 1px solid var(--w-alert-red);
          padding: 1.5rem;
          margin-top: 2rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--w-alert-red);
          height: 150px;
          overflow-y: auto;
          display: none;
        }
        .heavy-card.active .terminal-block {
          display: block;
        }
        
        .code-line { margin-bottom: 0.4rem; }
        .typing {
          border-right: 8px solid var(--w-alert-red);
          animation: caret 0.5s step-end infinite;
        }
        @keyframes caret { 50% { border-color: transparent; } }

      `}</style>
      
      {/* Background Radar */}
      <div className="radar-container">
        <div className="radar-sweep" />
      </div>

      <div className={`command-grid ${activeTargetId ? 'has-active' : ''}`}>
        {targets.map((target) => {
          const isActive = activeTargetId === target.id;
          
          return (
            <div 
              key={target.id}
              className={`heavy-card ${isActive ? 'active' : ''}`}
              onClick={() => { if (!isActive) setActiveTargetId(target.id); }}
            >
              <div className="card-header">
                <div>
                  <div className="tgt-id">[{target.id}]</div>
                  <div className="tgt-name">{target.designation}</div>
                </div>
                <div className={`status-pill status-${target.status}`}>
                  {target.status}
                </div>
              </div>

              <div className="data-row">
                <span style={{ color: 'var(--w-text-muted)' }}>DIST TO TGT:</span>
                <span>{target.distance}</span>
              </div>
              <div className="data-row">
                <span style={{ color: 'var(--w-text-muted)' }}>SIG_STRENGTH:</span>
                <span>{target.signalStrength}%</span>
              </div>
              <div className="signal-bar-container">
                <div className="signal-bar-fill" style={{ width: `${target.signalStrength}%` }} />
              </div>

              <div className="diag-layer">
                <div className="data-row"><span>OVERRIDE_KEY</span><span>REQUIRED</span></div>
                <div className="data-row"><span>PORT_SCAN</span><span>PENDING</span></div>
                <div className="data-row"><span>SEC_VULN</span><span>DETECTED (2)</span></div>
              </div>

              {isActive && (
                <>
                  <div className="terminal-block">
                    <div className="code-line">&gt; INITIATING CYBER ASSAULT PROTOCOL...</div>
                    <div className="code-line">&gt; BYPASSING EXTERNAL FIREWALL... [OK]</div>
                    <div className="code-line">&gt; INJECTING PAYLOAD INTO {target.designation}...</div>
                    <div className="code-line typing">&gt; BRUTE-FORCING ROOT ACCESS</div>
                  </div>
                  <button className="btn-cancel" onClick={(e) => { e.stopPropagation(); setActiveTargetId(null); }}>
                    ABORT OPERATION
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyberWarfareDashboardDemoGemini;
