'use client';

import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --emerald-deep: #0a1f14;
    --emerald-mid: #0f2d1c;
    --emerald-rich: #163d26;
    --emerald-glow: #1a4f30;
    --gold-bright: #d4a017;
    --gold-rich: #c8870a;
    --gold-pale: #f0d070;
    --gold-faint: #8a6010;
    --ivory: #f5ead8;
    --ivory-dim: #d8c9a8;
    --ruby: #8b1a1a;
    --ruby-bright: #c02828;
    --sapphire: #1a3a6b;
    --pattern-opacity: 0.12;
  }

  .ottoman-root {
    min-height: 100vh;
    background: var(--emerald-deep);
    font-family: 'Cormorant Garamond', serif;
    color: var(--ivory);
    position: relative;
    overflow-x: hidden;
  }

  /* === BACKGROUND LATTICE PATTERN === */
  .ottoman-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 28px,
        rgba(212,160,23,0.05) 28px,
        rgba(212,160,23,0.05) 30px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 28px,
        rgba(212,160,23,0.05) 28px,
        rgba(212,160,23,0.05) 30px
      );
    pointer-events: none;
    z-index: 0;
  }

  .ottoman-root::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(212,160,23,0.08) 0%, transparent 60%),
                radial-gradient(ellipse at 0% 50%, rgba(26,79,48,0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 100% 50%, rgba(26,58,107,0.2) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  /* === HEADER === */
  .palace-header {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 56px 24px 40px;
  }

  .palace-header-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .ornament-line {
    flex: 1;
    max-width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-rich), transparent);
    position: relative;
  }

  .ornament-line::after {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 7px;
    height: 7px;
    background: var(--gold-bright);
    transform: translateX(-50%) rotate(45deg);
  }

  .ornament-star {
    width: 28px;
    height: 28px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold-bright);
    font-size: 22px;
  }

  .palace-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(1.6rem, 4vw, 2.8rem);
    font-weight: 900;
    letter-spacing: 0.12em;
    background: linear-gradient(180deg, var(--gold-pale) 0%, var(--gold-bright) 50%, var(--gold-rich) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    margin-bottom: 10px;
  }

  .palace-subtitle {
    font-family: 'Amiri', serif;
    font-size: 1.1rem;
    font-style: italic;
    color: var(--ivory-dim);
    letter-spacing: 0.08em;
    opacity: 0.8;
  }

  /* === PALACE GRID === */
  .palace-grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 32px;
    padding: 0 32px 80px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* === PALACE CARD === */
  .palace-card {
    position: relative;
    cursor: pointer;
  }

  .card-arch-frame {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--gold-faint);
    background: linear-gradient(160deg, var(--emerald-mid) 0%, var(--emerald-deep) 100%);
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
  }

  .palace-card:hover .card-arch-frame {
    border-color: var(--gold-rich);
    box-shadow: 0 0 40px rgba(212,160,23,0.18), 0 8px 32px rgba(0,0,0,0.5);
  }

  /* arch header zone — contains the SVG */
  .card-arch-header {
    position: relative;
    width: 100%;
    height: 110px;
    overflow: visible;
  }

  /* SVG fills the header zone */
  .card-arch-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: block;
  }

  /* category + title sit on top of arch SVG */
  .card-arch-text {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    padding: 0 16px;
    z-index: 3;
  }

  .card-inner {
    position: relative;
    background: transparent;
    overflow: hidden;
  }

  /* Gold shimmer on hover */
  .card-arch-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 1;
  }

  .palace-card:hover .card-arch-frame::before {
    opacity: 1;
  }

  /* Top floral band — sits below arch header, contains gem */
  .card-floral-band {
    height: 40px;
    background: repeating-linear-gradient(
      90deg,
      var(--gold-faint) 0px,
      transparent 1px,
      transparent 18px,
      var(--gold-faint) 19px,
      transparent 20px
    ),
    linear-gradient(180deg, rgba(212,160,23,0.25) 0%, rgba(212,160,23,0.06) 100%);
    border-top: 1px solid var(--gold-faint);
    border-bottom: 1px solid var(--gold-faint);
    position: relative;
    z-index: 2;
  }

  .card-floral-band::before {
    content: '❧';
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gold-bright);
    font-size: 10px;
    opacity: 0.6;
  }

  .card-floral-band::after {
    content: '❧';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%) scaleX(-1);
    color: var(--gold-bright);
    font-size: 10px;
    opacity: 0.7;
    white-space: nowrap;
  }

  .card-body {
    padding: 18px 22px 18px;
    position: relative;
    z-index: 2;
  }

  .card-title-spacer {
    height: 28px;
  }

  .card-icon-gem {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--gold-rich), var(--gold-faint));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    box-shadow: 0 0 14px rgba(212,160,23,0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  .card-category {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.5rem;
    letter-spacing: 0.22em;
    color: var(--gold-rich);
    text-transform: uppercase;
    margin-bottom: 4px;
    text-shadow: 0 1px 6px rgba(0,0,0,0.8);
  }

  .card-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(0.75rem, 1.8vw, 0.95rem);
    font-weight: 700;
    color: var(--gold-pale);
    letter-spacing: 0.05em;
    line-height: 1.4;
    text-shadow: 0 2px 8px rgba(0,0,0,0.9);
  }

  /* Separator */
  .card-sep {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 14px 0;
  }

  .sep-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-faint), transparent);
  }

  .sep-diamond {
    width: 6px;
    height: 6px;
    background: var(--gold-bright);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .card-desc {
    font-size: 0.92rem;
    line-height: 1.75;
    color: var(--ivory-dim);
    font-weight: 300;
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid rgba(212,160,23,0.15);
  }

  .card-tag {
    font-family: 'Amiri', serif;
    font-size: 0.8rem;
    color: var(--gold-rich);
    font-style: italic;
    letter-spacing: 0.04em;
  }

  .expand-btn {
    background: none;
    border: 1px solid var(--gold-faint);
    color: var(--gold-bright);
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  .expand-btn:hover {
    background: rgba(212,160,23,0.2);
    border-color: var(--gold-bright);
    box-shadow: 0 0 10px rgba(212,160,23,0.4);
  }

  .expand-btn.open {
    transform: rotate(180deg);
  }

  /* === EXPANDED PANEL === */
  .panel-expand {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .panel-expand.open {
    max-height: 600px;
  }

  .panel-inner {
    border-top: 1px solid rgba(212,160,23,0.2);
    padding: 0 22px 20px;
    position: relative;
    z-index: 2;
  }

  .sub-panel-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.6rem;
    letter-spacing: 0.22em;
    color: var(--gold-rich);
    text-transform: uppercase;
    margin: 16px 0 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sub-panel-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--gold-faint), transparent);
  }

  /* Sub-cards */
  .sub-cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sub-card {
    background: rgba(212,160,23,0.04);
    border: 1px solid rgba(212,160,23,0.18);
    border-left: 3px solid var(--gold-rich);
    padding: 10px 14px;
    border-radius: 0 4px 4px 0;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    animation: slideIn 0.4s ease both;
  }

  .sub-card:hover {
    background: rgba(212,160,23,0.1);
    border-left-color: var(--gold-pale);
    transform: translateX(4px);
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-16px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .sub-card:nth-child(1) { animation-delay: 0.05s; }
  .sub-card:nth-child(2) { animation-delay: 0.12s; }
  .sub-card:nth-child(3) { animation-delay: 0.19s; }

  .sub-icon {
    font-size: 16px;
    flex-shrink: 0;
    opacity: 0.85;
  }

  .sub-info { flex: 1; min-width: 0; }

  .sub-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--ivory);
    margin-bottom: 2px;
  }

  .sub-detail {
    font-size: 0.78rem;
    color: var(--ivory-dim);
    opacity: 0.7;
    font-style: italic;
  }

  .sub-value {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.7rem;
    color: var(--gold-bright);
    text-align: right;
    flex-shrink: 0;
  }

  /* === FOOTER ORNAMENT === */
  .palace-footer {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 20px 24px 48px;
  }

  .footer-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .footer-line {
    flex: 1;
    max-width: 160px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-faint), transparent);
  }

  .footer-text {
    font-family: 'Amiri', serif;
    font-size: 0.85rem;
    font-style: italic;
    color: var(--gold-faint);
    letter-spacing: 0.1em;
  }

  /* Arch hover glow overlay */
  .palace-card:hover .card-arch-header::after {
    opacity: 1;
  }

  .card-arch-header::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 40%, rgba(212,160,23,0.22) 0%, transparent 70%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
    z-index: 2;
  }

  /* Scroll reveal */
  @keyframes revealCard {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .palace-card {
    animation: revealCard 0.6s ease both;
  }

  .palace-card:nth-child(1) { animation-delay: 0.1s; }
  .palace-card:nth-child(2) { animation-delay: 0.22s; }
  .palace-card:nth-child(3) { animation-delay: 0.34s; }
  .palace-card:nth-child(4) { animation-delay: 0.46s; }
  .palace-card:nth-child(5) { animation-delay: 0.58s; }
  .palace-card:nth-child(6) { animation-delay: 0.7s; }

  /* Responsive */
  @media (max-width: 640px) {
    .palace-grid { padding: 0 16px 60px; gap: 24px; }
  }
`;

interface SubItem {
  icon: string;
  name: string;
  detail: string;
  value: string;
}

interface CardData {
  id: number;
  category: string;
  title: string;
  icon: string;
  description: string;
  tag: string;
  color: string;
  subTitle: string;
  subItems: SubItem[];
}

const cards: CardData[] = [
  {
    id: 1,
    category: "Imperial Treasury",
    title: "Chambers of Golden Wealth",
    icon: "⚜️",
    description: "The vaulted treasury where sultans kept their most prized artifacts — jeweled swords, jade goblets, and coffers of Venetian coin.",
    tag: "Topkapi Palace · Est. 1459",
    color: "#d4a017",
    subTitle: "Treasured Relics",
    subItems: [
      { icon: "💎", name: "Spoonmaker's Diamond", detail: "86-carat teardrop gem", value: "Priceless" },
      { icon: "🗡️", name: "Sword of Süleyman", detail: "Jeweled golden hilt", value: "XVI Century" },
      { icon: "🪬", name: "Sacred Topaz Throne", detail: "Ebony & mother of pearl", value: "Royal Relic" },
    ],
  },
  {
    id: 2,
    category: "Harem Pavilion",
    title: "The Gilded Garden of Roses",
    icon: "🌹",
    description: "Enclosed courtyards of the imperial harem, where fountains sang among jasmine-threaded colonnades and zephyrs carried distant music.",
    tag: "Tulip Era · Circa 1718",
    color: "#c02828",
    subTitle: "Pavilion Chambers",
    subItems: [
      { icon: "🌸", name: "Rose Garden Kiosk", detail: "Marble columns, tiled alcoves", value: "Spring Wing" },
      { icon: "⛲", name: "Fountain of Ablution", detail: "Carved alabaster basin", value: "Central Court" },
      { icon: "🕯️", name: "Lantern Chamber", detail: "Pierced bronze lamps", value: "Night Hall" },
    ],
  },
  {
    id: 3,
    category: "Divan Hall",
    title: "Council of the Grand Vizier",
    icon: "📜",
    description: "The imperial council hall where viziers deliberated affairs of empire beneath soaring vaults adorned with calligraphy of divine verse.",
    tag: "Sublime Porte · 1520–1566",
    color: "#1a3a6b",
    subTitle: "Council Positions",
    subItems: [
      { icon: "👁️", name: "Grand Vizier", detail: "Keeper of the Imperial Seal", value: "First Rank" },
      { icon: "⚖️", name: "Kadıasker", detail: "Chief Justice of the Realm", value: "Second Rank" },
      { icon: "🗺️", name: "Defterdar", detail: "Minister of the Treasury", value: "Third Rank" },
    ],
  },
  {
    id: 4,
    category: "Iznik Tileworks",
    title: "Artisans of the Sacred Blue",
    icon: "🔷",
    description: "Master tile-painters who captured the infinite heavens in cobalt and turquoise, decorating every mosque dome and palace wall.",
    tag: "Iznik Workshops · XVI–XVII C.",
    color: "#1a4f30",
    subTitle: "Signature Motifs",
    subItems: [
      { icon: "🌿", name: "Saz Leaf Scroll", detail: "Mythical curved foliage", value: "Classical" },
      { icon: "🌷", name: "Ottoman Tulip", detail: "Symbol of perfection", value: "Lâle Devri" },
      { icon: "🔵", name: "Cobalt Ground", detail: "Vivid lapis ultramarine", value: "Signature" },
    ],
  },
  {
    id: 5,
    category: "Music & Mehter",
    title: "Drums of the Imperial Band",
    icon: "🥁",
    description: "The mehter — world's oldest military ensemble — whose thunderous kettledrums and zurna pipes heralded the sultan's campaigns across three continents.",
    tag: "Janissary Corps · 1299–1826",
    color: "#8b1a1a",
    subTitle: "Instruments of Majesty",
    subItems: [
      { icon: "🎵", name: "Davul", detail: "Great two-headed war drum", value: "Lead" },
      { icon: "🎶", name: "Zurna", detail: "Double-reed oboe", value: "Melody" },
      { icon: "🔔", name: "Zil & Çevgen", detail: "Cymbals & crescent bells", value: "Rhythm" },
    ],
  },
  {
    id: 6,
    category: "Celestial Observatory",
    title: "Stargazers of the Bosphorus",
    icon: "🌙",
    description: "The Ottoman imperial observatory, where Taqi al-Din and his scholars charted celestial spheres with unprecedented precision beneath Istanbul's skies.",
    tag: "Galata Tower · 1574",
    color: "#163d26",
    subTitle: "Instruments & Works",
    subItems: [
      { icon: "🔭", name: "Armillary Sphere", detail: "Brass celestial model", value: "Masterwork" },
      { icon: "⭐", name: "Star Catalogue", detail: "1,018 stellar positions", value: "Zij Record" },
      { icon: "🌀", name: "Astrolabe", detail: "Gilt brass, inscribed Arabic", value: "Navigation" },
    ],
  },
];

// SVG arch — fills the entire header zone, arch rises from bottom
function ArchTop({ color, category, title }: { color: string; category: string; title: string }) {
  const id = color.replace('#', '');
  return (
    <div className="card-arch-header">
      <svg
        className="card-arch-svg"
        viewBox="0 0 400 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0a1f14" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id={`border-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#c8870a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f0d070" stopOpacity="1" />
            <stop offset="70%" stopColor="#c8870a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          {/* Lattice tile fill */}
          <pattern id={`tile-${id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none"/>
            <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(212,160,23,0.08)" strokeWidth="0.5"/>
            <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(212,160,23,0.08)" strokeWidth="0.5"/>
            <line x1="0" y1="0" x2="20" y2="20" stroke="rgba(212,160,23,0.06)" strokeWidth="0.5"/>
            <line x1="20" y1="0" x2="0" y2="20" stroke="rgba(212,160,23,0.06)" strokeWidth="0.5"/>
          </pattern>
        </defs>

        {/* Full background */}
        <rect width="400" height="110" fill={`url(#bg-${id})`} />
        <rect width="400" height="110" fill={`url(#tile-${id})`} />

        {/* Pointed arch shape rising from bottom */}
        {/* arch: pointed ogee arch, apex at top-center */}
        <path
          d="M 0 110 L 0 75 Q 0 55 30 42 L 155 18 Q 185 2 200 0 Q 215 2 245 18 L 370 42 Q 400 55 400 75 L 400 110 Z"
          fill="none"
          stroke={`url(#border-${id})`}
          strokeWidth="1.5"
        />

        {/* Arch interior subtle gradient overlay */}
        <path
          d="M 0 110 L 0 75 Q 0 55 30 42 L 155 18 Q 185 2 200 0 Q 215 2 245 18 L 370 42 Q 400 55 400 75 L 400 110 Z"
          fill="rgba(0,0,0,0.15)"
        />

        {/* Side column lines */}
        <line x1="0" y1="0" x2="0" y2="110" stroke="rgba(212,160,23,0.4)" strokeWidth="1"/>
        <line x1="400" y1="0" x2="400" y2="110" stroke="rgba(212,160,23,0.4)" strokeWidth="1"/>

        {/* Top border */}
        <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(212,160,23,0.5)" strokeWidth="1"/>

        {/* Apex jewel */}
        <circle cx="200" cy="5" r="4" fill="#d4a017" opacity="0.95"/>
        <circle cx="200" cy="5" r="7" fill="none" stroke="#d4a017" strokeWidth="0.8" opacity="0.5"/>
        <circle cx="200" cy="5" r="10" fill="none" stroke="#d4a017" strokeWidth="0.4" opacity="0.3"/>

        {/* Small corner ornaments */}
        <rect x="4" y="4" width="6" height="6" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.8" transform="rotate(45,7,7)"/>
        <rect x="390" y="4" width="6" height="6" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="0.8" transform="rotate(45,393,7)"/>
      </svg>

      {/* Text overlay on arch */}
      <div className="card-arch-text">
        <div className="card-category">{category}</div>
        <div className="card-title">{title}</div>
      </div>
    </div>
  );
}

function PalaceCard({ data }: { data: CardData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="palace-card">
      <div className="card-arch-frame">
        {/* Arch header zone with SVG + text */}
        <ArchTop color={data.color} category={data.category} title={data.title} />

        <div className="card-inner">
          {/* Floral band below arch, gem centered inside */}
          <div className="card-floral-band">
            <div className="card-icon-gem">{data.icon}</div>
          </div>
          <div className="card-body">
            <div className="card-sep">
              <div className="sep-line" />
              <div className="sep-diamond" />
              <div className="sep-line" />
            </div>

            <p className="card-desc">{data.description}</p>

            <div className="card-meta">
              <span className="card-tag">{data.tag}</span>
              <button
                className={`expand-btn${open ? " open" : ""}`}
                onClick={() => setOpen(v => !v)}
                aria-label={open ? "Collapse" : "Expand"}
              >
                {open ? "▲" : "▼"}
              </button>
            </div>
          </div>

          <div className={`panel-expand${open ? " open" : ""}`}>
            <div className="panel-inner">
              <div className="sub-panel-title">{data.subTitle}</div>
              <div className="sub-cards">
                {data.subItems.map((item, i) => (
                  <div className="sub-card" key={i}>
                    <span className="sub-icon">{item.icon}</span>
                    <div className="sub-info">
                      <div className="sub-name">{item.name}</div>
                      <div className="sub-detail">{item.detail}</div>
                    </div>
                    <div className="sub-value">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OttomanPalaceDemoClaudeSonnet() {
  return (
    <>
      <style>{css}</style>
      <div className="ottoman-root">
        <header className="palace-header">
          <div className="palace-header-ornament">
            <div className="ornament-line" />
            <div className="ornament-star">✦</div>
            <div className="ornament-line" />
          </div>
          <h1 className="palace-title">Saray-ı Hümâyûn</h1>
          <p className="palace-subtitle">Galleries of the Imperial Palace · Topkapı</p>
        </header>

        <main className="palace-grid">
          {cards.map(card => (
            <PalaceCard key={card.id} data={card} />
          ))}
        </main>

        <footer className="palace-footer">
          <div className="footer-ornament">
            <div className="footer-line" />
            <span style={{ color: "var(--gold-faint)", fontSize: "10px" }}>✦</span>
            <div className="footer-line" />
          </div>
          <p className="footer-text">Devlet-i Aliyye-i Osmâniyye · The Sublime Ottoman State</p>
        </footer>
      </div>
    </>
  );
}