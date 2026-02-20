'use client';

import React, { useState } from 'react';

// Claymorphism Web Directory Layout - Gemini 3.1 Pro Implementation
// Pure CSS styling focusing on soft 3D, pastel colors, and friendly modern aesthetics.

interface AppItem {
  id: string;
  category: string;
  name: string;
  author: string;
  description: string;
  rating: number;
  featured?: boolean;
  themeColor: string;
  iconSrc?: string;
}

const CATEGORIES = ['All Apps', 'Productivity', 'Creativity', 'Wellness'];

const ITEMS: AppItem[] = [
  {
    id: 'clay-001',
    category: 'Productivity',
    name: 'JellyTask',
    author: 'Squishy Media',
    description: 'A deeply satisfying to-do list that lets you pop tasks like bubble wrap when completed. Syncs across all of your soft devices.',
    rating: 4.9,
    featured: true,
    themeColor: '#FFB5E8' // Pastel Pink
  },
  {
    id: 'clay-002',
    category: 'Creativity',
    name: 'CloudCanvas',
    author: 'Dreamer Co.',
    description: 'Draw with soft, fluffy brushes on infinite pastel boards. Perfect for mind mapping or just relaxing sketches.',
    rating: 4.7,
    themeColor: '#B5DEFF' // Pastel Blue
  },
  {
    id: 'clay-003',
    category: 'Wellness',
    name: 'BreatheBubble',
    author: 'ZenLabs',
    description: 'Guided breathing exercises visualized as expanding and contracting clay spheres. Helps reduce anxiety throughout your busy day.',
    rating: 4.8,
    featured: true,
    themeColor: '#C1FFD7' // Pastel Mint
  },
  {
    id: 'clay-004',
    category: 'Productivity',
    name: 'PebbleNotes',
    author: 'Rock Solid Apps',
    description: 'Stack your thoughts like small, smooth pebbles. Organize by color, shape, and size in this delightful note-taking experience.',
    rating: 4.5,
    themeColor: '#FFD1A9' // Pastel Orange
  },
  {
    id: 'clay-005',
    category: 'Creativity',
    name: 'MochiMusic',
    author: 'Sweet Sounds',
    description: 'Compose ambient tracks by squishing musical mochi blocks together. Every shape produces a different soothing synth sound.',
    rating: 4.6,
    themeColor: '#E2CAFF' // Pastel Purple
  },
  {
    id: 'clay-006',
    category: 'Wellness',
    name: 'SleepySheep',
    author: 'Dreamer Co.',
    description: 'Soft noise generator and sleep tracker built with an incredibly friendly interface. Count digital clay sheep until you drift away.',
    rating: 4.9,
    featured: true,
    themeColor: '#FFF5BA' // Pastel Yellow
  }
];

export const ClaymorphismDirectoryDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Apps');
  
  const filteredItems = ITEMS.filter(item => 
    activeTab === 'All Apps' ? true : item.category === activeTab
  );

  return (
    <div className="clay-directory-container">
      <div className="clay-content">
        
        {/* Header Section */}
        <header className="clay-header">
          <div className="brand-area">
            <div className="brand-blob">
              <span className="blob-face">^_^</span>
            </div>
            <h1 className="brand-title">Squish<span className="brand-accent">App</span></h1>
          </div>
          
          <div className="clay-counter">
            <span className="counter-number">{filteredItems.length}</span>
            <span className="counter-label">Soft Apps</span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="clay-hero">
          <h2>Find your soft spot.</h2>
          <p>Explore our curated collection of delightful, claymorphic applications designed to make your digital life softer.</p>
        </div>

        {/* Navigation Tabs */}
        <nav className="clay-nav">
          {CATEGORIES.map(tab => (
            <button
              key={tab}
              className={`clay-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* 3-Column Grid */}
        <div className="clay-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="clay-card">
              
              {/* Featured Label */}
              {item.featured && (
                <div className="clay-badge featured">Staff Pick</div>
              )}
              
              {/* Card Top: Icon & Title */}
              <div className="card-top">
                <div 
                  className="clay-icon" 
                  style={{ backgroundColor: item.themeColor }}
                >
                  <div className="icon-inner-shadow"></div>
                  <div className="icon-highlight"></div>
                </div>
                <div className="card-header-text">
                  <h3 className="app-title">{item.name}</h3>
                  <span className="app-author">by {item.author}</span>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="card-body">
                <p className="app-description">{item.description}</p>
              </div>
              
              {/* Card Bottom */}
              <div className="card-bottom">
                <div className="clay-rating">
                  <span className="star">★</span>
                  <span>{item.rating}</span>
                </div>
                <button className="clay-btn get-btn">
                  Get
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Variables for Claymorphism */
        :root {
          /* Backgrounds */
          --clay-bg-main: #F2F5F8; /* Very soft grayish blue */
          
          /* Card Colors */
          --clay-card-bg: #FFFFFF;
          
          /* Text */
          --clay-text-dark: #4A5568;
          --clay-text-muted: #A0AEC0;
          --clay-text-brand: #7F9CF5;
          
          /* Shadow Colors (The secret to claymorphism) */
          --clay-shadow-out-dark: rgba(166, 180, 200, 0.7);
          --clay-shadow-out-light: rgba(255, 255, 255, 1);
          
          --clay-shadow-in-dark: rgba(166, 180, 200, 0.4);
          --clay-shadow-in-light: rgba(255, 255, 255, 0.9);
          
          /* Shapes */
          --clay-radius-lg: 32px;
          --clay-radius-md: 24px;
          --clay-radius-sm: 16px;
          --clay-radius-pill: 100px;
          
          /* Typography */
          --font-friendly: 'Nunito', 'Quicksand', 'Baloo 2', system-ui, sans-serif;
        }

        /* Container */
        .clay-directory-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--clay-bg-main);
          color: var(--clay-text-dark);
          font-family: var(--font-friendly);
          padding: 3rem 1.5rem;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .clay-content {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Clay Header */
        .clay-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .brand-area {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .brand-blob {
          width: 48px;
          height: 48px;
          background-color: #A3BFFA;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            6px 6px 12px var(--clay-shadow-out-dark),
            -6px -6px 12px var(--clay-shadow-out-light),
            inset 4px 4px 8px rgba(255,255,255,0.6),
            inset -4px -4px 8px rgba(0,0,0,0.1);
          animation: morph 8s ease-in-out infinite;
        }

        @keyframes morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }

        .blob-face {
          font-weight: 700;
          color: #4C51BF;
          font-size: 0.9rem;
        }

        .brand-title {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
          color: var(--clay-text-dark);
          letter-spacing: -0.02em;
        }

        .brand-accent {
          color: var(--clay-text-brand);
        }

        /* Clay Counter Badge */
        .clay-counter {
          background: var(--clay-bg-main);
          padding: 0.75rem 1.5rem;
          border-radius: var(--clay-radius-pill);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 
            8px 8px 16px var(--clay-shadow-out-dark),
            -8px -8px 16px var(--clay-shadow-out-light);
        }

        .counter-number {
          background: var(--clay-text-brand);
          color: white;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: 800;
          font-size: 0.85rem;
          box-shadow: inset 2px 2px 4px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.1);
        }

        .counter-label {
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Hero Text */
        .clay-hero {
          text-align: center;
          margin-bottom: 3.5rem;
          padding: 0 1rem;
        }

        .clay-hero h2 {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          color: var(--clay-text-dark);
          letter-spacing: -0.03em;
        }

        .clay-hero p {
          font-size: 1.15rem;
          color: var(--clay-text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 500;
        }

        /* Clay Tabs */
        .clay-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 4rem;
        }

        .clay-tab {
          background: var(--clay-bg-main);
          border: none;
          padding: 0.8rem 1.6rem;
          border-radius: var(--clay-radius-pill);
          font-family: inherit;
          font-size: 1rem;
          font-weight: 700;
          color: var(--clay-text-muted);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 
            6px 6px 12px var(--clay-shadow-out-dark),
            -6px -6px 12px var(--clay-shadow-out-light);
        }

        .clay-tab:active {
          box-shadow: 
            inset 4px 4px 8px var(--clay-shadow-in-dark),
            inset -4px -4px 8px var(--clay-shadow-in-light);
          color: var(--clay-text-brand);
        }

        .clay-tab.active {
          box-shadow: 
            inset 4px 4px 8px var(--clay-shadow-in-dark),
            inset -4px -4px 8px var(--clay-shadow-in-light);
          color: var(--clay-text-brand);
        }

        /* 3-Column Grid */
        .clay-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
          padding: 1rem; /* Space for shadows */
        }

        @media (min-width: 768px) {
          .clay-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .clay-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Clay Card */
        .clay-card {
          background: var(--clay-bg-main);
          border-radius: var(--clay-radius-lg);
          padding: 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 380px;
          box-shadow: 
            16px 16px 32px var(--clay-shadow-out-dark),
            -16px -16px 32px var(--clay-shadow-out-light);
          transition: transform 0.3s ease;
        }

        .clay-card:hover {
          transform: translateY(-5px);
        }

        /* Badge */
        .clay-badge {
          position: absolute;
          top: -12px;
          right: 24px;
          background: #FEFCBF; /* Soft Yellow */
          color: #B7791F;
          padding: 0.5rem 1rem;
          border-radius: var(--clay-radius-pill);
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 
            4px 4px 8px rgba(166, 180, 200, 0.4),
            -4px -4px 8px rgba(255, 255, 255, 1),
            inset 2px 2px 4px rgba(255,255,255,0.8);
        }

        /* Card Top Group */
        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .clay-icon {
          width: 72px;
          height: 72px;
          border-radius: var(--clay-radius-md);
          position: relative;
          flex-shrink: 0;
          box-shadow: 
            8px 8px 16px var(--clay-shadow-out-dark),
            -8px -8px 16px var(--clay-shadow-out-light);
        }

        /* The 3D embossed look inside the icon */
        .icon-inner-shadow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: 
            inset 6px 6px 10px rgba(0,0,0,0.1),
            inset -6px -6px 10px rgba(255,255,255,0.5);
        }

        /* The soft reflection on top */
        .icon-highlight {
          position: absolute;
          top: 4px;
          left: 6px;
          width: 50%;
          height: 40%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.8), transparent);
          border-radius: 50%;
          filter: blur(2px);
          transform: rotate(-15deg);
        }

        .card-header-text {
          padding-top: 0.5rem;
        }

        .app-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin: 0 0 0.25rem 0;
          color: var(--clay-text-dark);
        }

        .app-author {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--clay-text-muted);
        }

        /* Card Body */
        .card-body {
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }

        .app-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--clay-text-dark);
          margin: 0;
          font-weight: 500;
        }

        /* Card Bottom */
        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          background: rgba(255,255,255,0.4);
          padding: 1rem 1.25rem;
          border-radius: var(--clay-radius-sm);
          box-shadow: inset 2px 2px 5px rgba(166, 180, 200, 0.2), inset -2px -2px 5px rgba(255,255,255,0.8);
        }

        .clay-rating {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--clay-text-dark);
        }

        .star {
          color: #F6AD55;
          font-size: 1.2rem;
          filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.1));
        }

        .clay-btn {
          background: var(--clay-bg-main);
          border: none;
          font-family: inherit;
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--clay-text-brand);
          padding: 0.6rem 1.5rem;
          border-radius: var(--clay-radius-pill);
          cursor: pointer;
          box-shadow: 
            4px 4px 8px var(--clay-shadow-out-dark),
            -4px -4px 8px var(--clay-shadow-out-light);
          transition: all 0.2s;
        }

        .clay-btn:active {
          box-shadow: 
            inset 3px 3px 6px var(--clay-shadow-in-dark),
            inset -3px -3px 6px var(--clay-shadow-in-light);
        }
      `}</style>
    </div>
  );
};

export default ClaymorphismDirectoryDemoGemini;
