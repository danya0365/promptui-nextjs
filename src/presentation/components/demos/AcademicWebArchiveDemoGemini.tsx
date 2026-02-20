'use client';

import React, { useState } from 'react';

// Academic Web Archive Layout - Gemini 3.1 Pro Implementation
// Pure CSS styling focusing on trustworthy, scholarly aesthetics with serif fonts and soft beige backgrounds.

interface ArchiveItem {
  id: string;
  category: string;
  classification: string;
  title: string;
  author: string;
  abstract: string;
  date: string;
  doi: string;
}

const CATEGORIES = ['All Archives', 'Humanities', 'Sciences', 'Social Studies'];

const ITEMS: ArchiveItem[] = [
  {
    id: 'arch-001',
    category: 'Humanities',
    classification: 'LIT-042',
    title: 'Linguistic Shifts in Post-Industrial Literature',
    author: 'Dr. Eleanor Vance',
    abstract: 'An examination of syntax evolution and semantic narrowing in late 20th-century urban fiction, identifying key correlations between economic structures and narrative forms.',
    date: '1998-11-14',
    doi: '10.1000/arch.1998.001'
  },
  {
    id: 'arch-002',
    category: 'Sciences',
    classification: 'BIO-104',
    title: 'Mycelial Networks as Pre-computational Models',
    author: 'Prof. Julian Thorne',
    abstract: 'Exploring the electrical signaling pathways within dense fungal networks to establish parallels with binary logic gates in early computing architecture.',
    date: '2004-03-22',
    doi: '10.1000/arch.2004.042'
  },
  {
    id: 'arch-003',
    category: 'Social Studies',
    classification: 'SOC-819',
    title: 'Urban Migration and the Erosion of Dialect',
    author: 'M. Ibrahim, PhD',
    abstract: 'A longitudinal study of regional dialect neutralization among first-generation rural-to-urban migrants over a twenty-year timeframe.',
    date: '2011-08-05',
    doi: '10.1000/arch.2011.018'
  },
  {
    id: 'arch-004',
    category: 'Sciences',
    classification: 'PHY-221',
    title: 'Anomalous Resonance in Crystalline Structures',
    author: 'Dr. Sarah Chen',
    abstract: 'Measurements of unexpected vibrational frequencies in artificially synthesized quartz lattices subjected to extreme low-temperature environments.',
    date: '2015-12-10',
    doi: '10.1000/arch.2015.084'
  },
  {
    id: 'arch-005',
    category: 'Humanities',
    classification: 'HIS-099',
    title: 'Trade Routes and the Dissemination of Pigments',
    author: 'Prof. Arthur Pendelton',
    abstract: 'Tracing the origin of lapis lazuli and its utilization in Renaissance frescoes through historical mercantile ledger analysis.',
    date: '1995-04-18',
    doi: '10.1000/arch.1995.033'
  },
  {
    id: 'arch-006',
    category: 'Social Studies',
    classification: 'ECO-445',
    title: 'Barter Systems in Hyper-inflated Microeconomies',
    author: 'Dr. Elena Rostova',
    abstract: 'Observations on the rapid development of localized alternative currencies and commodity bartering during periods of severe national currency devaluation.',
    date: '2008-09-30',
    doi: '10.1000/arch.2008.056'
  }
];

