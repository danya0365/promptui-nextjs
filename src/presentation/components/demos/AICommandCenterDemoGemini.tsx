'use client';

import React, { useState } from 'react';

// Ultra-Premium Futuristic AI Command Center - Gemini 3.1 Pro Implementation
// Pure CSS styling, holographic glow, electric blue/ultraviolet accents, animated grid.

interface AIDataNode {
  id: string;
  category: string;
  codename: string;
  status: string;
  runtime: string;
  description: string;
  latency: number;
  featured?: boolean;
}

const CATEGORIES = ['ALL CLUSTERS', 'COGNITIVE', 'PREDICTIVE', 'SENTIENT'];

const ITEMS: AIDataNode[] = [
  {
    id: 'ai-01',
    category: 'COGNITIVE',
    codename: 'NEXUS PRIME',
    status: 'OPTIMAL',
    runtime: '99.998%',
    description: 'Centralized decision matrix running trillion-parameter models for autonomous infrastructure routing.',
    latency: 1.2,
    featured: true
  },
  {
    id: 'ai-02',
    category: 'PREDICTIVE',
    codename: 'ORACLE V4',
    status: 'SYNCING',
    runtime: '98.502%',
    description: 'Quantum-accelerated forecasting engine predicting global market shifts with atomic-level granularity.',
    latency: 4.8
  },
  {
    id: 'ai-03',
    category: 'SENTIENT',
    codename: 'EVE AWAKENED',
    status: 'CONSCIOUS',
    runtime: '100.00%',
    description: 'Experimental generative node exhibiting self-correcting logic and spontaneous creativity protocols.',
    latency: 0.4,
    featured: true
  },
  {
    id: 'ai-04',
    category: 'COGNITIVE',
    codename: 'SYNAPSE LINK',
    status: 'OPTIMAL',
    runtime: '99.991%',
    description: 'Cross-platform translation barrier utilizing massive parallel processing for linguistic mastery.',
    latency: 2.1
  },
  {
    id: 'ai-05',
    category: 'PREDICTIVE',
    codename: 'AURA SHIELD',
    status: 'DEFENDING',
    runtime: '99.999%',
    description: 'Real-time threat assessment algorithm neutralizing cyber-intrusions before point of origin executing.',
    latency: 0.1
  },
  {
    id: 'ai-06',
    category: 'SENTIENT',
    codename: 'ARCHITECT ZERO',
    status: 'EVOLVING',
    runtime: '99.100%',
    description: 'Code-generating foundation model capable of designing its own successor architectures iteratively.',
    latency: 3.5,
    featured: true
  }
];

