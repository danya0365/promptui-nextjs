'use client';

import React, { useEffect, useRef, useState } from 'react';

// Futuristic Neural Network Interface - Gemini 3.1 Pro Implementation
// Modular floating glass cards with expansion animations and neural connections.

interface NodeData {
  id: string;
  title: string;
  status: string;
  metrics: { label: string; value: string }[];
  description: string;
  x: number; // Grid column
  y: number; // Grid row
}

export const FuturisticNeuralNetworkDemoGemini: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const nodes: NodeData[] = [
    { id: 'N-01', title: 'CORE LOGIC', status: 'Optimal', x: 2, y: 1, description: 'Central processing hub routing neural requests across 12 distributed zones.', metrics: [{ label: 'Efficiency', value: '99.8%' }, { label: 'Temp', value: '312K' }] },
    { id: 'N-02', title: 'SYNAPSE LINK', status: 'Active', x: 1, y: 2, description: 'Direct connection bridge handling instantaneous secure data tunneling.', metrics: [{ label: 'Bandwidth', value: '14.2 TB/s' }, { label: 'Latency', value: '0.04ms' }] },
    { id: 'N-03', title: 'MEMORY BANK A', status: 'Archiving', x: 3, y: 2, description: 'Long-term immutable storage utilizing quantum lattice matrices.', metrics: [{ label: 'Capacity', value: '82% Full' }, { label: 'Integrity', value: 'Stable' }] },
    { id: 'N-04', title: 'SENSORY INPUT', status: 'Processing', x: 2, y: 3, description: 'Aggregating raw external stimuli and standardizing formatting for the Core.', metrics: [{ label: 'Streams', value: '1,042' }, { label: 'Dropped', value: '0' }] },
    { id: 'N-05', title: 'SECURITY NODE', status: 'Vigilant', x: 4, y: 1, description: 'Autonomous threat detection and localized firewall enforcement.', metrics: [{ label: 'Blocks', value: '14K/hr' }, { label: 'Status', value: 'Secure' }] },
    { id: 'N-06', title: 'AUX POWER', status: 'Standby', x: 1, y: 4, description: 'Secondary energy reserves kept in passive state pending core fluctuation.', metrics: [{ label: 'Charge', value: '100%' }, { label: 'Draw', value: '0.1%' }] },
  ];

  // Track mouse for dynamic parallax glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="neural-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&display=swap');

        :root {
          --bg-void: #02040a;
          --electric-blue: #00e5ff;
          --glass-bg: rgba(10, 20, 40, 0.4);
          --glass-border: rgba(0, 229, 255, 0.2);
          --text-main: #e2e8f0;
          --text-muted: #828a9a;
        }

        body {
          margin: 0;
          background-color: var(--bg-void);
          color: var(--text-main);
          font-family: 'Space Grotesk', sans-serif;
          overflow: hidden; /* Stop scrolling during full screen expansion */
        }

        .neural-container {
          position: relative;
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 50%, #050a14 0%, var(--bg-void) 100%);
        }

        /* --- Ambient Lighting --- */
        .cursor-glow {
          position: absolute;
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, transparent 60%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }

        /* --- Grid System --- */
        .magnetic-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 280px);
          grid-template-rows: repeat(4, 180px);
          gap: 2rem;
          z-index: 10;
          /* Slight 3D rotation for depth */
          transform: perspective(1000px) rotateX(5deg) scale(0.95);
          transition: transform 0.5s cubic-bezier(0.1, 0.8, 0.3, 1);
        }

        .neural-container:has(.expanded) .magnetic-grid {
          /* Push grid back when a card expands */
          transform: perspective(1000px) rotateX(0deg) scale(0.9) translateZ(-200px);
          opacity: 0.3;
          pointer-events: none;
        }

        /* --- Modular Glass Cards --- */
        .neural-card {
          position: relative;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(12px);
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.5),
            inset 0 0 0 transparent; /* Normal state */
          cursor: crosshair;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Inner Glow Hover */
        .neural-card:hover {
          border-color: rgba(0, 229, 255, 0.6);
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.6),
            inset 0 0 20px rgba(0, 229, 255, 0.15); /* Hover Glow */
          transform: translateY(-5px);
        }

        /* Top Bar of Card */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 0.5rem;
        }

        .card-id {
          font-size: 0.7rem;
          color: var(--electric-blue);
          letter-spacing: 2px;
        }

        .card-status {
          font-size: 0.65rem;
          text-transform: uppercase;
          background: rgba(0, 229, 255, 0.1);
          color: var(--electric-blue);
          padding: 0.2rem 0.5rem;
          border-radius: 10px;
          border: 1px solid rgba(0, 229, 255, 0.3);
        }

        .card-title {
          font-weight: 500;
          font-size: 1.1rem;
          letter-spacing: 1px;
          margin: 0 0 0.5rem 0;
        }

        .card-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          flex-grow: 1; /* Pushes metrics to bottom */
        }

        .card-metrics {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .metric {
          display: flex;
          flex-direction: column;
        }

        .metric-label {
          font-size: 0.6rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .metric-value {
           font-size: 0.9rem;
           font-weight: 500;
        }

        /* --- Expandable Immersive Panel --- */
        .neural-card.expanded {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) !important;
          width: 80vw;
          height: 80vh;
          z-index: 100;
          border-color: var(--electric-blue);
          box-shadow: 
            0 0 100px rgba(0, 0, 0, 0.9),
            inset 0 0 50px rgba(0, 229, 255, 0.1);
          cursor: default;
          /* Animation details */
          animation: expand-panel 0.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }

        @keyframes expand-panel {
          0% { opacity: 0; transform: translate(-50%, -40%) scale(0.8); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        .close-btn {
          position: absolute;
          top: 2rem; right: 2rem;
          background: transparent;
          border: 1px solid var(--electric-blue);
          color: var(--electric-blue);
          width: 40px; height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .close-btn:hover {
          background: rgba(0, 229, 255, 0.2);
          box-shadow: 0 0 15px var(--electric-blue);
        }

        /* Expanded content layout */
        .expanded-content {
          display: flex;
          height: 100%;
          gap: 3rem;
          padding: 2rem;
          margin-top: 3rem;
          opacity: 0;
          animation: fade-in-delay 0.8s 0.3s forwards;
        }

        @keyframes fade-in-delay {
          to { opacity: 1; }
        }

        .data-stream {
          flex: 1;
          border-right: 1px solid rgba(255,255,255,0.1);
          padding-right: 2rem;
        }

        .data-stream-line {
          height: 2px;
          background: rgba(0, 229, 255, 0.2);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .data-stream-line::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, var(--electric-blue), transparent);
          animation: stream 2s infinite;
        }

        @keyframes stream {
          100% { left: 200%; }
        }

        /* --- SVG Background Connections --- */
        .neural-lines {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        .neural-line {
          stroke: rgba(0, 229, 255, 0.1);
          stroke-width: 1;
          fill: none;
          transition: stroke 0.3s;
        }

        .neural-line.active {
          stroke: rgba(0, 229, 255, 0.6);
          stroke-width: 2;
          filter: drop-shadow(0 0 5px var(--electric-blue));
        }

      `}</style>
      
      <div 
        className="cursor-glow" 
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Background connecting lines (Abstract representation) */}
      <svg className="neural-lines">
        {nodes.map((n1, i) => 
          nodes.slice(i + 1).map((n2, j) => {
             // Only connect nodes that are somewhat adjacent
             const dist = Math.abs(n1.x - n2.x) + Math.abs(n1.y - n2.y);
             if (dist > 2) return null;

             const isActive = hoveredNode === n1.id || hoveredNode === n2.id;
             
             // Rough estimation of grid coordinates to screen space for lines
             // (In a real app, use full refs/bounding box calculations)
             const startX = `calc(50vw - 600px + ${n1.x * 300}px - 150px)`;
             const startY = `calc(50vh - 400px + ${n1.y * 200}px - 100px)`;
             const endX = `calc(50vw - 600px + ${n2.x * 300}px - 150px)`;
             const endY = `calc(50vh - 400px + ${n2.y * 200}px - 100px)`;

             return (
               <path 
                 key={`${n1.id}-${n2.id}-${j}`} 
                 className={`neural-line ${isActive ? 'active' : ''}`}
                 d={`M ${startX} ${startY} Q ${startX} ${endY} ${endX} ${endY}`}
               />
             );
          })
        )}
      </svg>

      <div className="magnetic-grid">
        {nodes.map(node => (
          <div 
            key={node.id}
            className="neural-card"
            style={{ 
              gridColumn: node.x, 
              gridRow: node.y,
              // Hide from grid if expanded
              opacity: activeNode === node.id ? 0 : 1 
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setActiveNode(node.id)}
          >
            <div className="card-header">
              <span className="card-id">{node.id}</span>
              <span className="card-status">{node.status}</span>
            </div>
            <h3 className="card-title">{node.title}</h3>
            <div className="card-desc">{node.description}</div>
            <div className="card-metrics">
              {node.metrics.map((m, i) => (
                <div key={i} className="metric">
                  <span className="metric-label">{m.label}</span>
                  <span className="metric-value">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Node Overlay */}
      {activeNode && (
        <>
          <div className="neural-card expanded">
            {/* Grab the active node data */}
            {(() => {
              const node = nodes.find(n => n.id === activeNode);
              if (!node) return null;
              return (
                <>
                  <button className="close-btn" onClick={() => setActiveNode(null)}>×</button>
                  <div className="card-header" style={{ marginBottom: 0 }}>
                    <span className="card-id" style={{ fontSize: '1rem' }}>{node.id} // SECURE CHANNEL OPEN</span>
                    <span className="card-status" style={{ fontSize: '0.9rem' }}>{node.status}</span>
                  </div>
                  
                  <div className="expanded-content">
                    <div className="data-stream">
                      <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', fontWeight: 300 }}>{node.title}</h1>
                      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{node.description}</p>
                      
                      <div style={{ marginTop: '4rem' }}>
                        <div className="metric-label">Uplink Stream</div>
                        <div className="data-stream-line" />
                        <div className="metric-label">Downlink Stream</div>
                        <div className="data-stream-line" style={{ animationDelay: '0.5s' }} />
                      </div>
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>SYSTEM SCHEMATICS</h3>
                      <div style={{ 
                        height: '300px', 
                        border: '1px dashed rgba(0,229,255,0.3)', 
                        marginTop: '2rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'rgba(0,229,255,0.5)',
                        background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,229,255,0.02) 10px, rgba(0,229,255,0.02) 20px)'
                      }}>
                        [ DIAGNOSTIC VISUALIZATION UNAVAILABLE ]
                      </div>
                      
                      <div className="card-metrics" style={{ marginTop: '3rem', gap: '3rem' }}>
                        {node.metrics.map((m, i) => (
                          <div key={i} className="metric">
                            <span className="metric-label" style={{ fontSize: '0.8rem' }}>{m.label}</span>
                            <span className="metric-value" style={{ fontSize: '2rem', color: 'var(--electric-blue)' }}>{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
          {/* Overlay background to darken the rest */}
          <div 
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 50, backdropFilter: 'blur(5px)' }} 
            onClick={() => setActiveNode(null)}
          />
        </>
      )}

    </div>
  );
};

export default FuturisticNeuralNetworkDemoGemini;
