'use client';

import React, { useEffect, useState } from 'react';

// God-Level Cyberpunk Hacker Interface - Gemini 3.1 Pro Implementation
// Massive underground AI network with real-time particle data flow, neon streams, and scanning borders.

interface NetworkNode {
  id: string;
  cluster: string;
  load: number;
  connections: number;
  status: 'ACTIVE' | 'OVERRIDE' | 'SYNCING';
  location: string;
}

export const GodLevelCyberpunkHackerDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  
  // Matrix data streams background
  const [dataStreams, setDataStreams] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random positions for data streams
    setDataStreams(Array.from({ length: 30 }, () => Math.random() * 100));
  }, []);

  const nodes: NetworkNode[] = [
    { id: 'SYS.CORE.01', cluster: 'ALPHA_PRIME', load: 94, connections: 12400, status: 'ACTIVE', location: 'SECTOR_7G' },
    { id: 'NET.HUB.09', cluster: 'OMEGA_LINK', load: 45, connections: 890, status: 'SYNCING', location: 'UNDERCITY_2' },
    { id: 'AI.MIND.04', cluster: 'NEURO_WEB', load: 100, connections: 99999, status: 'OVERRIDE', location: 'ROOT_ACCESS' },
    { id: 'DATA.VAULT.X', cluster: 'DEEP_COLD', load: 12, connections: 34, status: 'ACTIVE', location: 'ICE_SHELF_B' }
  ];

  return (
    <div className={`god-viewport ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap');

        :root {
          --ai-bg: #000000;
          --ai-panel: #05080a;
          --ai-neon-green: #00ff66;
          --ai-cyan: #00ffff;
          --ai-violet: #8a2be2;
          --ai-text: #e0e0e0;
          
          --font-head: 'Orbitron', sans-serif;
          --font-code: 'Fira Code', monospace;
        }

        body {
          margin: 0;
          background-color: var(--ai-bg);
          color: var(--ai-text);
          font-family: var(--font-head);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Infinite Void & Data Streams
           --------------------------------- */
        .god-viewport {
          min-height: 100vh;
          width: 100vw;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at center, #05101a 0%, #000000 70%);
          perspective: 1500px;
        }

        /* Ambient Core Pulse */
        .god-viewport::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw; height: 80vh;
          background: radial-gradient(circle, rgba(0,255,102,0.05) 0%, transparent 60%);
          filter: blur(50px);
          z-index: 0;
          pointer-events: none;
          animation: corePulse 4s infinite alternate;
        }

        @keyframes corePulse {
          0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Matrix Data Streams (Vertical Particles) */
        .stream-container {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .data-stream {
          position: absolute;
          top: -100px;
          width: 2px;
          height: 100px;
          background: linear-gradient(to bottom, transparent, var(--ai-neon-green) 50%, #fff 100%);
          filter: drop-shadow(0 0 8px var(--ai-neon-green));
          opacity: 0.6;
          animation: streamFall linear infinite;
        }

        @keyframes streamFall {
          0% { transform: translateY(0); }
          100% { transform: translateY(120vh); }
        }

        /* Background pulses on critical override */
        .god-viewport.critical-override {
          animation: godPulse 0.5s infinite;
        }
        @keyframes godPulse {
          0%, 100% { box-shadow: inset 0 0 0 transparent; }
          50% { box-shadow: inset 0 0 100px rgba(0, 255, 102, 0.2); }
        }

        /* ------------------------------------
           God-Level Grid & Tactical Formation
           ------------------------------------ */
        .tactical-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, minmax(400px, 1fr));
          grid-auto-rows: minmax(300px, auto);
          gap: 3rem;
          width: 100%;
          max-width: 1200px;
          transform-style: preserve-3d;
          transform: rotateX(10deg) rotateY(0deg);
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* When a card is active, flatten the grid */
        .tactical-grid.has-active {
          transform: rotateX(0deg) rotateY(0deg);
        }

        /* ---------------------------------
           Hard-Edge Holographic Panels
           --------------------------------- */
        .god-card {
          position: relative;
          background: rgba(5, 8, 10, 0.85);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          cursor: pointer;
          border: 1px solid rgba(0, 255, 102, 0.2);
          box-shadow: 
            0 20px 50px rgba(0,0,0,0.8),
            inset 0 0 20px rgba(0,255,102,0.05);
            
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0); /* Force hardware accel */
          
          /* Entrance effect */
          opacity: 0;
          transform: translateZ(-200px) translateY(50px);
        }

        .mounted .god-card {
          opacity: 1;
          transform: translateZ(0) translateY(0);
        }
        .mounted .god-card:nth-child(1) { transition-delay: 0.1s; }
        .mounted .god-card:nth-child(2) { transition-delay: 0.2s; }
        .mounted .god-card:nth-child(3) { transition-delay: 0.3s; }
        .mounted .god-card:nth-child(4) { transition-delay: 0.4s; }

        /* Animated Scanning Border */
        .god-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: conic-gradient(from 0deg, transparent 70%, var(--ai-neon-green) 100%);
          border-radius: 2px;
          z-index: -1;
          animation: borderScan 4s linear infinite;
          opacity: 0.5;
        }

        @keyframes borderScan {
          100% { transform: rotate(360deg); }
        }

        /* Light Ripple Connection (Hover) */
        .tactical-grid:hover .god-card {
           border-color: rgba(0,255,102,0.1);
        }
        .tactical-grid .god-card:hover {
          border-color: var(--ai-neon-green);
          box-shadow: 
            0 20px 50px rgba(0,0,0,0.8),
            0 0 40px rgba(0,255,102,0.3),
            inset 0 0 30px rgba(0,255,102,0.1);
          transform: translateZ(30px) scale(1.02);
          z-index: 20;
        }

        /* ---------------------------------
           Card Internal Holographic UI
           --------------------------------- */
        .holo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0,255,102,0.3);
          position: relative;
        }
        
        /* Decorative tech line */
        .holo-header::after {
          content: '';
          position: absolute;
          bottom: -2px; right: 0;
          width: 30%; height: 3px;
          background: var(--ai-neon-green);
          box-shadow: 0 0 10px var(--ai-neon-green);
        }

        .sys-id {
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: 3px;
          color: #fff;
          text-shadow: 0 0 10px var(--ai-neon-green);
        }
        
        /* Status Badge */
        .status-badge {
          font-family: var(--font-code);
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          background: rgba(0,0,0,0.5);
          border: 1px solid;
          letter-spacing: 2px;
        }
        .status-ACTIVE { color: var(--ai-cyan); border-color: var(--ai-cyan); }
        .status-SYNCING { color: var(--ai-violet); border-color: var(--ai-violet); animation: pulseViolet 2s infinite; }
        .status-OVERRIDE { color: var(--ai-neon-green); border-color: var(--ai-neon-green); background: rgba(0,255,102,0.1); box-shadow: 0 0 15px rgba(0,255,102,0.4); }
        
        @keyframes pulseViolet { 50% { box-shadow: 0 0 15px var(--ai-violet); } }

        /* Internal Metrics Stack */
        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          font-family: var(--font-code);
        }

        .metric-cell {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 1rem;
          position: relative;
        }

        .m-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .m-value {
          font-size: 1.5rem;
          color: var(--ai-text);
          font-family: var(--font-head);
          font-weight: 700;
        }

        /* ---------------------------------
           Immersive Command Panel (Active)
           --------------------------------- */
        .tactical-grid.has-active .god-card:not(.active) {
          opacity: 0.1;
          filter: blur(10px) grayscale(100%);
          transform: translateZ(-200px);
          pointer-events: none;
        }

        .god-card.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) !important;
          width: 95vw; max-width: 1400px;
          height: 85vh;
          z-index: 100;
          cursor: default;
          
          /* Command Center styling */
          background: rgba(5, 8, 10, 0.95);
          border: 1px solid var(--ai-neon-green);
          box-shadow: 
            0 0 100px rgba(0, 255, 102, 0.2),
            inset 0 0 50px rgba(0, 255, 102, 0.1);
        }
        
        .god-card.active::before { display: none; } /* Hide border scanner in fullscreen */

        .expanded-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2rem;
          height: calc(100% - 100px);
          margin-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.4s forwards;
        }

        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } from { opacity: 0; transform: translateY(20px); } }

        /* Left Side: System Tree */
        .sys-tree {
          font-family: var(--font-code);
          font-size: 0.85rem;
          color: var(--ai-neon-green);
          line-height: 2;
          border-right: 1px dashed rgba(0,255,102,0.3);
          padding-right: 1rem;
        }

        /* Right Side: Data Visualizer */
        .data-visualizer {
          background: repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,255,102,0.05) 40px, rgba(0,255,102,0.05) 41px),
                      repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0,255,102,0.05) 40px, rgba(0,255,102,0.05) 41px);
          border: 1px solid rgba(0,255,102,0.2);
          position: relative;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }

        .viz-core {
          width: 200px; height: 200px;
          border-radius: 50%;
          border: 2px dashed var(--ai-neon-green);
          animation: spinCore 10s linear infinite;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 50px rgba(0,255,102,0.2);
        }
        .viz-core::after {
          content: '';
          width: 100px; height: 100px;
          border-radius: 50%;
          background: rgba(0,255,102,0.2);
          box-shadow: 0 0 30px var(--ai-neon-green);
          animation: pulseCore 2s infinite alternate;
        }

        @keyframes spinCore { to { transform: rotate(360deg); } }
        @keyframes pulseCore { to { transform: scale(1.2); opacity: 0.5; } }

        .btn-close {
          position: absolute;
          top: 2rem; right: 2.5rem;
          background: transparent;
          border: 1px solid var(--ai-neon-green);
          color: var(--ai-neon-green);
          font-family: var(--font-head);
          padding: 0.5rem 2rem;
          font-size: 1rem;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-close:hover {
          background: var(--ai-neon-green);
          color: #000;
          box-shadow: 0 0 20px var(--ai-neon-green);
        }

      `}</style>
      
      {/* Background Matrix Streams */}
      <div className="stream-container">
        {mounted && dataStreams.map((leftPos, i) => {
          const delay = Math.random() * 5;
          const duration = 2 + Math.random() * 4;
          return (
            <div 
              key={i} 
              className="data-stream" 
              style={{ 
                left: `${leftPos}%`, 
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }} 
            />
          );
        })}
      </div>

      <div className={`tactical-grid ${activeNodeId ? 'has-active' : ''}`}>
        {nodes.map(node => {
          const isActive = activeNodeId === node.id;
          
          return (
            <div 
              key={node.id} 
              className={`god-card ${isActive ? 'active' : ''}`}
              onClick={() => { if (!isActive) setActiveNodeId(node.id); }}
            >
              {isActive && (
                <button className="btn-close" onClick={(e) => { e.stopPropagation(); setActiveNodeId(null); }}>
                  DISCONNECT
                </button>
              )}

              <div className="holo-header">
                <div>
                  <div className="sys-id">{node.id}</div>
                  <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--ai-cyan)', marginTop: '0.5rem' }}>
                    CLUSTER :: {node.cluster}
                  </div>
                </div>
                <div className={`status-badge status-${node.status}`}>{node.status}</div>
              </div>

              <div className="metrics-grid">
                <div className="metric-cell">
                  <div className="m-label">SYS_LOAD</div>
                  <div className="m-value" style={{ color: node.load > 90 ? '#ff0055' : 'var(--ai-neon-green)' }}>
                    {node.load}%
                  </div>
                </div>
                <div className="metric-cell">
                  <div className="m-label">CONNECTIONS</div>
                  <div className="m-value">{node.connections.toLocaleString()}</div>
                </div>
                <div className="metric-cell">
                  <div className="m-label">LOCATION</div>
                  <div className="m-value" style={{ fontSize: '1rem', marginTop: '0.4rem' }}>{node.location}</div>
                </div>
                <div className="metric-cell">
                  <div className="m-label">ENCRYPTION</div>
                  <div className="m-value" style={{ fontSize: '1rem', marginTop: '0.4rem', color: 'var(--ai-violet)' }}>QUANTUM_256</div>
                </div>
              </div>

              {isActive && (
                <div className="expanded-grid">
                  <div className="sys-tree">
                    <div>&gt; _ACCESSING ROOT...</div>
                    <div style={{ paddingLeft: '1rem' }}>├─ firewall.bypass() [OK]</div>
                    <div style={{ paddingLeft: '1rem' }}>├─ auth_token.forge() [OK]</div>
                    <div style={{ paddingLeft: '1rem' }}>└─ <span style={{ color: '#fff' }}>SYSTEM_GRANTED</span></div>
                    <br/>
                    <div>&gt; _INJECTING GOD_MODE_SCRIPT...</div>
                    <div style={{ paddingLeft: '1rem', color: 'var(--ai-cyan)' }}>
                      [####################] 100%
                    </div>
                    <div>&gt; _TOTAL_NETWORK_CONTROL_ESTABLISHED.</div>
                    <br/>
                    <div style={{ color: '#888' }}>
                      // God-level permissions active.<br/>
                      // Real-time data streams rerouted.<br/>
                      // Awaiting operator command.
                    </div>
                  </div>
                  
                  <div className="data-visualizer">
                    <div className="viz-core"></div>
                    <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--ai-neon-green)' }}>
                      [LIVE_CORE_SYNC: ACTIVE]
                    </div>
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

export default GodLevelCyberpunkHackerDemoGemini;
