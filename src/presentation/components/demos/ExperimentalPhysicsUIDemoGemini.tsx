'use client';

import React, { useEffect, useRef, useState } from 'react';

// Experimental Physics-Based Web Interface - Gemini 3.1 Pro Implementation
// Avant-garde layout using faux physics (mouse attraction/repulsion), kinetic typography,
// and moving mesh gradients.

interface DraggableNode {
  id: string;
  type: 'card' | 'circle' | 'pill';
  title: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  mass: number;
  isDragging: boolean;
  content?: string;
}

export const ExperimentalPhysicsUIDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<DraggableNode[]>([]);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [scrollOffset, setScrollOffset] = useState(0);

  // Initialize nodes
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const initialNodes: DraggableNode[] = [
      { id: 'n1', type: 'circle', title: 'DISRUPT', x: isMobile ? 50 : 200, y: 200, vx: 0, vy: 0, width: 250, height: 250, mass: 1.5, isDragging: false },
      { id: 'n2', type: 'card', title: 'VISIONARY ARCHITECTURE', x: isMobile ? 50 : 600, y: 150, vx: 0, vy: 0, width: 320, height: 400, mass: 2, isDragging: false, content: "We are moving beyond the grid. Layouts that breathe and respond to intent." },
      { id: 'n3', type: 'pill', title: 'FUTURE STATE', x: isMobile ? 50 : 300, y: 600, vx: 0, vy: 0, width: 280, height: 80, mass: 1, isDragging: false },
      { id: 'n4', type: 'circle', title: 'ART_TECH', x: isMobile ? 150 : 750, y: 650, vx: 0, vy: 0, width: 180, height: 180, mass: 1.2, isDragging: false },
      { id: 'n5', type: 'card', title: 'MAGNETIC UI', x: isMobile ? 30 : 1000, y: 300, vx: 0, vy: 0, width: 300, height: 200, mass: 1.8, isDragging: false, content: "Cursor proximity curves space. Elements pull toward you." },
    ];
    setNodes(initialNodes);
  }, []);

  // Physics Loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updatePhysics = (time: number) => {
      const dt = Math.min((time - lastTime) / 16, 2); // Max delta step to avoid huge jumps
      lastTime = time;

      setNodes((prevNodes) => {
        return prevNodes.map((node) => {
          if (node.isDragging) return node; // Dragging overrides physics

          let { vx, vy, x, y } = node;
          
          // 1. Friction / Damping
          vx *= 0.92;
          vy *= 0.92;

          // 2. Mouse Attraction (Magnetic Snap effect)
          // We apply a gentle pull if mouse is within a certain radius
          const dx = mouse.x - (x + node.width / 2);
          const dy = mouse.y - (y + node.height / 2);
          const distSq = dx * dx + dy * dy;
          const pullRadiusSq = 350 * 350;

          if (distSq > 0 && distSq < pullRadiusSq) {
            const dist = Math.sqrt(distSq);
            // Stronger pull when closer, up to a limit
            const pullStrength = (1 - dist / Math.sqrt(pullRadiusSq)) * 1.5 / node.mass;
            vx += (dx / dist) * pullStrength * dt;
            vy += (dy / dist) * pullStrength * dt;
          }

          // 3. Gentle Float (Wander)
          vx += (Math.random() - 0.5) * 0.2;
          vy += (Math.random() - 0.5) * 0.2;

          // Apply velocity
          x += vx * dt;
          y += vy * dt;

          // 4. Soft Boundary Collision (Bounce back if leaving screen)
          const margin = 50;
          if (x < margin) vx += (margin - x) * 0.05;
          if (x + node.width > window.innerWidth - margin) vx -= (x + node.width - (window.innerWidth - margin)) * 0.05;
          if (y < margin) vy += (margin - y) * 0.05;
          if (y + node.height > window.innerHeight - margin) vy -= (y + node.height - (window.innerHeight - margin)) * 0.05;

          return { ...node, x, y, vx, vy };
        });
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mouse]);

  // Scroll handler for perspective distortion
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // --- Dragging Handlers ---
  const handlePointerDown = (e: React.PointerEvent, id: string) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setNodes(ns => ns.map(n => n.id === id ? { ...n, isDragging: true, vx: 0, vy: 0 } : n));
  };

  const handlePointerMove = (e: React.PointerEvent, id: string) => {
    setMouse({ x: e.clientX, y: e.clientY }); // Keep global mouse updated
    setNodes(ns => ns.map(n => {
      if (n.id === id && n.isDragging) {
        // Simple 1:1 drag update
        return { ...n, x: n.x + e.movementX, y: n.y + e.movementY };
      }
      return n;
    }));
  };

  const handlePointerUp = (e: React.PointerEvent, id: string) => {
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setNodes(ns => ns.map(n => {
      if (n.id === id) {
        // Fling effect: inject velocity based on last movement
        return { ...n, isDragging: false, vx: e.movementX * 0.8, vy: e.movementY * 0.8 };
      }
      return n;
    }));
  };

  const onGlobalPointerMove = (e: React.PointerEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };


  // Base distortion based on scrolling (stretches everything slightly)
  const structuralDistort = `skewY(${Math.sin(scrollOffset * 0.01) * 2}deg) scaleY(${1 + Math.abs(Math.cos(scrollOffset * 0.005)) * 0.05})`;

  return (
    <div 
      className="physics-container" 
      ref={containerRef}
      onPointerMove={onGlobalPointerMove}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@100;400;800;900&family=Inter:wght@400;500&display=swap');
      `}</style>
      
      {/* Dynamic Fluid Gradient Background */}
      <div className="mesh-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="noise-overlay"></div>
      </div>

      <div className="scrolling-stage" style={{ transform: structuralDistort, minHeight: '150vh' }}>
        
        {/* Giant Kinetic Typography Background */}
        <div className="kinetic-typo" style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}>
          <div className="typo-line mask-text">BREAK</div>
          <div className="typo-line outline-text indent-1">THE</div>
          <div className="typo-line glow-text indent-2">GRID</div>
        </div>

        {/* The Physics Nodes */}
        {nodes.map(node => (
          <div
            key={node.id}
            className={`phys-node node-${node.type} ${node.isDragging ? 'dragging' : ''}`}
            style={{
              transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
              width: `${node.width}px`,
              height: `${node.height}px`,
            }}
            onPointerDown={(e) => handlePointerDown(e, node.id)}
            onPointerMove={(e) => handlePointerMove(e, node.id)}
            onPointerUp={(e) => handlePointerUp(e, node.id)}
            onPointerCancel={(e) => handlePointerUp(e, node.id)}
          >
            <div className="node-inner">
               <h3 className="node-title">{node.title}</h3>
               {node.content && <p className="node-content">{node.content}</p>}
               
               {/* Magnetic Field Visualizer (appears on hover/drag) */}
               <div className="magnetic-field"></div>
            </div>
          </div>
        ))}

      </div>

      <style>{`
        :root {
          --ex-bg: #E8E5DF; /* Warm brutalist grey */
          --ex-accent-1: #FF3366; /* Vibrant Pink */
          --ex-accent-2: #4D4DFF; /* Electric Blue */
          --ex-accent-3: #FF9900; /* Neon Orange */
          --ex-text: #111111;
          
          --font-display: 'Cabinet Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
        }

        .physics-container {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          background: var(--ex-bg);
          overflow-x: hidden;
          color: var(--ex-text);
          font-family: var(--font-body);
        }

        /* --- Mesh Gradient Background --- */
        .mesh-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background: #dbd8d0;
        }

        .blob {
          position: absolute;
          filter: blur(80px);
          opacity: 0.6;
          border-radius: 50%;
          animation: floatBlob 20s infinite alternate ease-in-out;
          mix-blend-mode: multiply;
        }

        .blob-1 {
          top: -10%; left: -10%;
          width: 50vw; height: 50vw;
          background: var(--ex-accent-1);
          animation-duration: 25s;
        }

        .blob-2 {
          bottom: -20%; right: -10%;
          width: 60vw; height: 60vw;
          background: var(--ex-accent-2);
          animation-duration: 22s;
          animation-delay: -5s;
        }

        .blob-3 {
          top: 30%; left: 40%;
          width: 40vw; height: 40vw;
          background: var(--ex-accent-3);
          animation-duration: 28s;
          animation-delay: -10s;
        }

        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 15%) scale(1.1) rotate(45deg); }
          100% { transform: translate(-5%, 5%) scale(0.9) rotate(-45deg); }
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.08"/%3E%3C/svg%3E');
          pointer-events: none;
        }

        /* --- Scrolling Stage --- */
        .scrolling-stage {
          position: relative;
          z-index: 10;
          will-change: transform;
          transition: transform 0.1s linear; /* Smooths the scroll distortion */
        }

        /* --- Kinetic Typography --- */
        .kinetic-typo {
          position: absolute;
          top: 15vh;
          left: -5vw;
          width: 110vw;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .typo-line {
          font-family: var(--font-display);
          font-size: clamp(8rem, 20vw, 24rem);
          font-weight: 900;
          line-height: 0.8;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          white-space: nowrap;
        }

        .indent-1 { padding-left: 15vw; }
        .indent-2 { padding-left: 30vw; }

        .mask-text {
          color: rgba(17, 17, 17, 0.9);
        }

        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px rgba(17, 17, 17, 0.5);
        }

        .glow-text {
          color: var(--ex-bg);
          text-shadow: 0 0 40px rgba(77, 77, 255, 0.8);
          mix-blend-mode: color-dodge;
        }

        /* --- Draggable Physics Nodes --- */
        .phys-node {
          position: absolute;
          top: 0; left: 0;
          cursor: grab;
          user-select: none;
          touch-action: none; /* Crucial for pointer events in React */
          will-change: transform;
        }

        .phys-node.dragging {
          cursor: grabbing;
          z-index: 100; /* Bring to front */
        }

        .node-inner {
          width: 100%; height: 100%;
          border-radius: inherit;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 40px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          color: var(--ex-text);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .phys-node:hover .node-inner,
        .phys-node.dragging .node-inner {
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 0 0 2px rgba(255,255,255,0.4);
        }

        /* Magnetic Field Viz */
        .magnetic-field {
          position: absolute;
          top: 50%; left: 50%;
          width: 0%; height: 0%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          opacity: 0;
          transition: all 0.4s ease;
          pointer-events: none;
          z-index: -1;
        }

        .phys-node.dragging .magnetic-field {
          width: 200%; height: 200%;
          opacity: 1;
        }

        /* Shape Variants */
        .node-card .node-inner {
          border-radius: 24px;
          justify-content: space-between;
          padding: 2.5rem;
        }

        .node-circle .node-inner {
          border-radius: 50%;
          align-items: center;
          text-align: center;
        }

        .node-pill .node-inner {
          border-radius: 100px;
          align-items: center;
          padding: 0 2.5rem;
        }

        /* Typography inside nodes */
        .node-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.5rem;
          line-height: 1.1;
          margin: 0;
          text-transform: uppercase;
        }

        .node-circle .node-title { font-size: 2rem; }

        .node-content {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.5;
          opacity: 0.8;
          margin: 0;
          font-weight: 500;
        }

      `}</style>
    </div>
  );
};

export default ExperimentalPhysicsUIDemoGemini;
