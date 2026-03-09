'use client'

import { useState } from "react";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap');

  :root {
    --parchment: #f4e4c1;
    --parchment-dark: #e8d5a3;
    --parchment-deep: #d4b87a;
    --ink: #1a1208;
    --ink-faded: #3d2b0e;
    --gold: #c9982a;
    --gold-light: #e8b84b;
    --gold-pale: #f5d98c;
    --forest: #1a3a2a;
    --forest-mid: #2d5a3d;
    --forest-light: #4a7c5e;
    --crimson: #8b1a1a;
    --lapis: #1a3a6b;
    --shadow: rgba(26, 18, 8, 0.4);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background-color: var(--forest);
    font-family: 'Cormorant Garamond', serif;
    min-height: 100vh;
  }

  .library-wrapper {
    min-height: 100vh;
    background:
      radial-gradient(ellipse at 20% 20%, rgba(201,152,42,0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(26,58,42,0.6) 0%, transparent 50%),
      linear-gradient(160deg, #0d2018 0%, #1a3a2a 40%, #0f2215 100%);
    position: relative;
    overflow-x: hidden;
  }

  .library-wrapper::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,152,42,0.03) 60px, rgba(201,152,42,0.03) 61px),
      repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,152,42,0.03) 60px, rgba(201,152,42,0.03) 61px);
    pointer-events: none;
    z-index: 0;
  }

  /* ─── HEADER ─── */
  .library-header {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 56px 24px 40px;
  }

  .header-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  .ornament-line {
    height: 1px;
    width: 120px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }

  .ornament-diamond {
    width: 10px;
    height: 10px;
    background: var(--gold);
    transform: rotate(45deg);
    box-shadow: 0 0 12px var(--gold-light);
  }

  .header-badge {
    display: inline-block;
    font-family: 'Amiri', serif;
    font-size: 13px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.85;
    margin-bottom: 16px;
  }

  .library-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 700;
    color: var(--parchment);
    line-height: 1.15;
    text-shadow: 0 2px 20px rgba(201,152,42,0.3);
    letter-spacing: 2px;
  }

  .library-title span {
    color: var(--gold-light);
  }

  .library-subtitle {
    margin-top: 14px;
    font-size: 18px;
    font-style: italic;
    color: var(--parchment-dark);
    opacity: 0.75;
    letter-spacing: 1px;
  }

  .header-arabic {
    margin-top: 18px;
    font-family: 'Amiri', serif;
    font-size: 26px;
    color: var(--gold);
    opacity: 0.6;
    direction: rtl;
    letter-spacing: 2px;
  }

  /* ─── CATEGORY TABS ─── */
  .category-nav {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 0 24px 40px;
    flex-wrap: wrap;
  }

  .cat-btn {
    padding: 8px 20px;
    border: 1px solid rgba(201,152,42,0.35);
    background: rgba(201,152,42,0.06);
    color: var(--parchment-dark);
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .cat-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201,152,42,0.15), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .cat-btn:hover::before, .cat-btn.active::before { opacity: 1; }

  .cat-btn.active {
    border-color: var(--gold);
    color: var(--gold-light);
    box-shadow: 0 0 16px rgba(201,152,42,0.2), inset 0 0 16px rgba(201,152,42,0.05);
  }

  /* ─── GRID ─── */
  .manuscripts-grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 32px;
    padding: 0 32px 80px;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* ─── MANUSCRIPT CARD ─── */
  .manuscript-card {
    position: relative;
    cursor: pointer;
    animation: fadeInUp 0.6s ease both;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .manuscript-card:nth-child(1) { animation-delay: 0.05s; }
  .manuscript-card:nth-child(2) { animation-delay: 0.15s; }
  .manuscript-card:nth-child(3) { animation-delay: 0.25s; }
  .manuscript-card:nth-child(4) { animation-delay: 0.35s; }
  .manuscript-card:nth-child(5) { animation-delay: 0.45s; }
  .manuscript-card:nth-child(6) { animation-delay: 0.55s; }

  /* Shadow layers for depth */
  .card-shadow-l3 {
    position: absolute;
    inset: 0;
    background: var(--parchment-deep);
    transform: translate(8px, 8px);
    border-radius: 2px;
  }
  .card-shadow-l2 {
    position: absolute;
    inset: 0;
    background: var(--parchment-dark);
    transform: translate(4px, 4px);
    border-radius: 2px;
  }

  .card-body {
    position: relative;
    background: var(--parchment);
    border-radius: 2px;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s;
    box-shadow: 0 8px 40px rgba(0,0,0,0.5);
    background-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E");
  }

  .manuscript-card:hover .card-body {
    transform: translate(-3px, -3px);
    box-shadow: 0 16px 60px rgba(0,0,0,0.6);
  }

  .manuscript-card.expanded .card-body {
    transform: translate(-3px, -3px);
  }

  /* Top decorative band */
  .card-top-band {
    height: 6px;
    background: linear-gradient(90deg, var(--forest), var(--forest-mid), var(--gold), var(--forest-mid), var(--forest));
  }

  /* Corner ornaments */
  .card-corners {
    position: absolute;
    inset: 10px;
    pointer-events: none;
    z-index: 5;
  }

  .corner {
    position: absolute;
    width: 22px;
    height: 22px;
    border-color: var(--gold);
    border-style: solid;
    opacity: 0.55;
  }

  .corner-tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
  .corner-tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
  .corner-bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
  .corner-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

  /* Category stamp */
  .card-category-stamp {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 6;
    padding: 3px 10px;
    border: 1px solid currentColor;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
  }

  .stamp-science { color: var(--lapis); border-color: var(--lapis); }
  .stamp-philosophy { color: var(--forest-mid); border-color: var(--forest-mid); }
  .stamp-mathematics { color: var(--crimson); border-color: var(--crimson); }
  .stamp-medicine { color: #5a3a1a; border-color: #5a3a1a; }
  .stamp-astronomy { color: #3a1a5a; border-color: #3a1a5a; }
  .stamp-literature { color: #1a4a3a; border-color: #1a4a3a; }

  /* Icon area */
  .card-icon-area {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 24px 16px;
  }

  .card-icon-frame {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .card-icon-frame::before, .card-icon-frame::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid var(--gold);
    opacity: 0.4;
  }

  .card-icon-frame::before { transform: rotate(0deg); }
  .card-icon-frame::after { transform: rotate(45deg); border-radius: 4px; }

  .card-icon {
    font-size: 36px;
    position: relative;
    z-index: 2;
  }

  /* Title block */
  .card-title-block {
    padding: 8px 24px 20px;
    text-align: center;
    border-bottom: 1px solid rgba(201,152,42,0.25);
    position: relative;
  }

  .card-title-block::before, .card-title-block::after {
    content: '✦';
    position: absolute;
    bottom: -1px;
    color: var(--gold);
    font-size: 10px;
    opacity: 0.5;
    transform: translateY(50%);
    background: var(--parchment);
    padding: 0 4px;
  }

  .card-title-block::before { left: 50%; margin-left: -30px; }
  .card-title-block::after { left: 50%; margin-left: 14px; }

  .card-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.3;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }

  .card-arabic-title {
    font-family: 'Amiri', serif;
    font-size: 18px;
    color: var(--forest-mid);
    direction: rtl;
    opacity: 0.7;
  }

  .card-author {
    margin-top: 8px;
    font-size: 13px;
    font-style: italic;
    color: var(--ink-faded);
    opacity: 0.75;
  }

  /* Summary */
  .card-summary {
    padding: 18px 24px;
    font-size: 14.5px;
    line-height: 1.75;
    color: var(--ink-faded);
    border-bottom: 1px solid rgba(201,152,42,0.15);
  }

  /* Quote highlight */
  .card-quote {
    margin: 0 24px;
    padding: 14px 16px;
    border-left: 3px solid var(--gold);
    background: linear-gradient(90deg, rgba(201,152,42,0.1), transparent);
    font-style: italic;
    font-size: 14px;
    color: var(--ink);
    line-height: 1.7;
    position: relative;
    transition: background 0.3s;
  }

  .card-quote:hover {
    background: linear-gradient(90deg, rgba(201,152,42,0.2), transparent);
  }

  .card-quote::before {
    content: '"';
    position: absolute;
    top: -8px;
    left: 10px;
    font-size: 40px;
    color: var(--gold);
    opacity: 0.3;
    font-family: Georgia, serif;
    line-height: 1;
  }

  /* Open button */
  .card-open-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 16px 24px;
    padding: 10px;
    border: 1px solid rgba(201,152,42,0.4);
    background: transparent;
    cursor: pointer;
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--forest-mid);
    transition: all 0.3s;
    width: calc(100% - 48px);
  }

  .card-open-btn:hover {
    background: rgba(201,152,42,0.1);
    border-color: var(--gold);
    color: var(--ink);
  }

  .open-btn-icon {
    font-size: 16px;
    transition: transform 0.3s;
  }

  .expanded .open-btn-icon { transform: rotate(180deg); }

  /* ─── EXPANDED PANEL ─── */
  .expanded-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .expanded-panel.open {
    max-height: 700px;
  }

  .panel-divider {
    height: 2px;
    margin: 0 24px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0.4;
  }

  .panel-section {
    padding: 20px 24px;
    border-bottom: 1px solid rgba(201,152,42,0.12);
  }

  .panel-section-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .panel-section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(201,152,42,0.4), transparent);
  }

  .panel-text {
    font-size: 14px;
    line-height: 1.8;
    color: var(--ink-faded);
  }

  .panel-contributions {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .contribution-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13.5px;
    color: var(--ink-faded);
    line-height: 1.6;
  }

  .contribution-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gold);
    margin-top: 7px;
    flex-shrink: 0;
  }

  .panel-influence-bar {
    margin-top: 10px;
  }

  .influence-label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--ink-faded);
    margin-bottom: 6px;
  }

  .influence-track {
    height: 4px;
    background: rgba(201,152,42,0.15);
    border-radius: 2px;
    overflow: hidden;
  }

  .influence-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--forest-mid), var(--gold));
    border-radius: 2px;
    transition: width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Bottom band */
  .card-bottom-band {
    height: 5px;
    background: linear-gradient(90deg, var(--forest), var(--forest-mid), var(--gold-pale), var(--forest-mid), var(--forest));
    opacity: 0.6;
  }

  /* ─── FOOTER ─── */
  .library-footer {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 32px 24px 48px;
    border-top: 1px solid rgba(201,152,42,0.15);
    margin-top: 20px;
  }

  .footer-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .footer-text {
    font-size: 13px;
    color: var(--parchment-dark);
    opacity: 0.4;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  /* ─── DECORATIVE SIDE COLUMNS ─── */
  .side-column {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 28px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    opacity: 0.35;
  }

  .side-column-left { left: 6px; }
  .side-column-right { right: 6px; }

  .side-gem {
    width: 6px;
    height: 6px;
    background: var(--gold);
    transform: rotate(45deg);
  }

  .side-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, transparent, var(--gold), transparent);
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--forest); }
  ::-webkit-scrollbar-thumb { background: var(--gold); opacity: 0.4; border-radius: 3px; }
