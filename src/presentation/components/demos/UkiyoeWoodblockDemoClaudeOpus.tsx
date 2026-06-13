"use client";

import React, { useState } from "react";

const OUTLINE = "#23303f";

function GreatWave() {
  const foam = [
    [40, 96], [70, 78], [104, 70], [140, 76], [60, 120], [96, 108], [130, 100],
  ];
  return (
    <g>
      <rect x="0" y="0" width="320" height="240" fill="#e7dcbe" />
      <rect x="0" y="0" width="320" height="70" fill="#ddd0ad" />
      {/* Mt Fuji */}
      <path d="M188,150 L226,96 L264,150 Z" fill="#7c8a96" stroke={OUTLINE} strokeWidth="2" />
      <path d="M214,110 L226,96 L240,110 L232,116 L226,110 L220,116 Z" fill="#f2ecd9" />
      {/* back swell */}
      <path d="M0,168 C 60,150 120,150 180,168 C 240,184 300,170 320,160 L320,240 L0,240 Z" fill="#3a5e82" stroke={OUTLINE} strokeWidth="2" />
      {/* great wave body */}
      <path d="M0,150 C 70,40 150,40 168,120 C 176,158 140,182 108,166 C 150,170 158,128 132,116 C 96,100 60,140 40,170 C 24,194 4,196 0,196 Z" fill="#1f4267" stroke={OUTLINE} strokeWidth="2.4" />
      {/* inner curl */}
      <path d="M150,96 C 120,84 96,104 96,128 C 110,112 132,108 150,118" fill="#dfeaf0" stroke={OUTLINE} strokeWidth="1.6" />
      {/* foam */}
      {foam.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5 + (i % 3) * 2} fill="#f2ecd9" stroke={OUTLINE} strokeWidth="1.4" />
      ))}
      {/* boat */}
      <path d="M150,200 C 170,210 210,210 234,200 C 224,212 176,212 150,200 Z" fill="#2a3a48" stroke={OUTLINE} strokeWidth="1.5" />
    </g>
  );
}

function RedFuji() {
  return (
    <g>
      <rect x="0" y="0" width="320" height="240" fill="#cfe0d2" />
      <rect x="0" y="0" width="320" height="60" fill="#bcd2c0" />
      <rect x="0" y="60" width="320" height="40" fill="#cfe0d2" />
      {/* clouds */}
      <path d="M0,46 C 40,38 70,52 110,44 C 150,36 180,50 220,44 L220,58 L0,58 Z" fill="#e8efe3" stroke={OUTLINE} strokeWidth="1.4" />
      {/* Fuji */}
      <path d="M40,210 L160,54 L286,210 Z" fill="#b1503a" stroke={OUTLINE} strokeWidth="2.4" />
      <path d="M118,108 L160,54 L204,108 C 188,98 176,112 160,104 C 146,112 132,98 118,108 Z" fill="#f2ecd9" stroke={OUTLINE} strokeWidth="1.4" />
      {/* foothill forest band */}
      <rect x="0" y="200" width="320" height="40" fill="#3f5e46" stroke={OUTLINE} strokeWidth="2" />
    </g>
  );
}

function CranesMoon() {
  return (
    <g>
      <rect x="0" y="0" width="320" height="240" fill="#d98a5a" />
      <rect x="0" y="0" width="320" height="70" fill="#c5764a" />
      <rect x="0" y="160" width="320" height="80" fill="#7a4a30" />
      <circle cx="232" cy="78" r="40" fill="#f2ecd9" />
      {/* cranes (simple silhouettes) */}
      <path d="M70,110 C 90,100 100,118 120,110 C 110,118 130,124 140,118 L132,128 C 116,132 96,128 86,120 C 80,124 72,120 70,110 Z" fill="#2a2018" />
      <path d="M150,150 C 168,142 178,158 196,150 C 188,158 206,164 214,158 L206,168 C 192,172 174,168 164,160 C 158,164 152,160 150,150 Z" fill="#2a2018" />
      {/* reeds */}
      {[30, 48, 64, 280, 296].map((x, i) => (
        <path key={i} d={`M${x},240 C ${x - 4},200 ${x + 4},180 ${x},150`} stroke="#2a2018" strokeWidth="2.2" fill="none" />
      ))}
    </g>
  );
}

