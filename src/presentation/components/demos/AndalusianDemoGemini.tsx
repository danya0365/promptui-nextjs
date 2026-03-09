'use client';

import React, { useEffect, useState } from 'react';

/**
 * AndalusianDemoGemini
 * A rich Islamic interface inspired by Andalusian (Spanish-Islamic) architecture.
 * Features terracotta tones, turquoise accents, and mosaic patterns.
 */
export const AndalusianDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sections = [
    {
      title: 'The Court of Lions',
      arabic: 'باحة السباع',
      description: 'The pinnacle of Nasrid art, where water and light play across intricate marble carvings.',
      details: [
        '124 marble columns supporting complex muqarnas.',
        'A symbolic representation of the four rivers of paradise.',
        'A masterpiece of hydraulic engineering and poetic geometry.'
      ]
    },
    {
      title: 'Zellij Artistry',
      arabic: 'فن الزليج',
      description: 'Mathematical precision meets artistic soul in these hand-cut tile mosaics.',
      details: [
        'Complex geometric patterns representing infinite unity.',
        'Traditional colors: Terracotta, Turquoise, Cobalt, and Gold.',
        'Each piece is unique, hand-chiseled by dedicated craftsmen.'
      ]
    },
    {
      title: 'Horseshoe Arches',
      arabic: 'العقود الحدวية',
      description: 'The signature silhouette of Andalusian architecture, framing views of paradise.',
      details: [
        'Double-tiered arches for enhanced structural rhythm.',
        'Alternating red and white voussoirs for visual vibration.',
        'A gateway between the earthly and the spiritual realms.'
      ]
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#d97706' }} />;

  return (
    <div className="andalusian-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .andalusian-container {
          min-height: 100vh;
          width: 100%;
          background: #331d10;
          background-image: 
            radial-gradient(circle at 50% 50%, #4a2b18 0%, transparent 100%),
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l5 15h15l-12 9 4 16-12-10-12 10 4-16-12-9h15z' fill='%2358311a' fill-opacity='0.2'/%3E%3C/svg%3E");
          color: #fef3c7;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 2rem;
          position: relative;
        }

        .terracotta-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(180, 83, 9, 0.05);
          pointer-events: none;
        }

        .main-header {
          text-align: center;
          margin-bottom: 6rem;
          z-index: 10;
        }

        .mosque-arch-header {
          width: 240px;
          height: 80px;
          margin: 0 auto 2rem;
          background: #d4af37;
          clip-path: ellipse(50% 100% at 50% 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 15px;
        }

        .header-arabic {
          font-family: 'Amiri', serif;
          font-size: 3rem;
          color: #331d10;
        }

        .header-english {
          font-size: 1.125rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 500;
        }

        .palace-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          width: 100%;
          z-index: 10;
        }

        .arch-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .card-top {
          background: #b45309;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
        }

        .card-top::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l10 10L20 0v20H0z' fill='%2392400e' fill-opacity='0.5'/%3E%3C/svg%3E");
          opacity: 0.3;
        }

        .card-title-arabic {
          font-family: 'Amiri', serif;
          font-size: 1.75rem;
          color: #fef3c7;
          z-index: 1;
        }

        .card-body {
          background: #fffbeb;
          padding: 2.5rem;
          color: #451a03;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 12px solid transparent;
          border-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%2306b6d4'/%3E%3Cpath d='M0 0l20 20L40 0v40H0z' fill='%230891b2'/%3E%3C/svg%3E") 30 stretch;
        }

        .card-title-english {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #92400e;
        }

        .card-description {
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.8;
          max-width: 600px;
        }

        .unfold-btn {
          border: 1px solid #d4af37;
          padding: 0.75rem 2rem;
          border-radius: 0;
          background: transparent;
          color: #92400e;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .unfold-btn:hover {
          background: #d4af37;
          color: #fff;
        }

        .details-panel {
          max-height: 0;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          background: #fef3c7;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          padding: 0 2.5rem;
          opacity: 0;
        }

        .details-panel.active {
          max-height: 400px;
          padding: 2.5rem;
          opacity: 1;
          border-top: 1px solid rgba(146, 64, 14, 0.1);
        }

        .detail-item {
          color: #78350f;
          font-size: 0.9375rem;
          line-height: 1.5;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          text-align: left;
        }

        .ornament {
          width: 20px;
          height: 20px;
          margin: 2rem 0;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z' fill='%23d4af37'/%3E%3C/svg%3E");
          background-size: contain;
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .header-arabic { font-size: 2rem; }
          .details-panel { grid-template-columns: 1fr; }
        }
      `}</style>
      
      <div className="terracotta-overlay" />

      <header className="main-header">
        <div className="mosque-arch-header">
          <span className="header-arabic">الأندلس</span>
        </div>
        <p className="header-english">Al-Andalus Heritage</p>
      </header>

      <div className="palace-grid">
        {sections.map((section, index) => (
          <div key={index} className="arch-card">
            <div className="card-top" onClick={() => setActiveSection(activeSection === index ? null : index)}>
              <span className="card-title-arabic">{section.arabic}</span>
            </div>
            
            <div className="card-body">
              <h2 className="card-title-english">{section.title}</h2>
              <p className="card-description">{section.description}</p>
              
              <button 
                className="unfold-btn"
                onClick={() => setActiveSection(activeSection === index ? null : index)}
              >
                {activeSection === index ? 'Close Palace Doors' : 'Open Palace Doors'}
              </button>
            </div>

            <div className={`details-panel ${activeSection === index ? 'active' : ''}`}>
              {section.details.map((detail, dIdx) => (
                <div key={dIdx} className="detail-item">
                  {detail}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="ornament" />

      <div style={{
        marginTop: '2rem',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.3em',
        color: 'rgba(212, 175, 55, 0.4)'
      }}>
        Andalusian Design Language • PromptUI Majestic
      </div>
    </div>
  );
};
