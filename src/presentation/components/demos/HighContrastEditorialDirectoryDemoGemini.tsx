'use client';

import React, { useState } from 'react';

// High-Contrast Editorial Web Directory - Gemini 3.1 Pro Implementation
// Pure css styling focusing on commanding, fashion-magazine inspired, statement-driven aesthetics.

interface EditorialItem {
  id: string;
  category: string;
  headline: string;
  subhead: string;
  author: string;
  issueNo: string;
  featured?: boolean;
  imageFallback: string; // Used as background pattern or sharp color block
}

const NAV_TABS = ['LATEST', 'AVANT-GARDE', 'CULTURE', 'ARCHIVE'];

const ITEMS: EditorialItem[] = [
  {
    id: 'ed-001',
    category: 'AVANT-GARDE',
    headline: 'THE NEW BRUTALISM',
    subhead: 'Architecture as an aggressive statement in modern urban sprawls.',
    author: 'SILVIA ROTH',
    issueNo: 'NO. 48',
    featured: true,
    imageFallback: 'repeating-linear-gradient(45deg, #000, #000 10px, #fff 10px, #fff 20px)'
  },
  {
    id: 'ed-002',
    category: 'CULTURE',
    headline: 'SILENT SPACES',
    subhead: 'Visual isolation and the luxury of total emptiness.',
    author: 'J.T. WAGNER',
    issueNo: 'NO. 47',
    imageFallback: 'linear-gradient(to bottom, #111, #444)'
  },
  {
    id: 'ed-003',
    category: 'LATEST',
    headline: 'MONOCHROME MANIA',
    subhead: 'Why the absence of color is the loudest choice of the season.',
    author: 'KIRA YEV',
    issueNo: 'NO. 48',
    featured: true,
    imageFallback: 'repeating-radial-gradient(circle, #000, #000 5px, #fff 5px, #fff 15px)'
  },
  {
    id: 'ed-004',
    category: 'CULTURE',
    headline: 'INDUSTRIAL RAW',
    subhead: 'Reclaiming abandoned factories as high-fashion runways.',
    author: 'MARCUS DEAN',
    issueNo: 'NO. 46',
    imageFallback: 'radial-gradient(circle at center, #000 0%, #fff 100%)'
  },
  {
    id: 'ed-005',
    category: 'AVANT-GARDE',
    headline: 'FORM FOLLOWS VOID',
    subhead: 'Deconstructing garments until only the concept remains.',
    author: 'ALANA VOSS',
    issueNo: 'NO. 45',
    featured: true,
    imageFallback: 'linear-gradient(135deg, #fff 25%, #000 25%, #000 50%, #fff 50%, #fff 75%, #000 75%, #000 100%)'
  },
  {
    id: 'ed-006',
    category: 'LATEST',
    headline: 'SHARP EDGES',
    subhead: 'The return of the aggressive silhouette in tailoring.',
    author: 'D.K. STONE',
    issueNo: 'NO. 48',
    imageFallback: 'conic-gradient(from 0deg, #000, #fff, #000)'
  }
];

