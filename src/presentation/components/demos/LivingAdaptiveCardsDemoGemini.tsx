'use client';

import React, { useMemo, useState } from 'react';

// Living Adaptive Cards Interface - Gemini 3.1 Pro Implementation
// Organic digital ecosystem where cards adapt, grow, and reorganize based on usage.

interface AdaptiveCardData {
  id: string;
  title: string;
  category: string;
  usageCount: number;
  dataPoints: number[];
  details: string;
}

export const LivingAdaptiveCardsDemoGemini: React.FC = () => {
  const [cards, setCards] = useState<AdaptiveCardData[]>([
    { id: 'ORG-A', title: 'SYNAPTIC FLOW', category: 'Neural', usageCount: 2, dataPoints: [40, 60, 45, 80], details: 'Connecting latent thought patterns into actionable data streams.' },
    { id: 'ORG-B', title: 'BIOMETRIC PULSE', category: 'Health', usageCount: 0, dataPoints: [20, 30, 25, 35], details: 'Monitoring vital metrics and environmental homeostasis.' },
    { id: 'ORG-C', title: 'COGNITIVE LOAD', category: 'Mental', usageCount: 5, dataPoints: [80, 85, 90, 88], details: 'Assessing the current processing capacity of the central node.' },
    { id: 'ORG-D', title: 'SENSORY INTAKE', category: 'Input', usageCount: 1, dataPoints: [50, 40, 60, 55], details: 'Filtering and categorizing raw external stimuli for processing.' },
    { id: 'ORG-E', title: 'MEMORY CONSOLIDATION', category: 'Storage', usageCount: 0, dataPoints: [10, 15, 12, 18], details: 'Archiving short-term impressions into long-term structured memory.' },
    { id: 'ORG-F', title: 'EMOTIONAL RESONANCE', category: 'State', usageCount: 3, dataPoints: [60, 70, 65, 75], details: 'Evaluating the affective state and its impact on decision making.' },
  ]);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Re-sort cards based on usage every time a card is interacted with
  // Adds to the "living" feel that it reorganizes itself
  const sortedCards = useMemo(() => {
    return [...cards].sort((a, b) => b.usageCount - a.usageCount);
  }, [cards]);

  const handleCardClick = (id: string) => {
    if (activeCardId === id) {
      // Close card
      setActiveCardId(null);
    } else {
      // Open card and increment usage
      setActiveCardId(id);
      setCards(prev => prev.map(c => 
        c.id === id ? { ...c, usageCount: c.usageCount + 1 } : c
      ));
    }
  };

  return (
    <div className={`living-ecosystem ${activeCardId ? 'has-active' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --living-bg-blue: #0A0A1F;
          --living-bg-violet: #1A0A2E;
          --living-glass: rgba(255, 255, 255, 0.03);
          --living-border: rgba(255, 255, 255, 0.1);
          --living-highlight: rgba(140, 100, 255, 0.5);
          --living-text: #E0E0FF;
          --living-muted: #8080A0;
        }

        body {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          color: var(--living-text);
          background-color: var(--living-bg-blue);
          overflow-x: hidden;
        }

        /* --- Fluid Mesh Gradient Background --- */
        .living-ecosystem {
          min-height: 100vh;
          width: 100vw;
          padding: 4rem 2rem;
          box-sizing: border-box;
          position: relative;
          
          /* The living background */
          background: radial-gradient(circle at 20% 30%, rgba(60, 40, 150, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(40, 80, 180, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, var(--living-bg-blue) 0%, var(--living-bg-violet) 100%);
          background-size: 200% 200%;
          animation: fluid-bg 20s ease-in-out infinite alternate;
          
          transition: filter 0.8s ease;
        }

        @keyframes fluid-bg {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 50%; }
        }

        /* Create a central ambient pulse when hovering */
        .ambient-pulse {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 60vw; height: 60vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(140, 100, 255, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.3;
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .living-ecosystem:has(.adaptive-card:hover) .ambient-pulse {
          opacity: 0.8;
          transform: translate(-50%, -50%) scale(1.1);
          background: radial-gradient(circle, rgba(100, 180, 255, 0.2) 0%, transparent 70%);
        }

        /* --- Header --- */
        .ecosystem-header {
          position: relative;
          z-index: 10;
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .ecosystem-title {
          font-weight: 300;
          font-size: 2.5rem;
          letter-spacing: 4px;
          margin: 0;
          background: linear-gradient(90deg, #fff, #a0a0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- Adaptive Grid System --- */
        .adaptive-grid {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          /* Auto-fit with a min-width, allowing cards to span rows/cols */
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 200px; /* Base height */
          gap: 2rem;
          
          /* Smoothly handle layout changes */
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* --- Adaptive Cards (Glassmorphism + Fluidity) --- */
        .adaptive-card {
          position: relative;
          border-radius: 18px;
          background: var(--living-glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--living-border);
          overflow: hidden;
          cursor: pointer;
          
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          
          /* The morphing transition */
          transition: 
            transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.5s ease,
            border-color 0.5s ease,
            grid-column 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
            grid-row 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            
          /* The inner gradient border simulation */
          box-shadow: 
            inset 0 1px 1px rgba(255,255,255,0.1),
            0 10px 30px rgba(0,0,0,0.2);
        }

        /* Card Evolution logic: High usage = bigger card in the grid */
        .adaptive-card[data-usage="high"] {
          grid-column: span 2;
          grid-row: span 2;
          background: rgba(255, 255, 255, 0.05); /* slightly brighter */
        }
        
        .adaptive-card[data-usage="med"] {
          grid-column: span 2;
          grid-row: span 1;
        }
        
        .adaptive-card[data-usage="low"] {
          grid-column: span 1;
          grid-row: span 1;
          opacity: 0.8; /* Slightly faded */
        }

        /* Hover Interaction */
        .adaptive-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: var(--living-highlight);
          box-shadow: 
            inset 0 1px 1px rgba(255,255,255,0.2),
            0 20px 40px rgba(0,0,0,0.4),
            0 0 30px rgba(140, 100, 255, 0.2);
        }
        
        /* Inner contents */
        .card-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--living-highlight);
          margin-bottom: 0.5rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 400;
          margin: 0 0 1rem 0;
        }

        .card-metrics {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 40px;
          margin-top: auto;
        }
        
        .metric-bar {
          flex: 1;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          transition: height 1s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.3s;
        }
        .adaptive-card:hover .metric-bar {
          background: rgba(140, 100, 255, 0.4);
        }
        
        .usage-badge {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          font-size: 0.7rem;
          background: rgba(0,0,0,0.3);
          padding: 4px 10px;
          border-radius: 20px;
          color: var(--living-muted);
        }

        /* --- Expanded / Morph State --- */
        /* When a card is clicked, we use a simple inline expansion approach for this demo */
        .adaptive-card.expanded {
          grid-column: 1 / -1 !important; /* Take full width */
          grid-row: span 3 !important;   /* Take extra height */
          background: rgba(20, 15, 40, 0.8);
          border-color: rgba(140, 100, 255, 0.5);
          cursor: default;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          z-index: 50;
        }

        .expanded-details {
          opacity: 0;
          animation: fade-up 0.6s 0.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
          border-top: 1px solid rgba(255,255,255,0.05);
          margin-top: 2rem;
          padding-top: 2rem;
          flex: 1;
          display: flex;
          gap: 2rem;
        }

        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .sub-panel {
          flex: 1;
          background: rgba(0,0,0,0.2);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .btn-close {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          width: 36px; height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .btn-close:hover {
          background: rgba(255,255,255,0.2);
        }

      `}</style>

      <div className="ambient-pulse" />

      <header className="ecosystem-header">
        <h1 className="ecosystem-title">ADAPTIVE ECOSYSTEM</h1>
        <p style={{ color: 'var(--living-muted)', fontWeight: 300, letterSpacing: '1px' }}>
          Interact to evolve the interface
        </p>
      </header>

      <div className="adaptive-grid">
        {sortedCards.map((card) => {
          
          // Determine "evolution" state based on usage
          let usageState = 'low';
          if (card.usageCount >= 4) usageState = 'high';
          else if (card.usageCount >= 2) usageState = 'med';

          const isExpanded = activeCardId === card.id;

          return (
            <div 
              key={card.id}
              className={`adaptive-card ${isExpanded ? 'expanded' : ''}`}
              data-usage={usageState}
              onClick={() => { if(!isExpanded) handleCardClick(card.id) }}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              {isExpanded && (
                <button 
                  className="btn-close" 
                  onClick={(e) => { e.stopPropagation(); handleCardClick(card.id); }}
                >
                  ✕
                </button>
              )}

              {/* Only show usage badge if not expanded, for cleaner look */}
              {!isExpanded && <div className="usage-badge">Iter: {card.usageCount}</div>}

              <div className="card-category">{card.category}</div>
              <h3 className="card-title" style={{ fontSize: isExpanded ? '2.5rem' : '1.5rem' }}>{card.title}</h3>
              
              {/* Only show mini chart if not expanded to save space, or let it grow */}
              {!isExpanded && (
                <div className="card-metrics">
                   {card.dataPoints.map((val, i) => (
                      <div 
                        key={i} 
                        className="metric-bar" 
                        style={{ height: `${val}%` }} 
                      />
                   ))}
                </div>
              )}

              {isExpanded && (
                <div className="expanded-details">
                  <div className="sub-panel">
                    <h4 style={{ margin: '0 0 1rem 0', color: 'var(--living-highlight)', fontWeight: 400 }}>ENTITY DATA</h4>
                    <p style={{ lineHeight: 1.6, color: 'var(--living-muted)' }}>{card.details}</p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                       <div style={{ padding: '0.8rem 1.2rem', background: 'var(--living-highlight)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', cursor: 'pointer' }}>
                         STIMULATE NODE
                       </div>
                    </div>
                  </div>
                  <div className="sub-panel" style={{ display: 'flex', flexDirection: 'column' }}>
                     <h4 style={{ margin: '0 0 1rem 0', color: 'var(--living-highlight)', fontWeight: 400 }}>RESONANCE HISTORY</h4>
                     
                     <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '100%', padding: '1rem 0' }}>
                        {card.dataPoints.map((val, i) => {
                          // Provide slight variation to expanded charts for visual interest
                          const expandedVal = Math.min(100, val + (Math.random() * 20));
                          return (
                            <div 
                              key={i} 
                              style={{ 
                                flex: 1, 
                                background: `linear-gradient(to top, rgba(140, 100, 255, 0.2), rgba(140, 100, 255, 0.8))`, 
                                borderRadius: '4px',
                                height: `${expandedVal}%`,
                                animation: `fade-up 0.5s ${0.3 + (i * 0.1)}s forwards cubic-bezier(0.2, 0.8, 0.2, 1)`,
                                opacity: 0,
                                transform: 'translateY(10px)'
                              }} 
                            />
                          );
                        })}
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

export default LivingAdaptiveCardsDemoGemini;
