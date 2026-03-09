'use client'

import { FC, MutableRefObject, ReactElement, useEffect, useRef, useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

interface MetaItem {
  label: string;
  value: string;
}

interface ExpandedData {
  label: string;
  value: string;
}

interface CardExpanded {
  text: string;
  data: ExpandedData[];
}

interface CardData {
  id: number;
  icon: string;
  category: string;
  title: string;
  desc: string;
  meta: MetaItem[];
  expanded: CardExpanded;
  floatDur: string;
  floatDelay: string;
  tilt: string;
}

interface StarData {
  id: number;
  x: number;
  y: number;
  size: number;
  dur: string;
  delay: string;
  minOp: string;
  maxOp: string;
}

interface ParticleData {
  id: number;
  x: number;
  dur: string;
  delay: string;
  dx: string;
  color: string;
}

interface ConnectionLine {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface ConnectionLinesProps {
  cardRefs: MutableRefObject<Record<number, HTMLDivElement | null>>;
  hoveredId: number | null;
}

interface GeoCardProps {
  card: CardData;
  isExpanded: boolean;
  onToggle: (id: number) => void;
  onHover: (id: number | null) => void;
  cardRef: (el: HTMLDivElement | null) => void;
}

// CSS custom property support for React style
type CSSCustomProperties = React.CSSProperties & Record<`--${string}`, string | number>;

// ── Styles ─────────────────────────────────────────────────────────────────

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --cosmos-deep: #020818;
    --cosmos-mid: #050e2a;
    --cosmos-blue: #0a1840;
    --gold: #c9a84c;
    --gold-bright: #f0d080;
    --gold-dim: #7a6030;
    --cyan: #00e5ff;
    --cyan-dim: #006070;
    --cyan-glow: rgba(0, 229, 255, 0.15);
    --star-white: #e8f4ff;
    --nebula: rgba(30, 60, 140, 0.4);
  }

  body {
    background: var(--cosmos-deep);
    font-family: 'Cormorant Garamond', serif;
    overflow-x: hidden;
    min-height: 100vh;
  }

  .cosmos-root {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: radial-gradient(ellipse 120% 80% at 50% 0%, #0d1f55 0%, #060e28 40%, var(--cosmos-deep) 100%);
  }

  /* ── Star field ── */
  .star-field {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }
  .star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle var(--dur, 3s) ease-in-out infinite var(--delay, 0s);
  }
  @keyframes twinkle {
    0%,100% { opacity: var(--min-op, 0.2); transform: scale(1); }
    50%      { opacity: var(--max-op, 0.9); transform: scale(1.4); }
  }

  /* ── Particles ── */
  .particle {
    position: fixed;
    width: 2px; height: 2px;
    border-radius: 50%;
    pointer-events: none;
    animation: drift var(--pdur, 20s) linear infinite var(--pdelay, 0s);
    z-index: 1;
  }
  @keyframes drift {
    0%   { transform: translateY(100vh) translateX(0); opacity: 0; }
    10%  { opacity: 0.6; }
    90%  { opacity: 0.4; }
    100% { transform: translateY(-10vh) translateX(var(--dx, 30px)); opacity: 0; }
  }

  /* ── Header ── */
  .cosmos-header {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 60px 20px 30px;
  }
  .header-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
  }
  .ornament-line {
    height: 1px;
    width: 120px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }
  .ornament-diamond {
    width: 8px; height: 8px;
    background: var(--gold);
    transform: rotate(45deg);
    box-shadow: 0 0 12px var(--gold), 0 0 24px rgba(201,168,76,0.4);
  }
  .cosmos-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(24px, 4vw, 48px);
    font-weight: 600;
    letter-spacing: 0.15em;
    color: var(--gold-bright);
    text-shadow: 0 0 30px rgba(240,208,128,0.5), 0 0 60px rgba(201,168,76,0.2);
    margin-bottom: 10px;
  }
  .cosmos-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: clamp(14px, 2vw, 18px);
    color: rgba(200,220,255,0.6);
    letter-spacing: 0.2em;
  }

  /* ── Mandala ── */
  .mandala-container {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    margin: 20px 0 40px;
  }
  .mandala-svg {
    animation: mandala-spin 60s linear infinite;
    filter: drop-shadow(0 0 20px rgba(201,168,76,0.3)) drop-shadow(0 0 40px rgba(0,229,255,0.1));
  }
  @keyframes mandala-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .mandala-inner {
    animation: mandala-spin-rev 40s linear infinite;
    transform-origin: center;
  }
  @keyframes mandala-spin-rev {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }

  /* ── Cards Grid ── */
  .cards-cosmos {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 40px 80px;
  }

  /* ── Geometric Card ── */
  .geo-card {
    position: relative;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation: card-float var(--float-dur, 6s) ease-in-out infinite var(--float-delay, 0s);
  }
  @keyframes card-float {
    0%,100% { transform: translateY(0px)   rotate(var(--tilt, 0deg)); }
    50%     { transform: translateY(-12px) rotate(var(--tilt, 0deg)); }
  }
  .geo-card:hover {
    animation-play-state: paused;
    transform: translateY(-20px) scale(1.02) !important;
    z-index: 20;
  }
  .geo-card.expanded {
    animation-play-state: paused;
    transform: scale(1.05) !important;
    z-index: 30;
  }

  /* Card corner decorations */
  .card-corner {
    position: absolute;
    width: 20px; height: 20px;
    z-index: 2;
    pointer-events: none;
  }
  .card-corner::before, .card-corner::after {
    content: '';
    position: absolute;
    background: var(--gold);
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  .card-corner::before { width: 100%; height: 1px; top: 0; left: 0; }
  .card-corner::after  { width: 1px; height: 100%; top: 0; left: 0; }
  .card-corner.tr { top: 8px; right: 8px; transform: rotate(90deg); }
  .card-corner.bl { bottom: 8px; left: 8px; transform: rotate(270deg); }
  .card-corner.br { bottom: 8px; right: 8px; transform: rotate(180deg); }
  .card-corner.tl { top: 8px; left: 8px; }
  .geo-card:hover .card-corner::before,
  .geo-card:hover .card-corner::after,
  .geo-card.expanded .card-corner::before,
  .geo-card.expanded .card-corner::after {
    opacity: 1;
    background: var(--gold-bright);
    box-shadow: 0 0 6px var(--gold);
  }

  .card-inner {
    position: relative;
    background: linear-gradient(135deg,
      rgba(10,24,64,0.92) 0%,
      rgba(5,14,42,0.95)  50%,
      rgba(10,24,64,0.88) 100%
    );
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 2px;
    padding: 28px;
    backdrop-filter: blur(20px);
    overflow: hidden;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .geo-card:hover .card-inner,
  .geo-card.expanded .card-inner {
    border-color: rgba(201,168,76,0.6);
    box-shadow:
      0 0 30px rgba(201,168,76,0.15),
      0 0 60px rgba(0,229,255,0.08),
      0 20px 60px rgba(0,0,0,0.5),
      inset 0 1px 0 rgba(240,208,128,0.1);
  }

  .card-bg-pattern {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(201,168,76,0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0,229,255,0.05)  0%, transparent 50%);
  }
  .geo-card:hover .card-bg-pattern,
  .geo-card.expanded .card-bg-pattern { opacity: 1; }

  /* Icon */
  .card-icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px; height: 56px;
    margin-bottom: 20px;
    position: relative;
  }
  .card-icon-bg {
    position: absolute;
    inset: 0;
    background: rgba(201,168,76,0.08);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border: 1px solid rgba(201,168,76,0.3);
    transition: background 0.3s, box-shadow 0.3s;
  }
  .geo-card:hover .card-icon-bg,
  .geo-card.expanded .card-icon-bg {
    background: rgba(201,168,76,0.15);
    box-shadow: 0 0 20px rgba(201,168,76,0.2);
  }
  .card-icon {
    font-size: 22px;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 6px rgba(201,168,76,0.5));
  }

  .card-category {
    font-family: 'Cinzel', serif;
    font-size: 9px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold-dim);
    margin-bottom: 8px;
    transition: color 0.3s;
  }
  .geo-card:hover .card-category,
  .geo-card.expanded .card-category { color: var(--gold); }

  .card-title {
    font-family: 'Cinzel', serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--gold-bright);
    margin-bottom: 12px;
    line-height: 1.3;
    text-shadow: 0 0 20px rgba(240,208,128,0.3);
  }
  .card-desc {
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(180,200,240,0.7);
    margin-bottom: 20px;
  }

  .card-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  .geo-card:hover .card-divider,
  .geo-card.expanded .card-divider { opacity: 1; }
  .divider-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
  .divider-star { color: var(--gold); font-size: 10px; }

  .card-meta { display: flex; gap: 16px; flex-wrap: wrap; }
  .meta-item  { display: flex; flex-direction: column; gap: 2px; }
  .meta-label {
    font-family: 'Cinzel', serif;
    font-size: 8px;
    letter-spacing: 0.2em;
    color: var(--cyan-dim);
    text-transform: uppercase;
  }
  .meta-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    color: var(--cyan);
    text-shadow: 0 0 10px rgba(0,229,255,0.4);
  }

  /* Expanded panel */
  .card-expanded-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s;
    opacity: 0;
    margin-top: 0;
  }
  .card-expanded-panel.open {
    max-height: 400px;
    opacity: 1;
    margin-top: 20px;
  }
  .expanded-content { border-top: 1px solid rgba(201,168,76,0.2); padding-top: 20px; }
  .expanded-title {
    font-family: 'Cinzel', serif;
    font-size: 10px;
    letter-spacing: 0.3em;
    color: var(--gold);
    margin-bottom: 12px;
    text-transform: uppercase;
  }
  .expanded-text {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 15px;
    line-height: 1.8;
    color: rgba(200,220,255,0.65);
    margin-bottom: 16px;
  }
  .data-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }
  .data-cell {
    background: rgba(0,229,255,0.04);
    border: 1px solid rgba(0,229,255,0.12);
    padding: 10px 14px;
    border-radius: 1px;
    transition: background 0.3s, border-color 0.3s;
  }
  .data-cell:hover {
    background: rgba(0,229,255,0.08);
    border-color: rgba(0,229,255,0.25);
  }
  .data-cell-label {
    font-family: 'Cinzel', serif;
    font-size: 8px;
    letter-spacing: 0.2em;
    color: rgba(0,229,255,0.5);
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .data-cell-val {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    color: rgba(200,220,255,0.8);
  }

  /* Expand button */
  .card-expand-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    padding: 8px;
    border: 1px solid rgba(201,168,76,0.15);
    background: transparent;
    color: rgba(201,168,76,0.5);
    font-family: 'Cinzel', serif;
    font-size: 9px;
    letter-spacing: 0.25em;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s;
    width: 100%;
  }
  .card-expand-btn:hover {
    border-color: rgba(201,168,76,0.4);
    color: var(--gold);
    background: rgba(201,168,76,0.05);
  }
  .expand-arrow { transition: transform 0.3s; font-size: 12px; }
  .expand-arrow.open { transform: rotate(180deg); }

  /* Connection lines */
  .connection-lines {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 8;
  }

  /* Footer */
  .cosmos-footer {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 20px 20px 60px;
  }
  .footer-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  .footer-line { width: 200px; height: 1px; background: linear-gradient(90deg, transparent, var(--gold-dim), transparent); }
  .footer-text {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 13px;
    color: rgba(150,160,180,0.4);
    letter-spacing: 0.15em;
  }

  @keyframes glow-pulse {
    0%,100% { opacity: 0.4; }
    50%      { opacity: 1;   }
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--cosmos-deep); }
  ::-webkit-scrollbar-thumb { background: var(--gold-dim); border-radius: 2px; }
