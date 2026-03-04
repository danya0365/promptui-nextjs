'use client';

import React, { useEffect, useRef, useState } from 'react';

// Brain-Computer Interface Showcase - Gemini 3.1 Pro Implementation
// High-tech neural simulation with electric trails, ambient glow, and sync states.

export const BrainComputerInterfaceDemoGemini: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollZ, setScrollZ] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [synced, setSynced] = useState(false);

  // Handle Scroll (Synchronization Progress)
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY;
      setScrollZ(scrollProgress);
      if (scrollProgress > 400 && !synced) {
        setSynced(true);
      } else if (scrollProgress <= 400 && synced) {
        setSynced(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [synced]);

  // Canvas Neural Network Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for electric trails
    const targetMouse = { x: -1000, y: -1000 };
    const handlePointerMove = (e: PointerEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', handlePointerMove);

    // Neural Node Class
    class NeuralNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseSize: number;
      connections: NeuralNode[];
      activation: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.baseSize = Math.random() * 2 + 1;
        this.connections = [];
        this.activation = 0; // 0 to 1 glow state
      }

      update() {
        // Slow biological drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Decay activation
        this.activation *= 0.95;

        // Mouse interaction (Electric excitation)
        const dx = targetMouse.x - this.x;
        const dy = targetMouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          this.activation = Math.max(this.activation, 1 - (dist / 150));
          // Slight attraction to mouse
          this.x += (dx / dist) * 0.5;
          this.y += (dy / dist) * 0.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D, isSynced: boolean) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.baseSize + (this.activation * 3), 0, Math.PI * 2);
        
        // Base color is dim cyan/blue, active color is bright cyan/white
        // If synced, baseline glow increases
        const baseAlpha = isSynced ? 0.3 : 0.1;
        const r = 0 + this.activation * 150;
        const g = 200 + this.activation * 55;
        const b = 255;
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha + this.activation})`;
        ctx.fill();

        // Volumetric Glow
        if (this.activation > 0.1) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.baseSize * 4 * this.activation, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 200, 255, ${this.activation * 0.2})`;
          ctx.fill();
        }
      }
    }

    const NODE_COUNT = width < 768 ? 60 : 120;
    const nodes: NeuralNode[] = Array.from({ length: NODE_COUNT }, () => new NeuralNode());

    // Build static connection graph (simulating physical brain pathways limitation)
    nodes.forEach((node, i) => {
      // Find 2-4 closest nodes to connect to
      const distances = nodes.map((n, idx) => {
        if (idx === i) return { idx, d: Infinity };
        const dx = node.x - n.x;
        const dy = node.y - n.y;
        return { idx, d: dx*dx + dy*dy };
      }).sort((a,b) => a.d - b.d);
      
      const connectCount = Math.floor(Math.random() * 3) + 2;
      for(let j=0; j<connectCount; j++) {
        node.connections.push(nodes[distances[j].idx]);
      }
    });

    let animationId: number;
    let time = 0;

    const render = () => {
      time += 0.02;
      
      // Clear with dark trail (global composite operation can create cool effects)
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(2, 4, 10, 0.2)'; // Very dark blue/black void
      ctx.fillRect(0, 0, width, height);
      
      ctx.globalCompositeOperation = 'screen';

      // Draw connections
      ctx.lineWidth = 0.5;
      nodes.forEach(node => {
        node.connections.forEach(target => {
          const dx = node.x - target.x;
          const dy = node.y - target.y;
          const distSq = dx*dx + dy*dy;
          
          if (distSq < 30000) { // Only draw if not wrapped around too far
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            
            // If both nodes are active, draw electric spark
            const activeLink = Math.min(node.activation, target.activation);
            if (activeLink > 0.2) {
              // Draw jagged electric line
              const midX = (node.x + target.x) / 2 + (Math.random() - 0.5) * 20;
              const midY = (node.y + target.y) / 2 + (Math.random() - 0.5) * 20;
              ctx.lineTo(midX, midY);
              ctx.lineTo(target.x, target.y);
              ctx.strokeStyle = `rgba(150, 200, 255, ${activeLink})`;
              ctx.lineWidth = 1.5;
            } else {
              // Normal resting line
              ctx.lineTo(target.x, target.y);
              // Line pulses subtly over time
              const pulse = (Math.sin(time + node.x) + 1) * 0.5;
              ctx.strokeStyle = `rgba(0, 150, 255, ${0.05 + pulse * 0.05})`;
              ctx.lineWidth = 0.5;
            }
            ctx.stroke();
          }
        });
      });

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw(ctx, window.scrollY > 400); // Check scroll indirectly here to avoid re-binding
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="bci-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,500;1,300&family=Jura:wght@300;500;700&display=swap');

        :root {
          --bci-cyan: #00E5FF;
          --bci-bg: #02040A;
          --bci-text: #E0F0FF;
        }

        .bci-container {
          position: relative;
          background: var(--bci-bg);
          color: var(--bci-text);
          font-family: 'Jura', sans-serif;
          min-height: 200vh; /* Allow scrolling for sync effect */
          overflow-x: hidden;
          cursor: crosshair;
        }

        .neural-canvas {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          pointer-events: none;
        }

        /* --- UI Overlay --- */
        .hud-layer {
          position: fixed;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .status-bar {
          display: flex;
          justify-content: space-between;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 2px;
          color: var(--bci-cyan);
          opacity: 0.7;
        }

        .wave-monitor {
          width: 200px; height: 50px;
          border-bottom: 1px solid rgba(0,229,255,0.3);
          position: relative;
          overflow: hidden;
        }
        .wave-line {
          position: absolute; top: 50%; left: 0; width: 200%; height: 2px;
          background: var(--bci-cyan);
          /* Very hacky pure CSS sine wave equivalent for visuals */
          box-shadow: 
            10px -10px 0 0 var(--bci-cyan), 20px 10px 0 0 var(--bci-cyan),
            30px -5px 0 0 var(--bci-cyan), 40px 15px 0 0 var(--bci-cyan),
            50px 0px 0 0 var(--bci-cyan), 60px -10px 0 0 var(--bci-cyan),
            70px 10px 0 0 var(--bci-cyan), 80px -5px 0 0 var(--bci-cyan);
          animation: scan 2s linear infinite;
        }
        @keyframes scan { 100% { transform: translateX(-50%); } }

        /* --- Content Panels --- */
        .content-scroll-layer {
          position: relative;
          z-index: 20;
          padding: 10rem 4rem;
          pointer-events: none; /* Let canvas get mouse */
        }

        .panel {
          font-family: 'IBM Plex Mono', monospace;
          background: rgba(2, 4, 10, 0.5);
          border-left: 2px solid var(--bci-cyan);
          padding: 2rem;
          max-width: 500px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: inset 0 0 20px rgba(0, 229, 255, 0.05);
          pointer-events: auto; /* clickable */
          margin-bottom: 40vh;
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .panel-glitch-enter {
          animation: data-materialize 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          transform: translateX(-50px);
        }

        @keyframes data-materialize {
          0% { opacity: 0; transform: translateX(-50px) scale(0.95); filter: blur(10px); }
          50% { filter: blur(2px) contrast(200%) hue-rotate(90deg); }
          100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }

        .panel-header {
          font-family: 'Jura', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
          text-shadow: 0 0 10px var(--bci-cyan);
        }

        .panel-data {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(224, 240, 255, 0.8);
        }

        .sync-warning {
          text-align: center;
          margin-top: 20vh;
          font-size: 1.5rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          animation: pulse-warn 2s infinite alternate;
        }
        @keyframes pulse-warn { 0% { opacity: 0.3; } 100% { opacity: 1; text-shadow: 0 0 20px #fff; } }

        .unlock-badge {
          display: inline-block; padding: 4px 12px;
          background: rgba(0, 229, 255, 0.2); border: 1px solid var(--bci-cyan);
          font-size: 0.7rem; letter-spacing: 2px;
          margin-bottom: 1rem;
        }

      `}</style>

      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="neural-canvas"></canvas>

      {/* Fixed HUD */}
      <div className="hud-layer">
        <div className="status-bar">
          <div>CORTEX_UPLINK: {synced ? 'STABLE' : 'ESTABLISHING...'}</div>
          <div>CORTISOL: 14%</div>
          <div>DOPAMINE: 88%</div>
        </div>
        <div className="status-bar" style={{ alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: '0.6rem', marginBottom: '5px' }}>THETA WAVES</div>
            <div className="wave-monitor"><div className="wave-line"></div></div>
          </div>
          <div>SYNC: {(scrollZ / 400 * 100 > 100 ? 100 : scrollZ / 400 * 100).toFixed(1)}%</div>
        </div>
      </div>

      {/* Scroll Content */}
      <div className="content-scroll-layer">
        
        {/* Intro */}
        <div className="sync-warning" style={{ opacity: synced ? 0 : 1, transition: 'opacity 0.5s' }}>
          SCROLL TO SYNCHRONIZE
        </div>

        {/* Content Panel 1 (Unlocks on scroll) */}
        {synced && (
          <div className="panel panel-glitch-enter" style={{
            // Add a subtle parallax effect on the panel itself
            transform: `translateY(${(scrollZ - 400) * -0.1}px)`
          }}>
            <div className="unlock-badge">ACCESS GRANTED</div>
            <h2 className="panel-header">Deep Memory Archival</h2>
            <div className="panel-data">
              <p>Biological host synchronization complete. Neural pathways integrated into the external mainframe.</p>
              <br/>
              <p>Sector 7 visual cortex data stream is now rendering directly into consciousness bypass.</p>
            </div>
          </div>
        )}

      </div>

      {/* Trailing cursor light */}
      <div style={{
        position: 'fixed', top: mousePos.y, left: mousePos.x, width: '100px', height: '100px',
        background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 5
      }}></div>

    </div>
  );
};

export default BrainComputerInterfaceDemoGemini;
