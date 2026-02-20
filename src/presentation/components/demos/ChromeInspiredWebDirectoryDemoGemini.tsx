'use client';

import React, { useState } from 'react';

// Chrome-Inspired Modern Web Interface - Gemini 3.1 Pro Implementation
// Pure css styling focusing on metallic accents, reflections, and premium futuristic aesthetics.

interface TechProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  spec1: string;
  spec2: string;
  featured?: boolean;
}

const CATEGORIES = ['ALL DEVICES', 'AUDIO', 'COMPUTING', 'VISION'];

const ITEMS: TechProduct[] = [
  {
    id: 'chr-01',
    category: 'AUDIO',
    name: 'AURAL SPHERE 9',
    description: 'Spatial acoustic resonators with adaptive noise cancellation algorithms. The zenith of personal audio fidelity.',
    spec1: 'TUNGSTEN DRIVERS',
    spec2: '48H PLAYBACK',
    featured: true
  },
  {
    id: 'chr-02',
    category: 'COMPUTING',
    name: 'SLATE PRO MAX',
    description: 'Ultra-thin computational slab carved from a single block of aerospace-grade titanium matrix.',
    spec1: 'M5 ARCHITECTURE',
    spec2: '32TB NVME'
  },
  {
    id: 'chr-03',
    category: 'VISION',
    name: 'OCULAR LENS X',
    description: 'Mixed reality optics featuring seamless integration with organic visual pathways and zero-latency rendering.',
    spec1: '16K PER EYE',
    spec2: '120 DEGREE FOV',
    featured: true
  },
  {
    id: 'chr-04',
    category: 'AUDIO',
    name: 'SONIC TOWER V',
    description: 'Omnidirectional high-fidelity room acoustic system. Projects sound with surgical precision.',
    spec1: 'BERYLLIUM TWEETER',
    spec2: '2000W OUTPUT'
  },
  {
    id: 'chr-05',
    category: 'COMPUTING',
    name: 'NEXUS TERMINAL',
    description: 'The ultimate interface hub. Liquid-cooled and designed for extreme multithreaded workflows.',
    spec1: 'PHASE COOLING',
    spec2: '128 CORE ARRAY'
  },
  {
    id: 'chr-06',
    category: 'VISION',
    name: 'ECLIPSE DRONE',
    description: 'Autonomous cinematographic capture unit with reflective stealth coating and stabilized tracking.',
    spec1: '8K 120FPS RAW',
    spec2: 'LASER LIDAR',
    featured: true
  }
];

