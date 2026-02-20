'use client';

import React, { useState } from 'react';

// Award-Style Premium Web Directory - Gemini 3.1 Pro Implementation
// Pure CSS styling focusing on luxurious, prestigious, and high-end gold accents.

interface AwardItem {
  id: string;
  category: string;
  title: string;
  recipient: string;
  year: string;
  description: string;
  featured?: boolean;
}

const CATEGORIES = ['ALL LAUREATES', 'INNOVATION', 'DESIGN EXCELLENCE', 'VISIONARY LEADER'];

const ITEMS: AwardItem[] = [
  {
    id: 'aw-01',
    category: 'INNOVATION',
    title: 'THE ALAN TURING PARADIGM',
    recipient: 'Nexus Cognitive Systems',
    year: '2025',
    description: 'Awarded for unparalleled leaps in generative problem solving heuristics that redefine autonomous computation capabilities.',
    featured: true
  },
  {
    id: 'aw-02',
    category: 'DESIGN EXCELLENCE',
    title: 'GOLDEN RATIO AESTHETICS',
    recipient: 'Studio Vora',
    year: '2024',
    description: 'A masterpiece of balance, utility, and emotional resonance in digital product conceptualization and delivery.'
  },
  {
    id: 'aw-03',
    category: 'VISIONARY LEADER',
    title: 'APEX ARCHITECT',
    recipient: 'Dr. Evelyn Sato',
    year: '2025',
    description: 'Recognizing a lifetime of pushing the boundaries of human-computer interfacing with steadfast ethical commitments.',
    featured: true
  },
  {
    id: 'aw-04',
    category: 'INNOVATION',
    title: 'QUANTUM LEAP MEDAL',
    recipient: 'AeroSpace Dynamics',
    year: '2023',
    description: 'Groundbreaking implementation of theoretical quantum mechanics applied to real-time orbital trajectory stabilization.'
  },
  {
    id: 'aw-05',
    category: 'DESIGN EXCELLENCE',
    title: 'MINIMALIST PINNACLE',
    recipient: 'Framework Ltd.',
    year: '2025',
    description: 'For demonstrating that absolute reduction of form translates to maximum communicative power in interface design.'
  },
  {
    id: 'aw-06',
    category: 'VISIONARY LEADER',
    title: 'GLOBAL IMPACT HONOREE',
    recipient: 'The Open Array Project',
    year: '2024',
    description: 'An open-source initiative that democratized access to institutional-grade machine learning infrastructures worldwide.',
    featured: true
  }
];

