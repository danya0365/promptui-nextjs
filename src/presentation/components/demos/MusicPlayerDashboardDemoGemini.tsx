/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  MUSIC PLAYER DASHBOARD (Gemini Version)                  ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Vinyl Animation + Waveforms
 */

'use client';

import { useState } from 'react';

export function MusicPlayerDashboardDemoGemini() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap');

        .music-dash {
          --m-bg: #1e1e2e;
          --m-panel: #262638;
          --m-primary: #cba6f7;
          --m-sec: #f38ba8;
          --m-text: #cdd6f4;
          
          font-family: 'Outfit', sans-serif;
          background: var(--m-bg);
          color: var(--m-text);
          min-height: 100vh;
          display: flex;
          overflow: hidden;
        }

        /* Sidebar */
        .m-sidebar {
          width: 240px; background: rgba(0,0,0,0.2);
          padding: 30px 20px; display: flex; flex-direction: column; gap: 10px;
        }
        .m-menu-item {
          padding: 12px 16px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 12px;
          color: #a6adc8; transition: 0.2s; font-weight: 500;
        }
        .m-menu-item:hover, .m-menu-item.active { background: rgba(255,255,255,0.05); color: var(--m-primary); }
        .m-playlist-section { margin-top: 30px; }
        .m-playlist-header { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6c7086; margin-bottom: 10px; padding-left: 16px; }

        /* Main Content */
        .m-main { flex: 1; padding: 30px; overflow-y: auto; background: linear-gradient(135deg, #1e1e2e 0%, #181825 100%); }
        
        /* Now Playing Card */
        .m-player-layout { display: grid; grid-template-columns: 1fr 340px; gap: 30px; height: 100%; }
        
        .m-hero {
          background: linear-gradient(to bottom right, #313244, #1e1e2e);
          border-radius: 24px; padding: 40px; position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: flex-end; min-height: 300px;
        }
        .m-hero-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.3; mask-image: linear-gradient(to bottom, transparent, black);
        }
        .m-hero-content { position: relative; z-index: 10; }
        .m-hero-tag { font-size: 12px; padding: 6px 12px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 20px; display: inline-block; margin-bottom: 16px; }
        .m-hero-title { font-size: 48px; font-weight: 700; line-height: 1.1; margin-bottom: 10px; text-shadow: 0 4px 12px rgba(0,0,0,0.5); }
        .m-hero-desc { font-size: 16px; opacity: 0.8; max-width: 500px; }

        /* Song List */
        .m-song-list { margin-top: 30px; }
        .m-song-row {
          display: grid; grid-template-columns: 40px 1fr 100px 60px; align-items: center;
          padding: 12px 16px; border-radius: 12px; transition: 0.2s;
        }
        .m-song-row:hover { background: rgba(255,255,255,0.03); }
        .m-song-idx { color: #585b70; font-size: 14px; }
        .m-song-info { display: flex; align-items: center; gap: 16px; }
        .m-song-img { width: 40px; height: 40px; border-radius: 8px; background: #333; }
        .m-song-title { font-weight: 600; font-size: 15px; }
        .m-song-artist { font-size: 13px; color: #a6adc8; }
        .m-song-plays { font-size: 13px; color: #585b70; text-align: right; }
        .m-song-time { font-size: 13px; color: #585b70; text-align: right; }

        /* Right Panel - Player */
        .m-player-panel {
          background: var(--m-panel); border-radius: 24px; padding: 30px;
          display: flex; flex-direction: column; align-items: center;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }
        
        .vinyl-container {
          width: 240px; height: 240px; border-radius: 50%;
          background: linear-gradient(135deg, #111, #333);
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          position: relative; display: flex; align-items: center; justify-content: center;
          margin-bottom: 40px; padding: 8px;
        }
        .vinyl-grooves {
          width: 100%; height: 100%; border-radius: 50%;
          background: repeating-radial-gradient(#111 0, #111 2px, #222 3px, #222 4px);
          position: relative; animation: spin 4s linear infinite;
          animation-play-state: paused;
        }
        .vinyl-grooves.spinning { animation-play-state: running; }
        
        .vinyl-label {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 80px; height: 80px; border-radius: 50%; background: url(https://picsum.photos/seed/music/200/200) center/cover;
          border: 4px solid #fff;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }

        .player-controls { display: flex; align-items: center; gap: 20px; margin-top: 30px; }
        .p-btn { border: none; background: transparent; color: white; cursor: pointer; font-size: 20px; transition: 0.2s; }
        .p-btn:hover { transform: scale(1.1); color: var(--m-primary); }
        .p-play {
          width: 60px; height: 60px; border-radius: 50%; background: var(--m-primary); color: #1e1e2e;
          display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 0 20px rgba(203, 166, 247, 0.4);
        }
        .p-play:hover { transform: scale(1.1); box-shadow: 0 0 30px rgba(203, 166, 247, 0.6); }

        .wave-container { display: flex; align-items: flex-end; gap: 3px; height: 40px; margin-bottom: 30px; opacity: 0.5; }
        .wave-bar { width: 4px; background: var(--m-text); border-radius: 2px; animation: wave 1s ease-in-out infinite; }
        
        @keyframes wave { 0%, 100% { height: 20%; } 50% { height: 100%; } }

      `}</style>
      
      <div className="music-dash">
        <aside className="m-sidebar">
          <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px', paddingLeft: '16px', color: 'white' }}>
            Vibe<span style={{ color: '#cba6f7' }}>fy</span>.
          </div>
          <div className="m-menu-item active">🏠 Home</div>
          <div className="m-menu-item">🔍 Explore</div>
          <div className="m-menu-item">📻 Radio</div>
          
          <div className="m-playlist-section">
            <div className="m-playlist-header">My Collection</div>
            <div className="m-menu-item">❤️ Liked Songs</div>
            <div className="m-menu-item">💿 Local Files</div>
            <div className="m-menu-item">🎧 Chill Lo-Fi</div>
            <div className="m-menu-item">⚡ Workout Mix</div>
          </div>
        </aside>

        <main className="m-main">
          <div className="m-player-layout">
            
            <div className="m-content-area">
              <div className="m-hero">
                <img src="https://picsum.photos/seed/concert/800/400" className="m-hero-bg" alt="Hero" />
                <div className="m-hero-content">
                  <span className="m-hero-tag">Trending Now</span>
                  <h1 className="m-hero-title">Midnight<br/>Synthesizer</h1>
                  <p className="m-hero-desc">Experience the retro-future sounds with our curated synthwave collection. 80s nostalgia meets modern production.</p>
                </div>
              </div>

              <div className="m-song-list">
                <h3 style={{ margin: '30px 0 20px', fontSize: '20px' }}>Top Tracks</h3>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="m-song-row">
                    <div className="m-song-idx">{i}</div>
                    <div className="m-song-info">
                      <div className="m-song-img"></div>
                      <div>
                        <div className="m-song-title">Neon Nights {i}</div>
                        <div className="m-song-artist">The Weeknd</div>
                      </div>
                    </div>
                    <div className="m-song-plays">2.{i}M</div>
                    <div className="m-song-time">3:{10 + i * 5}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="m-player-panel">
              <div className={`vinyl-container`} onClick={() => setIsPlaying(!isPlaying)}>
                <div className={`vinyl-grooves ${isPlaying ? 'spinning' : ''}`}>
                  <div className="vinyl-label"></div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Starboy</h2>
                <p style={{ color: '#a6adc8' }}>The Weeknd • Daft Punk</p>
              </div>

              {isPlaying && (
                <div className="wave-container">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.05}s`, height: `${Math.random() * 80 + 20}%` }}></div>
                  ))}
                </div>
              )}
              {!isPlaying && <div style={{ height: '40px', marginBottom: '30px', width: '100%', display: 'flex', alignItems: 'center', opacity: 0.3 }}><div style={{ width: '100%', height: '2px', background: 'white' }}></div></div>}

              <div className="player-controls">
                <button className="p-btn">⏮</button>
                <button className={`p-btn p-play`} onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button className="p-btn">⏭</button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