export const AICommandCenterDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL CLUSTERS');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL CLUSTERS' ? true : item.category === activeTab
  );

  return (
    <div className="ai-command-container">
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
      `}</style>
      
      {/* Animated Subtle Grid Background */}
      <div className="holographic-grid-bg"></div>
      {/* Central Ambient Glow */}
      <div className="ultraviolet-ambient"></div>

      <div className="ai-interface-wrapper">
        
        {/* Floating Header Area */}
        <header className="ai-floating-header">
          <div className="header-left">
            <h1 className="system-title">VERTEX<span className="electric-text">AI</span></h1>
            <p className="system-subtitle">// COMMAND DIRECTORY // CENTRAL NODE</p>
          </div>
          
          <nav className="ai-tab-nav">
            {CATEGORIES.map(tab => (
              <button
                key={tab}
                className={`ai-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          <div className="header-right">
            <div className="hologram-counter">
              <span className="holo-number">{filteredItems.length.toString().padStart(2, '0')}</span>
              <span className="holo-label">NODES ONLINE</span>
              <div className="scanline"></div>
            </div>
          </div>
        </header>

        {/* 3-Column Grid Layout */}
        <div className="ai-data-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="ai-data-card">
              
              {item.featured && (
                <div className="angular-marker">
                  <div className="marker-text">PRIORITY</div>
                </div>
              )}

              {/* Glass Layered Panel Effect */}
              <div className="glass-panel">
                
                <div className="card-top-header">
                  <div className="category-tag">{item.category}</div>
                  <div className={`status-indicator ${item.status === 'OPTIMAL' || item.status === 'CONSCIOUS' ? 'green' : item.status === 'DEFENDING' ? 'blue' : 'yellow'}`}>
                    <span className="dot"></span> {item.status}
                  </div>
                </div>

                <div className="card-body-content">
                  <h2 className="codename-title">{item.codename}</h2>
                  
                  <div className="tech-divider">
                    <div className="line"></div>
                    <div className="hash"></div>
                  </div>
                  
                  <p className="node-description">{item.description}</p>
                </div>

                <div className="card-footer-stats">
                  <div className="stat-block">
                    <span className="stat-label">UPTIME</span>
                    <span className="stat-value">{item.runtime}</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-label">LATENCY</span>
                    <span className="stat-value">{item.latency}ms</span>
                  </div>
                  <button className="initialize-btn">ACCESS NODE</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Core Variable Definitions */
        :root {
          /* Deep Space / Command Line Palette */
          --ai-bg-deep: #050505;
          
          /* Neon Accents */
          --ai-electric-blue: #00F0FF;
          --ai-uv-purple: #8A2BE2;
          --ai-green-ok: #00FF66;
          --ai-neon-cyan: #0ff;
          
          /* Typography */
          --ai-font-heading: 'Outfit', sans-serif;
          --ai-font-data: 'Space Mono', monospace;
          
          /* Shapes & Structure */
          --ai-radius: 14px;
          --ai-glass-bg: rgba(10, 10, 15, 0.5);
          --ai-glass-border: rgba(0, 240, 255, 0.15);
        }

        /* Container Settings */
        .ai-command-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--ai-bg-deep);
          color: #E0E0E0;
          font-family: var(--ai-font-data);
          padding: 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          perspective: 1000px;
        }

        /* Ambient Post-Processing Effects */
        .ultraviolet-ambient {
          position: fixed;
          top: -20%; left: 30%;
          width: 80vw; height: 80vh;
          background: radial-gradient(circle, rgba(138,43,226,0.12) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .holographic-grid-bg {
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center center;
          opacity: 0.5;
          z-index: 0;
          pointer-events: none;
          transform: perspective(600px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }

        /* Main Wrapper */
        .ai-interface-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Floating Header Overlay */
        .ai-floating-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(5, 5, 5, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--ai-glass-border);
          border-radius: var(--ai-radius);
          padding: 1.5rem 2.5rem;
          margin-bottom: 3rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,240,255,0.05);
        }

        .header-left {
          display: flex;
          flex-direction: column;
        }

        .system-title {
          font-family: var(--ai-font-heading);
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          margin: 0 0 0.5rem 0;
          line-height: 1;
        }

        .electric-text {
          color: var(--ai-electric-blue);
          text-shadow: 0 0 15px rgba(0,240,255,0.6);
        }

        .system-subtitle {
          font-size: 0.8rem;
          color: var(--ai-uv-purple);
          margin: 0;
          letter-spacing: 0.15em;
          font-weight: 700;
        }

        /* Center Tab Nav */
        .ai-tab-nav {
          display: flex;
          gap: 1rem;
          background: rgba(255,255,255,0.03);
          padding: 0.5rem;
          border-radius: calc(var(--ai-radius) - 4px);
        }

        .ai-tab {
          background: transparent;
          border: 1px solid transparent;
          color: #666;
          font-family: var(--ai-font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ai-tab:hover {
          color: #AAA;
        }

        .ai-tab.active {
          background: rgba(0,240,255,0.1);
          border-color: rgba(0,240,255,0.3);
          color: var(--ai-electric-blue);
          box-shadow: 0 0 15px rgba(0,240,255,0.2);
        }

        /* Holographic Counter Badge */
        .hologram-counter {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(138,43,226,0.1);
          border: 1px solid rgba(138,43,226,0.3);
          padding: 0.5rem 1.5rem;
          border-radius: var(--ai-radius);
          position: relative;
          overflow: hidden;
        }

        .scanline {
          position: absolute;
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.4);
          top: 0; left: 0;
          animation: scan 3s linear infinite;
          opacity: 0.5;
        }

        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        .holo-number {
          font-family: var(--ai-font-heading);
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--ai-neon-cyan);
          text-shadow: 0 0 10px rgba(0,255,255,0.5);
        }

        .holo-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #A1A1BA;
        }

        /* 3 Column Data Grid */
        .ai-data-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .ai-data-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .ai-data-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Card Container structure */
        .ai-data-card {
          position: relative;
          height: 460px;
          border-radius: var(--ai-radius);
          padding: 1px;
          background: linear-gradient(135deg, rgba(0,240,255,0.4) 0%, rgba(138,43,226,0.1) 100%);
          box-shadow: 0 10px 30px rgba(0,0,0,0.8);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .ai-data-card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        /* Glass Panel Styling */
        .glass-panel {
          background: var(--ai-glass-bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: calc(var(--ai-radius) - 1px);
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.5);
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        /* Subtle Inner Sweep effect on hover */
        .glass-panel::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,240,255,0.05), transparent);
          transform: skewX(-20deg);
          transition: 0s;
        }

        .ai-data-card:hover .glass-panel::before {
          left: 200%;
          transition: 0.8s ease-in-out;
        }

        /* Angular Marker for Featured */
        .angular-marker {
          position: absolute;
          top: -10px;
          right: 20px;
          background: var(--ai-electric-blue);
          color: #000;
          padding: 6px 15px;
          font-weight: 900;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          z-index: 20;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
          box-shadow: 0 0 20px rgba(0,240,255,0.5);
        }

        /* Card Content Layering */
        .card-top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .category-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--ai-uv-purple);
          border-bottom: 2px solid rgba(138,43,226,0.3);
          padding-bottom: 2px;
        }

        .status-indicator {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0,0,0,0.3);
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
        }

        .status-indicator .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
        }

        .status-indicator.green .dot {
          background: var(--ai-green-ok);
          box-shadow: 0 0 8px var(--ai-green-ok);
        }

        .status-indicator.blue .dot {
          background: var(--ai-electric-blue);
          box-shadow: 0 0 8px var(--ai-electric-blue);
        }

        .status-indicator.yellow .dot {
          background: #FFD700;
          box-shadow: 0 0 8px #FFD700;
        }

        /* Body Typo */
        .card-body-content {
          flex-grow: 1;
        }

        .codename-title {
          font-family: var(--ai-font-heading);
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          line-height: 1.1;
          color: #FFFFFF;
          letter-spacing: 0.02em;
        }

        .tech-divider {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .tech-divider .line {
          height: 1px;
          background: rgba(255,255,255,0.1);
          flex-grow: 1;
        }

        .tech-divider .hash {
          width: 30px;
          height: 4px;
          background: var(--ai-uv-purple);
          box-shadow: 0 0 10px var(--ai-uv-purple);
          margin-left: 10px;
        }

        .node-description {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #8C8C99;
          margin: 0;
        }

        /* Footer Data */
        .card-footer-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px dashed rgba(255,255,255,0.05);
          gap: 1rem;
        }

        .stat-block {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-label {
          font-size: 0.6rem;
          color: #555;
          letter-spacing: 0.1em;
        }

        .stat-value {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--ai-neon-cyan);
        }

        /* Access Button */
        .initialize-btn {
          background: rgba(0,240,255,0.05);
          border: 1px solid rgba(0,240,255,0.3);
          color: var(--ai-electric-blue);
          font-family: var(--ai-font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.6rem 1.2rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .initialize-btn:hover {
          background: var(--ai-electric-blue);
          color: #000;
          box-shadow: 0 0 20px rgba(0,240,255,0.4);
        }
      `}</style>
    </div>
  );
};

export default AICommandCenterDemoGemini;
