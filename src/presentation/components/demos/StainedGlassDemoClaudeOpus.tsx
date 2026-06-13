"use client";

import React, { useMemo, useState } from "react";

interface TimeOfDay {
  key: string;
  label: string;
  glow: string;
  tint: string;
  brightness: number;
  saturate: number;
}

const TIMES: TimeOfDay[] = [
  { key: "dawn", label: "Dawn", glow: "#ffd9b0", tint: "rgba(255,160,120,0.18)", brightness: 0.92, saturate: 1.05 },
  { key: "midday", label: "Midday", glow: "#fff6e0", tint: "rgba(255,255,255,0.06)", brightness: 1.12, saturate: 1.25 },
  { key: "dusk", label: "Dusk", glow: "#ffb070", tint: "rgba(220,90,60,0.22)", brightness: 0.86, saturate: 1.1 },
  { key: "night", label: "Night", glow: "#7fa6e0", tint: "rgba(30,40,90,0.42)", brightness: 0.62, saturate: 0.95 },
];

const PALETTE = [
  { name: "Ruby", hex: "#b5223a" },
  { name: "Amber", hex: "#e0922a" },
  { name: "Gold", hex: "#e6c14a" },
  { name: "Emerald", hex: "#2a8a5a" },
  { name: "Teal", hex: "#1f7e8c" },
  { name: "Cobalt", hex: "#244e9c" },
  { name: "Violet", hex: "#6e3a96" },
  { name: "Rose", hex: "#c85a86" },
];

const LEAD = "#1c1712";

