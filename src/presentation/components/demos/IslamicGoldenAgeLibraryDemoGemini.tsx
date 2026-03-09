'use client';

import React, { useEffect, useState } from 'react';

/**
 * IslamicGoldenAgeLibraryDemoGemini
 * An interface inspired by the libraries of the Islamic Golden Age (House of Wisdom).
 * Features parchment textures, ink-style graphics, and manuscript-style cards.
 */
export const IslamicGoldenAgeLibraryDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [openManuscript, setOpenManuscript] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const manuscripts = [
    {
      id: 1,
      title: 'The Book of Knowledge',
      arabic: 'كتاب العلم',
      author: 'Al-Farabi',
      content: 'A foundational treatise on the classification of sciences and the pursuit of wisdom.',
      insight: 'Knowledge is the medicine of the soul, and wisdom is its ultimate cure.',
      decoration: '🌿'
    },
    {
      id: 2,
      title: 'Mathematical Wonders',
      arabic: 'عجائب الحساب',
      author: 'Al-Khwarizmi',
      content: 'The origins of algebra and the systematic approach to solving linear equations.',
      insight: 'Through numbers, the hidden patterns of the universe reveal their divine order.',
      decoration: '📐'
    },
    {
      id: 3,
      title: 'The Canon of Medicine',
      arabic: 'القانون في الطب',
      author: 'Ibn Sina',
      content: 'A comprehensive encyclopedia of medical knowledge used for centuries across continents.',
      insight: 'The art of healing is the harmony between the physical and the metaphysical.',
      decoration: '⚖️'
    },
    {
      id: 4,
      title: 'Celestial Spheres',
      arabic: 'هيئة الأفلاك',
      author: 'Al-Tusi',
      content: 'Advanced observations of planetary motion and the refinement of astronomical models.',
      insight: 'The stars are the silent witnesses to the vastness of the Creator’s design.',
      decoration: '🔭'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#f5f5dc' }} />;

  return (
    <div className="library-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=IM+Fell+English:ital,wght@0,400;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .library-container {
          min-height: 100vh;
          width: 100%;
          background: #fdfcf0; /* Parchment white */
          background-image: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E"),
            radial-gradient(circle at 10% 10%, rgba(20, 83, 45, 0.05) 0%, transparent 50%);
          color: #1a1a1a;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 6rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .library-header {
          text-align: center;
          margin-bottom: 8rem;
          z-index: 10;
        }

        .ink-seal {
          width: 60px;
          height: 60px;
          border: 1px solid #14532d;
          border-radius: 8px;
          margin: 0 auto 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #14532d;
          font-family: 'Amiri', serif;
          font-weight: 700;
          font-size: 1.5rem;
          box-shadow: 0 4px 15px rgba(20, 83, 45, 0.1);
          background: rgba(253, 252, 240, 0.8);
        }

        .header-arabic {
          font-family: 'Amiri', serif;
          font-size: 3.5rem;
          color: #14532d;
          margin-bottom: 1rem;
        }

        .header-subtitle {
          font-family: 'IM Fell English', serif;
          font-size: 0.875rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(20, 83, 45, 0.6);
          font-style: italic;
        }

        .library-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 4rem;
          width: 100%;
          max-width: 1200px;
          z-index: 10;
        }

        .manuscript-card {
          background: #fffef8;
          border: 1px solid #e5e7eb;
          padding: 4rem 3rem;
          position: relative;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        /* Manuscript border decorations */
        .manuscript-card::before {
          content: '';
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(20, 83, 45, 0.1);
          pointer-events: none;
        }

        .manuscript-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 0; height: 100%;
          background: #14532d;
          transition: width 0.4s ease;
        }

        .manuscript-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px rgba(20, 83, 45, 0.1);
        }

        .card-arabic-title {
          font-family: 'Amiri', serif;
          font-size: 1.5rem;
          color: #c2410c;
          margin-bottom: 1rem;
          text-align: right;
        }

        .card-title {
          font-family: 'IM Fell English', serif;
          font-size: 1.5rem;
          color: #14532d;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .card-author {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #92400e;
          margin-bottom: 2rem;
        }

        .card-content {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: rgba(26, 26, 26, 0.7);
          margin-bottom: 2rem;
        }

        .manuscript-expand {
          max-height: 0;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          border-top: 1px solid rgba(20, 83, 45, 0.05);
        }

        .manuscript-card.open .manuscript-expand {
          max-height: 300px;
          opacity: 1;
          margin-top: 2rem;
          padding-top: 2rem;
        }

        .wisdom-quote {
          font-family: 'IM Fell English', serif;
          font-size: 1.125rem;
          font-style: italic;
          color: #14532d;
          line-height: 1.6;
          position: relative;
          padding-left: 1.5rem;
          border-left: 4px solid #d4af37;
        }

        .card-ornament {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          font-size: 2.5rem;
          opacity: 0.04;
          color: #14532d;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .header-arabic { font-size: 2.5rem; }
          .manuscript-card { padding: 3rem 2rem; }
        }
      `}</style>

      <div className="ink-seal" style={{ position: 'absolute', top: '40px', right: '40px', margin: 0, opacity: 0.4 }}>IK</div>

      <header className="library-header">
        <div className="ink-seal">بيت</div>
        <div className="header-arabic">بيت الحكمة</div>
        <div className="header-subtitle">Legacy of the House of Wisdom</div>
      </header>

      <div className="library-grid">
        {manuscripts.map((item) => (
          <div 
            key={item.id} 
            className={`manuscript-card ${openManuscript === item.id ? 'open' : ''}`}
            onClick={() => setOpenManuscript(openManuscript === item.id ? null : item.id)}
          >
            <div className="card-arabic-title">{item.arabic}</div>
            <h2 className="card-title">{item.title}</h2>
            <div className="card-author">{item.author}</div>
            <p className="card-content">{item.content}</p>
            
            <div className="manuscript-expand">
              <div className="wisdom-quote">“{item.insight}”</div>
            </div>

            <div className="card-ornament">{item.decoration}</div>

            <div style={{
              marginTop: 'auto',
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: 'rgba(20, 83, 45, 0.3)',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              Manuscript No. 0{item.id} • Golden Age Archive
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
        color: 'rgba(20, 83, 45, 0.3)',
        textAlign: 'center'
      }}>
        Intellectual Heritage • PromptUI Historica
      </footer>
    </div>
  );
};
