'use client';

import React, { useState } from 'react';

// Futuristic Space-Inspired Tech Platform - Gemini 3.1 Pro Implementation
// Pure CSS styling, deep navy cosmic gradient, neon cyan/purple highlights, glassmorphism.

interface SpaceNode {
  id: string;
  classification: string;
  designation: string;
  coordinates: string;
  status: string;
  description: string;
  featured?: boolean;
}

const CATEGORIES = ['ALL SECTORS', 'EXPLORATION', 'TERRAFORMING', 'ASTRO-MINING'];

const ITEMS: SpaceNode[] = [
  {
    id: 'spc-01',
    classification: 'EXPLORATION',
    designation: 'VOYAGER OMEGA',
    coordinates: 'SECTOR 7G-AX',
    status: 'ACTIVE',
    description: 'Deep space reconnaissance vessel currently mapping the outer rim anomalies in the Andromeda galaxy.',
    featured: true
  },
  {
    id: 'spc-02',
    classification: 'ASTRO-MINING',
    designation: 'KUIPER EXTRACTOR',
    coordinates: 'BELT 9-ALPHA',
    status: 'DEPLOYED',
    description: 'Autonomous drone swarms extracting rare-earth elements and dense isotopes from passing volatile asteroids.'
  },
  {
    id: 'spc-03',
    classification: 'TERRAFORMING',
    designation: 'EDEN PROTOCOL',
    coordinates: 'KEPLER-186F',
    status: 'PHASE 3',
    description: 'Atmospheric processing station injecting synthesized biospheres to accelerate planetary habitability.',
    featured: true
  },
  {
    id: 'spc-04',
    classification: 'EXPLORATION',
    designation: 'PULSAR BEACON',
    coordinates: 'NGC 1300',
    status: 'TRANSMITTING',
    description: 'Long-range communication relay utilizing synchronized neutron star emissions for faster-than-light data transfer.'
  },
  {
    id: 'spc-05',
    classification: 'TERRAFORMING',
    designation: 'AQUA-GENESIS',
    coordinates: 'MARS ORBIT',
    status: 'STABILIZING',
    description: 'Orbital ice-comet redirection facility designed to introduce massive oceanic bodies to arid celestial spheres.'
  },
  {
    id: 'spc-06',
    classification: 'ASTRO-MINING',
    designation: 'TITAN CORE',
    coordinates: 'SATURN MOON',
    status: 'OPTIMAL',
    description: 'Sub-surface drilling operation harvesting liquid methane from vast hydrocarbon lakes for orbital refueling.',
    featured: true
  }
];

export const FuturisticSpacePlatformDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL SECTORS');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL SECTORS' ? true : item.classification === activeTab
  );

  return (
    <div className="space-platform-container">
      {/* Futuristic Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;700&family=Rajdhani:wght@500;600;700&display=swap');
      `}</style>
      
      {/* Deep Space Background Effects */}
      <div className="cosmic-dust"></div>
      <div className="ambient-nebula-blue"></div>
      <div className="ambient-nebula-purple"></div>

      <div className="space-interface-wrapper">
        
        {/* Transparent Floating Header */}
        <header className="space-header">
          <div className="header-brand">
            <h1 className="brand-title">STELLAR<span className="brand-accent">OS</span></h1>
            <p className="brand-subtitle">INTERSTELLAR HUB OPERATIONS</p>
          </div>
          
          <nav className="space-tab-nav">
            {CATEGORIES.map(tab => (
              <button
                key={tab}
                className={`space-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          <div className="header-meta">
            <div className="neon-badge">
              <span className="badge-value">{filteredItems.length.toString().padStart(2, '0')}</span>
              <span className="badge-label">SYSTEMS</span>
            </div>
          </div>
        </header>

        {/* 3-Column Grid */}
        <div className="space-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="space-card-wrapper">
              
              {/* Depth Layering Card */}
              <div className="space-card">
                
                {/* Soft Glowing Featured Marker */}
                {item.featured && (
                  <div className="glow-featured-marker">
                    <span>PRIME</span>
                    <div className="marker-glow"></div>
                  </div>
                )}

                <div className="card-top-data">
                  <div className="classification">{item.classification}</div>
                  <div className={`status-pill ${item.status === 'ACTIVE' || item.status === 'OPTIMAL' || item.status === 'PHASE 3' ? 'good' : 'neutral'}`}>
                    {item.status}
                  </div>
                </div>

                <div className="card-core-content">
                  <h2 className="designation">{item.designation}</h2>
                  <div className="coordinates">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    {item.coordinates}
                  </div>
                  
                  <div className="separator"></div>
                  
                  <p className="description">{item.description}</p>
                </div>

                <div className="card-bottom-actions">
                  <button className="hologram-btn">TRANSMIT ORDER</button>
                </div>

              </div>
              
              {/* Card Shadow/Depth Element */}
              <div className="card-depth-shadow"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          /* Deep Navy Cosmic Palette */
          --sp-bg-deep: #030816;
          --sp-bg-card: rgba(10, 15, 30, 0.4);
          
          /* Neon Highlights */
          --sp-cyan: #00F0FF;
          --sp-purple: #B200FF;
          --sp-blue-glow: rgba(0, 240, 255, 0.5);
          --sp-purple-glow: rgba(178, 0, 255, 0.5);
          
          /* Text Colors */
          --sp-text-main: #E2E8F0;
          --sp-text-muted: #8F9BB3;
          
          /* Typography */
          --sp-font-headline: 'Rajdhani', sans-serif;
          --sp-font-body: 'Exo', sans-serif;
          
          /* Layout */
          --sp-radius: 12px;
        }

        /* Base Container Settings */
        .space-platform-container {
          min-height: 100vh;
          width: 100%;
          background: var(--sp-bg-deep);
          color: var(--sp-text-main);
          font-family: var(--sp-font-body);
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Cosmic Background Effects */
        .ambinet-nebula-blue, .ambient-nebula-purple {
          position: fixed;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          pointer-events: none;
        }

        .ambient-nebula-blue {
          top: -10%; left: -5%;
          width: 50vw; height: 50vw;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
        }

        .ambient-nebula-purple {
          bottom: -20%; right: -10%;
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(178, 0, 255, 0.08) 0%, transparent 70%);
        }

        .cosmic-dust {
          position: fixed;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
          z-index: 0;
          pointer-events: none;
        }

        .space-interface-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Floating Transparent Header */
        .space-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3.5rem;
          padding: 1.2rem 2.5rem;
          background: rgba(3, 8, 22, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-radius: 100px; /* Pillow shape header */
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .header-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--sp-font-headline);
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0;
          line-height: 1;
          letter-spacing: 0.05em;
        }

        .brand-accent {
          color: var(--sp-cyan);
          text-shadow: 0 0 10px var(--sp-blue-glow);
        }

        .brand-subtitle {
          font-family: var(--sp-font-body);
          font-size: 0.7rem;
          color: var(--sp-purple);
          margin: 0;
          letter-spacing: 0.2em;
          text-shadow: 0 0 5px var(--sp-purple-glow);
        }

        /* Tab Nav */
        .space-tab-nav {
          display: flex;
          gap: 0.5rem;
        }

        .space-tab {
          background: transparent;
          border: 1px solid transparent;
          color: var(--sp-text-muted);
          font-family: var(--sp-font-headline);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .space-tab:hover {
          color: var(--sp-text-main);
          background: rgba(255,255,255,0.02);
        }

        .space-tab.active {
          color: var(--sp-cyan);
          background: rgba(0, 240, 255, 0.05);
          border-color: rgba(0, 240, 255, 0.2);
          box-shadow: inset 0 0 15px rgba(0, 240, 255, 0.1), 0 0 10px rgba(0, 240, 255, 0.1);
        }

        /* Neon Counter Badge */
        .neon-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(178, 0, 255, 0.1);
          border: 1px solid rgba(178, 0, 255, 0.3);
          padding: 0.4rem 1.2rem;
          border-radius: 30px;
          box-shadow: 0 0 15px rgba(178, 0, 255, 0.2);
        }

        .badge-value {
          font-family: var(--sp-font-headline);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--sp-text-main);
          text-shadow: 0 0 5px #FFF;
        }

        .badge-label {
          font-family: var(--sp-font-body);
          font-size: 0.65rem;
          color: var(--sp-purple);
          letter-spacing: 0.15em;
          font-weight: 700;
        }

        /* 3-Column Grid */
        .space-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem; /* Layered spacing */
        }

        @media (min-width: 768px) {
          .space-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .space-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Depth Layering Card */
        .space-card-wrapper {
          position: relative;
          perspective: 1000px;
        }

        .space-card {
          position: relative;
          background: var(--sp-bg-card);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.05);
          border-top: 1px solid rgba(0, 240, 255, 0.2); /* Top edge highlight */
          border-radius: var(--sp-radius);
          min-height: 420px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          z-index: 2;
          transform-style: preserve-3d;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .card-depth-shadow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.05));
          border-radius: var(--sp-radius);
          z-index: 1;
          transform: translateY(15px) translateZ(-20px) scale(0.95);
          filter: blur(15px);
          transition: transform 0.4s ease, opacity 0.4s ease;
          opacity: 0.5;
        }

        .space-card-wrapper:hover .space-card {
          transform: translateY(-8px) rotateX(2deg);
          border-top-color: var(--sp-cyan);
          box-shadow: inset 0 20px 40px rgba(0, 240, 255, 0.05);
        }

        .space-card-wrapper:hover .card-depth-shadow {
          transform: translateZ(-30px) translateY(20px) scale(0.92);
          opacity: 1;
        }

        /* Soft Glowing Featured Marker */
        .glow-featured-marker {
          position: absolute;
          top: -12px;
          right: 30px;
          background: #111;
          border: 1px solid rgba(178, 0, 255, 0.5);
          color: var(--sp-purple);
          font-family: var(--sp-font-body);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          padding: 4px 12px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .marker-glow {
          width: 6px; height: 6px;
          background: var(--sp-purple);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--sp-purple);
          animation: breath 2s infinite alternate;
        }

        @keyframes breath {
          from { opacity: 0.4; }
          to { opacity: 1; box-shadow: 0 0 15px var(--sp-purple); }
        }

        /* Card Content */
        .card-top-data {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .classification {
          font-family: var(--sp-font-headline);
          font-size: 0.75rem;
          color: var(--sp-cyan);
          letter-spacing: 0.15em;
          font-weight: 600;
        }

        .status-pill {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.1em;
          border: 1px solid;
        }

        .status-pill.good {
          color: #00FF9D;
          border-color: rgba(0, 255, 157, 0.3);
          background: rgba(0, 255, 157, 0.05);
        }

        .status-pill.neutral {
          color: var(--sp-text-muted);
          border-color: rgba(143, 155, 179, 0.3);
          background: rgba(143, 155, 179, 0.05);
        }

        .card-core-content {
          flex-grow: 1;
        }

        .designation {
          font-family: var(--sp-font-headline);
          font-size: 2rem;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
          font-weight: 700;
          color: #FFF;
          letter-spacing: 0.02em;
        }

        .coordinates {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--sp-text-muted);
          letter-spacing: 0.1em;
          font-weight: 300;
        }

        .separator {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(0, 240, 255, 0.3), transparent);
          margin: 1.5rem 0;
        }

        .description {
          font-weight: 300;
          line-height: 1.6;
          font-size: 0.9rem;
          color: var(--sp-text-muted);
          margin: 0;
        }

        /* Card Action */
        .card-bottom-actions {
          margin-top: 1.5rem;
        }

        .hologram-btn {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(0, 240, 255, 0.2);
          color: var(--sp-text-main);
          font-family: var(--sp-font-headline);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          padding: 0.8rem;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .hologram-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.2), transparent);
          transform: skewX(-20deg);
          transition: 0s;
        }

        .space-card-wrapper:hover .hologram-btn {
          border-color: rgba(0, 240, 255, 0.5);
          color: var(--sp-cyan);
          background: rgba(0, 240, 255, 0.05);
        }

        .hologram-btn:hover::before {
          left: 200%;
          transition: 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FuturisticSpacePlatformDemoGemini;
