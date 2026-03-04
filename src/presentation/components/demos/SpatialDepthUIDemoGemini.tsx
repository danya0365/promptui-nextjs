'use client';

import React, { useEffect, useRef, useState } from 'react';

// Spatial Depth UI Experience - Gemini 3.1 Pro Implementation
// Floating layered panels with scroll-driven camera depth and real 3D positioning.

interface SpatialPanel {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  initialZOffset: number;
  initialXY: { x: number; y: number };
  width: number;
  height: number;
}

export const SpatialDepthUIDemoGemini: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const panels: SpatialPanel[] = [
    {
      id: 'panel-front',
      title: 'Current Focus',
      subtitle: 'Active Project details',
      content: 'Primary interaction layer. In a spatial UI, the context you need right now is brought forward, prioritizing high-fidelity textures and crisp typography.',
      initialZOffset: 100,
      initialXY: { x: -15, y: -10 },
      width: 400, height: 250
    },
    {
      id: 'panel-mid-1',
      title: 'Communications',
      subtitle: 'Team Sync & Messages',
      content: 'Secondary context sits slightly behind the primary plane. It remains visible and accessible, physically occupying space in the virtual room without overwhelming the focus.',
      initialZOffset: -150,
      initialXY: { x: 25, y: 15 },
      width: 320, height: 350
    },
    {
      id: 'panel-mid-2',
      title: 'Resource Library',
      subtitle: 'Shared Assets',
      content: 'Assets and references are positioned peripherally. Just like an ambient workspace, they are within arm\'s reach when needed.',
      initialZOffset: -250,
      initialXY: { x: -35, y: 25 },
      width: 300, height: 280
    },
    {
      id: 'panel-far',
      title: 'System Settings',
      subtitle: 'Environment Map',
      content: 'System-level controls exist deep in the Z-axis. Out of the way of daily tasks, but structurally providing a foundation for the environment.',
      initialZOffset: -500,
      initialXY: { x: 10, y: -30 },
      width: 450, height: 200
    }
  ];

  // Map scroll (0 to roughly 2000px) to camera Z depth push
  // By moving the container forward, far panels become mid, mid become front
  const cameraZ = Math.min(scrollY * 0.5, 600); 

  // Global rotation based on mouse (parallax)
  const globRotX = (mousePos.y - 0.5) * -10;
  const globRotY = (mousePos.x - 0.5) * 10;

  return (
    // The container is super tall to generate native scrollbars for the depth effect
    <div className={`spatial-depth-wrapper ${mounted ? 'mounted' : ''}`} style={{ height: '3000px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@100;300;400;500;600&display=swap');

        :root {
          /* Warm neutral background like a high-end physical room */
          --spatial-bg-color: #f0ede9;
          
          /* Apple UI Glass Constants */
          --spatial-glass-bg: rgba(255, 255, 255, 0.4);
          --spatial-glass-border: rgba(255, 255, 255, 0.5);
          --spatial-glass-shadow-inner: rgba(255, 255, 255, 0.8);
          --spatial-glass-shadow-drop: rgba(0, 0, 0, 0.08);
          
          --spatial-text-primary: rgba(0, 0, 0, 0.85);
          --spatial-text-secondary: rgba(0, 0, 0, 0.5);
          
          --font-system: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--spatial-bg-color);
          font-family: var(--font-system);
          /* Subtle ambient gradient mesh in the background */
          background-image: 
            radial-gradient(at 0% 0%, rgba(255,240,230,0.5) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(230,245,255,0.5) 0px, transparent 50%);
          background-attachment: fixed;
        }

        /* Ambient subtle grain overlay to match VisionOS physical feel */
        .ambient-grain {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Fixed viewport for the 3D scene */
        .scene-viewport {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          perspective: 1000px;
          perspective-origin: center center;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* The "Room" that moves globally via Scroll & Mouse */
        .virtual-room {
          position: relative;
          width: 1px; height: 1px;
          transform-style: preserve-3d;
          /* Transition for smooth scroll catchup */
          transition: transform 0.1s linear; 
        }

        /* 
         * --- The Layered Glass Panels ---
         */
        .depth-panel {
          position: absolute;
          /* Center the transform origin */
          top: 50%; left: 50%;
          transform-origin: center center;
          
          border-radius: 28px;
          background: var(--spatial-glass-bg);
          backdrop-filter: blur(40px) saturate(120%);
          -webkit-backdrop-filter: blur(40px) saturate(120%);
          
          box-shadow: 
            inset 0 1px 0 var(--spatial-glass-shadow-inner), /* Top light reflection */
            inset 0 0 0 1px var(--spatial-glass-border),     /* Ultra-thin glass edge */
            0 20px 40px var(--spatial-glass-shadow-drop),    /* Ambient occlusion base shadow */
            0 1px 3px rgba(0,0,0,0.03);                      /* Contact drop */
            
          padding: 2.5rem;
          color: var(--spatial-text-primary);
          overflow: hidden;
          cursor: pointer;
          
          /* Crucial for 3D hierarchical stacking and rendering */
          transform-style: preserve-3d;
          
          /* Smooth out interactions */
          transition: 
            box-shadow 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
            backdrop-filter 0.6s,
            filter 0.4s;
            
          /* Initial spawn animation */
          opacity: 0;
          animation: spawnIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes spawnIn {
          from { opacity: 0; filter: blur(20px); }
          to { opacity: 1; filter: blur(0px); }
        }
        
        /* Subtle noise texture *inside* the glass itself */
        .depth-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
          z-index: -1;
          border-radius: inherit;
        }

        /* Content Styling */
        .panel-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          transform: translateZ(10px); /* Content floats slightly above glass */
        }

        .panel-icon-circle {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 10px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .panel-icon-circle svg {
          width: 20px; height: 20px;
          stroke: var(--spatial-text-primary);
          stroke-width: 1.5;
          fill: none;
        }

        .panel-titles h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: -0.5px;
        }

        .panel-titles p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--spatial-text-secondary);
          font-weight: 500;
        }

        .panel-body, .panel-body * {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--spatial-text-primary);
          font-weight: 400;
          margin: 0;
          transform: translateZ(5px);
        }

        /* 
         * --- Interactive States ---
         */

        /* Hovering any panel pulls it slightly */
        /* (The actual transform is calculated inline to preserve its unique Z base, 
           but we add box-shadow and brightness here) */
        .depth-panel:hover {
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,1), 
            inset 0 0 0 1px rgba(255,255,255,0.7), 
            0 40px 80px rgba(0,0,0,0.15), 
            0 1px 10px rgba(0,0,0,0.05);
          backdrop-filter: blur(50px) saturate(140%);
          -webkit-backdrop-filter: blur(50px) saturate(140%);
          z-index: 10; /* Bring above peers temporarily */
        }

        /* Active Panel Focus State */
        .virtual-room.has-active .depth-panel:not(.active) {
          /* Dim and blur non-active panels to create Depth-of-Field effect */
          filter: blur(8px) opacity(0.5);
          pointer-events: none;
        }
        
        .depth-panel.active {
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,1), 
            inset 0 0 0 1.5px rgba(255,255,255,1), 
            0 50px 100px rgba(0,0,0,0.25);
          /* Maximize blur for the focused element */
          backdrop-filter: blur(60px) saturate(150%);
          -webkit-backdrop-filter: blur(60px) saturate(150%);
          z-index: 100;
        }

        /* Scroll helper ui */
        .scroll-indicator {
          position: fixed;
          bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.4;
          transition: opacity 0.3s;
          z-index: 1000;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .scroll-indicator:hover { opacity: 1; }
        .mouse-icon {
          width: 20px; height: 32px;
          border: 1.5px solid var(--spatial-text-primary);
          border-radius: 10px;
          position: relative;
        }
        .mouse-wheel {
          width: 2px; height: 6px;
          background: var(--spatial-text-primary);
          border-radius: 2px;
          position: absolute;
          top: 4px; left: 50%; transform: translateX(-50%);
          animation: scrollWheel 2s infinite ease-in-out;
        }
        @keyframes scrollWheel {
          0% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, 12px); opacity: 0; }
        }

      `}</style>

      {/* Subtle screen noise overlay */}
      <div className="ambient-grain" />

      {/* The 3D Viewport stuck to screen */}
      <div className="scene-viewport">
        
        {/* The Room holding all panels, translating Z based on scroll & rotating based on mouse */}
        <div 
          className={`virtual-room ${activePanel ? 'has-active' : ''}`}
          style={{
            transform: `translateZ(${cameraZ}px) rotateX(${globRotX}deg) rotateY(${globRotY}deg)`
          }}
        >
          {panels.map((panel, i) => {
            const isActive = activePanel === panel.id;
            
            // Calculate actual 3D position
            // Center is top/left 0 inside the Room
            const pxX = panel.initialXY.x * 10; // Simple multiplier to spread them out
            const pxY = panel.initialXY.y * 10;
            
            // If active, pull it dramatically forward relative to its current position
            // (Note: Since the room moves with scroll, absolute Z stays the same, 
            // but we add +300 on active to pop it out)
            const targetZ = isActive ? panel.initialZOffset + 300 : panel.initialZOffset;
            
            // Also rotate active card slightly to face user dead-on, counteracting global rotation
            const rx = isActive ? -globRotX * 0.5 : 0;
            const ry = isActive ? -globRotY * 0.5 : 0;

            // Simple Depth-of-Field math for non-active state: 
            // the further away from camera intersection (which is roughly -cameraZ), the more blur.
            // But we do this very subtly.
            const distanceFromCamera = (panel.initialZOffset + cameraZ);
            const baseBlur = Math.max(0, -distanceFromCamera / 150); // Blur things behind camera zero
            
            return (
              <div
                key={panel.id}
                className={`depth-panel ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePanel(isActive ? null : panel.id);
                }}
                style={{
                  width: `${panel.width}px`,
                  height: `${panel.height}px`,
                  // Position relative to center
                  marginLeft: `${-panel.width/2}px`,
                  marginTop: `${-panel.height/2}px`,
                  // The crucial 3D transform combining position + interaction
                  transform: `translate3d(${pxX}px, ${pxY}px, ${targetZ}px) rotateX(${rx}deg) rotateY(${ry}deg)`,
                  // Inline transition for the transform to animate smoothly between active/inactive
                  transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s, filter 0.5s',
                  
                  // Apply dynamic ambient blur IF not actively focusing something else 
                  // (if activePanel is set, CSS classes handle the strong blur)
                  filter: (!activePanel && baseBlur > 0) ? `blur(${baseBlur}px)` : undefined,
                  
                  animationDelay: `${i * 0.1}s`
                }}
              >
                <div className="panel-header">
                  <div className="panel-icon-circle">
                    <svg viewBox="0 0 24 24">
                       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="panel-titles">
                    <h3>{panel.title}</h3>
                    <p>{panel.subtitle}</p>
                  </div>
                </div>
                <div className="panel-body">
                  {panel.content}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse-icon"><div className="mouse-wheel"></div></div>
        <span>Scroll to shift Depth</span>
      </div>

      {/* Invisible overlay to catch clicks outside active panel and close it */}
      {activePanel && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 50 }} 
          onClick={() => setActivePanel(null)}
        />
      )}
    </div>
  );
};

export default SpatialDepthUIDemoGemini;