export const AwardStylePremiumDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL LAUREATES');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'ALL LAUREATES' ? true : item.category === activeTab
  );

  return (
    <div className="award-directory-container">
      {/* Subtle Background Lighting */}
      <div className="ambient-gold-glow"></div>

      <div className="award-layout-wrapper">
        
        {/* Header Section */}
        <header className="award-header">
          <div className="title-group">
            <h1 className="prestige-title">THE APEX <span className="gold-text">AWARDS</span></h1>
            <p className="prestige-subtitle">Honoring Excellence in Technology</p>
          </div>

          <div className="counter-badge-premium">
            <span className="bold-number">{filteredItems.length.toString().padStart(2, '0')}</span>
            <span className="badge-text">LAUREATES<br/>RECOGNIZED</span>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="award-nav">
          <div className="nav-line"></div>
          {CATEGORIES.map(tab => (
            <button
              key={tab}
              className={`award-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* 3-Column Editorial Grid */}
        <div className="award-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="spotlight-card">
              
              {item.featured && (
                <div className="featured-ribbon">
                  HONOREE OF THE YEAR
                </div>
              )}

              {/* Decorative Frame */}
              <div className="card-border-frame"></div>

              <div className="card-content-inner">
                <div className="card-header-meta">
                  <span className="category-pill">{item.category}</span>
                  <span className="awarded-year">{item.year}</span>
                </div>

                <div className="recipient-name">{item.recipient}</div>
                
                <h2 className="award-title">{item.title}</h2>
                
                <div className="gold-divider"></div>
                
                <p className="award-description">{item.description}</p>
                
                <div className="card-footer">
                  <button className="read-citation-btn">READ CITATION</button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Prestige Color Palette & Typography */
        :root {
          --aw-bg-pure: #050505;
          --aw-bg-card: #0A0A0A;
          
          /* Gold Accents */
          --aw-gold-light: #F9E5A8;
          --aw-gold-main: #D4AF37;
          --aw-gold-dark: #A67C00;
          --aw-gold-gradient: linear-gradient(135deg, #F9E5A8 0%, #D4AF37 50%, #A67C00 100%);
          --aw-gold-gradient-subtle: linear-gradient(135deg, rgba(212,175,55,0.4) 0%, rgba(166,124,0,0.1) 100%);
          
          --aw-text-main: #EBEBEB;
          --aw-text-dim: #999999;
          
          --aw-radius: 8px;
          --aw-border-light: rgba(212, 175, 55, 0.2);
          
          /* Typography Mix */
          --aw-font-serif: 'Playfair Display', 'Georgia', serif;
          --aw-font-sans: 'Inter', 'Helvetica Neue', sans-serif;
        }

        /* Container & Base */
        .award-directory-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--aw-bg-pure);
          color: var(--aw-text-main);
          font-family: var(--aw-font-sans);
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Ambient Glow */
        .ambient-gold-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 70vw;
          height: 50vh;
          background: radial-gradient(ellipse at bottom, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .award-layout-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header Area */
        .award-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 2rem;
        }

        .title-group {
          display: flex;
          flex-direction: column;
        }

        .prestige-title {
          font-family: var(--aw-font-serif);
          font-size: 3.5rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
        }

        .gold-text {
          background: var(--aw-gold-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        .prestige-subtitle {
          color: var(--aw-gold-main);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin: 0;
          font-weight: 600;
        }

        /* Prominent Counter Badge */
        .counter-badge-premium {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(to bottom right, rgba(20,20,20,0.8), rgba(0,0,0,1));
          border: 1px solid var(--aw-border-light);
          border-radius: var(--aw-radius);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .bold-number {
          font-family: var(--aw-font-serif);
          font-size: 3rem;
          font-weight: 700;
          color: var(--aw-gold-main);
          line-height: 1;
        }

        .badge-text {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--aw-text-dim);
          line-height: 1.4;
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 1.2rem;
        }

        /* Navigation */
        .award-nav {
          display: flex;
          gap: 2.5rem;
          margin-bottom: 4rem;
          position: relative;
        }

        .award-tab {
          background: transparent;
          border: none;
          color: var(--aw-text-dim);
          font-family: var(--aw-font-sans);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          padding: 0 0 0.5rem 0;
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
        }

        .award-tab:hover {
          color: var(--aw-text-main);
        }

        .award-tab.active {
          color: var(--aw-gold-light);
        }

        .award-tab::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: var(--aw-gold-gradient);
          transition: width 0.3s ease;
        }

        .award-tab.active::after {
          width: 100%;
        }

        /* Grid */
        .award-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .award-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .award-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Spotlight Cards */
        .spotlight-card {
          background: var(--aw-bg-card);
          border-radius: var(--aw-radius);
          position: relative;
          height: 480px;
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.8);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* Elegant inner border frame */
        .card-border-frame {
          position: absolute;
          top: 8px; right: 8px; bottom: 8px; left: 8px;
          border: 1px solid rgba(255,255,255,0.03);
          border-radius: calc(var(--aw-radius) - 2px);
          pointer-events: none;
          transition: border-color 0.4s ease;
        }

        .spotlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.9), 0 0 20px rgba(212, 175, 55, 0.05);
        }

        .spotlight-card:hover .card-border-frame {
          border-color: var(--aw-border-light);
        }

        /* Subtle gradient overlay effect */
        .spotlight-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(212,175,55,0.03) 0%, rgba(0,0,0,0) 40%);
          border-radius: var(--aw-radius);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .spotlight-card:hover::before {
          opacity: 1;
        }

        .card-content-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        /* Ribbon */
        .featured-ribbon {
          position: absolute;
          top: 30px;
          right: -10px;
          background: var(--aw-gold-gradient);
          color: #000;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          padding: 0.5rem 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          z-index: 20;
        }

        .featured-ribbon::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 0;
          border-top: 10px solid var(--aw-gold-dark);
          border-right: 10px solid transparent;
        }

        /* Headers & Meta */
        .card-header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .category-pill {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          font-weight: 600;
          color: var(--aw-gold-main);
          border: 1px solid var(--aw-border-light);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
        }

        .awarded-year {
          font-family: var(--aw-font-serif);
          font-style: italic;
          color: var(--aw-text-dim);
          font-size: 0.9rem;
        }

        .recipient-name {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--aw-text-dim);
          margin-bottom: 0.5rem;
        }

        .award-title {
          font-family: var(--aw-font-serif);
          font-size: 1.8rem;
          font-weight: 400;
          line-height: 1.2;
          color: var(--aw-text-main);
          margin: 0 0 1.5rem 0;
        }

        .gold-divider {
          width: 30px;
          height: 1px;
          background: var(--aw-gold-main);
          margin-bottom: 1.5rem;
          transition: width 0.3s ease;
        }

        .spotlight-card:hover .gold-divider {
          width: 60px;
        }

        .award-description {
          font-size: 0.9rem;
          color: var(--aw-text-dim);
          line-height: 1.7;
          margin: 0;
          flex-grow: 1;
        }

        /* Footer / Button */
        .card-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .read-citation-btn {
          background: transparent;
          border: none;
          color: var(--aw-gold-main);
          font-family: var(--aw-font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0;
          transition: color 0.2s ease;
        }

        .read-citation-btn::after {
          content: '→';
          margin-left: 0.5rem;
          transition: transform 0.2s ease;
        }

        .read-citation-btn:hover {
          color: var(--aw-gold-light);
        }

        .read-citation-btn:hover::after {
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};

export default AwardStylePremiumDirectoryDemoGemini;
