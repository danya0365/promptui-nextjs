'use client';

import React, { useEffect, useState } from 'react';

/**
 * IslamicKnowledgePlatformDemoGemini
 * An educational and sacred platform for Islamic knowledge.
 * Features parchment aesthetics, manuscript textures, and expandable panels.
 */
export const IslamicKnowledgePlatformDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modules = [
    {
      id: 'quran-1',
      type: 'Quran Verse',
      arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      translation: 'Indeed, with hardship [will be] ease.',
      reference: 'Surah Al-Inshirah [94:6]',
      tafsir: 'This verse provides profound comfort, emphasizing that ease is not just after hardship, but accompanies it. The repetition in the Surah reinforces the certainty of Divine relief.'
    },
    {
      id: 'hadith-1',
      type: 'Prophetic Hadith',
      arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ',
      translation: 'Actions are but by intentions.',
      reference: 'Sahih Bukhari',
      tafsir: 'One of the most fundamental principles in Islam. Every deed is judged by the sincerity of the heart behind it. It serves as a constant reminder to purify our motives.'
    },
    {
      id: 'learning-1',
      type: 'Learning Topic',
      arabic: 'الأدب قبل العلم',
      translation: 'Etiquette before Knowledge.',
      reference: 'Classic Maxim',
      tafsir: 'In the Islamic tradition, character and manners (Adab) are considered the vessel for knowledge. Without proper etiquette, knowledge lacks its true fruit and blessing.'
    }
  ];

  if (!mounted) return <div style={{ minHeight: '100vh', background: '#f4ecd8' }} />;

  return (
    <div className="platform-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Lateef&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .platform-container {
          min-height: 100vh;
          width: 100%;
          background-color: #f4ecd8;
          background-image: 
            url("https://www.transparenttextures.com/patterns/parchment.png"),
            radial-gradient(circle at center, transparent 0%, rgba(6, 78, 59, 0.05) 100%);
          color: #1a2e25;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .manuscript-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
        }

        .calligraphy-title {
          font-family: 'Amiri', serif;
          font-size: 4rem;
          color: #064e3b;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 1rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #8b6e31;
          font-weight: 500;
        }

        .decorative-divider {
          width: 200px;
          height: 40px;
          margin: 1rem auto;
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='40' viewBox='0 0 200 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q50 0 100 20 T200 20' fill='none' stroke='%23d4af37' stroke-width='1'/%3E%3Ccircle cx='100' cy='20' r='3' fill='%23064e3b'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
        }

        .modules-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 800px;
          width: 100%;
        }

        .knowledge-card {
          background: #fffdf9;
          border: 1px solid #e2d1a8;
          padding: 3rem;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
          border-radius: 4px;
        }

        .knowledge-card::after {
          content: '';
          position: absolute;
          top: 10px; left: 10px; right: 10px; bottom: 10px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          pointer-events: none;
        }

        .corner-ornament {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid #d4af37;
          pointer-events: none;
        }

        .tl { top: 0; left: 0; border-right: none; border-bottom: none; }
        .tr { top: 0; right: 0; border-left: none; border-bottom: none; }
        .bl { bottom: 0; left: 0; border-right: none; border-top: none; }
        .br { bottom: 0; right: 0; border-left: none; border-top: none; }

        .type-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #d4af37;
          margin-bottom: 2rem;
          display: block;
          font-weight: 700;
        }

        .arabic-text {
          font-family: 'Lateef', cursive;
          font-size: 3.5rem;
          color: #064e3b;
          margin-bottom: 1.5rem;
          line-height: 1.4;
          text-align: center;
        }

        .translation-text {
          font-style: italic;
          font-size: 1.25rem;
          color: #4a5568;
          text-align: center;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .reference-text {
          font-size: 0.875rem;
          color: #8b6e31;
          text-align: center;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s;
        }

        .reference-text:hover {
          color: #064e3b;
        }

        .tafsir-toggle {
          margin-top: 2rem;
          width: 100%;
          padding: 1rem;
          background: transparent;
          border-top: 1px solid #eee;
          color: #064e3b;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: background 0.3s;
        }

        .tafsir-toggle:hover {
          background: rgba(6, 78, 59, 0.02);
        }

        .tafsir-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          padding: 0 1rem;
        }

        .tafsir-content.expanded {
          max-height: 300px;
          opacity: 1;
          padding: 1.5rem 1rem;
        }

        .tafsir-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5568;
          border-left: 3px solid #d4af37;
          padding-left: 1.5rem;
        }

        .footer-note {
          margin-top: 6rem;
          text-align: center;
          font-family: 'Amiri', serif;
          font-size: 1.25rem;
          color: #8b6e31;
          opacity: 0.6;
        }
      `}</style>

      <div className="manuscript-header">
        <h1 className="calligraphy-title">مجمع المعرفة</h1>
        <p className="subtitle">Knowledge Compendium</p>
        <div className="decorative-divider" />
      </div>

      <div className="modules-grid">
        {modules.map((module) => (
          <div key={module.id} className="knowledge-card">
            <div className="corner-ornament tl" />
            <div className="corner-ornament tr" />
            <div className="corner-ornament bl" />
            <div className="corner-ornament br" />

            <span className="type-label">{module.type}</span>
            <div className="arabic-text">{module.arabic}</div>
            <p className="translation-text">"{module.translation}"</p>
            <div className="reference-text">• {module.reference} •</div>

            <button 
              className="tafsir-toggle"
              onClick={() => setExpandedId(expandedId === module.id ? null : module.id)}
            >
              {expandedId === module.id ? 'Close Insight' : 'View Scholarly Insight'}
            </button>

            <div className={`tafsir-content ${expandedId === module.id ? 'expanded' : ''}`}>
              <p className="tafsir-text">{module.tafsir}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-note">
        نور على نور
      </div>
    </div>
  );
};
