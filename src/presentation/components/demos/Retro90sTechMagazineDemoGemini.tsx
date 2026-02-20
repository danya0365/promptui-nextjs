'use client';

import React, { useState } from 'react';

export function Retro90sTechMagazineDemoGemini() {
  const [activeTab, setActiveTab] = useState('ALL ISSUES');

  const tabs = ['ALL ISSUES', 'CYBER-PUNK', 'HARDWARE', 'NET-SURFING', 'GAMES'];

  const articles = [
    {
      id: 1,
      title: 'VIRTUAL REALITY IS HERE',
      category: 'CYBER-PUNK',
      author: 'JOHNNY MNEMONIC',
      number: '01',
      featured: true,
      color: '#00FFFF',
      bgText: 'VR',
      desc: 'Plug into the matrix with the latest head-mounted displays. Are we ready to leave the physical world behind? Read our 10-page special report.'
    },
    {
      id: 2,
      title: 'PENTIUM VS 486: THE ULTIMATE SHOWDOWN',
      category: 'HARDWARE',
      author: 'SARAH CONNOR',
      number: '02',
      featured: false,
      color: '#FF00FF',
      bgText: 'CPU',
      desc: 'Is it worth upgrading your rig? We benchmark the newest silicon from Intel against the tried and true 486 DX2-66.'
    },
    {
      id: 3,
      title: 'SURFING THE WORLD WIDE WEB',
      category: 'NET-SURFING',
      author: 'ZERO COOL',
      number: '03',
      featured: true,
      color: '#39FF14',
      bgText: 'WEB',
      desc: 'Netscape Navigator 1.0 just dropped. We explore the coolest HTML pages on the information superhighway. Don\'t forget to sign the guestbooks!'
    },
    {
      id: 4,
      title: 'DOOM CLONES RATED',
      category: 'GAMES',
      author: 'JOHN CARMACK',
      number: '04',
      featured: false,
      color: '#FFFF00',
      bgText: 'FPS',
      desc: 'Everyone wants to be the next Doom. We review Marathon, Dark Forces, and Duke Nukem 3D. Which one deserves your autoexec.bat memory tweaks?'
    },
    {
      id: 5,
      title: 'BUILD YOUR OWN BBS',
      category: 'NET-SURFING',
      author: 'CEREAL KILLER',
      number: '05',
      featured: false,
      color: '#FF3366',
      bgText: 'BBS',
      desc: 'Got a 14.4k modem and a second phone line? Learn how to set up your own Bulletin Board System and become a SysOp tonight.'
    },
    {
      id: 6,
      title: 'CD-ROM REVOLUTION',
      category: 'HARDWARE',
      author: 'ACID BURN',
      number: '06',
      featured: false,
      color: '#00FFFF',
      bgText: 'CD',
      desc: '650 Megabytes of storage on a single disc! We look at the best multimedia encyclopedias, interactive movies, and point-and-click adventures.'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Chivo+Mono:ital,wght@0,400;0,700;1,400&family=Public+Sans:ital,wght@0,400;0,700;0,900;1,400&display=swap');

        .retro-mag-app {
          font-family: 'Public Sans', sans-serif;
          min-height: 100vh;
          background-color: #1a1a1a;
          /* Subtle noise texture */
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          color: #f0f0f0;
          padding: 40px 24px;
          overflow-x: hidden;
        }

        .retro-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .retro-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
          border-bottom: 8px solid #f0f0f0;
          padding-bottom: 20px;
          position: relative;
        }

        .retro-title {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.9;
          text-transform: uppercase;
          letter-spacing: -2px;
          margin: 0;
          padding: 0;
          color: #f0f0f0;
          text-shadow: 4px 4px 0px #FF00FF, -4px -4px 0px #00FFFF;
          z-index: 2;
        }

        .retro-subtitle {
          font-family: 'Chivo Mono', monospace;
          background-color: #39FF14;
          color: #1a1a1a;
          padding: 4px 12px;
          font-weight: bold;
          font-size: 1.2rem;
          margin-top: -15px;
          z-index: 3;
          transform: rotate(-2deg);
          box-shadow: 4px 4px 0px #1a1a1a;
          border: 2px solid #1a1a1a;
        }

        .retro-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-top: 40px;
          width: 100%;
        }

        .retro-tab {
          font-family: 'Chivo Mono', monospace;
          font-size: 1.1rem;
          font-weight: bold;
          padding: 8px 16px;
          background: transparent;
          color: #888;
          border: 2px solid #888;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.2s ease-out;
        }

        .retro-tab:hover {
          color: #f0f0f0;
          border-color: #f0f0f0;
          transform: translateY(-2px) scale(1.05);
        }

        .retro-tab.active {
          background: #f0f0f0;
          color: #1a1a1a;
          border-color: #f0f0f0;
          box-shadow: 4px 4px 0px #FF00FF;
        }

        .retro-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }

        .retro-card {
          position: relative;
          background: #1a1a1a;
          border: 4px solid #f0f0f0;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          overflow: hidden;
        }

        .retro-card:hover {
          transform: translate(-6px, -6px);
          box-shadow: 12px 12px 0px var(--hover-color, #39FF14);
        }

        .retro-card-bg-text {
          position: absolute;
          top: -20px;
          right: -20px;
          font-family: 'Archivo Black', sans-serif;
          font-size: 12rem;
          line-height: 1;
          color: var(--hover-color, #39FF14);
          opacity: 0.1;
          z-index: 0;
          pointer-events: none;
          transform: rotate(15deg);
        }

        .retro-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          z-index: 1;
          margin-bottom: 24px;
        }

        .retro-number {
          font-family: 'Archivo Black', sans-serif;
          font-size: 4rem;
          line-height: 0.8;
          color: transparent;
          -webkit-text-stroke: 2px #f0f0f0;
        }
        
        .retro-card:hover .retro-number {
           color: #f0f0f0;
           -webkit-text-stroke: 0;
        }

        .retro-category {
          font-family: 'Chivo Mono', monospace;
          background: var(--hover-color, #39FF14);
          color: #1a1a1a;
          padding: 4px 8px;
          font-weight: bold;
          font-size: 0.9rem;
          border: 2px solid #1a1a1a;
        }

        .retro-card-title {
          font-family: 'Public Sans', sans-serif;
          font-weight: 900;
          font-size: 2.5rem;
          line-height: 1.1;
          margin: 0 0 16px 0;
          z-index: 1;
          text-transform: uppercase;
        }

        .retro-card-desc {
          font-family: 'Public Sans', sans-serif;
          font-size: 1.1rem;
          line-height: 1.5;
          margin: 0;
          flex-grow: 1;
          z-index: 1;
        }

        .retro-card-footer {
          margin-top: 32px;
          padding-top: 16px;
          border-top: 4px solid #333;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          z-index: 1;
        }

        .retro-author-label {
          font-family: 'Chivo Mono', monospace;
          font-size: 0.8rem;
          color: #888;
          text-transform: uppercase;
        }

        .retro-author {
          font-family: 'Chivo Mono', monospace;
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--hover-color, #39FF14);
        }

        .retro-read-more {
          font-family: 'Archivo Black', sans-serif;
          font-size: 1.5rem;
          color: #f0f0f0;
        }

        .retro-featured-sticker {
          position: absolute;
          top: 20px;
          left: -15px;
          background-color: #FFFF00;
          color: #1a1a1a;
          font-family: 'Archivo Black', sans-serif;
          padding: 8px 16px;
          font-size: 1.2rem;
          transform: rotate(-10deg);
          box-shadow: 4px 4px 0px #1a1a1a;
          border: 3px solid #1a1a1a;
          z-index: 10;
        }
        
        .retro-pulse {
           animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
           0% { transform: rotate(-10deg) scale(1); }
           50% { transform: rotate(-10deg) scale(1.1); }
           100% { transform: rotate(-10deg) scale(1); }
        }

        @media (max-width: 768px) {
          .retro-grid { grid-template-columns: 1fr; }
          .retro-title { font-size: 3.5rem; }
          .retro-card { min-height: 400px; }
        }
      `}</style>

      <div className="retro-mag-app">
        <div className="retro-container">
          <header className="retro-header">
            <h1 className="retro-title">CYBER·ZINE</h1>
            <div className="retro-subtitle">ISSUE #42 // VOLUME. 199X</div>

            <div className="retro-tabs">
              {tabs.map((tab) => (
                <button 
                  key={tab} 
                  className={`retro-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  [{tab}]
                </button>
              ))}
            </div>
          </header>

          <div className="retro-grid">
            {articles.map((article) => {
               // Filter logic based on activeTab
               if (activeTab !== 'ALL ISSUES' && article.category !== activeTab) {
                 return null;
               }
               
               return (
                <article 
                  key={article.id} 
                  className="retro-card" 
                  style={{ '--hover-color': article.color } as React.CSSProperties}
                >
                  {article.featured && (
                    <div className="retro-featured-sticker retro-pulse">HOT!</div>
                  )}
                  
                  <div className="retro-card-bg-text">{article.bgText}</div>
                  
                  <div className="retro-card-top">
                    <span className="retro-number">{article.number}</span>
                    <span className="retro-category">{article.category}</span>
                  </div>
                  
                  <h2 className="retro-card-title">{article.title}</h2>
                  <p className="retro-card-desc">{article.desc}</p>
                  
                  <footer className="retro-card-footer">
                    <div>
                      <div className="retro-author-label">BY_</div>
                      <div className="retro-author">{article.author}</div>
                    </div>
                    <div className="retro-read-more">→</div>
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
