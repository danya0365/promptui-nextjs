'use client';

import React, { useState, useEffect } from 'react';

/**
 * IslamicCardDemoGemini
 * A beautiful Islamic-inspired card interface with emerald green and gold accents.
 * Inspired by mosque architecture and Islamic geometry.
 */
export const IslamicCardDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cards = [
    {
      title: 'Peace & Serenity',
      arabic: 'السكينة والوقار',
      description: 'Find peace in the remembrance of the Divine. A sanctuary for the soul in a busy world.',
      icon: '🌙'
    },
    {
      title: 'Timeless Wisdom',
      arabic: 'الحكمة الخالدة',
      description: 'Explore the profound teachings that have guided generations through light and darkness.',
      icon: '📖'
    },
    {
      title: 'Sacred Geometry',
      arabic: 'الهندسة المقدسة',
      description: 'Reflecting the infinite unity and order of the universe through balanced artistic patterns.',
      icon: '✨'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#022c22' }} />;

  return (
    <div className="islamic-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .islamic-container {
          min-height: 100vh;
          width: 100%;
          background-color: #022c22;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5.878 18.09h19.022L39.46 29.18 45.338 47.27 30 36.18 14.662 47.27 20.54 29.18 5.1 18.09h19.022L30 0z' fill='%23064e3b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
          color: #f8fafc;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .islamic-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(2, 44, 34, 0.8) 100%);
          pointer-events: none;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          z-index: 10;
          animation: fadeInDown 1s ease-out;
        }

        .arabic-title {
          font-family: 'Amiri', serif;
          font-size: 3.5rem;
          color: #d4af37;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .english-title {
          font-size: 1.25rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a7f3d0;
          opacity: 0.8;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          width: 100%;
          z-index: 10;
        }

        .card {
          background: rgba(6, 78, 59, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.1);
        }

        .card:hover::before {
          opacity: 1;
        }

        .card-ornament {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          transition: all 0.5s ease;
        }

        .ornament-tl { top: 12px; left: 12px; border-right: none; border-bottom: none; border-top-left-radius: 8px; }
        .ornament-tr { top: 12px; right: 12px; border-left: none; border-bottom: none; border-top-right-radius: 8px; }
        .ornament-bl { bottom: 12px; left: 12px; border-right: none; border-top: none; border-bottom-left-radius: 8px; }
        .ornament-br { bottom: 12px; right: 12px; border-left: none; border-top: none; border-bottom-right-radius: 8px; }

        .card:hover .card-ornament {
          border-color: rgba(212, 175, 55, 0.8);
          width: 50px;
          height: 50px;
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.2));
        }

        .card-arabic {
          font-family: 'Amiri', serif;
          font-size: 1.75rem;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #a7f3d0;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .card:hover .card-description {
          opacity: 1;
        }

        .gold-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          margin: 1.5rem 0;
        }

        .expand-panel {
          margin-top: 1.5rem;
          font-size: 0.875rem;
          color: #d4af37;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
        }

        .card:hover .expand-panel {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .arabic-title { font-size: 2.5rem; }
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="header">
        <h1 className="arabic-title">الهدوء الروحي</h1>
        <p className="english-title">Spiritual Tranquility</p>
      </header>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="card"
            onClick={() => setActiveCard(activeCard === index ? null : index)}
          >
            <div className="card-ornament ornament-tl" />
            <div className="card-ornament ornament-tr" />
            <div className="card-ornament ornament-bl" />
            <div className="card-ornament ornament-br" />
            
            <div className="card-icon">{card.icon}</div>
            <div className="card-arabic">{card.arabic}</div>
            <div className="card-title">{card.title}</div>
            <div className="gold-line" />
            <p className="card-description">{card.description}</p>
            
            <div className="expand-panel">Learn More</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.3em',
        fontSize: '0.75rem',
        color: 'rgba(212, 175, 55, 0.4)',
        zIndex: 10
      }}>
        Islamic Design System • PromptUI Premium
      </div>
    </div>
  );
};
