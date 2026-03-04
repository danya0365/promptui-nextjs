'use client';

import React, { useMemo, useState } from 'react';

// Self-Evolving Web Interface - Gemini 3.1 Pro Implementation
// UI that reorganizes, scales, and changes color based on usage interaction.

interface WidgetData {
  id: string;
  title: string;
  category: string;
  content: string;
  clicks: number;
}

export const SelfEvolvingInterfaceDemoGemini: React.FC = () => {
  // Initial state of UI elements
  const [widgets, setWidgets] = useState<WidgetData[]>([
    { id: 'w1', title: 'Global Operations', category: 'Analytics', content: 'Monitoring real-time data streams from 12 orbital nodes.', clicks: 0 },
    { id: 'w2', title: 'Neural Synopsis', category: 'Intelligence', content: 'Pattern recognition efficiency at 94.2%. Awaiting manual input.', clicks: 0 },
    { id: 'w3', title: 'Resource Allocation', category: 'Systems', content: 'Energy distribution stabilized. No anomalies detected.', clicks: 0 },
    { id: 'w4', title: 'Biometric Feedback', category: 'Sensors', content: 'User stress level optimal. Adjusting ambient lighting.', clicks: 0 },
    { id: 'w5', title: 'Quantum Storage', category: 'Database', content: 'Archive expansion required within 72 cycles.', clicks: 0 },
    { id: 'w6', title: 'External Comms', category: 'Network', content: 'Listening phase active. 0 incoming transmissions.', clicks: 0 },
  ]);

  const [totalInteractions, setTotalInteractions] = useState(0);

  // Handle click on a widget
  const handleWidgetClick = (id: string) => {
    setWidgets(prev => prev.map(w => 
      w.id === id ? { ...w, clicks: w.clicks + 1 } : w
    ));
    setTotalInteractions(prev => prev + 1);
  };

  // Evolution Logic: Sort widgets by clicks (popularity) automatically
  const sortedWidgets = useMemo(() => {
    return [...widgets].sort((a, b) => b.clicks - a.clicks);
  }, [widgets]);

  // Determine global visual state based on total interaction
  // As user interacts more, the system "wakes up" and changes tone
  const getGlobalTheme = () => {
    if (totalInteractions < 5) return { hue: 220, saturation: 30, flavor: 'DORMANT' };
    if (totalInteractions < 15) return { hue: 260, saturation: 50, flavor: 'AWAKENING' };
    if (totalInteractions < 30) return { hue: 320, saturation: 70, flavor: 'ACTIVE' };
    return { hue: 10, saturation: 80, flavor: 'SENTIENT' };
  };

  const theme = getGlobalTheme();

  return (
    <div className="evolving-container" style={{
      '--base-hue': theme.hue,
      '--base-sat': `${theme.saturation}%`,
    } as React.CSSProperties}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

        .evolving-container {
          min-height: 100vh;
          background-color: hsl(var(--base-hue), 10%, 5%);
          background-image: radial-gradient(circle at 50% 0%, hsl(var(--base-hue), var(--base-sat), 15%) 0%, transparent 70%);
          color: rgba(255, 255, 255, 0.85);
          font-family: 'Inter', sans-serif;
          padding: 4rem 2rem;
          transition: background-color 2s ease, background-image 2s ease;
          overflow-x: hidden;
        }

        .header-area {
          max-width: 1200px;
          margin: 0 auto 4rem auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 1rem;
        }

        .brand h1 {
          font-weight: 300;
          font-size: 2.5rem;
          margin: 0 0 0.5rem 0;
          letter-spacing: -1px;
        }

        .brand p {
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          font-size: 0.9rem;
        }

        .sys-state {
          text-align: right;
        }

        .state-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: hsl(var(--base-hue), var(--base-sat), 60%);
          transition: color 2s ease;
        }

        .state-val {
          font-size: 1.5rem;
          font-weight: 600;
        }

        /* --- Dynamic Grid Layout --- */
        .widget-grid {
          display: grid;
          /* Auto-fit with a min-width, allowing flexibility */
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* --- Individual Widget CSS --- */
        .widget-panel {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 2rem;
          cursor: pointer;
          /* Base transitions for morphing */
          transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* The morphing background glow */
        .widget-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at top left, hsl(var(--base-hue), var(--base-sat), 20%), transparent 80%);
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 0;
        }

        .widget-panel:hover::before {
          opacity: 1;
        }

        /* Content grouping to sit above absolute backgrounds */
        .panel-content {
          position: relative;
          z-index: 10;
          flex-grow: 1;
        }

        .panel-cat {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: hsl(var(--base-hue), var(--base-sat), 50%);
          margin-bottom: 0.5rem;
          transition: color 1s ease;
        }

        .panel-title {
          font-size: 1.25rem;
          font-weight: 400;
          margin: 0 0 1rem 0;
          color: #fff;
        }

        .panel-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
        }

        .panel-meta {
          position: relative;
          z-index: 10;
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }

        /* 
          Evolution Visual Rules via Inline Styles:
          - Size: span more grid columns/rows if highly clicked
          - Border Radius: Become more organic/rounded over time
          - Opacity: Fade if ignored
        */
      `}</style>
      
      <header className="header-area">
        <div className="brand">
          <h1>ORGANIC.OS</h1>
          <p>Self-Structuring Interface Protocol v2.4</p>
        </div>
        <div className="sys-state">
          <div className="state-label">System State</div>
          <div className="state-val">{theme.flavor}</div>
          <div style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '4px' }}>
            Interactions: {totalInteractions}
          </div>
        </div>
      </header>

      <div className="widget-grid">
        {sortedWidgets.map((widget, index) => {
          // Calculate growth metrics based on clicks relative to others
          const maxClicks = Math.max(...widgets.map(w => w.clicks), 1); // Avoid div by 0
          const popularityRatio = widget.clicks / maxClicks;
          
          // Determine if it should span multiple columns (Growth)
          // Only top 1 or 2 widgets get to span if they have enough clicks
          const isTopDog = index === 0 && widget.clicks > 3;
          const gridColumnSpan = isTopDog ? 'span 2' : 'span 1';
          
          // Determine fading out of ignored elements
          // If total interactions are high, but this widget has 0, fade it.
          const isIgnored = totalInteractions > 10 && widget.clicks === 0;
          const opacity = isIgnored ? 0.4 : 0.8 + (popularityRatio * 0.2); // 0.8 to 1.0

          // Morph shape based on usage
          // More clicks = more organic/rounded shape
          const baseRadius = 12;
          const addedRadius = widget.clicks * 4;
          const borderRadius = `${Math.min(baseRadius + addedRadius, 50)}px`;

          return (
             <div 
              key={widget.id}
              className="widget-panel"
              onClick={() => handleWidgetClick(widget.id)}
              style={{
                gridColumn: gridColumnSpan,
                opacity: opacity,
                borderRadius: borderRadius,
                // Add a subtle border glow to the most active item
                borderColor: popularityRatio > 0.8 && widget.clicks > 0 
                  ? `hsl(${theme.hue}, ${theme.saturation}%, 40%)` 
                  : 'rgba(255, 255, 255, 0.05)',
                // Scale slightly based on rank
                transform: `scale(${1 - (index * 0.01)})`,
                // Pushing ignored items further back visually
                filter: isIgnored ? 'blur(2px)' : 'none'
              }}
            >
              <div className="panel-content">
                <div className="panel-cat">{widget.category}</div>
                <h3 className="panel-title">{widget.title}</h3>
                <p className="panel-desc">{widget.content}</p>
              </div>
              <div className="panel-meta">
                <span>Node {widget.id.toUpperCase()}</span>
                <span>{widget.clicks} Actuations</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default SelfEvolvingInterfaceDemoGemini;
