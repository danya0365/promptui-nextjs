'use client';

import React, { useEffect, useRef, useState } from 'react';

// 3D Civilization Simulation Interface - Gemini 3.1 Pro Implementation
// Pure CSS faux-3D isometric cityscape, neon lighting, scroll/hover camera mechanics.

interface BuildingNode {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  color: 'cyan' | 'amber';
  data: string[];
}

const CIVILIZATION_NODES: BuildingNode[] = [
  { id: 'sec-01', name: 'CORE MAINFRAME', x: 200, y: 150, width: 80, height: 80, depth: 220, color: 'cyan', data: ['SYS.STATUS: OPTIMAL', 'QUANTUM.LINK: ESTABLISHED'] },
  { id: 'sec-02', name: 'GLOBAL ARCHIVE', x: 450, y: 80, width: 120, height: 60, depth: 150, color: 'amber', data: ['CAPACITY: 94%', 'ACCESS.RATE: 4.2TB/s'] },
  { id: 'sec-03', name: 'SECURITY NEXUS', x: 100, y: 400, width: 60, height: 100, depth: 180, color: 'cyan', data: ['THREAT.LEVEL: LOW', 'FIREWALL: V.84 ACTIVE'] },
  { id: 'sec-04', name: 'ENERGY GRID', x: 550, y: 350, width: 90, height: 90, depth: 250, color: 'amber', data: ['OUTPUT: 1.2GW', 'RESERVES: STABLE'] },
  { id: 'sec-05', name: 'RESEARCH HUB', x: 300, y: 500, width: 140, height: 140, depth: 120, color: 'cyan', data: ['PROJECTS: 12 ACTIVE', 'SIMULATION: RUNNING'] },
  { id: 'sec-06', name: 'COMMUNICATION RELAY', x: 650, y: 180, width: 50, height: 50, depth: 300, color: 'cyan', data: ['PING: 1MS', 'NODES: 1,402,844'] },
];

