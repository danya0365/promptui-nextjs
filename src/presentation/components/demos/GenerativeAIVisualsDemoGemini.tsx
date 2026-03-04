'use client';

import React, { useEffect, useRef, useState } from 'react';

// Generative AI Visuals Interface - Gemini 3.1 Pro Implementation
// A fluid, organic canvas-based particle system that simulates neural patterns.
// Reacts to mouse movement and scroll.

export const GenerativeAIVisualsDemoGemini: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const mouseRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0 });

  // Update time for color shifting
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const height = window.innerHeight;
        // Map scroll to 0-1 range based on progress through the container
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - height)));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas Simulation
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

    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current.vx = e.clientX - mouseRef.current.x;
      mouseRef.current.vy = e.clientY - mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('pointermove', handlePointerMove);

    // Particle class for neural nodes
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseSize: number;
      angle: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseSize = Math.random() * 2 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
      }

      update(scrollProgress: number) {
        // Organic wandering
        this.angle += (Math.random() - 0.5) * 0.1;
        this.vx += Math.cos(this.angle) * 0.02;
        this.vy += Math.sin(this.angle) * 0.02;

        // Scroll influence (pushes particles upwards)
        this.vy -= scrollProgress * 0.1;

        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Mouse interaction (Repulsion / Swirl)
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          // Calculate tangential force for swirl effect
          const fx = -dy / dist;
          const fy = dx / dist;
          
          this.vx += (fx * force * 0.5) - (dx / dist * force * 0.2); // Swirl + slight push
          this.vy += (fy * force * 0.5) - (dy / dist * force * 0.2);
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D, baseHue: number) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.baseSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${baseHue}, 80%, 70%, 0.8)`;
        ctx.fill();
      }
    }

    const NODE_COUNT = width < 768 ? 80 : 150;
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => new Node());

    let animationId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      
      // Calculate base hue based on local hour (simulated diurnal shift)
      // 0 = midnight (deep blue/purple), 12 = noon (warm orange/cyan)
      const hour = currentTime.getHours() + currentTime.getMinutes() / 60;
      const hueShift = Math.sin((hour / 24) * Math.PI * 2) * 50;
      const baseHue = 220 + hueShift + (scrollProgress * 60); // Scroll also shifts color

      // Fade out previous frame slightly for trails
      ctx.fillStyle = `rgba(5, 5, 8, 0.1)`;
      ctx.fillRect(0, 0, width, height);

      // Connect nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = dx * dx + dy * dy;

          if (dist < 15000) { // connect dist squared
            const opacity = 1 - (dist / 15000);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `hsla(${baseHue + Math.sin(time)*30}, 60%, 60%, ${opacity * 0.5})`;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach(node => {
        node.update(scrollProgress);
        node.draw(ctx, baseHue);
      });

      // Decay mouse velocity
      mouseRef.current.vx *= 0.9;
      mouseRef.current.vy *= 0.9;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationId);
    };
  }, [scrollProgress, currentTime]);


  // Text morphological calculations based on scroll
  const weight = 200 + scrollProgress * 600;
  const ls = -0.05 + scrollProgress * 0.15;

  return (
    <div className="genAI-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;600;800&display=swap');
      `}</style>

      {/* Background Canvas */}
      <canvas ref={canvasRef} className="ai-canvas"></canvas>

      {/* Content Layers */}
      <div className="scroll-track">
        
        {/* Section 1 */}
        <section className="morph-section" style={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}>
          <div className="content-wrap">
             <div className="label-badge">GENERATIVE ENTITY v1.0</div>
             <h1 
               className="organic-title"
               style={{ 
                 fontVariationSettings: `'wght' ${weight}`,
                 letterSpacing: `${ls}em`
               }}
             >
               CONSCIOUS<br/>DESIGN
             </h1>
             <p className="organic-sub">A living interface that responds to your existence. Move your cursor. Scroll. Breathe.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="morph-section" style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.3) * 3)) }}>
          <div className="content-wrap right-align">
             <div className="label-badge">SYNAPTIC FLOW</div>
             <h2 className="fluid-heading">
               The layout is not coded.<br/>It is grown.
             </h2>
             <p className="organic-sub text-right">Colors shift with the sun's position. Nodes reconfigure based on interaction history. Perfection through chaos.</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="morph-section center-align" style={{ opacity: Math.max(0, Math.min(1, (scrollProgress - 0.7) * 4)) }}>
          <div className="content-wrap">
             <div className="holo-orb"></div>
             <h2 className="fluid-heading glow">TAME THE ALGORITHM</h2>
             <button className="organic-btn">INITIATE SEQUENCE</button>
          </div>
        </section>

      </div>

      <style>{`
        :root {
          --gen-text: #E2E8F0;
          --gen-text-dim: #94A3B8;
        }

        .genAI-container {
          position: relative;
          background: #050508;
          color: var(--gen-text);
          font-family: 'Plus Jakarta Sans', sans-serif;
          /* Hide default scrollbar for immersive feel */
          scrollbar-width: none; 
          -ms-overflow-style: none;
        }
        .genAI-container::-webkit-scrollbar { display: none; }

        .ai-canvas {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          pointer-events: none; /* Let clicks pass through */
          /* Subtle composite mode for glowing effect */
          mix-blend-mode: screen; 
        }

        /* Create artificial scrolling space */
        .scroll-track {
          position: relative;
          z-index: 10;
          height: 300vh; /* 3 screens to scroll through */
          pointer-events: none; /* sections must re-enable pointer events for buttons */
        }

        .morph-section {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          padding: 10vw;
          pointer-events: none;
          transition: opacity 0.1s linear; /* Smooths out rapid scrolling */
          will-change: opacity;
        }

        .content-wrap {
          max-width: 600px;
          pointer-events: auto; /* Re-enable for text selection / clicking */
        }

        .right-align {
          margin-left: auto;
          display: flex; flex-direction: column; align-items: flex-end;
        }
        .center-align {
          margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }

        .label-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          font-size: 0.75rem;
          letter-spacing: 2px;
          margin-bottom: 2rem;
        }

        .organic-title {
          font-size: clamp(4rem, 10vw, 8rem);
          line-height: 0.9;
          margin: 0 0 2rem 0;
          background: linear-gradient(135deg, #FFF, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          /* Transform allows for variable font animation */
          transition: font-variation-settings 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), letter-spacing 0.5s;
        }

        .fluid-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 200;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
        }
        .fluid-heading.glow {
          text-shadow: 0 0 40px rgba(100, 200, 255, 0.5);
        }

        .organic-sub {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          line-height: 1.6;
          color: var(--gen-text-dim);
          font-weight: 200;
          max-width: 400px;
        }

        .text-right { text-align: right; }

        .holo-orb {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #FFF, rgba(100,200,255,0.8), transparent);
          box-shadow: 0 0 60px rgba(100,200,255,0.4);
          margin-bottom: 2rem;
          animation: orb-float 4s ease-in-out infinite alternate;
        }

        @keyframes orb-float {
          0% { transform: translateY(0) scale(0.9); filter: hue-rotate(0deg); }
          100% { transform: translateY(-20px) scale(1.1); filter: hue-rotate(45deg); }
        }

        .organic-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.3);
          color: #FFF;
          padding: 1.2rem 3rem;
          border-radius: 100px;
          font-size: 0.9rem;
          letter-spacing: 2px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .organic-btn:hover {
          background: #FFF;
          color: #000;
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255,255,255,0.2);
        }

      `}</style>
    </div>
  );
};

export default GenerativeAIVisualsDemoGemini;
