'use client';

import React, { useState } from 'react';

// Cinematic Product Launch - Gemini 3.1 Pro Implementation
// Pure CSS styling, Apple keynote meets IPO launch vibe.

interface LaunchProduct {
  id: string;
  category: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  isFeatured?: boolean;
}

const CATEGORIES = ['ALL RELEASES', 'VISION', 'COMPUTE', 'AUDIO', 'MOBILITY'];

const PRODUCTS: LaunchProduct[] = [
  {
    id: 'prd-01',
    category: 'VISION',
    name: 'AURA PRO',
    tagline: 'SEE THE UNSEEN.',
    price: '$3,499',
    description: 'Immersive spatial computing visor with retina-resolution micro-OLED and ultra-low latency photon tracking.',
    isFeatured: true
  },
  {
    id: 'prd-02',
    category: 'COMPUTE',
    name: 'QUANTUM X',
    tagline: 'BEYOND SILICON.',
    price: '$6,999',
    description: 'Desktop workstation powered by a localized room-temperature quantum processor and 1TB unified memory architecture.'
  },
  {
    id: 'prd-03',
    category: 'AUDIO',
    name: 'SONIC AEON',
    tagline: 'PURE SILENCE.',
    price: '$899',
    description: 'Over-ear acoustic masterpiece utilizing counter-phase sonic nullification outperforming real-world physics.',
    isFeatured: true
  },
  {
    id: 'prd-04',
    category: 'MOBILITY',
    name: 'GRAVITY S1',
    tagline: 'HOVER REIMAGINED.',
    price: '$85,000',
    description: 'The world’s first consumer-grade magnetic levitation commuter vehicle with autonomous city grid integration.'
  },
  {
    id: 'prd-05',
    category: 'VISION',
    name: 'LENS ZERO',
    tagline: 'CAPTURE REALITY.',
    price: '$2,199',
    description: 'A 200MP computational camera core fitting in the palm of your hand, defying the laws of optics with AI.'
  },
  {
    id: 'prd-06',
    category: 'COMPUTE',
    name: 'OMNI PAD',
    tagline: 'INFINITE CANVAS.',
    price: '$1,299',
    description: 'A practically bezel-less tablet composed entirely of a flexible glass-crystal lattice. 2mm thin. Edge to edge.',
    isFeatured: true
  }
];

