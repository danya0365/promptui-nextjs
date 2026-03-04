'use client';

import React, { useEffect, useState } from 'react';

// Predictive Analysis Holographic Dashboard - Gemini 3.1 Pro Implementation
// Floating crime-analysis style dashboard with volumetric lighting, radar sweep, and flowing data lines.

interface SubjectData {
  id: string;
  name: string;
  threatLevel: number;
  anomalyScore: number;
  status: 'MONITORING' | 'ESCALATED' | 'CRITICAL';
  coordinates: [number, number];
}

export const PredictiveAnalysisHologramDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  
  // Track scroll for spatial depth shift
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subjects: SubjectData[] = [
    { id: 'TGT-A-01', name: 'NEXUS_OPERATIVE', threatLevel: 89, anomalyScore: 94, status: 'CRITICAL', coordinates: [45.1, -12.4] },
    { id: 'TGT-B-12', name: 'UNKNOWN_PROXY', threatLevel: 45, anomalyScore: 62, status: 'MONITORING', coordinates: [12.8, 88.2] },
    { id: 'TGT-C-44', name: 'ROGUE_AI_INSTANCE', threatLevel: 75, anomalyScore: 88, status: 'ESCALATED', coordinates: [-34.2, 110.5] },
  ];

  // Base depth perspective shift
  const perspectiveY = scrollY * -0.5;

  return (
    <div className={`predictive-viewport ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap');

        :root {
          --p-bg-deep: #020617;
          --p-bg-light: #0f172a;
          --p-cyan: #00f0ff;
          --p-cyan-dim: rgba(0, 240, 255, 0.2);
          --p-cyan-bright: rgba(0, 240, 255, 0.8);
          --p-red: #ff3366;
          --p-text: #e2e8f0;
          
          --font-predictive: 'Rajdhani', sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--p-bg-deep);
          color: var(--p-text);
          font-family: var(--font-predictive);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Environment: Deep Blue-Black & Volumetric Light
           --------------------------------- */
        .predictive-viewport {
          min-height: 150vh; /* Extra height to demonstrate scroll depth */
          width: 100vw;
          padding: 8rem 4rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at 50% 30%, var(--p-bg-light) 0%, var(--p-bg-deep) 80%);
          perspective: 1500px;
        }

        /* Radar Sweep Effect (Background Overlay) */
        .radar-sweep {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 150vw; height: 150vw;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 70%, var(--p-cyan-dim) 100%);
          animation: radarSpin 8s linear infinite;
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes radarSpin {
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Volumetric Light Beams */
        .volumetric-light {
          position: fixed;
          top: -20%; left: 0;
          width: 100%; height: 100%;
          background: 
            linear-gradient(135deg, rgba(0, 240, 255, 0.03) 0%, transparent 40%),
            linear-gradient(225deg, rgba(0, 240, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        /* Grid Floor Perspective */
        .grid-floor {
          position: fixed;
          bottom: -20vh; left: 0;
          width: 100%; height: 50vh;
          background-image: 
            linear-gradient(var(--p-cyan-dim) 1px, transparent 1px),
            linear-gradient(90deg, var(--p-cyan-dim) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(500px) rotateX(75deg);
          opacity: 0.3;
          z-index: 0;
          pointer-events: none;
        }

        /* ------------------------------------
           Floating 3D Dashboard Grid
           ------------------------------------ */
        .dashboard-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 4rem;
          width: 100%;
          max-width: 1000px;
          
          /* The Scroll Spatial Depth Effect */
          transform-style: preserve-3d;
          transition: transform 0.1s linear;
        }

        /* ---------------------------------
           Transparent Edge-Lit Cards
           --------------------------------- */
        .predictive-card {
          position: relative;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 2.5rem;
          cursor: pointer;
          
          /* Edge-lit frame effect */
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-left: 3px solid var(--p-cyan); /* Highlight edge */
          box-shadow: 
            0 10px 40px rgba(0,0,0,0.6),
            inset 20px 0 50px -20px var(--p-cyan-dim);
            
          /* 3D Float Animation */
          transform: translateZ(0);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          
          /* Initial mounting fade */
          opacity: 0;
        }

        .mounted .predictive-card:nth-child(1) { animation: cardEnter 1s forwards 0.1s; }
        .mounted .predictive-card:nth-child(2) { animation: cardEnter 1s forwards 0.3s; }
        .mounted .predictive-card:nth-child(3) { animation: cardEnter 1s forwards 0.5s; }

        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(50px) translateZ(-100px); }
          to { opacity: 1; transform: translateY(0) translateZ(0); }
        }

        /* Overlay Light Lines (Connecting effect within grid context) */
        .dashboard-container::before {
          content: '';
          position: absolute;
          top: 50px; bottom: 50px;
          left: -40px;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--p-cyan), transparent);
          z-index: 5;
          opacity: 0.5;
        }
        
        /* Data stream moving along the vertical line */
        .dashboard-container::after {
          content: '';
          position: absolute;
          top: 0; left: -42px;
          width: 6px; height: 100px;
          background: var(--p-cyan);
          box-shadow: 0 0 15px var(--p-cyan);
          border-radius: 4px;
          z-index: 6;
          animation: dataStream 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes dataStream {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* Hover: Reveal Predictive Overlays */
        .predictive-card:hover {
          background: rgba(15, 23, 42, 0.6);
          border-color: var(--p-cyan-bright);
          box-shadow: 
            0 20px 50px rgba(0,0,0,0.8),
            inset 30px 0 60px -20px var(--p-cyan-dim),
            0 0 20px rgba(0, 240, 255, 0.2);
          transform: translateX(15px) translateZ(30px);
        }

        /* Connecting horizontal line on hover */
        .predictive-card::before {
          content: '';
          position: absolute;
          top: 50%; left: -55px;
          width: 55px; height: 1px;
          background: var(--p-cyan);
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.4s;
          box-shadow: 0 0 10px var(--p-cyan);
        }
        .predictive-card:hover::before { transform: scaleX(1); }

        /* ---------------------------------
           Card Internal Typography & Layout
           --------------------------------- */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 1rem;
        }

        .subject-id {
          font-size: 1rem;
          letter-spacing: 3px;
          color: var(--p-cyan);
          margin-bottom: 0.2rem;
        }

        .subject-name {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          margin: 0;
        }

        .status-badge {
          padding: 0.3rem 1rem;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 2px;
          border: 1px solid currentColor;
          background: rgba(0,0,0,0.3);
        }
        .status-CRITICAL { color: var(--p-red); box-shadow: inset 0 0 10px rgba(255,51,102,0.2); animation: pulseRed 2s infinite; }
        .status-ESCALATED { color: #f59e0b; }
        .status-MONITORING { color: var(--p-cyan); }

        @keyframes pulseRed { 50% { box-shadow: inset 0 0 15px rgba(255,51,102,0.5), 0 0 10px rgba(255,51,102,0.3); } }

        /* Floating Metric Blocks */
        .metrics-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .metric-block {
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 1rem;
          flex: 1;
          /* Slight floating depth */
          transform: translateZ(20px);
          transition: transform 0.3s;
        }
        .predictive-card:hover .metric-block { transform: translateZ(40px); background: linear-gradient(180deg, rgba(0,240,255,0.05) 0%, transparent 100%); border-top-color: var(--p-cyan-dim); }

        .m-lbl { font-size: 0.8rem; letter-spacing: 1px; color: rgba(255,255,255,0.5); margin-bottom: 0.5rem; }
        .m-val { font-size: 2.2rem; font-weight: 700; color: #fff; }

        /* Animated Graph Overlays (CSS Simulation) */
        .graph-container {
          height: 60px;
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: flex-end;
          gap: 4px;
          padding-bottom: 4px;
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .predictive-card:hover .graph-container { opacity: 1; }

        .bar {
          flex: 1;
          background: var(--p-cyan-dim);
          border-top: 2px solid var(--p-cyan);
          transition: height 1s ease;
        }

        /* Hover Predictive Overlay (Fades in on hover) */
        .predictive-overlay {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%) translateX(20px);
          opacity: 0;
          color: var(--p-cyan);
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-align: right;
          transition: all 0.4s;
          pointer-events: none;
        }
        .predictive-card:hover .predictive-overlay {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ---------------------------------
           Active Expansion (Projected Data Layer)
           --------------------------------- */
        .dashboard-container.has-active .predictive-card:not(.active) {
          opacity: 0.1;
          pointer-events: none;
          transform: translateY(100px) translateZ(-300px);
        }

        .predictive-card.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) !important;
          width: 85vw; max-width: 1200px;
          z-index: 100;
          cursor: default;
          background: rgba(10, 15, 25, 0.9);
          border: 1px solid var(--p-cyan);
          box-shadow: 
            0 0 100px rgba(0,0,0,0.9),
            0 0 50px var(--p-cyan-dim),
            inset 0 0 80px var(--p-cyan-dim);
        }

        .predictive-card.active::before { display: none; }

        /* Expandable Stacked Sub-Panels */
        .expanded-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
          opacity: 0;
          animation: fadeSlightlyRight 0.5s ease 0.3s forwards;
        }

        @keyframes fadeSlightlyRight { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }

        .sub-panel {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .sub-panel-title {
          font-size: 1rem; letter-spacing: 2px; color: var(--p-cyan);
          margin-bottom: 1rem; border-bottom: 1px solid var(--p-cyan-dim); padding-bottom: 0.5rem;
        }

        .code-block {
          font-family: monospace; font-size: 0.85rem; color: rgba(255,255,255,0.6);
          line-height: 1.5;
        }

        .btn-close {
          position: absolute;
          top: 2rem; right: 2rem;
          background: transparent;
          border: 1px solid var(--p-cyan);
          color: var(--p-cyan);
          font-family: var(--font-predictive);
          font-size: 1rem; font-weight: 700; letter-spacing: 2px;
          padding: 0.5rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-close:hover { background: var(--p-cyan); color: #000; box-shadow: 0 0 20px var(--p-cyan); }
        
        /* Tactical Target Map */
        .target-map {
          width: 100%; height: 200px;
          border: 1px solid var(--p-cyan-dim);
          background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,240,255,0.02) 10px, rgba(0,240,255,0.02) 20px);
          position: relative;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1rem;
        }
        .target-ping {
          width: 20px; height: 20px; border-radius: 50%;
          background: var(--p-red); box-shadow: 0 0 15px var(--p-red);
          position: relative;
        }
        .target-ping::after {
          content: ''; position: absolute; inset: -10px; border-radius: 50%; border: 1px solid var(--p-red);
          animation: pingOut 2s infinite;
        }
        @keyframes pingOut { 0% { transform: scale(0.5); opacity: 1; } 100% { transform: scale(3); opacity: 0; } }

      `}</style>
      
      <div className="radar-sweep" />
      <div className="volumetric-light" />
      <div className="grid-floor" />

      <div 
        className={`dashboard-container ${activeSubject ? 'has-active' : ''}`}
        style={!activeSubject ? { transform: `translateY(${perspectiveY}px)`} : undefined}
      >
        {subjects.map((subject, index) => {
          const isActive = activeSubject === subject.id;
          // Generate random heights for the fake graph
          const graphHeights = mounted ? Array.from({length: 12}, () => 20 + Math.random() * 80) : Array(12).fill(0);

          return (
            <div 
              key={subject.id} 
              className={`predictive-card ${isActive ? 'active' : ''}`}
              onClick={() => { if (!isActive) setActiveSubject(subject.id); }}
            >
              {isActive && (
                <button className="btn-close" onClick={(e) => { e.stopPropagation(); setActiveSubject(null); }}>
                  [ CLOSE_LAYER ]
                </button>
              )}

              <div className="card-header">
                <div>
                  <div className="subject-id">{subject.id}</div>
                  <h2 className="subject-name">{subject.name}</h2>
                </div>
                <div className={`status-badge status-${subject.status}`}>{subject.status}</div>
              </div>

              <div className="metrics-row">
                <div className="metric-block">
                  <div className="m-lbl">THREAT_LVL</div>
                  <div className="m-val" style={{ color: subject.threatLevel > 80 ? 'var(--p-red)' : '#fff' }}>
                    {subject.threatLevel}%
                  </div>
                </div>
                <div className="metric-block">
                  <div className="m-lbl">ANOMALY_SCORE</div>
                  <div className="m-val">{subject.anomalyScore}</div>
                </div>
                <div className="metric-block">
                  <div className="m-lbl">COORDS (X,Y)</div>
                  <div className="m-val" style={{ fontSize: '1.4rem', paddingTop: '0.6rem' }}>
                    {subject.coordinates[0]}, {subject.coordinates[1]}
                  </div>
                </div>
              </div>

              <div className="graph-container">
                {graphHeights.map((h, i) => (
                  <div key={i} className="bar" style={{ height: `${isActive ? h : (h * 0.6)}%` }} />
                ))}
              </div>

              <div className="predictive-overlay">
                <div>&gt; TRAJECTORY: UNSTABLE</div>
                <div>&gt; PROBABILITY: ALIGNING</div>
                <div style={{ color: '#fff', marginTop: '0.2rem' }}>&gt; CLICK_TO_EXPAND</div>
              </div>

              {isActive && (
                <div className="expanded-grid">
                  <div>
                    <div className="sub-panel">
                      <div className="sub-panel-title">PREDICTIVE_BEHAVIORAL_MODEL</div>
                      <div className="code-block">
                        Model generation completed...<br/>
                        Analyzing temporal vectors...<br/>
                        <span style={{color: 'var(--p-cyan)'}}>Warning: Subject diverging from standard behavioral parameters.</span><br/>
                        <br/>
                        Deviation timeline: 48hrs prior.<br/>
                        Projected critical mass: 04:00:00.<br/>
                        Recommendation: Immediate isolation of network nodes in sector 4.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sub-panel">
                      <div className="sub-panel-title">LIVE_TRACKING_FEED</div>
                      <div className="target-map">
                        <div className="target-ping" />
                        <div style={{ position: 'absolute', bottom: 10, right: 10, fontSize: '0.8rem', color: 'var(--p-cyan)' }}>
                          LOCK: CONFIRMED
                        </div>
                      </div>
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

export default PredictiveAnalysisHologramDemoGemini;
