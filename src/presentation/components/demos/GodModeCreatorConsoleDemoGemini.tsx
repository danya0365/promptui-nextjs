'use client';

import React, { useEffect, useState } from 'react';

// God-Mode Creator Console - Gemini 3.1 Pro Implementation
// Ultimate authority UI made of structured control cards.

interface SubCard {
  id: string;
  label: string;
  type: 'TOGGLE' | 'SLIDER' | 'METRIC';
  value: number | boolean;
}

interface MainPanel {
  id: string;
  title: string;
  subtitle: string;
  subCards: SubCard[];
}

export const GodModeCreatorConsoleDemoGemini: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const panels: MainPanel[] = [
    {
      id: 'MN-01',
      title: 'PHYSICS ENGINE',
      subtitle: 'UNIVERSAL CONSTANTS & FORCES',
      subCards: [
        { id: 'SC-1.1', label: 'GRAVITY WELL', type: 'SLIDER', value: 9.81 },
        { id: 'SC-1.2', label: 'TIME DILATION', type: 'TOGGLE', value: true },
        { id: 'SC-1.3', label: 'ENTROPY RATE', type: 'METRIC', value: 0.04 },
      ]
    },
    {
      id: 'MN-02',
      title: 'BIOME GENERATION',
      subtitle: 'PROCEDURAL TERRAIN MAPPING',
      subCards: [
        { id: 'SC-2.1', label: 'TOPOGRAPHY SEED', type: 'METRIC', value: 89342 },
        { id: 'SC-2.2', label: 'ATMOSPHERE THICKNESS', type: 'SLIDER', value: 1.05 },
        { id: 'SC-2.3', label: 'OCEANIC TIDES', type: 'TOGGLE', value: true },
        { id: 'SC-2.4', label: 'WEATHER SYSTEMS', type: 'TOGGLE', value: false },
      ]
    },
    {
      id: 'MN-03',
      title: 'CONSCIOUSNESS MATRIX',
      subtitle: 'SENTIENCE DISTRIBUTION',
      subCards: [
        { id: 'SC-3.1', label: 'FREE WILL INFLUENCE', type: 'SLIDER', value: 85 },
        { id: 'SC-3.2', label: 'COLLECTIVE MEMORY', type: 'TOGGLE', value: true },
      ]
    },
    {
      id: 'MN-04',
      title: 'TIMELINE ARCHITECTURE',
      subtitle: 'CAUSALITY & ANOMALY THRESHOLDS',
      subCards: [
        { id: 'SC-4.1', label: 'PARADOX TOLERANCE', type: 'SLIDER', value: 3.14 },
        { id: 'SC-4.2', label: 'BRANCHING PERMITTED', type: 'TOGGLE', value: false },
        { id: 'SC-4.3', label: 'CURRENT EPOCH', type: 'METRIC', value: 4096 },
      ]
    }
  ];

  const handlePanelClick = (id: string) => {
    setActivePanel(prev => prev === id ? null : id);
  };

  return (
    <div className={`god-console ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Space+Grotesk:wght@300;400;500;700&display=swap');

        :root {
          --god-bg: #0d0e12;
          --god-panel: #14151a;
          --god-silver: rgba(255, 255, 255, 0.7);
          --god-silver-dim: rgba(255, 255, 255, 0.15);
          --god-gold: #C5A059;
          --god-gold-dim: rgba(197, 160, 89, 0.2);
          --god-shadow: 0 30px 60px rgba(0,0,0,0.8);
          
          --font-serif: 'Cinzel', serif;
          --font-sans: 'Space Grotesk', sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--god-bg);
          color: var(--god-silver);
          font-family: var(--font-sans);
          overflow-x: hidden;
        }

        .god-console {
          min-height: 100vh;
          padding: 4rem 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Dramatic Overhead Lighting */
        .god-console::before {
          content: '';
          position: fixed;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 150vw; height: 100vh;
          background: radial-gradient(ellipse at top, rgba(255,255,255,0.08) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Ambient Gold Glow based on active state */
        .god-console::after {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center, var(--god-gold-dim) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 1s ease;
          z-index: 0;
        }
        .god-console:has(.panel.active)::after {
          opacity: 0.5;
        }

        /* --- Header --- */
        .console-header {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 1s 0.2s ease;
        }
        .mounted .console-header {
          opacity: 1; transform: translateY(0);
        }

        .title-primary {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: 12px;
          margin: 0;
          color: #fff;
          text-shadow: 0 4px 20px rgba(255,255,255,0.2);
        }

        .title-secondary {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 6px;
          color: var(--god-gold);
          text-transform: uppercase;
          margin-top: 1rem;
        }

        /* --- Symmetrical Grid Layout --- */
        .panel-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* --- Main Panels --- */
        .panel {
          background: var(--god-panel);
          border: 1px solid var(--god-silver-dim);
          border-top: 1px solid rgba(255,255,255,0.3);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 10px 30px rgba(0,0,0,0.5);
          position: relative;
          cursor: pointer;
          overflow: hidden;
          
          /* Entrance Animation */
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: 
            all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
            padding 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .mounted .panel {
          opacity: 1; transform: translateY(0) scale(1);
        }
        .mounted .panel:nth-child(1) { transition-delay: 0.3s; }
        .mounted .panel:nth-child(2) { transition-delay: 0.4s; }
        .mounted .panel:nth-child(3) { transition-delay: 0.5s; }
        .mounted .panel:nth-child(4) { transition-delay: 0.6s; }

        .panel-header {
          padding: 2rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: background 0.4s;
        }

        .panel:hover .panel-header {
          background: rgba(255,255,255,0.02);
        }

        .panel-num {
          font-family: var(--font-serif);
          font-size: 0.8rem;
          color: var(--god-gold);
          position: absolute;
          top: 2rem; left: 3rem;
          letter-spacing: 2px;
        }

        .panel-status-indicator {
          position: absolute;
          top: 2.2rem; right: 3rem;
          width: 8px; height: 8px;
          border-radius: 50%;
          border: 1px solid var(--god-gold);
          transition: background 0.4s, box-shadow 0.4s;
        }

        .panel-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          letter-spacing: 6px;
          margin: 0 0 0.5rem 0;
          color: #fff;
          transition: color 0.4s;
        }

        .panel-subtitle {
          font-size: 0.75rem;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.4);
        }

        /* --- Active Panel State --- */
        .panel.active {
          border-color: var(--god-gold);
          box-shadow: 
            inset 0 1px 0 rgba(197, 160, 89, 0.5), 
            var(--god-shadow),
            0 0 40px var(--god-gold-dim);
          margin: 2rem -2rem; /* Expand visually out of the flow slightly */
          z-index: 20;
          cursor: default; /* Stops closing if they click randomly inside */
        }
        
        /* If a panel is active, dim and shrink the others */
        .panel-container:has(.panel.active) .panel:not(.active) {
          opacity: 0.3;
          transform: scale(0.95);
          filter: grayscale(100%);
        }

        .panel.active .panel-title { color: var(--god-gold); }
        .panel.active .panel-status-indicator { 
          background: var(--god-gold); 
          box-shadow: 0 0 10px var(--god-gold);
        }

        /* --- Panel Content Map (Unfolding) --- */
        .panel-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s 0.2s;
          background: #0a0b0e;
          border-top: 1px solid transparent;
        }

        .panel.active .panel-content {
          max-height: 1000px;
          opacity: 1;
          border-top-color: var(--god-silver-dim);
        }

        /* --- Modular Sub-Cards --- */
        .sub-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1px; /* Creates hairline borders between cells via background */
          background: var(--god-silver-dim);
          padding: 1px; /* border around the grid */
        }

        .sub-card {
          background: #0d0e12;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          
          /* Cascading reveal */
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* Staggered animation when panel is active */
        .panel.active .sub-card:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
        .panel.active .sub-card:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
        .panel.active .sub-card:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
        .panel.active .sub-card:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.6s; }
        
        .sub-card:hover {
          background: #14151a;
        }

        .sub-card-label {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 2rem;
        }

        /* Sub Card Controls */
        .control-value {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: #fff;
          margin-top: auto;
          text-shadow: 0 2px 10px rgba(255,255,255,0.1);
        }

        .toggle-switch {
          width: 50px; height: 24px;
          border-radius: 12px;
          border: 1px solid var(--god-silver-dim);
          position: relative;
          margin-top: auto;
          transition: all 0.3s;
        }
        .toggle-switch.on { background: var(--god-gold); border-color: var(--god-gold); }
        .toggle-switch::after {
          content: '';
          position: absolute;
          top: 2px; left: 2px;
          width: 18px; height: 18px;
          background: #fff;
          border-radius: 50%;
          transition: transform 0.3s;
        }
        .toggle-switch.on::after { transform: translateX(26px); }

        .slider-track {
          width: 80%; height: 2px;
          background: var(--god-silver-dim);
          position: relative;
          margin-top: auto;
        }
        .slider-thumb {
          width: 8px; height: 16px;
          background: var(--god-gold);
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px var(--god-gold);
        }

        /* Reveal Controls on hover */
        .control-wrapper {
          opacity: 0.7;
          transform: scale(0.95);
          transition: all 0.4s;
        }
        .sub-card:hover .control-wrapper {
          opacity: 1;
          transform: scale(1);
        }

        .btn-close-panel {
          position: absolute;
          top: 2rem; right: 2rem;
          color: var(--god-silver);
          background: transparent;
          border: none;
          font-family: var(--font-serif);
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s;
        }
        .panel.active .btn-close-panel {
          opacity: 1; pointer-events: auto;
        }
        .btn-close-panel:hover { color: var(--god-gold); }

      `}</style>

      <header className="console-header">
        <h1 className="title-primary">ARCHITECT</h1>
        <div className="title-secondary">Omniscient Control Matrix</div>
      </header>

      <div className="panel-container">
        {panels.map((panel, index) => {
          const isActive = activePanel === panel.id;

          return (
            <div 
              key={panel.id} 
              className={`panel ${isActive ? 'active' : ''}`}
            >
              {/* Header acts as the trigger to open/close */}
              <div 
                className="panel-header" 
                onClick={() => handlePanelClick(panel.id)}
              >
                <div className="panel-num">0{index + 1}</div>
                <div className="panel-status-indicator" />
                
                <h2 className="panel-title">{panel.title}</h2>
                <div className="panel-subtitle">{panel.subtitle}</div>
              </div>

              {isActive && (
                <button 
                  className="btn-close-panel" 
                  onClick={(e) => { e.stopPropagation(); handlePanelClick(panel.id); }}
                >
                  ×
                </button>
              )}

              <div className="panel-content">
                <div className="sub-cards-grid">
                  {panel.subCards.map((card) => (
                    <div key={card.id} className="sub-card">
                      <div className="sub-card-label">{card.label}</div>
                      
                      <div className="control-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        {card.type === 'METRIC' && (
                          <div className="control-value">{card.value}</div>
                        )}
                        
                        {card.type === 'TOGGLE' && (
                          <div className={`toggle-switch ${card.value ? 'on' : ''}`} />
                        )}
                        
                        {card.type === 'SLIDER' && (
                          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="control-value" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.value}</div>
                            <div className="slider-track">
                              <div className="slider-thumb" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default GodModeCreatorConsoleDemoGemini;
