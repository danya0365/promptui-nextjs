"use client";

import React, { useState } from "react";

const INK = "#5a4632";
const LEAF = "#6f7e4a";

// --- botanical line drawings ---
function Fern() {
  return (
    <g stroke={LEAF} strokeWidth="1.4" fill="none" strokeLinecap="round">
      <path d="M100,260 C 96,180 100,110 100,40" strokeWidth="2" />
      {[...Array(13)].map((_, i) => {
        const y = 56 + i * 15;
        const len = 12 + (13 - i) * 4;
        return (
          <g key={i}>
            <path d={`M100,${y} C ${100 - len * 0.5},${y - 4} ${100 - len},${y} ${100 - len},${y + 6}`} />
            <path d={`M100,${y} C ${100 + len * 0.5},${y - 4} ${100 + len},${y} ${100 + len},${y + 6}`} />
          </g>
        );
      })}
    </g>
  );
}

function Foxglove() {
  return (
    <g stroke={INK} strokeWidth="1.3" fill="none" strokeLinecap="round">
      <path d="M108,260 C 104,180 110,110 108,46" strokeWidth="2" stroke={LEAF} />
      {[...Array(6)].map((_, i) => {
        const y = 70 + i * 26;
        return (
          <ellipse key={i} cx={128} cy={y} rx="15" ry="10" stroke="#9a6a86" fill="rgba(154,106,134,0.12)" transform={`rotate(20 128 ${y})`} />
        );
      })}
      {/* basal leaves */}
      <path d="M108,250 C 70,240 56,210 64,196 C 88,206 104,228 108,250 Z" stroke={LEAF} fill="rgba(111,126,74,0.1)" />
      <path d="M108,256 C 146,248 162,222 156,206 C 130,214 112,234 108,256 Z" stroke={LEAF} fill="rgba(111,126,74,0.1)" />
    </g>
  );
}

function OakSprig() {
  const leaf = (x: number, y: number, rot: number) =>
    `M${x},${y} C ${x - 22},${y - 6} ${x - 26},${y - 24} ${x - 14},${y - 30} C ${x - 18},${y - 18} ${x - 4},${y - 16} ${x},${y - 22} C ${x + 4},${y - 16} ${x + 18},${y - 18} ${x + 14},${y - 30} C ${x + 26},${y - 24} ${x + 22},${y - 6} ${x},${y} Z`;
  return (
    <g stroke={INK} strokeWidth="1.3" fill="none" strokeLinecap="round">
      <path d="M100,258 C 102,200 96,140 104,70" strokeWidth="2" stroke="#7a5a3a" />
      <path d={leaf(74, 210, 0)} stroke={LEAF} fill="rgba(111,126,74,0.12)" />
      <path d={leaf(126, 175, 0)} stroke={LEAF} fill="rgba(111,126,74,0.12)" />
      <path d={leaf(78, 140, 0)} stroke={LEAF} fill="rgba(111,126,74,0.12)" />
      <path d={leaf(122, 108, 0)} stroke={LEAF} fill="rgba(111,126,74,0.12)" />
      {/* acorn */}
      <ellipse cx="104" cy="70" rx="8" ry="11" stroke="#8a6a3a" fill="rgba(138,106,58,0.18)" />
      <path d="M96,64 q8,-8 16,0" stroke="#7a5a3a" />
    </g>
  );
}

function Dandelion() {
  return (
    <g stroke={INK} strokeWidth="1.2" fill="none" strokeLinecap="round">
      <path d="M104,260 C 100,200 106,150 104,108" strokeWidth="2" stroke={LEAF} />
      {[...Array(22)].map((_, i) => {
        const a = (i / 22) * Math.PI * 2;
        const x2 = 104 + Math.cos(a) * 38;
        const y2 = 96 + Math.sin(a) * 38;
        return (
          <g key={i}>
            <line x1="104" y1="96" x2={x2} y2={y2} stroke="#9a8a6a" />
            <circle cx={x2} cy={y2} r="1.6" fill="#9a8a6a" stroke="none" />
          </g>
        );
      })}
      <circle cx="104" cy="96" r="6" stroke="#8a6a3a" fill="rgba(138,106,58,0.2)" />
    </g>
  );
}

interface Specimen {
  id: number;
  acc: string;
  family: string;
  latin: string;
  common: string;
  locality: string;
  collector: string;
  date: string;
  note: string;
  draw: React.FC;
}

