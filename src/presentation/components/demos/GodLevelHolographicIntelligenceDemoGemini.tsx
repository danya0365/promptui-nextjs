'use client';

import React, { useEffect, useRef, useState } from 'react';

// God-Level Holographic Intelligence Interface - Gemini 3.1 Pro Implementation
// Massive AI intelligence matrix with deep scroll parallax and immersive morph animations.

interface NexusNode {
  id: string;
  type: string;
  status: string;
  load: number;
  connections: number;
  depthLayer: number; // For Z-axis positioning
  positionX: string;
  positionY: string;
}

export const GodLevelHolographicIntelligenceDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Track scroll for deep Z-axis diving
  const [scrollDepth, setScrollDepth] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleWheel = (e: WheelEvent) => {
      if (activeNode) return; // Disable scroll dive when a node is expanded
      
      // Control how fast we zoom
      setScrollDepth(prev => {
        let newDepth = prev + e.deltaY;
        // Clamp depth between 0 and 2000px
        if (newDepth < 0) newDepth = 0;
        if (newDepth > 2000) newDepth = 2000;
        return newDepth;
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeNode]);

  const nodes: NexusNode[] = [
    { id: 'OMIKRON-PRIME', type: 'NEURAL_CORE', status: 'TRANSCENDENT', load: 99.9, connections: 1048576, depthLayer: 0, positionX: '50%', positionY: '50%' },
    { id: 'SIGMA-9', type: 'DATA_LAKE', status: 'SYNCHRONIZING', load: 45.2, connections: 8096, depthLayer: -500, positionX: '20%', positionY: '30%' },
    { id: 'TAU-C', type: 'PREDICTIVE_ENGINE', status: 'CALCULATING', load: 88.1, connections: 512, depthLayer: -200, positionX: '80%', positionY: '20%' },
    { id: 'EPSILON-V', type: 'SECURITY_MATRIX', status: 'VIGILANT', load: 12.5, connections: 256, depthLayer: -800, positionX: '70%', positionY: '80%' },
    { id: 'RHO-A', type: 'QUANTUM_UPLINK', status: 'ENTANGLED', load: 100, connections: 2, depthLayer: -1200, positionX: '30%', positionY: '70%' },
  ];

  return (
    <div className={`god-mode-viewport ${mounted ? 'mounted' : ''}`} ref={scrollContainerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;800&family=JetBrains+Mono:wght@100;400&display=swap');

        :root {
          --g-bg: #030305;
          --g-cyan: #00f5ff;
          --g-white: #ffffff;
          --g-violet: #9b6dff;
          
          --f-tech: 'JetBrains Mono', monospace;
          --f-sans: 'Exo 2', sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--g-bg);
          color: var(--g-white);
          font-family: var(--f-sans);
          overflow: hidden; /* Prevent native scroll, we handle via wheel event */
        }

        /* ---------------------------------
           Atmosphere & Void
           --------------------------------- */
        .god-mode-viewport {
          height: 100vh;
          width: 100vw;
          position: relative;
          perspective: 1500px;
          background: radial-gradient(circle at 50% 50%, #0a0a15 0%, var(--g-bg) 70%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Subtle Breathing Pulse */
        .ambient-pulse {
          position: absolute;
          inset: -50%;
          background: radial-gradient(circle at center, rgba(155, 109, 255, 0.05) 0%, transparent 60%);
          animation: breathe 8s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes breathe {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 1; filter: hue-rotate(20deg); }
        }

        /* ------------------------------------
           The 3D Matrix Container
           ------------------------------------ */
        .matrix-container {
          position: absolute;
          width: 100vw;
          height: 100vh;
          transform-style: preserve-3d;
          /* The magic happens here: wheel scrolls depth */
          transition: transform 0.5s cubic-bezier(0.1, 0.9, 0.2, 1);
        }

        /* When a card is active, freeze the matrix */
        .god-mode-viewport.has-active .matrix-container {
          filter: blur(5px) brightness(0.3);
          transform: translateZ(-1000px) !important;
          transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1), filter 1s ease;
          pointer-events: none;
        }

        /* ---------------------------------
           Holo Cards & Ripple Effect
           --------------------------------- */
        .holo-card {
          position: absolute;
          width: 280px;
          transform-style: preserve-3d;
          /* Add subtle float animation per card */
          animation: floatNode 6s ease-in-out infinite alternate;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        /* Stagger float animations so they don't move together */
        .holo-card:nth-child(odd) { animation-duration: 8s; animation-direction: alternate-reverse; }
        .holo-card:nth-child(3n) { animation-duration: 11s; }

        @keyframes floatNode {
          0% { margin-top: 0px; margin-left: 0px; }
          100% { margin-top: -15px; margin-left: 10px; }
        }

        /* The actual panel design */
        .h-panel {
          background: rgba(10, 15, 30, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 245, 255, 0.1);
          border-radius: 4px; /* Slight edge */
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          
          /* Inner glowing cutouts */
          box-shadow: 
            inset 0 0 20px rgba(0,0,0,0.8),
            0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.3s;
        }

        /* Animated Light Scan Border */
        .h-panel::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 2px;
          background: linear-gradient(90deg, transparent, var(--g-cyan), transparent);
          animation: scanTop 3s linear infinite;
        }
        @keyframes scanTop { 100% { left: 200%; } }

        /* Ripple Effect Logic */
        /* If matrix is NOT active, and we hover over ANY card, dim siblings slightly */
        .matrix-container:hover .holo-card:not(:hover) .h-panel {
          opacity: 0.5;
          filter: blur(2px);
          transform: scale(0.95);
        }
        
        .holo-card:hover .h-panel {
          border-color: rgba(0, 245, 255, 0.5);
          background: rgba(10, 15, 30, 0.8);
          box-shadow: 
            0 0 40px rgba(0, 245, 255, 0.2),
            inset 0 0 40px rgba(155, 109, 255, 0.2);
          transform: translateZ(50px) scale(1.05); /* Pop out locally */
        }

        /* ---------------------------------
           Card Typography & Data
           --------------------------------- */
        .node-type {
          font-family: var(--f-tech);
          font-size: 0.6rem;
          color: var(--g-violet);
          letter-spacing: 3px;
          margin-bottom: 0.5rem;
        }

        .node-id {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--g-white);
          text-shadow: 0 0 10px rgba(255,255,255,0.4);
          margin-bottom: 1.5rem;
        }

        .node-meta {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 1rem;
          margin-top: 1rem;
        }

        .meta-box { display: flex; flex-direction: column; }
        .meta-label { font-family: var(--f-tech); font-size: 0.55rem; color: rgba(255,255,255,0.4); margin-bottom: 0.3rem; }
        .meta-val { font-family: var(--f-tech); font-size: 0.9rem; color: var(--g-cyan); }
        .meta-val span { font-size: 0.6rem; color: rgba(255,255,255,0.5); }

        /* Floating micro-data block */
        .micro-data {
          position: absolute;
          top: -10px; right: -20px;
          background: var(--g-bg);
          border: 1px solid var(--g-violet);
          padding: 0.2rem 0.5rem;
          font-family: var(--f-tech);
          font-size: 0.5rem;
          color: var(--g-violet);
          transform: translateZ(20px);
        }

        /* ---------------------------------
           Immersive Expansion (Active State)
           --------------------------------- */
        /* The container holding the expanded view */
        .expansion-layer {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none; /* Let clicks pass unless visible */
        }

        .expansion-layer.is-visible {
          pointer-events: auto;
        }

        .god-card {
          width: 80vw;
          height: 80vh;
          background: rgba(5, 7, 12, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 245, 255, 0.3);
          box-shadow: 0 0 100px rgba(0, 0, 0, 0.9), inset 0 0 80px rgba(0, 245, 255, 0.05);
          position: relative;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          
          /* Morph animation */
          opacity: 0;
          transform: scale(0.9) translateZ(-100px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .expansion-layer.is-visible .god-card {
          opacity: 1;
          transform: scale(1) translateZ(0);
        }

        .god-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid rgba(255,255,255,0.05);
          padding-bottom: 2rem;
          margin-bottom: 2rem;
        }

        .god-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(180deg, #fff, var(--g-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(0,245,255,0.4));
        }

        .btn-transcend {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--g-white);
          font-family: var(--f-tech);
          padding: 0.8rem 2rem;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
        }

        .btn-transcend:hover {
          background: var(--g-white);
          color: var(--g-bg);
          box-shadow: 0 0 20px rgba(255,255,255,0.5);
        }

        .god-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          flex: 1;
        }

        .g-panel {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* Fake Code Stream */
        .code-stream {
          font-family: var(--f-tech);
          font-size: 0.65rem;
          color: rgba(255,255,255,0.3);
          line-height: 1.8;
          height: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }

        /* Big glowing circle in main panel */
        .nexus-core {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 300px; height: 300px;
          border-radius: 50%;
          border: 1px dashed rgba(155, 109, 255, 0.4);
          animation: spinSlow 30s linear infinite;
        }
        .nexus-core::before {
          content: ''; position: absolute; inset: 20px;
          border: 1px solid rgba(0, 245, 255, 0.2); border-radius: 50%;
          animation: spinSlow 20s linear infinite reverse;
        }
        .nexus-core-center {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 50px; height: 50px; background: var(--g-cyan); border-radius: 50%;
          box-shadow: 0 0 50px var(--g-cyan), 0 0 100px var(--g-violet);
          animation: pulseCore 2s ease infinite alternate;
        }

        @keyframes spinSlow { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes pulseCore { 100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; } }

      `}</style>
      
      <div className="ambient-pulse" />

      {/* Main 3D Matrix Container mapping scrollDepth to Z translation */}
      <div 
        className="matrix-container"
        style={!activeNode ? { transform: `translateZ(${scrollDepth}px)` } : undefined}
      >
        {nodes.map((node) => {
          // Calculate final Z position = node's base depth + our scroll offset
          // Ensure they are placed in 3D space relative to parent
          return (
            <div 
              key={node.id} 
              className="holo-card"
              style={{
                left: node.positionX,
                top: node.positionY,
                // Center origin for the left/top positioning
                transform: `translate(-50%, -50%) translateZ(${node.depthLayer}px)`
              }}
              onClick={() => setActiveNode(node.id)}
            >
              <div className="h-panel">
                <div className="micro-data">SYS.OK</div>
                <div className="node-type">{node.type}</div>
                <div className="node-id">{node.id}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px' }}>
                  {node.status}
                </div>
                
                <div className="node-meta">
                  <div className="meta-box">
                    <span className="meta-label">LOAD</span>
                    <span className="meta-val">{node.load}<span>%</span></span>
                  </div>
                  <div className="meta-box" style={{ alignItems: 'flex-end' }}>
                    <span className="meta-label">UPLINKS</span>
                    <span className="meta-val">{node.connections.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Intelligence Projection layer */}
      <div className={`expansion-layer ${activeNode ? 'is-visible' : ''}`}>
        {activeNode && (
          <div className="god-card">
            <div className="god-header">
              <div>
                <div className="node-type" style={{ fontSize: '1rem' }}>NEURAL_PATHWAY_ANALYSIS</div>
                <div className="god-title">{activeNode}</div>
              </div>
              <button className="btn-transcend" onClick={() => setActiveNode(null)}>RETURN_TO_VOID</button>
            </div>
            
            <div className="god-grid">
              <div className="g-panel">
                <div style={{ color: 'var(--g-violet)', fontFamily: 'var(--f-tech)', fontSize: '0.8rem', marginBottom: '1rem' }}>LIVE_DATA_STREAM</div>
                <div className="code-stream">
                  0x7FF8A4B2: Allocating quantum memory...<br/>
                  0x7FF8A4B3: Synapse linkage initiated.<br/>
                  0x7FF8A4B4: Traversing multi-dimensional array.<br/>
                  10010101 11010010 00101011<br/>
                  [WARN] Predictive drift detected.<br/>
                  Compensating...<br/>
                  0x7FF8A4D0: Stability reached at 99.98%.<br/>
                  Awaiting directive...<br/>
                  _<br/>
                </div>
              </div>
              
              <div className="g-panel" style={{ background: 'transparent', border: 'none' }}>
                <div className="nexus-core"></div>
                <div className="nexus-core-center"></div>
                
                {/* Floating data bits around core */}
                <div style={{ position: 'absolute', top: '20%', left: '10%', fontFamily: 'var(--f-tech)', fontSize: '0.6rem', color: 'var(--g-cyan)' }}>COH: 0.994</div>
                <div style={{ position: 'absolute', bottom: '20%', right: '10%', fontFamily: 'var(--f-tech)', fontSize: '0.6rem', color: 'var(--g-violet)' }}>ENTG: STABLE</div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default GodLevelHolographicIntelligenceDemoGemini;
