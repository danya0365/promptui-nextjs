'use client';

import React, { useState } from 'react';

// Gaming Platform Directory Interface - Gemini 3.1 Pro Implementation
// Pure CSS styling focusing on energetic, immersive, competitive aesthetics.

interface GameItem {
  id: string;
  category: string;
  title: string;
  developer: string;
  rating: number;
  players: string;
  price: string;
  tags: string[];
  featured?: boolean;
  imageColor: string;
}

const NAV_TABS = ['Discover', 'Esports', 'Indie', 'Early Access'];

const ITEMS: GameItem[] = [
  {
    id: 'game-001',
    category: 'Esports',
    title: 'Neon Strike: Tactics',
    developer: 'Rift Studios',
    rating: 4.8,
    players: '2.5M+',
    price: 'Free to Play',
    tags: ['FPS', 'Tactical', 'Hero'],
    featured: true,
    imageColor: 'linear-gradient(135deg, #FF6B6B 0%, #C0392B 100%)'
  },
  {
    id: 'game-002',
    category: 'Indie',
    title: 'Hollow Depth',
    developer: 'Void Interactive',
    rating: 4.9,
    players: '150K',
    price: '$19.99',
    tags: ['Metroidvania', 'Souls-like'],
    imageColor: 'linear-gradient(135deg, #6C3483 0%, #1A5276 100%)'
  },
  {
    id: 'game-003',
    category: 'Discover',
    title: 'Cyber Drift 2088',
    developer: 'Torque Games',
    rating: 4.5,
    players: '800K',
    price: '$49.99',
    tags: ['Racing', 'Arcade', 'Multiplayer'],
    featured: true,
    imageColor: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)'
  },
  {
    id: 'game-004',
    category: 'Esports',
    title: 'Arena of Gods',
    developer: 'Mythic',
    rating: 4.6,
    players: '1.2M',
    price: 'Free to Play',
    tags: ['MOBA', 'Strategy'],
    imageColor: 'linear-gradient(135deg, #F1C40F 0%, #D35400 100%)'
  },
  {
    id: 'game-005',
    category: 'Early Access',
    title: 'Colony Survivor',
    developer: 'NextGen Systems',
    rating: 4.3,
    players: '45K',
    price: '$24.99',
    tags: ['Sandbox', 'Survival', 'Crafting'],
    imageColor: 'linear-gradient(135deg, #27AE60 0%, #2C3E50 100%)'
  },
  {
    id: 'game-006',
    category: 'Discover',
    title: 'Stellar Command',
    developer: 'Orbit Games',
    rating: 4.7,
    players: '500K',
    price: '$39.99',
    tags: ['Sci-Fi', 'RTS', 'Space'],
    featured: true,
    imageColor: 'linear-gradient(135deg, #8E44AD 0%, #34495E 100%)'
  }
];

