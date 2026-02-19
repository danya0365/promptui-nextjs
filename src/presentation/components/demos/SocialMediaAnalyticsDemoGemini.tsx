/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  SOCIAL MEDIA ANALYTICS (Gemini Version)                  ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Tabbed Interface + Charts
 */

'use client';

import { useState } from 'react';

export function SocialMediaAnalyticsDemoGemini() {
  const [activeTab, setActiveTab] = useState('instagram');

  const platforms: Record<string, string> = {
    instagram: '#E1306C',
    twitter: '#1DA1F2',
    tiktok: '#000000',
    youtube: '#FF0000',
  };

  const activeColor = platforms[activeTab];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

        .social-dash {
          --s-bg: #121212;
          --s-card: #1e1e1e;
          --s-text: #ffffff;
          
          font-family: 'Roboto', sans-serif;
          background: var(--s-bg);
          color: var(--s-text);
          min-height: 100vh;
          padding: 40px;
        }

        .social-header {
           display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;
        }

        /* Tabs */
        .social-tabs {
          display: flex; gap: 20px; border-bottom: 2px solid #333; padding-bottom: 0;
        }
        .social-tab {
          padding: 15px 30px; cursor: pointer; font-weight: 700; opacity: 0.5; transition: 0.3s;
          border-bottom: 4px solid transparent;
        }
        .social-tab:hover { opacity: 0.8; }
        .social-tab.active { opacity: 1; border-bottom-color: var(--platform-color); }

        /* Cards */
        .social-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
          margin-bottom: 40px;
        }
        .social-card {
          background: var(--s-card); padding: 25px; border-radius: 12px;
          border-top: 4px solid var(--platform-color);
        }
        .social-stat-label { font-size: 14px; opacity: 0.7; margin-bottom: 10px; }
        .social-stat-val { font-size: 36px; font-weight: 900; }
        .social-stat-trend { font-size: 14px; margin-top: 10px; font-weight: 500; }
        .trend-up { color: #4caf50; }

        /* Chart Area */
        .social-chart-card {
          background: var(--s-card); padding: 30px; border-radius: 12px; height: 300px;
          display: flex; align-items: flex-end; justify-content: space-between; gap: 10px;
        }
        .chart-bar {
          flex: 1; background: var(--platform-color); opacity: 0.8; border-radius: 4px 4px 0 0;
          transition: height 0.5s ease-out; position: relative;
        }
        .chart-bar:hover { opacity: 1; transform: scaleY(1.02); }

        /* Posts */
        .social-posts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .post-card {
          background: var(--s-card); border-radius: 12px; overflow: hidden;
        }
        .post-img { height: 180px; background: #333; }
        .post-stats { padding: 15px; display: flex; justify-content: space-around; font-weight: 700; }

        @media(max-width: 1024px) {
           .social-grid { grid-template-columns: 1fr 1fr; }
           .social-posts { grid-template-columns: 1fr; }
        }
      `}</style>
      
      <div className="social-dash" style={{ '--platform-color': activeColor } as React.CSSProperties}>
        <header className="social-header">
          <h1>Audience Overview</h1>
          <div className="social-tabs">
            {Object.keys(platforms).map(p => (
              <div 
                key={p} 
                className={`social-tab ${activeTab === p ? 'active' : ''}`}
                onClick={() => setActiveTab(p)}
                style={{ textTransform: 'capitalize' }}
              >
                {p}
              </div>
            ))}
          </div>
        </header>

        <div className="social-grid">
          <div className="social-card">
            <div className="social-stat-label">Total Followers</div>
            <div className="social-stat-val">24.5k</div>
            <div className="social-stat-trend trend-up">↑ 12.5% this month</div>
          </div>
          <div className="social-card">
            <div className="social-stat-label">Avg. Engagement</div>
            <div className="social-stat-val">5.8%</div>
            <div className="social-stat-trend trend-up">↑ 1.2% this month</div>
          </div>
          <div className="social-card">
            <div className="social-stat-label">Reach</div>
            <div className="social-stat-val">128k</div>
            <div className="social-stat-trend trend-up">↑ 5.4% this month</div>
          </div>
          <div className="social-card">
            <div className="social-stat-label">Impressions</div>
            <div className="social-stat-val">450k</div>
            <div className="social-stat-trend trend-up">↑ 8.1% this month</div>
          </div>
        </div>

        <h3 style={{ marginBottom: '20px' }}>Growth History</h3>
        <div className="social-chart-card">
          {[30, 45, 40, 60, 55, 75, 80, 70, 85, 90, 95, 100].map((h, i) => (
            <div key={i} className="chart-bar" style={{ height: `${h}%` }}></div>
          ))}
        </div>

        <h3 style={{ margin: '40px 0 20px 0' }}>Top Posts</h3>
        <div className="social-posts">
          {[1, 2, 3].map(i => (
            <div key={i} className="post-card">
              <div className="post-img" style={{ background: `url(https://picsum.photos/seed/${i * 456}/400/300) center/cover` }}></div>
              <div className="post-stats">
                <span>❤️ 1.2k</span>
                <span>💬 45</span>
                <span>↪ 120</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