export const HighContrastEditorialDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('LATEST');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'LATEST' ? true : item.category === activeTab
  );

  return (
    <div className="editorial-container">
      
      {/* Heavy Top Border */}
      <div className="heavy-border-top"></div>

      <div className="editorial-content">
        
        {/* Header */}
        <header className="editorial-header">
          <div className="header-top">
            <h1 className="manifesto-title">ISSUE</h1>
            <div className="counter-badge">
              <span className="counter-number">{(filteredItems.length).toString().padStart(2, '0')}</span>
              <span className="counter-label">INDEXED</span>
            </div>
          </div>
          
          <div className="border-divider"></div>

          <nav className="editorial-nav">
            {NAV_TABS.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </header>

        {/* 3-Column Grid */}
        <div className="editorial-grid">
          {filteredItems.map(item => (
            <article key={item.id} className="editorial-card">
              
              {item.featured && (
                <div className="ribbon-wrapper">
                  <div className="ribbon">ESSENTIAL</div>
                </div>
              )}

              <div 
                className="card-hero-image"
                style={{ background: item.imageFallback }}
              >
                <div className="issue-label">{item.issueNo}</div>
              </div>

              <div className="card-content">
                <div className="card-meta">
                  <span className="category-label">{item.category}</span>
                </div>
                
                <h2 className="headline">{item.headline}</h2>
                <p className="subhead">{item.subhead}</p>
                
                <div className="author-block">
                  <span className="author-by">BY</span>
                  <span className="author-name">{item.author}</span>
                </div>
              </div>
              
            </article>
          ))}
        </div>

        {/* Footer Statement */}
        <footer className="editorial-footer">
          <h2>STAY SHARP.</h2>
          <p>NO COMPROMISE. NO ROUNDED CORNERS. ONLY PURE CONTRAST.</p>
        </footer>

      </div>

      <style>{`
        /* Core Styling */
        :root {
          --hc-black: #000000;
          --hc-white: #FFFFFF;
          --hc-border-thick: 6px solid var(--hc-black);
          --hc-border-thin: 2px solid var(--hc-black);
          
          --font-display: 'Oswald', 'Impact', 'Helvetica Neue', sans-serif;
          --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        .editorial-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--hc-white);
          color: var(--hc-black);
          font-family: var(--font-body);
          padding: 0 2rem 4rem 2rem;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }

        .heavy-border-top {
          width: 100%;
          height: 12px;
          background-color: var(--hc-black);
          margin-bottom: 2rem;
        }

        .editorial-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header */
        .editorial-header {
          margin-bottom: 4rem;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1rem;
        }

        .manifesto-title {
          font-family: var(--font-display);
          font-size: 8rem;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.8;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .counter-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          border: var(--hc-border-thick);
          padding: 0.5rem 1rem;
          background: var(--hc-black);
          color: var(--hc-white);
        }

        .counter-number {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
        }

        .counter-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .border-divider {
          width: 100%;
          border-top: var(--hc-border-thick);
        }

        .editorial-nav {
          display: flex;
          border-bottom: var(--hc-border-thick);
        }

        .tab-btn {
          flex: 1;
          background: transparent;
          border: none;
          border-right: var(--hc-border-thin);
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          padding: 1rem 0;
          cursor: pointer;
          color: var(--hc-black);
          text-transform: uppercase;
          transition: background-color 0.2s, color 0.2s;
        }

        .tab-btn:last-child {
          border-right: none;
        }

        .tab-btn:hover {
          background-color: #EAEAEA;
        }

        .tab-btn.active {
          background-color: var(--hc-black);
          color: var(--hc-white);
        }

        /* Grid Framework */
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .editorial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .editorial-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Card Structural */
        .editorial-card {
          border: var(--hc-border-thick);
          display: flex;
          flex-direction: column;
          height: 600px;
          position: relative;
          background: var(--hc-white);
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .editorial-card:hover {
          transform: translateY(-8px);
          box-shadow: 12px 12px 0px var(--hc-black);
        }

        /* DIAGONAL RIBBON */
        .ribbon-wrapper {
          position: absolute;
          width: 150px;
          height: 150px;
          top: -10px;
          right: -10px;
          overflow: hidden;
          z-index: 10;
        }

        .ribbon {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--hc-white);
          text-align: center;
          text-transform: uppercase;
          transform: rotate(45deg);
          position: relative;
          padding: 7px 0;
          left: -5px;
          top: 32px;
          width: 200px;
          background-color: var(--hc-black);
          border: var(--hc-border-thin);
          border-color: var(--hc-white);
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          letter-spacing: 0.1em;
        }

        /* Card Image Block */
        .card-hero-image {
          height: 50%;
          border-bottom: var(--hc-border-thick);
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 1rem;
        }

        .issue-label {
          background: var(--hc-white);
          color: var(--hc-black);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.2rem;
          padding: 0.2rem 0.8rem;
          border: var(--hc-border-thin);
        }

        /* Card Text Content */
        .card-content {
          flex: 1;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          background: var(--hc-white);
        }

        .card-meta {
          margin-bottom: 1rem;
        }

        .category-label {
          background: var(--hc-black);
          color: var(--hc-white);
          padding: 0.3rem 0.6rem;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
        }

        .headline {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 1rem 0;
          letter-spacing: -0.01em;
        }

        .subhead {
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 500;
          margin: 0;
          flex: 1;
        }

        .author-block {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: var(--hc-border-thin);
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .author-by {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
        }

        .author-name {
          font-family: var(--font-body);
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* Footer */
        .editorial-footer {
          margin-top: 6rem;
          padding: 4rem 0;
          border-top: var(--hc-border-thick);
          text-align: center;
        }

        .editorial-footer h2 {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 900;
          margin: 0 0 1rem 0;
        }

        .editorial-footer p {
          font-weight: 700;
          letter-spacing: 0.1em;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default HighContrastEditorialDirectoryDemoGemini;
