"use client";

import React, { useState } from "react";

interface Juice {
  id: number;
  emoji: string;
  name: string;
  price: number;
}

const JUICES: Juice[] = [
  { id: 1, emoji: "🥭", name: "Mango Sunrise", price: 6 },
  { id: 2, emoji: "🍍", name: "Pineapple Splash", price: 5 },
  { id: 3, emoji: "🥥", name: "Coconut Cooler", price: 7 },
  { id: 4, emoji: "🍉", name: "Watermelon Wave", price: 5 },
  { id: 5, emoji: "🍓", name: "Berry Breeze", price: 6 },
  { id: 6, emoji: "🍋", name: "Citrus Zing", price: 4 },
];

export const TropicalBeachClubDemoClaudeOpus: React.FC = () => {
  const [tab, setTab] = useState<Record<number, number>>({});
  const [playing, setPlaying] = useState(false);

  const items = JUICES.filter((j) => tab[j.id]);
  const total = items.reduce((sum, j) => sum + j.price * tab[j.id], 0);
  const count = items.reduce((sum, j) => sum + tab[j.id], 0);

  const order = (id: number) => setTab((t) => ({ ...t, [id]: (t[id] ?? 0) + 1 }));
  const clearTab = () => setTab({});

  return (
    <div className="beach-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Pacifico&display=swap');

        .beach-root {
          min-height: 100vh; width: 100%;
          background: linear-gradient(180deg, #ffd98a 0%, #ff9e7d 32%, #ff7e8f 58%, #7ad6d6 100%);
          font-family: 'Baloo 2', cursive, sans-serif;
          color: #5a3a2e;
          position: relative; overflow: hidden;
          padding: 1.6rem;
        }

        /* sun */
        .sun {
          position: absolute; top: 70px; left: 50%; transform: translateX(-50%);
          width: 130px; height: 130px; border-radius: 50%;
          background: radial-gradient(circle at 50% 45%, #fff3c4, #ffd23a 70%, #ffb01f);
          box-shadow: 0 0 60px rgba(255,200,80,0.7);
          animation: bob 5s ease-in-out infinite; z-index: 0;
        }
        @keyframes bob { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-12px); } }

        /* sea shimmer at bottom */
        .sea {
          position: absolute; bottom: 0; left: 0; right: 0; height: 140px; z-index: 0;
          background:
            repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 14px, transparent 14px 34px);
          opacity: 0.5;
          mask-image: linear-gradient(180deg, transparent, #000 60%);
          -webkit-mask-image: linear-gradient(180deg, transparent, #000 60%);
        }
        .palm { position: absolute; bottom: 60px; font-size: 4.5rem; z-index: 1; filter: drop-shadow(0 6px 6px rgba(90,40,30,0.2)); }
        .palm.l { left: 14px; transform: scaleX(-1); }
        .palm.r { right: 14px; }

        .beach-wrap { position: relative; z-index: 3; max-width: 920px; margin: 0 auto; }

        /* top bar */
        .beach-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
        .beach-brand { font-family: 'Pacifico', cursive; font-size: 2rem; color: #fff; text-shadow: 0 3px 0 rgba(255,126,143,0.5), 0 6px 12px rgba(90,40,30,0.2); }
        .beach-temp {
          background: rgba(255,255,255,0.5); backdrop-filter: blur(4px); border-radius: 30px;
          padding: 0.5rem 1.1rem; font-weight: 700; color: #5a3a2e; font-size: 1.05rem;
          box-shadow: 0 4px 12px rgba(90,40,30,0.12);
        }

        /* hero countdown */
        .hero {
          text-align: center; padding: 4.6rem 1rem 1.6rem; position: relative;
        }
        .hero-kicker { font-size: 1.1rem; font-weight: 600; color: #fff; text-shadow: 0 2px 6px rgba(90,40,30,0.25); }
        .hero-count { font-size: 2.8rem; font-weight: 800; color: #fff; text-shadow: 0 3px 0 rgba(255,126,143,0.4), 0 8px 16px rgba(90,40,30,0.25); line-height: 1.1; }
        .hero-sub { font-family: 'Pacifico', cursive; font-size: 1.15rem; color: #fff; opacity: 0.95; margin-top: 0.3rem; }

        /* cards row */
        .cards { display: grid; grid-template-columns: 1fr 1.3fr 1fr; gap: 1.1rem; margin-top: 0.5rem; }
        .card {
          background: rgba(255,255,255,0.62); backdrop-filter: blur(6px);
          border-radius: 26px; padding: 1.2rem 1.3rem;
          box-shadow: 0 10px 26px rgba(90,40,30,0.14);
          border: 2px solid rgba(255,255,255,0.6);
        }
        .card-title { font-weight: 800; font-size: 1.1rem; color: #e8556f; margin-bottom: 0.7rem; display: flex; align-items: center; gap: 0.4rem; }

        /* surf card */
        .surf-row { display: flex; justify-content: space-between; padding: 0.4rem 0; font-weight: 600; color: #6a4636; border-bottom: 1px dashed rgba(120,80,60,0.2); }
        .surf-row:last-child { border-bottom: none; }
        .surf-val { color: #2aa6a6; font-weight: 700; }

        /* juice menu */
        .juice-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.55rem; }
        .juice {
          display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
          background: rgba(255,255,255,0.7); border-radius: 16px; padding: 0.5rem 0.6rem;
          border: 2px solid transparent; transition: transform 0.12s ease, border-color 0.2s ease;
        }
        .juice:hover { border-color: #ffce4a; }
        .juice:active { transform: scale(0.94); }
        .juice-emoji { font-size: 1.5rem; }
        .juice-info { flex: 1; line-height: 1.1; }
        .juice-name { font-size: 0.82rem; font-weight: 700; color: #5a3a2e; }
        .juice-price { font-size: 0.78rem; font-weight: 600; color: #2aa6a6; }
        .juice-badge {
          min-width: 22px; height: 22px; border-radius: 50%; background: #ff7e8f; color: #fff;
          font-size: 0.78rem; font-weight: 800; display: flex; align-items: center; justify-content: center;
          animation: pop 0.3s cubic-bezier(0.34,1.7,0.5,1);
        }
        @keyframes pop { 0% { transform: scale(0); } 100% { transform: scale(1); } }

        /* playlist card */
        .eq { display: flex; align-items: flex-end; gap: 4px; height: 56px; margin: 0.4rem 0 0.9rem; }
        .eq span {
          flex: 1; background: linear-gradient(180deg, #ffce4a, #ff7e8f); border-radius: 4px 4px 0 0;
          height: 20%;
        }
        .eq.on span { animation: dance 0.9s ease-in-out infinite; }
        .eq.on span:nth-child(2) { animation-delay: 0.15s; }
        .eq.on span:nth-child(3) { animation-delay: 0.3s; }
        .eq.on span:nth-child(4) { animation-delay: 0.45s; }
        .eq.on span:nth-child(5) { animation-delay: 0.6s; }
        .eq.on span:nth-child(6) { animation-delay: 0.1s; }
        @keyframes dance { 0%,100% { height: 22%; } 50% { height: 95%; } }
        .play-btn {
          width: 100%; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 0.95rem;
          background: #ff7e8f; color: #fff; border: none; border-radius: 16px; padding: 0.6rem; cursor: pointer;
          box-shadow: 0 5px 0 #e8556f; transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .play-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 0 #e8556f; }
        .play-btn:active { transform: translateY(4px); box-shadow: 0 1px 0 #e8556f; }
        .track { font-size: 0.82rem; font-weight: 600; color: #6a4636; margin-top: 0.6rem; text-align: center; }

        /* tab footer */
        .tab-bar {
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          margin-top: 1.1rem; background: rgba(255,255,255,0.7); border-radius: 22px;
          padding: 0.8rem 1.3rem; box-shadow: 0 8px 22px rgba(90,40,30,0.12);
        }
        .tab-info { font-weight: 700; color: #5a3a2e; }
        .tab-total { color: #2aa6a6; font-size: 1.3rem; font-weight: 800; }
        .tab-clear {
          background: transparent; border: 2px solid #ff9e7d; color: #e8556f; border-radius: 14px;
          padding: 0.4rem 0.9rem; font-family: 'Baloo 2', sans-serif; font-weight: 700; cursor: pointer;
        }
        .tab-clear:hover { background: rgba(255,158,125,0.18); }

        @media (max-width: 820px) {
          .cards { grid-template-columns: 1fr; }
          .palm { display: none; }
        }
      `}</style>

      <div className="sun" />
      <div className="palm l">🌴</div>
      <div className="palm r">🌴</div>
      <div className="sea" />

      <div className="beach-wrap">
        <div className="beach-top">
          <div className="beach-brand">Sunset Beach Club</div>
          <div className="beach-temp">☀️ 31° · perfect</div>
        </div>

        <div className="hero">
          <div className="hero-kicker">golden hour starts in</div>
          <div className="hero-count">1 : 12 : 04</div>
          <div className="hero-sub">grab a drink & find your spot ~</div>
        </div>

        <div className="cards">
          {/* surf */}
          <div className="card">
            <div className="card-title">🏄 Surf &amp; Tide</div>
            <div className="surf-row"><span>Waves</span><span className="surf-val">3–4 ft</span></div>
            <div className="surf-row"><span>Water</span><span className="surf-val">27°C</span></div>
            <div className="surf-row"><span>Tide</span><span className="surf-val">rising</span></div>
            <div className="surf-row"><span>Wind</span><span className="surf-val">light SE</span></div>
            <div className="surf-row"><span>UV</span><span className="surf-val">hat o'clock</span></div>
          </div>

          {/* juice menu */}
          <div className="card">
            <div className="card-title">🍹 Juice Bar</div>
            <div className="juice-grid">
              {JUICES.map((j) => (
                <div key={j.id} className="juice" onClick={() => order(j.id)}>
                  <span className="juice-emoji">{j.emoji}</span>
                  <span className="juice-info">
                    <span className="juice-name">{j.name}</span>
                    <br />
                    <span className="juice-price">${j.price}</span>
                  </span>
                  {tab[j.id] ? (
                    <span className="juice-badge" key={tab[j.id]}>
                      {tab[j.id]}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* playlist */}
          <div className="card">
            <div className="card-title">🎶 Summer Mix</div>
            <div className={`eq ${playing ? "on" : ""}`}>
              <span /><span /><span /><span /><span /><span />
            </div>
            <button
              type="button"
              className="play-btn"
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? "⏸ pause the vibes" : "▶ play the vibes"}
            </button>
            <div className="track">
              {playing ? "♪ now playing: Palm Shadows" : "tap to start the sunset set"}
            </div>
          </div>
        </div>

        {/* tab */}
        <div className="tab-bar">
          <span className="tab-info">
            {count > 0 ? `${count} drink${count > 1 ? "s" : ""} on your tab` : "your tab is empty — go on, treat yourself 🥥"}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span className="tab-total">${total}</span>
            {count > 0 && (
              <button type="button" className="tab-clear" onClick={clearTab}>
                clear
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
