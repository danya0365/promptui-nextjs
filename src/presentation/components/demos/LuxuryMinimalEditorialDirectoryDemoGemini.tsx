'use client';

import { useState } from 'react';

export function LuxuryMinimalEditorialDirectoryDemoGemini() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Architecture', 'Interior', 'Lifestyle'];

  const articles = [
    {
      id: 1,
      title: 'The Silent Space',
      category: 'Architecture',
      author: 'Eleanor Vance',
      number: '01',
      featured: true,
      desc: 'Exploring minimalism in modern Scandinavian residential design. How absence of clutter brings presence of mind.'
    },
    {
      id: 2,
      title: 'Tactile Warmth',
      category: 'Interior',
      author: 'Julian Thorne',
      number: '02',
      featured: false,
      desc: 'Integrating organic textures and muted palettes to create inviting, serene living environments.'
    },
    {
      id: 3,
      title: 'Unrushed Evenings',
      category: 'Lifestyle',
      author: 'Sophia Chen',
      number: '03',
      featured: true,
      desc: 'The art of slow living and creating rituals that ground us in our daily routines.'
    },
    {
      id: 4,
      title: 'Earthen Form',
      category: 'Interior',
      author: 'Mateo Rossi',
      number: '04',
      featured: false,
      desc: 'A look into the revival of traditional ceramics and the artisans bringing them back to modern spaces.'
    },
    {
      id: 5,
      title: 'Light & Shadow',
      category: 'Architecture',
      author: 'Arthur Pendelton',
      number: '05',
      featured: false,
      desc: 'How natural light defines interior spaces and dictates the emotional response of an architecture.'
    },
    {
      id: 6,
      title: 'Curated Simplicity',
      category: 'Lifestyle',
      author: 'Isabella Croft',
      number: '06',
      featured: false,
      desc: 'Selecting meaningful objects over abundance. A guide to thoughtful curation.'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap');

        .luxury-dir-app {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          background-color: #FDFBF7;
          color: #2C2C2C;
          padding: 80px 24px;
          -webkit-font-smoothing: antialiased;
        }

        .luxury-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .luxury-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 80px;
          text-align: center;
        }

        .luxury-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }

        .luxury-subtitle {
          font-weight: 300;
          font-size: 1.1rem;
          color: #737373;
          max-width: 600px;
          line-height: 1.6;
          margin: 0;
        }

        .luxury-tabs {
          display: flex;
          gap: 32px;
          margin-top: 48px;
          border-bottom: 1px solid #EAE6DF;
          width: 100%;
          justify-content: center;
          padding-bottom: 16px;
        }

        .luxury-tab {
          font-size: 0.9rem;
          font-weight: 400;
          color: #8C8C8C;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
          background: none;
          border: none;
          padding: 0;
        }

        .luxury-tab:hover {
          color: #2C2C2C;
        }

        .luxury-tab.active {
          color: #2C2C2C;
        }

        .luxury-tab.active::after {
          content: '';
          position: absolute;
          bottom: -17px;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #2C2C2C;
        }

        .luxury-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 48px 32px;
        }

        .luxury-card {
          background-color: #FFFFFF;
          border-radius: 8px;
          padding: 40px;
          height: 520px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          cursor: pointer;
          border: 1px solid #F5F3EF;
        }

        .luxury-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }

        .luxury-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 48px;
        }

        .luxury-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-style: italic;
          color: #BFA573;
          opacity: 0.8;
        }

        .luxury-featured {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #BFA573;
          background-color: rgba(191, 165, 115, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .luxury-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #8C8C8C;
          margin-bottom: 16px;
        }

        .luxury-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.25rem;
          font-weight: 400;
          line-height: 1.2;
          color: #1a1a1a;
          margin: 0 0 24px 0;
        }

        .luxury-card-desc {
          font-size: 0.95rem;
          font-weight: 300;
          color: #595959;
          line-height: 1.7;
          flex-grow: 1;
        }

        .luxury-card-footer {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid #F5F3EF;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .luxury-author {
          font-size: 0.85rem;
          color: #8C8C8C;
        }

        .luxury-author span {
          color: #2C2C2C;
          font-weight: 500;
        }

        .luxury-read-more {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2C2C2C;
          transition: gap 0.3s ease;
        }

        .luxury-card:hover .luxury-read-more {
          gap: 12px;
        }

        @media (max-width: 768px) {
          .luxury-dir-app {
            padding: 40px 16px;
          }
          .luxury-header {
            margin-bottom: 48px;
          }
          .luxury-grid {
            grid-template-columns: 1fr;
          }
          .luxury-card {
            height: auto;
            min-height: 480px;
          }
          .luxury-tabs {
            overflow-x: auto;
            justify-content: flex-start;
          }
          .luxury-tab {
            white-space: nowrap;
          }
        }
      `}</style>

      <div className="luxury-dir-app">
        <div className="luxury-container">
          <header className="luxury-header">
            <h1 className="luxury-title">The Curated Journal</h1>
            <p className="luxury-subtitle">
              A collection of thought pieces on architecture, interior design, and the art of living well.
            </p>

            <div className="luxury-tabs">
              {tabs.map((tab) => (
                <button 
                  key={tab} 
                  className={`luxury-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </header>

          <div className="luxury-grid">
            {articles.map((article) => {
              // Filter logic based on activeTab
              if (activeTab !== 'All' && article.category !== activeTab) {
                return null;
              }
               
              return (
                <article key={article.id} className="luxury-card">
                  <div className="luxury-card-top">
                    <span className="luxury-number">{article.number}</span>
                    {article.featured && (
                      <span className="luxury-featured">Featured</span>
                    )}
                  </div>
                  
                  <div className="luxury-category">{article.category}</div>
                  <h2 className="luxury-card-title">{article.title}</h2>
                  <p className="luxury-card-desc">{article.desc}</p>
                  
                  <footer className="luxury-card-footer">
                    <div className="luxury-author">
                      By <span>{article.author}</span>
                    </div>
                    <div className="luxury-read-more">
                      Read <span>→</span>
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