const SPECIMENS: Specimen[] = [
  {
    id: 1, acc: "HB·1047", family: "ASPLENIACEAE", latin: "Asplenium scolopendrium", common: "Hart's-tongue Fern",
    locality: "Shaded ravine, Glen Affric", collector: "E. M. Thornwood", date: "14 June 1887",
    note: "Found clinging to a damp limestone seam where no sun reaches before noon. Fronds unusually broad this season.",
    draw: Fern,
  },
  {
    id: 2, acc: "HB·1112", family: "PLANTAGINACEAE", latin: "Digitalis purpurea", common: "Common Foxglove",
    locality: "Hedgerow margin, Wexford", collector: "A. Beaumont", date: "2 July 1889",
    note: "Bees would not leave it be. The bells deepen in colour toward the crown. Handle with care — all parts are poisonous.",
    draw: Foxglove,
  },
  {
    id: 3, acc: "HB·0934", family: "FAGACEAE", latin: "Quercus robur", common: "English Oak",
    locality: "Old common, Surrey Weald", collector: "E. M. Thornwood", date: "29 Sept 1886",
    note: "A single sprig from a tree the villagers swear is four hundred years old. One acorn retained for the seed press.",
    draw: OakSprig,
  },
  {
    id: 4, acc: "HB·1203", family: "ASTERACEAE", latin: "Taraxacum officinale", common: "Dandelion (in seed)",
    locality: "Roadside verge, Cumbria", collector: "A. Beaumont", date: "11 May 1890",
    note: "Pressed the moment before the wind could claim it. A small miracle that the clock survived the journey intact.",
    draw: Dandelion,
  },
];

