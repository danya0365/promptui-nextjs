'use client';

import React, { useState } from 'react';

// Dramatic High-Energy Tech Directory - Gemini 3.1 Pro Implementation
// Pure CSS styling, explosive lava orange/red gradients, high contrast charcoal background.

interface TechStartupNode {
  id: string;
  category: string;
  name: string;
  tagline: string;
  momentum: string;
  description: string;
  featured?: boolean;
}

const CATEGORIES = ['ALL INNOVATION', 'ROBOTICS', 'ENERGY', 'PROPULSION'];

const ITEMS: TechStartupNode[] = [
  {
    id: 'ignite-01',
    category: 'PROPULSION',
    name: 'AERO-IGNITE',
    tagline: 'MACH-5 PASSENGER TRAVEL',
    momentum: '+245%',
    description: 'Developing scramjet engines for commercial aviation. Breaking the thermal barrier to redefine global connectivity limits.',
    featured: true
  },
  {
    id: 'ignite-02',
    category: 'ENERGY',
    name: 'PLASMA CORE',
    tagline: 'COMPACT FUSION REACTORS',
    momentum: '+180%',
    description: 'Stabilizing sustained fusion reactions in modular, city-block-sized reactors. The dawn of limitless clean energy.'
  },
  {
    id: 'ignite-03',
    category: 'ROBOTICS',
    name: 'TITAN DYNAMICS',
    tagline: 'HEAVY INDUSTRIAL MECHS',
    momentum: '+310%',
    description: 'Exoskeleton and autonomous heavy-lifting robotics built for deep space mining and aggressive planetary terraforming.',
    featured: true
  },
  {
    id: 'ignite-04',
    category: 'ROBOTICS',
    name: 'SWARM INTEL',
    tagline: 'MICRO-DRONE COLONIES',
    momentum: '+125%',
    description: 'Distributed intelligence algorithms powering synchronized thousands of micro-drones for rapid disaster response.'
  },
  {
    id: 'ignite-05',
    category: 'ENERGY',
    name: 'HELIOS FORGE',
    tagline: 'ORBITAL SOLAR CAPTURE',
    momentum: '+88%',
    description: 'Deployment of massive orbital mirrors focusing concentrated solar energy down to terrestrial receiving stations.'
  },
  {
    id: 'ignite-06',
    category: 'PROPULSION',
    name: 'VOID DRIVE',
    tagline: 'INERTIAL MASS REDUCTION',
    momentum: '+195%',
    description: 'Experimental physics laboratory demonstrating the first macroscopic instance of localized spacetime curvature.',
    featured: true
  }
];

