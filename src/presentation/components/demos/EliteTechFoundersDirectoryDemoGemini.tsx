'use client';

import React, { useState } from 'react';

// Bold Elite Tech Founders Directory - Gemini 3.1 Pro Implementation
// Pure CSS styling, hard-edge brutalist luxury, matte black & acid green.

interface FounderProfile {
  id: string;
  industry: string;
  name: string;
  company: string;
  valuation: string;
  description: string;
  featured?: boolean;
}

const CATEGORIES = ['ALL SYNDICATES', 'FINTECH', 'BIO-HACKING', 'DEEP TECH'];

const ITEMS: FounderProfile[] = [
  {
    id: 'fnd-01',
    industry: 'DEEP TECH',
    name: 'ELARA VANCE',
    company: 'QUANTUM CORE',
    valuation: '$12.4B',
    description: 'Pioneered the first scalable room-temperature topological quantum processor. Rumored to hold classified defense contracts globally.',
    featured: true
  },
  {
    id: 'fnd-02',
    industry: 'FINTECH',
    name: 'JULIAN STARK',
    company: 'AEGIS LEDGER',
    valuation: '$8.9B',
    description: 'Architect behind the decentralized shadow banking protocol currently challenging sovereign fiat reserves.'
  },
  {
    id: 'fnd-03',
    industry: 'BIO-HACKING',
    name: 'DR. LEO CHEN',
    company: 'SYNTHESIS LABS',
    valuation: '$18.2B',
    description: 'Owner of the patent for targeted cellular regeneration. His underground longevity clinics cater exclusively to the top 0.1%.',
    featured: true
  },
  {
    id: 'fnd-04',
    industry: 'DEEP TECH',
    name: 'MARCUS WOLF',
    company: 'VOID PROPULSION',
    valuation: '$4.1B',
    description: 'Leading the privatization of deep space extraction. Known for aggressive hostile takeovers of legacy aerospace firms.'
  },
  {
    id: 'fnd-05',
    industry: 'BIO-HACKING',
    name: 'SOPHIA NYX',
    company: 'NEURAL LINKAGE',
    valuation: '$9.5B',
    description: 'First to successfully commercialize direct brain-to-cloud interfacing for accelerated cognitive downloading.'
  },
  {
    id: 'fnd-06',
    industry: 'FINTECH',
    name: 'THE ARCHITECT',
    company: 'UNDEFINED ALGO',
    valuation: 'UNKNOWN',
    description: 'Anonymous creator of the high-frequency trading algorithm that caused the 2024 flash crash. Currently sought by Interpol.',
    featured: true
  }
];

