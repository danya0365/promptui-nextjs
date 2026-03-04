'use client';

import React, { useEffect, useRef, useState } from 'react';

// Minority Report Hologram Interface - Gemini 3.1 Pro Implementation
// Futuristic intelligence lab with glass panels, 3D mouse tracking, and luminous outlines.

interface IntelligenceFile {
  id: string;
  subject: string;
  threatLevel: number;
  status: 'ANALYZING' | 'CLEARED' | 'FLAGGED';
  dataPoints: number;
}

export const MinorityReportHologramDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D rotation state
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || activeFileId) return; // Don't rotate if a card is active
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation limits (max 15 degrees)
    const rotateY = (x / (rect.width / 2)) * 15;
    const rotateX = -(y / (rect.height / 2)) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!activeFileId) {
      setRotation({ x: 0, y: 0 });
    }
  };

  const files: IntelligenceFile[] = [
    { id: 'FILE.A.89', subject: 'PROJECT_ORION', threatLevel: 8.5, status: 'FLAGGED', dataPoints: 1240 },
    { id: 'FILE.X.22', subject: 'NEXUS_SYNC', threatLevel: 2.1, status: 'CLEARED', dataPoints: 89 },
    { id: 'FILE.H.01', subject: 'ANOMALY_7G', threatLevel: 5.5, status: 'ANALYZING', dataPoints: 630 },
    { id: 'FILE.K.44', subject: 'ECHO_PROTOCOL', threatLevel: 9.9, status: 'FLAGGED', dataPoints: 9942 }
  ];

  return (
    <div 
      className={`holo-viewport ${mounted ? 'mounted' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

        :root {
          --h-bg: #020813;
          --h-cyan: #64c8ff;
          --h-cyan-glow: rgba(100, 200, 255, 0.4);
          --h-cyan-dim: rgba(100, 200, 255, 0.1);
          --h-white: rgba(255, 255, 255, 0.9);
          --h-text: rgba(255, 255, 255, 0.7);
          
          --font-holo: 'Roboto', sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--h-bg);
          color: var(--h-text);
          font-family: var(--font-holo);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Environment: Light Dust & Navy Fog
           --------------------------------- */
        .holo-viewport {
          min-height: 100vh;
          width: 100vw;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at 50% 50%, #05142b 0%, var(--h-bg) 70%);
          perspective: 1200px; /* Crucial for 3D depth */
        }

        /* Ambient Light Particles */
        .holo-viewport::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(1.5px 1.5px at 10% 20%, var(--h-cyan-glow) 100%, transparent),
            radial-gradient(2px 2px at 30% 40%, rgba(255,255,255,0.2) 100%, transparent),
            radial-gradient(1px 1px at 60% 80%, var(--h-cyan-glow) 100%, transparent),
            radial-gradient(2.5px 2.5px at 80% 30%, rgba(255,255,255,0.1) 100%, transparent);
          background-size: 200px 200px;
          opacity: 0.5;
          animation: floatDust 40s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes floatDust {
          0% { background-position: 0 0; }
          100% { background-position: 400px 400px; }
        }

        /* ---------------------------------
           3D Interactive Grid
           --------------------------------- */
        .holo-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, minmax(320px, 420px));
          gap: 3rem;
          width: 100%;
          max-width: 950px;
          
          /* 3D Rotation from React State */
          transform-style: preserve-3d;
          transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .holo-grid.has-active {
          transform: rotateX(0deg) rotateY(0deg) !important;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ---------------------------------
           Holographic Glass Panels
           --------------------------------- */
        .glass-panel {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 2.5rem;
          border-radius: 20px;
          cursor: pointer;
          
          /* Luminous Borders */
          border: 1px solid rgba(100, 200, 255, 0.3);
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.5),
            inset 0 0 20px var(--h-cyan-dim);
            
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          
          /* Entrance */
          opacity: 0;
          transform: translateZ(-100px);
        }

        .mounted .glass-panel {
          opacity: 1;
          transform: translateZ(0);
        }

        /* Depth Stacking Elements */
        .glass-panel > * {
          transform: translateZ(20px);
          transition: transform 0.4s;
        }

        /* Hover Light Intensity */
        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(100, 200, 255, 0.8);
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.6),
            0 0 30px var(--h-cyan-glow),
            inset 0 0 40px var(--h-cyan-glow);
        }

        .glass-panel:hover > * {
          transform: translateZ(40px);
        }

        /* ---------------------------------
           Card Typography & Minimal Icons
           --------------------------------- */
        .header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(100,200,255,0.2);
          padding-bottom: 1rem;
        }

        .file-id {
          font-size: 0.85rem;
          letter-spacing: 2px;
          color: var(--h-cyan);
          text-transform: uppercase;
        }

        .file-subject {
          font-size: 1.6rem;
          font-weight: 300;
          color: var(--h-white);
          margin-top: 0.5rem;
          letter-spacing: 1px;
        }

        /* Light-line Iconography (SVG CSS simulation) */
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          letter-spacing: 1px;
          padding: 0.3rem 0.8rem;
          border-radius: 30px;
          border: 1px solid;
        }
        
        .status-CLEARED { color: rgba(100,255,150,0.8); border-color: rgba(100,255,150,0.4); }
        .status-ANALYZING { color: var(--h-cyan); border-color: var(--h-cyan-glow); }
        .status-FLAGGED { color: rgba(255,100,100,0.9); border-color: rgba(255,100,100,0.5); box-shadow: 0 0 10px rgba(255,100,100,0.2); }

        .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 8px currentColor;
        }
        .status-ANALYZING .status-dot { animation: pulseDot 1s infinite alternate; }
        @keyframes pulseDot { to { opacity: 0.3; } }

        /* Data Grid */
        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .data-lbl {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.6;
          margin-bottom: 0.4rem;
        }

        .data-val {
          font-size: 1.4rem;
          font-weight: 300;
          color: var(--h-white);
        }

        /* Threat Level Visualizer */
        .threat-bar {
          margin-top: 0.5rem;
          height: 2px;
          background: rgba(255,255,255,0.1);
          width: 100%;
          border-radius: 2px;
          overflow: hidden;
        }
        .threat-fill {
          height: 100%;
          background: var(--h-cyan);
          box-shadow: 0 0 10px var(--h-cyan);
        }
        .status-FLAGGED ~ .threat-bar .threat-fill { background: #ff6464; box-shadow: 0 0 10px #ff6464; }

        /* ---------------------------------
           Immersive Expansion (Active)
           --------------------------------- */
        /* Background blur during focus */
        .holo-grid.has-active .glass-panel:not(.active) {
          opacity: 0;
          pointer-events: none;
          transform: translateZ(-200px) scale(0.9);
          filter: blur(15px);
        }

        .glass-panel.active {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) translateZ(100px) !important; /* Pull forward */
          width: 90vw; max-width: 900px;
          z-index: 100;
          cursor: default;
          background: rgba(10, 20, 35, 0.75);
          border-color: var(--h-cyan);
          box-shadow: 
            0 0 80px rgba(0,0,0,0.8),
            0 0 40px var(--h-cyan-glow),
            inset 0 0 50px var(--h-cyan-glow);
        }

        .glass-panel.active:hover {
          box-shadow: 0 0 80px rgba(0,0,0,0.8), 0 0 40px var(--h-cyan-glow), inset 0 0 50px var(--h-cyan-glow);
        }
        .glass-panel.active > * { transform: translateZ(0); }

        .expanded-content {
          margin-top: 3rem;
          opacity: 0;
          animation: fadeSlightlyUp 0.6s ease 0.3s forwards;
        }

        @keyframes fadeSlightlyUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hologram-visualizer {
          width: 100%;
          height: 150px;
          border: 1px solid rgba(100,200,255,0.1);
          border-radius: 10px;
          background: 
            linear-gradient(90deg, transparent 50%, rgba(100,200,255,0.02) 50%),
            linear-gradient(0deg, transparent 50%, rgba(100,200,255,0.02) 50%);
          background-size: 20px 20px;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        /* Simple CSS wave or scan line for visualizer */
        .scan-line {
          position: absolute;
          left: 0; top: 0;
          width: 1px; height: 100%;
          background: var(--h-cyan);
          box-shadow: 0 0 20px 2px var(--h-cyan);
          animation: scanLeftRight 3s ease-in-out infinite alternate;
        }

        @keyframes scanLeftRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }

        .btn-close {
          position: absolute;
          top: 2rem; right: 2rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.8);
          font-family: var(--font-holo);
          font-size: 0.8rem;
          letter-spacing: 1px;
          padding: 0.6rem 1.5rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-close:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--h-white);
          color: var(--h-white);
        }

      `}</style>

      <div 
        className={`holo-grid ${activeFileId ? 'has-active' : ''}`}
        style={!activeFileId ? { transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`} : undefined}
      >
        {files.map(file => {
          const isActive = activeFileId === file.id;

          return (
            <div 
              key={file.id} 
              className={`glass-panel ${isActive ? 'active' : ''}`}
              onClick={() => { if (!isActive) setActiveFileId(file.id); }}
            >
              {isActive && (
                <button className="btn-close" onClick={(e) => { e.stopPropagation(); setActiveFileId(null); }}>
                  COLLAPSE
                </button>
              )}

              <div className="header-section">
                <div>
                  <div className="file-id">{file.id}</div>
                  <div className="file-subject">{file.subject}</div>
                </div>
                <div className={`status-indicator status-${file.status}`}>
                  <div className="status-dot"/>
                  {file.status}
                </div>
              </div>

              <div className="data-grid">
                <div>
                  <div className="data-lbl">THREAT PROBABILITY</div>
                  <div className="data-val">{file.threatLevel} / 10</div>
                  <div className="threat-bar">
                    <div className="threat-fill" style={{ width: `${(file.threatLevel / 10) * 100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="data-lbl">DATA POINTS ANALYZED</div>
                  <div className="data-val">{file.dataPoints.toLocaleString()}</div>
                </div>
              </div>

              {isActive && (
                <div className="expanded-content">
                  <div className="hologram-visualizer">
                    <div className="scan-line" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--h-cyan)', letterSpacing: '4px' }}>
                      PRECAG_SYSTEM_SYNCING...
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                    <div>
                      <div className="data-lbl">TEMPORAL WINDOW</div>
                      <div className="data-val" style={{ fontSize: '1.2rem' }}>- 34:12:05</div>
                    </div>
                    <div>
                      <div className="data-lbl">PRECOGNITIVE SUMMARY</div>
                      <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.8', opacity: 0.8 }}>
                        Subject exhibits anomalous behavioral patterns in sector 7G. 
                        Precrime algorithms indicate a 85% probability of protocol breach within the next 34 hours. 
                        Recommend immediate visual surveillance deployment.
                      </p>
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

export default MinorityReportHologramDemoGemini;
