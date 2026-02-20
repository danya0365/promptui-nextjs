'use client';

import React, { useState } from 'react';

// Bold AI Startup Directory Interface - Gemini 3.1 Pro Implementation
// Pure CSS styling focusing on modern SaaS aesthetics, dark gradients, and electric sub-glow.

interface DirectoryItem {
  id: string;
  category: string;
  name: string;
  description: string;
  model: string;
  tags: string[];
  featured?: boolean;
}

const NAV_TABS = ['All Tools', 'Generative', 'Analytics', 'Automation'];

const ITEMS: DirectoryItem[] = [
  {
    id: 'ai-1',
    category: 'Generative',
    name: 'NexusFlow',
    description: 'Advanced contextual reasoning engine for seamless content synthesis and code generation.',
    model: 'Nexus-X',
    tags: ['Text', 'Code', 'API'],
    featured: true
  },
  {
    id: 'ai-2',
    category: 'Automation',
    name: 'Agentic Core',
    description: 'Autonomous workflows powering backend operations with minimal human intervention.',
    model: 'Core-v3',
    tags: ['Workflow', 'Ops']
  },
  {
    id: 'ai-3',
    category: 'Analytics',
    name: 'Visionary Insights',
    description: 'Deep data interpretation using multimodal parsing capabilities for strategic forecasting.',
    model: 'Vision-Pro',
    tags: ['Data', 'Vision'],
    featured: true
  },
  {
    id: 'ai-4',
    category: 'Generative',
    name: 'SynthAudio',
    description: 'High-fidelity voice cloning and generation with neural network emotional mapping.',
    model: 'Sonic-Alpha',
    tags: ['Audio', 'Voice']
  },
  {
    id: 'ai-5',
    category: 'Automation',
    name: 'BuildDeploy Ai',
    description: 'End-to-end continuous integration and deployment scaling driven by predictive models.',
    model: 'Deploy-0',
    tags: ['DevOps', 'Scaling']
  },
  {
    id: 'ai-6',
    category: 'Analytics',
    name: 'MarketMind',
    description: 'Real-time market sentiment analysis aggregating millions of concurrent social data points.',
    model: 'Market-2',
    tags: ['Finance', 'Sentiment'],
    featured: true
  }
];

