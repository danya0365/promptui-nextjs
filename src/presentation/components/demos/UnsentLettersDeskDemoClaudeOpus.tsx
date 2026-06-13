"use client";

import React, { useMemo, useState } from "react";

interface Letter {
  id: number;
  to: string;
  date: string;
  preview: string;
  body: string[];
  sealed: boolean;
}

const INITIAL_LETTERS: Letter[] = [
  {
    id: 1,
    to: "To the house on Maple St.",
    date: "October 3rd",
    preview: "The porch light is still the same colour…",
    body: [
      "I drove past the old house today.",
      "The porch light is still the same colour — that warm, tired amber I used to read by. Someone planted marigolds where the bicycles used to fall over.",
      "I didn't stop. I just slowed down enough to remember, then kept going.",
    ],
    sealed: false,
  },
  {
    id: 2,
    to: "To a friend I lost touch with",
    date: "September 19th",
    preview: "I still laugh at the joke you told…",
    body: [
      "I still laugh at the joke you told on the train, the bad one, the one nobody else found funny.",
      "I think about writing, then I think it's been too long, and the thought folds itself back up and goes quiet.",
      "I hope wherever you are, it's a little warmer than here.",
    ],
    sealed: true,
  },
  {
    id: 3,
    to: "To my younger self",
    date: "September 2nd",
    preview: "You worried about the wrong things…",
    body: [
      "You worried about the wrong things, mostly. The big fears never came. The small kindnesses you almost skipped turned out to be everything.",
      "Slow down at the parts that felt ordinary. Those are the ones I'd give anything to stand inside again.",
    ],
    sealed: false,
  },
  {
    id: 4,
    to: "To the rain",
    date: "August 28th",
    preview: "Thank you for the excuse to stay in…",
    body: [
      "Thank you for the excuse to stay in. For the sound on the window that makes the room feel smaller and kinder.",
      "I never sent any of these. I think I just needed somewhere to put the weight down for a while.",
    ],
    sealed: false,
  },
];

