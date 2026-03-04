'use client';

import React, { useEffect, useState } from 'react';

// Cinematic Spatial Interface - Gemini 3.1 Pro Implementation
// Dramatic, volumetric lighting, slow smooth motion, premium Apple keynote energy.

interface SpatialCard {
  id: string;
  category: string;
  title: string;
  image: string;
  description: string;
  baseZ: number;
}

export const CinematicSpatialDemoGemini: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Smooth scroll interpolation could be added here for a true cinematic feel,
    // but standard scroll with CSS transition handles it decently for a demo.
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards: SpatialCard[] = [
    {
      id: 'SC-1',
      category: 'IMMERSIVE ENVIRONMENTS',
      title: 'Haleakalā Crater',
      description: 'Experience the breathtaking altitude and majestic quiet of Maui’s dormant volcano. Captured in 16K stereoscopic 3D.',
      image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200',
      baseZ: 0
    },
    {
      id: 'SC-2',
      category: 'ENTERTAINMENT',
      title: 'Spatial Cinema',
      description: 'Your personal 100-foot screen. Enhanced dynamically with ambient room lighting matching the content.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200',
      baseZ: -400
    },
    {
      id: 'SC-3',
      category: 'PRODUCTIVITY',
      title: 'Infinite Canvas',
      description: 'Organize your mind in three dimensions. Surround yourself with the apps you love without the constraints of a physical monitor.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
      baseZ: -800
    }
  ];

  // Map scroll to dramatic camera forward movement
  // Move 1px in Z for every 1.5px scrolled
  const cameraZ = Math.min(scrollY / 1.5, 1200);

  return (
    <div className={`cinematic-wrapper ${mounted ? 'mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@200;300;400;500;600&display=swap');

        :root {
          /* Cinematic Dark Theme */
          --cine-bg-base: #0c0e12;
          --cine-bg-light: #1e232b;
          
          /* Volumetric Spots */
          --cine-spot-1: rgba(120, 180, 255, 0.15);
          --cine-spot-2: rgba(200, 150, 255, 0.1);
          
          /* Materials */
          --cine-glass-bg: rgba(255, 255, 255, 0.03);
          --cine-glass-border: rgba(255, 255, 255, 0.1);
          --cine-glass-highlight: rgba(255, 255, 255, 0.25);
          
          /* Shadows */
          --cine-shadow-deep: 0 80px 150px rgba(0, 0, 0, 0.8), 0 20px 40px rgba(0, 0, 0, 0.5);
          
          --font-system: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
          margin: 0;
          background-color: var(--cine-bg-base);
          color: #fff;
          font-family: var(--font-system);
          
          /* Provide enough scroll height to drive the Z-axis animation */
          min-height: 250vh;
        }

        .cinematic-wrapper {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          perspective-origin: center 40%;
          overflow: hidden;
          background: radial-gradient(circle at center, var(--cine-bg-light) 0%, var(--cine-bg-base) 100%);
        }

        /* Ambient Volumetric Lighting */
        .cinematic-wrapper::before,
        .cinematic-wrapper::after {
          content: '';
          position: absolute;
          width: 100vw; height: 100vh;
          pointer-events: none;
          z-index: 0;
          transition: opacity 1.5s ease;
        }

        .cinematic-wrapper::before {
          top: -20vh; left: -10vw;
          background: radial-gradient(ellipse at center, var(--cine-spot-1) 0%, transparent 60%);
          filter: blur(80px);
        }

        .cinematic-wrapper::after {
          bottom: -20vh; right: -10vw;
          background: radial-gradient(ellipse at center, var(--cine-spot-2) 0%, transparent 60%);
          filter: blur(100px);
        }

        /* ---------------------------------
           3D Environment Rig 
           --------------------------------- */
        .spatial-rig {
          position: absolute;
          width: 1px; height: 1px;
          transform-style: preserve-3d;
          /* Extremely slow, smooth transition for keynote feel */
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* When a card is active, dim the volumetric lights and background */
        .cinematic-wrapper:has(.active)::before,
        .cinematic-wrapper:has(.active)::after {
          opacity: 0.2;
        }
        .cinematic-wrapper:has(.active) {
          background: #000;
        }


        /* ---------------------------------
           Card Design 
           --------------------------------- */
        .spatial-card {
          position: absolute;
          top: 50%; left: 50%;
          width: 700px;
          height: 480px;
          margin-left: -350px;
          margin-top: -240px;
          
          border-radius: 24px;
          background: var(--cine-glass-bg);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          
          /* The 'Reflective Glass Edge' effect */
          box-shadow: 
            inset 0 1px 0 var(--cine-glass-highlight),
            inset 0 0 0 1px var(--cine-glass-border),
            var(--cine-shadow-deep);
            
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
          
          /* Cinematic slow transitions for everything */
          transition: 
            transform 1.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 1s ease,
            opacity 1s ease,
            filter 1s ease;
            
          /* Initial spawn fade */
          opacity: 0;
          transform: scale(0.9);
        }

        .mounted .spatial-card {
          opacity: 1;
        }

        /* The Hero Image with smooth linear gradient mask to blend into the glass */
        .hero-image {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 65%;
          background-size: cover;
          background-position: center;
          /* Masking fades out the bottom of the image smoothly */
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
          transform: translateZ(1px); /* Fixes z-fighting with glass bg */
          transition: transform 1.5s ease;
        }

        /* Simulated surface reflection on the glass */
        .glass-reflection {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.02) 100%);
          pointer-events: none;
          z-index: 10;
        }

        /* Typography */
        .card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 3rem;
          transform: translateZ(20px); /* Type sits slightly off the glass */
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .category {
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
          letter-spacing: 3px;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: -1px;
          margin: 0;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .description {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          line-height: 1.6;
          font-weight: 300;
          max-width: 80%;
          margin: 0;
        }

        /* ---------------------------------
           Interactions
           --------------------------------- */
           
        /* Hover gently pulls it slightly */
        .spatial-card:hover {
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.4),
            inset 0 0 0 1px rgba(255,255,255,0.2),
            var(--cine-shadow-deep),
            0 0 100px rgba(255,255,255,0.05); /* Soft ambient glow */
        }
        
        .spatial-card:hover .hero-image {
          transform: scale(1.03) translateZ(1px);
        }

        /* Active Focus Mode */
        /* If something is active, dim unused ones */
        .spatial-rig:has(.active) .spatial-card:not(.active) {
          opacity: 0.2;
          filter: blur(10px) brightness(0.5);
          pointer-events: none;
        }

        /* The active card comes dramatically forward */
        .spatial-card.active {
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.5),
            inset 0 0 0 1px rgba(255,255,255,0.3),
            0 100px 200px rgba(0,0,0,1);
          z-index: 100;
          cursor: default;
        }
        
        .btn-close {
          position: absolute;
          top: 2rem; right: 2rem;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
          z-index: 30;
        }
        .spatial-card.active .btn-close {
          opacity: 1;
        }
        .btn-close:hover {
          background: rgba(255,255,255,0.3);
          transform: scale(1.1);
        }

        /* Scroll Helper */
        .scroll-hint {
          position: fixed;
          bottom: 3rem; left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          letter-spacing: 2px;
          font-size: 0.8rem;
          text-transform: uppercase;
          transition: opacity 0.5s;
          pointer-events: none;
        }
        /* Hide hint if scrolling deeply or looking at active */
        .cinematic-wrapper:has(.active) .scroll-hint { opacity: 0; }
        
      `}</style>
      
      {/* The 3D Engine Rig */}
      <div 
        className="spatial-rig"
        style={{
          // Move the entire world towards the user based on scroll
          transform: `translateZ(${cameraZ}px) rotateX(${scrollY * 0.01}deg)`
        }}
      >
        {cards.map((card, i) => {
          const isActive = activeCardId === card.id;
          
          // Determine Z Position:
          // Normal: The base Z offset
          // Active: Pop it massively forward RELATIVE to the moving camera,
          // so it always centers right in front of the lens.
          const activeZBoost = -cameraZ + 400; // counteract camera to put it dead center in front
          const targetZ = isActive ? activeZBoost : card.baseZ;

          // Add a slight stagger to initial presentation
          const rx = isActive ? 0 : 0;
          const ry = isActive ? 0 : i % 2 === 0 ? 5 : -5; // Slight angle left/right statically

          return (
            <div
              key={card.id}
              className={`spatial-card ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (!isActive) setActiveCardId(card.id);
              }}
              style={{
                // Lay them out horizontally slightly but mostly deep in Z
                transform: `translateX(${i === 0 ? 0 : i === 1 ? -150 : 200}px) translateY(${isActive ? 0 : i * 20}px) translateZ(${targetZ}px) rotateY(${ry}deg) rotateX(${rx}deg)`,
                // Add extreme transition weighting when active switching for Cinematic feel
                transitionDuration: isActive ? '1.5s' : '1.2s'
              }}
            >
              {isActive && (
                <button 
                  className="btn-close"
                  onClick={(e) => { e.stopPropagation(); setActiveCardId(null); }}
                >
                  ×
                </button>
              )}
              
              <div className="hero-image" style={{ backgroundImage: `url(${card.image})` }} />
              <div className="glass-reflection" />
              
              <div className="card-content">
                <div className="category">{card.category}</div>
                <h2 className="title">{card.title}</h2>
                <p className="description">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="scroll-hint">
        Scroll to explore space
      </div>
      
      {/* Invisible overlay to close on background click */}
      {activeCardId && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10 }} onClick={() => setActiveCardId(null)} />
      )}
    </div>
  );
};

export default CinematicSpatialDemoGemini;