export const HighEnergyTechDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL INNOVATION');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL INNOVATION' ? true : item.category === activeTab
  );

  return (
    <div className="high-energy-container">
      {/* Heavy impact Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@500;700&family=Montserrat:wght@400;700;900&display=swap');
      `}</style>
      
      {/* Subtle particle glow texture layer */}
      <div className="particle-glow-overlay"></div>

      <div className="energy-wrapper">
        
        {/* Header Section */}
        <header className="energy-header">
          <div className="header-title-area">
            <h1 className="title-explosive">OVER<span className="gradient-text">DRIVE</span></h1>
            <p className="subtitle-intense">Unstoppable Innovation Directory</p>
          </div>
          
          <div className="header-stats">
            <div className="glowing-counter">
              <span className="counter-pulse"></span>
              <span className="counter-num">{filteredItems.length.toString().padStart(2, '0')}</span>
              <span className="counter-label">NODES ACTIVE</span>
            </div>
          </div>
        </header>

        {/* Tab Navigation with Underline Animation */}
        <nav className="energy-tab-nav">
          {CATEGORIES.map(tab => (
            <button
              key={tab}
              className={`energy-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* 3-Column Editorial Grid */}
        <div className="energy-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="energy-card">
              
              {/* Lava Gradient Background Highlight */}
              <div className="card-lava-bg"></div>

              {/* Angular Featured Tag */}
              {item.featured && (
                <div className="angular-tag">
                  EXPLOSIVE GROWTH
                </div>
              )}

              <div className="card-content">
                <div className="card-header">
                  <span className="category-marker">{item.category}</span>
                  <span className="momentum-score">{item.momentum}</span>
                </div>

                <div className="card-body">
                  <h2 className="company-name">{item.name}</h2>
                  <h3 className="company-tagline">{item.tagline}</h3>
                  <div className="strike-line"></div>
                  <p className="company-desc">{item.description}</p>
                </div>

                <div className="card-footer">
                  <button className="ignite-btn">
                    <span>INITIATE SEQUENCE</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          /* Color Palette */
          --he-bg-charcoal: #121214;
          --he-bg-card: #1C1C1F;
          --he-lava-primary: #FF3b00;
          --he-lava-secondary: #FF8C00;
          --he-lava-gradient: linear-gradient(135deg, var(--he-lava-primary) 0%, var(--he-lava-secondary) 100%);
          --he-text-light: #F0F0F0;
          --he-text-dim: #9999A1;
          
          /* Typography */
          --he-font-heavy: 'Teko', sans-serif;
          --he-font-body: 'Montserrat', sans-serif;
          
          /* Layout */
          --he-radius: 10px;
        }

        .high-energy-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--he-bg-charcoal);
          color: var(--he-text-light);
          font-family: var(--he-font-body);
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Ambient subtle particle glow texture */
        .particle-glow-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(circle at 15% 50%, rgba(255, 59, 0, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 30%, rgba(255, 140, 0, 0.05) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
          z-index: 0;
          pointer-events: none;
        }

        .energy-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header */
        .energy-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .title-explosive {
          font-family: var(--he-font-heavy);
          font-size: 5rem;
          font-weight: 700;
          line-height: 0.8;
          margin: 0 0 0.5rem 0;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .gradient-text {
          background: var(--he-lava-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 10px 30px rgba(255, 59, 0, 0.4);
        }

        .subtitle-intense {
          font-family: var(--he-font-body);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--he-text-dim);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin: 0;
        }

        /* Glowing Counter */
        .glowing-counter {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 59, 0, 0.1);
          border: 1px solid rgba(255, 59, 0, 0.3);
          padding: 0.8rem 1.5rem;
          border-radius: var(--he-radius);
          box-shadow: 0 0 20px rgba(255, 59, 0, 0.15);
          position: relative;
          overflow: hidden;
        }

        .counter-pulse {
          width: 8px;
          height: 8px;
          background-color: var(--he-lava-secondary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--he-lava-secondary);
          animation: pulseFast 1.5s infinite;
        }

        @keyframes pulseFast {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255, 140, 0, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 140, 0, 0); }
        }

        .counter-num {
          font-family: var(--he-font-heavy);
          font-size: 2.5rem;
          line-height: 1;
          color: var(--he-text-light);
        }

        .counter-label {
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: var(--he-lava-secondary);
        }

        /* Tab Navigation */
        .energy-tab-nav {
          display: flex;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        .energy-tab {
          background: transparent;
          border: none;
          color: var(--he-text-dim);
          font-family: var(--he-font-body);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 0.5rem 0;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .energy-tab:hover {
          color: var(--he-text-light);
        }

        .energy-tab.active {
          color: var(--he-lava-primary);
        }

        /* Underline Animation */
        .energy-tab::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0%; height: 3px;
          background: var(--he-lava-gradient);
          transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          border-radius: 3px;
        }

        .energy-tab.active::after {
          width: 100%;
          box-shadow: 0 2px 10px rgba(255, 59, 0, 0.5);
        }

        /* Grid Layout */
        .energy-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .energy-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .energy-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tall Dynamic Cards */
        .energy-card {
          position: relative;
          background-color: var(--he-bg-card);
          border-radius: var(--he-radius);
          min-height: 440px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255,255,255,0.03);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .energy-card:hover {
          transform: translateY(-8px);
          z-index: 10;
        }

        /* Lava Glow Background */
        .card-lava-bg {
          position: absolute;
          inset: 0;
          border-radius: var(--he-radius);
          background: var(--he-lava-gradient);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
          filter: blur(20px);
        }

        .energy-card:hover .card-lava-bg {
          opacity: 0.4;
        }

        /* Angular Tag */
        .angular-tag {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--he-lava-gradient);
          color: #FFF;
          font-family: var(--he-font-body);
          font-weight: 900;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          padding: 6px 16px;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
          box-shadow: 0 5px 15px rgba(255,59,0,0.5);
          z-index: 5;
        }

        /* Card Interactions & Spacing */
        .card-content {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--he-bg-card);
          border-radius: var(--he-radius);
          position: relative;
          overflow: hidden;
        }

        /* Top Border Accents */
        .card-content::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.05);
          transition: background 0.4s ease;
        }

        .energy-card:hover .card-content::before {
          background: var(--he-lava-gradient);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .category-marker {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--he-text-dim);
        }

        .momentum-score {
          font-family: var(--he-font-heavy);
          font-size: 1.5rem;
          color: var(--he-lava-secondary);
          line-height: 1;
        }

        .card-body {
          flex-grow: 1;
        }

        .company-name {
          font-family: var(--he-font-heavy);
          font-size: 2.8rem;
          line-height: 0.9;
          margin: 0 0 0.2rem 0;
          text-transform: uppercase;
          color: #FFF;
        }

        .company-tagline {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--he-lava-primary);
          letter-spacing: 0.1em;
          margin: 0;
          text-transform: uppercase;
        }

        .strike-line {
          width: 50px;
          height: 2px;
          background-color: rgba(255,255,255,0.1);
          margin: 1.5rem 0;
          transition: width 0.4s ease, background-color 0.4s ease;
        }

        .energy-card:hover .strike-line {
          width: 80px;
          background-color: var(--he-lava-primary);
        }

        .company-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--he-text-dim);
          font-weight: 500;
        }

        /* Footer Button */
        .card-footer {
          margin-top: 1.5rem;
        }

        .ignite-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          color: var(--he-text-light);
          border-radius: 6px;
          padding: 1rem 1.5rem;
          font-family: var(--he-font-body);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ignite-btn svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .ignite-btn:hover {
          background: var(--he-lava-gradient);
          border-color: transparent;
          color: #FFF;
          box-shadow: 0 10px 20px rgba(255, 59, 0, 0.3);
        }

        .ignite-btn:hover svg {
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};

export default HighEnergyTechDirectoryDemoGemini;