export const EliteTechFoundersDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL SYNDICATES');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL SYNDICATES' ? true : item.industry === activeTab
  );

  return (
    <div className="elite-directory-container">
      {/* Import strong Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;800&family=Syncopate:wght@700&display=swap');
      `}</style>

      <div className="elite-layout-wrapper">
        
        {/* Solid Header Area */}
        <header className="elite-header">
          
          <div className="mass-title-group">
            <h1 className="brutal-title">APEX<span className="acid-text">_SYNDICATE</span></h1>
            <p className="brutal-subtitle">Global Underground Tech Power Network</p>
          </div>
          
          <div className="elite-counter-badge">
            <div className="massive-number">{filteredItems.length.toString().padStart(2, '0')}</div>
            <div className="badge-meta">
              <span>ELITE</span>
              <span>OVERLORDS</span>
            </div>
          </div>
          
        </header>

        {/* Solid Tab Navigation */}
        <nav className="elite-tab-nav">
          {CATEGORIES.map(tab => (
            <button
              key={tab}
              className={`elite-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <div className="nav-end-fill"></div>
        </nav>

        {/* Grid Layout */}
        <div className="elite-grid-container">
          {filteredItems.map(item => (
            <article key={item.id} className="elite-spotlight-card">
              
              {/* Diagonal Highlight Ribbon */}
              {item.featured && (
                <div className="acid-ribbon-container">
                  <div className="acid-ribbon">CLASS ALPHA</div>
                </div>
              )}

              <div className="card-top-bar">
                <span className="industry-label">[{item.industry}]</span>
                <span className="valuation-tag">{item.valuation}</span>
              </div>

              <div className="card-main-content">
                <h2 className="profile-name">{item.name}</h2>
                <h3 className="company-name">{item.company}</h3>
                
                <div className="hard-line"></div>
                
                <p className="profile-desc">{item.description}</p>
              </div>

              <div className="card-footer-action">
                <button className="dossier-btn">OPEN DOSSIER // <span className="arrow">↗</span></button>
              </div>

            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* Elite Brutalist Variables */
        :root {
          /* Colors */
          --el-bg: #0C0C0C;
          --el-card-bg: #141414;
          --el-acid-green: #DFFF00; /* Extremely aggressive neon/acid green */
          --el-text-white: #FFFFFF;
          --el-text-gray: #8A8A8A;
          --el-border-dark: #2A2A2A;
          
          /* Typography */
          --el-font-heavy: 'Archivo Black', sans-serif;
          --el-font-tech: 'Syncopate', sans-serif;
          --el-font-body: 'Inter', sans-serif;
        }

        /* Base Container Settings */
        .elite-directory-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--el-bg);
          color: var(--el-text-white);
          font-family: var(--el-font-body);
          padding: 3rem 2rem;
          position: relative;
          box-sizing: border-box;
          /* No rounded corners, sharp presentation */
        }

        .elite-layout-wrapper {
          max-width: 1360px;
          margin: 0 auto;
        }

        /* Solid Header */
        .elite-header {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          margin-bottom: 2rem;
          background-color: var(--el-card-bg);
          border: 1px solid var(--el-border-dark);
        }

        .mass-title-group {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--el-border-dark);
          flex-grow: 1;
        }

        .brutal-title {
          font-family: var(--el-font-heavy);
          font-size: 4.5rem;
          line-height: 0.9;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: -0.03em;
        }

        .acid-text {
          color: var(--el-acid-green);
        }

        .brutal-subtitle {
          font-family: var(--el-font-tech);
          font-size: 0.85rem;
          color: var(--el-text-gray);
          margin: 0;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Massive Counter Badge */
        .elite-counter-badge {
          display: flex;
          align-items: center;
          background-color: var(--el-bg);
          padding: 0 4rem;
          border-left: 1px solid var(--el-border-dark);
        }

        .massive-number {
          font-family: var(--el-font-heavy);
          font-size: 6rem;
          color: var(--el-text-white);
          line-height: 1;
        }

        .badge-meta {
          display: flex;
          flex-direction: column;
          margin-left: 1.5rem;
          font-family: var(--el-font-tech);
          font-size: 0.7rem;
          color: var(--el-acid-green);
          letter-spacing: 0.2em;
          font-weight: 700;
        }

        /* Solid Tab Navigation */
        .elite-tab-nav {
          display: flex;
          border-bottom: 1px solid var(--el-border-dark);
          margin-bottom: 4rem;
        }

        .elite-tab-btn {
          background: transparent;
          border: none;
          border-right: 1px solid var(--el-border-dark);
          border-top: 1px solid transparent;
          color: var(--el-text-gray);
          font-family: var(--el-font-heavy);
          font-size: 1.1rem;
          padding: 1.5rem 3rem;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .elite-tab-btn:hover {
          color: var(--el-text-white);
          background-color: rgba(255,255,255, 0.02);
        }

        .elite-tab-btn.active {
          color: var(--el-bg);
          background-color: var(--el-acid-green);
          border-top: 1px solid var(--el-acid-green);
        }

        .nav-end-fill {
          flex-grow: 1;
        }

        /* Grid */
        .elite-grid-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .elite-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .elite-grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tall Spotlight Card */
        .elite-spotlight-card {
          background-color: var(--el-card-bg);
          border: 1px solid var(--el-border-dark);
          min-height: 480px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 10px 10px 0px rgba(0,0,0,0.5); /* Hard depth shadow */
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          overflow: hidden; /* To contain ribbon */
        }

        .elite-spotlight-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 14px 14px 0px var(--el-acid-green);
          border-color: var(--el-text-gray);
        }

        /* Diagonal Ribbon */
        .acid-ribbon-container {
          position: absolute;
          top: 0; right: 0;
          width: 120px; height: 120px;
          overflow: hidden;
          z-index: 10;
        }

        .acid-ribbon {
          background-color: var(--el-acid-green);
          color: var(--el-bg);
          font-family: var(--el-font-heavy);
          font-size: 0.65rem;
          text-align: center;
          padding: 0.5rem;
          width: 170px;
          transform: rotate(45deg) translateY(-20px) translateX(35px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.1em;
        }

        /* Card Elements */
        .card-top-bar {
          display: flex;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--el-border-dark);
          align-items: center;
        }

        .industry-label {
          font-family: var(--el-font-tech);
          font-size: 0.65rem;
          color: var(--el-text-gray);
          letter-spacing: 0.2em;
        }

        .valuation-tag {
          font-family: var(--el-font-heavy);
          font-size: 1rem;
          color: var(--el-text-white);
        }

        .card-main-content {
          padding: 2.5rem 2rem;
          flex-grow: 1;
        }

        .profile-name {
          font-family: var(--el-font-heavy);
          font-size: 2.5rem;
          line-height: 1;
          margin: 0 0 0.5rem 0;
          color: var(--el-text-white);
          word-break: break-word;
        }

        .elite-spotlight-card:hover .profile-name {
          color: var(--el-acid-green);
        }

        .company-name {
          font-family: var(--el-font-tech);
          font-size: 0.8rem;
          color: var(--el-text-gray);
          margin: 0;
          letter-spacing: 0.15em;
        }

        .hard-line {
          height: 4px;
          width: 40px;
          background-color: var(--el-acid-green);
          margin: 2rem 0;
        }

        .profile-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--el-text-gray);
          margin: 0;
          font-weight: 400;
        }

        .card-footer-action {
          padding: 1.5rem 2rem;
          border-top: 1px solid var(--el-border-dark);
          background-color: var(--el-bg);
        }

        .dossier-btn {
          background: transparent;
          border: none;
          color: var(--el-text-white);
          font-family: var(--el-font-tech);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          font-weight: 700;
          transition: color 0.2s ease;
        }

        .dossier-btn .arrow {
          color: var(--el-acid-green);
          font-size: 1.2rem;
          margin-left: 0.5rem;
          font-weight: 400;
        }

        .elite-spotlight-card:hover .dossier-btn {
          color: var(--el-acid-green);
        }
      `}</style>
    </div>
  );
};

export default EliteTechFoundersDirectoryDemoGemini;
