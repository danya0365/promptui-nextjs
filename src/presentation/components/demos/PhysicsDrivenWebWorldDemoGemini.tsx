'use client';

import React, { useEffect, useRef, useState } from 'react';

// Physics Driven Web World - Gemini 3.1 Pro Implementation
// AAA game engine feel, simulated 3D depth, parallax, and force wave effects.

export const PhysicsDrivenWebWorldDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for global camera/scroll position (Z-axis)
  const [scrollZ, setScrollZ] = useState(0);
  
  // Mouse position for parallax / force interaction
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isDown: false });
  
  // Ripple/Force wave effect coordinates
  const [forceWaves, setForceWaves] = useState<{ id: number, x: number, y: number }[]>([]);

  // Sample data structured for 3D placement
  const panels = [
    { id: 1, title: "CORE ENGINE", desc: "Physics simulation layer initialized.", zOffset: 0, xOffset: -20, yOffset: -10, color: "rgba(50, 150, 255, 0.8)" },
    { id: 2, title: "RENDER PIPELINE", desc: "Real-time global illumination active.", zOffset: 1500, xOffset: 30, yOffset: 20, color: "rgba(255, 100, 50, 0.8)" },
    { id: 3, title: "ACTORS & MASS", desc: "Applying gravity. 14,021 objects awake.", zOffset: 3000, xOffset: -30, yOffset: 30, color: "rgba(50, 255, 150, 0.8)" },
    { id: 4, title: "PARTICLE SYSTEMS", desc: "Volumetric fog density at 70%.", zOffset: 4500, xOffset: 15, yOffset: -25, color: "rgba(200, 50, 255, 0.8)" },
    { id: 5, title: "USER INPUT", desc: "Force fields ready. Awaiting touch.", zOffset: 6000, xOffset: 0, yOffset: 0, color: "rgba(255, 255, 255, 0.8)" }
  ];

  // Handle Scroll to move the camera forward/backward
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = window.scrollY / maxScroll;
      // Map scroll percentage to a Z depth (0 to ~7000)
      setScrollZ(scrollPercent * 7500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse for tactile leaning of elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to 1 range from center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos(prev => ({ ...prev, x, y }));
    };
    
    const handleMouseDown = () => setMousePos(prev => ({ ...prev, isDown: true }));
    const handleMouseUp = () => setMousePos(prev => ({ ...prev, isDown: false }));

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Handle click effects (Force Waves)
  const handleGlobalClick = (e: React.MouseEvent) => {
    const newWave = { 
      id: Date.now(), 
      x: e.clientX, 
      y: e.clientY 
    };
    setForceWaves(prev => [...prev, newWave]);
    
    // Remove wave after animation
    setTimeout(() => {
      setForceWaves(prev => prev.filter(w => w.id !== newWave.id));
    }, 1000);
  };

  return (
    <div className="physics-world" ref={containerRef} onClick={handleGlobalClick}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Jura:wght@400;600&display=swap');

        :root {
          --world-bg: #030508;
          --fog-color: rgba(3, 5, 8, 0.95);
          --accent: #00e5ff;
        }

        body {
          margin: 0;
          background-color: var(--world-bg);
        }

        /* --- Scroll Enabler --- */
        .scroll-track {
          height: 500vh; /* Long scroll for deep Z-axis movement */
        }

        /* --- 3D Scene Container --- */
        .physics-world {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          overflow: hidden;
          perspective: 1200px; /* Crucial for 3D depth */
          background: radial-gradient(circle at 50% 50%, #0a1128 0%, #010205 100%);
          font-family: 'Jura', sans-serif;
          color: #fff;
        }

        /* --- Environmental Fog & Lighting --- */
        .fog-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--fog-color) 100%);
          mix-blend-mode: multiply;
        }
        
        /* Cursor Light Source */
        .cursor-light {
          position: absolute;
          top: 0; left: 0;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 5;
          transition: transform 0.1s ease-out, background 0.3s;
        }

        .cursor-light.active {
          background: radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(0,229,255,0) 70%);
        }

        /* --- Force Wave Effect (Click) --- */
        .force-wave {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.8);
          transform: translate(-50%, -50%) scale(0);
          pointer-events: none;
          animation: force-ripple 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          z-index: 200;
        }

        @keyframes force-ripple {
          0% { width: 0; height: 0; opacity: 1; border-width: 4px; }
          100% { width: 600px; height: 600px; opacity: 0; border-width: 1px; }
        }

        /* --- 3D Camera / Scene Root --- */
        .camera-rig {
          position: absolute;
          top: 50%; left: 50%;
          width: 100%; height: 100%;
          transform-style: preserve-3d;
          /* Move origin so we move "into" the screen */
          transform-origin: center center;
          /* Scroll moves us along Z. Mouse moves slightly X/Y for parallax */
          transition: transform 0.1s linear; 
        }

        /* --- Floating UI Panels --- */
        .physics-panel {
          position: absolute;
          top: 50%; left: 50%;
          width: 400px;
          padding: 2rem;
          background: rgba(10, 15, 30, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          transform-style: preserve-3d;
          /* Default center, overridden inline */
          /* Note: We translate -50% -50% to center it, then apply local offsets */
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05);
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .physics-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--panel-color), transparent);
          opacity: 0.5;
        }

        .panel-title {
          font-family: 'Syncopate', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: var(--panel-color);
          text-shadow: 0 0 10px var(--panel-color);
        }

        .panel-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
        }

        /* Hover interaction */
        .physics-panel:hover {
          border-color: rgba(255,255,255,0.4);
          box-shadow: 0 40px 80px rgba(0,0,0,0.8), inset 0 0 40px rgba(255,255,255,0.1);
          cursor: crosshair;
        }

        /* Simulated Depth of Field Blur based on Z distance (Handled somewhat via CSS, but tricky without WebGL) */
        /* We will use inline style logic to estimate blur based on distance to camera */

        /* HUD Overlay */
        .hud-overlay {
          position: absolute;
          top: 2rem; left: 2rem;
          pointer-events: none;
          z-index: 500;
          font-family: 'Syncopate', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.4);
        }

      `}</style>
      
      {/* HUD */}
      <div className="hud-overlay">
        <div>Z-DEPTH: {scrollZ.toFixed(2)}U</div>
        <div>FORCE: {(Math.abs(mousePos.x) + Math.abs(mousePos.y)).toFixed(2)}N</div>
        <div>CAM_PITCH: {(mousePos.y * 10).toFixed(1)}°</div>
        <div>CAM_YAW: {(mousePos.x * 10).toFixed(1)}°</div>
      </div>

      {/* Lighting / Cursor effect */}
      <div 
        className={`cursor-light ${mousePos.isDown ? 'active' : ''}`} 
        style={{ 
          transform: `translate(calc(${mousePos.x * 50}vw + 50vw - 50%), calc(${mousePos.y * 50}vh + 50vh - 50%))`
        }} 
      />

      {/* Force Waves */}
      {forceWaves.map(wave => (
        <div key={wave.id} className="force-wave" style={{ left: wave.x, top: wave.y }} />
      ))}

      {/* The 3D Camera Rig */}
      {/* 
        ScrollZ moves camera forward into the scene (translateZ positive).
        Mouse position tilts camera slightly for parallax (rotateX, rotateY).
      */}
      <div 
        className="camera-rig"
        style={{
          transform: `translate(-50%, -50%) translateZ(${scrollZ}px) rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg)`
        }}
      >
        {/* World Objects */}
        {panels.map((panel) => {
          // Calculate distance from camera to panel
          const distanceToCamera = panel.zOffset - scrollZ;
          
          // DO NOT RENDER objects behind the camera (too far past)
          if (distanceToCamera < -1000) return null;

          // Artificial Depth of Field: Blur objects that are too close or too far
          // Optimal viewing distance is ~1000px away.
          let blurAmount = 0;
          let opacity = 1;

          if (distanceToCamera > 2000) {
             // Too far
             blurAmount = Math.min(10, (distanceToCamera - 2000) / 200);
             // Fade out distantly into fog
             opacity = Math.max(0, 1 - (distanceToCamera - 2000) / 3000); 
          } else if (distanceToCamera < 300) {
             // Too close (about to clip through camera)
             blurAmount = Math.min(20, (300 - distanceToCamera) / 10);
             opacity = Math.max(0, distanceToCamera / 300);
          }

          // Individual panel tactile interaction (tilt towards mouse slightly if close)
          let panelTiltX = 0;
          let panelTiltY = 0;
          if (distanceToCamera > 0 && distanceToCamera < 2000) {
             // React more when closer
             const reactivity = 1 - (distanceToCamera / 2000);
             panelTiltX = mousePos.y * -15 * reactivity;
             panelTiltY = mousePos.x * 15 * reactivity;
          }

          return (
            <div 
              key={panel.id}
              className="physics-panel"
              style={{
                '--panel-color': panel.color,
                // Position panel in 3D space
                transform: `translate(-50%, -50%) translate3d(${panel.xOffset}vw, ${panel.yOffset}vh, -${panel.zOffset}px) rotateX(${panelTiltX}deg) rotateY(${panelTiltY}deg)`,
                filter: `blur(${blurAmount}px)`,
                opacity: opacity
              } as React.CSSProperties}
            >
              <div className="panel-title">{panel.title}</div>
              <div className="panel-desc">{panel.desc}</div>
              
              {/* Internal decorative physics lines */}
              <div style={{ marginTop: '2rem', height: '1px', width: '100%', background: 'rgba(255,255,255,0.1)', position: 'relative' }}>
                 <div style={{ 
                   position: 'absolute', 
                   left: mousePos.isDown ? '100%' : '0%', 
                   top: '-2px', width: '5px', height: '5px', 
                   background: panel.color, borderRadius: '50%',
                   boxShadow: `0 0 10px ${panel.color}`,
                   transition: 'left 1s cubic-bezier(0.1, 0.8, 0.3, 1)'
                 }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="fog-overlay" />
      
      {/* Hidden scroll track to enable body scrolling while container is fixed */}
      <div className="scroll-track" />
    </div>
  );
};

export default PhysicsDrivenWebWorldDemoGemini;
