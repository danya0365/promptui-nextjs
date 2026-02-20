'use client';

import React, { useState } from 'react';

// Cosmic-Inspired Modern Web Directory - Gemini 3.1 Pro Implementation
// Pure CSS styling focusing on deep gradients, neon highlights, and a visionary aesthetic.

interface SpaceEntity {
  id: string;
  category: string;
  title: string;
  explorer: string;
  distance: string;
  description: string;
  featured?: boolean;
}

const CATEGORIES = ['ALL SECTORS', 'NEBULAE', 'GALAXIES', 'ANOMALIES'];

const ITEMS: SpaceEntity[] = [
  {
    id: 'cos-01',
    category: 'NEBULAE',
    title: 'ORION FORGE',
    explorer: 'Stellaris Probes',
    distance: '1,344 Light Years',
    description: 'A stellar nursery characterized by intense ultraviolet radiation from young, massive stars illuminating hydrogen clouds.',
    featured: true
  },
  {
    id: 'cos-02',
    category: 'GALAXIES',
    title: 'ANDROMEDA VEIL',
    explorer: 'Hubble Deep',
    distance: '2.5M Light Years',
    description: 'The nearest major galactic neighbor. A vast spiral structure currently on a collision course with our Milky Way.'
  },
  {
    id: 'cos-03',
    category: 'ANOMALIES',
    title: 'PULSAR X-1',
    explorer: 'Vanguard X-Ray',
    distance: '6,000 Light Years',
    description: 'A rapidly rotating neutron star emitting periodic bursts of electromagnetic radiation with extreme precision.',
    featured: true
  },
  {
    id: 'cos-04',
    category: 'NEBULAE',
    title: 'HELIX EYE',
    explorer: 'Spitzer IR',
    distance: '650 Light Years',
    description: 'A planetary nebula formed by a dying sun-like star shedding its outer layers into a mesmerizing glowing ring.'
  },
  {
    id: 'cos-05',
    category: 'GALAXIES',
    title: 'SOMBRERO DISK',
    explorer: 'Telescope Array',
    distance: '31M Light Years',
    description: 'An unbarred spiral galaxy featuring a brilliant white, bulbous core encircled by thick dust lanes.'
  },
  {
    id: 'cos-06',
    category: 'ANOMALIES',
    title: 'VOID REACH',
    explorer: 'Deep Space NA',
    distance: '700M Light Years',
    description: 'A vast expanse of space containing exceptionally few galaxies. A profound enigma of cosmic structuring.',
    featured: true
  }
];