function PlumMoon() {
  const blossoms = [[80, 100], [110, 80], [134, 110], [70, 140], [150, 86], [98, 130]];
  return (
    <g>
      <rect x="0" y="0" width="320" height="240" fill="#26314f" />
      <rect x="0" y="0" width="320" height="90" fill="#2e3a5c" />
      <circle cx="232" cy="86" r="46" fill="#efe6c6" />
      <circle cx="232" cy="86" r="46" fill="none" stroke="#26314f" strokeWidth="0" />
      {/* branch */}
      <path d="M0,210 C 60,190 90,150 150,70" stroke="#1a120c" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M70,168 C 90,150 96,120 92,96" stroke="#1a120c" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* blossoms */}
      {blossoms.map(([x, y], i) => (
        <g key={i}>
          {[...Array(5)].map((_, k) => {
            const a = (k / 5) * Math.PI * 2 - Math.PI / 2;
            return <circle key={k} cx={x + Math.cos(a) * 5} cy={y + Math.sin(a) * 5} r="4" fill="#e8a8c0" stroke="#a85a78" strokeWidth="0.8" />;
          })}
          <circle cx={x} cy={y} r="2.4" fill="#f4d96a" />
        </g>
      ))}
    </g>
  );
}

interface Print {
  id: number;
  kanji: string;
  romaji: string;
  title: string;
  blurb: string;
  draw: React.FC;
}

const PRINTS: Print[] = [
  { id: 1, kanji: "大波", romaji: "Ōnami", title: "The Great Wave", blurb: "Beneath the wave's claw, the boatmen bow to a power older than the realm itself.", draw: GreatWave },
  { id: 2, kanji: "赤富士", romaji: "Aka-Fuji", title: "Red Fuji at Dawn", blurb: "For a few breaths each autumn, the mountain blushes red in the first clean light.", draw: RedFuji },
  { id: 3, kanji: "鶴月", romaji: "Tsuru-Tsuki", title: "Cranes at Dusk", blurb: "Two cranes cross the amber sky toward the marsh, calling the day to its close.", draw: CranesMoon },
  { id: 4, kanji: "梅月", romaji: "Ume-Tsuki", title: "Plum Blossom Moon", blurb: "Even in the cold, the first plum opens — a small, stubborn brightness against the night.", draw: PlumMoon },
];

