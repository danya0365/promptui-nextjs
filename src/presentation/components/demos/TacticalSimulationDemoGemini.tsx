'use client';

import React, { useEffect, useState } from 'react';

// Tactical Simulation Command Center - Gemini 3.1 Pro Implementation
// Hard brutalist edges, neon green on matte black, mechanical grid layout.

interface TacticalNode {
  id: string;
  name: string;
  load: number;
  status: 'ONLINE' | 'WARNING' | 'CRITICAL';
  logs: string[];
}

export const TacticalSimulationDemoGemini: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [sysTime, setSysTime] = useState('');

  // Mock data for the command center
  const nodes: TacticalNode[] = [
    { id: 'SEC-01', name: 'PERIMETER DEFENSE', load: 42, status: 'ONLINE', logs: ['Scans nominal.', 'No breaches detected.'] },
    { id: 'SYS-04', name: 'MAIN REACTOR', load: 89, status: 'WARNING', logs: ['Heat dissipation at 89%.', 'Coolant pump 2 engaged.'] },
    { id: 'COM-99', name: 'ORBITAL UPLINK', load: 12, status: 'ONLINE', logs: ['Signal strength: 9/10.', 'Encrypted channel open.'] },
    { id: 'INT-02', name: 'AI HEURISTICS', load: 99, status: 'CRITICAL', logs: ['Processing load exceeding tolerance.', 'Recommend shedding non-essential tasks.'] },
    { id: 'LIF-05', name: 'LIFE SUPPORT', load: 35, status: 'ONLINE', logs: ['O2 levels optimal.', 'Atmosphere scrubbers active.'] },
  ];

  // System clock and mount animation trigger
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      setSysTime(`${now.getUTCHours().toString().padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')}:${now.getUTCSeconds().toString().padStart(2, '0')} UTC`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`tactical-ui ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Share+Tech+Mono&display=swap');

        :root {
          --tac-bg: #030504;
          --tac-panel: #0a0d0a;
          --tac-green: #00ff41;
          --tac-green-dim: rgba(0, 255, 65, 0.2);
          --tac-green-glow: rgba(0, 255, 65, 0.4);
          --tac-red: #ff003c;
          --tac-yellow: #ffd700;
        }

        body {
          margin: 0;
          background-color: var(--tac-bg);
          color: var(--tac-green);
          font-family: 'Share Tech Mono', 'JetBrains Mono', monospace;
          background-image: 
            linear-gradient(var(--tac-green-dim) 1px, transparent 1px),
            linear-gradient(90deg, var(--tac-green-dim) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center center;
          overflow-x: hidden;
        }

        .tactical-ui {
          min-height: 100vh;
          padding: 2rem;
          /* CRT subtle screen effect */
          box-shadow: inset 0 0 100px rgba(0,0,0,0.9);
          position: relative;
        }

        .tactical-ui::after {
          content: " ";
          display: block;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 999;
          opacity: 0.3;
        }

        /* --- Global Header --- */
        .system-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid var(--tac-green);
          padding-bottom: 1rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .system-title {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: 4px;
          text-shadow: 0 0 10px var(--tac-green-glow);
          margin: 0;
        }

        .system-clock {
          font-size: 1.5rem;
          font-weight: 700;
        }

        /* --- Brutalist Grid Layout --- */
        .tac-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          position: relative;
        }

        /* Hide grid if a panel is expanded */
        .tactical-ui:has(.expanded) .tac-grid {
          opacity: 0.1;
          pointer-events: none;
        }

        /* --- Panel Design --- */
        .tac-panel {
          background-color: var(--tac-panel);
          border: 1px solid var(--tac-green);
          padding: 1.5rem;
          position: relative;
          cursor: pointer;
          /* 0px radius for brutalist feel */
          border-radius: 0;
          overflow: hidden;
          
          /* Mechanical entrance animation */
          opacity: 0;
          transform: translateY(50px) scale(0.98);
          transition: 
            transform 0.2s cubic-bezier(0, 0.5, 0.5, 1), 
            box-shadow 0.2s, 
            opacity 0.5s cubic-bezier(0, 0.5, 0.5, 1);
        }

        /* Staggered entrance based on child index */
        .mounted .tac-panel {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .mounted .tac-panel:nth-child(1) { transition-delay: 0.1s; }
        .mounted .tac-panel:nth-child(2) { transition-delay: 0.2s; }
        .mounted .tac-panel:nth-child(3) { transition-delay: 0.3s; }
        .mounted .tac-panel:nth-child(4) { transition-delay: 0.4s; }
        .mounted .tac-panel:nth-child(5) { transition-delay: 0.5s; }

        /* Hover Data Scan Effect */
        .tac-panel::before {
          content: '';
          position: absolute;
          top: -100%; left: 0; width: 100%; height: 10px;
          background: var(--tac-green);
          box-shadow: 0 0 20px 10px var(--tac-green-glow);
          opacity: 0;
          transition: none;
          z-index: 10;
          pointer-events: none;
        }

        .tac-panel:hover::before {
          animation: scan-line 1.5s linear infinite;
          opacity: 0.5;
        }

        @keyframes scan-line {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        .tac-panel:hover {
          box-shadow: inset 0 0 20px var(--tac-green-dim), 0 0 15px var(--tac-green-dim);
        }

        /* Panel Internal Layout */
        .panel-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed var(--tac-green-dim);
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .panel-id {
          font-weight: 700;
          font-size: 1.2rem;
        }

        .status-badge {
          padding: 2px 8px;
          font-size: 0.8rem;
          font-weight: 700;
          background: var(--tac-green-dim);
          border: 1px solid var(--tac-green);
        }
        .status-badge.warning { color: var(--tac-yellow); border-color: var(--tac-yellow); background: rgba(255,215,0,0.1); }
        .status-badge.critical { color: var(--tac-red); border-color: var(--tac-red); background: rgba(255,0,60,0.1); animation: blink 1s infinite; }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        /* Load Bar */
        .load-meter {
          margin-bottom: 1.5rem;
        }
        .load-label {
          display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.3rem;
        }
        .load-bar-bg {
          height: 12px;
          background: #111;
          border: 1px solid var(--tac-green-dim);
          position: relative;
        }
        .load-bar-fill {
          height: 100%;
          background: var(--tac-green);
          /* Striped pattern for the bar */
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 5px,
            rgba(0,0,0,0.5) 5px,
            rgba(0,0,0,0.5) 10px
          );
        }
        .load-bar-fill.warning { background-color: var(--tac-yellow); }
        .load-bar-fill.critical { background-color: var(--tac-red); }

        /* Live Ticker */
        .ticker-wrap {
          width: 100%;
          overflow: hidden;
          background: #000;
          border-top: 1px solid var(--tac-green);
          padding: 0.25rem 0;
          margin-top: auto;
          position: absolute;
          bottom: 0; left: 0;
          font-size: 0.8rem;
        }
        .ticker-inner {
          display: inline-block;
          white-space: nowrap;
          animation: ticker 15s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        /* --- Expanded Dashboard View --- */
        .expanded-view {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw;
          height: 85vh;
          background: var(--tac-bg);
          border: 2px solid var(--tac-green);
          box-shadow: 0 0 50px var(--tac-green-glow);
          z-index: 100;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          /* Mechanical open animation */
          animation: mechanical-open 0.4s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
        }

        @keyframes mechanical-open {
          0% { height: 2px; width: 0vw; opacity: 0; }
          40% { height: 2px; width: 90vw; opacity: 1; }
          100% { height: 85vh; width: 90vw; opacity: 1; }
        }

        .btn-close {
          position: absolute;
          top: 1rem; right: 1rem;
          background: transparent;
          border: 1px solid var(--tac-green);
          color: var(--tac-green);
          font-family: inherit;
          font-size: 1rem;
          font-weight: bold;
          padding: 0.5rem 1rem;
          cursor: pointer;
          text-transform: uppercase;
        }
        .btn-close:hover {
          background: var(--tac-green);
          color: #000;
        }

        .terminal-log {
          flex: 1;
          background: #050805;
          border: 1px solid var(--tac-green-dim);
          padding: 1rem;
          margin-top: 2rem;
          overflow-y: auto;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .log-line::before {
          content: '>';
          margin-right: 0.5rem;
          opacity: 0.5;
        }

      `}</style>

      <header className="system-header">
        <h1 className="system-title">NEXUS COMMAND</h1>
        <div className="system-clock">{sysTime}</div>
      </header>

      <div className="tac-grid">
        {nodes.map((node) => {
          const isWarn = node.status === 'WARNING';
          const isCrit = node.status === 'CRITICAL';
          const fillClass = isCrit ? 'critical' : isWarn ? 'warning' : '';
          
          return (
            <div 
              key={node.id} 
              className="tac-panel"
              onClick={() => setActiveNode(node.id)}
            >
              <div className="panel-header">
                <span className="panel-id">{node.id} // {node.name}</span>
                <span className={`status-badge ${fillClass}`}>
                  {node.status}
                </span>
              </div>
              
              <div className="load-meter">
                <div className="load-label">
                  <span>SYSTEM_LOAD</span>
                  <span>{node.load}%</span>
                </div>
                <div className="load-bar-bg">
                  <div className={`load-bar-fill ${fillClass}`} style={{ width: `${node.load}%` }} />
                </div>
              </div>

              {/* Takes up space so ticker has absolute room */}
              <div style={{ height: '30px' }} /> 
              
              <div className="ticker-wrap">
                <div className="ticker-inner">
                  {node.logs.join(' | ')} | WAITING FOR INPUT...
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {activeNode && (
        <>
          <div className="expanded-view expanded">
            {(() => {
              const node = nodes.find(n => n.id === activeNode);
              if(!node) return null;
              
              const isCrit = node.status === 'CRITICAL';
              const color = isCrit ? 'var(--tac-red)' : 'var(--tac-green)';

              return (
                <>
                  <button className="btn-close" onClick={() => setActiveNode(null)}>TERMINATE VIEW</button>
                  <h2 style={{ fontSize: '3rem', margin: '0 0 1rem 0', color }}>{node.name}</h2>
                  <div style={{ fontSize: '1.2rem', marginBottom: '2rem', display: 'flex', gap: '2rem' }}>
                    <span>NODE_ID: {node.id}</span>
                    <span style={{ color }}>STATUS: {node.status}</span>
                    <span>UPTIME: 99.99%</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', height: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h3>TERMINAL OUTPUT</h3>
                      <div className="terminal-log">
                        <div className="log-line">Establishing secure connection to {node.id}...</div>
                        <div className="log-line">Connection established.</div>
                        <div className="log-line">Retrieving diagnostic logs...</div>
                        <br/>
                        {node.logs.map((log, i) => <div key={i} className="log-line">{log}</div>)}
                        <br/>
                        <div className="log-line blink" style={{ animation: 'blink 1s infinite' }}>Awaiting command input_</div>
                      </div>
                    </div>
                    
                    <div style={{ borderLeft: `1px solid ${color}`, paddingLeft: '2rem' }}>
                      <h3>SYS_METRICS</h3>
                      
                      <div className="load-meter" style={{ marginTop: '2rem' }}>
                        <div className="load-label" style={{ color }}>
                          <span>CPU_UTILIZATION</span>
                          <span>{node.load}%</span>
                        </div>
                        <div className="load-bar-bg" style={{ borderColor: color, height: '20px' }}>
                          <div className={`load-bar-fill ${isCrit ? 'critical' : node.status === 'WARNING' ? 'warning' : ''}`} style={{ width: `${node.load}%` }} />
                        </div>
                      </div>

                      <div className="load-meter" style={{ marginTop: '2rem' }}>
                        <div className="load-label" style={{ color: 'var(--tac-green-dim)' }}>
                          <span>MEM_ALLOCATION</span>
                          <span>{node.load > 50 ? 82 : 34}%</span>
                        </div>
                        <div className="load-bar-bg" style={{ opacity: 0.5 }}>
                          <div className="load-bar-fill" style={{ width: `${node.load > 50 ? 82 : 34}%` }} />
                        </div>
                      </div>
                      
                      <div style={{ marginTop: '4rem', padding: '1rem', border: `1px dashed ${color}`, color }}>
                        <strong>MANUAL OVERRIDE</strong><br/><br/>
                        [ AUTHORIZATION REQUIRED ]
                      </div>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
          <div 
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 90 }} 
            onClick={() => setActiveNode(null)}
          />
        </>
      )}

    </div>
  );
};

export default TacticalSimulationDemoGemini;