export const GamingPlatformDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Discover');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'Discover' ? true : item.category === activeTab
  );

  return (
    <div className="gaming-platform-container">
      {/* Background Decor */}
      <div className="ambient-bg"></div>

      <div className="directory-content">
        {/* Top Navigation */}
        <header className="platform-header">
          <div className="logo-area">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
              <path d="M21 15.9999V7.99991C21 7.22866 20.5732 6.52726 19.8944 6.18787L13.1111 2.79624C12.4172 2.44927 11.5828 2.44927 10.8889 2.79624L4.10557 6.18787C3.42678 6.52726 3 7.22866 3 7.99991V15.9999C3 16.7712 3.42678 17.4726 4.10557 17.812L10.8889 21.2036C11.5828 21.5506 12.4172 21.5506 13.1111 21.2036L19.8944 17.812C20.5732 17.4726 21 16.7712 21 15.9999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12L20.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12L3.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="logo-text">NEXUS<span className="logo-accent">PLAY</span></h1>
          </div>
          
          <nav className="header-nav">
            {NAV_TABS.map(tab => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          <div className="user-actions">
            <div className="counter-badge">
              <span className="live-dot"></span>
              {filteredItems.length} <span className="counter-label">Games</span>
            </div>
            <button className="sign-in-btn">Play Now</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <h2 className="hero-title">Level Up Your Library</h2>
          <p className="hero-subtitle">Discover the most played games across the multiverse.</p>
        </section>

        {/* Game Grid */}
        <div className="game-grid">
          {filteredItems.map(item => (
            <article key={item.id} className="game-card">
              {/* Image Placeholder area */}
              <div 
                className="card-thumbnail" 
                style={{ background: item.imageColor }}
              >
                {item.featured && (
                  <div className="featured-glow-tag">Top Tier</div>
                )}
                
                <div className="hover-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>

              {/* Card Meta */}
              <div className="card-info">
                <div className="card-info-top">
                  <div className="dev-name">{item.developer}</div>
                  <div className="rating">
                    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    {item.rating}
                  </div>
                </div>

                <h3 className="game-title">{item.title}</h3>
                
                <div className="tags-list">
                  {item.tags.map(tag => (
                    <span key={tag} className="game-tag">{tag}</span>
                  ))}
                </div>

                <div className="card-info-bottom">
                  <span className="player-count">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    {item.players} Configs
                  </span>
                  <span className="game-price">{item.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* Setup & Variables */
        :root {
          --gp-bg-dark: #121418;
          --gp-bg-surface: #1E2128;
          --gp-bg-surface-hover: #262A33;
          --gp-accent: #00FF66; /* Neon Green */
          --gp-accent-hover: #00E65C;
          --gp-text-main: #FFFFFF;
          --gp-text-muted: #9CA3AF;
          --gp-divider: rgba(255, 255, 255, 0.08);
          --gp-radius-card: 10px;
          --gp-font-main: 'Outfit', 'Inter', system-ui, sans-serif;
          --gp-font-heading: 'Rajdhani', 'Syncopate', 'Oswald', sans-serif;
        }

        .gaming-platform-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--gp-bg-dark);
          color: var(--gp-text-main);
          font-family: var(--gp-font-main);
          position: relative;
          overflow-x: hidden;
          padding: 2rem 1.5rem;
          box-sizing: border-box;
        }

        .ambient-bg {
          position: fixed;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 60vh;
          background: radial-gradient(circle, rgba(0, 255, 102, 0.05) 0%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        .directory-content {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .platform-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--gp-divider);
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--gp-text-main);
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          color: var(--gp-accent);
        }

        .logo-text {
          font-family: var(--gp-font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin: 0;
          line-height: 1;
        }

        .logo-accent {
          color: var(--gp-accent);
        }

        .header-nav {
          display: flex;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.5rem;
          border-radius: 100px;
        }

        .nav-tab {
          background: transparent;
          border: none;
          color: var(--gp-text-muted);
          font-family: var(--gp-font-main);
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-tab:hover {
          color: var(--gp-text-main);
        }

        .nav-tab.active {
          background-color: var(--gp-accent);
          color: #000;
          box-shadow: 0 0 15px rgba(0, 255, 102, 0.3);
        }

        .user-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .counter-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background-color: var(--gp-accent);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--gp-accent);
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 12px var(--gp-accent); }
          100% { transform: scale(0.9); opacity: 0.7; }
        }

        .counter-label {
          font-size: 0.8rem;
          color: var(--gp-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sign-in-btn {
          background: var(--gp-text-main);
          color: var(--gp-bg-dark);
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sign-in-btn:hover {
          background: var(--gp-accent);
          box-shadow: 0 4px 15px rgba(0, 255, 102, 0.2);
        }

        /* Hero */
        .hero-section {
          margin-bottom: 3rem;
        }

        .hero-title {
          font-family: var(--gp-font-heading);
          font-size: 3rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin: 0 0 0.5rem 0;
        }

        .hero-subtitle {
          color: var(--gp-text-muted);
          font-size: 1.1rem;
          margin: 0;
        }

        /* Grid */
        .game-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .game-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .game-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Game Card */
        .game-card {
          background: var(--gp-bg-surface);
          border-radius: var(--gp-radius-card);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.02);
        }

        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          border-color: rgba(255,255,255,0.1);
        }

        .card-thumbnail {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .featured-glow-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          color: var(--gp-accent);
          border: 1px solid var(--gp-accent);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 0 10px rgba(0, 255, 102, 0.2);
          z-index: 2;
        }

        .hover-play-btn {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .game-card:hover .hover-play-btn {
          opacity: 1;
        }

        .hover-play-btn svg {
          width: 50px;
          height: 50px;
          color: #FFF;
          filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .game-card:hover .hover-play-btn svg {
          transform: scale(1);
        }

        .card-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-info-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .dev-name {
          font-size: 0.8rem;
          color: var(--gp-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #F8BC00;
        }

        .star-icon {
          width: 14px;
          height: 14px;
        }

        .game-title {
          font-family: var(--gp-font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }

        .tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .game-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #D1D5DB;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
        }

        .card-info-bottom {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.25rem;
          border-top: 1px solid var(--gp-divider);
        }

        .player-count {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--gp-text-muted);
          font-weight: 500;
        }

        .player-count svg {
          width: 14px;
          height: 14px;
        }

        .game-price {
          font-weight: 700;
          font-size: 1rem;
          color: var(--gp-accent);
        }
      `}</style>
    </div>
  );
};

export default GamingPlatformDirectoryDemoGemini;