export const CivilizationSimulationDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeNode, setActiveNode] = useState<BuildingNode | null>(null);
  const [zoomTarget, setZoomTarget] = useState<BuildingNode | null>(null);

  // Handle fake scrolling to control camera
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (zoomTarget) return; // Disable scroll if zoomed in
      setScrollY((prev) => Math.min(Math.max(prev + e.deltaY * 0.5, 0), 2000));
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [zoomTarget]);

  // Calculate Camera Transforms based on scroll Y
  // Base transform is an isometric view. Scroll moves the camera forward (translateZ / translateY) and subtly rotates.
  const getCameraTransform = () => {
    if (zoomTarget) {
      // "Fly into" the structure
      // We counter the container rotation, move to the target's specific coordinates, and push deep into Z.
      const tx = -zoomTarget.x - zoomTarget.width / 2 + window.innerWidth / 2;
      const ty = -zoomTarget.y - zoomTarget.height / 2 + window.innerHeight / 2;
      return `translate3d(${tx}px, ${ty + 100}px, 600px) rotateX(10deg) rotateZ(0deg)`;
    }

    const baseRotateX = 60;
    const baseRotateZ = -45 + (scrollY * 0.01);
    const translateZ = -300 + scrollY * 0.4;
    const translateY = -100 + scrollY * 0.5;
    
    return `translate3d(0px, ${translateY}px, ${translateZ}px) rotateX(${baseRotateX}deg) rotateZ(${baseRotateZ}deg)`;
  };

  return (
    <div className="civ-container" ref={containerRef}>
      {/* Background Ambience */}
      <div className="ambient-fog"></div>
      
      {/* Scroll indicator when not zoomed */}
      {!zoomTarget && (
        <div className="scroll-indicator">
          SCROLL TO NAVIGATE SECTOR
          <div className="scroll-line"></div>
        </div>
      )}

      {/* Main UI Overlay (Holographic details) */}
      <div className={`hologram-overlay ${zoomTarget ? 'active' : ''}`}>
        {zoomTarget && (
          <div className="zoomed-interface">
            <button className="back-btn" onClick={() => setZoomTarget(null)}>
              ← ABORT APPROACH
            </button>
            <div className="hud-content">
              <h2>{zoomTarget.name}</h2>
              <div className="data-stream">
                {zoomTarget.data.map((d, i) => (
                  <div key={i} className="data-row">
                    <span className="data-prefix">›</span> {d}
                  </div>
                ))}
                <div className="data-row loading"><span>_</span></div>
              </div>
              <div className="sys-graph">
                <div className="bar" style={{ height: '80%' }}></div>
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3D World Space */}
      <div className="world-space-wrapper">
        <div className="world-space" style={{ transform: getCameraTransform() }}>
          
          {/* Base Grid Plane */}
          <div className="ground-grid"></div>
          
          {/* Light Trails (SVGs drawn matching coordinates) */}
          <svg className="light-trails" viewBox="0 0 1000 1000">
            {CIVILIZATION_NODES.map((node, i) => {
              if (i === 0) return null;
              const prev = CIVILIZATION_NODES[i - 1];
              return (
                <path 
                  key={`trail-${i}`}
                  d={`M ${prev.x + prev.width/2} ${prev.y + prev.height/2} L ${node.x + node.width/2} ${node.y + node.height/2}`}
                  stroke={node.color === 'cyan' ? 'rgba(0, 240, 255, 0.4)' : 'rgba(255, 170, 0, 0.4)'}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="anim-trail"
                />
              );
            })}
          </svg>

          {/* Buildings */}
          {CIVILIZATION_NODES.map((node) => (
            <div 
              key={node.id}
              className={`building ${node.color} ${activeNode?.id === node.id ? 'hovered' : ''} ${zoomTarget?.id === node.id ? 'zoomed' : ''}`}
              style={{
                left: node.x,
                top: node.y,
                width: node.width,
                height: node.height,
                transform: `translateZ(${node.depth / 2}px)` // Position it halfway up so it rests on grid
              }}
              onMouseEnter={() => !zoomTarget && setActiveNode(node)}
              onMouseLeave={() => !zoomTarget && setActiveNode(null)}
              onClick={() => setZoomTarget(node)}
            >
              {/* 3D Faces of the building */}
              <div className="face face-top" style={{ transform: `translateZ(${node.depth / 2}px)` }}>
                 <div className="roof-detail"></div>
              </div>
              <div className="face face-front" style={{ height: node.depth, transform: `rotateX(-90deg) translateZ(${node.height}px) translateY(${node.depth / 2}px)` }}></div>
              <div className="face face-right" style={{ width: node.depth, transform: `rotateY(90deg) translateZ(${node.width}px) translateX(${-node.depth / 2}px)` }}></div>
              <div className="face face-back" style={{ height: node.depth, transform: `rotateX(90deg) translateY(${-node.depth / 2}px)` }}></div>
              <div className="face face-left" style={{ width: node.depth, transform: `rotateY(-90deg) translateX(${node.depth / 2}px)` }}></div>
              
              {/* Floating Hologram Label on Hover */}
              {activeNode?.id === node.id && !zoomTarget && (
                <div className="floating-label" style={{ transform: `translateZ(${node.depth + 40}px) rotateX(-90deg) rotateY(45deg)` }}>
                  {node.name}
                  <div className="label-line"></div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Inter:wght@300;600;900&display=swap');

        :root {
          --civ-bg: #050508;
          --civ-cyan: #00F0FF;
          --civ-amber: #FFAA00;
          --civ-grid: rgba(0, 240, 255, 0.1);
        }

        .civ-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: var(--civ-bg);
          overflow: hidden;
          font-family: 'Share Tech Mono', monospace;
          color: white;
          perspective: 1200px; /* Crucial for 3D effect */
        }

        /* Ambient Fog for Depth */
        .ambient-fog {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center 20%, transparent 20%, var(--civ-bg) 80%);
          z-index: 5;
          pointer-events: none;
        }

        /* World Space containing 3D elements */
        .world-space-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none; /* Let clicks pass through unless on building */
          z-index: 1;
        }

        .world-space {
          position: relative;
          width: 1000px;
          height: 1000px;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* The Ground Grid */
        .ground-grid {
          position: absolute;
          inset: -1000px;
          background-image: 
            linear-gradient(var(--civ-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--civ-grid) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: translateZ(0);
          box-shadow: inset 0 0 400px var(--civ-bg);
        }

        /* Light Trails SVG */
        .light-trails {
          position: absolute;
          top: 0; left: 0;
          width: 1000px; height: 1000px;
          transform: translateZ(5px); /* Just above grid */
          pointer-events: none;
        }

        .anim-trail {
          animation: dash 20s linear infinite;
        }

        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }

        /* 3D Buildings */
        .building {
          position: absolute;
          transform-style: preserve-3d;
          pointer-events: auto; /* Enable hover/click */
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .building.hovered {
          filter: brightness(1.5) drop-shadow(0 0 20px rgba(0,240,255,0.4));
        }

        .building.zoomed {
          filter: brightness(2) drop-shadow(0 0 40px var(--civ-cyan));
        }

        .face {
          position: absolute;
          background: rgba(10, 15, 25, 0.85); /* Dark structural base */
          border: 1px solid rgba(255, 255, 255, 0.05); /* Very subtle structural edge */
          box-sizing: border-box;
          backdrop-filter: blur(4px);
        }

        /* Top Face */
        .face-top {
          top: 0; left: 0; width: 100%; height: 100%;
          border: 1px solid currentColor;
          background: rgba(5, 10, 15, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .roof-detail {
          width: 50%; height: 50%;
          border: 1px dashed currentColor;
          opacity: 0.5;
        }

        /* Side faces receive linear gradients to simulate light cascading down */
        .face-front, .face-back { width: 100%; left: 0; top: 0; transform-origin: top center; }
        .face-left, .face-right { height: 100%; left: 0; top: 0; transform-origin: left center; }

        /* Themed Colors for Buildings */
        .building.cyan {
          color: var(--civ-cyan);
        }
        .building.cyan .face-front, .building.cyan .face-right, .building.cyan .face-left, .building.cyan .face-back {
          background: linear-gradient(180deg, rgba(0, 240, 255, 0.4) 0%, rgba(10, 15, 25, 0.9) 100%);
          border-top: 2px solid var(--civ-cyan);
        }

        .building.amber {
          color: var(--civ-amber);
        }
        .building.amber .face-front, .building.amber .face-right, .building.amber .face-left, .building.amber .face-back {
          background: linear-gradient(180deg, rgba(255, 170, 0, 0.4) 0%, rgba(10, 15, 25, 0.9) 100%);
          border-top: 2px solid var(--civ-amber);
        }

        /* Floating Hologram Label */
        .floating-label {
          position: absolute;
          top: 50%; left: 50%;
          background: rgba(0,0,0,0.8);
          border: 1px solid currentColor;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 0 15px currentColor;
          transform-style: preserve-3d;
          animation: floatLabel 2s ease-in-out infinite alternate;
        }

        @keyframes floatLabel {
          0% { transform: translate(-50%, -50%) translateZ(40px) rotateX(-90deg) rotateY(45deg); }
          100% { transform: translate(-50%, -50%) translateZ(60px) rotateX(-90deg) rotateY(45deg); }
        }

        .label-line {
          position: absolute;
          bottom: -40px; left: 50%;
          width: 1px; height: 40px;
          background: currentColor;
          opacity: 0.5;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          font-size: 12px;
          letter-spacing: 4px;
          text-align: center;
          color: rgba(255,255,255,0.5);
          animation: pulse-text 2s infinite alternate;
        }

        .scroll-line {
          width: 1px;
          height: 30px;
          background: linear-gradient(to bottom, var(--civ-cyan), transparent);
          margin: 10px auto 0;
          opacity: 0.5;
        }

        @keyframes pulse-text {
          to { opacity: 0.2; }
        }

        /* Hologram Overlay (Zoomed State UI) */
        .hologram-overlay {
          position: absolute;
          inset: 0;
          z-index: 20;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 60px;
          opacity: 0;
          transition: opacity 1s ease;
          background: radial-gradient(circle at left, rgba(0, 240, 255, 0.05) 0%, transparent 50%);
        }

        .hologram-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        .zoomed-interface {
          background: rgba(10,15,20, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-left: 4px solid var(--civ-cyan);
          padding: 40px;
          width: 400px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8);
          transform: translateX(-50px);
          animation: slideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 0.5s; /* Delay to let camera fly first */
          opacity: 0;
        }

        @keyframes slideIn {
          to { transform: translateX(0); opacity: 1; }
        }

        .back-btn {
          background: transparent;
          border: none;
          color: var(--civ-cyan);
          font-family: inherit;
          font-size: 12px;
          cursor: pointer;
          margin-bottom: 30px;
          padding: 0;
          display: flex;
          align-items: center;
          transition: filter 0.2s;
        }

        .back-btn:hover {
          filter: brightness(1.5) drop-shadow(0 0 8px var(--civ-cyan));
        }

        .hud-content h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: 28px;
          margin: 0 0 20px 0;
          letter-spacing: 2px;
          color: white;
          text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }

        .data-stream {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
        }

        .data-row {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 8px;
        }

        .data-prefix { color: var(--civ-cyan); margin-right: 8px; font-weight: bold; }
        
        .loading span { animation: blink 1s infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        .sys-graph {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 60px;
          border-bottom: 1px solid var(--civ-cyan);
          padding-bottom: 5px;
        }

        .sys-graph .bar {
          flex: 1;
          background: linear-gradient(to top, var(--civ-cyan), transparent);
          opacity: 0.7;
          animation: fluctuate 3s infinite ease-in-out alternate;
        }

        .sys-graph .bar:nth-child(2) { animation-delay: -0.5s; background: linear-gradient(to top, var(--civ-amber), transparent); opacity: 0.5;}
        .sys-graph .bar:nth-child(3) { animation-delay: -1.2s; }
        .sys-graph .bar:nth-child(4) { animation-delay: -2s; }

        @keyframes fluctuate {
          0% { transform: scaleY(0.8); transform-origin: bottom; }
          100% { transform: scaleY(1.1); transform-origin: bottom; }
        }

      `}</style>
    </div>
  );
};

export default CivilizationSimulationDemoGemini;
