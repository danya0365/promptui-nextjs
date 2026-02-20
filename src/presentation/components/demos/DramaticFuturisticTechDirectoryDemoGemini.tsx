'use client';

import React, { useState } from 'react';

// Dramatic Futuristic Tech Directory - Gemini 3.1 Pro Implementation
// Pure CSS styling focusing on high-energy, fiery gradients, and intense structural hierarchy.

interface TechStartupItem {
  id: string;
  category: string;
  name: string;
  description: string;
  launchDate: string;
  fundingStage: string;
  featured?: boolean;
}

const CATEGORIES = ['ALL SYSTEMS', 'AI KERNEL', 'QUANTUM SEC', 'NEURAL NET'];

const ITEMS: TechStartupItem[] = [
  {
    id: 'tech-01',
    category: 'AI KERNEL',
    name: 'IGNIS CORE',
    description: 'Autonomous predictive engine functioning on thermodynamic algorithms. Designed for limitless scalability and threat isolation.',
    launchDate: '2025.Q3',
    fundingStage: 'SERIES C',
    featured: true
  },
  {
    id: 'tech-02',
    category: 'QUANTUM SEC',
    name: 'AEGIS LAYER',
    description: 'Impenetrable cryptographic shielding utilizing synchronized photon entanglement principles across global nodes.',
    launchDate: '2024.Q1',
    fundingStage: 'IPO PREP'
  },
  {
    id: 'tech-03',
    category: 'NEURAL NET',
    name: 'SYNAPSE OVERDRIVE',
    description: 'Direct brain-computer interfacing optimized for extreme-bandwidth sensory data transcription and latency-free motor response.',
    launchDate: '2026.Q2',
    fundingStage: 'SEED DEEP',
    featured: true
  },
  {
    id: 'tech-04',
    category: 'AI KERNEL',
    name: 'OMNI FORGE',
    description: 'Generative infrastructure assembler. Code structures evolve organically to match unprecedented load demands in real-time.',
    launchDate: '2025.Q1',
    fundingStage: 'SERIES B'
  },
  {
    id: 'tech-05',
    category: 'QUANTUM SEC',
    name: 'VOID VAULT',
    description: 'Data sequestration protocol relying on localized reality distortion to guarantee absolute immutability of classified records.',
    launchDate: '2023.Q4',
    fundingStage: 'ACQUIRED'
  },
  {
    id: 'tech-06',
    category: 'NEURAL NET',
    name: 'CORTEX PRIME',
    description: 'Distributed cognitive architecture allocating spare human visual processing cycles into a decentralized computing cluster.',
    launchDate: '2026.Q4',
    fundingStage: 'SERIES A',
    featured: true
  }
];

