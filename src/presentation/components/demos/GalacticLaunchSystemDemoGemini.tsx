'use client';

import React, { useEffect, useState } from 'react';

// Galactic Launch System - Gemini 3.1 Pro Implementation
// Pure CSS styling, synthetic radar visualizations, scanlines, and mechanical slide animations.

export const GalacticLaunchSystemDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState(120); // 2 minutes launch window
  const [activePanel, setActivePanel] = useState<'status' | 'tactical' | 'payload'>('status');

  // Random data generators for "live" feel
  const [sysTemp, setSysTemp] = useState(3400);
  const [pressure, setPressure] = useState(12.4);
  const [orbitTraj, setOrbitTraj] = useState(99.9);

  // Simulated telemetry sequence
  const [telemetryLog, setTelemetryLog] = useState<string[]>([
    "INITIATING DIAGNOSTIC SEQUENCE...",
    "MAIN ENGINE GIMBAL... CHECK",
    "LIFE SUPPORT SYSTEMS... NOMINAL",
  ]);

  useEffect(() => {
    setMounted(true);

    // Launch Countdown
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Fluctuating Data
    const dataTimer = setInterval(() => {
      setSysTemp((prev) => prev + (Math.random() * 10 - 5));
      setPressure((prev) => parseFloat((prev + (Math.random() * 0.2 - 0.1)).toFixed(2)));
      // Orbit traj climbs to 100
      setOrbitTraj((prev) => Math.min(100, parseFloat((prev + Math.random() * 0.05).toFixed(2))));
      
      // Add random logs
      if (Math.random() > 0.8) {
        setTelemetryLog(logs => {
          const newLogs = [...logs, `[${new Date().toISOString().split('T')[1].slice(0, 8)}] SYS MSG: ${['ALIGNING SENSORS', 'BUFFER PURGE OK', 'GRID STABLE', 'AWAITING GO/NO-GO'][Math.floor(Math.random() * 4)]}`];
          return newLogs.slice(-6); // KEEP LAST 6
        })
      }
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(dataTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `T - ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!mounted) return null;

  return (
    <div className="launch-container">
      {/* Dynamic Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Teko:wght@400;600;700&display=swap');
      `}</style>
      
      {/* Vfx Overlays */}
      <div className="scanlines"></div>
      <div className="flicker-overlay"></div>
      <div className="vignette"></div>

      <header className="launch-header">
        <div className="brand">
          <span className="logo-icon">▲</span> NAVIGATOR_OS <span className="version">v.9.4.2</span>
        </div>
        <div className="status-indicators">
          <div className="indicator"><span className="dot pulse-cyan"></span> COMM LINK</div>
          <div className="indicator"><span className="dot pulse-cyan"></span> GRID SYNC</div>
          <div className="indicator"><span className="dot pulse-red"></span> SECURE MODE</div>
        </div>
      </header>

      <main className="launch-grid">
        
        {/* LEFT COLUMN: Controls & Logs */}
        <aside className="panel left-panel">
          <div className="panel-header">CMD / LOG</div>
          <div className="nav-controls">
             <button className={`nav-btn ${activePanel === 'status' ? 'active' : ''}`} onClick={() => setActivePanel('status')}>
               [01] SYSTEM STATUS
             </button>
             <button className={`nav-btn ${activePanel === 'tactical' ? 'active' : ''}`} onClick={() => setActivePanel('tactical')}>
               [02] TACTICAL RADAR
             </button>
             <button className={`nav-btn ${activePanel === 'payload' ? 'active' : ''}`} onClick={() => setActivePanel('payload')}>
               [03] PAYLOAD METRICS
             </button>
          </div>

          <div className="telemetry-box">
             <div className="box-label">LIVE TELEMETRY</div>
             <ul className="log-list">
               {telemetryLog.map((log, i) => (
                 <li key={i} className={i === telemetryLog.length - 1 ? 'new-log' : ''}>{log}</li>
               ))}
             </ul>
          </div>
        </aside>

        {/* CENTER COLUMN: Main HUD view (Mechanical sliding transitions) */}
        <section className="panel center-panel">
           
           {/* Mechanical wipe transition wrapper */}
           <div className="view-container">
             
             {/* View 1: Status */}
             <div className={`view-pane ${activePanel === 'status' ? 'active' : ''}`}>
                <div className="hero-countdown">
                   <div className="countdown-label">LAUNCH WINDOW COMPRESSION</div>
                   <div className={`countdown-clock ${countdown < 30 ? 'critical' : ''}`}>
                     {formatTime(countdown)}
                   </div>
                </div>

                <div className="data-readouts">
                  <div className="readout">
                    <span className="label">CORE TEMP</span>
                    <span className="value">{sysTemp.toFixed(1)} <small>K</small></span>
                    <div className="bar-graph"><div className="fill" style={{ width: `${(sysTemp/5000)*100}%` }}></div></div>
                  </div>
                  <div className="readout">
                    <span className="label">PRESSURE</span>
                    <span className="value">{pressure} <small>ATM</small></span>
                    <div className="bar-graph"><div className="fill" style={{ width: `${(pressure/20)*100}%` }}></div></div>
                  </div>
                </div>
             </div>

             {/* View 2: Tactical Radar */}
             <div className={`view-pane ${activePanel === 'tactical' ? 'active' : ''}`}>
                <div className="radar-container">
                  <div className="radar-grid"></div>
                  <div className="radar-sweep"></div>
                  {/* Blips */}
                  <div className="blip b1"></div>
                  <div className="blip b2"></div>
                  <div className="blip b3 friendly"></div>
                </div>
                <div className="radar-data">
                  SECTOR: NGC-4594 | TRAJECTORY: {orbitTraj}% ALIGNED
                </div>
             </div>

             {/* View 3: Payload Focus */}
             <div className={`view-pane ${activePanel === 'payload' ? 'active' : ''}`}>
                <div className="payload-wireframe">
                   {/* CSS pure geometric structural drawing */}
                   <div className="structure hull"></div>
                   <div className="structure engine"></div>
                   <div className="structure capsule"></div>
                </div>
                <div className="payload-stats">
                  <div>MASS: 4.2M KG</div>
                  <div>INTEGRITY: 100%</div>
                  <div>SHIELD: STANDBY</div>
                </div>
             </div>

           </div>
        </section>

        {/* RIGHT COLUMN: Secondary Info & Action */}
        <aside className="panel right-panel">
          <div className="panel-header">AUTHORIZATION</div>
          
          <div className="auth-module">
            <div className="auth-ring">
              <div className="ring-inner rotate-cw"></div>
              <div className="ring-outer rotate-ccw"></div>
              <span className="auth-text">AWAITING SEQUENCE</span>
            </div>
          </div>

          <div className="sys-warnings">
            {sysTemp > 3405 && <div className="alert-msg warning">THERMAL SPIKE DETECTED</div>}
            {countdown < 60 && <div className="alert-msg critical">T-MINUS 1 MINUTE MARK</div>}
            {orbitTraj === 100 && <div className="alert-msg success">TRAJECTORY LOCKED</div>}
          </div>

          <button className="launch-execute-btn" disabled={countdown > 0}>
             {countdown > 0 ? 'LOCKED' : 'EXECUTE'}
          </button>

        </aside>

      </main>

      {/* Decorative corners */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>

      <style>{`
        :root {
          --hud-bg: #030508;
          --hud-panel: rgba(10, 15, 25, 0.7);
          --hud-cyan: #00F0FF;
          --hud-cyan-dim: rgba(0, 240, 255, 0.3);
          --hud-red: #FF2A2A;
          --hud-green: #00FF66;
          --hud-text: #E0F7FA;
          
          --font-data: 'Share Tech Mono', monospace;
          --font-display: 'Teko', sans-serif;
        }

        .launch-container {
          min-height: 100vh;
          width: 100vw;
          background-color: var(--hud-bg);
          background-image: 
            radial-gradient(circle at center, rgba(0,240,255,0.03) 0%, transparent 60%);
          color: var(--hud-text);
          font-family: var(--font-data);
          position: relative;
          overflow: hidden;
          padding: 2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* --- VFX Overlays --- */
        .scanlines {
          position: absolute; inset: 0; z-index: 100;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.1) 50%,
            rgba(0,0,0,0.1)
          );
          background-size: 100% 4px;
          pointer-events: none;
        }

        .flicker-overlay {
          position: absolute; inset: 0; z-index: 101;
          background: rgba(0,240,255,0.02);
          pointer-events: none;
          animation: crt-flicker 0.15s infinite;
        }

        @keyframes crt-flicker {
          0% { opacity: 0.9; } 50% { opacity: 1; } 100% { opacity: 0.95; }
        }

        .vignette {
          position: absolute; inset: 0; z-index: 99;
          background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
        }

        /* Decorative Corners */
        .corner {
          position: absolute; width: 30px; height: 30px;
          border: 2px solid var(--hud-cyan-dim); z-index: 10;
        }
        .top-left { top: 1rem; left: 1rem; border-right: none; border-bottom: none; }
        .top-right { top: 1rem; right: 1rem; border-left: none; border-bottom: none; }
        .bottom-left { bottom: 1rem; left: 1rem; border-right: none; border-top: none; }
        .bottom-right { bottom: 1rem; right: 1rem; border-left: none; border-top: none; }

        /* --- Header --- */
        .launch-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          border-bottom: 2px solid var(--hud-cyan-dim);
          padding-bottom: 1rem; margin-bottom: 2rem; z-index: 10;
        }

        .brand {
          font-family: var(--font-display);
          font-size: 2.5rem; line-height: 1;
          letter-spacing: 2px;
          color: var(--hud-cyan);
          text-shadow: 0 0 10px var(--hud-cyan);
        }
        .logo-icon { display: inline-block; transform: rotate(90deg); margin-right: 5px; }
        .version { font-family: var(--font-data); font-size: 0.8rem; color: rgba(255,255,255,0.5); letter-spacing: 1px;}

        .status-indicators { display: flex; gap: 1.5rem; font-size: 0.8rem; letter-spacing: 1px; }
        .indicator { display: flex; align-items: center; gap: 6px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .pulse-cyan { background: var(--hud-cyan); box-shadow: 0 0 8px var(--hud-cyan); animation: pulse 2s infinite; }
        .pulse-red { background: var(--hud-red); box-shadow: 0 0 8px var(--hud-red); }

        @keyframes pulse { 50% { opacity: 0.4; } }

        /* --- Main Grid Layout --- */
        .launch-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 280px 1fr 300px;
          gap: 2rem;
          z-index: 10;
        }

        @media (max-width: 1024px) {
           .launch-grid { grid-template-columns: 1fr; }
        }

        /* --- Generic Panels --- */
        .panel {
          background: var(--hud-panel);
          border: 1px solid rgba(0,240,255,0.15);
          backdrop-filter: blur(10px);
          position: relative;
          display: flex; flex-direction: column;
        }
        
        .panel::before { /* Corner accent */
          content: ''; position: absolute; top: -1px; left: -1px;
          width: 15px; height: 15px; border-top: 2px solid var(--hud-cyan); border-left: 2px solid var(--hud-cyan);
        }

        .panel-header {
          background: rgba(0, 240, 255, 0.05);
          padding: 8px 15px;
          font-size: 0.8rem; letter-spacing: 2px;
          color: var(--hud-cyan); border-bottom: 1px solid rgba(0,240,255,0.2);
        }

        /* --- Left Column: Controls --- */
        .nav-controls { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
        .nav-btn {
          background: transparent; border: 1px solid rgba(0,240,255,0.2); color: var(--hud-text);
          font-family: var(--font-data); text-align: left; padding: 1rem;
          cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden;
        }
        .nav-btn:hover { background: rgba(0,240,255,0.05); border-color: var(--hud-cyan-dim); }
        .nav-btn.active {
          background: rgba(0,240,255,0.15); border-color: var(--hud-cyan); color: #FFF;
          box-shadow: inset 4px 0 0 var(--hud-cyan);
        }

        .telemetry-box {
          margin-top: auto; border-top: 1px solid rgba(0,240,255,0.2); height: 200px; display: flex; flex-direction: column;
        }
        .box-label { padding: 8px 15px; font-size: 0.7rem; color: rgba(255,255,255,0.4); }
        .log-list { list-style: none; padding: 0 15px 15px; margin: 0; font-size: 0.7rem; line-height: 1.6; overflow: hidden; flex: 1; }
        .log-list li { color: rgba(255,255,255,0.6); margin-bottom: 4px; border-left: 1px solid transparent; padding-left: 6px; }
        .log-list li.new-log { 
          color: var(--hud-cyan); border-color: var(--hud-cyan); 
          animation: flashText 0.5s ease-out;
        }
        
        @keyframes flashText { 0% { background: var(--hud-cyan); color: #000; } 100% { background: transparent; } }

        /* --- Center Column: Views --- */
        .center-panel { border-color: rgba(0,240,255,0.3); overflow: hidden; }
        .view-container { position: relative; width: 100%; height: 100%; }

        .view-pane {
          position: absolute; inset: 0; padding: 3rem;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none;
          transform: translateY(20px) scale(0.98);
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        /* The "Mechanical Slide" reveal */
        .view-pane.active {
          opacity: 1; pointer-events: auto; transform: translateY(0) scale(1);
          transition-delay: 0.1s;
        }

        /* Hero Countdown */
        .hero-countdown { text-align: center; margin-bottom: 4rem; }
        .countdown-label { letter-spacing: 4px; font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-bottom: 1rem; }
        .countdown-clock {
          font-family: var(--font-display); font-size: clamp(6rem, 12vw, 10rem); line-height: 0.8;
          color: var(--hud-cyan); text-shadow: 0 0 30px rgba(0,240,255,0.4);
          transition: color 0.3s;
        }
        .countdown-clock.critical { color: var(--hud-red); text-shadow: 0 0 30px rgba(255,42,42,0.4); animation: shake 0.5s infinite; }

        @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-2px); } 75% { transform: translateX(2px); } }

        .data-readouts { display: flex; gap: 3rem; width: 100%; max-width: 600px; justify-content: center;}
        .readout { flex: 1; }
        .readout .label { display: block; font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 5px; }
        .readout .value { display: block; font-size: 2rem; font-family: var(--font-display); line-height: 1; margin-bottom: 10px; }
        .readout .value small { font-size: 1rem; color: var(--hud-cyan); }
        .bar-graph { height: 4px; background: rgba(255,255,255,0.1); width: 100%; position: relative; }
        .bar-graph .fill { height: 100%; background: var(--hud-cyan); box-shadow: 0 0 10px var(--hud-cyan); transition: width 0.3s; }

        /* Tactical Radar View */
        .radar-container {
          width: 350px; height: 350px; border-radius: 50%; position: relative;
          border: 2px solid var(--hud-cyan-dim); background: radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 60%);
          overflow: hidden; margin-bottom: 2rem; box-shadow: 0 0 40px rgba(0,240,255,0.1);
        }
        .radar-grid {
          position: absolute; inset: 0; rounded: 50%;
          background-image: 
            linear-gradient(rgba(0,240,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.2) 1px, transparent 1px);
          background-size: 35px 35px; background-position: center; border-radius: 50%;
        }
        .radar-container::after { /* Crosshair */
          content: ''; position: absolute; inset: 10%; border-radius: 50%; border: 1px dashed rgba(0,240,255,0.3); pointer-events: none;
        }
        .radar-sweep {
          position: absolute; inset: 0;
          background: conic-gradient(from 0deg, transparent 70%, rgba(0, 240, 255, 0.5) 100%);
          border-radius: 50%; animation: spin 4s linear infinite; transform-origin: center;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }

        .blip { position: absolute; width: 6px; height: 6px; background: var(--hud-red); border-radius: 50%; box-shadow: 0 0 8px var(--hud-red); }
        .b1 { top: 30%; left: 60%; animation: blip-fade 4s infinite 1s; opacity: 0; }
        .b2 { top: 70%; left: 40%; animation: blip-fade 4s infinite 2.5s; opacity: 0; }
        .friendly { background: var(--hud-green); box-shadow: 0 0 8px var(--hud-green); }
        .b3 { top: 40%; left: 30%; animation: blip-fade 4s infinite 0.5s; opacity: 0; }

        @keyframes blip-fade { 0% { opacity: 1; transform: scale(1.5); } 20% { opacity: 0.5; transform: scale(1); } 100% { opacity: 0; } }

        .radar-data { font-size: 0.9rem; letter-spacing: 2px; }

        /* Payload View */
        .payload-wireframe {
          width: 300px; height: 400px; border: 1px solid rgba(0,240,255,0.1);
          position: relative; margin-bottom: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 20px;
        }
        .payload-wireframe::after { content: ''; position: absolute; width: 1px; height: 100%; background: rgba(0,240,255,0.2); left: 50%; z-index: 0; }

        .structure { border: 1px solid var(--hud-cyan); position: relative; z-index: 1; background: rgba(0,0,0,0.5); }
        .capsule { width: 60px; height: 80px; border-bottom: none; clip-path: polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%); }
        .hull { width: 100px; height: 150px; }
        .engine { width: 80px; height: 60px; border-top: none; clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%); border-bottom: 2px solid var(--hud-red); box-shadow: 0 10px 20px rgba(255,42,42,0.4); }
        
        .payload-stats { text-align: center; gap: 10px; display: flex; flex-direction: column; font-size: 0.8rem; color: rgba(255,255,255,0.7); letter-spacing: 1px;}

        /* --- Right Column: Auth --- */
        .auth-module { padding: 3rem 0; display: flex; justify-content: center; border-bottom: 1px solid rgba(0,240,255,0.1); }
        .auth-ring { width: 120px; height: 120px; position: relative; display: flex; align-items: center; justify-content: center;}
        .ring-inner, .ring-outer { position: absolute; border-radius: 50%; border: 1px solid transparent; }
        .ring-inner { inset: 10px; border-top-color: var(--hud-cyan); border-bottom-color: var(--hud-cyan); }
        .ring-outer { inset: 0; border-left-color: rgba(255,255,255,0.3); border-right-color: rgba(255,255,255,0.3); border-style: dashed; }
        
        .rotate-cw { animation: spin 8s linear infinite; }
        .rotate-ccw { animation: spin-rev 12s linear infinite; }
        @keyframes spin-rev { 100% { transform: rotate(-360deg); } }

        .auth-text { font-size: 0.6rem; text-align: center; width: 60px; line-height: 1.2; letter-spacing: 1px;}

        .sys-warnings { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 10px; }
        .alert-msg { padding: 10px; font-size: 0.75rem; border-left: 3px solid; background: rgba(255,255,255,0.05); }
        .alert-msg.warning { border-color: #FFAA00; color: #FFAA00; }
        .alert-msg.critical { border-color: var(--hud-red); color: var(--hud-red); background: rgba(255,42,42,0.1); animation: blink 1s infinite alternate; }
        .alert-msg.success { border-color: var(--hud-green); color: var(--hud-green); }

        .launch-execute-btn {
          margin: 1.5rem; padding: 1.2rem; background: rgba(255,42,42,0.1); border: 1px solid var(--hud-red);
          color: var(--hud-red); font-family: var(--font-display); font-size: 1.5rem; letter-spacing: 4px;
          cursor: pointer; transition: all 0.3s;
        }
        .launch-execute-btn:not(:disabled):hover {
          background: var(--hud-red); color: #000; box-shadow: 0 0 20px var(--hud-red);
        }
        .launch-execute-btn:disabled {
          background: rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.2); cursor: not-allowed;
        }

      `}</style>
    </div>
  );
};

export default GalacticLaunchSystemDemoGemini;
