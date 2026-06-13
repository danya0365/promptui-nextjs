"use client";

import React, { useState } from "react";

interface Act {
  id: number;
  time: string;
  name: string;
  kind: string;
  feature: string;
}

const PROGRAM: Act[] = [
  { id: 1, time: "20:00", name: "The Velvet Quartet", kind: "Swing", feature: "Opening the evening with brushed snares and low gold light." },
  { id: 2, time: "21:30", name: "Miss Josephine Ray", kind: "Torch Song", feature: "The room hushes. One spotlight, one voice, every heart held." },
  { id: 3, time: "23:00", name: "The Midnight Stride", kind: "Hot Jazz", feature: "Piano like fireworks — the floor will not stay still for this." },
  { id: 4, time: "00:30", name: "After-Hours Reverie", kind: "Cool", feature: "Smoke, slow bass, and the last martini of the night." },
];

const COCKTAILS = [
  { name: "The Bee's Knees", price: "14" },
  { name: "Gilded Sidecar", price: "16" },
  { name: "Midnight in Manhattan", price: "15" },
  { name: "French 75", price: "15" },
  { name: "Emerald Gimlet", price: "13" },
];

const TABLES = [1, 2, 3, 4, 5, 6, 7, 8];

export const ArtDecoSpeakeasyDemoClaudeOpus: React.FC = () => {
  const [actId, setActId] = useState(2);
  const [reserved, setReserved] = useState<Record<number, boolean>>({ 3: true, 6: true });

  const act = PROGRAM.find((a) => a.id === actId) ?? PROGRAM[0];
  const open = TABLES.length - Object.values(reserved).filter(Boolean).length;

  const toggleTable = (t: number) =>
    setReserved((r) => ({ ...r, [t]: !r[t] }));

  return (
    <div className="deco-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poiret+One&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital@0;1&display=swap');

        .deco-root {
          min-height: 100vh; width: 100%;
          background:
            radial-gradient(ellipse at 50% 0%, #123a30 0%, #0a1f1a 45%, #060d0b 100%);
          color: #e9dfc4;
          font-family: 'Poiret One', sans-serif;
          position: relative; overflow: hidden;
          padding: 1.8rem;
        }
        /* faint sunburst over whole bg */
        .deco-root::before {
          content: ''; position: absolute; top: -30%; left: 50%; transform: translateX(-50%);
          width: 140vw; height: 140vw; pointer-events: none; opacity: 0.06; z-index: 0;
          background: repeating-conic-gradient(from 0deg at 50% 0%, #d4af37 0deg 1.4deg, transparent 1.4deg 6deg);
        }

        .deco-wrap { position: relative; z-index: 2; max-width: 960px; margin: 0 auto; }

        /* gold helpers */
        .gold {
          background: linear-gradient(180deg, #f6e6a8, #d4af37 55%, #a8842a);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .rule { height: 1px; background: linear-gradient(90deg, transparent, #d4af37, transparent); margin: 0.6rem 0; }

        /* ---- header ---- */
        .deco-head { text-align: center; padding: 1.4rem 0 1.6rem; position: relative; }
        .sunburst {
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
          width: 360px; height: 200px; z-index: -1; opacity: 0.5;
          background: repeating-conic-gradient(from 0deg at 50% 0%, rgba(212,175,55,0.5) 0deg 0.8deg, transparent 0.8deg 5deg);
          mask-image: radial-gradient(ellipse at 50% 0%, #000 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 30%, transparent 70%);
        }
        .stepframe {
          display: inline-block; padding: 0.9rem 2.4rem; position: relative;
          border: 2px solid #d4af37;
          box-shadow: inset 0 0 0 4px #060d0b, inset 0 0 0 6px #d4af37;
        }
        .stepframe::before, .stepframe::after {
          content: ''; position: absolute; top: 50%; width: 30px; height: 2px; background: #d4af37;
        }
        .stepframe::before { left: -34px; } .stepframe::after { right: -34px; }
        .club-est { font-family: 'Cinzel', serif; font-size: 0.62rem; letter-spacing: 0.5em; color: #c9b885; }
        .club-name { font-family: 'Cinzel', serif; font-weight: 700; font-size: 2.1rem; letter-spacing: 0.14em; line-height: 1.1; margin: 0.2rem 0; }
        .club-tag { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1rem; color: #c9b885; letter-spacing: 0.05em; }

        /* chevron divider */
        .chevron {
          height: 14px; margin: 1.2rem auto; width: 60%;
          background: repeating-linear-gradient(90deg, transparent 0 8px, #d4af37 8px 9px);
          opacity: 0.4;
          clip-path: polygon(0 0, 4% 100%, 8% 0, 12% 100%, 16% 0, 20% 100%, 24% 0, 28% 100%, 32% 0, 36% 100%, 40% 0, 44% 100%, 48% 0, 52% 100%, 56% 0, 60% 100%, 64% 0, 68% 100%, 72% 0, 76% 100%, 80% 0, 84% 100%, 88% 0, 92% 100%, 96% 0, 100% 100%);
        }

        /* ---- body ---- */
        .deco-body { display: grid; grid-template-columns: 1fr 1.1fr 1fr; gap: 1.6rem; align-items: start; }
        .col-title { font-family: 'Cinzel', serif; font-size: 0.92rem; letter-spacing: 0.28em; text-align: center; margin-bottom: 0.4rem; }
        .col-sub { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.82rem; color: #b6a875; text-align: center; margin-bottom: 0.9rem; }

        /* program */
        .act {
          cursor: pointer; padding: 0.6rem 0.4rem; border-bottom: 1px solid rgba(212,175,55,0.18);
          display: flex; align-items: baseline; gap: 0.7rem; transition: color 0.3s ease;
          color: #c9bf9e;
        }
        .act:hover { color: #f6e6a8; }
        .act-time { font-family: 'Cinzel', serif; font-size: 0.84rem; color: #d4af37; min-width: 48px; }
        .act-name { font-size: 1.08rem; flex: 1; }
        .act-kind { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.8rem; color: #9a8c5f; }
        .act.active { color: #f6e6a8; }
        .act.active .act-name { text-shadow: 0 0 12px rgba(212,175,55,0.4); }
        .feature {
          margin-top: 1rem; font-family: 'Cormorant Garamond', serif; font-style: italic;
          font-size: 1rem; line-height: 1.55; color: #d9cda0; text-align: center;
          border-top: 1px solid rgba(212,175,55,0.2); padding-top: 0.8rem;
        }

        /* reservation tables */
        .tables { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.55rem; }
        .table {
          aspect-ratio: 1; cursor: pointer; position: relative;
          border: 1.5px solid rgba(212,175,55,0.5);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          font-family: 'Cinzel', serif; color: #c9bf9e; background: rgba(212,175,55,0.03);
          transition: all 0.3s ease;
        }
        .table:hover { border-color: #d4af37; }
        .table .t-no { font-size: 1.1rem; }
        .table .t-state { font-size: 0.5rem; letter-spacing: 0.1em; margin-top: 0.2rem; color: #9a8c5f; }
        .table.taken {
          background: linear-gradient(180deg, #f6e6a8, #d4af37 60%, #a8842a);
          color: #0a1f1a; border-color: #f6e6a8;
          box-shadow: 0 0 16px rgba(212,175,55,0.35);
        }
        .table.taken .t-state { color: #5a4710; }

        .res-stat { text-align: center; margin-top: 0.9rem; font-family: 'Cormorant Garamond', serif; font-style: italic; color: #c9b885; font-size: 0.95rem; }
        .res-btn {
          display: block; margin: 0.8rem auto 0; cursor: pointer; position: relative; overflow: hidden;
          font-family: 'Cinzel', serif; font-weight: 600; letter-spacing: 0.18em; font-size: 0.78rem;
          background: transparent; color: #0a1f1a; border: none; padding: 0.7rem 1.6rem;
          background: linear-gradient(180deg, #f6e6a8, #d4af37 60%, #a8842a);
        }
        .res-btn::after {
          content: ''; position: absolute; top: 0; left: -60%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
          transform: skewX(-20deg); animation: sweep 3.4s ease-in-out infinite;
        }
        @keyframes sweep { 0% { left: -60%; } 55%, 100% { left: 140%; } }

        /* cocktails */
        .ctail { display: flex; align-items: baseline; padding: 0.5rem 0.3rem; }
        .ctail-name { font-size: 1.02rem; color: #d9cda0; }
        .ctail-dots { flex: 1; border-bottom: 1px dotted rgba(212,175,55,0.4); margin: 0 6px 5px; }
        .ctail-price { font-family: 'Cinzel', serif; color: #d4af37; }
        .ctail-price::before { content: '$'; font-size: 0.7em; vertical-align: 0.15em; margin-right: 1px; }

        @media (max-width: 880px) {
          .deco-body { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <div className="deco-wrap">
        {/* HEADER */}
        <div className="deco-head">
          <div className="sunburst" />
          <div className="stepframe">
            <div className="club-est">— EST. 1923 —</div>
            <div className="club-name gold">THE GILDED ROOM</div>
            <div className="club-tag">a discreet establishment, by invitation</div>
          </div>
        </div>

        <div className="chevron" />

        <div className="deco-body">
          {/* PROGRAM */}
          <div>
            <div className="col-title gold">TONIGHT</div>
            <div className="col-sub">the evening's program</div>
            {PROGRAM.map((a) => (
              <div
                key={a.id}
                className={`act ${a.id === actId ? "active" : ""}`}
                onClick={() => setActId(a.id)}
              >
                <span className="act-time">{a.time}</span>
                <span className="act-name">{a.name}</span>
                <span className="act-kind">{a.kind}</span>
              </div>
            ))}
            <div className="feature">{act.feature}</div>
          </div>

          {/* RESERVATIONS */}
          <div>
            <div className="col-title gold">RESERVATIONS</div>
            <div className="col-sub">claim your table for the night</div>
            <div className="tables">
              {TABLES.map((t) => (
                <div
                  key={t}
                  className={`table ${reserved[t] ? "taken" : ""}`}
                  onClick={() => toggleTable(t)}
                >
                  <span className="t-no">{String(t).padStart(2, "0")}</span>
                  <span className="t-state">{reserved[t] ? "RESERVED" : "OPEN"}</span>
                </div>
              ))}
            </div>
            <div className="res-stat">
              {open > 0 ? `${open} tables remain — choose swiftly` : "the room is full tonight"}
            </div>
            <button type="button" className="res-btn">RESERVE THE EVENING</button>
          </div>

          {/* COCKTAILS */}
          <div>
            <div className="col-title gold">LIBATIONS</div>
            <div className="col-sub">from the gilded bar</div>
            {COCKTAILS.map((c) => (
              <div className="ctail" key={c.name}>
                <span className="ctail-name">{c.name}</span>
                <span className="ctail-dots" />
                <span className="ctail-price">{c.price}</span>
              </div>
            ))}
            <div className="rule" />
            <div className="col-sub" style={{ marginBottom: 0 }}>
              ask the keeper for the unlisted reserve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