export const DramaticFuturisticTechDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL SYSTEMS');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL SYSTEMS' ? true : item.category === activeTab
  );

  return (
    <div className="futuristic-tech-container">
      {/* Background visual elements */}
      <div className="bg-glow"></div>
      <div className="grid-overlay"></div>

      <div className="directory-content">
        
        {/* Header */}
        <header className="tech-header">
          <div className="header-title-area">
            <h1 className="main-title">APEX<span className="title-highlight">NEXUS</span></h1>
            <p className="subtitle">High-Velocity Technological Index</p>
          </div>

          <div className="top-actions">
            <div className="floating-counter">
              <span className="counter-pulse"></span>
              <span className="counter-text">{filteredItems.length} ACTIVE NODES</span>
            </div>
            <button className="initiate-btn">INITIATE SCAN</button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="tech-nav">
          {CATEGORIES.map(tab => (
            <button
              key={tab}
              className={`tech-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* 3-Column Grid */}
        <div className="tech-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="tech-card">
              
              <div className="fiery-gradient-border"></div>
              
              <div className="card-inner">
                {item.featured && (
                  <div className="featured-tag">
                    <span className="tag-icon">⚠️</span> CRITICAL PRIORITY
                  </div>
                )}
                
                <div className="card-header">
                  <span className="category-label">{item.category}</span>
                  <span className="launch-date">{item.launchDate}</span>
                </div>
                
                <h3 className="system-name">{item.name}</h3>
                
                <div className="separator"></div>
                
                <p className="system-description">{item.description}</p>
                
                <div className="card-footer">
                  <div className="funding-stage">
                    <span className="label">STAGE:</span> {item.fundingStage}
                  </div>
                  <button className="access-link">
                    ACCESS <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Setup & Variables */
        :root {
          --ft-bg-deep: #0B0A0F;
          --ft-bg-card: #15131A;
          --ft-bg-card-hover: #1A1721;
          
          /* Fiery Gradient Colors */
          --ft-fire-1: #FF2A00; /* Intense Red */
          --ft-fire-2: #FF7B00; /* Bright Orange */
          --ft-fire-gradient: linear-gradient(135deg, var(--ft-fire-1), var(--ft-fire-2));
          
          --ft-text-main: #FFFFFF;
          --ft-text-dim: #9FA1B4;
          --ft-text-dark: #A5A5A5;
          
          --ft-border: rgba(255, 255, 255, 0.08);
          --ft-border-glow: rgba(255, 60, 0, 0.3);
          
          --ft-radius: 14px;
          --ft-font-main: 'JetBrains Mono', 'Space Mono', monospace;
          --ft-font-heading: 'Syncopate', 'Orbitron', sans-serif;
        }

        .futuristic-tech-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--ft-bg-deep);
          color: var(--ft-text-main);
          font-family: var(--ft-font-main);
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Ambient Effects */
        .bg-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 80vw;
          height: 60vh;
          background: radial-gradient(ellipse at center, rgba(255, 60, 0, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        .grid-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .directory-content {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header Area */
        .tech-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .header-title-area {
          display: flex;
          flex-direction: column;
        }

        .main-title {
          font-family: var(--ft-font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin: 0 0 0.5rem 0;
          line-height: 1;
        }

        .title-highlight {
          background: var(--ft-fire-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          color: var(--ft-text-dim);
          font-size: 1rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* Floating Badge */
        .floating-counter {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 60, 0, 0.1);
          border: 1px solid var(--ft-border-glow);
          padding: 0.6rem 1.25rem;
          border-radius: 100px;
          box-shadow: 0 0 20px rgba(255, 60, 0, 0.15);
        }

        .counter-pulse {
          width: 8px;
          height: 8px;
          background-color: var(--ft-fire-2);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--ft-fire-2);
          animation: criticalPulse 1.5s infinite;
        }

        @keyframes criticalPulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 123, 0, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 123, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 123, 0, 0); }
        }

        .counter-text {
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--ft-text-main);
        }

        /* Scan Button */
        .initiate-btn {
          background: transparent;
          color: var(--ft-fire-2);
          font-family: var(--ft-font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 0.8rem 1.5rem;
          border: 1px solid var(--ft-fire-2);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .initiate-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: var(--ft-fire-gradient);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .initiate-btn:hover {
          color: #FFF;
          box-shadow: 0 0 20px rgba(255, 60, 0, 0.4);
        }

        .initiate-btn:hover::before {
          left: 0;
        }

        /* Nav Tabs */
        .tech-nav {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--ft-border);
          padding-bottom: 1px;
        }

        .tech-tab {
          background: transparent;
          border: none;
          color: var(--ft-text-dark);
          font-family: var(--ft-font-main);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 1rem 1.5rem;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .tech-tab:hover {
          color: var(--ft-text-main);
        }

        .tech-tab.active {
          color: var(--ft-fire-2);
        }

        .tech-tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px; /* Cover border */
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--ft-fire-gradient);
          box-shadow: 0 -2px 10px rgba(255, 60, 0, 0.5);
        }

        /* Card Grid Container */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Card Component */
        .tech-card {
          position: relative;
          border-radius: var(--ft-radius);
          padding: 1px; /* Space for the gradient border */
          background: var(--ft-bg-card);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: crosshair; /* Tech vibe */
        }

        .fiery-gradient-border {
          position: absolute;
          inset: 0;
          border-radius: var(--ft-radius);
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
          z-index: 0;
          transition: background 0.4s ease;
        }

        .tech-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.7), 0 0 20px rgba(255, 60, 0, 0.1);
        }

        .tech-card:hover .fiery-gradient-border {
          background: var(--ft-fire-gradient);
        }

        .card-inner {
          position: relative;
          background: var(--ft-bg-card);
          border-radius: calc(var(--ft-radius) - 1px);
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .tech-card:hover .card-inner {
          background: var(--ft-bg-card-hover);
        }

        /* Featured Tag */
        .featured-tag {
          position: absolute;
          top: -12px;
          left: 24px;
          background: var(--ft-bg-deep);
          color: var(--ft-fire-2);
          border: 1px solid var(--ft-fire-1);
          padding: 0.3rem 0.8rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(255, 60, 0, 0.3);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .tag-icon {
          font-size: 0.9rem;
        }

        /* Card Content */
        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        .category-label {
          color: var(--ft-text-dim);
          border: 1px solid var(--ft-border);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .launch-date {
          color: var(--ft-text-dark);
        }

        .system-name {
          font-family: var(--ft-font-heading);
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          background: linear-gradient(to right, #FFF, #AAA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .separator {
          width: 2rem;
          height: 2px;
          background: var(--ft-fire-gradient);
          margin-bottom: 1.5rem;
        }

        .system-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--ft-text-dim);
          margin: 0 0 2rem 0;
          flex-grow: 1;
        }

        /* Card Footer */
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px dashed rgba(255,255,255,0.1);
        }

        .funding-stage {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--ft-text-main);
        }

        .funding-stage .label {
          color: var(--ft-text-dark);
          font-weight: 400;
        }

        .access-link {
          background: transparent;
          border: none;
          color: var(--ft-text-main);
          font-family: var(--ft-font-main);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s ease;
        }

        .tech-card:hover .access-link {
          color: var(--ft-fire-2);
        }

        .tech-card:hover .arrow {
          transform: translateX(4px);
        }

        .arrow {
          display: inline-block;
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default DramaticFuturisticTechDirectoryDemoGemini;
