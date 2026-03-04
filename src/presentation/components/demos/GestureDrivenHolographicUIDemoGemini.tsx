'use client';

import React, { useEffect, useState } from 'react';

// Gesture-Driven Holographic UI - Gemini 3.1 Pro Implementation
// Floating spatial cards that simulate gesture-based interaction (splitting into layered sub-panels).

interface SpatialCluster {
  id: string;
  title: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
  sublayers: { title: string; content: string }[];
}

export const GestureDrivenHolographicUIDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  
  // Mouse position for parallax / 3D tilt
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const clusters: SpatialCluster[] = [
    {
      id: 'NODE-ALPHA',
      title: 'BIOMETRIC_SYNC',
      subtitle: 'NEURAL LINK ACTIVE',
      metrics: [
        { label: 'PULSE', value: '72 BPM' },
        { label: 'THETA', value: '4.2 Hz' }
      ],
      sublayers: [
        { title: 'SYNAPSE_MAP', content: 'Connection dense in prefrontal cortex. Routing efficiency at 94.2%.' },
        { title: 'STRESS_LEVEL', content: 'Minimal friction detected. Stable environment.' }
      ]
    },
    {
      id: 'NODE-BETA',
      title: 'ENVIRONMENT_SCAN',
      subtitle: 'SPATIAL MAPPING',
      metrics: [
        { label: 'DEPTH', value: '14.5m' },
        { label: 'ENTROPY', value: '0.04' }
      ],
      sublayers: [
        { title: 'TOPOLOGY_GRID', content: 'Room scanned. 3 moving entities detected. No threat signatures.' },
        { title: 'LIGHT_INDEX', content: 'Ambient lux at 240. Optimal for holographic projection.' }
      ]
    },
    {
      id: 'NODE-GAMMA',
      title: 'CORE_PROCESSES',
      subtitle: 'QUANTUM STATE',
      metrics: [
        { label: 'Q-BITS', value: '1024' },
        { label: 'COHERENCE', value: '99.9%' }
      ],
      sublayers: [
        { title: 'ENTANGLEMENT', content: 'Node pairs synchronized. Data transfer instantaneous.' },
        { title: 'ERROR_CORRECTION', content: 'Active. Zero faults derived in last 10,000 cycles.' }
      ]
    }
  ];

  // Calculate parallax rotation mapping
  const rotateY = mousePos.x * 10; // Max 10 deg
  const rotateX = mousePos.y * -10; // Max 10 deg

  return (
    <div className={`gesture-viewport ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Jura:wght@300;400;500;600&display=swap');

        :root {
          --g-bg-center: #1a1a2e;
          --g-bg-edge: #0f0f1a;
          --g-light: rgba(230, 230, 255, 0.9);
          --g-glow: rgba(180, 200, 255, 0.4);
          --g-accent: #9d8df1;
          
          --font-head: 'Syncopate', sans-serif;
          --font-body: 'Jura', sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--g-bg-edge);
          color: var(--g-light);
          font-family: var(--font-body);
          overflow-x: hidden;
        }

        /* ---------------------------------
           Atmospheric Background
           --------------------------------- */
        .gesture-viewport {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at 50% 50%, var(--g-bg-center), var(--g-bg-edge));
          perspective: 2000px;
          overflow: hidden;
        }

        /* Soft Floating Particles (Light Dust) */
        .gesture-viewport::before {
          content: "";
          position: absolute;
          inset: -50%;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, var(--g-glow) 100%, transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.1) 100%, transparent),
            radial-gradient(1.5px 1.5px at 50px 160px, var(--g-glow) 100%, transparent),
            radial-gradient(2px 2px at 90px 40px, rgba(255,255,255,0.05) 100%, transparent);
          background-size: 200px 200px;
          animation: slowDrift 60s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes slowDrift {
          0% { transform: rotate(0deg) translate(0, 0); }
          100% { transform: rotate(5deg) translate(-100px, -100px); }
        }

        /* ------------------------------------
           3D Interactive Stage
           ------------------------------------ */
        .stage {
          position: relative;
          z-index: 10;
          display: flex;
          gap: 4vw;
          
          transform-style: preserve-3d;
          /* Smoothly follows mouse */
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Lock rotation when an item is expanded */
        .stage.is-expanded {
          transform: rotateX(0deg) rotateY(0deg) !important;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ---------------------------------
           Spatial Cards
           --------------------------------- */
        .hologram-card {
          position: relative;
          width: 320px;
          height: 480px;
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
        }

        /* Fade in sequence */
        .hologram-card { opacity: 0; transform: translateY(40px) scale(0.95); }
        .mounted .hologram-card:nth-child(1) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.1s; }
        .mounted .hologram-card:nth-child(2) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.2s; }
        .mounted .hologram-card:nth-child(3) { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.3s; }

        /* The main visible panel of the card */
        .card-surface {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          
          /* Light Frames */
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            inset 0 0 40px rgba(150, 150, 255, 0.1),
            0 10px 30px rgba(0,0,0,0.4);
            
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          
          transform: translateZ(20px);
          transition: all 0.4s ease;
        }

        /* Hover: Lift and Glow */
        .hologram-card:hover .card-surface {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 
            inset 0 0 60px rgba(150, 150, 255, 0.15),
            0 0 20px rgba(255, 255, 255, 0.1),
            0 20px 40px rgba(0,0,0,0.6);
          transform: translateZ(40px) translateY(-10px);
        }

        /* ---------------------------------
           Card Typography & Content
           --------------------------------- */
        /* Floating Header Bar */
        .floating-header {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%) translateZ(30px);
          background: var(--g-bg-center);
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.15);
          white-space: nowrap;
          font-family: var(--font-head);
          font-size: 0.7rem;
          letter-spacing: 2px;
          color: var(--g-accent);
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
          transition: transform 0.4s ease;
        }

        .hologram-card:hover .floating-header {
          transform: translateX(-50%) translateZ(60px);
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          text-shadow: 0 0 10px var(--g-accent);
        }

        .card-title {
          font-family: var(--font-head);
          font-size: 1.2rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
          color: white;
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        .card-subtitle {
          font-size: 0.8rem;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 3rem;
          text-transform: uppercase;
        }

        .metrics-container {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
        }

        .metric {
          display: flex;
          flex-direction: column;
        }

        .metric-label {
          font-size: 0.65rem;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.3rem;
        }

        .metric-value {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--g-light);
        }

        /* Simulated Holographic Element inside card */
        .holo-orb {
          width: 80px; height: 80px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          margin: 0 auto;
          position: relative;
          transform-style: preserve-3d;
          animation: spinOrb 10s linear infinite;
        }
        .holo-orb::before, .holo-orb::after {
          content: ''; position: absolute; inset: -1px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .holo-orb::before { transform: rotateX(60deg); }
        .holo-orb::after { transform: rotateY(60deg); }

        @keyframes spinOrb { 100% { transform: rotateX(360deg) rotateY(360deg); } }

        /* ---------------------------------
           Gesture Split Interaction (Expansion)
           --------------------------------- */
        /* Unselected cards fade and recede */
        .stage.is-expanded .hologram-card:not(.is-active) {
          opacity: 0.05;
          transform: translateZ(-300px) scale(0.8);
          pointer-events: none;
        }

        /* Active Card positions itself */
        .stage.is-expanded .hologram-card.is-active {
          position: absolute;
          left: 50%; top: 50%;
          /* We reset its transform relative to stage, but move it physically left to make room for details */
          margin-left: -160px; /* half width */
          margin-top: -240px; /* half height */
          transform: translateX(-200px) translateZ(100px) !important;
          cursor: default;
        }

        /* Disable hover lift when active */
        .hologram-card.is-active .card-surface {
          box-shadow: 
            inset 0 0 60px rgba(150, 150, 255, 0.2),
            0 0 30px rgba(255, 255, 255, 0.05),
            0 30px 60px rgba(0,0,0,0.8);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* The Sub-panels that "Split" outward */
        .sub-panels-container {
          position: absolute;
          top: 0; left: 100%; /* Positioned right of the main card */
          width: 500px;
          height: 100%;
          margin-left: 40px;
          pointer-events: none; /* Let parent handle clicks if needed, or enable for specific buttons */
          
          display: flex;
          flex-direction: column;
          gap: 20px;
          
          perspective: 1000px;
        }

        .sub-panel {
          flex: 1;
          background: rgba(255, 255, 255, 0.015);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          color: white;
          
          /* Split Gesture Animation */
          opacity: 0;
          transform-origin: left center;
          transform: rotateY(-30deg) translateX(-50px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .is-active .sub-panels-container { pointer-events: auto; }

        .is-active .sub-panel {
          opacity: 1;
          transform: rotateY(0deg) translateX(0);
        }
        
        /* Stagger the split animation */
        .is-active .sub-panel:nth-child(1) { transition-delay: 0.1s; border-left: 2px solid var(--g-accent); }
        .is-active .sub-panel:nth-child(2) { transition-delay: 0.2s; border-left: 2px solid rgba(255,255,255,0.4); }

        .sub-title {
          font-family: var(--font-head);
          font-size: 0.8rem;
          letter-spacing: 2px;
          color: var(--g-accent);
          margin-bottom: 1rem;
        }

        .sub-content {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
        }

        /* Close Button */
        .close-gesture {
          position: absolute;
          top: -20px; right: 0;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6);
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          cursor: pointer;
          font-family: var(--font-body);
          letter-spacing: 2px;
          font-size: 0.75rem;
          transition: all 0.3s;
          
          opacity: 0;
          transform: translateY(-10px);
        }

        .is-active .close-gesture {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }

        .close-gesture:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          border-color: white;
        }

      `}</style>
      
      <div 
        className={`stage ${activeCluster ? 'is-expanded' : ''}`}
        style={!activeCluster ? { transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` } : undefined}
      >
        {clusters.map((cluster) => {
          const isActive = activeCluster === cluster.id;

          return (
            <div 
              key={cluster.id}
              className={`hologram-card ${isActive ? 'is-active' : ''}`}
              onClick={() => { if (!isActive) setActiveCluster(cluster.id); }}
            >
              <div className="card-surface">
                <div className="floating-header">{cluster.id}</div>
                
                <div className="card-title">{cluster.title}</div>
                <div className="card-subtitle">{cluster.subtitle}</div>
                
                <div className="holo-orb" />
                
                <div className="metrics-container">
                  {cluster.metrics.map((m, i) => (
                    <div key={i} className="metric">
                      <div className="metric-label">{m.label}</div>
                      <div className="metric-value">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* The layers that "split" out when active */}
              {isActive && (
                <div className="sub-panels-container">
                  <button className="close-gesture" onClick={(e) => { e.stopPropagation(); setActiveCluster(null); }}>
                    CLOSE_GESTURE ✕
                  </button>
                  
                  {cluster.sublayers.map((layer, i) => (
                    <div key={i} className="sub-panel">
                      <div className="sub-title">{layer.title}</div>
                      <div className="sub-content">{layer.content}</div>
                      
                      {/* Fake data viz line */}
                      <div style={{ marginTop: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.1)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-2px', left: 0, height: '5px', width: '30%', background: 'var(--g-accent)', borderRadius: '3px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GestureDrivenHolographicUIDemoGemini;