export const AcademicWebArchiveDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Archives');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'All Archives' ? true : item.category === activeTab
  );

  return (
    <div className="academic-archive-container">
      <div className="archive-content">
        
        {/* Header Section */}
        <header className="archive-header">
          <div className="institution-brand">
            <span className="insignia">❖</span>
            <div className="brand-text">
              <h1>Global Academic Repository</h1>
              <span className="department">Department of Digital Archiving</span>
            </div>
          </div>
          
          <div className="archive-meta">
            <div className="meta-item">
              <span className="meta-label">Total Records</span>
              <span className="meta-value formal-counter">{filteredItems.length.toString().padStart(5, '0')}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Access Level</span>
              <span className="meta-value">Public Domain</span>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="archive-nav">
          <ul className="tab-list">
            {CATEGORIES.map(tab => (
              <li key={tab}>
                <button
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3-Column Grid */}
        <div className="archive-grid">
          {filteredItems.map(item => (
            <article key={item.id} className="archive-card">
              
              <div className="card-header">
                <span className="classification-label">{item.classification}</span>
                <time dateTime={item.date} className="publication-date">
                  {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              
              <div className="card-body">
                <h2 className="document-title">{item.title}</h2>
                <span className="document-author">By {item.author}</span>
                
                <div className="divider"></div>
                
                <div className="abstract-container">
                  <span className="section-label">Abstract</span>
                  <p className="document-abstract">{item.abstract}</p>
                </div>
              </div>
              
              <div className="card-footer">
                <div className="doi-reference">
                  <span className="doi-label">DOI:</span>
                  <span className="doi-value">{item.doi}</span>
                </div>
                <button className="view-record-btn">View Full Record</button>
              </div>
              
            </article>
          ))}
        </div>
        
        <footer className="archive-footer">
          <div className="footer-divider"></div>
          <p>© {new Date().getFullYear()} Global Academic Repository. All records are preserved for scholarly research.</p>
        </footer>
      </div>

      <style>{`
        /* Colors & Typography Variables */
        :root {
          --ac-bg-soft: #F9F7F1;
          --ac-bg-card: #FFFFFF;
          --ac-text-primary: #1A2436;
          --ac-text-secondary: #4A5568;
          --ac-text-tertiary: #718096;
          --ac-border-light: #E2E0D8;
          --ac-border-dark: #CBD5E0;
          --ac-accent: #2C5282;
          
          --font-serif: 'Merriweather', 'Georgia', 'Times New Roman', serif;
          --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
          --font-mono: 'Courier New', Courier, monospace;
        }

        /* Container */
        .academic-archive-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--ac-bg-soft);
          color: var(--ac-text-primary);
          font-family: var(--font-sans);
          padding: 3rem 1.5rem;
          box-sizing: border-box;
          line-height: 1.6;
        }

        .archive-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .archive-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid var(--ac-border-dark);
        }

        .institution-brand {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .insignia {
          font-size: 2.5rem;
          color: var(--ac-accent);
          line-height: 1;
        }

        .brand-text h1 {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.8rem;
          color: var(--ac-text-primary);
          margin: 0 0 0.25rem 0;
          letter-spacing: -0.01em;
        }

        .department {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ac-text-secondary);
        }

        .archive-meta {
          display: flex;
          gap: 2rem;
          text-align: right;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--ac-text-tertiary);
          margin-bottom: 0.25rem;
        }

        .meta-value {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--ac-text-primary);
        }

        .formal-counter {
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        /* Navigation */
        .archive-nav {
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--ac-border-light);
        }

        .tab-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 2rem;
          overflow-x: auto;
        }

        .tab-btn {
          background: none;
          border: none;
          padding: 0 0 1rem 0;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--ac-text-secondary);
          cursor: pointer;
          position: relative;
          transition: color 0.2s ease;
        }

        .tab-btn:hover {
          color: var(--ac-text-primary);
        }

        .tab-btn.active {
          color: var(--ac-text-primary);
          font-weight: 600;
        }

        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--ac-accent);
        }

        /* Grid System */
        .archive-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .archive-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .archive-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Cards */
        .archive-card {
          background-color: var(--ac-bg-card);
          border: 1px solid var(--ac-border-light);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 420px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .archive-card:hover {
          border-color: var(--ac-border-dark);
          box-shadow: 0 8px 16px rgba(0,0,0,0.04);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .classification-label {
          background-color: #EDF2F7;
          color: var(--ac-text-secondary);
          padding: 0.25rem 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .publication-date {
          font-size: 0.8rem;
          color: var(--ac-text-tertiary);
        }

        .card-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .document-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--ac-accent);
          margin: 0 0 0.5rem 0;
        }

        .document-author {
          font-size: 0.9rem;
          color: var(--ac-text-secondary);
          font-style: italic;
        }

        .divider {
          width: 2rem;
          height: 1px;
          background-color: var(--ac-border-dark);
          margin: 1.25rem 0;
        }

        .abstract-container {
          flex-grow: 1;
        }

        .section-label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ac-text-tertiary);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .document-abstract {
          font-size: 0.9rem;
          color: var(--ac-text-secondary);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-footer {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px dashed var(--ac-border-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .doi-reference {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
        }

        .doi-label {
          color: var(--ac-text-tertiary);
          font-weight: 600;
        }

        .doi-value {
          font-family: var(--font-mono);
          color: var(--ac-text-secondary);
        }

        .view-record-btn {
          background: none;
          border: none;
          color: var(--ac-accent);
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .view-record-btn:hover {
          color: #1A365D;
        }

        /* Footer */
        .archive-footer {
          margin-top: 5rem;
          text-align: center;
        }

        .footer-divider {
          width: 4rem;
          height: 2px;
          background-color: var(--ac-border-dark);
          margin: 0 auto 2rem auto;
        }

        .archive-footer p {
          font-size: 0.85rem;
          color: var(--ac-text-tertiary);
        }
      `}</style>
    </div>
  );
};

export default AcademicWebArchiveDemoGemini;