export const CosmicInspiredWebDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL SECTORS');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL SECTORS' ? true : item.category === activeTab
  );

  return (
    <div className="cosmic-container">
      {/* Background Ambience */}
      <div className="starfield"></div>
      <div className="cosmic-nebula-glow"></div>

      <div className="cosmic-content-layer">
        
        {/* Header */}
        <header className="cosmic-header">
          <div className="brand-group">
            <h1 className="cosmic-title">ASTRA<span className="cosmic-accent">VISTA</span></h1>
            <p className="cosmic-subtitle">Interstellar Cartography Index</p>
          </div>
          
          <div className="cosmic-stats">
            <div className="stat-badge">
              <span className="stat-glow-sphere"></span>
              <span className="stat-number">{filteredItems.length}</span>
              <span className="stat-label">ENTITIES LOGGED</span>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="cosmic-nav">
          <div className="nav-tabs-container">
            {CATEGORIES.map(tab => (
              <button
                key={tab}
                className={`cosmic-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Grid System */}
        <div className="cosmic-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="cosmic-card">
              
              {item.featured && (
                <div className="priority-label-wrapper">
                  <div className="priority-label">PRIME OBSERVATION</div>
                </div>
              )}

              <div className="card-stellar-bg"></div>

              <div className="card-info-layer">
                <div className="card-meta-top">
                  <span className="category-pill">{item.category}</span>
                  <span className="distance-info">~ {item.distance}</span>
                </div>

                <h3 className="entity-title">{item.title}</h3>
                <div className="divider-line"></div>
                <p className="entity-desc">{item.description}</p>

                <div className="card-footer">
                  <span className="explorer-tag">
                    <span className="dim">DISCOVERED BY:</span> {item.explorer}
                  </span>
                  <button className="warp-btn">WARP TO SEC</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Core Cosmic Variables */
        :root {
          /* Deep Space Palette */
          --cs-bg-base: #050512;
          --cs-card-bg: rgba(18, 16, 42, 0.6);
          --cs-card-border: rgba(147, 91, 255, 0.2);
          
          /* Neons */
          --cs-neon-blue: #00F0FF;
          --cs-neon-purple: #B026FF;
          --cs-neon-magenta: #FF00A0;
          
          /* Text */
          --cs-text-light: #F4F4FD;
          --cs-text-dim: #A1A1BA;
          
          /* Shape */
          --cs-radius: 12px;
          
          /* Typography */
          --cs-font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          --cs-font-display: 'Michroma', 'Syncopate', sans-serif;
        }

        /* Base Container */
        .cosmic-container {
          min-height: 100vh;
          width: 100%;
          background: var(--cs-bg-base);
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(18, 10, 42, 1) 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, rgba(20, 5, 30, 1) 0%, transparent 60%);
          color: var(--cs-text-light);
          font-family: var(--cs-font-sans);
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Space Environment Effects */
        .starfield {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #FFF, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, rgba(255,255,255,0.6), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, rgba(255,255,255,0.9), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.4), rgba(0,0,0,0));
          background-size: 200px 200px;
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
          animation: drift 100s linear infinite;
        }
        
        @keyframes drift {
          0% { background-position: 0 0; }
          100% { background-position: -1000px 1000px; }
        }

        .cosmic-nebula-glow {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 600px;
          background: radial-gradient(ellipse at top center, rgba(176, 38, 255, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Layout Structure */
        .cosmic-content-layer {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header */
        .cosmic-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .brand-group {
          display: flex;
          flex-direction: column;
        }

        .cosmic-title {
          font-family: var(--cs-font-display);
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin: 0 0 0.5rem 0;
          line-height: 1;
          color: var(--cs-text-light);
          text-shadow: 0 0 20px rgba(176, 38, 255, 0.5);
        }

        .cosmic-accent {
          color: var(--cs-neon-blue);
          text-shadow: 0 0 15px rgba(0, 240, 255, 0.6);
        }

        .cosmic-subtitle {
          color: var(--cs-neon-purple);
          font-size: 0.95rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        /* Prominent Counter Badge */
        .cosmic-stats {
          display: flex;
          align-items: center;
        }

        .stat-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(18, 16, 42, 0.8);
          border: 1px solid var(--cs-card-border);
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          box-shadow: 0 0 25px rgba(176, 38, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .stat-glow-sphere {
          width: 10px;
          height: 10px;
          background: var(--cs-neon-blue);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--cs-neon-blue);
        }

        .stat-number {
          font-family: var(--cs-font-display);
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--cs-text-light);
        }

        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--cs-text-dim);
        }

        /* Tab Navigation */
        .cosmic-nav {
          margin-bottom: 3.5rem;
        }

        .nav-tabs-container {
          display: inline-flex;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 2px;
          gap: 2rem;
        }

        .cosmic-tab {
          background: transparent;
          border: none;
          color: var(--cs-text-dim);
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 1rem 0;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .cosmic-tab:hover {
          color: var(--cs-text-light);
        }

        .cosmic-tab.active {
          color: var(--cs-neon-blue);
        }

        /* Glowing Underline */
        .cosmic-tab.active::after {
          content: '';
          position: absolute;
          bottom: -3px; 
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--cs-neon-blue);
          box-shadow: 0 -2px 15px var(--cs-neon-blue);
          border-radius: 3px 3px 0 0;
        }

        /* 3-Column Grid */
        .cosmic-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .cosmic-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cosmic-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tall Immersive Card */
        .cosmic-card {
          background: var(--cs-card-bg);
          border: 1px solid var(--cs-card-border);
          border-radius: var(--cs-radius);
          height: 440px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .cosmic-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.6), 0 0 25px rgba(176, 38, 255, 0.15);
          border-color: rgba(176, 38, 255, 0.5);
        }

        /* Inner glowing abstract shape */
        .card-stellar-bg {
          position: absolute;
          top: -20%; left: -20%;
          width: 140%; height: 140%;
          background: radial-gradient(ellipse at bottom right, rgba(0, 240, 255, 0.08) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }

        /* Priority Highlight Label with subtle rotation */
        .priority-label-wrapper {
          position: absolute;
          top: 15px;
          right: -35px;
          z-index: 20;
          transform: rotate(4deg);
        }

        .priority-label {
          background: linear-gradient(90deg, var(--cs-neon-purple), var(--cs-neon-magenta));
          color: white;
          padding: 0.4rem 2rem;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          box-shadow: 0 4px 15px rgba(255, 0, 160, 0.4);
        }

        /* Information Layer */
        .card-info-layer {
          padding: 1.8rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .category-pill {
          background: rgba(176, 38, 255, 0.15);
          color: var(--cs-neon-blue);
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .distance-info {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--cs-text-dim);
        }

        .entity-title {
          font-family: var(--cs-font-display);
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: var(--cs-text-light);
          letter-spacing: 0.05em;
        }

        .divider-line {
          width: 40px;
          height: 2px;
          background: var(--cs-neon-blue);
          box-shadow: 0 0 10px var(--cs-neon-blue);
          margin-bottom: 1.25rem;
          transition: width 0.3s ease;
        }

        .cosmic-card:hover .divider-line {
          width: 80px;
        }

        .entity-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--cs-text-dim);
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
        }

        /* Card Footer */
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .explorer-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--cs-neon-purple);
        }

        .explorer-tag .dim {
          color: var(--cs-text-dim);
          font-size: 0.7rem;
        }

        .warp-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--cs-text-light);
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .warp-btn:hover {
          background: rgba(0, 240, 255, 0.1);
          border-color: var(--cs-neon-blue);
          color: var(--cs-neon-blue);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CosmicInspiredWebDirectoryDemoGemini;