`;

// ── Data ───────────────────────────────────────────────────────────────────

const CARDS: CardData[] = [
  {
    id: 1,
    icon: "✦",
    category: "Celestial Mechanics",
    title: "The Ninth Sphere",
    desc: "Beyond the fixed stars lies the primum mobile — the first mover whose rotation imparts motion to all celestial spheres beneath it.",
    meta: [
      { label: "Cycle",   value: "25,920 yr"  },
      { label: "Harmony", value: "Diapason"   },
    ],
    expanded: {
      text: "Al-Biruni calculated the precession of equinoxes with extraordinary precision, understanding the ninth sphere as the engine of cosmic time itself.",
      data: [
        { label: "Rotation",     value: "West–East" },
        { label: "Sphere No.",   value: "IX"        },
        { label: "Element",      value: "Aether"    },
        { label: "Intelligence", value: "Al-ʿAql"   },
      ],
    },
    floatDur: "7s", floatDelay: "0s", tilt: "-0.5deg",
  },
  {
    id: 2,
    icon: "◈",
    category: "Sacred Geometry",
    title: "The Eight-Pointed Star",
    desc: "Two overlapping squares rotated at 45° — a symbol of celestial balance, the union of earthly order and divine transcendence.",
    meta: [
      { label: "Axes",  value: "8-fold" },
      { label: "Ratio", value: "φ²"     },
    ],
    expanded: {
      text: "The khatam — seal pattern — encodes infinite recursion. Each star contains within it eight smaller stars, mirroring the structure of creation itself.",
      data: [
        { label: "Angles",   value: "45°, 90°" },
        { label: "Name",     value: "Khatam"   },
        { label: "Origin",   value: "IX c. CE" },
        { label: "Symmetry", value: "D₈"       },
      ],
    },
    floatDur: "8.5s", floatDelay: "1s", tilt: "0.5deg",
  },
  {
    id: 3,
    icon: "⬡",
    category: "Cosmological Hierarchy",
    title: "The Active Intellect",
    desc: "Al-Farabi's tenth intelligence — the giver of forms — that illuminates human reason and mediates between the divine and the earthly realm.",
    meta: [
      { label: "Rank",     value: "X"            },
      { label: "Function", value: "Illumination" },
    ],
    expanded: {
      text: "The dator formarum bestows both intelligible forms upon the human intellect and material forms upon prime matter — a cosmic mediator of knowledge.",
      data: [
        { label: "Philosopher", value: "Al-Farabi"   },
        { label: "Arabic",      value: "ʿAql Faʿʿāl" },
        { label: "Analogy",     value: "Solar Light"  },
        { label: "Sphere",      value: "Sublunar"     },
      ],
    },
    floatDur: "6s", floatDelay: "2s", tilt: "-0.3deg",
  },
  {
    id: 4,
    icon: "❋",
    category: "Astral Navigation",
    title: "The Lunar Mansions",
    desc: "Twenty-eight stations of the moon — manzil al-qamar — marking the celestial path through which divine influence descends to earth.",
    meta: [
      { label: "Stations", value: "28"      },
      { label: "Cycle",    value: "27.32 d" },
    ],
    expanded: {
      text: "Each mansion holds its own name, ruling star, and earthly correspondence. Medieval astronomers mapped crops, weather, and fate to these celestial stations.",
      data: [
        { label: "First",    value: "Al-Sharatain"      },
        { label: "Midpoint", value: "Al-Simak"          },
        { label: "Last",     value: "Al-Batn al-Hut"    },
        { label: "System",   value: "Sidereal"          },
      ],
    },
    floatDur: "9s", floatDelay: "0.5s", tilt: "0.8deg",
  },
  {
    id: 5,
    icon: "⊛",
    category: "Mathematical Cosmology",
    title: "The Music of Spheres",
    desc: "Ibn Sina mapped celestial motion to musical intervals — the universe as an eternal symphony whose harmonics govern sublunary existence.",
    meta: [
      { label: "Ratio", value: "3:2 / 4:3"   },
      { label: "Scale", value: "Pythagorean" },
    ],
    expanded: {
      text: "The ratio between successive spheres corresponds to perfect musical intervals. Saturn and Jupiter produce the diapason; Mars and the Sun, the diapente.",
      data: [
        { label: "Saturn",  value: "Diapason"     },
        { label: "Jupiter", value: "Diapente"     },
        { label: "Mars",    value: "Diatessaron"  },
        { label: "Sun",     value: "Ditone"       },
      ],
    },
    floatDur: "7.5s", floatDelay: "1.5s", tilt: "-0.6deg",
  },
  {
    id: 6,
    icon: "✧",
    category: "Esoteric Astronomy",
    title: "The Invisible Pole",
    desc: "The Qutb — cosmic axis — around which all heavens rotate. The spiritual pole star of Sufi cosmology, unchanging amid eternal movement.",
    meta: [
      { label: "Position", value: "Axis Mundi" },
      { label: "Nature",   value: "Immutable"  },
    ],
    expanded: {
      text: "The qutb is simultaneously the still point and the generator of all motion — like the center of a geometric pattern from which all symmetry emanates.",
      data: [
        { label: "Arabic",     value: "القطب"         },
        { label: "Analogy",    value: "Compass Pivot" },
        { label: "Symbol",     value: "Central Star"  },
        { label: "Tradition",  value: "Sufi"          },
      ],
    },
    floatDur: "10s", floatDelay: "3s", tilt: "0.4deg",
  },
];

// ── Stars ──────────────────────────────────────────────────────────────────

const Stars: FC = (): ReactElement => {
  const stars: StarData[] = Array.from({ length: 120 }, (_, i): StarData => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    dur:    (Math.random() * 4 + 2).toFixed(1),
    delay:  (Math.random() * 4).toFixed(1),
    minOp:  (Math.random() * 0.2 + 0.1).toFixed(2),
    maxOp:  (Math.random() * 0.5 + 0.5).toFixed(2),
  }));

  return (
    <div className="star-field">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left:   `${s.x}%`,
            top:    `${s.y}%`,
            width:  `${s.size}px`,
            height: `${s.size}px`,
            "--dur":     `${s.dur}s`,
            "--delay":   `${s.delay}s`,
            "--min-op":  s.minOp,
            "--max-op":  s.maxOp,
          } as CSSCustomProperties}
        />
      ))}
    </div>
  );
};

// ── Particles ──────────────────────────────────────────────────────────────

const Particles: FC = (): ReactElement => {
  const particles: ParticleData[] = Array.from({ length: 30 }, (_, i): ParticleData => ({
    id:    i,
    x:     Math.random() * 100,
    dur:   (Math.random() * 20 + 15).toFixed(1),
    delay: (Math.random() * 20).toFixed(1),
    dx:    `${(Math.random() - 0.5) * 80}px`,
    color:
      i % 3 === 0 ? "rgba(0,229,255,0.6)"   :
      i % 3 === 1 ? "rgba(201,168,76,0.4)"  :
                    "rgba(255,255,255,0.3)",
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left:       `${p.x}%`,
            bottom:     0,
            background: p.color,
            "--pdur":   `${p.dur}s`,
            "--pdelay": `-${p.delay}s`,
            "--dx":     p.dx,
          } as CSSCustomProperties}
        />
      ))}
    </>
  );
};

// ── Mandala ────────────────────────────────────────────────────────────────

const Mandala: FC = (): ReactElement => {
  const outerRing = Array.from({ length: 12 }, (_, i): ReactElement => {
    const angle: number = (i * 30 * Math.PI) / 180;
    const x: number    = Math.cos(angle) * 85;
    const y: number    = Math.sin(angle) * 85;
    return (
      <g key={i}>
        <circle cx={x} cy={y} r="3" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.5" />
        <line
          x1={x * 0.85} y1={y * 0.85}
          x2={x}        y2={y}
          stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"
        />
      </g>
    );
  });

  const innerCircles = Array.from({ length: 6 }, (_, i): ReactElement => {
    const angle: number = (i * 60 * Math.PI) / 180;
    const x: number    = Math.cos(angle) * 25;
    const y: number    = Math.sin(angle) * 25;
    return (
      <g key={i}>
        <circle cx={x} cy={y} r="4" fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="0.6" />
        <line
          x1={x * 0.5} y1={y * 0.5}
          x2={x}       y2={y}
          stroke="rgba(0,229,255,0.3)" strokeWidth="0.5"
        />
      </g>
    );
  });

  return (
    <div className="mandala-container">
      <svg className="mandala-svg" width="200" height="200" viewBox="-100 -100 200 200">
        {outerRing}

        {([0, 45] as number[]).map((rot, ri) => (
          <polygon
            key={ri}
            points="0,-70 15,-15 70,0 15,15 0,70 -15,15 -70,0 -15,-15"
            fill="none"
            stroke={ri === 0 ? "rgba(201,168,76,0.5)" : "rgba(0,229,255,0.35)"}
            strokeWidth="0.8"
            transform={`rotate(${rot})`}
          />
        ))}

        <polygon
          points="0,-40 34.6,-20 34.6,20 0,40 -34.6,20 -34.6,-20"
          fill="none"
          stroke="rgba(201,168,76,0.4)"
          strokeWidth="0.8"
        />

        <g className="mandala-inner">
          {innerCircles}
          <circle cx="0" cy="0" r="8" fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="0.8" />
          <circle
            cx="0" cy="0" r="3"
            fill="rgba(201,168,76,0.6)"
            style={{ filter: "drop-shadow(0 0 4px rgba(201,168,76,0.8))" }}
          />
        </g>

        <circle
          cx="0" cy="0" r="92"
          fill="none"
          stroke="rgba(201,168,76,0.15)"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
};

// ── ConnectionLines ────────────────────────────────────────────────────────

const ConnectionLines: FC<ConnectionLinesProps> = ({ cardRefs, hoveredId }): ReactElement | null => {
  const [lines, setLines] = useState<ConnectionLine[]>([]);

  useEffect((): void => {
    if (hoveredId === null) { setLines([]); return; }

    const sourceEl: HTMLDivElement | null = cardRefs.current[hoveredId] ?? null;
    if (!sourceEl) return;

    const srcRect: DOMRect = sourceEl.getBoundingClientRect();
    const srcCx: number   = srcRect.left + srcRect.width  / 2;
    const srcCy: number   = srcRect.top  + srcRect.height / 2;

    const newLines: ConnectionLine[] = [];
    (Object.entries(cardRefs.current) as [string, HTMLDivElement | null][]).forEach(([id, el]) => {
      if (!el || parseInt(id, 10) === hoveredId) return;
      const r: DOMRect = el.getBoundingClientRect();
      newLines.push({
        id,
        x1: srcCx,                 y1: srcCy,
        x2: r.left + r.width  / 2, y2: r.top + r.height / 2,
      });
    });
    setLines(newLines);
  }, [hoveredId, cardRefs]);

  if (!lines.length) return null;

  return (
    <svg className="connection-lines">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(201,168,76,0.6)" />
          <stop offset="100%" stopColor="rgba(0,229,255,0.2)"  />
        </linearGradient>
      </defs>
      {lines.map((l) => (
        <line
          key={l.id}
          x1={l.x1} y1={l.y1}
          x2={l.x2} y2={l.y2}
          stroke="url(#lineGrad)"
          strokeWidth="0.8"
          strokeDasharray="6 4"
          style={{ animation: "glow-pulse 1.5s ease-in-out infinite" }}
        />
      ))}
    </svg>
  );
};

// ── GeoCard ────────────────────────────────────────────────────────────────

const GeoCard: FC<GeoCardProps> = ({ card, isExpanded, onToggle, onHover, cardRef }): ReactElement => (
  <div
    ref={cardRef}
    className={`geo-card${isExpanded ? " expanded" : ""}`}
    style={{
      "--float-dur":   card.floatDur,
      "--float-delay": card.floatDelay,
      "--tilt":        card.tilt,
    } as CSSCustomProperties}
    onClick={(): void  => onToggle(card.id)}
    onMouseEnter={(): void => onHover(card.id)}
    onMouseLeave={(): void => onHover(null)}
  >
    <div className="card-corner tl" />
    <div className="card-corner tr" />
    <div className="card-corner bl" />
    <div className="card-corner br" />

    <div className="card-inner">
      <div className="card-bg-pattern" />

      <div className="card-icon-wrap">
        <div className="card-icon-bg" />
        <span className="card-icon">{card.icon}</span>
      </div>

      <div className="card-category">{card.category}</div>
      <h2 className="card-title">{card.title}</h2>
      <p className="card-desc">{card.desc}</p>

      <div className="card-divider">
        <div className="divider-line" />
        <span className="divider-star">✦</span>
        <div className="divider-line" />
      </div>

      <div className="card-meta">
        {card.meta.map((m: MetaItem) => (
          <div key={m.label} className="meta-item">
            <span className="meta-label">{m.label}</span>
            <span className="meta-value">{m.value}</span>
          </div>
        ))}
      </div>

      <button className="card-expand-btn">
        <span>Reveal Deeper Knowledge</span>
        <span className={`expand-arrow${isExpanded ? " open" : ""}`}>▼</span>
      </button>

      <div className={`card-expanded-panel${isExpanded ? " open" : ""}`}>
        <div className="expanded-content">
          <div className="expanded-title">✦ &nbsp; Deeper Layer &nbsp; ✦</div>
          <p className="expanded-text">{card.expanded.text}</p>
          <div className="data-grid">
            {card.expanded.data.map((d: ExpandedData) => (
              <div key={d.label} className="data-cell">
                <div className="data-cell-label">{d.label}</div>
                <div className="data-cell-val">{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── App ────────────────────────────────────────────────────────────────────

const IslamicCosmologyDemoClaudeSonnet: FC = (): ReactElement => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId,  setHoveredId]  = useState<number | null>(null);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleToggle = (id: number): void =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{STYLES}</style>
      <div className="cosmos-root">
        <Stars />
        <Particles />
        <ConnectionLines cardRefs={cardRefs} hoveredId={hoveredId} />

        <header className="cosmos-header">
          <div className="header-ornament">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <h1 className="cosmos-title">CELESTIAL ARCHIVE</h1>
          <p className="cosmos-subtitle">مكتبة الأفلاك — The Library of the Spheres</p>
        </header>

        <Mandala />

        <main className="cards-cosmos">
          {CARDS.map((card: CardData) => (
            <GeoCard
              key={card.id}
              card={card}
              isExpanded={expandedId === card.id}
              onToggle={handleToggle}
              onHover={setHoveredId}
              cardRef={(el: HTMLDivElement | null): void => {
                cardRefs.current[card.id] = el;
              }}
            />
          ))}
        </main>

        <footer className="cosmos-footer">
          <div className="footer-ornament">
            <div className="footer-line" />
            <span style={{ color: "rgba(201,168,76,0.3)", fontSize: "10px" }}>✦</span>
            <div className="footer-line" />
          </div>
          <p className="footer-text">
            "Whoever knows himself knows his Lord" — Ibn Arabi
          </p>
        </footer>
      </div>
    </>
  );
};

export default IslamicCosmologyDemoClaudeSonnet;