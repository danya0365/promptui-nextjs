'use client';

import { useState } from 'react';

export function FuturisticGlassmorphismDirectoryDemoGemini() {
  const [activeTab, setActiveTab] = useState('All Templates');

  const tabs = ['All Templates', 'Web Apps', 'Dashboards', 'Mobile UI', 'Landing Pages'];

  const directories = [
    {
      id: 1,
      name: 'OmniDash Platform',
      category: 'Web Apps',
      desc: 'Next-generation analytics dashboard with real-time 3D data visualization and AI insights.',
      featured: true,
      downloads: '12.4k'
    },
    {
      id: 2,
      name: 'Aether Finance',
      category: 'Dashboards',
      desc: 'Premium banking interface featuring smart transaction categorization and crypto tracking.',
      featured: false,
      downloads: '8.2k'
    },
    {
      id: 3,
      name: 'Lumina Flow',
      category: 'Landing Pages',
      desc: 'High-converting SaaS landing page with scroll-triggered animations and glassmorphism cards.',
      featured: true,
      downloads: '45.1k'
    },
    {
      id: 4,
      name: 'Zenith Space',
      category: 'Web Apps',
      desc: 'Collaborative workspace environment with integrated video calls and real-time document editing.',
      featured: false,
      downloads: '3.8k'
    },
    {
      id: 5,
      name: 'Nova Wallet',
      category: 'Mobile UI',
      desc: 'Sleek dark-mode crypto wallet app design with smooth micro-interactions and security features.',
      featured: true,
      downloads: '19.6k'
    },
    {
      id: 6,
      name: 'Prism Analytics',
      category: 'Dashboards',
      desc: 'Data visualization tool focusing on vibrant color schemes and intuitive user flows.',
      featured: false,
      downloads: '6.1k'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');

        .glass-dir-app {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #2e1065 100%);
          color: #f8fafc;
          padding: 40px 24px;
          position: relative;
          overflow: hidden;
        }

        /* Abstract glowing background shapes */
        .glass-dir-bg-glow1 {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          filter: blur(60px);
          z-index: 0;
          pointer-events: none;
        }

        .glass-dir-bg-glow2 {
          position: absolute;
          bottom: -150px;
          right: -50px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          pointer-events: none;
        }

        .glass-dir-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .glass-dir-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
          text-align: center;
        }

        .glass-dir-title {
          font-size: 42px;
          font-weight: 300;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          background: linear-gradient(to right, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-dir-subtitle {
          font-size: 16px;
          color: #94a3b8;
          font-weight: 300;
          max-width: 500px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .glass-dir-tabs {
          display: flex;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 8px;
          border-radius: 100px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          overflow-x: auto;
          max-width: 100%;
        }

        .glass-dir-tabs::-webkit-scrollbar {
          display: none;
        }

        .glass-dir-tab {
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 400;
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          white-space: nowrap;
        }

        .glass-dir-tab:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .glass-dir-tab.active {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-dir-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }

        .glass-dir-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px;
          height: 380px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          overflow: hidden;
        }

        .glass-dir-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          opacity: 0.5;
        }

        .glass-dir-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(139, 92, 246, 0.15);
        }

        .glass-dir-featured-tag {
          position: absolute;
          top: 24px;
          right: 24px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2));
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #d8b4fe;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 100px;
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.1);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .glass-dir-featured-tag::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          background-color: #d8b4fe;
          border-radius: 50%;
          box-shadow: 0 0 8px #d8b4fe;
        }

        .glass-dir-icon-area {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: inset 0 2px 0 rgba(255,255,255,0.1);
        }

        .glass-dir-card-cat {
          font-size: 12px;
          color: #a5b4fc;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .glass-dir-card-title {
          font-size: 24px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 16px;
        }

        .glass-dir-card-desc {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.6;
          font-weight: 300;
          flex-grow: 1;
        }

        .glass-dir-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
          margin-top: auto;
        }

        .glass-dir-downloads {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #cbd5e1;
          font-weight: 300;
        }

        .glass-dir-downloads svg {
          opacity: 0.7;
        }

        .glass-dir-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 400;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .glass-dir-card:hover .glass-dir-btn {
          background: #fff;
          color: #0f172a;
        }

        @media (max-width: 768px) {
          .glass-dir-title { font-size: 32px; }
          .glass-dir-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="glass-dir-app">
        <div className="glass-dir-bg-glow1"></div>
        <div className="glass-dir-bg-glow2"></div>

        <div className="glass-dir-container">
          <header className="glass-dir-header">
            <h1 className="glass-dir-title">Explore Next-Gen Interfaces</h1>
            <p className="glass-dir-subtitle">
              Discover a curated directory of premium glassmorphism layouts and futuristic UI components for your next SaaS application.
            </p>

            <div className="glass-dir-tabs">
              {tabs.map((tab) => (
                <div 
                  key={tab} 
                  className={`glass-dir-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </header>

          <div className="glass-dir-grid">
            {directories.map((dir) => (
              <div key={dir.id} className="glass-dir-card">
                {dir.featured && (
                  <div className="glass-dir-featured-tag">Promoted</div>
                )}
                
                <div className="glass-dir-icon-area">
                  {dir.category === 'Web Apps' ? '🖥️' : dir.category === 'Dashboards' ? '📊' : dir.category === 'Mobile UI' ? '📱' : '🚀'}
                </div>
                
                <div className="glass-dir-card-cat">{dir.category}</div>
                <h3 className="glass-dir-card-title">{dir.name}</h3>
                <p className="glass-dir-card-desc">{dir.desc}</p>
                
                <div className="glass-dir-card-footer">
                  <div className="glass-dir-downloads">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    {dir.downloads}
                  </div>
                  <button className="glass-dir-btn">Preview</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