export const ChromeInspiredWebDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL DEVICES');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL DEVICES' ? true : item.category === activeTab
  );

  return (
    <div className="chrome-interface-container">
      {/* Dynamic Background Effects */}
      <div className="ambient-spotlight"></div>
      
      <div className="chrome-layout-grid">
        
        {/* Header Section */}
        <header className="chrome-header">
          <div className="logo-group">
            <span className="logo-symbol">⟁</span>
            <h1 className="brand-name">CHROME<span className="light">WORKS</span></h1>
          </div>
          
          <div className="badge-wrapper">
            <div className="metallic-badge">
              <span className="badge-value">{filteredItems.length.toString().padStart(2, '0')}</span>
              <span className="badge-text">PRODUCTS</span>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="chrome-nav-bar">
          {CATEGORIES.map(tab => (
            <button
              key={tab}
              className={`chrome-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <div className="nav-accent-line"></div>
        </nav>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="chrome-card">
              
              {/* Featured Tag */}
              {item.featured && (
                <div className="premium-tag">
                  <span className="tag-flare"></span>
                  SIGNATURE
                </div>
              )}

              {/* Card Visual Top */}
              <div className="card-visual-area">
                <div className="chrome-reflection"></div>
                <div className="category-marker">{item.category}</div>
                <div className="center-orb"></div>
              </div>
              
              {/* Card Content Data */}
              <div className="card-data-area">
                <h2 className="product-title">{item.name}</h2>
                <p className="product-desc">{item.description}</p>
                
                <div className="spec-grid">
                  <div className="spec-item">
                    <span className="spec-label">CORE SPEC 1</span>
                    <span className="spec-value">{item.spec1}</span>
                  </div>
                  <div className="spec-divider"></div>
                  <div className="spec-item">
                    <span className="spec-label">CORE SPEC 2</span>
                    <span className="spec-value">{item.spec2}</span>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Core Variable Definitions */
        :root {
          /* Backgrounds */
          --ch-bg-dark: #0f1012;
          --ch-bg-card: #18191c;
          
          /* Gradients - The essence of the chrome look */
          --ch-chrome-gradient: linear-gradient(135deg, 
            #4f5359 0%, 
            #b1b5bd 25%, 
            #e4e8f0 50%, 
            #b1b5bd 75%, 
            #4f5359 100%
          );
          
          --ch-silver-gradient: linear-gradient(to bottom, 
            #eaeaed 0%, 
            #b0b4ba 40%, 
            #8a8e93 60%, 
            #c8ccd4 100%
          );
          
          --ch-dark-metal: linear-gradient(145deg, #2a2d32, #111214);
          
          /* Texts & Accents */
          --ch-text-primary: #f0f2f5;
          --ch-text-secondary: #8c9096;
          --ch-accent-light: #e6e9ef;
          
          /* Formats */
          --ch-radius: 10px;
          --ch-font-sans: 'Inter', -apple-system, sans-serif;
          --ch-font-display: 'Monument Extended', 'Syncopate', sans-serif;
        }

        /* Base Layout */
        .chrome-interface-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--ch-bg-dark);
          color: var(--ch-text-primary);
          font-family: var(--ch-font-sans);
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Ambient Lighting */
        .ambient-spotlight {
          position: absolute;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 80vw;
          height: 80vh;
          background: radial-gradient(ellipse at center, rgba(230,233,239,0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .chrome-layout-grid {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header Layout */
        .chrome-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3.5rem;
        }

        .logo-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-symbol {
          font-size: 2rem;
          background: var(--ch-chrome-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.2));
        }

        .brand-name {
          font-family: var(--ch-font-display);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          margin: 0;
          text-transform: uppercase;
        }

        .brand-name .light {
          font-weight: 300;
          color: var(--ch-text-secondary);
        }

        /* Metallic Counter Badge */
        .badge-wrapper {
          padding: 2px;
          background: var(--ch-chrome-gradient);
          border-radius: calc(var(--ch-radius) * 2);
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        .metallic-badge {
          background: var(--ch-dark-metal);
          padding: 0.5rem 1.25rem;
          border-radius: calc(var(--ch-radius) * 2 - 2px);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle reflection moving across badge */
        .metallic-badge::after {
          content: '';
          position: absolute;
          top: 0; left: -150%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: skewX(-20deg);
          animation: shine 4s infinite 2s;
        }

        @keyframes shine {
          0% { left: -150%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        .badge-value {
          font-weight: 800;
          font-size: 1.5rem;
          background: var(--ch-silver-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badge-text {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--ch-text-secondary);
        }

        /* Navigation */
        .chrome-nav-bar {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .nav-accent-line {
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,0.15) 20%, 
            rgba(255,255,255,0.15) 80%, 
            rgba(255,255,255,0) 100%
          );
        }

        .chrome-tab {
          background: transparent;
          border: none;
          color: #5d6168;
          font-family: var(--ch-font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 1rem 0;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .chrome-tab:hover {
          color: var(--ch-text-primary);
        }

        .chrome-tab.active {
          color: var(--ch-accent-light);
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        /* Grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Chrome Card Structure */
        .chrome-card {
          background: var(--ch-dark-metal);
          border-radius: var(--ch-radius);
          padding: 1px; /* The border trick */
          position: relative;
          display: flex;
          flex-direction: column;
          height: 480px;
          box-shadow: 
            0 15px 35px rgba(0,0,0,0.6),
            inset 0 1px 1px rgba(255,255,255,0.1);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Metallic Border using wrapper padding */
        .chrome-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--ch-radius);
          padding: 1px;
          background: var(--ch-chrome-gradient);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .chrome-card:hover {
          transform: translateY(-8px);
        }

        .chrome-card:hover::before {
          opacity: 1;
        }

        /* Premium Featured Tag */
        .premium-tag {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--ch-silver-gradient);
          color: #000;
          padding: 0.4rem 1rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          z-index: 10;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        /* Visual Header Area */
        .card-visual-area {
          height: 45%;
          background: linear-gradient(to bottom, #1d1e22, #111215);
          border-radius: calc(var(--ch-radius) - 1px) calc(var(--ch-radius) - 1px) 0 0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Shiny swoosh reflection */
        .chrome-reflection {
          position: absolute;
          top: -50%; right: -50%;
          bottom: -50%; left: -50%;
          background: linear-gradient(to bottom,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.03) 40%,
            rgba(255,255,255,0.1) 50%,
            rgba(255,255,255,0) 51%,
            rgba(255,255,255,0) 100%
          );
          transform: rotate(30deg);
        }

        /* A minimal visual placeholder */
        .center-orb {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: var(--ch-chrome-gradient);
          box-shadow: 
            0 0 20px rgba(255,255,255,0.1),
            inset 5px 5px 10px rgba(255,255,255,0.5),
            inset -5px -5px 15px rgba(0,0,0,0.8);
          position: relative;
          z-index: 2;
        }

        .category-marker {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--ch-text-secondary);
          z-index: 2;
        }

        /* Content Data Area */
        .card-data-area {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          background: var(--ch-bg-card);
          border-radius: 0 0 calc(var(--ch-radius) - 1px) calc(var(--ch-radius) - 1px);
        }

        .product-title {
          font-family: var(--ch-font-sans);
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0 0 0.8rem 0;
          background: var(--ch-silver-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .product-desc {
          color: #9297a0;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
        }

        /* Specs Grid */
        .spec-grid {
          display: flex;
          background: #111215;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
        }

        .spec-item {
          flex: 1;
          padding: 0.8rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .spec-divider {
          width: 1px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.1), rgba(255,255,255,0.02));
        }

        .spec-label {
          font-size: 0.6rem;
          color: var(--ch-text-secondary);
          letter-spacing: 0.1em;
        }

        .spec-value {
          font-size: 0.8rem;
          color: var(--ch-text-primary);
          font-weight: 600;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

export default ChromeInspiredWebDirectoryDemoGemini;