export const UnsentLettersDeskDemoClaudeOpus: React.FC = () => {
  const [letters, setLetters] = useState<Letter[]>(INITIAL_LETTERS);
  const [activeId, setActiveId] = useState<number>(1);
  const [justSealed, setJustSealed] = useState<number | null>(null);

  const active = letters.find((l) => l.id === activeId) ?? letters[0];
  const inkLevel = useMemo(
    () => Math.max(18, 72 - letters.filter((l) => l.sealed).length * 12),
    [letters]
  );

  // deterministic rain streaks (no Math.random → no hydration mismatch)
  const rain = useMemo(
    () =>
      [...Array(22)].map((_, i) => ({
        left: (i * 4.5 + ((i * 13) % 7)) % 100,
        delay: ((i * 1.7) % 6),
        duration: 3.5 + ((i * 0.9) % 3),
        height: 30 + ((i * 7) % 40),
        opacity: 0.05 + ((i * 3) % 10) / 100,
      })),
    []
  );

  const seal = () => {
    if (active.sealed) return;
    setLetters((ls) =>
      ls.map((l) => (l.id === active.id ? { ...l, sealed: true } : l))
    );
    setJustSealed(active.id);
  };

  return (
    <div className="unsent-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Caveat:wght@400;500;600&display=swap');

        .unsent-root {
          min-height: 100vh; width: 100%;
          background:
            radial-gradient(ellipse at 50% 18%, #efe2cf 0%, #e6d6bf 45%, #d8c4a6 100%);
          color: #4a3f33;
          font-family: 'EB Garamond', serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
        }
        /* soft vignette + warm dusk */
        .unsent-root::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 6;
          background: radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(74,52,38,0.18) 100%);
        }

        /* rain on a far window */
        .rain-field { position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0.8; }
        .rain-streak {
          position: absolute; top: -12%; width: 1px;
          background: linear-gradient(180deg, transparent, rgba(90,110,120,0.5), transparent);
          animation: fall linear infinite;
        }
        @keyframes fall {
          0% { transform: translateY(-20%); }
          100% { transform: translateY(120vh); }
        }

        .unsent-topbar {
          position: relative; z-index: 5;
          display: flex; align-items: baseline; justify-content: space-between;
          padding: 1.6rem 2.2rem 0.8rem;
        }
        .unsent-title { font-size: 1.5rem; font-weight: 500; letter-spacing: 0.01em; color: #5a4a3a; }
        .unsent-title em { font-style: italic; color: #9a6a5a; }
        .unsent-date { font-family: 'Caveat', cursive; font-size: 1.25rem; color: #8a7a66; }

        .unsent-stage {
          position: relative; z-index: 4; flex: 1;
          display: grid; grid-template-columns: 250px 1fr 210px; gap: 1.6rem;
          padding: 0.8rem 2.2rem 2.2rem; align-items: start;
        }

        /* ---- LEFT: stack of letters ---- */
        .stack-title, .aside-title {
          font-family: 'Caveat', cursive; font-size: 1.1rem; color: #9a8770;
          margin-bottom: 0.7rem; letter-spacing: 0.02em;
        }
        .letter-item {
          background: rgba(255,252,244,0.6);
          border: 1px solid rgba(120,95,70,0.18);
          border-left: 3px solid rgba(154,106,90,0.4);
          border-radius: 3px; padding: 0.7rem 0.85rem; margin-bottom: 0.7rem;
          cursor: pointer; transition: background 0.4s ease, transform 0.4s ease, border-color 0.4s ease;
        }
        .letter-item:hover { transform: translateX(3px); background: rgba(255,252,244,0.85); }
        .letter-item.active { background: #fffcf4; border-left-color: #9a6a5a; box-shadow: 0 6px 18px rgba(74,52,38,0.08); }
        .li-to { font-size: 0.92rem; color: #5a4a3a; }
        .li-meta { display: flex; align-items: center; justify-content: space-between; margin-top: 0.25rem; }
        .li-date { font-family: 'Caveat', cursive; font-size: 0.95rem; color: #a8957c; }
        .li-seal-dot { font-size: 0.7rem; color: #9a6a5a; opacity: 0.7; }
        .li-preview { font-size: 0.8rem; font-style: italic; color: #8a7868; margin-top: 0.35rem; line-height: 1.4; }

        /* ---- CENTER: open letter ---- */
        .sheet-wrap { display: flex; flex-direction: column; align-items: center; }
        .sheet {
          position: relative; width: 100%; max-width: 560px; min-height: 440px;
          background:
            repeating-linear-gradient(0deg, transparent 0 31px, rgba(120,95,70,0.07) 31px 32px),
            linear-gradient(180deg, #fffdf6, #fbf4e6);
          border: 1px solid rgba(120,95,70,0.2);
          border-radius: 2px;
          box-shadow: 0 18px 40px rgba(74,52,38,0.16), 0 2px 0 rgba(255,255,255,0.6) inset;
          padding: 2.4rem 2.6rem 3rem;
          transition: opacity 0.5s ease;
        }
        .sheet::before {
          content: ''; position: absolute; inset: 0; pointer-events: none; border-radius: 2px;
          background: radial-gradient(ellipse at 80% 90%, rgba(154,106,90,0.08), transparent 55%);
        }
        .sheet-key { animation: fadeIn 0.7s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        .sheet-to { font-style: italic; font-size: 1.15rem; color: #9a6a5a; margin-bottom: 1.3rem; }
        .sheet-p { font-size: 1.05rem; line-height: 1.75; color: #4a3f33; margin: 0 0 1rem; }
        .sheet-sign { font-family: 'Caveat', cursive; font-size: 1.5rem; color: #6a5a48; margin-top: 1.6rem; }

        .wax-seal {
          position: absolute; bottom: 1.6rem; right: 2rem;
          width: 64px; height: 64px; border-radius: 50%;
          background: radial-gradient(circle at 38% 34%, #b65d54, #8c3d36 70%, #6e2c27);
          color: rgba(255,236,228,0.85);
          display: flex; align-items: center; justify-content: center;
          font-family: 'EB Garamond', serif; font-style: italic; font-size: 1.6rem;
          box-shadow: 0 4px 10px rgba(74,30,28,0.35), inset 0 2px 4px rgba(255,255,255,0.2);
          transform: scale(0); transition: transform 0.5s cubic-bezier(0.34,1.3,0.64,1);
        }
        .wax-seal.show { transform: scale(1); }
        .wax-seal.pop { animation: stamp 0.45s cubic-bezier(0.34,1.5,0.5,1); }
        @keyframes stamp { 0% { transform: scale(2.2); opacity: 0; } 60% { transform: scale(0.92); opacity: 1; } 100% { transform: scale(1); } }

        .sheet-caption { font-family: 'Caveat', cursive; font-size: 1.05rem; color: #a8957c; margin-top: 0.9rem; }

        /* ---- RIGHT aside ---- */
        .aside-card {
          background: rgba(255,252,244,0.55); border: 1px solid rgba(120,95,70,0.18);
          border-radius: 4px; padding: 1rem 1.1rem; margin-bottom: 1.1rem;
        }
        .weather-row { display: flex; align-items: center; gap: 0.6rem; }
        .weather-icon { font-size: 1.6rem; }
        .weather-text { line-height: 1.3; }
        .weather-main { font-size: 0.95rem; color: #5a4a3a; }
        .weather-sub { font-family: 'Caveat', cursive; font-size: 0.95rem; color: #a8957c; }

        .ink-label { display: flex; justify-content: space-between; font-size: 0.82rem; color: #7a6a56; margin-bottom: 0.45rem; }
        .ink-bar { height: 7px; background: rgba(120,95,70,0.15); border-radius: 4px; overflow: hidden; }
        .ink-fill { height: 100%; background: linear-gradient(90deg, #6a4a5a, #9a6a5a); border-radius: 4px; transition: width 0.6s ease; }

        .seal-btn {
          width: 100%; font-family: 'EB Garamond', serif; font-size: 0.98rem; letter-spacing: 0.02em;
          background: #9a6a5a; color: #fff5ee; border: 1px solid #7e4e44; border-radius: 4px;
          padding: 0.7rem; cursor: pointer; transition: background 0.3s ease, transform 0.1s ease;
        }
        .seal-btn:hover { background: #8a5a4a; }
        .seal-btn:active { transform: translateY(1px); }
        .seal-btn:disabled { background: rgba(120,95,70,0.2); color: #8a7868; border-color: transparent; cursor: default; }
        .seal-note { font-family: 'Caveat', cursive; font-size: 0.9rem; color: #a8957c; text-align: center; margin-top: 0.6rem; line-height: 1.3; }

        @media (max-width: 880px) {
          .unsent-stage { grid-template-columns: 1fr; }
          .sheet-wrap { order: 1; }
        }
      `}</style>

      {/* rain */}
      <div className="rain-field">
        {rain.map((r, i) => (
          <span
            key={i}
            className="rain-streak"
            style={{
              left: `${r.left}%`,
              height: r.height,
              opacity: r.opacity,
              animationDelay: `${r.delay}s`,
              animationDuration: `${r.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="unsent-topbar">
        <div className="unsent-title">
          Letters <em>Never Sent</em>
        </div>
        <div className="unsent-date">a grey Thursday, late afternoon</div>
      </div>

      <div className="unsent-stage">
        {/* LEFT */}
        <div>
          <div className="stack-title">the ones I kept</div>
          {letters.map((l) => (
            <div
              key={l.id}
              className={`letter-item ${l.id === activeId ? "active" : ""}`}
              onClick={() => setActiveId(l.id)}
            >
              <div className="li-to">{l.to}</div>
              <div className="li-meta">
                <span className="li-date">{l.date}</span>
                {l.sealed && <span className="li-seal-dot">● sealed</span>}
              </div>
              <div className="li-preview">{l.preview}</div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="sheet-wrap">
          <div className="sheet" key={active.id}>
            <div className="sheet-key">
              <div className="sheet-to">{active.to},</div>
              {active.body.map((p, i) => (
                <p className="sheet-p" key={i}>
                  {p}
                </p>
              ))}
              <div className="sheet-sign">— always, but never out loud</div>
            </div>
            <div
              className={`wax-seal ${active.sealed ? "show" : ""} ${
                justSealed === active.id ? "pop" : ""
              }`}
              onAnimationEnd={() => setJustSealed(null)}
            >
              s
            </div>
          </div>
          <div className="sheet-caption">
            written to be kept, not delivered
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="aside-title">outside the window</div>
          <div className="aside-card">
            <div className="weather-row">
              <span className="weather-icon">🌧</span>
              <span className="weather-text">
                <span className="weather-main">Steady rain · 11°</span>
                <br />
                <span className="weather-sub">good weather for staying in</span>
              </span>
            </div>
          </div>

          <div className="aside-card">
            <div className="ink-label">
              <span>ink remaining</span>
              <span>{inkLevel}%</span>
            </div>
            <div className="ink-bar">
              <div className="ink-fill" style={{ width: `${inkLevel}%` }} />
            </div>
          </div>

          <button
            className="seal-btn"
            type="button"
            onClick={seal}
            disabled={active.sealed}
          >
            {active.sealed ? "sealed & kept" : "seal & keep"}
          </button>
          <div className="seal-note">it will never be sent —<br />only set down gently</div>
        </div>
      </div>
    </div>
  );
};
