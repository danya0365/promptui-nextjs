'use client';

import React, { useEffect, useState } from 'react';

/**
 * IslamicNightDemoGemini
 * A calm and spiritual nighttime interface inspired by mosque courtyards.
 * Features midnight blue tones, moonlight glow, and silver accents.
 */
export const IslamicNightDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    {
      title: 'Midnight Reflection',
      arabic: 'تأملات ليلية',
      description: 'The quiet of the night is a gift for the seeking heart. Embrace the silence.',
      icon: '🌙'
    },
    {
      title: 'Starlit Guidance',
      arabic: 'هداية النجوم',
      description: 'Just as stars guide travelers, may wisdom guide your inner journey.',
      icon: '✨'
    },
    {
      title: 'Lunar Serenity',
      arabic: 'سكون القمر',
      description: 'Reflecting the light of the Divine even in the deepest darkness.',
      icon: '🌑'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#020617' }} />;

  return (
    <div className="night-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .night-container {
          min-height: 100vh;
          width: 100%;
          background: #020617;
          background-image: 
            radial-gradient(circle at 50% -20%, #1e293b 0%, transparent 50%),
            radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.05) 0%, transparent 10%);
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

        /* Stars */
        .night-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background-image: radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.5), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 80px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 110px 40px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.3;
          animation: slowRotate 240s linear infinite;
        }

        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Mosque Silhouette */
        .horizon {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30vh;
          background: linear-gradient(to top, #020617 20%, transparent 100%);
          z-index: 1;
        }

        .mosque-silhouette {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1200px;
          height: 150px;
          opacity: 0.2;
          background-image: url("data:image/svg+xml,%3Csvg width='1200' height='150' viewBox='0 0 1200 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 150 L1200 150 L1200 130 Q1150 130 1100 100 T1000 130 Q950 130 900 60 T800 130 Q750 130 700 20 T600 130 Q550 130 500 40 T400 130 Q350 130 300 80 T200 130 L0 130 Z' fill='%2394a3b8'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          pointer-events: none;
        }

        .header {
          text-align: center;
          margin-bottom: 5rem;
          z-index: 10;
          animation: fadeIn 2s ease-out;
        }

        .arabic-title {
          font-family: 'Amiri', serif;
          font-size: 4rem;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 20px rgba(226, 232, 240, 0.3);
        }

        .english-title {
          font-size: 0.875rem;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 300;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3rem;
          max-width: 1200px;
          width: 100%;
          z-index: 10;
        }

        .night-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 32px;
          padding: 3.5rem 2.5rem;
          position: relative;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }

        .night-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(148, 163, 184, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .night-card:hover {
          transform: translateY(-20px) scale(1.02);
          border-color: rgba(148, 163, 184, 0.4);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(148, 163, 184, 0.1);
        }

        .night-card:hover::before {
          opacity: 1;
        }

        .card-icon {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          filter: drop-shadow(0 0 15px rgba(148, 163, 184, 0.3));
          transition: transform 0.6s ease;
        }

        .night-card:hover .card-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .card-arabic {
          font-family: 'Amiri', serif;
          font-size: 2rem;
          color: #f1f5f9;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #94a3b8;
          transition: color 0.4s;
        }

        .night-card:hover .card-description {
          color: #e2e8f0;
        }

        .moon-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(148, 163, 184, 0.05) 0%, transparent 70%);
          top: -150px;
          right: -150px;
          pointer-events: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .arabic-title { font-size: 2.5rem; }
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="horizon" />
      <div className="mosque-silhouette" />

      <header className="header">
        <h1 className="arabic-title">الهدوء والسكينة</h1>
        <p className="english-title">Serene Nightfall</p>
      </header>

      <div className="cards-grid">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="night-card"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.style.setProperty('--x', `${x}%`);
              e.currentTarget.style.setProperty('--y', `${y}%`);
            }}
          >
            <div className="moon-glow" />
            <div className="card-icon">{item.icon}</div>
            <div className="card-arabic">{item.arabic}</div>
            <div className="card-title">{item.title}</div>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '6rem',
        zIndex: 10,
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.4em',
        color: 'rgba(148, 163, 184, 0.4)'
      }}>
        Spiritual Night Experience • PromptUI Premium
      </div>
    </div>
  );
};
