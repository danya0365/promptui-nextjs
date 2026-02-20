'use client';

import React, { useState } from 'react';

export function CyberpunkDarkWebInterfaceDemoGemini() {
  const [activeTab, setActiveTab] = useState('SYS_ALL');

  const tabs = ['SYS_ALL', 'DB_BREACH', 'ROOT_ACCESS', 'GHOST_IN_MAC'];

  const nodes = [
    {
      id: 'NODE_089X',
      title: 'MAINFRAME OVERRIDE',
      category: 'ROOT_ACCESS',
      user: 'neo@matrix',
      level: 'LVL_9',
      featured: true,
      color: '#0ff', // Cyan
      desc: 'Bypass security protocols on central banking system. Requires ICE breaker v4.0. High risk of tracing.'
    },
    {
      id: 'NODE_112C',
      title: 'EXTRACT CORPORATE DB',
      category: 'DB_BREACH',
      user: 'trinity',
      level: 'LVL_4',
      featured: false,
      color: '#f0f', // Pink
      desc: 'Download employee records from sector 4 holding server. Standard encryption. Watch for counter-measures.'
    },
    {
      id: 'NODE_045A',
      title: 'SPOOF SURVEILLANCE',
      category: 'GHOST_IN_MAC',
      user: 'morpheus',
      level: 'LVL_7',
      featured: true,
      color: '#0ff',
      desc: 'Loop camera feeds in district 9. Maintain presence for 30 minutes to cover extraction team.'
    },
    {
      id: 'NODE_999Z',
      title: 'INFILTRATE SEC_GRID',
      category: 'ROOT_ACCESS',
      user: 'cipher',
      level: 'LVL_8',
      featured: false,
      color: '#f0f',
      desc: 'Gain admin rights to the secondary power grid. Prepare for blackout sequence initiation.'
    },
    {
      id: 'NODE_334B',
      title: 'WIPE SERVER LOGS',
      category: 'GHOST_IN_MAC',
      user: 'switch',
      level: 'LVL_3',
      featured: false,
      color: '#0ff',
      desc: 'Clean up connection trails from the previous operation. Leave no digital footprint behind.'
    },
    {
      id: 'NODE_777Y',
      title: 'DECRYPT PAYLOAD',
      category: 'DB_BREACH',
      user: 'apoc',
      level: 'LVL_6',
      featured: false,
      color: '#ff0055', // Reddish Pink
      desc: 'Break SHA-256 encryption on the stolen data packet. Estimated time: 14 hours with concurrent clusters.'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@500;600;700&display=swap');

        .cyberpunk-app {
          font-family: 'Share Tech Mono', monospace;
          min-height: 100vh;
          background-color: #050505;
          color: #e0e0e0;
          padding: 60px 24px;
          position: relative;
          overflow-x: hidden;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          background-position: -1px -1px;
        }

        .cyberpunk-app::before {
          content: "";
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
          z-index: 0;
        }

        .cyber-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cyber-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
          text-align: center;
          position: relative;
        }

        .cyber-header::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0ff, transparent);
          box-shadow: 0 0 10px #0ff;
        }

        .cyber-title {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #fff;
          margin: 0 0 10px 0;
          text-transform: uppercase;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .cyber-subtitle {
          color: #0ff;
          font-size: 1rem;
          letter-spacing: 0.2em;
          margin: 0;
          opacity: 0.8;
          text-transform: uppercase;
        }

        .cyber-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-top: 50px;
          width: 100%;
        }

        .cyber-tab {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid #333;
          color: #666;
          padding: 10px 20px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }

        .cyber-tab::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 2px;
          background: #0ff;
          transition: all 0.3s ease;
        }

        .cyber-tab:hover {
          color: #0ff;
          border-color: rgba(0, 255, 255, 0.3);
          box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.1);
        }

        .cyber-tab.active {
          color: #fff;
          border-color: #0ff;
          text-shadow: 0 0 5px #0ff;
          box-shadow: inset 0 0 15px rgba(0, 255, 255, 0.2), 0 0 10px rgba(0, 255, 255, 0.2);
        }

        .cyber-tab.active::before {
          left: 0;
        }

        .cyber-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .cyber-card {
          background: rgba(5, 5, 5, 0.8);
          border: 1px solid #222;
          padding: 30px;
          height: 400px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(5px);
        }

        /* Glitchy border hover effect */
        .cyber-card::before, .cyber-card::after {
          content: '';
          position: absolute;
          top: -1px; left: -1px; right: -1px; bottom: -1px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          pointer-events: none;
          z-index: 2;
        }

        .cyber-card:hover {
          background: rgba(10, 10, 15, 0.9);
          transform: translateY(-5px);
          border-color: var(--neon-color);
          box-shadow: 
            inset 0 0 20px rgba(0, 0, 0, 0.8),
            0 0 15px var(--neon-color-dim);
        }

        .cyber-card:hover::before {
          clip-path: polygon(0 0, 20px 0, 0 20px);
          background: var(--neon-color);
        }
        
        .cyber-card:hover::after {
          clip-path: polygon(100% 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px));
          background: var(--neon-color);
        }

        .cyber-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
          border-bottom: 1px dashed #333;
          padding-bottom: 15px;
        }

        .cyber-id {
          font-size: 0.8rem;
          color: #666;
          letter-spacing: 0.1em;
        }

        .cyber-card:hover .cyber-id {
          color: var(--neon-color);
        }

        .cyber-badge-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .cyber-level {
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff;
          text-shadow: 0 0 5px rgba(255,255,255,0.5);
        }

        .cyber-featured {
          font-size: 0.65rem;
          padding: 2px 6px;
          background: var(--neon-color);
          color: #000;
          font-weight: bold;
          letter-spacing: 0.1em;
          box-shadow: 0 0 8px var(--neon-color);
        }

        .cyber-category {
          font-size: 0.75rem;
          color: #888;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cyber-category::before {
          content: '>';
          color: var(--neon-color);
        }

        .cyber-title-card {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .cyber-desc {
          font-size: 0.9rem;
          color: #999;
          line-height: 1.6;
          flex-grow: 1;
        }

        .cyber-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #222;
        }

        .cyber-user {
          font-size: 0.8rem;
          color: #0ff;
          opacity: 0.7;
        }

        .cyber-action {
          font-size: 0.85rem;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s ease;
        }

        .cyber-card:hover .cyber-action {
          color: var(--neon-color);
          text-shadow: 0 0 5px var(--neon-color);
        }

        .cyber-action::after {
          content: '_';
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .cyberpunk-app { padding: 40px 15px; }
          .cyber-grid { grid-template-columns: 1fr; }
          .cyber-title { font-size: 2.5rem; }
        }
      `}</style>

      <div className="cyberpunk-app">
        <div className="cyber-container">
          <header className="cyber-header">
            <h1 className="cyber-title">TERMINAL_NEXUS</h1>
            <p className="cyber-subtitle">SYSTEM STATUS: ONLINE // ENCRYPTION: ACTIVE</p>

            <div className="cyber-tabs">
              {tabs.map((tab) => (
                <button 
                  key={tab} 
                  className={`cyber-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </header>

          <div className="cyber-grid">
            {nodes.map((node) => {
              if (activeTab !== 'SYS_ALL' && node.category !== activeTab) {
                return null;
              }
               
              // Set CSS variables for hover colors
              const cssVars = {
                '--neon-color': node.color,
                '--neon-color-dim': `${node.color}40`, // add 25% opacity
              } as React.CSSProperties;

              return (
                <article key={node.id} className="cyber-card" style={cssVars}>
                  <div className="cyber-card-top">
                    <span className="cyber-id">[{node.id}]</span>
                    <div className="cyber-badge-wrapper">
                      <span className="cyber-level">{node.level}</span>
                      {node.featured && <span className="cyber-featured">CRITICAL</span>}
                    </div>
                  </div>
                  
                  <div className="cyber-category">{node.category}</div>
                  <h2 className="cyber-title-card">{node.title}</h2>
                  <p className="cyber-desc">{node.desc}</p>
                  
                  <footer className="cyber-footer">
                    <div className="cyber-user">usr: {node.user}</div>
                    <div className="cyber-action">EXECUTE</div>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
