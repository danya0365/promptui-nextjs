/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  CYBERPUNK NEON WIDGETS (Gemini Version)                  ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + SVG Animation + Cyberpunk Aesthetic
 */

'use client';

import { useState } from 'react';

export function NeonDashboardWidgetsDemoGemini() {
  const [activeTab, setActiveTab] = useState('system');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        /* ── Variables ── */
        .cyber-dashboard {
          --c-bg: #050510;
          --c-grid: rgba(0, 255, 255, 0.05);
          --c-cyan: #00f3ff;
          --c-magenta: #ff00ff;
          --c-yellow: #fcee0a;
          --c-glass: rgba(10, 10, 20, 0.7);
          --c-border: rgba(0, 243, 255, 0.2);
          
          font-family: 'Rajdhani', sans-serif;
          background-color: var(--c-bg);
          background-image: 
            linear-gradient(var(--c-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--c-grid) 1px, transparent 1px);
          background-size: 40px 40px;
          color: #e0e0e0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow: hidden;
          position: relative;
        }

        .cyber-container {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          perspective: 1000px;
        }

        /* ── Glassmorphism Panel ── */
        .cyber-card {
          background: var(--c-glass);
          border: 1px solid var(--c-border);
          box-shadow: 
            0 0 20px rgba(0, 243, 255, 0.05),
            inset 0 0 20px rgba(0, 243, 255, 0.02);
          backdrop-filter: blur(10px);
          padding: 24px;
          position: relative;
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% calc(100% - 20px), 
            calc(100% - 20px) 100%, 
            0 100%
          );
          transition: all 0.3s ease;
        }
        .cyber-card:hover {
          border-color: var(--c-cyan);
          box-shadow: 0 0 30px rgba(0, 243, 255, 0.15);
          transform: translateY(-5px);
        }
        .cyber-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100px; height: 2px;
          background: var(--c-cyan);
          box-shadow: 0 0 10px var(--c-cyan);
        }
        .cyber-card::after {
          content: 'SYSTEM_READY';
          position: absolute;
          bottom: 5px; right: 25px;
          font-family: 'Orbitron', sans-serif;
          font-size: 8px;
          color: var(--c-cyan);
          opacity: 0.5;
          letter-spacing: 2px;
        }

        .cyber-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 10px;
        }
        .cyber-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
        }
        .cyber-dots {
          display: flex;
          gap: 4px;
        }
        .cyber-dot { width: 4px; height: 4px; background: var(--c-border); }
        .cyber-dot.active { background: var(--c-cyan); box-shadow: 0 0 5px var(--c-cyan); }

        /* ── Radial Progress ── */
        .cyber-radial-box {
          position: relative;
          width: 160px;
          height: 160px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cyber-radial-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }
        .cyber-radial-bg {
          fill: none;
          stroke: rgba(255,255,255,0.05);
          stroke-width: 8;
        }
        .cyber-radial-progress {
          fill: none;
          stroke: var(--c-cyan);
          stroke-width: 8;
          stroke-dasharray: 440;
          stroke-dashoffset: 440;
          stroke-linecap: round;
          filter: drop-shadow(0 0 5px var(--c-cyan));
          animation: fillRadial 2s cubic-bezier(0.1, 0.7, 1.0, 0.1) forwards;
        }
        @keyframes fillRadial { to { stroke-dashoffset: 110; } } /* 75% */

        .cyber-radial-text {
          position: absolute;
          text-align: center;
        }
        .cyber-radial-value {
          font-family: 'Orbitron', sans-serif;
          font-size: 36px;
          font-weight: 900;
          color: white;
        }
        .cyber-radial-label {
          font-size: 14px;
          color: var(--c-cyan);
          letter-spacing: 1px;
        }

        /* ── Line Chart ── */
        .cyber-chart-container {
          height: 120px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        .cyber-line-path {
          fill: none;
          stroke: var(--c-magenta);
          stroke-width: 3;
          stroke-linejoin: round;
          stroke-linecap: round;
          filter: drop-shadow(0 0 8px var(--c-magenta));
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawChart 3s ease-out forwards;
        }
        .cyber-area-fill {
          fill: url(#cyberGradient);
          opacity: 0.3;
          stroke: none;
        }
        @keyframes drawChart { to { stroke-dashoffset: 0; } }

        /* ── Stat Rows ── */
        .cyber-stat-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cyber-stat-row:last-child { border-bottom: none; }
        .cyber-stat-label { font-size: 16px; color: var(--c-text-mute); }
        .cyber-stat-val { 
          font-family: 'Orbitron', sans-serif; 
          font-size: 18px; 
          color: var(--c-yellow);
          text-shadow: 0 0 5px rgba(252, 238, 10, 0.5);
        }

        /* ── Notification Badge ── */
        .cyber-notif-btn {
          position: relative;
          width: 40px; height: 40px;
          border: 1px solid var(--c-border);
          background: rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          cursor: pointer;
          transition: 0.2s;
        }
        .cyber-notif-btn:hover { background: rgba(0, 243, 255, 0.1); border-color: var(--c-cyan); }
        .cyber-badge {
          position: absolute;
          top: -2px; right: -2px;
          width: 10px; height: 10px;
          background: var(--c-magenta);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--c-magenta);
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 0, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 0, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 0, 255, 0); }
        }

        /* ── Glitch Text Effect ── */
        .cyber-glitch {
          position: relative;
        }
        .cyber-glitch::before, .cyber-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
        }
        .cyber-glitch::before {
          left: 2px; text-shadow: -1px 0 var(--c-magenta); clip-path: inset(44% 0 61% 0);
          animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
        }
        .cyber-glitch::after {
          left: -2px; text-shadow: -1px 0 var(--c-cyan); clip-path: inset(55% 0 15% 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 50% 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          100% { clip-path: inset(10% 0 70% 0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); }
          20% { clip-path: inset(80% 0 5% 0); }
          100% { clip-path: inset(30% 0 20% 0); }
        }

        /* ── Tabs ── */
        .cyber-tabs { display: flex; gap: 2px; margin-bottom: 20px; }
        .cyber-tab {
          flex: 1;
          padding: 8px;
          background: rgba(255,255,255,0.05);
          border: none;
          color: rgba(255,255,255,0.5);
          font-family: 'Orbitron', sans-serif;
          font-size: 12px;
          cursor: pointer;
          clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
          transition: 0.2s;
        }
        .cyber-tab.active {
          background: rgba(0, 243, 255, 0.2);
          color: var(--c-cyan);
          border-bottom: 2px solid var(--c-cyan);
        }
      `}</style>

      <div className="cyber-dashboard">
        <div className="cyber-container">
          
          {/* Widget 1: CPU Load */}
          <div className="cyber-card">
            <div className="cyber-header">
              <span className="cyber-title cyber-glitch" data-text="CPU_CORE">CPU_CORE</span>
              <div className="cyber-dots">
                <div className="cyber-dot active"></div>
                <div className="cyber-dot"></div>
                <div className="cyber-dot"></div>
              </div>
            </div>
            
            <div className="cyber-radial-box">
              <svg className="cyber-radial-svg" viewBox="0 0 160 160">
                <circle className="cyber-radial-bg" cx="80" cy="80" r="70" />
                <circle className="cyber-radial-progress" cx="80" cy="80" r="70" />
              </svg>
              <div className="cyber-radial-text">
                <div className="cyber-radial-value">75%</div>
                <div className="cyber-radial-label">LOAD</div>
              </div>
            </div>
            
            <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--c-cyan)', fontSize: '14px' }}>
              TEMP: 65°C | FAN: 1200 RPM
            </div>
          </div>

          {/* Widget 2: Network Traffic */}
          <div className="cyber-card">
            <div className="cyber-header">
              <span className="cyber-title">NET_TRAFFIC</span>
              <div className="cyber-notif-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <div className="cyber-badge"></div>
              </div>
            </div>

            <div className="cyber-tabs">
              <button className={`cyber-tab ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>SYSTEM</button>
              <button className={`cyber-tab ${activeTab === 'ext' ? 'active' : ''}`} onClick={() => setActiveTab('ext')}>EXT_NET</button>
            </div>

            <div className="cyber-chart-container">
              <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cyberGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ff00ff" />
                    <stop offset="100%" stopColor="#ff00ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="cyber-area-fill" d="M0,100 L0,80 L50,50 L100,70 L150,20 L200,60 L250,40 L300,80 L300,100 Z" />
                <path className="cyber-line-path" d="M0,80 L50,50 L100,70 L150,20 L200,60 L250,40 L300,80" />
              </svg>
            </div>

            <div className="cyber-stat-row">
              <span className="cyber-stat-label">UPLOAD</span>
              <span className="cyber-stat-val">45.2 MB/s</span>
            </div>
            <div className="cyber-stat-row">
              <span className="cyber-stat-label">DOWNLOAD</span>
              <span className="cyber-stat-val">120.5 MB/s</span>
            </div>
          </div>

          {/* Widget 3: System Status */}
          <div className="cyber-card" style={{ borderColor: 'var(--c-magenta)' }}>
            <div className="cyber-header" style={{ borderColor: 'rgba(255,0,255,0.2)' }}>
              <span className="cyber-title" style={{ textShadow: '0 0 10px rgba(255,0,255,0.5)' }}>SECURITY</span>
              <span style={{ color: 'var(--c-green, #0f0)', fontWeight: 'bold' }}>ONLINE</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
              {['FIREWALL', 'PROXY', 'ENCRYPTION'].map((item, i) => (
                <div key={i} style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '10px', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderLeft: '2px solid var(--c-magenta)' 
                }}>
                  <span style={{ fontFamily: 'Orbitron', fontSize: '12px' }}>{item}</span>
                  <div style={{ width: '8px', height: '8px', background: '#0f0', borderRadius: '50%', boxShadow: '0 0 5px #0f0' }}></div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', padding: '10px', background: 'rgba(255,0,255,0.1)', border: '1px solid var(--c-magenta)', fontSize: '12px', color: 'var(--c-magenta)' }}>
              ⚠️ THREAT DISPLAY: NONE
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
