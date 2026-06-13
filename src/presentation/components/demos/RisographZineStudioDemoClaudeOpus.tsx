"use client";

import React, { useMemo, useState } from "react";

type InkKey = "pink" | "blue" | "yellow";

interface Ink {
  key: InkKey;
  name: string;
  hex: string;
  offset: { x: number; y: number };
}

const INKS: Ink[] = [
  { key: "pink", name: "Fluoro Pink", hex: "#ff2d8b", offset: { x: -3, y: 2 } },
  { key: "blue", name: "Riso Blue", hex: "#1565d8", offset: { x: 3, y: -2 } },
  { key: "yellow", name: "Sun Yellow", hex: "#f6c700", offset: { x: 1, y: 3 } },
];

interface StickerDef {
  id: number;
  label: string;
  bg: string;
  fg: string;
  rotate: number;
}

const STICKER_TRAY: StickerDef[] = [
  { id: 1, label: "ZINE!", bg: "#ff2d8b", fg: "#fff8e7", rotate: -8 },
  { id: 2, label: "★ DIY ★", bg: "#1565d8", fg: "#f6c700", rotate: 6 },
  { id: 3, label: "ISSUE 04", bg: "#f6c700", fg: "#1a1a1a", rotate: -4 },
  { id: 4, label: "RISO", bg: "#1a1a1a", fg: "#ff2d8b", rotate: 10 },
  { id: 5, label: "✶ NEW ✶", bg: "#2fae66", fg: "#fff8e7", rotate: -12 },
  { id: 6, label: "CUT HERE", bg: "#fff8e7", fg: "#1565d8", rotate: 5 },
];

interface PlacedSticker {
  uid: number;
  def: StickerDef;
  x: number;
  y: number;
  rotate: number;
}

const LAYERS = [
  { name: "Pink plate", ink: "pink" as InkKey },
  { name: "Blue plate", ink: "blue" as InkKey },
  { name: "Yellow plate", ink: "yellow" as InkKey },
  { name: "Paper base", ink: null },
];

