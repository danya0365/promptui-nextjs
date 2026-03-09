'use client';

import React, { useEffect, useState } from 'react';

/**
 * OttomanPalaceDemoGemini
 * A majestic interface inspired by Ottoman palace architecture (Topkapi style).
 * Features emerald backgrounds, rich gold ornaments, and elegant arch shapes.
 */
export const OttomanPalaceDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activePanel, setActivePanel] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const palacePanels = [
    {
      id: 1,
      title: 'Imperial Diwan',
      arabic: 'الديوان الهمايوني',
      description: 'The center of imperial administration and justice.',
      culture: 'Architectural mastery meeting political wisdom.',
      ornament: '⚜️'
    },
    {
      id: 2,
      title: 'Sacred Trust',
      arabic: 'الأمانات المقدسة',
      description: 'Preserving the most venerable artifacts of the faith.',
      culture: 'A sanctuary of devotion and historical continuity.',
      ornament: '🌙'
    },
    {
      id: 3,
      title: 'Sultan\'s Library',
      arabic: 'مكتبة السلطان',
      description: 'A repository of universal knowledge and calligraphy.',
      culture: 'Where ink and illumination celebrate the intellect.',
      ornament: '📜'
    },
    {
      id: 4,
      title: 'Floral Gardens',
      arabic: 'حدائق توليب',
      description: 'The symbolic tulip patterns of the Ottoman era.',
      culture: 'Nature refined into eternal artistic geometry.',
      ornament: '🌷'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#064e3b' }} />;

  return (
    <div className="palace-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Playfair+Display:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .palace-container {
          min-height: 100vh;
          width: 100%;
          background: #022c22;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 80%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c5 10 15 10 20 20s-5 15-15 15-15-5-20-15S10 10 30 0z' fill='%23d4af37' fill-opacity='0.02'/%3E%3C/svg%3E");
          color: #ecfdf5;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 6rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .palace-header {
          text-align: center;
          margin-bottom: 8rem;
          z-index: 10;
        }

        .imperial-seal {
          width: 80px;
          height: 80px;
          border: 2px solid #d4af37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          font-size: 2rem;
          color: #d4af37;
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
          background: rgba(6, 78, 59, 0.5);
        }

        .header-arabic {
          font-family: 'Amiri', serif;
          font-size: 4rem;
          color: #d4af37;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .header-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          letter-spacing: 0.8em;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.5);
        }

        .palace-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
          width: 100%;
          max-width: 1300px;
          z-index: 10;
        }

        .arch-card {
          background: rgba(6, 78, 59, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 200px 200px 20px 20px;
          padding: 5rem 2.5rem 3rem;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
        }

        .arch-card::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(212, 175, 55, 0.1);
          border-radius: 192px 192px 12px 12px;
          pointer-events: none;
        }

        .arch-card:hover {
          transform: translateY(-12px);
          background: rgba(6, 78, 59, 0.4);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }

        .ornament-glow {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 60%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .arch-card:hover .ornament-glow {
          opacity: 1;
        }

        .card-arabic {
          font-family: 'Amiri', serif;
          font-size: 2.5rem;
          color: #d4af37;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #ecfdf5;
          margin-bottom: 1rem;
        }

        .card-desc {
          font-size: 0.9375rem;
          line-height: 1.8;
          color: rgba(236, 253, 245, 0.7);
          margin-bottom: 2rem;
        }

        .unfold-panel {
          max-height: 0;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(212, 175, 55, 0.03);
          border-radius: 10px;
          opacity: 0;
        }

        .arch-card.active .unfold-panel {
          max-height: 250px;
          opacity: 1;
          margin-top: 1rem;
          padding: 2rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .culture-text {
          font-size: 0.875rem;
          font-style: italic;
          color: #fbbf24;
          line-height: 1.6;
        }

        .floral-corner {
          position: absolute;
          bottom: -20px;
          right: -20px;
          font-size: 5rem;
          opacity: 0.05;
          color: #d4af37;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .header-arabic { font-size: 2.5rem; }
          .arch-card { padding-top: 4rem; }
        }
      `}</style>

      <div className="imperial-seal" style={{ position: 'absolute', top: '40px', left: '40px', margin: 0, opacity: 0.3 }}>Ottoman</div>

      <header className="palace-header">
        <div className="imperial-seal">⚔️</div>
        <div className="header-arabic">الباب العالي</div>
        <div className="header-title">The Sublime Porte</div>
      </header>

      <div className="palace-grid">
        {palacePanels.map((panel) => (
          <div 
            key={panel.id} 
            className={`arch-card ${activePanel === panel.id ? 'active' : ''}`}
            onClick={() => setActivePanel(activePanel === panel.id ? null : panel.id)}
          >
            <div className="ornament-glow" />
            <div className="card-arabic">{panel.arabic}</div>
            <h2 className="card-title">{panel.title}</h2>
            <p className="card-desc">{panel.description}</p>
            
            <div className="unfold-panel">
              <p className="culture-text">“{panel.culture}”</p>
            </div>

            <div className="floral-corner">{panel.ornament}</div>

            <div style={{
              marginTop: 'auto',
              fontSize: '0.625rem',
              letterSpacing: '0.4em',
              color: 'rgba(212, 175, 55, 0.4)',
              textTransform: 'uppercase'
            }}>
              Imperial Archive • PL-0{panel.id}
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
        color: 'rgba(212, 175, 55, 0.3)',
        textAlign: 'center'
      }}>
        Majestic Artistry • PromptUI Legacy Series
      </footer>
    </div>
  );
};
