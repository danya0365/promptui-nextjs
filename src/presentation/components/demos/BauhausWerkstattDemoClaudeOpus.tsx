"use client";

import React, { useState } from "react";

const RED = "#d8472b";
const YELLOW = "#f2b705";
const BLUE = "#1f4eb5";
const INK = "#1a1a18";
const PAPER = "#ece4d4";

type Shape =
  | { t: "circle"; cx: number; cy: number; r: number; fill: string }
  | { t: "rect"; x: number; y: number; w: number; h: number; fill: string; rot?: number }
  | { t: "tri"; pts: string; fill: string }
  | { t: "ring"; cx: number; cy: number; r: number; sw: number; stroke: string }
  | { t: "line"; x1: number; y1: number; x2: number; y2: number; sw: number };

interface Werkstatt {
  id: number;
  de: string;
  en: string;
  master: string;
  room: string;
  days: string;
  accent: string;
  blurb: string;
  comp: Shape[];
}

const SHOPS: Werkstatt[] = [
  {
    id: 1,
    de: "Weberei",
    en: "Weaving",
    master: "Gunta Stölzl",
    room: "Raum 14",
    days: "MON · WED · FRI",
    accent: BLUE,
    blurb: "Thread as structure. The loom is a grid; colour is arithmetic made warm.",
    comp: [
      { t: "rect", x: 40, y: 40, w: 150, h: 220, fill: BLUE },
      { t: "rect", x: 40, y: 40, w: 150, h: 60, fill: RED },
      { t: "line", x1: 70, y1: 40, x2: 70, y2: 260, sw: 6 },
      { t: "line", x1: 110, y1: 40, x2: 110, y2: 260, sw: 6 },
      { t: "line", x1: 150, y1: 40, x2: 150, y2: 260, sw: 6 },
      { t: "circle", cx: 250, cy: 90, r: 46, fill: YELLOW },
      { t: "tri", pts: "210,260 300,260 255,180", fill: INK },
    ],
  },
  {
    id: 2,
    de: "Metallwerkstatt",
    en: "Metal Workshop",
    master: "L. Moholy-Nagy",
    room: "Raum 7",
    days: "TUE · THU",
    accent: YELLOW,
    blurb: "Light, balance, the machine as collaborator. Tubular, polished, exact.",
    comp: [
      { t: "circle", cx: 120, cy: 150, r: 86, fill: YELLOW },
      { t: "ring", cx: 120, cy: 150, r: 60, sw: 10, stroke: INK },
      { t: "rect", x: 200, y: 60, w: 70, h: 200, fill: RED, rot: 12 },
      { t: "line", x1: 30, y1: 240, x2: 300, y2: 60, sw: 5 },
      { t: "circle", cx: 255, cy: 210, r: 26, fill: BLUE },
    ],
  },
  {
    id: 3,
    de: "Töpferei",
    en: "Pottery",
    master: "Gerhard Marcks",
    room: "Dornburg",
    days: "MON – THU",
    accent: RED,
    blurb: "Earth turned on the wheel. The circle is the first and oldest form.",
    comp: [
      { t: "rect", x: 40, y: 40, w: 240, h: 220, fill: RED },
      { t: "circle", cx: 160, cy: 150, r: 80, fill: PAPER },
      { t: "circle", cx: 160, cy: 150, r: 50, fill: INK },
      { t: "circle", cx: 160, cy: 150, r: 22, fill: YELLOW },
      { t: "tri", pts: "40,260 130,260 85,200", fill: BLUE },
    ],
  },
  {
    id: 4,
    de: "Typografie",
    en: "Typography",
    master: "Herbert Bayer",
    room: "Raum 22",
    days: "WED · FRI",
    accent: INK,
    blurb: "Lowercase, sans serif, no ornament. The letter is a built object.",
    comp: [
      { t: "rect", x: 40, y: 40, w: 240, h: 56, fill: INK },
      { t: "rect", x: 40, y: 120, w: 130, h: 30, fill: INK },
      { t: "rect", x: 40, y: 168, w: 200, h: 30, fill: RED },
      { t: "rect", x: 40, y: 216, w: 90, h: 30, fill: INK },
      { t: "circle", cx: 250, cy: 200, r: 40, fill: YELLOW },
      { t: "rect", x: 230, y: 120, w: 50, h: 50, fill: BLUE },
    ],
  },
  {
    id: 5,
    de: "Bühne",
    en: "Stage",
    master: "Oskar Schlemmer",
    room: "Aula",
    days: "SAT",
    accent: BLUE,
    blurb: "The body as architecture in motion. Costume becomes pure geometry.",
    comp: [
      { t: "circle", cx: 160, cy: 90, r: 36, fill: YELLOW },
      { t: "tri", pts: "100,260 220,260 160,130", fill: BLUE },
      { t: "rect", x: 150, y: 120, w: 20, h: 70, fill: RED },
      { t: "circle", cx: 110, cy: 180, r: 18, fill: RED },
      { t: "circle", cx: 210, cy: 180, r: 18, fill: RED },
      { t: "line", x1: 40, y1: 260, x2: 280, y2: 260, sw: 8 },
    ],
  },
];

