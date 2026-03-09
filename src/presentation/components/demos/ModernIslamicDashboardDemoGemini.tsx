'use client';

import React, { useEffect, useState } from 'react';

/**
 * ModernIslamicDashboardDemoGemini
 * A modern Islamic digital dashboard combining spirituality and technology.
 * Features dark green base, gold accents, and geometric patterns.
 */
export const ModernIslamicDashboardDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dashboardItems = [
    {
      id: 1,
      title: 'Daily Inspiration',
      arabic: 'إلهام يومي',
      content: '“He who travels in search of knowledge, to him Allah shows the way to Paradise.”',
      wisdom: 'True intelligence is paired with humility and seeking the truth.',
      icon: '✨'
    },
    {
      id: 2,
      title: 'Prayer Insights',
      arabic: 'بصيرة الصلاة',
      content: 'Maintaining spiritual rhythm in a fast-paced digital world.',
      wisdom: 'Prostration is the highest point of existence.',
      icon: '🕌'
    },
    {
      id: 3,
      title: 'Ethical Tech',
      arabic: 'تقنية أخلاقية',
      content: 'Building interfaces that respect human attention and dignity.',
      wisdom: 'Technology is a tool; wisdom is the architect.',
      icon: '⚙️'
    },
    {
      id: 4,
      title: 'Community Heart',
      arabic: 'قلب المجتمع',
      content: 'Connecting the global Ummah through shared values and purpose.',
      wisdom: 'The best of people are those who are most beneficial to others.',
      icon: '🤝'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#064e3b' }} />;

  return (
    <div className="dashboard-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .dashboard-container {
          min-height: 100vh;
          width: 100%;
          background: #022c22;
          background-image: 
            radial-gradient(circle at 10% 10%, rgba(212, 175, 55, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 90%, rgba(212, 175, 55, 0.05) 0%, transparent 40%);
          color: #ecfdf5;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* Geometric Overlay */
        .dashboard-container::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 25h25L40 35l10 25-20-15-20 15 10-25L0 25h25z' fill='%23d4af37' fill-opacity='0.03'/%3E%3C/svg%3E");
          background-size: 120px 120px;
          pointer-events: none;
        }

        .header {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          padding-bottom: 2rem;
          z-index: 10;
        }

        .header-left h1 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #d4af37;
          margin-bottom: 0.5rem;
        }

        .header-left .tagline {
          font-size: 1.5rem;
          font-weight: 300;
          color: #ecfdf5;
        }

        .header-right {
          font-family: 'Amiri', serif;
          font-size: 2.5rem;
          color: #fef3c7;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          z-index: 10;
        }

        .modern-card {
          background: rgba(6, 78, 59, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .modern-card:hover {
          transform: translateY(-8px);
          background: rgba(6, 78, 59, 0.5);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .card-icon {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .card-arabic {
          font-family: 'Amiri', serif;
          font-size: 1.5rem;
          color: #d4af37;
          margin-bottom: 0.5rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ecfdf5;
          margin-bottom: 1rem;
        }

        .card-content {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #a7f3d0;
          opacity: 0.8;
          margin-bottom: 1.5rem;
        }

        .wisdom-quote {
          font-size: 0.875rem;
          font-style: italic;
          color: #fbbf24;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          border-left: 2px solid #d4af37;
          padding-left: 1rem;
        }

        .modern-card:hover .wisdom-quote {
          opacity: 1;
          transform: translateY(0);
        }

        .expanded-content {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          font-size: 0.875rem;
          color: #6ee7b7;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .modern-card.expanded .expanded-content {
          max-height: 200px;
        }

        .card-footer {
          margin-top: auto;
          font-size: 0.75rem;
          color: #064e3b;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .header-right { font-size: 2rem; }
        }
      `}</style>

      <header className="header">
        <div className="header-left">
          <h1>Digital Sanctuary</h1>
          <div className="tagline">Faith-Driven Intelligence</div>
        </div>
        <div className="header-right">بسم الله الرحمن الرحيم</div>
      </header>

      <div className="dashboard-grid">
        {dashboardItems.map((item) => (
          <div 
            key={item.id} 
            className={`modern-card ${expandedId === item.id ? 'expanded' : ''}`}
            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
          >
            <div className="card-icon">{item.icon}</div>
            <div className="card-arabic">{item.arabic}</div>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-content">{item.content}</p>
            <div className="wisdom-quote">{item.wisdom}</div>
            
            <div className="expanded-content">
              Reflect on how these principles can be applied to your modern life. 
              {item.id === 1 && " Knowledge is the light that guides us through complexity."}
              {item.id === 2 && " Balance is the key to spiritual and mental health."}
              {item.id === 3 && " Design for humanity, build for eternity."}
              {item.id === 4 && " We are stronger together in shared purpose."}
            </div>

            <div className="card-footer">
              Insight 0{item.id}_Reflect
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '6rem',
        zIndex: 10,
        fontSize: '0.625rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5em',
        color: 'rgba(212, 175, 55, 0.3)'
      }}>
        Islamic Modern Tech • PromptUI Synergy
      </div>
    </div>
  );
};