export const HerbariumDemoClaudeOpus: React.FC = () => {
  const [id, setId] = useState(1);
  const [lens, setLens] = useState(false);

  const sp = SPECIMENS.find((s) => s.id === id) ?? SPECIMENS[0];
  const Draw = sp.draw;

  return (
    <div className="hb-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Cutive&family=Caveat:wght@500;600&display=swap');

        .hb-root {
          min-height: 100vh; width: 100%;
          background: #ece2c8;
          background-image:
            radial-gradient(circle at 18% 22%, rgba(150,120,70,0.1) 0%, transparent 9%),
            radial-gradient(circle at 78% 64%, rgba(150,120,70,0.08) 0%, transparent 8%),
            radial-gradient(circle at 50% 90%, rgba(120,90,50,0.06) 0%, transparent 12%),
            linear-gradient(180deg, #f0e7ce, #e4d8ba);
          color: #5a4632; font-family: 'EB Garamond', serif;
          position: relative; overflow: hidden; padding: 1.8rem 2rem;
        }

        .hb-top { text-align: center; border-bottom: 2px double #b6a276; padding-bottom: 0.8rem; margin-bottom: 1.3rem; }
        .hb-title { font-family: 'EB Garamond', serif; font-weight: 500; font-size: 1.7rem; letter-spacing: 0.18em; color: #4a3826; }
        .hb-sub { font-family: 'Cutive', serif; font-size: 0.68rem; letter-spacing: 0.32em; color: #8a7452; margin-top: 0.35rem; text-transform: uppercase; }

        .hb-body { display: grid; grid-template-columns: 220px 1fr 230px; gap: 1.6rem; max-width: 980px; margin: 0 auto; }

        .hb-h { font-family: 'Cutive', serif; font-size: 0.64rem; letter-spacing: 0.22em; text-transform: uppercase; color: #9a8460; margin-bottom: 0.8rem; }

        /* index */
        .idx { cursor: pointer; padding: 0.55rem 0.3rem; border-bottom: 1px dotted #c2b28a; transition: padding-left 0.25s ease; }
        .idx:hover { padding-left: 0.5rem; }
        .idx.active { padding-left: 0.5rem; }
        .idx-latin { font-style: italic; font-size: 1.02rem; color: #4a3826; }
        .idx.active .idx-latin { color: #6a4a2a; text-decoration: underline; text-decoration-style: wavy; text-decoration-color: #b08a5a; }
        .idx-meta { display: flex; justify-content: space-between; font-family: 'Cutive', serif; font-size: 0.66rem; color: #9a8460; margin-top: 0.2rem; }

        /* sheet */
        .sheet {
          position: relative; background: #f6efd9; border: 1px solid #cbb98a;
          box-shadow: 0 12px 30px rgba(90,70,40,0.2); padding: 1rem; min-height: 420px;
          background-image: radial-gradient(circle at 30% 40%, rgba(150,120,70,0.05), transparent 40%);
        }
        .tape { position: absolute; width: 56px; height: 20px; background: rgba(210,190,140,0.55); border: 1px solid rgba(150,120,70,0.3); }
        .tape.t1 { top: -8px; left: 30px; transform: rotate(-6deg); }
        .tape.t2 { top: -8px; right: 30px; transform: rotate(5deg); }
        .tape.t3 { bottom: 70px; left: 22px; transform: rotate(4deg); }
        .tape.t4 { bottom: 70px; right: 22px; transform: rotate(-5deg); }

        .specimen-stage { display: flex; justify-content: center; padding: 0.5rem 0 1rem; }
        .specimen-svg { transition: transform 0.5s ease; transform-origin: center 60%; }
        .specimen-svg.lens { transform: scale(1.35); }
        .specimen-fade { animation: fadein 0.6s ease; }
        @keyframes fadein { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; } }

        /* label box (bottom-right, herbarium style) */
        .label-box {
          position: absolute; bottom: 14px; right: 14px; width: 220px;
          border: 1px solid #8a7452; background: #fbf6e6; padding: 0.6rem 0.8rem;
          font-family: 'Cutive', serif; font-size: 0.72rem; line-height: 1.5; color: #4a3826;
          box-shadow: 2px 2px 0 rgba(150,120,70,0.2);
        }
        .lb-fam { font-size: 0.58rem; letter-spacing: 0.18em; color: #9a8460; }
        .lb-latin { font-family: 'EB Garamond', serif; font-style: italic; font-size: 1rem; color: #4a3826; margin: 0.1rem 0 0.3rem; }
        .lb-row { display: flex; gap: 0.4rem; }
        .lb-k { color: #9a8460; min-width: 52px; }
        .acc-stamp {
          position: absolute; top: 16px; left: 16px; font-family: 'Cutive', serif; font-size: 0.72rem;
          color: #9a5a4a; border: 1.5px solid #b07a6a; padding: 0.15rem 0.5rem; transform: rotate(-3deg); opacity: 0.8;
        }
        .lens-btn {
          position: absolute; top: 14px; right: 14px; cursor: pointer;
          font-family: 'Cutive', serif; font-size: 0.68rem; background: #ece2c8; border: 1px solid #b6a276;
          padding: 0.3rem 0.6rem; color: #6a5436;
        }
        .lens-btn:hover { background: #e0d4b2; }

        /* notes */
        .note-card { font-style: italic; }
        .note-text { font-size: 1.05rem; line-height: 1.7; color: #4a3826; }
        .note-quill { font-family: 'Caveat', cursive; font-style: normal; font-size: 1.25rem; color: #7a5a3a; margin-top: 1rem; text-align: right; }
        .note-div { height: 1px; background: repeating-linear-gradient(90deg, #b6a276 0 4px, transparent 4px 8px); margin: 1rem 0; }
        .note-detail { font-family: 'Cutive', serif; font-style: normal; font-size: 0.74rem; color: #8a7452; line-height: 1.8; }

        @media (max-width: 880px) { .hb-body { grid-template-columns: 1fr; } .label-box { position: static; width: auto; margin-top: 1rem; } }
      `}</style>

      <div className="hb-top">
        <div className="hb-title">HERBARIUM</div>
        <div className="hb-sub">Thornwood Collection of Pressed Flora · Accession MDCCCXC</div>
      </div>

      <div className="hb-body">
        {/* INDEX */}
        <div>
          <div className="hb-h">Specimen Index</div>
          {SPECIMENS.map((s) => (
            <div key={s.id} className={`idx ${s.id === id ? "active" : ""}`} onClick={() => setId(s.id)}>
              <div className="idx-latin">{s.latin}</div>
              <div className="idx-meta"><span>{s.common}</span><span>{s.acc}</span></div>
            </div>
          ))}
        </div>

        {/* SHEET */}
        <div className="sheet">
          <span className="tape t1" /><span className="tape t2" /><span className="tape t3" /><span className="tape t4" />
          <span className="acc-stamp">No. {sp.acc}</span>
          <button type="button" className="lens-btn" onClick={() => setLens((l) => !l)}>
            {lens ? "— reduce" : "🔍 lens"}
          </button>

          <div className="specimen-stage">
            <svg
              key={sp.id}
              className={`specimen-svg specimen-fade ${lens ? "lens" : ""}`}
              width="210"
              height="300"
              viewBox="0 0 210 280"
            >
              <Draw />
            </svg>
          </div>

          <div className="label-box">
            <div className="lb-fam">{sp.family}</div>
            <div className="lb-latin">{sp.latin}</div>
            <div className="lb-row"><span className="lb-k">Locality</span><span>{sp.locality}</span></div>
            <div className="lb-row"><span className="lb-k">Collector</span><span>{sp.collector}</span></div>
            <div className="lb-row"><span className="lb-k">Date</span><span>{sp.date}</span></div>
          </div>
        </div>

        {/* NOTES */}
        <div className="note-card">
          <div className="hb-h">Field Notes</div>
          <div className="note-text">“{sp.note}”</div>
          <div className="note-quill">— {sp.collector.split(" ").slice(-1)[0]}</div>
          <div className="note-div" />
          <div className="note-detail">
            COMMON NAME<br />{sp.common}<br /><br />
            FAMILY<br />{sp.family}<br /><br />
            PRESSED &amp; MOUNTED<br />{sp.date}
          </div>
        </div>
      </div>
    </div>
  );
};