`;

interface Contribution { text: string; }

interface ManuscriptData {
  id: number;
  title: string;
  arabicTitle: string;
  author: string;
  category: string;
  era: string;
  icon: string;
  summary: string;
  quote: string;
  details: string;
  contributions: Contribution[];
  influence: number;
}

const manuscripts: ManuscriptData[] = [
  {
    id: 1,
    title: "Kitab al-Manazir",
    arabicTitle: "كتاب المناظر",
    author: "Ibn al-Haytham · 1011 CE",
    category: "science",
    era: "11th Century",
    icon: "👁",
    summary: "The foundational treatise on optics, revolutionizing the understanding of light, vision, and the nature of the human eye through empirical experimentation.",
    quote: "The duty of a man who investigates the writings of scientists is to make himself an enemy of all that he reads.",
    details: "Ibn al-Haytham conducted controlled experiments in a dark chamber — the camera obscura — to demonstrate that light enters the eye rather than emanating from it. His scientific method preceded the European Renaissance by centuries.",
    contributions: [
      { text: "Established the intromission theory of vision — light travels from objects to the eye" },
      { text: "Invented the camera obscura and described projection of images" },
      { text: "Pioneered the scientific method through systematic experimentation" },
    ],
    influence: 94,
  },
  {
    id: 2,
    title: "Al-Qanun fi al-Tibb",
    arabicTitle: "القانون في الطب",
    author: "Ibn Sina (Avicenna) · 1025 CE",
    category: "medicine",
    era: "11th Century",
    icon: "⚕",
    summary: "The Canon of Medicine — a comprehensive medical encyclopedia that served as the authoritative medical text across Europe and the Islamic world for six centuries.",
    quote: "The knowledge of anything, since all things have causes, is not acquired or complete unless it is known by its causes.",
    details: "Comprising over a million words across five volumes, the Canon systematized Greek, Islamic, and original medical knowledge. Ibn Sina described 760 drugs and outlined clinical trials for testing medicines.",
    contributions: [
      { text: "Described the contagious nature of tuberculosis and soil contamination" },
      { text: "Introduced quarantine as a method to limit spread of disease" },
      { text: "Established protocols for testing new pharmaceutical compounds" },
    ],
    influence: 98,
  },
  {
    id: 3,
    title: "Al-Jabr wa al-Muqabala",
    arabicTitle: "الجبر والمقابلة",
    author: "Al-Khwarizmi · 820 CE",
    category: "mathematics",
    era: "9th Century",
    icon: "∑",
    summary: "The birth of algebra — this manuscript introduced systematic methods for solving linear and quadratic equations, giving the world 'algebra' and 'algorithm' as words.",
    quote: "What is easiest and most useful in arithmetic, such as men constantly require in cases of inheritance, legacies, partition, lawsuits, and trade.",
    details: "Al-Khwarizmi worked at the House of Wisdom in Baghdad. The word 'algebra' derives from al-jabr in his title, and 'algorithm' from the Latinization of his own name — his influence is embedded in every line of modern code.",
    contributions: [
      { text: "Coined the term 'algebra' and established it as a discipline" },
      { text: "Introduced Hindu-Arabic numerals and the decimal system to Western mathematics" },
      { text: "Laid conceptual foundations for the modern algorithm" },
    ],
    influence: 99,
  },
  {
    id: 4,
    title: "Tahafut al-Falasifa",
    arabicTitle: "تهافت الفلاسفة",
    author: "Al-Ghazali · 1095 CE",
    category: "philosophy",
    era: "11th Century",
    icon: "📖",
    summary: "The Incoherence of the Philosophers — a rigorous philosophical critique challenging Aristotelian metaphysics, catalyzing centuries of theological and philosophical debate.",
    quote: "A grievous crime indeed against religion has been committed by the man who imagines that Islam is defended by the denial of the mathematical sciences.",
    details: "Al-Ghazali's work represents one of history's great intellectual confrontations. While critiquing Greek philosophy, he paradoxically used Greek logical methods to do so, demonstrating the deep synthesis at the heart of Islamic Golden Age scholarship.",
    contributions: [
      { text: "Pioneered systematic critique of Aristotelian cosmology" },
      { text: "Distinguished between mathematical certainty and metaphysical speculation" },
      { text: "Profoundly influenced Aquinas and scholastic philosophy in Europe" },
    ],
    influence: 88,
  },
  {
    id: 5,
    title: "Zij al-Sulṭani",
    arabicTitle: "زيج السلطاني",
    author: "Ulugh Beg · 1437 CE",
    category: "astronomy",
    era: "15th Century",
    icon: "✦",
    summary: "The Sultan's Astronomical Tables — the most accurate star catalog of the pre-telescopic era, cataloguing 1,018 stars with remarkable precision from the Samarkand observatory.",
    quote: "Religion disperses like fog, kingdoms perish, but the works of scholars remain for an eternity.",
    details: "Built using instruments of extraordinary scale — a marble sextant carved into a hillside — Ulugh Beg's observatory produced measurements not surpassed for nearly two centuries. His star positions differ from modern values by less than one arcminute.",
    contributions: [
      { text: "Catalogued 1,018 stars with unprecedented positional accuracy" },
      { text: "Calculated the length of the sidereal year to within 58 seconds of modern value" },
      { text: "Built the largest astronomical instruments of the medieval period" },
    ],
    influence: 85,
  },
  {
    id: 6,
    title: "Muqaddimah",
    arabicTitle: "المقدمة",
    author: "Ibn Khaldun · 1377 CE",
    category: "literature",
    era: "14th Century",
    icon: "🏛",
    summary: "The Prolegomena — a towering work of historiography introducing the concept of 'asabiyyah (social solidarity), and founding the disciplines of sociology and economics centuries before the West.",
    quote: "History is the record of human society itself, or world civilization; of the changes that take place in the nature of that society.",
    details: "Written in just five months while Ibn Khaldun sought retreat in a desert castle, the Muqaddimah presents the first systematic theory of history as driven by social forces rather than individual will — a revolutionary break from chronicles of kings and battles.",
    contributions: [
      { text: "Introduced 'asabiyyah — group cohesion as the engine of historical cycles" },
      { text: "First articulated the labor theory of value and concepts of supply and demand" },
      { text: "Founded the discipline of sociology 400 years before Auguste Comte" },
    ],
    influence: 96,
  },
];

const categories = ["All", "Science", "Medicine", "Mathematics", "Philosophy", "Astronomy", "Literature"];

export default function IslamicGoldenAgeLibraryDemoClaudeSonnet() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = manuscripts.filter(m =>
    activeCategory === "All" || m.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const toggle = (id: number) => setExpanded(prev => prev === id ? null : id);

  return (
    <>
      <style>{CSS}</style>
      <div className="library-wrapper">
        {/* Side decorative columns */}
        <div className="side-column side-column-left">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={i % 3 === 1 ? "side-gem" : "side-line"} />
          ))}
        </div>
        <div className="side-column side-column-right">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={i % 3 === 1 ? "side-gem" : "side-line"} />
          ))}
        </div>

        {/* Header */}
        <header className="library-header">
          <div className="header-ornament">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <div className="header-badge">Bayt al-Ḥikmah · بيت الحكمة</div>
          <h1 className="library-title">
            The House of <span>Wisdom</span>
          </h1>
          <p className="library-subtitle">Knowledge Illuminated Through the Ages</p>
          <div className="header-arabic">العلم نور والجهل ظلام</div>
        </header>

        {/* Category Navigation */}
        <nav className="category-nav">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Manuscripts Grid */}
        <main className="manuscripts-grid">
          {filtered.map((ms) => {
            const isExpanded = expanded === ms.id;
            return (
              <article
                key={ms.id}
                className={`manuscript-card${isExpanded ? " expanded" : ""}`}
              >
                <div className="card-shadow-l3" />
                <div className="card-shadow-l2" />
                <div className="card-body">
                  <div className="card-top-band" />

                  {/* Corner ornaments */}
                  <div className="card-corners">
                    <span className="corner corner-tl" />
                    <span className="corner corner-tr" />
                    <span className="corner corner-bl" />
                    <span className="corner corner-br" />
                  </div>

                  {/* Category stamp */}
                  <span className={`card-category-stamp stamp-${ms.category}`}>
                    {ms.category}
                  </span>

                  {/* Icon */}
                  <div className="card-icon-area">
                    <div className="card-icon-frame">
                      <span className="card-icon">{ms.icon}</span>
                    </div>
                  </div>

                  {/* Title block */}
                  <div className="card-title-block">
                    <h2 className="card-title">{ms.title}</h2>
                    <div className="card-arabic-title">{ms.arabicTitle}</div>
                    <div className="card-author">{ms.author}</div>
                  </div>

                  {/* Summary */}
                  <p className="card-summary">{ms.summary}</p>

                  {/* Quote */}
                  <blockquote className="card-quote">
                    {ms.quote}
                  </blockquote>

                  {/* Open button */}
                  <button className="card-open-btn" onClick={() => toggle(ms.id)}>
                    <span className="open-btn-icon">⌄</span>
                    {isExpanded ? "Close Manuscript" : "Open Manuscript"}
                    <span className="open-btn-icon">⌄</span>
                  </button>

                  {/* Expanded panel */}
                  <div className={`expanded-panel${isExpanded ? " open" : ""}`}>
                    <div className="panel-divider" />

                    <div className="panel-section">
                      <div className="panel-section-title">Commentary</div>
                      <p className="panel-text">{ms.details}</p>
                    </div>

                    <div className="panel-section">
                      <div className="panel-section-title">Key Contributions</div>
                      <div className="panel-contributions">
                        {ms.contributions.map((c, i) => (
                          <div key={i} className="contribution-item">
                            <span className="contribution-dot" />
                            <span>{c.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="panel-section">
                      <div className="panel-section-title">Historical Influence</div>
                      <div className="panel-influence-bar">
                        <div className="influence-label">
                          <span>Scholarly Impact</span>
                          <span>{ms.influence}%</span>
                        </div>
                        <div className="influence-track">
                          <div
                            className="influence-fill"
                            style={{ width: isExpanded ? `${ms.influence}%` : "0%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-bottom-band" />
                </div>
              </article>
            );
          })}
        </main>

        {/* Footer */}
        <footer className="library-footer">
          <div className="footer-ornament">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="footer-text">Bayt al-Ḥikmah · Baghdad · 8th–13th Century</p>
        </footer>
      </div>
    </>
  );
}