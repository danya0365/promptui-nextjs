/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  TRAVEL BOOKING APP (Gemini Version)                      ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Masonry Grid + Floating Action Buttons
 */

'use client';

export function TravelBookingAppDemoGemini() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .travel-app {
          --t-bg: #f3f4f6;
          --t-card: #ffffff;
          --t-primary: #ff5a5f;
          --t-text: #222222;
          
          font-family: 'Poppins', sans-serif;
          background: white;
          color: var(--t-text);
          min-height: 100vh;
        }
        
        /* Navbar */
        .t-nav {
          display: flex; justify-content: space-between; align-items: center; padding: 20px 40px;
          border-bottom: 1px solid #eee; position: sticky; top: 0; background: white; z-index: 100;
        }
        .t-logo { font-size: 24px; font-weight: 800; color: var(--t-primary); display: flex; align-items: center; gap: 5px; }
        .t-search-bar {
          background: white; border: 1px solid #ddd; border-radius: 40px; padding: 8px 8px 8px 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08); display: flex; align-items: center; gap: 15px;
          transition: 0.2s; cursor: pointer;
        }
        .t-search-bar:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.12); }
        .t-search-sep { width: 1px; height: 24px; background: #ddd; }
        .t-search-btn {
          width: 32px; height: 32px; background: var(--t-primary); border-radius: 50%; color: white; border: none; font-size: 14px;
        }

        /* Filter Categories */
        .t-filters {
          display: flex; gap: 30px; padding: 20px 40px; overflow-x: auto;
        }
        .t-cat-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.6; cursor: pointer; transition: 0.2s; min-width: 60px;
          padding-bottom: 10px; border-bottom: 2px solid transparent;
        }
        .t-cat-item:hover, .t-cat-item.active { opacity: 1; border-bottom-color: black; }
        .t-cat-icon { font-size: 24px; }
        .t-cat-label { font-size: 12px; font-weight: 500; }

        /* Grid */
        .t-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; padding: 20px 40px;
        }
        .t-card { cursor: pointer; group: true; }
        .t-card-img-wrapper {
          position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 1 / 0.95; margin-bottom: 12px;
        }
        .t-card-img {
          width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;
        }
        .t-card:hover .t-card-img { transform: scale(1.05); }
        
        .t-like-btn {
          position: absolute; top: 15px; right: 15px; background: transparent; border: none; color: white; font-size: 20px;
          text-shadow: 0 2px 5px rgba(0,0,0,0.2); cursor: pointer;
        }
        
        .t-card-info { display: flex; justify-content: space-between; margin-bottom: 4px; }
        .t-card-title { font-weight: 600; font-size: 15px; }
        .t-card-rating { font-size: 14px; display: flex; align-items: center; gap: 4px; }
        
        .t-card-desc { color: #717171; font-size: 14px; }
        .t-card-price { margin-top: 6px; font-size: 15px; }
        .t-price-val { font-weight: 600; }

        /* Map Button */
        .t-map-btn {
          position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
          background: #222; color: white; padding: 14px 20px; border-radius: 30px; border: none;
          font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 8px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15); cursor: pointer; transition: 0.2s; z-index: 50;
        }
        .t-map-btn:hover { transform: translateX(-50%) scale(1.05); }

      `}</style>
      
      <div className="travel-app">
        <header className="t-nav">
          <div className="t-logo">✈️ Wander</div>
          
          <div className="t-search-bar">
             <span style={{ fontWeight: '600' }}>Anywhere</span>
             <div className="t-search-sep"></div>
             <span style={{ fontWeight: '600' }}>Any week</span>
             <div className="t-search-sep"></div>
             <span style={{ color: '#717171' }}>Add guests</span>
             <button className="t-search-btn">🔍</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Switch to hosting</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
          </div>
        </header>

        <div className="t-filters">
           <div className="t-cat-item active"><span className="t-cat-icon">🏝️</span><span className="t-cat-label">Islands</span></div>
           <div className="t-cat-item"><span className="t-cat-icon">🏰</span><span className="t-cat-label">Castles</span></div>
           <div className="t-cat-item"><span className="t-cat-icon">⛺</span><span className="t-cat-label">Camping</span></div>
           <div className="t-cat-item"><span className="t-cat-icon">⛷️</span><span className="t-cat-label">Skiing</span></div>
           <div className="t-cat-item"><span className="t-cat-icon">⛵</span><span className="t-cat-label">Boats</span></div>
           <div className="t-cat-item"><span className="t-cat-icon">🍷</span><span className="t-cat-label">Vineyards</span></div>
           <div className="t-cat-item"><span className="t-cat-icon">👽</span><span className="t-cat-label">OMG!</span></div>
           <div className="t-cat-item"><span className="t-cat-icon">🌊</span><span className="t-cat-label">Beachfront</span></div>
        </div>

        <main className="t-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="t-card">
              <div className="t-card-img-wrapper">
                 <img src={`https://picsum.photos/seed/travel${i}/400/400`} alt="Location" className="t-card-img" />
                 <button className="t-like-btn">❤️</button>
              </div>
              <div className="t-card-info">
                 <span className="t-card-title">Bali, Indonesia</span>
                 <span className="t-card-rating">★ 4.9</span>
              </div>
              <div className="t-card-desc">Designed by architect</div>
              <div className="t-card-desc">Oct 22 - 27</div>
              <div className="t-card-price"><span className="t-price-val">$350</span> night</div>
            </div>
          ))}
        </main>

        <button className="t-map-btn">
          Show map 🗺️
        </button>
      </div>
    </>
  );
}
