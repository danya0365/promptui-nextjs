'use client';

import React, { useEffect, useState } from 'react';

// Minimal Spatial Dashboard - Gemini 3.1 Pro Implementation
// Floating in infinite white space, airy, light, intelligent.

interface DashboardModule {
  id: string;
  title: string;
  type: 'metrics' | 'list' | 'chart';
  data: any;
  colSpan: number;
  rowSpan: number;
}

export const MinimalSpatialDashboardDemoGemini: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modules: DashboardModule[] = [
    {
      id: 'MOD-01',
      title: 'Global Sentience',
      type: 'metrics',
      colSpan: 1, rowSpan: 1,
      data: { label: 'Synapse Count', value: '8.4B', trend: '+12%' }
    },
    {
      id: 'MOD-02',
      title: 'Compute Allocation',
      type: 'chart',
      colSpan: 2, rowSpan: 1,
      data: { progress: 68, status: 'Optimal' }
    },
    {
      id: 'MOD-03',
      title: 'Recent Evolutions',
      type: 'list',
      colSpan: 1, rowSpan: 2,
      data: [
        { name: 'Quantum Core', status: 'Online' },
        { name: 'Logic Engine v4', status: 'Deploying...' },
        { name: 'Empathy Module', status: 'Calibrating' },
        { name: 'Memory Compression', status: 'Done' }
      ]
    },
    {
      id: 'MOD-04',
      title: 'Energy Draw',
      type: 'metrics',
      colSpan: 1, rowSpan: 1,
      data: { label: 'Terawatts', value: '1.24', trend: '-2%' }
    },
    {
      id: 'MOD-05',
      title: 'System Health',
      type: 'metrics',
      colSpan: 1, rowSpan: 1,
      data: { label: 'Integrity', value: '99.9%', trend: 'Stable' }
    }
  ];

  return (
    <div className={`infinite-white-space ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap');

        :root {
          /* Infinite Canvas */
          --white-canvas: #fcfcfd;
          --soft-blue-accent: #0066cc;
          --soft-blue-bg: #eef5fc;
          
          /* Glass Material */
          --glass-bg: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(255, 255, 255, 0.9);
          
          /* Ambient Shadows for Pure White BG */
          --shadow-base: 0 40px 100px rgba(0, 0, 0, 0.04), 0 10px 30px rgba(0, 0, 0, 0.02);
          --shadow-focus: 0 60px 140px rgba(0, 102, 204, 0.08), 0 20px 40px rgba(0, 0, 0, 0.04);
          
          /* Typography */
          --text-primary: #1a1b1e;
          --text-secondary: #6b7280;
        }

        body {
          margin: 0;
          background-color: var(--white-canvas);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .infinite-white-space {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          perspective: 2000px;
          /* Subtle breathable background gradient to ensure it doesn't feel flat */
          background: radial-gradient(circle at 50% 0%, #ffffff 0%, var(--white-canvas) 100%);
        }

        /* Ambient floating particles (abstract) */
        .infinite-white-space::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.02) 0%, transparent 40%),
            radial-gradient(circle at 80% 60%, rgba(0, 102, 204, 0.015) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        /* --- Spatial Grid Layout --- */
        .dashboard-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(200px, auto);
          gap: 2.5rem;
          max-width: 1200px;
          width: 100%;
          
          /* Subtle global physics bobbing */
          animation: floatGrid 20s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        @keyframes floatGrid {
          0%, 100% { transform: translateY(0px) rotateX(1deg); }
          50% { transform: translateY(-15px) rotateX(-1deg); }
        }

        /* Focus Mode pushes grid slightly back and defocuses it */
        .dashboard-grid.has-focus {
          animation-play-state: paused;
        }
        
        /* --- Frost Glass Cards --- */
        .spatial-card {
          background: var(--glass-bg);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          border-radius: 32px;
          padding: 3rem;
          box-shadow: 
            inset 0 1px 0 var(--glass-border), /* Inner highlight */
            inset 0 0 0 1px rgba(255,255,255,0.4), /* Edge */
            var(--shadow-base);
            
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          
          /* Entrance Animation */
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: 
            all 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
            box-shadow 0.5s ease;
        }

        .mounted .spatial-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        /* Entrance stagger */
        .mounted .spatial-card:nth-child(1) { transition-delay: 0.1s; }
        .mounted .spatial-card:nth-child(2) { transition-delay: 0.2s; }
        .mounted .spatial-card:nth-child(3) { transition-delay: 0.3s; }
        .mounted .spatial-card:nth-child(4) { transition-delay: 0.4s; }
        .mounted .spatial-card:nth-child(5) { transition-delay: 0.5s; }

        /* Hover Interaction */
        .spatial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            inset 0 1px 0 var(--glass-border),
            inset 0 0 0 1px rgba(255,255,255,0.6),
            var(--shadow-focus);
        }

        /* --- Card Sizing based on Grid --- */
        .col-span-1 { grid-column: span 1; }
        .col-span-2 { grid-column: span 2; }
        .row-span-1 { grid-row: span 1; }
        .row-span-2 { grid-row: span 2; }

        /* --- Typography inside Cards --- */
        .card-title {
          font-weight: 300;
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin: 0 0 2rem 0;
          letter-spacing: -0.5px;
        }

        /* Metric Data */
        .metric-value {
          font-size: 3.5rem;
          font-weight: 200;
          color: var(--text-primary);
          line-height: 1;
          letter-spacing: -2px;
          margin-bottom: 0.5rem;
        }
        .metric-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }
        .metric-trend {
          margin-top: auto;
          font-size: 0.9rem;
          color: var(--soft-blue-accent);
          background: var(--soft-blue-bg);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          display: inline-flex;
          align-self: flex-start;
          font-weight: 500;
        }

        /* List Data */
        .list-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex: 1;
        }
        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .list-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .item-name {
          font-weight: 400;
          color: var(--text-primary);
        }
        .item-status {
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(0,0,0,0.03);
          padding: 0.3rem 0.6rem;
          border-radius: 8px;
        }

        /* Chart Placeholder Data */
        .chart-visual {
          width: 100%;
          height: 80px;
          background: var(--soft-blue-bg);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .chart-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          background: var(--soft-blue-accent);
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .chart-status {
          font-weight: 400;
          color: var(--soft-blue-accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .chart-status::before {
          content: '';
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--soft-blue-accent);
        }

        /* --- Focus Mode (Isolate Card) --- */
        /* When a card is active, dim and push back others */
        .dashboard-grid.has-focus .spatial-card:not(.active) {
          opacity: 0.3;
          transform: translateZ(-100px) scale(0.95);
          filter: blur(4px) grayscale(100%);
          pointer-events: none;
        }

        /* The active card comes forward and becomes the hero */
        .spatial-card.active {
          position: absolute;
          top: 50%; left: 50%;
          width: 800px;
          height: 600px;
          margin-left: -400px;
          margin-top: -300px;
          z-index: 100;
          cursor: default;
          
          transform: translateZ(50px) scale(1);
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,1),
            0 100px 200px rgba(0,0,0,0.1);
        }

        /* We need to re-layout contents slightly if it's full screen */
        .spatial-card.active .card-title {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--text-primary);
        }

        .btn-close {
          position: absolute;
          top: 3rem; right: 3rem;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(0,0,0,0.05);
          color: var(--text-primary);
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s;
        }
        .spatial-card.active .btn-close {
          opacity: 1;
        }
        .btn-close:hover {
          background: rgba(0,0,0,0.1);
        }

      `}</style>

      <div className={`dashboard-grid ${activeModule ? 'has-focus' : ''}`}>
        {modules.map((mod) => {
          const isActive = activeModule === mod.id;
          
          // Render content based on type
          let content = null;
          if (mod.type === 'metrics') {
            content = (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="metric-value">{mod.data.value}</div>
                <div className="metric-label">{mod.data.label}</div>
                <div className="metric-trend">{mod.data.trend}</div>
              </div>
            );
          } else if (mod.type === 'chart') {
            content = (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end' }}>
                <div className="chart-visual">
                  {/* Fill animation triggers when mounted or active */}
                  <div className="chart-fill" style={{ width: `${mounted ? mod.data.progress : 0}%` }} />
                </div>
                <div className="chart-status">{mod.data.status}</div>
              </div>
            );
          } else if (mod.type === 'list') {
            content = (
              <div className="list-container">
                {mod.data.map((item: any, i: number) => (
                  <div key={i} className="list-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-status">{item.status}</span>
                  </div>
                ))}
              </div>
            );
          }

          return (
            <div 
              key={mod.id} 
              className={`spatial-card col-span-${mod.colSpan} row-span-${mod.rowSpan} ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (!isActive) setActiveModule(mod.id);
              }}
            >
              {isActive && (
                <button 
                  className="btn-close"
                  onClick={(e) => { e.stopPropagation(); setActiveModule(null); }}
                >
                  ×
                </button>
              )}
              <h2 className="card-title">{mod.title}</h2>
              {content}
              
              {/* Extra dummy content when expanded */}
              {isActive && (
                 <div style={{ marginTop: '3rem', opacity: 0, animation: 'fadeIn 1s 0.3s forwards' }}>
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem' }}>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                        Detailed analytics and sub-layers stream in smoothly. In a spatial minimalist environment, 
                        the interface gets out of the way, allowing content and data to breathe in expansive white space.
                      </p>
                    </div>
                 </div>
              )}
            </div>
          );
        })}
      </div>
      <style>{`@keyframes fadeIn { to { opacity: 1; } }`}</style>
    </div>
  );
};

export default MinimalSpatialDashboardDemoGemini;
