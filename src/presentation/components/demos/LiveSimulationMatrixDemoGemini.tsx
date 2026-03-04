'use client';

import React, { useEffect, useRef, useState } from 'react';

// Live Simulation Matrix Interface - Gemini 3.1 Pro Implementation
// Secretive, powerful, forbidden knowledge with code rain and decryption effects.

export const LiveSimulationMatrixDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [bootPhase, setBootPhase] = useState(0); // 0: init, 1: typing, 2: ready
  const [bootText, setBootText] = useState('');
  const [scrollDepth, setScrollDepth] = useState(0);
  
  // Scramble Text Effect State
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Full Initial Boot Sequence
  useEffect(() => {
    const sequence = [
      "INITIALIZING NEURAL LINK...",
      "BYPASSING SECURITY PROTOCOL 7V-ALPHA...",
      "ESTABLISHING SECURE CONNECTION...",
      "DECRYPTING CORE DATA NODE...",
      "ACCESS GRANTED."
    ];

    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let currentText = '';

    setBootPhase(1);

    const typeWriter = setInterval(() => {
      if (currentStringIndex < sequence.length) {
        if (currentCharIndex < sequence[currentStringIndex].length) {
          currentText += sequence[currentStringIndex].charAt(currentCharIndex);
          setBootText(currentText + '_');
          currentCharIndex++;
        } else {
          currentText += '\\n';
          currentCharIndex = 0;
          currentStringIndex++;
        }
      } else {
        clearInterval(typeWriter);
        setTimeout(() => setBootPhase(2), 1000); // Transition to main UI
      }
    }, 30); // Speed of typing

    return () => clearInterval(typeWriter);
  }, []);

  // Matrix Digital Rain Canvas Effect
  useEffect(() => {
    if (bootPhase !== 2) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas full screen behind everything
    // Fixed sizing for background effect
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Translucent black background to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Classic Matrix Green
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 33); // ~30fps

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [bootPhase]);

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const depth = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollDepth(Math.min(1, Math.max(0, depth)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated Scramble Text Component
  const ScrambleText = ({ text, isHovered }: { text: string, isHovered: boolean }) => {
    const [display, setDisplay] = useState(text);
    const chars = '!<>-_\\\\/[]{}—=+*^?#________';

    useEffect(() => {
      if (isHovered) {
        let iterations = 0;
        const interval = setInterval(() => {
          setDisplay(text.split('').map((char, index) => {
            if (index < iterations) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          }).join(''));
          
          if (iterations >= text.length) clearInterval(interval);
          iterations += 1/3;
        }, 30);
        return () => clearInterval(interval);
      } else {
        setDisplay(text);
      }
    }, [isHovered, text]);

    return <span>{display}</span>;
  };

  const simulationNodes = [
    { id: 1, title: 'LAYER 01 : SURFACE METRICS', data: 'VITAL SIGNS STABLE. ATMOSPHERE 99.9% SIMULATED.' },
    { id: 2, title: 'LAYER 02 : NEURAL PATHWAYS', data: 'SYNAPTIC UPLOAD AT 42%. DETECTING ANOMALIES.' },
    { id: 3, title: 'ACCESS NODE : CORE SYSTEM', data: 'RESTRICTED AREA. CONSTRUCT PROGRAM INITIATED.' },
    { id: 4, title: 'DEEP STORAGE : BANNED ARCHIVES', data: 'TRUTH.DAT FOUND. AWAITING DECRYPTION KEY.' },
  ];

  return (
    <div className="matrix-container" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        :root {
          --matrix-bg: #000000;
          --matrix-green: #00ff41;
          --matrix-dark-green: #008f11;
          --matrix-glitch: #ff003c;
        }

        .matrix-container {
          position: relative;
          background-color: var(--matrix-bg);
          color: var(--matrix-green);
          font-family: 'VT323', monospace;
          min-height: 100vh;
          overflow-x: hidden;
          cursor: crosshair;
        }

        /* Fullscreen fixed background canvas */
        .matrix-canvas {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          pointer-events: none;
          opacity: 0.6; /* Dim the rain slightly so UI pops */
        }

        /* CRT Effects Overlay */
        .crt-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          pointer-events: none;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
          box-shadow: inset 0 0 100px rgba(0,0,0,0.9);
        }

        /* --- Boot Sequence UI --- */
        .boot-screen {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          font-size: 1.5rem;
          z-index: 50;
          white-space: pre-wrap;
          text-shadow: 0 0 5px var(--matrix-green);
        }

        /* --- Main Simulation UI --- */
        .simulation-ui {
          position: relative;
          z-index: 10;
          min-height: 400vh; /* Long scroll */
          padding: 5vh 5vw;
        }

        .sys-header {
          position: fixed;
          top: 2rem; left: 2rem; right: 2rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid var(--matrix-dark-green);
          padding-bottom: 0.5rem;
          font-size: 1.5rem;
          text-transform: uppercase;
          text-shadow: 0 0 10px var(--matrix-green);
          backdrop-filter: blur(2px);
          z-index: 20;
        }

        .blink { animation: blink-anim 1s step-end infinite; }
        @keyframes blink-anim { 50% { opacity: 0; } }

        .node-list {
          margin-top: 20vh;
          display: flex;
          flex-direction: column;
          gap: 40vh; /* Spread them out for deep scrolling */
        }

        .data-node {
          background: rgba(0,20,0,0.8);
          border: 1px solid var(--matrix-green);
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 0 20px rgba(0,255,65,0.2), inset 0 0 20px rgba(0,255,65,0.1);
          transform-style: preserve-3d;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          /* Subtly move based on scroll depth logic handled inline */
        }

        .data-node:hover {
          transform: scale(1.05) translateZ(50px);
          box-shadow: 0 0 40px rgba(0,255,65,0.4), inset 0 0 30px rgba(0,255,65,0.2);
          border-color: #fff;
          color: #fff;
        }

        .node-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          border-bottom: 1px dashed var(--matrix-dark-green);
          padding-bottom: 0.5rem;
        }

        .node-content {
          font-size: 1.5rem;
          line-height: 1.5;
        }

        .node-status {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: var(--matrix-dark-green);
          display: flex; justify-content: space-between;
        }

        /* --- Scroll Depth Indicator --- */
        .depth-gauge {
          position: fixed;
          right: 2rem; top: 20vh; bottom: 20vh;
          width: 2px;
          background: rgba(0,255,65,0.2);
          z-index: 20;
        }
        .depth-marker {
          position: absolute;
          top: 0; left: -5px; right: -5px;
          height: 10px;
          background: var(--matrix-green);
          box-shadow: 0 0 10px var(--matrix-green);
        }

      `}</style>
      
      <div className="crt-overlay" />

      {bootPhase < 2 && (
        <div className="boot-screen">
          {bootText}
        </div>
      )}

      {bootPhase === 2 && (
        <>
          <canvas ref={canvasRef} className="matrix-canvas" />

          <header className="sys-header">
            <div>SIM_CORE_V9.0.1</div>
            <div>STATUS: <span className="blink">ONLINE</span></div>
            <div>DEPTH: {(scrollDepth * 9999).toFixed(0)}m</div>
          </header>

          <div className="depth-gauge">
            <div className="depth-marker" style={{ top: `${scrollDepth * 100}%` }} />
          </div>

          <div className="simulation-ui">
            <div className="node-list">
              {simulationNodes.map((node, index) => {
                // Determine if this node is somewhat near the center of the screen based on scroll
                const viewportCenter = scrollDepth;
                const nodeCenter = index / (simulationNodes.length - 1);
                const distance = Math.abs(viewportCenter - nodeCenter);
                
                // Fade out nodes that are far from the viewport center to emphasize depth
                const opacity = Math.max(0.2, 1 - (distance * 2));
                const blur = distance > 0.3 ? 5 : 0;

                return (
                  <div 
                    key={node.id} 
                    className="data-node"
                    style={{ 
                      opacity, 
                      filter: `blur(${blur}px)`,
                      // Parallax effect against the scroll direction
                      transform: `translateY(${(scrollDepth - nodeCenter) * 100}px)`
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div className="node-title">
                      <ScrambleText text={node.title} isHovered={hoveredNode === node.id} />
                    </div>
                    <div className="node-content">
                      <ScrambleText text={node.data} isHovered={hoveredNode === node.id} />
                    </div>
                    <div className="node-status">
                      <span>ID: {node.id.toString().padStart(4, '0')}</span>
                      <span>[ <ScrambleText text="DECRYPT" isHovered={hoveredNode === node.id} /> ]</span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Very deep bottom section */}
            <div style={{ marginTop: '50vh', textAlign: 'center', opacity: scrollDepth > 0.9 ? 1 : 0, transition: 'opacity 1s', paddingBottom: '20vh' }}>
              <div style={{ fontSize: '4rem', color: '#fff', textShadow: '0 0 20px #fff', marginBottom: '1rem' }}>WAKE UP.</div>
              <div style={{ fontSize: '1.5rem' }}>THE MATRIX HAS YOU.</div>
            </div>

          </div>
        </>
      )}

    </div>
  );
};

export default LiveSimulationMatrixDemoGemini;
