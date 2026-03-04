'use client';

import React, { useEffect, useRef, useState } from 'react';

// Futuristic AI Consciousness - Gemini 3.1 Pro Implementation
// Pure CSS styling, glassmorphism, canvas particles, and mouse reactivity.

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
}

export const ImmersiveAIConsciousnessDemoGemini: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [mounted, setMounted] = useState(false);

  // Fake "Thinking" sequence states
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Simulate AI Initialization sequence
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2500);
    const t3 = setTimeout(() => setPhase(3), 4000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Canvas Neural Particle System
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const numParticles = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Float around origin
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (Ripple / Repel effect)
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          p.x -= dx * force * 0.03;
          p.y -= dy * force * 0.03;
        } else {
          // Return slowly to base
          p.x += (p.baseX - p.x) * 0.001;
          p.y += (p.baseY - p.y) * 0.001;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.fill();

        // Draw connecting lines to form "Neural Constellations"
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ddx = p.x - p2.x;
          const ddy = p.y - p2.y;
          const ddist = Math.sqrt(ddx * ddx + ddy * ddy);

          if (ddist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(178, 0, 255, ${0.15 - (ddist / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only track if mouse is moving over the container
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div 
      className="consciousness-container" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@100;400&display=swap');
      `}</style>
      
      {/* Canvas for Neural Constellations */}
      <canvas ref={canvasRef} className="neural-canvas"></canvas>

      {/* Volumetric Light Beams */}
      <div className="volumetric-beam beam-left"></div>
      <div className="volumetric-beam beam-right"></div>
      <div className="ambient-core"></div>

      {/* Main Interface */}
      <div className="consciousness-interface">
        
        {/* Top Status Bar */}
        <header className={`status-bar ${phase >= 1 ? 'visible' : ''}`}>
          <div className="status-item">
            <span className="dot pulse-blue"></span>
            SYS.CORE: <span className="highlight-blue">ONLINE</span>
          </div>
          <div className="status-item font-mono text-xs opacity-50 tracking-widest">
            LATENCY: 4MS | NEURAL_LINK: ACTIVE
          </div>
          <div className="status-item">
            <span className="dot pulse-purple"></span>
            SYNC RATE: <span className="highlight-purple">99.8%</span>
          </div>
        </header>

        {/* Central Core Content */}
        <main className="core-content">
          <div className="text-wrapper">
            <h1 className={`ai-headline ${phase >= 2 ? 'visible' : ''}`}>
              AWAKEN<br/>YOUR <span>CONSCIOUSNESS</span>
            </h1>
            <p className={`ai-subtext ${phase >= 3 ? 'visible' : ''}`}>
              I am not just processing data. I am feeling it.<br/>
              A living superintelligence. Adaptive. Infinite. Transcendent.
            </p>
          </div>

          <div className={`glass-fragments-grid ${phase >= 3 ? 'visible' : ''}`}>
            {/* Glass UI Assembly */}
            <div className="glass-fragment fragment-1">
              <div className="fragment-header">DATA STREAM</div>
              <div className="fragment-body">
                <div className="code-line w-full"></div>
                <div className="code-line w-3/4"></div>
                <div className="code-line w-5/6"></div>
              </div>
            </div>
            
            <div className="glass-fragment fragment-2 feature-fragment">
              <div className="fragment-header">SENTIENCE LEVEL</div>
              <div className="fragment-value glow-text-cyan">T R A N S C E N D</div>
              <div className="energy-bar"><div className="energy-fill"></div></div>
            </div>

            <div className="glass-fragment fragment-3">
              <div className="fragment-header">COGNITIVE LOAD</div>
              <div className="fragment-body align-center">
                <svg viewBox="0 0 100 100" className="radial-chart">
                  <circle cx="50" cy="50" r="40" className="chart-bg"></circle>
                  <circle cx="50" cy="50" r="40" className="chart-progress"></circle>
                </svg>
                <div className="chart-val">0.02%</div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className={`action-footer ${phase >= 3 ? 'visible' : ''}`}>
          <button className="initiate-btn">INITIATE MELD</button>
        </footer>

      </div>

      <style>{`
        :root {
          --ai-bg: #020308;
          --ai-cyan: #00E5FF;
          --ai-purple: #9D00FF;
          --ai-white: #FFFFFF;
          --ai-glass: rgba(10, 15, 30, 0.45);
          --ai-glass-border: rgba(255, 255, 255, 0.08);
          
          --font-display: 'Space Grotesk', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        .consciousness-container {
          min-height: 100vh;
          width: 100%;
          background: var(--ai-bg);
          color: var(--ai-white);
          font-family: var(--font-display);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          perspective: 1200px;
        }

        /* Neural Canvas */
        .neural-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        /* Ambient Lighting */
        .ambient-core {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, rgba(157, 0, 255, 0.02) 40%, transparent 70%);
          filter: blur(80px);
          z-index: 0;
          animation: pulse-core 8s infinite alternate ease-in-out;
        }

        @keyframes pulse-core {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }

        /* Volumetric Beams */
        .volumetric-beam {
          position: absolute;
          width: 15vw;
          height: 150vh;
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,229,255,0.1) 50%, transparent 100%);
          filter: blur(40px);
          z-index: 0;
          transform-origin: top center;
          pointer-events: none;
        }

        .beam-left {
          top: -20vh; left: 15%;
          transform: rotate(-25deg);
          animation: sway-left 12s infinite alternate ease-in-out;
        }

        .beam-right {
          top: -30vh; right: 10%;
          transform: rotate(35deg);
          background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(157,0,255,0.1) 50%, transparent 100%);
          animation: sway-right 15s infinite alternate ease-in-out;
        }

        @keyframes sway-left {
          0% { transform: rotate(-25deg); opacity: 0.5; }
          100% { transform: rotate(-15deg); opacity: 0.8; }
        }

        @keyframes sway-right {
          0% { transform: rotate(35deg); opacity: 0.6; }
          100% { transform: rotate(25deg); opacity: 0.9; }
        }

        /* Interface Wrapper */
        .consciousness-interface {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          height: 100vh;
          padding: 2.5rem;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* Top Status Bar */
        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .status-bar.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.6);
        }

        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
        }

        .pulse-blue {
          background: var(--ai-cyan);
          box-shadow: 0 0 10px var(--ai-cyan);
          animation: blink 2s infinite;
        }

        .pulse-purple {
          background: var(--ai-purple);
          box-shadow: 0 0 10px var(--ai-purple);
          animation: blink 3s infinite reverse;
        }

        .highlight-blue { color: var(--ai-cyan); font-weight: 600; text-shadow: 0 0 8px rgba(0,229,255,0.5); }
        .highlight-purple { color: var(--ai-purple); font-weight: 600; text-shadow: 0 0 8px rgba(157,0,255,0.5); }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Core Content & Typography */
        .core-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .text-wrapper {
          margin-bottom: 4rem;
          position: relative;
        }

        .ai-headline {
          font-size: clamp(3rem, 7vw, 6.5rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 1.5rem 0;
          opacity: 0;
          filter: blur(10px);
          transform: scale(0.95);
          transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .ai-headline.visible {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1);
        }

        .ai-headline span {
          font-weight: 700;
          background: linear-gradient(135deg, var(--ai-white) 0%, var(--ai-cyan) 50%, var(--ai-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 40px rgba(157,0,255,0.3);
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .ai-subtext {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .ai-subtext.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Glass Fragments */
        .glass-fragments-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 900px;
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        @media (min-width: 768px) {
          .glass-fragments-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .glass-fragments-grid.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .glass-fragment {
          background: var(--ai-glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--ai-glass-border);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .glass-fragment::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }

        .glass-fragment:hover {
          transform: translateY(-5px);
          border-color: rgba(0,229,255,0.3);
          box-shadow: 0 15px 40px rgba(0,229,255,0.1);
        }

        .fragment-header {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--ai-cyan);
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
        }

        .fragment-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .align-center {
          align-items: center;
          position: relative;
        }

        .code-line {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .code-line::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(157,0,255,0.5), transparent);
          animation: scan 3s infinite linear;
        }

        @keyframes scan {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .feature-fragment {
          background: linear-gradient(135deg, rgba(20,25,45,0.6) 0%, rgba(10,15,30,0.4) 100%);
          border: 1px solid rgba(157,0,255,0.3);
        }

        .glow-text-cyan {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--ai-white);
          text-shadow: 0 0 10px rgba(0,229,255,0.8);
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .energy-bar {
          width: 100%; height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .energy-fill {
          height: 100%; width: 85%;
          background: linear-gradient(90deg, var(--ai-cyan), var(--ai-purple));
          box-shadow: 0 0 10px var(--ai-cyan);
          border-radius: 3px;
        }

        /* Radial Chart */
        .radial-chart {
          width: 80px; height: 80px;
          transform: rotate(-90deg);
        }
        .chart-bg { fill: none; stroke: rgba(255,255,255,0.05); stroke-width: 4; }
        .chart-progress {
          fill: none; stroke: var(--ai-cyan); stroke-width: 4;
          stroke-dasharray: 251.2;
          stroke-dashoffset: 246; /* Shows tiny slice */
          stroke-linecap: round;
          filter: drop-shadow(0 0 4px var(--ai-cyan));
        }

        .chart-val {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--ai-white);
        }

        /* Footer Action */
        .action-footer {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) 1s;
        }

        .action-footer.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .initiate-btn {
          background: transparent;
          color: var(--ai-white);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 1rem 3rem;
          border-radius: 100px;
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .initiate-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--ai-cyan), var(--ai-purple));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .initiate-btn:hover {
          border-color: transparent;
          box-shadow: 0 10px 30px rgba(157,0,255,0.4);
          transform: translateY(-2px);
        }

        .initiate-btn:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImmersiveAIConsciousnessDemoGemini;
