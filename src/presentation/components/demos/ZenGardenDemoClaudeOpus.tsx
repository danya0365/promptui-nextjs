"use client";

import React, { useState } from "react";

interface Stone {
  id: number;
  x: number;
  y: number;
  scale: number;
}

interface Session {
  key: string;
  name: string;
  kanji: string;
  intention: string;
}

const SESSIONS: Session[] = [
  {
    key: "morning",
    name: "Morning Stillness",
    kanji: "朝",
    intention: "Begin slowly. Let the day arrive on its own.",
  },
  {
    key: "focus",
    name: "Single Thread",
    kanji: "集",
    intention: "One thing at a time. Rest your attention here.",
  },
  {
    key: "evening",
    name: "Evening Unwind",
    kanji: "夕",
    intention: "Set down what you carried. It can wait.",
  },
  {
    key: "rest",
    name: "Dreamward",
    kanji: "眠",
    intention: "Soften. There is nothing left to finish tonight.",
  },
];

const INITIAL_STONES: Stone[] = [
  { id: 1, x: 32, y: 42, scale: 1.2 },
  { id: 2, x: 58, y: 64, scale: 0.85 },
  { id: 3, x: 70, y: 34, scale: 1 },
];

export const ZenGardenDemoClaudeOpus: React.FC = () => {
  const [stones, setStones] = useState<Stone[]>(INITIAL_STONES);
  const [sessionKey, setSessionKey] = useState("morning");
  const [nextId, setNextId] = useState(4);

  const session = SESSIONS.find((s) => s.key === sessionKey) ?? SESSIONS[0];

  const placeStone = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    // gentle deterministic scale based on id, no Math.random
    const scale = 0.8 + ((nextId * 7) % 5) / 10;
    setStones((s) => [...s, { id: nextId, x, y, scale }]);
    setNextId((n) => n + 1);
  };

  const rakeClean = () => setStones(INITIAL_STONES);

  return (
    <div className="zen-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Zen+Maru+Gothic:wght@400;500&display=swap');

        .zen-root {
          min-height: 100vh; width: 100%;
          background: linear-gradient(160deg, #f4efe4 0%, #ece4d3 100%);
          color: #4a4438;
          font-family: 'Zen Maru Gothic', 'Shippori Mincho', serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          padding: 2rem 2.4rem;
        }

        /* top */
        .zen-top {
          display: flex; align-items: baseline; justify-content: space-between;
          margin-bottom: 1.6rem; padding-bottom: 1rem;
          border-bottom: 1px solid rgba(74,68,56,0.14);
        }
        .zen-brand { display: flex; align-items: baseline; gap: 0.9rem; }
        .zen-kanji-main { font-family: 'Shippori Mincho', serif; font-size: 1.7rem; color: #6b7a5a; }
        .zen-title { font-family: 'Shippori Mincho', serif; font-size: 1.25rem; letter-spacing: 0.04em; color: #54493a; }
        .zen-title small { display: block; font-size: 0.7rem; letter-spacing: 0.28em; color: #9a9078; text-transform: uppercase; margin-top: 0.2rem; }
        .zen-season { font-family: 'Shippori Mincho', serif; font-size: 0.95rem; color: #8a8068; font-style: italic; }

        /* body grid */
        .zen-body { flex: 1; display: grid; grid-template-columns: 1fr 268px; gap: 2rem; align-items: stretch; }

        /* garden */
        .garden {
          position: relative; border-radius: 4px; cursor: crosshair; overflow: hidden;
          background:
            repeating-linear-gradient(92deg, rgba(180,168,140,0.0) 0 13px, rgba(150,138,110,0.16) 13px 14px),
            linear-gradient(180deg, #efe7d4, #e6dcc4);
          border: 1px solid rgba(120,108,84,0.3);
          box-shadow: inset 0 2px 20px rgba(120,100,60,0.12);
          min-height: 380px;
        }
        .garden::after {
          content: 'touch the sand to set a stone';
          position: absolute; bottom: 12px; right: 16px;
          font-family: 'Shippori Mincho', serif; font-style: italic;
          font-size: 0.78rem; color: rgba(74,68,56,0.32);
        }

        .stone-wrap { position: absolute; transform: translate(-50%,-50%); }
        /* raked ripple rings around a stone */
        .ripple {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          border-radius: 50%; border: 1px solid rgba(140,126,98,0.32);
        }
        .stone {
          position: relative;
          width: 46px; height: 32px; border-radius: 50% 50% 48% 52% / 60% 60% 40% 40%;
          background: radial-gradient(ellipse at 38% 30%, #8c8a82, #5c5a52 70%, #44423b);
          box-shadow: 0 6px 10px rgba(60,52,38,0.28), inset 0 2px 3px rgba(255,255,255,0.18);
          animation: rest 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes rest { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        /* side */
        .zen-side { display: flex; flex-direction: column; gap: 1.4rem; }

        .breathe-card {
          display: flex; flex-direction: column; align-items: center;
          padding: 1.4rem 1rem 1.2rem;
          background: rgba(255,253,247,0.5); border: 1px solid rgba(120,108,84,0.16); border-radius: 6px;
        }
        .breathe-stage { position: relative; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; }
        .breathe-ring {
          position: absolute; width: 46px; height: 46px; border-radius: 50%;
          border: 1.5px solid #7a8a64;
          animation: breathe 9s ease-in-out infinite;
        }
        .breathe-ring.r2 { animation-delay: 0s; opacity: 0.5; }
        .breathe-ring.r3 { opacity: 0.28; }
        @keyframes breathe {
          0%, 100% { transform: scale(1); border-color: rgba(122,138,100,0.8); }
          45%, 55% { transform: scale(2.0); border-color: rgba(122,138,100,0.35); }
        }
        .breathe-dot { width: 8px; height: 8px; border-radius: 50%; background: #6b7a5a; }
        .breathe-label { font-family: 'Shippori Mincho', serif; font-size: 0.86rem; color: #7a7058; margin-top: 0.9rem; text-align: center; line-height: 1.5; }

        .intention {
          padding: 1.1rem 1.2rem; border-left: 2px solid #9aa784;
          background: rgba(255,253,247,0.4); border-radius: 0 6px 6px 0;
        }
        .intention-kanji { font-family: 'Shippori Mincho', serif; font-size: 1.5rem; color: #6b7a5a; float: right; margin-left: 0.5rem; }
        .intention-text { font-family: 'Shippori Mincho', serif; font-size: 1.02rem; line-height: 1.6; color: #54493a; font-style: italic; }

        .sessions { display: flex; flex-direction: column; gap: 0.5rem; }
        .sess-title { font-size: 0.66rem; letter-spacing: 0.26em; text-transform: uppercase; color: #a59a80; margin-bottom: 0.2rem; }
        .sess {
          display: flex; align-items: center; gap: 0.7rem; cursor: pointer;
          padding: 0.6rem 0.7rem; border-radius: 5px; transition: background 0.5s ease, color 0.5s ease;
          color: #6a6253;
        }
        .sess:hover { background: rgba(154,167,132,0.12); }
        .sess.active { background: rgba(122,138,100,0.16); color: #4a4438; }
        .sess-kanji { font-family: 'Shippori Mincho', serif; font-size: 1.05rem; color: #7a8a64; width: 20px; text-align: center; }
        .sess-name { font-size: 0.95rem; }

        .rake-btn {
          margin-top: auto; font-family: 'Shippori Mincho', serif; font-size: 0.88rem;
          background: transparent; border: 1px solid rgba(120,108,84,0.4); border-radius: 5px;
          color: #6a6253; padding: 0.6rem; cursor: pointer; letter-spacing: 0.04em;
          transition: background 0.4s ease;
        }
        .rake-btn:hover { background: rgba(154,167,132,0.12); }

        @media (max-width: 820px) {
          .zen-body { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* TOP */}
      <div className="zen-top">
        <div className="zen-brand">
          <span className="zen-kanji-main">枯山水</span>
          <span className="zen-title">
            Stillness Garden
            <small>karesansui · breathe & rake</small>
          </span>
        </div>
        <span className="zen-season">— late spring, a still afternoon</span>
      </div>

      {/* BODY */}
      <div className="zen-body">
        {/* garden */}
        <div className="garden" onClick={placeStone}>
          {stones.map((st) => (
            <div
              key={st.id}
              className="stone-wrap"
              style={{ left: `${st.x}%`, top: `${st.y}%` }}
            >
              {[3.4, 2.4, 1.6].map((mult, i) => (
                <span
                  key={i}
                  className="ripple"
                  style={{
                    width: 46 * st.scale * mult,
                    height: 32 * st.scale * mult,
                    opacity: 0.5 - i * 0.12,
                  }}
                />
              ))}
              <div className="stone" style={{ transform: `scale(${st.scale})` }} />
            </div>
          ))}
        </div>

        {/* side */}
        <div className="zen-side">
          <div className="breathe-card">
            <div className="breathe-stage">
              <span className="breathe-ring r3" />
              <span className="breathe-ring r2" />
              <span className="breathe-ring" />
              <span className="breathe-dot" />
            </div>
            <div className="breathe-label">
              follow the ring —<br />in as it widens, out as it falls
            </div>
          </div>

          <div className="intention">
            <span className="intention-kanji">{session.kanji}</span>
            <div className="intention-text">{session.intention}</div>
          </div>

          <div className="sessions">
            <div className="sess-title">Sessions</div>
            {SESSIONS.map((s) => (
              <div
                key={s.key}
                className={`sess ${s.key === sessionKey ? "active" : ""}`}
                onClick={() => setSessionKey(s.key)}
              >
                <span className="sess-kanji">{s.kanji}</span>
                <span className="sess-name">{s.name}</span>
              </div>
            ))}
          </div>

          <button type="button" className="rake-btn" onClick={rakeClean}>
            ⟳ rake the garden smooth
          </button>
        </div>
      </div>
    </div>
  );
};
