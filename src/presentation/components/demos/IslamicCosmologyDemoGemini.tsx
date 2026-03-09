'use client';

import React, { useEffect, useState } from 'react';

/**
 * IslamicCosmologyDemoGemini
 * A futuristic interface inspired by Islamic geometric cosmology.
 * Features glowing star patterns, cosmic blue backgrounds, and radiating symmetry.
 */
export const IslamicCosmologyDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSphere, setActiveSphere] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cosmicSpheres = [
    {
      id: 1,
      title: 'The Primordial Point',
      arabic: 'النقطة الأصلية',
      description: 'The singular origin of all geometric radiation and cosmic order.',
      metaphysics: 'Unity beyond dimensions.',
      pattern: 'Eight-fold star'
    },
    {
      id: 2,
      title: 'Infinite Decagon',
      arabic: 'العشارية اللانهائية',
      description: 'The recursive folding of space into self-similar harmonic structures.',
      metaphysics: 'Patterns of eternal return.',
      pattern: 'Ten-fold rosette'
    },
    {
      id: 3,
      title: 'Radiant Mandala',
      arabic: 'المندالا المشعة',
      description: 'A map of the spiritual sky where light translates into digital symmetry.',
      metaphysics: 'The architecture of perception.',
      pattern: 'Twelve-fold grid'
    },
    {
      id: 4,
      title: 'Cosmic Labyrinth',
      arabic: 'المتاهة الكونية',
      description: 'A navigation through the unseen layers of geometric probability.',
      metaphysics: 'The path to hidden truths.',
      pattern: 'Sixteen-fold star'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#020617' }} />;

  return (
    <div className="cosmology-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&family=Orbitron:wght@400;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .cosmology-container {
          min-height: 100vh;
          width: 100%;
          background: #020617;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L61.2 38.8 L100 50 L61.2 61.2 L50 100 L38.8 61.2 L0 50 L38.8 38.8 Z' fill='%2306b6d4' fill-opacity='0.1'/%3E%3C/svg%3E");
          color: #f0f9ff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 6rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .cosmology-header {
          text-align: center;
          margin-bottom: 8rem;
          z-index: 10;
        }

        .quantum-orb {
          width: 70px;
          height: 70px;
          border: 1px solid #06b6d4;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2.5rem;
          font-size: 1.5rem;
          color: #06b6d4;
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.4);
          background: rgba(2, 6, 23, 0.8);
          animation: pulse 4s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(6, 182, 212, 0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 50px rgba(212, 175, 55, 0.3); }
        }

        .header-arabic {
          font-family: 'Amiri', serif;
          font-size: 3.5rem;
          color: #d4af37;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        .header-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.8em;
          text-transform: uppercase;
          color: rgba(6, 182, 212, 0.6);
        }

        .cosmology-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
          width: 100%;
          max-width: 1300px;
          z-index: 10;
        }

        .cosmic-card {
          background: rgba(2, 6, 23, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          padding: 4rem 2.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          text-align: center;
          overflow: hidden;
        }

        .cosmic-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 45%, rgba(6, 182, 212, 0.05) 50%, transparent 55%);
          background-size: 200% 200%;
          animation: sweep 8s infinite linear;
          pointer-events: none;
        }

        @keyframes sweep {
          0% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }

        .cosmic-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #06b6d4;
          box-shadow: 0 20px 80px rgba(6, 182, 212, 0.15);
        }

        .card-pattern-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='%2306b6d4' stroke-width='0.5'/%3E%3C/svg%3E");
          transition: opacity 0.5s ease;
        }

        .cosmic-card:hover .card-pattern-overlay {
          opacity: 0.3;
        }

        .card-arabic {
          font-family: 'Amiri', serif;
          font-size: 2.2rem;
          color: #d4af37;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          color: #06b6d4;
          margin-bottom: 1rem;
        }

        .card-desc {
          font-size: 0.875rem;
          line-height: 1.8;
          color: rgba(240, 249, 255, 0.6);
          margin-bottom: 2rem;
        }

        .data-panel {
          max-height: 0;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(6, 182, 212, 0.05);
          opacity: 0;
        }

        .cosmic-card.active .data-panel {
          max-height: 200px;
          opacity: 1;
          margin-top: 1rem;
          padding: 1.5rem;
          border-top: 1px solid rgba(6, 182, 212, 0.1);
        }

        .metaphysics-text {
          font-size: 0.75rem;
          font-family: 'Orbitron', sans-serif;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .connection-line {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #06b6d4, transparent);
          opacity: 0.1;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .header-arabic { font-size: 2.5rem; }
          .cosmic-card { padding: 3rem 1.5rem; }
        }
      `}</style>

      {/* Decorative side lines */}
      <div className="connection-line" style={{ left: '5%' }} />
      <div className="connection-line" style={{ right: '5%' }} />

      <header className="cosmology-header">
        <div className="quantum-orb">✧</div>
        <div className="header-arabic">هندسة الكون</div>
        <div className="header-title">Planetary Geometry Protocol</div>
      </header>

      <div className="cosmology-grid">
        {cosmicSpheres.map((sphere) => (
          <div 
            key={sphere.id} 
            className={`cosmic-card ${activeSphere === sphere.id ? 'active' : ''}`}
            onClick={() => setActiveSphere(activeSphere === sphere.id ? null : sphere.id)}
          >
            <div className="card-pattern-overlay" />
            <div className="card-arabic">{sphere.arabic}</div>
            <h2 className="card-title">{sphere.title}</h2>
            <p className="card-desc">{sphere.description}</p>
            
            <div className="data-panel">
              <div className="metaphysics-text">{sphere.metaphysics}</div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: '#06b6d4', opacity: 0.5 }}>
                {sphere.pattern} Protocol
              </div>
            </div>

            <div style={{
              marginTop: 'auto',
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: 'rgba(212, 175, 55, 0.3)',
              textTransform: 'uppercase'
            }}>
              Node {sphere.id} // System Symm
            </div>
          </div>
        ))}
      </div>

      <footer style={{
        marginTop: '8rem',
        zIndex: 10,
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.8em',
        color: 'rgba(6, 182, 212, 0.3)',
        textAlign: 'center'
      }}>
        Transcendental Tech // PromptUI Ethereal
      </footer>
    </div>
  );
};