export const UkiyoeWoodblockDemoClaudeOpus: React.FC = () => {
  const [id, setId] = useState(1);
  const print = PRINTS.find((p) => p.id === id) ?? PRINTS[0];
  const Draw = print.draw;

  return (
    <div className="uk-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600;700&family=Cormorant+Garamond:ital@0;1&display=swap');

        .uk-root {
          min-height: 100vh; width: 100%;
          background: #d8c9a8;
          background-image:
            repeating-linear-gradient(0deg, rgba(120,95,55,0.05) 0 2px, transparent 2px 5px),
            radial-gradient(ellipse at 50% 30%, #e0d2b2, #cbbb96 90%);
          color: #2c2419; font-family: 'Shippori Mincho', serif;
          position: relative; overflow: hidden; padding: 1.8rem 2rem;
          display: flex; flex-direction: column; align-items: center;
        }
        .uk-top { text-align: center; margin-bottom: 1.3rem; }
        .uk-title { font-size: 1.5rem; letter-spacing: 0.1em; color: #2c2419; }
        .uk-title .jp { color: #b1503a; margin-right: 0.4rem; }
        .uk-sub { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.95rem; color: #7a6648; margin-top: 0.2rem; }

        .uk-body { display: grid; grid-template-columns: 210px auto 110px; gap: 1.6rem; align-items: start; max-width: 880px; }

        .uk-h { font-size: 0.62rem; letter-spacing: 0.22em; color: #8a7452; text-transform: uppercase; margin-bottom: 0.8rem; }

        /* series index */
        .pr-item { cursor: pointer; padding: 0.6rem 0.5rem; border-bottom: 1px solid rgba(120,95,55,0.25); display: flex; align-items: center; gap: 0.7rem; transition: background 0.3s ease; }
        .pr-item:hover { background: rgba(120,95,55,0.08); }
        .pr-item.active { background: rgba(177,80,58,0.12); }
        .pr-kanji { font-size: 1.3rem; color: #b1503a; }
        .pr-info { line-height: 1.2; }
        .pr-romaji { font-style: italic; font-size: 0.8rem; color: #8a7452; font-family: 'Cormorant Garamond', serif; }
        .pr-name { font-size: 0.92rem; color: #2c2419; }

        /* print frame */
        .frame {
          background: #2c2419; padding: 14px; box-shadow: 0 16px 40px rgba(60,45,20,0.4);
        }
        .mat { background: #f2ecd9; padding: 12px; }
        .print-svg { display: block; border: 1.5px solid #2c2419; }
        .print-svg-wrap { animation: settle 0.6s ease; }
        @keyframes settle { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; } }
        .caption { text-align: center; font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1rem; color: #5a4a32; margin-top: 0.8rem; line-height: 1.5; max-width: 320px; }

        /* cartouche + seal */
        .cartouche {
          background: #f2ecd9; border: 2px solid #2c2419; padding: 0.8rem 0.4rem;
          display: flex; flex-direction: column; align-items: center; gap: 0.6rem; min-height: 200px;
        }
        .vtitle {
          writing-mode: vertical-rl; text-orientation: upright;
          font-size: 1.5rem; letter-spacing: 0.1em; color: #2c2419; flex: 1;
        }
        .seal {
          width: 54px; height: 54px; background: #b1503a; color: #f2ecd9;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; border-radius: 4px;
          box-shadow: inset 0 0 0 3px #f2ecd9, inset 0 0 0 5px #b1503a;
          writing-mode: vertical-rl;
        }
        .seal-cap { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.7rem; color: #8a7452; }

        @media (max-width: 860px) {
          .uk-body { grid-template-columns: 1fr; }
          .cartouche { flex-direction: row; min-height: 0; }
          .vtitle { writing-mode: horizontal-tb; }
          .seal { writing-mode: horizontal-tb; }
        }
      `}</style>

      <div className="uk-top">
        <div className="uk-title"><span className="jp">浮世絵</span>Scenes of the Floating World</div>
        <div className="uk-sub">— a series of woodblock impressions —</div>
      </div>

      <div className="uk-body">
        {/* INDEX */}
        <div>
          <div className="uk-h">The Series</div>
          {PRINTS.map((p) => (
            <div key={p.id} className={`pr-item ${p.id === id ? "active" : ""}`} onClick={() => setId(p.id)}>
              <span className="pr-kanji">{p.kanji}</span>
              <span className="pr-info">
                <span className="pr-romaji">{p.romaji}</span><br />
                <span className="pr-name">{p.title}</span>
              </span>
            </div>
          ))}
        </div>

        {/* PRINT */}
        <div>
          <div className="frame">
            <div className="mat">
              <div className="print-svg-wrap" key={print.id}>
                <svg className="print-svg" width="320" height="240" viewBox="0 0 320 240">
                  <Draw />
                </svg>
              </div>
            </div>
          </div>
          <div className="caption">“{print.blurb}”</div>
        </div>

        {/* CARTOUCHE */}
        <div className="cartouche">
          <div className="vtitle">{print.kanji}</div>
          <div className="seal">印</div>
          <div className="seal-cap">{print.romaji}</div>
        </div>
      </div>
    </div>
  );
};