export const CinematicProductLaunchDemoGemini: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL RELEASES');
  
  const filteredProducts = PRODUCTS.filter(product => 
    activeTab === 'ALL RELEASES' ? true : product.category === activeTab
  );

  return (
    <div className="launch-container">
      {/* Cinematic Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
      `}</style>
      
      {/* Central Spotlight Effect */}
      <div className="cinematic-spotlight"></div>

      <div className="launch-wrapper">
        
        {/* Header Section */}
        <header className="launch-header">
          <div className="header-meta">
            <span className="brand-dot"></span>
            <span className="event-label">SPECIAL EVENT KEYNOTE</span>
          </div>
          
          <h1 className="launch-title">Pro. <span className="metallic-gold-text">Beyond.</span></h1>
          
          <div className="header-tabs-and-counter">
            <nav className="launch-tab-nav">
              {CATEGORIES.map(tab => (
                <button
                  key={tab}
                  className={`launch-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
            
            <div className="launch-counter-badge">
              <span className="counter-num">{filteredProducts.length.toString().padStart(2, '0')}</span>
              <span className="counter-text">RELEASES</span>
            </div>
          </div>
        </header>

        {/* 3-Column Grid System */}
        <div className="launch-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="launch-card">
              
              {/* Product Spotlight Glow internally */}
              <div className="card-spotlight"></div>

              {/* Refined Featured Ribbon */}
              {product.isFeatured && (
                <div className="featured-ribbon">
                  FLAGSHIP
                </div>
              )}

              <div className="card-content">
                <div className="card-top">
                  <span className="product-category">{product.category}</span>
                  <div className="card-divider-top"></div>
                </div>

                <div className="card-middle">
                  <h2 className="product-name">{product.name}</h2>
                  <h3 className="product-tagline">{product.tagline}</h3>
                  <p className="product-desc">{product.description}</p>
                </div>

                <div className="card-bottom">
                  <div className="product-price">{product.price}</div>
                  <button className="preorder-btn">PRE-ORDER</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          /* Cinematic Colors */
          --c-bg-jet: #000000;
          --c-bg-panel: #0a0a0b;
          
          /* Metallic Gold Gradient */
          --c-gold-light: #FBF5B7;
          --c-gold-main: #BF953F;
          --c-gold-dark: #AA771C;
          --c-gold-gradient: linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%);
          
          /* Text */
          --c-text-pure: #FFFFFF;
          --c-text-muted: #88888D;
          --c-text-dark: #1D1D1F;
          
          /* Typography */
          --c-font-main: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          
          /* Structure */
          --c-radius: 8px; /* Refined minimal radius */
        }

        .launch-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--c-bg-jet);
          color: var(--c-text-pure);
          font-family: var(--c-font-main);
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }

        /* Ambient Center Spotlight */
        .cinematic-spotlight {
          position: fixed;
          top: -20vh;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          height: 80vh;
          background: radial-gradient(ellipse at top, rgba(191, 149, 63, 0.15) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .launch-wrapper {
          max-width: 1200px; /* Tighter layout for elegant feel */
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header Layout */
        .launch-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .header-meta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
          padding: 8px 16px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .brand-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--c-gold-main);
          box-shadow: 0 0 10px var(--c-gold-light);
        }

        .event-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--c-text-muted);
        }

        .launch-title {
          font-size: 5.5rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 4rem 0;
        }

        .metallic-gold-text {
          background: var(--c-gold-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: metallicShine 4s linear infinite;
        }

        @keyframes metallicShine {
          to { background-position: 200% center; }
        }

        .header-tabs-and-counter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 1rem;
        }

        /* Navigation */
        .launch-tab-nav {
          display: flex;
          gap: 2rem;
        }

        .launch-tab {
          background: transparent;
          border: none;
          color: var(--c-text-muted);
          font-family: var(--c-font-main);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
          padding: 0;
        }

        .launch-tab:hover {
          color: var(--c-text-pure);
        }

        .launch-tab.active {
          color: var(--c-text-pure);
        }

        .launch-tab::after {
          content: '';
          position: absolute;
          bottom: -17px; /* Align with border-bottom of container */
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--c-gold-gradient);
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          transform-origin: center;
        }

        .launch-tab.active::after {
          transform: scaleX(1);
        }

        /* Large Elegant Counter */
        .launch-counter-badge {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .counter-num {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: -0.05em;
          color: var(--c-gold-main);
          line-height: 1;
        }

        .counter-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--c-text-muted);
        }

        /* 3-Column Grid */
        .launch-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }

        @media (min-width: 768px) {
          .launch-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .launch-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Spotlight Cards */
        .launch-card {
          position: relative;
          background: var(--c-bg-panel);
          border-radius: var(--c-radius);
          min-height: 480px;
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
        }

        .launch-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(191, 149, 63, 0.3);
        }

        /* Internal Glow Effect */
        .card-spotlight {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 200px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .launch-card:hover .card-spotlight {
          background: radial-gradient(ellipse, rgba(191, 149, 63, 0.1) 0%, transparent 70%);
        }

        /* Featured Ribbon */
        .featured-ribbon {
          position: absolute;
          top: 1.5rem;
          right: -2rem;
          background: var(--c-gold-gradient);
          color: var(--c-text-dark);
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          padding: 6px 30px;
          transform: rotate(45deg);
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          z-index: 10;
        }

        /* Card Content Inner structure */
        .card-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 2;
        }

        .card-top {
          margin-bottom: 2rem;
        }

        .product-category {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--c-text-muted);
        }

        .card-divider-top {
          width: 1.5rem;
          height: 2px;
          background: var(--c-gold-main);
          margin-top: 10px;
          transition: width 0.3s ease;
        }

        .launch-card:hover .card-divider-top {
          width: 3rem;
        }

        .card-middle {
          flex-grow: 1;
        }

        .product-name {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin: 0 0 0.5rem 0;
          color: var(--c-text-pure);
        }

        .product-tagline {
          font-size: 1rem;
          font-weight: 400;
          color: var(--c-gold-main);
          margin: 0 0 1.5rem 0;
        }

        .product-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--c-text-muted);
          margin: 0;
          font-weight: 300;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .product-price {
          font-size: 1.25rem;
          font-weight: 400;
          color: var(--c-text-pure);
        }

        .preorder-btn {
          background: var(--c-text-pure);
          color: var(--c-text-dark);
          border: none;
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .launch-card:hover .preorder-btn {
          background: var(--c-gold-gradient);
          color: var(--c-text-dark);
          box-shadow: 0 4px 15px rgba(191, 149, 63, 0.4);
        }

        .preorder-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default CinematicProductLaunchDemoGemini;
