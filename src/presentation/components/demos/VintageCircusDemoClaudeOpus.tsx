"use client";

import React, { useState } from "react";

interface Act {
  id: number;
  no: string;
  name: string;
  barker: string;
}

const ACTS: Act[] = [
  { id: 1, no: "I", name: "The Flying Aurelias", barker: "Defying gravity forty feet above the ring — and without a net to catch them!" },
  { id: 2, no: "II", name: "Leoncio, Tamer of Lions", barker: "Face to face with the kings of the savannah — hold your breath, ladies and gentlemen!" },
  { id: 3, no: "III", name: "The Mighty Atlas", barker: "He hoists a dray-horse above his head — and politely asks for something heavier!" },
  { id: 4, no: "IV", name: "Madame Esmé, Seer", barker: "She reads your tomorrow in the turn of a single, trembling card." },
  { id: 5, no: "V", name: "The Tumbling Pierrots", barker: "Chaos! Custard! And laughter quite beyond your control!" },
];

interface Tier {
  key: string;
  name: string;
  price: number;
  seat: string;
}

const TIERS: Tier[] = [
  { key: "gal", name: "The Gallery", price: 1, seat: "G-114" },
  { key: "sta", name: "The Stalls", price: 3, seat: "S-42" },
  { key: "ring", name: "Ringside", price: 5, seat: "R-08" },
  { key: "box", name: "The Royal Box", price: 12, seat: "BOX-1" },
];

