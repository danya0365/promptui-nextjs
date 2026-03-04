'use client';

import React, { useEffect, useRef, useState } from 'react';

// Unreal Engine Cinematic World - Gemini 3.1 Pro Implementation
// Hyper-realistic pseudo-3D environment using CSS transforms and perspective.

export const UnrealEngineCinematicDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // Camera state
  const [camera, setCamera] = useState({ x: 0, y: 0, z: 0, rx: 0, ry: 0 });
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});
  
  const requestRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentCameraRot = useRef({ rx: 0, ry: 0 });

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => setKeys(k => ({ ...k, [e.code]: true }));
    const handleKeyUp = (e: KeyboardEvent) => setKeys(k => ({ ...k, [e.code]: false }));
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to 1
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    
    // Add wheel event to zoom in/out
    const handleWheel = (e: WheelEvent) => {
       setCamera(c => ({ ...c, z: c.z - e.deltaY * 0.5 }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Game Loop
  useEffect(() => {
    if (!mounted) return;

    const SPEED = 15;
    
    const gameLoop = () => {
      setCamera(prev => {
        let { x, y, z, rx, ry } = prev;

        // WASD Movement
        if (keys['KeyW']) z += SPEED;
        if (keys['KeyS']) z -= SPEED;
        if (keys['KeyA']) x += SPEED;
        if (keys['KeyD']) x -= SPEED;
        if (keys['Space']) y -= SPEED;
        if (keys['ShiftLeft']) y += SPEED;

        // Smooth Mouse Look (Easing)
        const targetRy = mouseRef.current.x * -25; // Max 25 deg look left/right
        const targetRx = mouseRef.current.y * 15;  // Max 15 deg look up/down
        
        currentCameraRot.current.rx += (targetRx - currentCameraRot.current.rx) * 0.05;
        currentCameraRot.current.ry += (targetRy - currentCameraRot.current.ry) * 0.05;

        // Boundaries
        z = Math.min(Math.max(z, -1000), 4000);
        x = Math.min(Math.max(x, -2000), 2000);
        y = Math.min(Math.max(y, -1000), 1000);

        return { x, y, z, rx: currentCameraRot.current.rx, ry: currentCameraRot.current.ry };
      });
      requestRef.current = requestAnimationFrame(gameLoop);
    };

    requestRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [mounted, keys]);

  if (!mounted) return null;

  return (
    <div className="ue-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Montserrat:wght@300;400;700&display=swap');
      `}</style>
      
      {/* HUD (Overlays) */}
      <div className="hud crosshair"></div>
      <div className="hud wasd-hint">WASD / SCROLL to Navigate</div>
      <div className="hud engine-watermark">TECH TEMPLE ENGINE 5.4</div>
      
      {/* Post Processing Layers */}
      <div className="post-volumetric-fog"></div>
      <div className="post-vignette"></div>
      <div className="post-dust-particles">
         {/* Simple simulated CSS particles */}
         {Array.from({length: 40}).map((_, i) => (
           <div key={i} className="dust-mote" style={{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 10}s`,
             animationDuration: `${10 + Math.random() * 20}s`
           }}></div>
         ))}
      </div>

      {/* 3D World */}
      <div className="world-camera">
        <div 
          className="world-space"
          style={{
            transform: `translate3d(${camera.x}px, ${camera.y}px, ${camera.z}px) rotateX(${camera.rx}deg) rotateY(${camera.ry}deg)`
          }}
        >
          {/* God Rays Source (Sun light) */}
          <div className="god-rays light-source"></div>

          {/* Environment Objects */}
          <div className="env-floor"></div>
          <div className="env-ceiling"></div>

          {/* Pillars */}
          <div className="pillar" style={{ transform: 'translate3d(-800px, 0, -1000px)' }}></div>
          <div className="pillar" style={{ transform: 'translate3d(800px, 0, -1000px)' }}></div>
          <div className="pillar" style={{ transform: 'translate3d(-800px, 0, 1000px)' }}></div>
          <div className="pillar" style={{ transform: 'translate3d(800px, 0, 1000px)' }}></div>
          <div className="pillar" style={{ transform: 'translate3d(-800px, 0, 3000px)' }}></div>
          <div className="pillar" style={{ transform: 'translate3d(800px, 0, 3000px)' }}></div>

          {/* Embedded UI 1: The Monolith */}
          <div className="ui-panel monolith" style={{ transform: 'translate3d(0, 0, -2500px)' }}>
            <h1 className="epic-title">PROJECT<br/>GENESIS</h1>
            <p className="epic-desc">The next generation of computational consciousness. Approach the core to interface.</p>
            <div className="glowing-core"></div>
          </div>

          {/* Embedded UI 2: Status Panel Left */}
          <div className="ui-panel glass-hud" style={{ transform: 'translate3d(-1000px, -200px, -1500px) rotateY(35deg)' }}>
            <div className="hud-line">SYSTEM STATUS</div>
            <div className="hud-line active">NEURAL LINK: ESTABLISHED</div>
            <div className="hud-line">BIOMETRIC TENSION: NOMINAL</div>
            <div className="progress-bar"><div className="fill"></div></div>
          </div>

          {/* Embedded UI 3: Databank Right */}
          <div className="ui-panel glass-hud" style={{ transform: 'translate3d(1000px, -200px, -1500px) rotateY(-35deg)' }}>
            <div className="hud-line">ARCHIVE: CLASSIFIED</div>
            <div className="hud-line">FRAGMENTS RECOVERED: 84%</div>
            <div className="hud-data-scan">
               <span>0x4F91</span><span>0x8A2B</span><span>0x11C9</span>
            </div>
            <div className="hologram-cube"></div>
          </div>

          {/* Embedded UI 4: Gateway (Deeper) */}
          <div className="ui-panel glass-hud huge" style={{ transform: 'translate3d(0, 500px, 2000px) rotateX(-20deg)' }}>
             <h2>ENTER THE GRID</h2>
             <button className="holo-btn">INITIALIZE</button>
          </div>

        </div>
      </div>

      <style>{`
        :root {
          --ue-bg: #050505;
          --ue-ambient: #111a22;
          --ue-gold: #c39b5b;
          --ue-cyan: #4A90E2;
          --ue-glow: rgba(74, 144, 226, 0.6);
          --ue-fog: rgba(17, 26, 34, 0.4);
        }

        .ue-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: var(--ue-bg);
          overflow: hidden;
          perspective: 1000px; /* Crucial for 3D */
          color: #FFF;
          font-family: 'Montserrat', sans-serif;
        }

        /* --- HUD Elements --- */
        .hud { position: absolute; z-index: 1000; pointer-events: none; }
        .crosshair {
          top: 50%; left: 50%;
          width: 4px; height: 4px; background: rgba(255,255,255,0.5); border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .wasd-hint {
          bottom: 2rem; left: 50%; transform: translateX(-50%);
          font-size: 0.8rem; letter-spacing: 4px; color: rgba(255,255,255,0.3);
          text-transform: uppercase;
        }
        .engine-watermark {
          top: 2rem; right: 2rem;
          font-family: 'Cinzel', serif; font-size: 0.9rem; font-weight: 800;
          color: var(--ue-gold); opacity: 0.5; letter-spacing: 2px;
        }

        /* --- World & Camera --- */
        .world-camera {
          width: 100%; height: 100%; position: absolute;
          transform-style: preserve-3d;
          /* The camera inherently moves the WORLD in the opposite direction */
        }
        .world-space {
          width: 100%; height: 100%; position: absolute;
          transform-style: preserve-3d;
          transition: transform 0.1s linear;
        }

        /* --- Environment --- */
        .env-floor {
          position: absolute;
          top: 1000px; /* Floor level */
          left: -4000px;
          width: 8000px; height: 8000px;
          background: radial-gradient(circle at center, #0a0e14 0%, #020305 80%);
          /* Concrete/Metal texture simulation */
          background-image: 
            linear-gradient(rgba(74, 144, 226, 0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(74, 144, 226, 0.05) 2px, transparent 2px);
          background-size: 200px 200px;
          transform: rotateX(90deg) translateZ(0); /* Lay flat */
          box-shadow: inset 0 0 1000px rgba(0,0,0,1);
        }
        
        .env-ceiling {
          position: absolute;
          top: -1500px; /* Ceiling level */
          left: -4000px;
          width: 8000px; height: 8000px;
          background: #020305;
          transform: rotateX(90deg); 
          opacity: 0.8;
        }

        .pillar {
          position: absolute;
          width: 200px; height: 2500px;
          background: linear-gradient(90deg, #05070a, #111a22, #05070a);
          box-shadow: 0 0 100px rgba(0,0,0,0.8);
          top: -1500px;
        }
        .pillar::before { /* Glowing runic line */
          content: ''; position: absolute; inset: 0 49%; background: var(--ue-cyan);
          box-shadow: 0 0 20px var(--ue-cyan); opacity: 0.2;
        }

        /* --- Lighting & VFX --- */
        .god-rays {
          position: absolute;
          width: 2000px; height: 2000px;
          background: radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, transparent 60%);
          transform: translate3d(-1000px, -1000px, -3500px);
          filter: blur(50px);
          pointer-events: none;
        }

        .post-volumetric-fog {
          position: absolute; inset: -20%; z-index: 50;
          background: radial-gradient(circle at 50% 10%, rgba(17, 26, 34, 0) 0%, rgba(5,5,5, 0.8) 100%);
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .post-vignette {
          position: absolute; inset: 0; z-index: 60;
          background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.9) 100%);
          pointer-events: none;
        }

        .post-dust-particles {
          position: absolute; inset: 0; z-index: 55; pointer-events: none; overflow: hidden;
        }
        .dust-mote {
          position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.4);
          border-radius: 50%; filter: blur(2px);
          animation: floatDust linear infinite;
        }

        @keyframes floatDust {
          0% { transform: translateY(100vh) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-20vh) translateX(50px) scale(1.5); opacity: 0; }
        }

        /* --- Embedded UI Panels --- */
        .ui-panel {
          position: absolute;
          /* Base UI styling */
          color: var(--ue-cyan);
          text-shadow: 0 0 10px var(--ue-glow);
          transform-style: preserve-3d;
          /* Important: Hover interaction */
          transition: filter 0.3s, text-shadow 0.3s;
        }
        .ui-panel:hover {
          filter: brightness(1.3);
          text-shadow: 0 0 20px rgba(255,255,255,0.8);
        }

        .monolith {
          text-align: center;
          width: 1000px; left: -500px; top: -200px;
        }
        .epic-title {
          font-family: 'Cinzel', serif; font-size: 8rem; font-weight: 800; line-height: 1;
          color: #FFF; margin: 0; letter-spacing: 1rem;
          text-shadow: 0 10px 40px rgba(0,0,0,0.8), 0 0 30px var(--ue-glow);
        }
        .epic-desc {
          margin-top: 2rem; font-size: 1.5rem; color: rgba(255,255,255,0.6); letter-spacing: 4px;
        }
        .glowing-core {
          width: 200px; height: 200px; margin: 5rem auto 0;
          background: radial-gradient(circle, #FFF 0%, var(--ue-cyan) 40%, transparent 70%);
          animation: corePulse 4s ease-in-out infinite alternate;
          filter: blur(10px);
        }

        @keyframes corePulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 200px var(--ue-cyan); }
        }

        .glass-hud {
          width: 400px;
          background: rgba(10, 15, 25, 0.4);
          border: 1px solid rgba(74, 144, 226, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 3rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(74, 144, 226, 0.1);
        }
        .glass-hud.huge {
          width: 800px; text-align: center; left: -400px;
        }

        .hud-line {
          font-size: 1.2rem; letter-spacing: 3px; margin-bottom: 1rem;
          border-bottom: 1px solid rgba(74, 144, 226, 0.2); padding-bottom: 0.5rem;
        }
        .hud-line.active { color: #FFF; text-shadow: 0 0 10px #FFF; border-color: var(--ue-cyan); }
        
        .progress-bar { width: 100%; height: 4px; background: rgba(0,0,0,0.5); margin-top: 2rem; }
        .progress-bar .fill { width: 60%; height: 100%; background: var(--ue-cyan); box-shadow: 0 0 10px var(--ue-cyan); }

        .hud-data-scan { display: flex; justify-content: space-between; margin-top: 2rem; font-family: monospace; font-size: 1.5rem;}
        
        .hologram-cube {
          width: 100px; height: 100px; margin: 3rem auto 0;
          border: 2px solid var(--ue-cyan);
          animation: spin3D 10s linear infinite;
        }

        @keyframes spin3D {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        .holo-btn {
          margin-top: 3rem; background: transparent; border: 2px solid var(--ue-cyan);
          color: var(--ue-cyan); padding: 1.5rem 4rem; font-size: 1.5rem; letter-spacing: 5px;
          cursor: pointer; transition: all 0.3s; text-transform: uppercase;
        }
        .holo-btn:hover { background: var(--ue-cyan); color: #000; box-shadow: 0 0 40px var(--ue-cyan); transform: scale(1.05); }

      `}</style>
    </div>
  );
};

export default UnrealEngineCinematicDemoGemini;