export const BauhausWerkstattDemoClaudeOpus: React.FC = () => {
  const [shopId, setShopId] = useState(1);
  const [enrolled, setEnrolled] = useState(false);

  const shop = SHOPS.find((s) => s.id === shopId) ?? SHOPS[0];

  const pick = (id: number) => {
    setShopId(id);
    setEnrolled(false);
  };

  return (
    <div className="bh-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@500;600;700&display=swap');

        .bh-root {
          min-height: 100vh; width: 100%;
          background: ${PAPER};
          background-image:
            repeating-linear-gradient(0deg, rgba(26,26,24,0.035) 0 1px, transparent 1px 28px),
            repeating-linear-gradient(90deg, rgba(26,26,24,0.035) 0 1px, transparent 1px 28px);
          color: ${INK}; font-family: 'Archivo', sans-serif;
          padding: 1.4rem; display: flex; justify-content: center;
        }
        .bh-shell { width: 100%; max-width: 940px; border: 4px solid ${INK}; background: ${PAPER}; }

        /* masthead */
        .bh-top { display: flex; align-items: stretch; border-bottom: 4px solid ${INK}; }
        .bh-mark { width: 84px; border-right: 4px solid ${INK}; display: flex; flex-direction: column; }
        .bh-mark span { flex: 1; }
        .bh-mark .s1 { background: ${RED}; } .bh-mark .s2 { background: ${YELLOW}; } .bh-mark .s3 { background: ${BLUE}; }
        .bh-id { flex: 1; padding: 0.7rem 1rem; display: flex; flex-direction: column; justify-content: center; }
        .bh-id h1 { font-family: 'Archivo Black', sans-serif; font-size: clamp(1.2rem, 3.2vw, 1.9rem); letter-spacing: -0.02em; margin: 0; text-transform: lowercase; }
        .bh-id p { font-size: 0.62rem; letter-spacing: 0.32em; text-transform: uppercase; margin: 0.2rem 0 0; color: #5a564d; }
        .bh-year { width: 96px; border-left: 4px solid ${INK}; background: ${INK}; color: ${PAPER}; font-family: 'Archivo Black', sans-serif; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; }

        .bh-cols { display: grid; grid-template-columns: 220px 1fr 230px; }

        /* workshop list */
        .bh-list { border-right: 4px solid ${INK}; }
        .ws { display: flex; align-items: center; gap: 0.7rem; padding: 0.7rem 0.8rem; cursor: pointer; border-bottom: 2px solid ${INK}; background: ${PAPER}; transition: transform 0.12s ease; }
        .ws:hover { transform: translateX(4px); }
        .ws.active { background: ${INK}; color: ${PAPER}; }
        .ws-no { width: 30px; height: 30px; flex: 0 0 auto; border: 2px solid currentColor; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Archivo Black', sans-serif; font-size: 0.85rem; }
        .ws.active .ws-no { background: ${YELLOW}; color: ${INK}; border-color: ${YELLOW}; }
        .ws-de { font-weight: 700; font-size: 0.95rem; line-height: 1; }
        .ws-en { font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase; color: #6f6a5e; }
        .ws.active .ws-en { color: #b9b2a2; }

        /* composition stage */
        .bh-stage { padding: 1.4rem; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; border-right: 4px solid ${INK}; }
        .comp-frame { border: 3px solid ${INK}; background: ${PAPER}; }
        .comp-svg { display: block; }
        .comp-svg g { animation: bhpop 0.45s cubic-bezier(0.2,1.3,0.4,1); }
        @keyframes bhpop { from { opacity: 0; transform: scale(0.92) rotate(-2deg); transform-origin: center; } to { opacity: 1; } }
        .comp-cap { text-align: center; max-width: 320px; }
        .comp-cap .de { font-family: 'Archivo Black', sans-serif; font-size: 1.4rem; line-height: 1; }
        .comp-cap .bl { font-size: 0.82rem; color: #5a564d; margin-top: 0.35rem; line-height: 1.45; }

        /* enrol panel */
        .bh-panel { padding: 1.1rem; display: flex; flex-direction: column; gap: 0.9rem; }
        .pan-h { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: #6f6a5e; border-bottom: 2px solid ${INK}; padding-bottom: 0.4rem; }
        .meta-row { display: flex; flex-direction: column; gap: 0.1rem; }
        .meta-k { font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase; color: #8a8475; }
        .meta-v { font-weight: 700; font-size: 1rem; }
        .accent-bar { height: 14px; border: 2px solid ${INK}; }
        .seat-row { display: flex; gap: 4px; }
        .seat { flex: 1; height: 16px; border: 2px solid ${INK}; background: ${PAPER}; }
        .seat.on { background: ${INK}; }
        .enrol {
          margin-top: auto; cursor: pointer; border: 3px solid ${INK};
          background: ${YELLOW}; color: ${INK}; font-family: 'Archivo Black', sans-serif;
          font-size: 1rem; text-transform: lowercase; letter-spacing: -0.01em; padding: 0.75rem;
          box-shadow: 5px 5px 0 ${INK};
        }
        .enrol:active { transform: translate(5px,5px); box-shadow: none; }
        .enrol.done { background: ${INK}; color: ${YELLOW}; box-shadow: none; transform: translate(5px,5px); cursor: default; }

        @media (max-width: 880px) {
          .bh-cols { grid-template-columns: 1fr; }
          .bh-list, .bh-stage { border-right: none; border-bottom: 4px solid ${INK}; }
        }
      `}</style>

      <div className="bh-shell">
        {/* MASTHEAD */}
        <div className="bh-top">
          <div className="bh-mark"><span className="s1" /><span className="s2" /><span className="s3" /></div>
          <div className="bh-id">
            <h1>staatliches bauhaus</h1>
            <p>Werkstatt-Programm · Weimar</p>
          </div>
          <div className="bh-year">23</div>
        </div>

        <div className="bh-cols">
          {/* WORKSHOP LIST */}
          <div className="bh-list">
            {SHOPS.map((s) => (
              <div key={s.id} className={`ws ${s.id === shopId ? "active" : ""}`} onClick={() => pick(s.id)}>
                <span className="ws-no">{s.id}</span>
                <span>
                  <span className="ws-de">{s.de}</span><br />
                  <span className="ws-en">{s.en}</span>
                </span>
              </div>
            ))}
          </div>

          {/* COMPOSITION */}
          <div className="bh-stage">
            <div className="comp-frame">
              <svg className="comp-svg" width="320" height="300" viewBox="0 0 320 300" key={shop.id}>
                <g>
                  {shop.comp.map((s, i) => {
                    if (s.t === "circle") return <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill} />;
                    if (s.t === "rect") return <rect key={i} x={s.x} y={s.y} width={s.w} height={s.h} fill={s.fill} transform={s.rot ? `rotate(${s.rot} ${s.x + s.w / 2} ${s.y + s.h / 2})` : undefined} />;
                    if (s.t === "tri") return <polygon key={i} points={s.pts} fill={s.fill} />;
                    if (s.t === "ring") return <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="none" stroke={s.stroke} strokeWidth={s.sw} />;
                    return <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={INK} strokeWidth={s.sw} />;
                  })}
                </g>
              </svg>
            </div>
            <div className="comp-cap">
              <div className="de">{shop.de}</div>
              <div className="bl">{shop.blurb}</div>
            </div>
          </div>

          {/* ENROLMENT */}
          <div className="bh-panel">
            <div className="pan-h">Anmeldung / Enrol</div>
            <div className="meta-row"><span className="meta-k">Formmeister</span><span className="meta-v">{shop.master}</span></div>
            <div className="meta-row"><span className="meta-k">Ort</span><span className="meta-v">{shop.room}</span></div>
            <div className="meta-row"><span className="meta-k">Tage</span><span className="meta-v">{shop.days}</span></div>
            <div className="meta-row">
              <span className="meta-k">Akzent</span>
              <div className="accent-bar" style={{ background: shop.accent }} />
            </div>
            <div className="meta-row">
              <span className="meta-k">Plätze {enrolled ? "5/12" : "4/12"}</span>
              <div className="seat-row">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className={`seat ${i < (enrolled ? 5 : 4) ? "on" : ""}`} />
                ))}
              </div>
            </div>
            <button type="button" className={`enrol ${enrolled ? "done" : ""}`} onClick={() => setEnrolled(true)} disabled={enrolled}>
              {enrolled ? "✓ eingeschrieben" : "einschreiben →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
