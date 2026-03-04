'use client';

import React, { useEffect, useState } from 'react';

// Cyberpunk Hacker Terminal - Gemini 3.1 Pro Implementation
// Dark tactical dashboard, sharp neon cards, rigid grid, scanlines.

interface NodeStatus {
  id: string;
  name: string;
  ip: string;
  status: 'ONLINE' | 'OFFLINE' | 'BREACHED';
  ping: number;
}

export const CyberpunkHackerTerminalDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    setMounted(true);
    
    // Simulate background terminal logs
    const bootSequence = [
      'INIT ROOT KERNEL v9.0.4...',
      'BYPASSING MAINFRAME FIREWALL...',
      'ACCESSING NODE CLUSTER SEC-4...',
      'LOCAL ENCRYPTION KERNEL ACTIVE.',
      'AWAITING COMMAND...'
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setLogs(prev => [...prev, `[${new Date().toISOString().split('T')[1].slice(0, 8)}] ${bootSequence[i]}`]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const nodes: NodeStatus[] = [
    { id: 'N-01', name: 'PROXY_SERVER_ALPHA', ip: '192.168.0.114', status: 'ONLINE', ping: 12 },
    { id: 'N-02', name: 'SEC_GATEWAY', ip: '10.0.0.1', status: 'BREACHED', ping: 450 },
    { id: 'N-03', name: 'DATA_VAULT_ECHO', ip: '172.16.254.1', status: 'ONLINE', ping: 4 },
    { id: 'N-04', name: 'GHOST_RELAY', ip: 'UNKNOWN', status: 'OFFLINE', ping: 999 }
  ];

  return (
    <div className={`cyberpunk-viewport ${mounted ? 'mounted' : ''}`}>
      <style>{`
        /* Import a strong monospace font */
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap');

        :root {
          /* Raw Colors */
          --cb-bg: #0b0f14;
          --cb-panel: #070a0e;
          --cb-neon-green: #00ff66;
          --cb-neon-green-dim: rgba(0, 255, 102, 0.2);
          --cb-neon-red: #ff003c;
          --cb-text: #e0e0e0;
          --cb-text-dim: #707070;
          
          --font-mono: 'Fira Code', monospace;
        }

        body {
          margin: 0;
          padding: 0;
          background-color: var(--cb-bg);
          color: var(--cb-text);
          font-family: var(--font-mono);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Global Scanline & Grid Overlays
           --------------------------------- */
        .cyberpunk-viewport {
          position: relative;
          min-height: 100vh;
          width: 100vw;
          padding: 4rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .crt-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 9999;
          
          /* Subtle horizontal scanlines */
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          ), linear-gradient(
            90deg, 
            rgba(255, 0, 0, 0.06), 
            rgba(0, 255, 0, 0.02), 
            rgba(0, 0, 255, 0.06)
          );
          background-size: 100% 4px, 6px 100%;
          
          /* Screen flicker animation */
          animation: crtFlicker 0.15s infinite;
          opacity: 0.1;
        }

        @keyframes crtFlicker {
          0% { opacity: 0.08; }
          50% { opacity: 0.12; }
          100% { opacity: 0.08; }
        }

        /* Tactical Grid Background */
        .cyberpunk-viewport::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--cb-neon-green-dim) 1px, transparent 1px),
            linear-gradient(90deg, var(--cb-neon-green-dim) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.05;
          pointer-events: none;
        }

        /* ---------------------------------
           Main Tactical Rigid Grid
           --------------------------------- */
        .tac-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(300px, 400px));
          gap: 2rem;
          width: 100%;
          max-width: 900px;
          position: relative;
          z-index: 10;
        }
        
        /* ---------------------------------
           Sharp Hacker Cards (0px radius)
           --------------------------------- */
        .hacker-card {
          position: relative;
          background: var(--cb-panel);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 0; /* Extremely sharp */
          cursor: pointer;
          overflow: hidden;
          
          /* Initial spawn glitch effect */
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .mounted .hacker-card {
          opacity: 1;
          transform: translateY(0);
          animation: glitchIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        /* Stagger spawn */
        .mounted .hacker-card:nth-child(1) { animation-delay: 0.1s; }
        .mounted .hacker-card:nth-child(2) { animation-delay: 0.2s; }
        .mounted .hacker-card:nth-child(3) { animation-delay: 0.3s; }
        .mounted .hacker-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes glitchIn {
          0% { clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); opacity: 0; }
          20% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); opacity: 1; }
          40% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
          60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
          80% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); opacity: 1; }
        }

        /* Header Data */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 1rem;
        }

        .node-id {
          font-size: 0.8rem;
          color: var(--cb-text-dim);
          letter-spacing: 2px;
        }

        .node-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--cb-text);
          margin-top: 0.5rem;
        }

        /* Status Indicator Pill */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border: 1px solid;
          letter-spacing: 1px;
        }
        .status-ONLINE { color: var(--cb-neon-green); border-color: var(--cb-neon-green); box-shadow: 0 0 10px rgba(0,255,102,0.2); }
        .status-OFFLINE { color: var(--cb-text-dim); border-color: var(--cb-text-dim); }
        .status-BREACHED { color: var(--cb-neon-red); border-color: var(--cb-neon-red); box-shadow: 0 0 10px rgba(255,0,60,0.2); animation: pulseDanger 1s infinite alternate; }

        @keyframes pulseDanger {
          from { opacity: 0.6; }
          to { opacity: 1; box-shadow: 0 0 20px rgba(255,0,60,0.4); }
        }

        .status-badge::before {
          content: '';
          width: 8px; height: 8px;
          background: currentColor;
          box-shadow: 0 0 5px currentColor;
        }

        .node-stats {
          font-size: 0.85rem;
          color: var(--cb-text-dim);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        /* ---------------------------------
           Hover Interactions (Scanner Sweep)
           --------------------------------- */
        .scanner-beam {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--cb-neon-green);
          box-shadow: 0 0 20px 5px var(--cb-neon-green-dim);
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
        }

        .hacker-card:hover {
          border-color: var(--cb-neon-green);
          background: #0d1218;
        }

        .hacker-card:hover .scanner-beam {
          animation: scanSweep 1.5s ease-in-out infinite;
        }

        @keyframes scanSweep {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(180px); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* Data ticker effect on hover */
        .data-ticker {
          margin-top: 1.5rem;
          height: 1.2rem;
          font-size: 0.75rem;
          color: var(--cb-neon-green);
          overflow: hidden;
          opacity: 0.3;
          transition: opacity 0.3s;
        }
        .hacker-card:hover .data-ticker {
          opacity: 1;
        }

        /* ---------------------------------
           Active Console Mode (Full Width Expansion)
           --------------------------------- */
        .tac-grid.has-active .hacker-card:not(.active) {
          opacity: 0.2;
          pointer-events: none;
          filter: grayscale(100%);
        }

        .hacker-card.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vh;
          max-width: 1000px;
          z-index: 100;
          border: 1px solid var(--cb-neon-green);
          box-shadow: 0 0 40px rgba(0,255,102,0.1);
          background: #05070a;
          cursor: default;
          animation: none; /* override spawn clip path */
          clip-path: none;
        }

        .console-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--cb-neon-green);
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        .console-logs {
          height: calc(100% - 150px);
          overflow-y: auto;
          font-size: 0.9rem;
          color: var(--cb-neon-green);
          line-height: 1.8;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .log-entry {
          position: relative;
          padding-left: 1.5rem;
        }
        .log-entry::before {
          content: '>';
          position: absolute;
          left: 0;
          color: rgba(255,255,255,0.5);
        }

        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .btn-kill {
          background: rgba(255,0,60,0.1);
          border: 1px solid var(--cb-neon-red);
          color: var(--cb-neon-red);
          padding: 0.5rem 1.5rem;
          font-family: inherit;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-kill:hover {
          background: var(--cb-neon-red);
          color: #fff;
          box-shadow: 0 0 20px var(--cb-neon-red);
        }

      `}</style>
      
      <div className="crt-overlay" />

      <div className={`tac-grid ${activeNode ? 'has-active' : ''}`}>
        {nodes.map(node => {
          const isActive = activeNode === node.id;
          
          if (isActive) {
            return (
              <div key={node.id} className="hacker-card active">
                <div className="console-header">
                  <div>
                    <div className="node-id">ESTABLISHED UPLINK: {node.id}</div>
                    <div className="node-name" style={{ color: 'var(--cb-neon-green)' }}>{node.name}</div>
                  </div>
                  <button className="btn-kill" onClick={(e) => { e.stopPropagation(); setActiveNode(null); }}>
                    SIGTERM / DISCONNECT
                  </button>
                </div>
                
                <div className="console-logs">
                  {logs.map((log, i) => (
                    <div key={i} className="log-entry">{log}</div>
                  ))}
                  <div className="log-entry">
                    root@{node.ip}:~$ <span className="cursor-blink">█</span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div 
              key={node.id} 
              className="hacker-card"
              onClick={() => setActiveNode(node.id)}
            >
              <div className="scanner-beam" />
              
              <div className="card-header">
                <div>
                  <div className="node-id">{node.id}</div>
                  <div className="node-name">{node.name}</div>
                </div>
                <div className={`status-badge status-${node.status}`}>
                  {node.status}
                </div>
              </div>

              <div className="node-stats">
                <div>IP_v4: {node.ip}</div>
                <div>LATENCY: {node.ping}ms</div>
                <div>ENC_KEY: {Math.random().toString(36).substring(2, 10).toUpperCase()}</div>
              </div>

              <div className="data-ticker">
                &gt; TX_RATE: {(Math.random() * 100).toFixed(2)} Mbps | RX_RATE: {(Math.random() * 50).toFixed(2)} Mbps
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CyberpunkHackerTerminalDemoGemini;
