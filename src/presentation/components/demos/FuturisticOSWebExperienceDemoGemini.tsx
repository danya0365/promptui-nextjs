'use client';

import React, { useEffect, useState } from 'react';

// Futuristic OS Web Experience - Gemini 3.1 Pro
// 2035 next-generation digital ecosystem, visionary and immersive.

export const FuturisticOSWebExperienceDemoGemini: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [timeText, setTimeText] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeText(
        now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + 
        '.' + now.getMilliseconds().toString().padStart(3, '0').slice(0, 2)
      );
    };
    const timer = setInterval(updateTime, 50);
    return () => clearInterval(timer);
  }, []);

  const toggleModule = (id: string) => {
    setActiveModule(activeModule === id ? null : id);
  };

  return (
    <div className="os-container">
      {/* Super thin futuristic fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Dynamic Backgrounds */}
      <div className="cosmic-bg">
        <div className="starfield"></div>
        <div className="starfield-2"></div>
        <div className="nebula-glow cyan-nebula"></div>
        <div className="nebula-glow magenta-nebula"></div>
        <div className="digital-grid"></div>
      </div>

      {/* Top OS Bar */}
      <header className="os-top-bar">
        <div className="os-status">
          <span className="status-indicator online"></span>
          SYS.CORE // STABLE
        </div>
        <div className="os-brand">ORION<span>OS</span></div>
        <div className="os-time">{timeText}</div>
      </header>

      {/* Main Interactive Space */}
      <main className="os-desktop">
        
        {/* Module 1: System Vitals (Left Panel) */}
        <div 
          className={`os-module panel-left ${activeModule === 'vitals' ? 'expanded' : ''}`}
          onClick={() => toggleModule('vitals')}
        >
          <div className="module-header">
            <h3 className="module-title">SYSTEM VITALS</h3>
            <div className="module-control"></div>
          </div>
          <div className="module-content">
            <div className="vital-row">
              <span className="vital-label">NEURAL LOAD</span>
              <div className="vital-bar"><div className="vital-fill" style={{ width: '42%' }}></div></div>
              <span className="vital-value">42%</span>
            </div>
            <div className="vital-row">
              <span className="vital-label">QUANTUM CORES</span>
              <div className="vital-bar"><div className="vital-fill" style={{ width: '89%' }}></div></div>
              <span className="vital-value">89%</span>
            </div>
            <div className="vital-row">
              <span className="vital-label">MEMORY MATRIX</span>
              <div className="vital-bar"><div className="vital-fill" style={{ width: '14%' }}></div></div>
              <span className="vital-value">14%</span>
            </div>
            {activeModule === 'vitals' && (
              <div className="module-extended-content fade-in">
                <div className="graph-placeholder">
                  {/* Fake wave animation */}
                  <div className="wave-line"></div>
                </div>
                <p className="os-text-small">Diagnostic protocols running optimally. No anomalies detected within the localized sectors.</p>
              </div>
            )}
          </div>
          <div className="glass-reflection"></div>
        </div>

        {/* Module 2: The Nexus (Center Main) */}
        <div 
          className={`os-module panel-center ${activeModule === 'nexus' ? 'expanded' : ''}`}
          onClick={() => toggleModule('nexus')}
        >
          <div className="module-header">
            <h3 className="module-title">GLOBAL NEXUS</h3>
            <div className="module-control"></div>
          </div>
          <div className="module-content nexus-content">
            <h1 className="nexus-headline">SYNTHESIZE THE <br /><span>FUTURE.</span></h1>
            <p className="nexus-desc">Welcome to your omni-dimensional workspace. Seamlessly interface with data across all realities.</p>
            
            <div className="nexus-grid">
              <div className="nexus-item">
                <div className="n-icon"></div>
                <span>COMM-LINK</span>
              </div>
              <div className="nexus-item">
                <div className="n-icon"></div>
                <span>ARCHIVES</span>
              </div>
              <div className="nexus-item">
                <div className="n-icon"></div>
                <span>SYNAPSE</span>
              </div>
              <div className="nexus-item">
                <div className="n-icon"></div>
                <span>SECURITY</span>
              </div>
            </div>

            {activeModule === 'nexus' && (
              <div className="module-extended-content fade-in nexus-extended">
                <button className="holographic-btn">INITIALIZE CONNECTION</button>
              </div>
            )}
          </div>
          <div className="glass-reflection"></div>
        </div>

        {/* Module 3: Active Streams (Right Panel) */}
        <div 
          className={`os-module panel-right ${activeModule === 'streams' ? 'expanded' : ''}`}
          onClick={() => toggleModule('streams')}
        >
          <div className="module-header">
            <h3 className="module-title">ACTIVE STREAMS</h3>
            <div className="module-control"></div>
          </div>
          <div className="module-content">
            <ul className="stream-list">
              <li className="stream-item">
                <div className="stream-indicator pulse-cyan"></div>
                <div className="stream-text">
                  <span className="s-name">MAIN_FRAME_SYNC</span>
                  <span className="s-status">Receiving Data...</span>
                </div>
              </li>
              <li className="stream-item">
                <div className="stream-indicator pulse-magenta"></div>
                <div className="stream-text">
                  <span className="s-name">ORBITAL_UPLINK</span>
                  <span className="s-status">Awaiting Handshake</span>
                </div>
              </li>
            </ul>
            {activeModule === 'streams' && (
              <div className="module-extended-content fade-in terminal-box">
                <div className="term-line">&gt; Executing sequence Alpha-9</div>
                <div className="term-line">&gt; Bypassing localized friction</div>
                <div className="term-line">&gt; Establish secure tunnel [OK]</div>
                <div className="term-line cursor-blink">_</div>
              </div>
            )}
          </div>
          <div className="glass-reflection"></div>
        </div>

      </main>

      {/* Floating Context-Aware Navigation */}
      <div className="os-floating-nav">
        <div className="nav-dock">
          <button className="dock-item active">⊚</button>
          <button className="dock-item">◰</button>
          <button className="dock-item">◬</button>
          <button className="dock-item">⊗</button>
        </div>
      </div>

      <style>{`
        :root {
          --os-bg-deep: #020308;
          --os-cyan: #00f0ff;
          --os-magenta: #ff0055;
          --os-text: #e0f2fe;
          --os-text-dim: #7dd3fc;
          --os-glass: rgba(10, 15, 30, 0.4);
          --os-glass-border: rgba(0, 240, 255, 0.15);
          
          --font-display: 'Jura', sans-serif;
          --font-system: 'Rajdhani', sans-serif;
        }

        .os-container {
          min-height: 100vh;
          background-color: var(--os-bg-deep);
          color: var(--os-text);
          font-family: var(--font-system);
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* --- Background Effects --- */
        .cosmic-bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
        }

        .digital-grid {
          position: absolute; width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: 
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(600px) rotateX(45deg);
          animation: gridPan 30s linear infinite;
        }

        @keyframes gridPan {
          0% { transform: perspective(600px) rotateX(45deg) translateY(0); }
          100% { transform: perspective(600px) rotateX(45deg) translateY(80px); }
        }

        .starfield, .starfield-2 {
          position: absolute; inset: 0;
          background-image: radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, rgba(0,240,255,0.8), rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, rgba(255,0,85,0.8), rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.3;
        }
        
        .starfield { animation: starDrift 100s linear infinite; }
        .starfield-2 { background-size: 300px 300px; opacity: 0.2; animation: starDrift 150s linear infinite reverse; }

        @keyframes starDrift { from { transform: translateY(0); } to { transform: translateY(-1000px); } }

        .nebula-glow {
          position: absolute; width: 60vw; height: 60vw; border-radius: 50%; filter: blur(120px); opacity: 0.15;
        }
        .cyan-nebula { background: var(--os-cyan); top: -10%; left: -10%; }
        .magenta-nebula { background: var(--os-magenta); bottom: -10%; right: -10%; }

        /* --- OS Top Bar --- */
        .os-top-bar {
          position: relative; z-index: 10;
          display: flex; justify-content: space-between; align-items: center;
          padding: 1rem 3rem;
          background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%);
          font-family: var(--font-display);
          font-size: 0.9rem; letter-spacing: 0.15em;
        }

        .os-status { display: flex; align-items: center; gap: 8px; color: var(--os-cyan); }
        .status-indicator { width: 6px; height: 6px; border-radius: 50%; background: var(--os-cyan); box-shadow: 0 0 10px var(--os-cyan); animation: pulse 2s infinite; }
        
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        .os-brand { font-weight: 700; font-size: 1.2rem; }
        .os-brand span { color: var(--os-magenta); font-weight: 300; }
        .os-time { color: var(--os-text-dim); min-width: 120px; text-align: right; font-variant-numeric: tabular-nums; }

        /* --- OS Desktop (Main Layout) --- */
        .os-desktop {
          position: relative; z-index: 10;
          flex-grow: 1;
          display: flex; justify-content: center; align-items: center; gap: 2rem;
          padding: 2rem 4rem;
          perspective: 1200px;
        }

        /* --- Modular Panels (Glassmorphism) --- */
        .os-module {
          background: var(--os-glass);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--os-glass-border);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .os-module:hover {
          border-color: rgba(0, 240, 255, 0.4);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0, 240, 255, 0.1), inset 0 1px 1px rgba(255,255,255,0.2);
          transform: translateY(-5px);
        }

        .os-module.expanded {
          cursor: default;
          box-shadow: 0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(0, 240, 255, 0.15), inset 0 1px 1px rgba(255,255,255,0.2);
        }

        .panel-left, .panel-right { width: 320px; height: 400px; transform: rotateY(10deg); }
        .panel-right { transform: rotateY(-10deg); }
        .panel-center { width: 500px; height: 500px; z-index: 5; }

        .os-module:hover.panel-left { transform: rotateY(10deg) translateY(-5px); }
        .os-module:hover.panel-right { transform: rotateY(-10deg) translateY(-5px); }
        
        .os-module.expanded.panel-left { width: 400px; height: 550px; transform: rotateY(5deg) scale(1.05) translateZ(50px); z-index: 20; }
        .os-module.expanded.panel-right { width: 400px; height: 550px; transform: rotateY(-5deg) scale(1.05) translateZ(50px); z-index: 20; }
        .os-module.expanded.panel-center { width: 600px; height: 600px; transform: scale(1.05) translateZ(50px); z-index: 20; }

        /* Module Header */
        .module-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem;
        }

        .module-title { font-family: var(--font-display); font-size: 0.9rem; font-weight: 600; letter-spacing: 0.2em; color: var(--os-cyan); }
        .module-control { width: 12px; height: 12px; border-radius: 50%; border: 1px solid var(--os-cyan); transition: background 0.3s; }
        .os-module:hover .module-control { background: rgba(0, 240, 255, 0.2); }
        .os-module.expanded .module-control { background: var(--os-cyan); box-shadow: 0 0 10px var(--os-cyan); }

        /* Subtle reflection effect */
        .glass-reflection {
          position: absolute; top: 0; left: -150%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transform: skewX(-20deg); transition: 0s;
        }
        .os-module:hover .glass-reflection { left: 200%; transition: left 1s ease-in-out; }

        /* --- Panel Content Types --- */
        
        /* Vitals Panel */
        .vital-row { margin-bottom: 1.5rem; }
        .vital-label { display: inline-block; font-size: 0.8rem; letter-spacing: 0.1em; margin-bottom: 5px; color: var(--os-text-dim); }
        .vital-bar { height: 4px; background: rgba(0, 240, 255, 0.1); border-radius: 2px; position: relative; overflow: hidden; }
        .vital-fill { height: 100%; background: var(--os-cyan); box-shadow: 0 0 10px var(--os-cyan); }
        .vital-value { float: right; font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--os-text); }

        /* Nexus Center Panel */
        .nexus-content { text-align: center; display: flex; flex-direction: column; justify-content: center; height: calc(100% - 3rem); }
        .nexus-headline { font-family: var(--font-display); font-size: 3rem; font-weight: 300; line-height: 1.1; margin-bottom: 1rem; }
        .nexus-headline span { font-weight: 700; background: linear-gradient(90deg, var(--os-cyan), var(--os-text)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .nexus-desc { font-size: 1.1rem; color: var(--os-text-dim); font-weight: 300; margin-bottom: 3rem; }
        
        .nexus-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .nexus-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; display: flex; flex-direction: column; align-items: center; gap: 10px; transition: all 0.3s; }
        .nexus-item:hover { background: rgba(0, 240, 255, 0.05); border-color: rgba(0, 240, 255, 0.3); }
        .n-icon { width: 30px; height: 30px; border: 1px dashed var(--os-cyan); border-radius: 50%; position: relative; }
        .n-icon::after { content:''; position: absolute; top:50%; left:50%; transform: translate(-50%,-50%); width: 10px; height: 10px; background: var(--os-cyan); border-radius: 50%; opacity: 0.5; }
        .nexus-item span { font-family: var(--font-display); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--os-text-dim); }

        /* Streams Panel */
        .stream-list { list-style: none; padding: 0; margin: 0; }
        .stream-item { display: flex; align-items: center; gap: 15px; margin-bottom: 1.5rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px; border-left: 2px solid transparent; }
        .stream-item:hover { border-left-color: var(--os-cyan); background: rgba(0, 240, 255, 0.05); }
        .stream-indicator { width: 10px; height: 10px; border-radius: 50%; }
        .pulse-cyan { background: var(--os-cyan); box-shadow: 0 0 10px var(--os-cyan); }
        .pulse-magenta { background: var(--os-magenta); box-shadow: 0 0 10px var(--os-magenta); }
        .stream-text { display: flex; flex-direction: column; }
        .s-name { font-family: var(--font-display); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.1em; }
        .s-status { font-size: 0.75rem; color: var(--os-text-dim); }

        /* Extended Content (Visible when expanded) */
        .module-extended-content { margin-top: 2rem; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 2rem; }
        .fade-in { animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .os-text-small { font-size: 0.9rem; color: var(--os-text-dim); line-height: 1.6; }
        
        .holographic-btn { background: rgba(0, 240, 255, 0.1); border: 1px solid var(--os-cyan); color: var(--os-cyan); padding: 1rem 2rem; border-radius: 8px; font-family: var(--font-display); font-weight: 600; letter-spacing: 0.15em; cursor: pointer; transition: all 0.3s; width: 100%; box-shadow: inset 0 0 15px rgba(0, 240, 255, 0.1); }
        .holographic-btn:hover { background: var(--os-cyan); color: var(--os-bg-deep); box-shadow: 0 0 20px rgba(0, 240, 255, 0.4); }

        .terminal-box { font-family: 'Courier New', monospace; font-size: 0.8rem; color: var(--os-cyan); background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; }
        .term-line { margin-bottom: 5px; }
        .cursor-blink { animation: blinker 1s linear infinite; }
        @keyframes blinker { 50% { opacity: 0; } }

        /* --- Floating Navigation Dock --- */
        .os-floating-nav {
          position: fixed; bottom: 3rem; left: 50%; transform: translateX(-50%); z-index: 100;
        }

        .nav-dock {
          display: flex; gap: 1rem; padding: 0.8rem 1.5rem;
          background: rgba(10, 15, 30, 0.6); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .dock-item {
          width: 45px; height: 45px; border-radius: 50%; border: none;
          background: rgba(255,255,255,0.05); color: var(--os-text-dim);
          font-size: 1.2rem; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s;
        }

        .dock-item:hover { background: rgba(255,255,255,0.1); color: var(--os-text); transform: translateY(-3px); }
        .dock-item.active { background: var(--os-cyan); color: var(--os-bg-deep); box-shadow: 0 0 15px var(--os-cyan); }

        @media (max-width: 1200px) {
          .os-desktop { flex-direction: column; perspective: none; }
          .os-module { transform: none !important; width: 100% !important; max-width: 600px; height: auto !important; min-height: 300px; }
          .os-module.expanded { height: auto !important; }
        }
      `}</style>
    </div>
  );
};

export default FuturisticOSWebExperienceDemoGemini;
