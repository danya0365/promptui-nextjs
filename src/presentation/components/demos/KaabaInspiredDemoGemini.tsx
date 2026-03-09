'use client';

import React, { useEffect, useState } from 'react';

/**
 * KaabaInspiredDemoGemini
 * A minimalist, sacred, and powerful interface inspired by the Kaaba and sacred geometry.
 * Features deep black backgrounds, gold accents, and symmetrical layouts.
 */
export const KaabaInspiredDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    {
      id: 1,
      title: 'Unity of Purpose',
      arabic: 'وحدة الهدف',
      content: 'The center of the spiritual world, representing the ultimate focus and destination.',
      details: 'In the heart of the sacred sanctuary, millions gather as one heart, one voice, and one direction.'
    },
    {
      id: 2,
      title: 'Sacred Silence',
      arabic: '침묵의 신성함', // Fixed to Arabic: 'سكينة الصمت'
      content: 'Finding profound peace in the presence of the Infinite.',
      details: 'The profound silence within the soul reflects the majesty of the Creator, transcending words and time.'
    },
    {
      id: 3,
      title: 'Divine Symmetry',
      arabic: 'التناظر الإلهي',
      content: 'Geometry as a reflection of cosmic order and divine wisdom.',
      details: 'Mathematical precision in Islamic art serves as a ladder for the mind to contemplate the perfection of creation.'
    },
    {
      id: 4,
      title: 'Eternal Light',
      arabic: 'النور الأبدي',
      content: 'Guidance that illuminates the path for the seeking heart.',
      details: 'Every spark of wisdom is a reflection of the primordial light that guides humanity toward its noble purpose.'
    }
  ];

  // Correct Arabic for ID 2
  items[1].arabic = 'سكينة الصمت';

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#000' }} />;

  return (
    <div className="kaaba-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .kaaba-container {
          min-height: 100vh;
          width: 100%;
          background: #000;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 70%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 100px 100px, 100px 100px;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Marble texture effect */
        .kaaba-container::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .sacred-header {
          text-align: center;
          margin-bottom: 8rem;
          z-index: 10;
        }

        .kaaba-cube {
          width: 60px;
          height: 60px;
          background: #000;
          border: 1px solid #d4af37;
          margin: 0 auto 2.5rem;
          position: relative;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
        }

        .kaaba-cube::before {
          content: '';
          position: absolute;
          top: 15px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #d4af37;
        }

        .header-arabic {
          font-family: 'Amiri', serif;
          font-size: 3.5rem;
          color: #d4af37;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }

        .header-english {
          font-size: 0.875rem;
          letter-spacing: 0.6em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
        }

        .kaaba-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 1100px;
          width: 100%;
          z-index: 10;
        }

        .kaaba-card {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(212, 175, 55, 0.15);
          padding: 4rem 3rem;
          position: relative;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .kaaba-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 4px; height: 100%;
          background: #d4af37;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .kaaba-card:hover {
          background: rgba(20, 20, 20, 0.9);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
          transform: scale(1.02);
        }

        .kaaba-card:hover::before {
          opacity: 1;
        }

        .card-arabic {
          font-family: 'Amiri', serif;
          font-size: 2.25rem;
          color: #d4af37;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .card-content {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.4s;
        }

        .kaaba-card:hover .card-content {
          color: rgba(255, 255, 255, 0.9);
        }

        .depth-panel {
          max-height: 0;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          margin-top: 0;
        }

        .kaaba-card.active .depth-panel {
          max-height: 300px;
          opacity: 1;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .detail-text {
          font-size: 0.9375rem;
          color: #d4af37;
          font-style: italic;
          line-height: 1.6;
        }

        .geometric-ornament {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          width: 100px;
          height: 100px;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L60 40h40L65 60l15 40-30-25-30 25 15-40L0 40h40z' fill='%23d4af37' fill-opacity='0.05'/%3E%3C/svg%3E");
          background-size: contain;
          opacity: 0.5;
        }

        @media (max-width: 900px) {
          .kaaba-grid { grid-template-columns: 1fr; }
          .sacred-header { margin-bottom: 4rem; }
          .header-arabic { font-size: 2.5rem; }
        }
      `}</style>

      <div className="geometric-ornament" style={{ top: '2rem', left: '2rem', transform: 'rotate(180deg)' }} />

      <header className="sacred-header">
        <div className="kaaba-cube" />
        <h1 className="header-arabic">القصد الأسمى</h1>
        <p className="header-english">The Ultimate Purpose</p>
      </header>

      <div className="kaaba-grid">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`kaaba-card ${activeId === item.id ? 'active' : ''}`}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            <div className="card-arabic">{item.arabic}</div>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-content">{item.content}</p>
            
            <div className="depth-panel">
              <p className="detail-text">{item.details}</p>
            </div>
          </div>
        ))}
      </div>

      <footer style={{
        marginTop: '8rem',
        zIndex: 10,
        fontSize: '0.625rem',
        textTransform: 'uppercase',
        letterSpacing: '0.8em',
        color: 'rgba(212, 175, 55, 0.4)'
      }}>
        Sacred Geometry • PromptUI Eternal
      </footer>
    </div>
  );
};