export const VintageCircusDemoClaudeOpus: React.FC = () => {
  const [actId, setActId] = useState(1);
  const [tierKey, setTierKey] = useState("sta");
  const [booked, setBooked] = useState(false);

  const act = ACTS.find((a) => a.id === actId) ?? ACTS[0];
  const tier = TIERS.find((t) => t.key === tierKey) ?? TIERS[1];

  const pickTier = (k: string) => { setTierKey(k); setBooked(false); };

  return (
    <div className="cir-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rye&family=Abril+Fatface&family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap');

        .cir-root {
          min-height: 100vh; width: 100%;
          background: #efe2c2;
          background-image:
            radial-gradient(circle at 20% 15%, rgba(120,80,40,0.08) 0%, transparent 10%),
            radial-gradient(circle at 80% 70%, rgba(120,80,40,0.07) 0%, transparent 9%),
            repeating-linear-gradient(0deg, rgba(90,60,30,0.03) 0 3px, transparent 3px 6px),
            linear-gradient(180deg, #f2e6c6, #e6d6ae);
          color: #2a1a12; font-family: 'Playfair Display', serif;
          position: relative; overflow: hidden; padding: 1.4rem;
          display: flex; justify-content: center;
        }

        .bill {
          position: relative; width: 100%; max-width: 880px;
          border: 3px solid #2a1a12; padding: 1.4rem 1.6rem;
          box-shadow: inset 0 0 0 6px #efe2c2, inset 0 0 0 8px #b5223a, 0 16px 40px rgba(60,30,15,0.35);
          background: #f4e8ca;
        }

        /* masthead */
        .masthead { text-align: center; position: relative; padding: 0.6rem 0 1rem; }
        .sunburst {
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
          width: 420px; height: 220px; z-index: 0; opacity: 0.4;
          background: repeating-conic-gradient(from 0deg at 50% 30%, #d8a73a 0deg 4deg, transparent 4deg 8deg);
          mask-image: radial-gradient(ellipse at 50% 30%, #000 35%, transparent 68%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 35%, transparent 68%);
        }
        .mh-top { position: relative; z-index: 1; font-family: 'Rye', serif; font-size: 0.9rem; letter-spacing: 0.2em; color: #b5223a; }
        .mh-title {
          position: relative; z-index: 1; font-family: 'Abril Fatface', serif; font-size: clamp(2.4rem, 7vw, 4rem);
          line-height: 0.9; color: #2a1a12; margin: 0.2rem 0; text-shadow: 2px 2px 0 #d8a73a;
        }
        .ribbon {
          position: relative; z-index: 1; display: inline-block; background: #b5223a; color: #f4e8ca;
          font-family: 'Rye', serif; font-size: 1rem; letter-spacing: 0.1em; padding: 0.35rem 2rem; margin-top: 0.3rem;
          clip-path: polygon(6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%, 0 50%);
        }
        .rule {
          display: flex; align-items: center; justify-content: center; gap: 0.6rem; margin: 1rem 0 1.2rem;
          color: #7a5a30; font-size: 0.9rem;
        }
        .rule::before, .rule::after { content: ''; height: 2px; flex: 1; background: repeating-linear-gradient(90deg, #2a1a12 0 8px, transparent 8px 12px); }

        .cir-cols { display: grid; grid-template-columns: 1fr 300px; gap: 1.6rem; }

        /* program */
        .prog-h { font-family: 'Rye', serif; font-size: 1.1rem; text-align: center; color: #b5223a; margin-bottom: 0.8rem; }
        .act {
          display: flex; align-items: baseline; gap: 0.8rem; cursor: pointer;
          padding: 0.55rem 0.5rem; border-bottom: 2px solid rgba(42,26,18,0.18); transition: background 0.2s ease;
        }
        .act:hover { background: rgba(181,34,58,0.06); }
        .act.active { background: rgba(216,167,58,0.18); }
        .act-no { font-family: 'Abril Fatface', serif; font-size: 1.2rem; color: #b5223a; min-width: 32px; text-align: center; }
        .act-name { font-weight: 800; font-size: 1.12rem; flex: 1; }
        .act-hand { color: #b5223a; font-size: 1.1rem; opacity: 0; }
        .act.active .act-hand { opacity: 1; }
        .barker {
          margin-top: 0.9rem; text-align: center; font-style: italic; font-size: 1.05rem; line-height: 1.5; color: #5a3a22;
          border-top: 2px solid rgba(42,26,18,0.18); padding-top: 0.8rem;
        }
        .barker b { font-family: 'Rye', serif; font-style: normal; color: #b5223a; }

        /* box office */
        .box-h { font-family: 'Rye', serif; font-size: 1rem; text-align: center; color: #2a1a12; margin-bottom: 0.7rem; }
        .tier {
          display: flex; align-items: center; justify-content: space-between; cursor: pointer;
          border: 2px solid #2a1a12; padding: 0.45rem 0.7rem; margin-bottom: 0.5rem; background: #efe2c2;
          transition: all 0.2s ease;
        }
        .tier:hover { background: #e6d4aa; }
        .tier.active { background: #2a1a12; color: #f4e8ca; }
        .tier-name { font-weight: 800; font-size: 0.95rem; }
        .tier-price { font-family: 'Abril Fatface', serif; font-size: 1.1rem; }
        .tier.active .tier-price { color: #d8a73a; }

        /* ticket stub */
        .ticket {
          margin-top: 1rem; position: relative; background: #fbf3da; border: 2px dashed #b5223a;
          padding: 0.9rem 1rem; text-align: center; color: #2a1a12;
        }
        .ticket::before, .ticket::after {
          content: ''; position: absolute; top: 50%; width: 16px; height: 16px; background: #f4e8ca;
          border-radius: 50%; border: 2px solid #b5223a; transform: translateY(-50%);
        }
        .ticket::before { left: -10px; } .ticket::after { right: -10px; }
        .tk-admit { font-family: 'Rye', serif; font-size: 0.78rem; letter-spacing: 0.2em; color: #b5223a; }
        .tk-tier { font-family: 'Abril Fatface', serif; font-size: 1.4rem; margin: 0.15rem 0; }
        .tk-row { display: flex; justify-content: space-between; font-size: 0.78rem; color: #5a3a22; margin-top: 0.3rem; }
        .tk-once { font-family: 'Rye', serif; font-size: 0.62rem; letter-spacing: 0.14em; color: #7a5a30; margin-top: 0.5rem; }
        .book-btn {
          width: 100%; margin-top: 0.8rem; cursor: pointer; font-family: 'Rye', serif; font-size: 0.95rem; letter-spacing: 0.06em;
          background: #b5223a; color: #f4e8ca; border: 2px solid #2a1a12; padding: 0.6rem; box-shadow: 3px 3px 0 #2a1a12;
        }
        .book-btn:active { transform: translate(3px,3px); box-shadow: none; }
        .book-btn:disabled { background: #7a5a30; cursor: default; }
        .sold-stamp {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%) rotate(-12deg);
          font-family: 'Rye', serif; font-size: 1.6rem; color: rgba(181,34,58,0.85);
          border: 4px solid rgba(181,34,58,0.85); border-radius: 6px; padding: 0.1rem 0.7rem; pointer-events: none;
          animation: thunk 0.4s cubic-bezier(0.3,1.4,0.5,1);
        }
        @keyframes thunk { 0% { transform: translate(-50%,-50%) rotate(-12deg) scale(2.2); opacity: 0; } 60% { transform: translate(-50%,-50%) rotate(-12deg) scale(0.9); opacity: 1; } 100% { transform: translate(-50%,-50%) rotate(-12deg) scale(1); } }

        .footer { text-align: center; margin-top: 1.2rem; font-family: 'Rye', serif; font-size: 0.8rem; letter-spacing: 0.12em; color: #b5223a; }

        @media (max-width: 820px) { .cir-cols { grid-template-columns: 1fr; } }
      `}</style>

      <div className="bill">
        {/* MASTHEAD */}
        <div className="masthead">
          <div className="sunburst" />
          <div className="mh-top">✦ POSITIVELY THE GREATEST SHOW UPON THE EARTH ✦</div>
          <div className="mh-title">THE GRAND<br />SPECTACULAR</div>
          <div className="ribbon">★ ONE NIGHT ONLY ★</div>
        </div>

        <div className="rule">❧ &nbsp; TONIGHT'S PROGRAMME &nbsp; ❧</div>

        <div className="cir-cols">
          {/* PROGRAM */}
          <div>
            <div className="prog-h">~ Five Astonishing Acts ~</div>
            {ACTS.map((a) => (
              <div key={a.id} className={`act ${a.id === actId ? "active" : ""}`} onClick={() => setActId(a.id)}>
                <span className="act-no">{a.no}</span>
                <span className="act-name">{a.name}</span>
                <span className="act-hand">☞</span>
              </div>
            ))}
            <div className="barker">
              <b>Behold!</b> {act.barker}
            </div>
          </div>

          {/* BOX OFFICE */}
          <div>
            <div className="box-h">✦ BOX OFFICE ✦</div>
            {TIERS.map((t) => (
              <div key={t.key} className={`tier ${t.key === tierKey ? "active" : ""}`} onClick={() => pickTier(t.key)}>
                <span className="tier-name">{t.name}</span>
                <span className="tier-price">{t.price}/-</span>
              </div>
            ))}

            <div className="ticket">
              {booked && <div className="sold-stamp">BOOKED!</div>}
              <div className="tk-admit">✦ ADMIT ONE ✦</div>
              <div className="tk-tier">{tier.name}</div>
              <div className="tk-row"><span>SEAT {tier.seat}</span><span>{tier.price} SHILLING{tier.price > 1 ? "S" : ""}</span></div>
              <div className="tk-once">THE GRAND SPECTACULAR · DOORS AT VII</div>
            </div>

            <button type="button" className="book-btn" onClick={() => setBooked(true)} disabled={booked}>
              {booked ? "✦ TICKET BOOKED ✦" : "BOOK MY SEAT"}
            </button>
          </div>
        </div>

        <div className="footer">☜ CHILDREN HALF PRICE · BRASS BAND FROM SIX O'CLOCK ☞</div>
      </div>
    </div>
  );
};