export const BoldAIStartupDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Tools');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'All Tools' ? true : item.category === activeTab
  );

  return (
    <div className="startup-directory-container">
      {/* Dynamic Background Effect */}
      <div className="bg-gradient"></div>
      <div className="bg-glow"></div>

      <div className="directory-content">
        {/* Header Section */}
        <header className="directory-header">
          <div className="header-top">
            <h1 className="logo-text">System<span className="accent-color">AI</span></h1>
            <div className="counter-badge">
              <span className="pulsing-dot"></span>
              <span className="counter-number">{filteredItems.length}</span>
              <span className="counter-text">Live Models</span>
            </div>
          </div>
          
          <h2 className="hero-title">Next-Gen Intelligence<br/>Directory</h2>
          <p className="hero-subtitle">Discover and deploy advanced foundation models tailored for future-ready enterprises.</p>

          {/* Interactive Navigation */}
          <nav className="directory-nav">
            {NAV_TABS.map(tab => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="tab-indicator"></div>}
              </button>
            ))}
          </nav>
        </header>

        {/* 3-Column Responsive Grid */}
        <div className="directory-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`startup-card ${item.featured ? 'featured' : ''}`}>
              {/* Highlight ribbon for featured */}
              {item.featured && (
                <div className="featured-ribbon">
                  <span>Elite Tier</span>
                </div>
              )}
              
              <div className="card-inner">
                <div className="card-top">
                  <span className="category-tag">{item.category}</span>
                  <span className="model-badge">{item.model}</span>
                </div>
                
                <h3 className="card-title">{item.name}</h3>
                <p className="card-description">{item.description}</p>
                
                <div className="card-bottom">
                  <div className="tags-container">
                    {item.tags.map(tag => (
                      <span key={tag} className="item-tag">{tag}</span>
                    ))}
                  </div>
                  <button className="deploy-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Colors & Variables */
        :root {
          --ai-bg-dark: #070B14;
          --ai-bg-panel: #0D1322;
          --ai-bg-panel-hover: #131A2D;
          --ai-accent-electric: #00E5FF;
          --ai-accent-glow: rgba(0, 229, 255, 0.4);
          --ai-accent-blue: #2962FF;
          --ai-text-main: #FFFFFF;
          --ai-text-muted: #94A3B8;
          --ai-border: rgba(255, 255, 255, 0.06);
          --ai-border-hover: rgba(0, 229, 255, 0.3);
          --ai-radius: 12px;
          --ai-shadow-card: 0 8px 32px rgba(0, 0, 0, 0.4);
          --ai-shadow-glow: 0 0 20px var(--ai-accent-glow);
          --font-geometric: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Container & Backgrounds */
        .startup-directory-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--ai-bg-dark);
          color: var(--ai-text-main);
          font-family: var(--font-geometric);
          position: relative;
          overflow-x: hidden;
          padding: 3rem 1.5rem;
          box-sizing: border-box;
          z-index: 1;
        }

        .bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, var(--ai-bg-panel) 0%, var(--ai-bg-dark) 70%);
          z-index: -2;
        }

        .bg-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 60vh;
          background: radial-gradient(ellipse at center, rgba(0, 229, 255, 0.08) 0%, transparent 60%);
          filter: blur(80px);
          z-index: -1;
          pointer-events: none;
        }

        .directory-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        /* Header Styles */
        .directory-header {
          margin-bottom: 3.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .accent-color {
          color: var(--ai-accent-electric);
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
        }

        /* Animated Counter Badge */
        .counter-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid rgba(0, 229, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          backdrop-filter: blur(10px);
        }

        .pulsing-dot {
          width: 8px;
          height: 8px;
          background-color: var(--ai-accent-electric);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--ai-accent-electric);
          animation: pulse-dot 2s infinite ease-in-out;
        }

        @keyframes pulse-dot {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 12px var(--ai-accent-electric); }
          100% { transform: scale(0.8); opacity: 0.5; }
        }

        .counter-number {
          font-weight: 700;
          color: var(--ai-accent-electric);
        }

        .counter-text {
          font-size: 0.85rem;
          color: var(--ai-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
          background: linear-gradient(135deg, #FFF 0%, #94A3B8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--ai-text-muted);
          max-width: 600px;
          line-height: 1.6;
          margin: 0 0 3rem 0;
        }

        /* Navigation Tabs */
        .directory-nav {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 0.375rem;
          border-radius: 100px;
          border: 1px solid var(--ai-border);
          backdrop-filter: blur(20px);
        }

        .nav-tab {
          background: transparent;
          border: none;
          color: var(--ai-text-muted);
          padding: 0.75rem 1.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          font-family: inherit;
        }

        .nav-tab:hover {
          color: var(--ai-text-main);
        }

        .nav-tab.active {
          color: var(--ai-text-main);
          font-weight: 600;
        }

        .tab-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--ai-bg-panel-hover);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          z-index: -1;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        /* 3-Column Responsive Grid */
        .directory-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .directory-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .directory-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tall Modern Cards */
        .startup-card {
          position: relative;
          background: var(--ai-bg-panel);
          border: 1px solid var(--ai-border);
          border-radius: var(--ai-radius);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 320px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          box-shadow: var(--ai-shadow-card);
          cursor: pointer;
        }

        /* Highlight Ribbon for Featured */
        .featured-ribbon {
          position: absolute;
          top: 1.5rem;
          right: -2.5rem;
          background: var(--ai-accent-electric);
          color: #000;
          padding: 0.25rem 3rem;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transform: rotate(45deg);
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.5);
          z-index: 2;
        }

        .startup-card:hover {
          transform: translateY(-8px);
          background: var(--ai-bg-panel-hover);
          border-color: var(--ai-border-hover);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(0, 229, 255, 0.1);
        }

        /* Card Reflections and Glows */
        .startup-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%);
          pointer-events: none;
        }

        .startup-card.featured::after {
          content: '';
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: var(--ai-accent-electric);
          filter: blur(60px);
          opacity: 0.15;
          border-radius: 50%;
          transition: opacity 0.3s ease;
        }

        .startup-card.featured:hover::after {
          opacity: 0.3;
        }

        .card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 1;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .category-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--ai-text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .model-badge {
          font-size: 0.7rem;
          font-family: monospace;
          color: var(--ai-accent-electric);
          letter-spacing: 0.05em;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
          color: var(--ai-text-main);
          letter-spacing: -0.01em;
        }

        .card-description {
          font-size: 0.95rem;
          color: var(--ai-text-muted);
          line-height: 1.6;
          margin: 0;
          flex-grow: 1;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .item-tag {
          font-size: 0.75rem;
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
        }

        .deploy-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid var(--ai-border);
          color: var(--ai-text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .startup-card:hover .deploy-btn {
          background: var(--ai-accent-electric);
          border-color: var(--ai-accent-electric);
          color: #000;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
        }
      `}</style>
    </div>
  );
};
