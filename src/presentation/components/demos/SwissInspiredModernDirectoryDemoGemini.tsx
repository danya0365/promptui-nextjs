'use client';

import { useState } from 'react';

export function SwissInspiredModernDirectoryDemoGemini() {
  const [activeTab, setActiveTab] = useState('01 / All Works');

  const tabs = ['01 / All Works', '02 / Type', '03 / Grid', '04 / Object'];

  const projects = [
    {
      id: 'P-001',
      title: 'Structural Integrity',
      category: '02 / Type',
      client: 'Basel Foundation',
      year: '2024',
      featured: true,
      desc: 'An exploration of modernist typography applied to digital interfaces. Emphasizing clarity, objective communication, and mathematical proportion.'
    },
    {
      id: 'P-002',
      title: 'Negative Space Archive',
      category: '04 / Object',
      client: 'Zurich Design Museum',
      year: '2023',
      featured: false,
      desc: 'Cataloging physical objects through stark, high-contrast photography and minimal descriptive text.'
    },
    {
      id: 'P-003',
      title: 'Systematic Layouts',
      category: '03 / Grid',
      client: 'International Style Co.',
      year: '2024',
      featured: true,
      desc: 'A framework for building responsive web applications based on classic Swiss poster grid structures from the 1950s.'
    },
    {
      id: 'P-004',
      title: 'Grotesk Variants',
      category: '02 / Type',
      client: 'Independent Studio',
      year: '2022',
      featured: false,
      desc: 'A deep dive into the subtle differences between classic sans-serif typefaces and their modern interpretations.'
    },
    {
      id: 'P-005',
      title: 'Modular Exhibition',
      category: '03 / Grid',
      client: 'Architecture Biennial',
      year: '2025',
      featured: false,
      desc: 'Digital companion to a physical exhibition, utilizing a strict 12-column underlying structure for all content delivery.'
    },
    {
      id: 'P-006',
      title: 'Industrial Design Index',
      category: '04 / Object',
      client: 'Dieter Rams Archive',
      year: '2023',
      featured: false,
      desc: 'Documenting the ten principles of good design through interactive, unstyled, purely structural HTML/CSS.'
    }
  ];

  return (
    <>
      <style>{`
        /* Using Inter as a Helvetica Neue alternative for modern web */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .swiss-app {
          font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          min-height: 100vh;
          background-color: #FFFFFF;
          color: #000000;
          padding: 8vw 4vw;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .swiss-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .swiss-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 8vw;
          border-bottom: 2px solid #000;
          padding-bottom: 2vw;
        }

        .swiss-header-top {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: flex-start;
          margin-bottom: 6vw;
        }

        .swiss-title {
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: -0.04em;
          margin: 0;
          max-width: 70%;
        }

        .swiss-meta {
          text-align: right;
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .swiss-meta span {
          display: block;
          margin-bottom: 4px;
        }

        .swiss-tabs {
          display: flex;
          gap: 2vw;
          flex-wrap: wrap;
        }

        .swiss-tab {
          font-size: 1rem;
          font-weight: 500;
          color: #000;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          opacity: 0.4;
          transition: opacity 0.2s ease;
        }

        .swiss-tab:hover {
          opacity: 0.7;
        }

        .swiss-tab.active {
          opacity: 1;
        }

        .swiss-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2vw;
        }

        .swiss-card {
          display: flex;
          flex-direction: column;
          border: 1px solid #000;
          position: relative;
          min-height: 500px;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .swiss-card:hover {
          background-color: #000;
          color: #fff;
        }

        .swiss-card-top {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #000;
          padding: 1vw;
        }
        
        .swiss-card:hover .swiss-card-top {
          border-bottom-color: #fff;
        }

        .swiss-number {
          font-size: 0.85rem;
          font-weight: 500;
        }

        .swiss-featured {
          background-color: #E63946; /* Muted Red Accent */
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 8px;
        }

        .swiss-card-content {
          padding: 2vw 1vw;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .swiss-category {
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2vw;
        }

        .swiss-card-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 2vw 0;
          word-break: break-word;
        }

        .swiss-desc {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          margin: 0;
          margin-top: auto;
        }

        .swiss-card-footer {
          display: flex;
          justify-content: space-between;
          padding: 1vw;
          border-top: 1px solid #000;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .swiss-card:hover .swiss-card-footer {
          border-top-color: #fff;
        }

        .swiss-client {
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .swiss-grid { grid-template-columns: repeat(2, 1fr); gap: 4vw; }
          .swiss-card-top, .swiss-card-content, .swiss-card-footer { padding: 3vw 2vw; }
        }

        @media (max-width: 768px) {
          .swiss-grid { grid-template-columns: 1fr; }
          .swiss-header-top { flex-direction: column; gap: 4vw; }
          .swiss-meta { text-align: left; }
          .swiss-title { max-width: 100%; }
          .swiss-tabs { gap: 4vw; flex-direction: column; }
          .swiss-card { min-height: 400px; }
          .swiss-card-top, .swiss-card-content, .swiss-card-footer { padding: 4vw; }
        }
      `}</style>

      <div className="swiss-app">
        <div className="swiss-container">
          <header className="swiss-header">
            <div className="swiss-header-top">
              <h1 className="swiss-title">Rational Indexing System</h1>
              <div className="swiss-meta">
                <span>Directory v.1.0</span>
                <span>Zürich, CH</span>
              </div>
            </div>

            <nav className="swiss-tabs">
              {tabs.map((tab) => (
                <button 
                  key={tab} 
                  className={`swiss-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </header>

          <div className="swiss-grid">
            {projects.map((project) => {
              // Strict filtering logic
              if (activeTab !== '01 / All Works' && project.category !== activeTab) {
                return null;
              }
               
              return (
                <article key={project.id} className="swiss-card">
                  <div className="swiss-card-top">
                    <span className="swiss-number">{project.id}</span>
                    {project.featured && <span className="swiss-featured">Featured</span>}
                  </div>
                  
                  <div className="swiss-card-content">
                    <div className="swiss-category">{project.category}</div>
                    <h2 className="swiss-card-title">{project.title}</h2>
                    <p className="swiss-desc">{project.desc}</p>
                  </div>
                  
                  <footer className="swiss-card-footer">
                    <span className="swiss-client">{project.client}</span>
                    <span className="swiss-year">{project.year}</span>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