// helper: annular wedge path
function wedge(cx: number, cy: number, r0: number, r1: number, a0: number, a1: number) {
  const p = (r: number, a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const [x0o, y0o] = p(r1, a0);
  const [x1o, y1o] = p(r1, a1);
  const [x1i, y1i] = p(r0, a1);
  const [x0i, y0i] = p(r0, a0);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${x0o.toFixed(1)},${y0o.toFixed(1)} A${r1},${r1} 0 ${large} 1 ${x1o.toFixed(1)},${y1o.toFixed(1)} L${x1i.toFixed(1)},${y1i.toFixed(1)} A${r0},${r0} 0 ${large} 0 ${x0i.toFixed(1)},${y0i.toFixed(1)} Z`;
}

interface Pane {
  id: string;
  el: "circle" | "path" | "rect";
  d?: string;
  cx?: number;
  cy?: number;
  r?: number;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  color: string;
}

const CX = 150;
const CY = 158;

function buildPanes(): Pane[] {
  const panes: Pane[] = [];
  // background quadrants behind the rose
  const bgColors = ["#244e9c", "#1f7e8c", "#244e9c", "#1f7e8c"];
  const quad = [
    "M20,158 L20,40 Q150,8 280,40 L280,158 Z", // top band (sky) — single
  ];
  panes.push({ id: "sky", el: "path", d: quad[0], color: "#2b57a8" });

  // outer ring — 16 small wedges
  const inner = ["#6e3a96", "#244e9c"];
  for (let i = 0; i < 16; i++) {
    const a0 = (i / 16) * Math.PI * 2 - Math.PI / 2;
    const a1 = ((i + 1) / 16) * Math.PI * 2 - Math.PI / 2;
    panes.push({ id: `o${i}`, el: "path", d: wedge(CX, CY, 84, 108, a0, a1), color: inner[i % 2] });
  }
  // inner petals — 8 wedges
  const petals = ["#b5223a", "#e0922a", "#2a8a5a", "#c85a86", "#b5223a", "#e0922a", "#2a8a5a", "#c85a86"];
  for (let i = 0; i < 8; i++) {
    const a0 = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const a1 = ((i + 1) / 8) * Math.PI * 2 - Math.PI / 2;
    panes.push({ id: `p${i}`, el: "path", d: wedge(CX, CY, 42, 82, a0, a1), color: petals[i] });
  }
  // sun center
  panes.push({ id: "sun", el: "circle", cx: CX, cy: CY, r: 40, color: "#e6c14a" });

  // bottom border row
  const border = ["#b5223a", "#244e9c", "#2a8a5a", "#244e9c", "#b5223a"];
  for (let i = 0; i < 5; i++) {
    panes.push({ id: `b${i}`, el: "rect", x: 20 + i * 52, y: 286, w: 52, h: 42, color: border[i] });
  }
  return panes;
}

export const StainedGlassDemoClaudeOpus: React.FC = () => {
  const basePanes = useMemo(buildPanes, []);
  const [colors, setColors] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>("sun");
  const [timeKey, setTimeKey] = useState("midday");

  const time = TIMES.find((t) => t.key === timeKey) ?? TIMES[1];

  const paint = (hex: string) => {
    if (!selected) return;
    setColors((c) => ({ ...c, [selected]: hex }));
  };

  return (
    <div className="vit-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Cormorant+Garamond:ital@0;1&display=swap');

        .vit-root {
          min-height: 100vh; width: 100%;
          background: radial-gradient(ellipse at 50% 30%, #2a2620, #18150f 70%, #100d09 100%);
          color: #e6dcc6; font-family: 'Cormorant Garamond', serif;
          position: relative; overflow: hidden;
          padding: 1.8rem; display: flex; flex-direction: column; align-items: center;
        }
        .vit-top { text-align: center; margin-bottom: 1.4rem; }
        .vit-title { font-family: 'Cinzel', serif; font-size: 1.6rem; letter-spacing: 0.1em; color: #f0e6cc; }
        .vit-sub { font-style: italic; font-size: 1rem; color: #b09a72; margin-top: 0.2rem; }

        .vit-body { display: grid; grid-template-columns: 200px auto 200px; gap: 1.8rem; align-items: center; max-width: 880px; }

        .panel-h { font-family: 'Cinzel', serif; font-size: 0.74rem; letter-spacing: 0.2em; color: #b09a72; text-transform: uppercase; margin-bottom: 0.9rem; text-align: center; }

        /* time of day */
        .time-btn {
          display: block; width: 100%; cursor: pointer; margin-bottom: 0.6rem;
          font-family: 'Cinzel', serif; font-size: 0.85rem; letter-spacing: 0.06em;
          background: rgba(230,220,198,0.05); color: #cdbf9c;
          border: 1px solid rgba(176,154,114,0.3); padding: 0.6rem; transition: all 0.3s ease;
        }
        .time-btn:hover { background: rgba(230,220,198,0.1); }
        .time-btn.active { background: rgba(230,201,74,0.16); border-color: #e6c14a; color: #f4ead0; }

        /* window */
        .window-frame {
          position: relative; padding: 14px;
          background: linear-gradient(180deg, #4a3a26, #2e2417);
          border-radius: 150px 150px 10px 10px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6), inset 0 0 0 3px #5e4a30;
        }
        .lightbox {
          position: relative; border-radius: 140px 140px 4px 4px; overflow: hidden;
          transition: background 0.7s ease;
        }
        .lightbox::before {
          content: ''; position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background: var(--tint); transition: background 0.7s ease; mix-blend-mode: soft-light;
        }
        /* mottled glass texture */
        .lightbox::after {
          content: ''; position: absolute; inset: 0; z-index: 3; pointer-events: none; opacity: 0.3;
          background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18), transparent 12%),
                      radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1), transparent 14%),
                      radial-gradient(circle at 45% 80%, rgba(0,0,0,0.12), transparent 16%);
        }
        .vit-svg { display: block; position: relative; z-index: 1; transition: filter 0.7s ease; }
        .vit-svg path, .vit-svg circle, .vit-svg rect {
          stroke: ${LEAD}; stroke-width: 3.4; stroke-linejoin: round; cursor: pointer;
          transition: fill 0.4s ease;
        }
        .vit-svg .sel { stroke: #f4ead0; stroke-width: 4.4; filter: drop-shadow(0 0 4px rgba(244,234,208,0.6)); }

        /* palette */
        .swatches { display: grid; grid-template-columns: 1fr 1fr; gap: 0.55rem; }
        .swatch {
          aspect-ratio: 1; border-radius: 4px; cursor: pointer; border: 2px solid rgba(28,23,18,0.6);
          position: relative; box-shadow: inset 0 2px 4px rgba(255,255,255,0.25);
          transition: transform 0.12s ease;
        }
        .swatch:hover { transform: scale(1.08); }
        .swatch-name { display:block; text-align:center; font-size: 0.72rem; color: #b09a72; margin-top: 0.2rem; font-style: italic; }
        .sel-note { font-family: 'Cinzel', serif; font-size: 0.68rem; letter-spacing: 0.08em; color: #cdbf9c; text-align: center; margin: 1rem 0 0.6rem; }

        @media (max-width: 860px) {
          .vit-body { grid-template-columns: 1fr; }
          .window-frame { order: -1; max-width: 320px; margin: 0 auto; }
        }
      `}</style>

      <div className="vit-top">
        <div className="vit-title">VITRAL</div>
        <div className="vit-sub">— a stained glass atelier —</div>
      </div>

      <div className="vit-body">
        {/* TIME */}
        <div>
          <div className="panel-h">The Hour</div>
          {TIMES.map((t) => (
            <button
              key={t.key}
              type="button"
              className={`time-btn ${t.key === timeKey ? "active" : ""}`}
              onClick={() => setTimeKey(t.key)}
            >
              {t.label}
            </button>
          ))}
          <div className="sel-note">light pours warm to cool</div>
        </div>

        {/* WINDOW */}
        <div className="window-frame">
          <div
            className="lightbox"
            style={{
              background: `radial-gradient(ellipse at 50% 35%, ${time.glow}, #d8c9a8 60%, #b6a484 100%)`,
              ["--tint" as string]: time.tint,
            }}
          >
            <svg
              className="vit-svg"
              width="300"
              height="340"
              viewBox="0 0 300 340"
              style={{ filter: `brightness(${time.brightness}) saturate(${time.saturate})` }}
            >
              {basePanes.map((p) => {
                const fill = colors[p.id] ?? p.color;
                const cls = selected === p.id ? "sel" : "";
                if (p.el === "circle")
                  return <circle key={p.id} className={cls} cx={p.cx} cy={p.cy} r={p.r} fill={fill} onClick={() => setSelected(p.id)} />;
                if (p.el === "rect")
                  return <rect key={p.id} className={cls} x={p.x} y={p.y} width={p.w} height={p.h} fill={fill} onClick={() => setSelected(p.id)} />;
                return <path key={p.id} className={cls} d={p.d} fill={fill} onClick={() => setSelected(p.id)} />;
              })}
            </svg>
          </div>
        </div>

        {/* PALETTE */}
        <div>
          <div className="panel-h">The Glass</div>
          <div className="swatches">
            {PALETTE.map((c) => (
              <div key={c.name}>
                <div className="swatch" style={{ background: c.hex }} onClick={() => paint(c.hex)} />
                <span className="swatch-name">{c.name}</span>
              </div>
            ))}
          </div>
          <div className="sel-note">
            {selected ? "tap a pane, then a colour" : "select a pane to repaint"}
          </div>
        </div>
      </div>
    </div>
  );
};
