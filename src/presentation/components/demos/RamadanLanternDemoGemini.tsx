'use client';

import React, { useEffect, useState } from 'react';

/**
 * RamadanLanternDemoGemini
 * A calm and spiritual interface inspired by Ramadan lanterns (Fanous).
 * Features deep blue night gradients, golden glows, and floating light particles.
 */
export const RamadanLanternDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeLantern, setActiveLantern] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lanterns = [
    {
      id: 1,
      title: 'Night of Power',
      arabic: 'ليلة القدر',
      description: 'The holiest night of the year, better than a thousand months.',
      wisdom: 'Seek the blessings in the last ten nights with a sincere heart.',
      color: '#fbbf24'
    },
    {
      id: 2,
      title: 'The Quranic Month',
      arabic: 'شهر القرآن',
      description: 'The month in which the Quran was revealed as guidance for mankind.',
      wisdom: 'Let the words of the Divine illuminate your path and character.',
      color: '#fcd34d'
    },
    {
      id: 3,
      title: 'Sacred Fasting',
      arabic: 'الصيام',
      description: 'More than abstaining from food; it is the purification of the soul.',
      wisdom: 'True fasting is guarding the heart and tongue from all that is low.',
      color: '#fde68a'
    },
    {
      id: 4,
      title: 'Spirit of Charity',
      arabic: 'صدقة الجارية',
      description: 'Giving of oneself to help those in need, fostering unity.',
      wisdom: 'The best charity is that which is given with love and humility.',
      color: '#d4af37'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#020617' }} />;

  return (
    <div className="ramadan-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .ramadan-container {
          min-height: 100vh;
          width: 100%;
          background: radial-gradient(circle at 50% -20%, #1e293b 0%, #020617 80%);
          color: #f8fafc;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* Floating Light Particles */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(2px);
          animation: float 15s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-100px) translateX(20px); opacity: 0.7; }
        }

        .crescent-moon {
          position: absolute;
          top: 40px;
          right: 60px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          box-shadow: 15px 15px 0 0 #fde68a;
          opacity: 0.2;
          filter: blur(1px);
        }

        .site-header {
          text-align: center;
          margin-bottom: 6rem;
          z-index: 10;
        }

        .header-arabic {
          font-family: 'Amiri', serif;
          font-size: 3.5rem;
          color: #d4af37;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }

        .header-subtitle {
          font-size: 0.75rem;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: rgba(253, 230, 138, 0.4);
        }

        .lantern-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          width: 100%;
          max-width: 1200px;
          z-index: 10;
        }

        .lantern-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.1);
          border-radius: 30px 30px 100px 100px;
          padding: 3rem 2rem;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .lantern-card::before {
          content: '';
          position: absolute;
          top: -20px;
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #d4af37);
          opacity: 0.3;
        }

        .lantern-card:hover {
          transform: translateY(-10px);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.1);
        }

        .lantern-glow {
          position: absolute;
          bottom: 10%;
          width: 60%;
          height: 40%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          filter: blur(20px);
          transition: all 0.5s ease;
          opacity: 0.5;
        }

        .lantern-card:hover .lantern-glow {
          opacity: 1;
          transform: scale(1.2);
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
        }

        .lantern-arabic {
          font-family: 'Amiri', serif;
          font-size: 2.25rem;
          color: #fca311;
          margin-bottom: 1rem;
        }

        .lantern-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fde68a;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .lantern-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: rgba(248, 250, 252, 0.6);
          margin-bottom: 1.5rem;
        }

        .info-panel {
          max-height: 0;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          width: 100%;
        }

        .lantern-card.active .info-panel {
          max-height: 200px;
          opacity: 1;
          margin-top: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .wisdom-text {
          font-size: 0.875rem;
          font-style: italic;
          color: #d4af37;
          line-height: 1.6;
        }

        .card-pattern {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L24 16h16l-13 10 5 14-12-8-12 8 5-14L0 16h16z' fill='%23d4af37' fill-opacity='0.03'/%3E%3C/svg%3E");
          background-size: 80px 80px;
          opacity: 0.5;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        @media (max-width: 768px) {
          .crescent-moon { right: 20px; top: 20px; }
          .header-arabic { font-size: 2.5rem; }
        }
      `}</style>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }} 
          />
        ))}
      </div>

      <div className="crescent-moon" />

      <header className="site-header">
        <div className="header-arabic">رمضان كريم</div>
        <div className="header-subtitle">Peaceful Illumination</div>
      </header>

      <div className="lantern-grid">
        {lanterns.map((lantern) => (
          <div 
            key={lantern.id} 
            className={`lantern-card ${activeLantern === lantern.id ? 'active' : ''}`}
            onClick={() => setActiveLantern(activeLantern === lantern.id ? null : lantern.id)}
          >
            <div className="card-pattern" />
            <div className="lantern-glow" style={{ background: `radial-gradient(circle, ${lantern.color}33 0%, transparent 70%)` }} />
            
            <div className="lantern-arabic">{lantern.arabic}</div>
            <h2 className="lantern-title">{lantern.title}</h2>
            <p className="lantern-desc">{lantern.description}</p>
            
            <div className="info-panel">
              <p className="wisdom-text">“{lantern.wisdom}”</p>
            </div>

            <div style={{
              marginTop: 'auto',
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              color: 'rgba(212, 175, 55, 0.4)',
              textTransform: 'uppercase'
            }}>
              Sacred Reflection 0{lantern.id}
            </div>
          </div>
        ))}
      </div>

      <footer style={{
        marginTop: '6rem',
        zIndex: 10,
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.6em',
        color: 'rgba(212, 175, 55, 0.3)',
        textAlign: 'center'
      }}>
        Blessed Month • PromptUI Spiritual Series
      </footer>
    </div>
  );
};