export const RisographZineStudioDemoClaudeOpus: React.FC = () => {
  const [active, setActive] = useState<Record<InkKey, boolean>>({
    pink: true,
    blue: true,
    yellow: true,
  });
  const [placed, setPlaced] = useState<PlacedSticker[]>([]);
  const [hovered, setHovered] = useState(false);
  const [nextUid, setNextUid] = useState(1);

  // deterministic collage / halftone scatter to avoid hydration mismatch
  const confetti = useMemo(
    () =>
      [...Array(14)].map((_, i) => ({
        left: (Math.sin(i * 1.7) * 46 + 50),
        top: (Math.cos(i * 2.3) * 44 + 50),
        size: 8 + ((i * 5) % 16),
        rot: (i * 37) % 360,
        color: ["#ff2d8b", "#1565d8", "#f6c700", "#2fae66", "#1a1a1a"][i % 5],
        shape: i % 3,
      })),
    []
  );

  const toggleInk = (k: InkKey) =>
    setActive((s) => ({ ...s, [k]: !s[k] }));

  const dropSticker = (def: StickerDef) => {
    // deterministic-ish placement spread across the spread, no Math.random
    const slot = placed.length;
    const x = 18 + ((slot * 27) % 64);
    const y = 22 + ((slot * 19) % 52);
    setPlaced((p) => [
      ...p,
      { uid: nextUid, def, x, y, rotate: def.rotate + ((slot * 5) % 14) - 7 },
    ]);
    setNextUid((n) => n + 1);
  };

  const headline = "MAKE\nNOISE";

  return (
    <div className="riso-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap');

        .riso-root {
          min-height: 100vh; width: 100%;
          background-color: #fbf3df;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(26,26,26,0.06) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(26,26,26,0.04) 1px, transparent 0);
          background-size: 6px 6px, 9px 9px;
          background-position: 0 0, 3px 4px;
          color: #1a1a1a;
          font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
        }
        /* paper grain overlay */
        .riso-root::before {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 1;
          opacity: 0.5; mix-blend-mode: multiply;
          background-image:
            repeating-linear-gradient(0deg, rgba(0,0,0,0.012) 0 1px, transparent 1px 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.012) 0 1px, transparent 1px 3px);
        }

        /* ---------- TOP BAR ---------- */
        .riso-topbar {
          position: relative; z-index: 5;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.1rem 1.6rem;
          border-bottom: 3px solid #1a1a1a;
          background: #fff8e7;
        }
        .riso-brand { display: flex; align-items: center; gap: 0.7rem; }
        .riso-mark {
          width: 40px; height: 40px; border: 3px solid #1a1a1a; border-radius: 4px;
          background: #ff2d8b; color: #fff8e7;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Archivo Black', sans-serif; font-size: 1.2rem;
          transform: rotate(-4deg);
          box-shadow: 3px 3px 0 #1565d8;
        }
        .riso-brandname { font-family: 'Archivo Black', sans-serif; font-size: 1.15rem; letter-spacing: -0.02em; line-height: 1; }
        .riso-brandsub { font-family: 'Caveat', cursive; font-size: 1rem; color: #1565d8; transform: rotate(-1deg); }
        .riso-print-btn {
          font-family: 'Archivo Black', sans-serif; font-size: 1rem; letter-spacing: 0.04em;
          background: #f6c700; color: #1a1a1a; border: 3px solid #1a1a1a; border-radius: 6px;
          padding: 0.6rem 1.4rem; cursor: pointer;
          box-shadow: 4px 4px 0 #1a1a1a;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .riso-print-btn:hover { transform: translate(-1px,-1px); box-shadow: 6px 6px 0 #ff2d8b; }
        .riso-print-btn:active { transform: translate(4px,4px); box-shadow: 0 0 0 #1a1a1a; }

        /* ---------- WORKSPACE ---------- */
        .riso-stage {
          position: relative; z-index: 4; flex: 1;
          display: grid; grid-template-columns: 200px 1fr 220px; gap: 1.1rem;
          padding: 1.3rem 1.6rem 1.8rem;
          align-items: start;
        }

        .riso-panel {
          background: #fff8e7; border: 3px solid #1a1a1a; border-radius: 8px;
          box-shadow: 5px 5px 0 rgba(26,26,26,0.18);
          padding: 1rem;
        }
        .riso-panel-title {
          font-family: 'Archivo Black', sans-serif; font-size: 0.72rem;
          letter-spacing: 0.08em; text-transform: uppercase;
          border-bottom: 2px dashed #1a1a1a; padding-bottom: 0.5rem; margin-bottom: 0.8rem;
        }

        /* ink channel switches */
        .ink-row {
          display: flex; align-items: center; gap: 0.6rem;
          border: 2px solid #1a1a1a; border-radius: 6px; padding: 0.5rem 0.6rem;
          margin-bottom: 0.55rem; cursor: pointer; background: #fbf3df;
          transition: transform 0.1s ease;
        }
        .ink-row:hover { transform: translateX(2px); }
        .ink-swatch { width: 22px; height: 22px; border: 2px solid #1a1a1a; border-radius: 50%; flex-shrink: 0; }
        .ink-name { font-size: 0.74rem; font-weight: 600; flex: 1; }
        .ink-toggle {
          width: 34px; height: 18px; border: 2px solid #1a1a1a; border-radius: 20px;
          position: relative; background: #fbf3df; flex-shrink: 0; transition: background 0.15s ease;
        }
        .ink-toggle.on { background: #2fae66; }
        .ink-knob {
          position: absolute; top: 1px; left: 1px; width: 12px; height: 12px;
          background: #1a1a1a; border-radius: 50%; transition: transform 0.15s ease;
        }
        .ink-toggle.on .ink-knob { transform: translateX(16px); }
        .ink-row.off { opacity: 0.45; }

        .stamp-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.45rem; margin-top: 0.3rem; }
        .stamp {
          aspect-ratio: 1; border: 2px solid #1a1a1a; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; cursor: pointer; background: #fbf3df;
          transition: transform 0.1s ease, background 0.1s ease;
        }
        .stamp:hover { transform: rotate(-6deg) scale(1.08); background: #f6c700; }

        /* ---------- SPREAD ---------- */
        .spread-wrap { display: flex; flex-direction: column; align-items: center; }
        .spread {
          position: relative; width: 100%; max-width: 520px; aspect-ratio: 4/3;
          background: #fffdf5; border: 3px solid #1a1a1a; border-radius: 4px;
          box-shadow: 8px 8px 0 rgba(26,26,26,0.22);
          overflow: hidden;
        }
        /* center fold */
        .spread::after {
          content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 2px;
          background: repeating-linear-gradient(180deg, #1a1a1a 0 6px, transparent 6px 12px);
          opacity: 0.35;
        }
        /* halftone field */
        .halftone {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle at center, #ff2d8b 32%, transparent 33%);
          background-size: 12px 12px;
          opacity: 0.16; mix-blend-mode: multiply;
        }

        /* mis-registered headline (one layer per ink, offset) */
        .headline-stack { position: absolute; top: 16%; left: 8%; z-index: 3; }
        .headline-layer {
          position: absolute; top: 0; left: 0; margin: 0;
          font-family: 'Archivo Black', sans-serif; font-size: clamp(2.4rem, 8vw, 3.6rem);
          line-height: 0.86; letter-spacing: -0.03em; white-space: pre;
          mix-blend-mode: multiply; transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease;
        }
        .headline-layer.hidden { opacity: 0; }

        .kicker {
          position: absolute; bottom: 12%; left: 9%; z-index: 3;
          font-family: 'Caveat', cursive; font-size: 1.5rem; color: #1565d8;
          transform: rotate(-3deg);
          background: #f6c700; padding: 0.1rem 0.6rem; border: 2px solid #1a1a1a;
          box-shadow: 3px 3px 0 #1a1a1a;
        }

        /* collage confetti */
        .confetti { position: absolute; mix-blend-mode: multiply; z-index: 2; }

        /* tape on corner */
        .tape {
          position: absolute; top: -10px; left: 22%; width: 90px; height: 26px;
          background: rgba(246,199,0,0.65); border: 1px dashed rgba(26,26,26,0.4);
          transform: rotate(-6deg); z-index: 6;
          transition: transform 0.2s ease;
        }
        .spread.peel .tape { transform: rotate(-18deg) translateY(-4px); }

        .placed-sticker {
          position: absolute; z-index: 5;
          font-family: 'Archivo Black', sans-serif; font-size: 0.78rem; letter-spacing: 0.03em;
          padding: 0.35rem 0.7rem; border: 2.5px solid #1a1a1a; border-radius: 4px;
          box-shadow: 3px 3px 0 rgba(26,26,26,0.4);
          animation: pop 0.3s cubic-bezier(0.34,1.56,0.64,1);
          white-space: nowrap;
        }
        @keyframes pop { 0% { transform: scale(0) rotate(0); } 100% { transform: scale(1) rotate(var(--r)); } }

        .spread-caption { font-family: 'Caveat', cursive; font-size: 1.05rem; color: #1a1a1a; margin-top: 0.7rem; transform: rotate(-1deg); }

        /* ---------- RIGHT RAIL ---------- */
        .tray-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 0.5rem; margin-bottom: 1rem; }
        .tray-sticker {
          font-family: 'Archivo Black', sans-serif; font-size: 0.64rem; letter-spacing: 0.02em;
          padding: 0.45rem 0.3rem; border: 2.5px solid #1a1a1a; border-radius: 4px;
          cursor: pointer; text-align: center;
          box-shadow: 2px 2px 0 #1a1a1a;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .tray-sticker:hover { transform: translate(-1px,-1px) rotate(-3deg); box-shadow: 4px 4px 0 #1a1a1a; }
        .tray-sticker:active { transform: translate(2px,2px); box-shadow: 0 0 0 #1a1a1a; }

        .layer-item {
          display: flex; align-items: center; gap: 0.55rem;
          padding: 0.5rem 0.4rem; border-bottom: 2px dashed rgba(26,26,26,0.25);
          font-size: 0.74rem; font-weight: 600;
        }
        .layer-dot { width: 14px; height: 14px; border: 2px solid #1a1a1a; border-radius: 3px; flex-shrink: 0; }

        @media (max-width: 880px) {
          .riso-stage { grid-template-columns: 1fr; }
          .riso-panel.left, .riso-panel.right { order: 2; }
          .spread-wrap { order: 1; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="riso-topbar">
        <div className="riso-brand">
          <div className="riso-mark">R</div>
          <div>
            <div className="riso-brandname">RISO ROOM</div>
            <div className="riso-brandsub">zine studio · issue 04</div>
          </div>
        </div>
        <button className="riso-print-btn" type="button">
          PRINT IT →
        </button>
      </div>

      {/* WORKSPACE */}
      <div className="riso-stage">
        {/* LEFT RAIL */}
        <div className="riso-panel left">
          <div className="riso-panel-title">Ink Channels</div>
          {INKS.map((ink) => (
            <div
              key={ink.key}
              className={`ink-row ${active[ink.key] ? "" : "off"}`}
              onClick={() => toggleInk(ink.key)}
            >
              <span className="ink-swatch" style={{ background: ink.hex }} />
              <span className="ink-name">{ink.name}</span>
              <span className={`ink-toggle ${active[ink.key] ? "on" : ""}`}>
                <span className="ink-knob" />
              </span>
            </div>
          ))}

          <div className="riso-panel-title" style={{ marginTop: "1.1rem" }}>
            Stamps
          </div>
          <div className="stamp-grid">
            {["✺", "✶", "❍", "✷", "❄", "✸", "◆", "✹", "❂"].map((s, i) => (
              <div className="stamp" key={i}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER SPREAD */}
        <div className="spread-wrap">
          <div
            className={`spread ${hovered ? "peel" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="tape" />
            <div className="halftone" />

            {/* deterministic collage confetti */}
            {confetti.map((c, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${c.left}%`,
                  top: `${c.top}%`,
                  width: c.size,
                  height: c.size,
                  background: c.color,
                  transform: `rotate(${c.rot}deg)`,
                  borderRadius: c.shape === 0 ? "50%" : c.shape === 1 ? "0" : "2px",
                  clipPath:
                    c.shape === 2
                      ? "polygon(50% 0, 100% 100%, 0 100%)"
                      : undefined,
                }}
              />
            ))}

            {/* mis-registered headline */}
            <div className="headline-stack">
              {INKS.map((ink) => (
                <h1
                  key={ink.key}
                  className={`headline-layer ${active[ink.key] ? "" : "hidden"}`}
                  style={{
                    color: ink.hex,
                    transform: `translate(${ink.offset.x}px, ${ink.offset.y}px)`,
                  }}
                >
                  {headline}
                </h1>
              ))}
              {/* invisible spacer to size the stack */}
              <h1 className="headline-layer" style={{ position: "relative", opacity: 0 }}>
                {headline}
              </h1>
            </div>

            <div className="kicker">cut · fold · staple</div>

            {/* placed stickers */}
            {placed.map((p) => (
              <span
                key={p.uid}
                className="placed-sticker"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  background: p.def.bg,
                  color: p.def.fg,
                  ["--r" as string]: `${p.rotate}deg`,
                  transform: `rotate(${p.rotate}deg)`,
                }}
              >
                {p.def.label}
              </span>
            ))}
          </div>
          <div className="spread-caption">
            ↑ click stickers to slap them on · hover to peel the tape
          </div>
        </div>

        {/* RIGHT RAIL */}
        <div className="riso-panel right">
          <div className="riso-panel-title">Sticker Tray</div>
          <div className="tray-grid">
            {STICKER_TRAY.map((s) => (
              <div
                key={s.id}
                className="tray-sticker"
                style={{ background: s.bg, color: s.fg, transform: `rotate(${s.rotate}deg)` }}
                onClick={() => dropSticker(s)}
              >
                {s.label}
              </div>
            ))}
          </div>

          <div className="riso-panel-title">Layers</div>
          {LAYERS.map((l) => (
            <div className="layer-item" key={l.name}>
              <span
                className="layer-dot"
                style={{
                  background:
                    l.ink === "pink"
                      ? "#ff2d8b"
                      : l.ink === "blue"
                      ? "#1565d8"
                      : l.ink === "yellow"
                      ? "#f6c700"
                      : "#fffdf5",
                  opacity: l.ink && !active[l.ink] ? 0.3 : 1,
                }}
              />
              <span style={{ opacity: l.ink && !active[l.ink] ? 0.4 : 1 }}>{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
