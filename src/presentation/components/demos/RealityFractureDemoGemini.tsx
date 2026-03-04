'use client';

import React, { useEffect, useRef, useState } from 'react';

// Reality Fracture - Gemini 3.1 Pro Implementation
// Clean UI that suffers from glitch effects, RGB splits, and collapses into minimalism.

export const RealityFractureDemoGemini: React.FC = () => {
  const [scrollWarps, setScrollWarps] = useState(0);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Glitch interval logic
  useEffect(() => {
    // Random elements glitch periodically
    const glitchInterval = setInterval(() => {
      if (isCollapsing) return;
      
      const elements = document.querySelectorAll('.fracture-target');
      if (elements.length > 0) {
        const randomEl = elements[Math.floor(Math.random() * elements.length)] as HTMLElement;
        randomEl.classList.add('momentary-glitch');
        
        setTimeout(() => {
          randomEl.classList.remove('momentary-glitch');
        }, 300); // 300ms glitch duration
      }
    }, 2500); // Every 2.5s trigger a random glitch

    return () => clearInterval(glitchInterval);
  }, [isCollapsing]);

  // Scroll warping logic
  useEffect(() => {
    const handleScroll = () => {
      if (isCollapsing) return;
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      
      // Calculate a warp factor based on scroll depth. Gets more unstable further down.
      const factor = (scrolled / maxScroll) * 30; // Max 30 deg warp
      setScrollWarps(factor);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCollapsing]);

  // Trigger final collapse
  const triggerCollapse = () => {
    setIsCollapsing(true);
    // Smooth scroll to top for the void effect
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isCollapsing) {
    return (
      <div className="void-collapse">
        <style>{`
          .void-collapse {
            height: 100vh;
            width: 100vw;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-family: inherit;
            animation: void-fade-in 2s ease-in-out forwards;
          }
          
          .void-text {
            font-size: 0.8rem;
            letter-spacing: 10px;
            opacity: 0.2;
            text-transform: uppercase;
            animation: text-flicker 4s infinite;
          }

          @keyframes void-fade-in {
            0% { filter: contrast(10) brightness(10) invert(1); }
            50% { filter: contrast(1) brightness(0) invert(0); }
            100% { filter: none; background: #000; }
          }
          @keyframes text-flicker {
            0%, 95%, 100% { opacity: 0.1; }
            96%, 98% { opacity: 0.8; }
            97%, 99% { opacity: 0; }
          }
        `}</style>
        <div className="void-text">simulation null</div>
      </div>
    );
  }

  return (
    <div className="fracture-world" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap');

        :root {
          --bg-color: #0d0e12;
          --text-main: #f0f0f5;
          --glitch-cyan: #0ff;
          --glitch-red: #f00;
        }

        body {
          margin: 0;
          background-color: var(--bg-color);
          color: var(--text-main);
          font-family: 'Space Grotesk', sans-serif;
          overflow-x: hidden;
        }

        .fracture-world {
          min-height: 250vh;
          /* The whole world bends based on scroll */
          transform: perspective(1000px) rotateX(calc(var(--warp) * 1deg)) skewY(calc(var(--warp) * -0.5deg));
          transform-origin: center center;
          transition: transform 0.1s linear;
        }

        /* --- Noise Overlay --- */
        .noise-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 999;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        /* --- Typography & Base UI --- */
        h1 {
          font-size: 5rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -2px;
          margin-bottom: 2rem;
        }

        p {
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.6;
          max-width: 600px;
          opacity: 0.8;
        }

        /* --- Fracture Target Defaults --- */
        .fracture-target {
          position: relative;
          display: inline-block; /* Helps with transforms */
        }

        /* --- Momentary Glitch Effect (Triggered by JS) --- */
        .momentary-glitch {
          animation: severe-glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
          color: transparent;
          text-shadow: 2px 0 var(--glitch-cyan), -2px 0 var(--glitch-red);
        }

        @keyframes severe-glitch {
          0% { transform: translate(0) skew(0deg); clip-path: inset(0 0 0 0); }
          20% { transform: translate(-2px, 1px) skew(-5deg); clip-path: inset(20% 0 80% 0); }
          40% { transform: translate(2px, -1px) skew(5deg); clip-path: inset(60% 0 10% 0); }
          60% { transform: translate(-1px, 2px) skew(-10deg); clip-path: inset(10% 0 50% 0); }
          80% { transform: translate(3px, -2px) skew(10deg); clip-path: inset(80% 0 5% 0); }
          100% { transform: translate(0) skew(0deg); clip-path: inset(0 0 0 0); }
        }

        /* --- Hover Fracture Panels --- */
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 6rem;
        }

        .panel {
          padding: 3rem 2rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.02);
          position: relative;
          overflow: hidden;
          cursor: crosshair;
        }

        /* Base panel content */
        .panel-content {
          transition: opacity 0.2s;
        }

        /* Hidden distorted layer revealed on hover */
        .panel-distorted {
          position: absolute;
          inset: 0;
          background: #fff;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          opacity: 0;
          pointer-events: none;
          mix-blend-mode: exclusion;
          /* Pre-clip for harsh edges */
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .panel:hover .panel-content {
          opacity: 0.1;
          filter: blur(2px);
        }

        .panel:hover .panel-distorted {
          opacity: 1;
          animation: slice-reveal 0.4s steps(4) forwards;
        }

        @keyframes slice-reveal {
          0% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
          30% { clip-path: polygon(0 50%, 100% 10%, 100% 80%, 0 40%); }
          70% { clip-path: polygon(0 0, 100% 30%, 100% 100%, 0 70%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }

        /* --- Continuous RGB Distortion Line --- */
        .distortion-line {
          width: 100%;
          height: 1px;
          background: #fff;
          margin: 4rem 0;
          position: relative;
        }
        
        .distortion-line::after {
          content: '';
          position: absolute;
          top: -2px; left: 0; right: 0; bottom: -2px;
          background: linear-gradient(90deg, transparent, var(--glitch-cyan), var(--glitch-red), transparent);
          opacity: 0.5;
          animation: wave-run 3s linear infinite;
        }

        @keyframes wave-run {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* --- Collapse Button --- */
        .collapse-btn {
          margin-top: 10rem;
          display: block;
          width: 100%;
          padding: 2rem;
          background: transparent;
          border: 1px dashed rgba(255, 0, 0, 0.5);
          color: rgba(255, 0, 0, 0.8);
          font-family: inherit;
          font-size: 1.2rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }

        .collapse-btn:hover {
          background: rgba(255, 0, 0, 0.1);
          color: #fff;
          border-style: solid;
        }

      `}</style>
      
      <div className="noise-overlay" />

      <div className="container" style={{ '--warp': scrollWarps } as React.CSSProperties}>
        <h1 className="fracture-target">STABILITY<br/>COMPROMISED</h1>
        <p className="fracture-target">The containment fields are failing. Visual structures you perceive are temporary renderings over an unstable core. Proceed with caution down the z-axis.</p>
        
        <div className="distortion-line" />

        <div className="grid-layout">
          <div className="panel">
            <div className="panel-content">
              <h3>SYSTEM.DIAGNOSTIC</h3>
              <p>Logic circuits operating at 42%. Memory leaking into visual buffer layer 4.</p>
            </div>
            <div className="panel-distorted">ERR_OVERFLOW</div>
          </div>
          <div className="panel">
            <div className="panel-content">
              <h3>USER.PERCEPTION</h3>
              <p>Optic nerve synchronization nominal, but reality anchoring strings are snapping.</p>
            </div>
            <div className="panel-distorted">WAKE UP</div>
          </div>
          <div className="panel fracture-target">
            <div className="panel-content">
              <h3>ENVIRONMENT.DATA</h3>
              <p>Gravity constant fluctuating. Expected structural integrity: 2 minutes.</p>
            </div>
            <div className="panel-distorted">NULL_PTR</div>
          </div>
          <div className="panel">
            <div className="panel-content">
              <h3>PROTOCOL.OBLIVION</h3>
              <p>If the horizon begins to bleed cyan, initiate complete neural disconnect immediately.</p>
            </div>
            <div className="panel-distorted">END SIMULATION</div>
          </div>
        </div>

        {/* The bottom of the page, where it's heavily warped by scroll */}
        <div style={{ marginTop: '15rem', textAlign: 'center' }} className="fracture-target">
          <h2>THE FABRIC TEARS</h2>
          <p style={{ margin: '0 auto' }}>You have scrolled too deep into the kernel.</p>
        </div>

        <button className="collapse-btn" onClick={triggerCollapse}>
          Initiate Reality Collapse
        </button>

      </div>
    </div>
  );
};

export default RealityFractureDemoGemini;
