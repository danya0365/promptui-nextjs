"use client";

import { useEffect, useRef, useState } from "react";

interface Card {
  id: number;
  arabic: string;
  title: string;
  subtitle: string;
  verse: string;
  verseRef: string;
  body: string;
  detail: string;
  glyph: string;
}

const cards: Card[] = [
  {
    id: 1,
    arabic: "التوحيد",
    title: "Tawhid",
    subtitle: "The Oneness of God",
    verse: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
    verseRef: "Al-Ikhlas 112:1",
    body: "The absolute unity of Allah — the cornerstone of Islamic faith, the axis around which all creation revolves.",
    detail:
      "Tawhid is not merely monotheism. It is the recognition that nothing exists except through the will of the One. Every breath, every atom, every moment of consciousness points back to the singular, uncreated source.",
    glyph: "☽",
  },
  {
    id: 2,
    arabic: "الصلاة",
    title: "Salah",
    subtitle: "The Sacred Prayer",
    verse: "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ",
    verseRef: "Al-Baqarah 2:43",
    body: "Five pillars of light anchoring the faithful to the divine. Prayer is the ascension of the soul toward its origin.",
    detail:
      "In prostration the forehead meets the earth — the highest of human gestures becomes the lowest physical position. This paradox is the secret of Salah: the servant who bows completely is the one who rises infinitely.",
    glyph: "✦",
  },
  {
    id: 3,
    arabic: "الكعبة",
    title: "Al-Ka'bah",
    subtitle: "The House of God",
    verse: "إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ",
    verseRef: "Al-Imran 3:96",
    body: "The sacred cube at the center of the world's spiritual geometry. A point around which all hearts orbit in eternal circumambulation.",
    detail:
      "The Ka'bah is clothed in black — a color that absorbs all light, holding within it the unseen. The Kiswah's golden calligraphy speaks what the silence inside cannot. To stand before it is to stand at the center of time.",
    glyph: "◈",
  },
  {
    id: 4,
    arabic: "الرحمة",
    title: "Ar-Rahman",
    subtitle: "The Most Merciful",
    verse: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    verseRef: "Al-Fatihah 1:1",
    body: "Mercy precedes all things. Before judgment, before law, before the weighing of deeds — there is only the infinite compassion of the Divine.",
    detail:
      "Rahman is the mercy that envelops all creation without condition. Rahim is the mercy directed toward the believer specifically. Together they form the breath by which the universe was first spoken into existence.",
    glyph: "❋",
  },
  {
    id: 5,
    arabic: "النور",
    title: "An-Nur",
    subtitle: "The Light of the Heavens",
    verse: "ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ",
    verseRef: "An-Nur 24:35",
    body: "Light upon light. The divine radiance that illuminates the visible world and guides the searching heart through the invisible.",
    detail:
      "The parable of the light: a niche, a lamp, a glass like a brilliant star. The oil glows though untouched by fire. This is the light of guidance — self-sustaining, eternal, offered to all who turn toward it.",
    glyph: "⟡",
  },
  {
    id: 6,
    arabic: "الصبر",
    title: "As-Sabr",
    subtitle: "Sacred Patience",
    verse: "وَٱصْبِرُوٓا۟ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ",
    verseRef: "Al-Anfal 8:46",
    body: "Patience is not passive waiting. It is the active endurance of the soul, the refinement of faith through the fire of trial.",
    detail:
      "Sabr has three dimensions: patience in obeying Allah, patience in refraining from what He has forbidden, and patience in accepting His decrees. The greatest of these is the last — to say 'al-hamdulillah' in the darkest hour.",
    glyph: "⬡",
  },
];

function GeometricPattern() {
  return (
    <svg className="geo-pattern" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="islamic-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <g transform="translate(40,40)" stroke="#C9A84C" strokeWidth="0.6" fill="none">
            <polygon points="0,-20 5.18,-14.14 14.14,-14.14 8.66,-7.07 11.76,0 5.88,-3.53 0,5.88 -5.88,-3.53 -11.76,0 -8.66,-7.07 -14.14,-14.14 -5.18,-14.14" />
            <polygon points="0,-16 4.14,-11.31 11.31,-11.31 6.93,-5.66 9.41,0 4.71,-2.83 0,4.71 -4.71,-2.83 -9.41,0 -6.93,-5.66 -11.31,-11.31 -4.14,-11.31" />
            <circle r="3" strokeWidth="0.4" />
            <line x1="0" y1="-20" x2="0" y2="20" strokeWidth="0.3" />
            <line x1="-20" y1="0" x2="20" y2="0" strokeWidth="0.3" />
            <line x1="-14.14" y1="-14.14" x2="14.14" y2="14.14" strokeWidth="0.3" />
            <line x1="14.14" y1="-14.14" x2="-14.14" y2="14.14" strokeWidth="0.3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-geo)" />
    </svg>
  );
}

function CornerOrnament({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const rotations = { tl: 0, tr: 90, br: 180, bl: 270 };
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className={`corner-ornament corner-${pos}`}>
      <g
        transform={`translate(14,14) rotate(${rotations[pos]}) translate(-14,-14)`}
        stroke="#C9A84C"
        fill="none"
        strokeWidth="0.8"
      >
        <path d="M2,2 L12,2 L2,12 Z" strokeWidth="0.6" />
        <path d="M2,2 Q8,2 8,8" />
        <circle cx="2" cy="2" r="1.5" fill="#C9A84C" />
        <line x1="2" y1="14" x2="2" y2="2" />
        <line x1="14" y1="2" x2="2" y2="2" />
      </g>
    </svg>
  );
}

function HeaderStar() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" className="header-star">
      <g transform="translate(30,30)" stroke="#C9A84C" fill="none">
        {[0, 45, 90, 135].map((angle) => (
          <line
            key={angle}
            x1={-24 * Math.cos((angle * Math.PI) / 180)}
            y1={-24 * Math.sin((angle * Math.PI) / 180)}
            x2={24 * Math.cos((angle * Math.PI) / 180)}
            y2={24 * Math.sin((angle * Math.PI) / 180)}
            strokeWidth="0.6"
            strokeOpacity="0.5"
          />
        ))}
        <polygon
          points="0,-18 4.67,-12.73 12.73,-12.73 7.79,-6.36 10.59,0 5.30,-3.18 0,5.30 -5.30,-3.18 -10.59,0 -7.79,-6.36 -12.73,-12.73 -4.67,-12.73"
          strokeWidth="0.8"
          fill="rgba(201,168,76,0.06)"
        />
        <polygon
          points="0,-10 2.59,-7.07 7.07,-7.07 4.33,-3.54 5.88,0 2.94,-1.76 0,2.94 -2.94,-1.76 -5.88,0 -4.33,-3.54 -7.07,-7.07 -2.59,-7.07"
          strokeWidth="0.6"
          fill="rgba(201,168,76,0.1)"
        />
        <circle r="2.5" fill="#C9A84C" fillOpacity="0.8" />
        <circle r="6" strokeWidth="0.4" strokeDasharray="2,3" />
        <circle r="18" strokeWidth="0.3" strokeOpacity="0.3" />
      </g>
    </svg>
  );
}

function IslamicCard({ card, index }: { card: Card; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const [detailHeight, setDetailHeight] = useState(0);

  useEffect(() => {
    if (detailRef.current) setDetailHeight(detailRef.current.scrollHeight);
  }, []);

  return (
    <div
      className={`card-wrapper card-delay-${index}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="card-outer-glow" />
      <div className={`card-inner${expanded ? " card-expanded" : ""}`}>
        <GeometricPattern />
        <CornerOrnament pos="tl" />
        <CornerOrnament pos="tr" />
        <CornerOrnament pos="bl" />
        <CornerOrnament pos="br" />
        <div className="card-top-line" />

        <div className="card-body-section">
          <div className="card-header-row">
            <div>
              <div className="arabic-title">{card.arabic}</div>
              <div className="eng-title">{card.title}</div>
              <div className="eng-subtitle">{card.subtitle}</div>
            </div>
            <div className={`card-glyph${expanded ? " glyph-rotated" : ""}`}>{card.glyph}</div>
          </div>

          <div className="divider-row">
            <div className="divider-line divider-line-left" />
            <div className="divider-diamond" />
            <div className="divider-line divider-line-right" />
          </div>

          <div className="verse-block">
            <div className="verse-arabic">{card.verse}</div>
            <div className="verse-ref">— {card.verseRef}</div>
          </div>

          <p className="card-body-text">{card.body}</p>
        </div>

        <div
          className="detail-panel"
          style={{ maxHeight: expanded ? `${detailHeight + 80}px` : "0px" }}
        >
          <div ref={detailRef}>
            <div className="detail-divider-row">
              <div className="divider-line divider-line-left" />
              <div className="detail-diamonds">
                <div className="detail-diamond dd-1" />
                <div className="detail-diamond dd-2" />
                <div className="detail-diamond dd-3" />
              </div>
              <div className="divider-line divider-line-right" />
            </div>
            <div className="detail-content">
              <div className="detail-label">✦ Deeper Knowledge ✦</div>
              <p className="detail-text">{card.detail}</p>
            </div>
          </div>
        </div>

        <div className="expand-indicator">
          <div className="expand-line" />
          <div className={`expand-arrow${expanded ? " arrow-flipped" : ""}`}>▾</div>
          <div className="expand-line" />
        </div>
      </div>
    </div>
  );
}

export default function KaabaInspiredDemoClaudeSonnet() {
  return (
    <div className="page-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Raleway:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page-root {
          min-height: 100vh;
          background: #080808;
          position: relative;
          overflow-x: hidden;
        }
        .page-root::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.04) 0%, transparent 70%);
          z-index: 0;
        }
        .page-root::after {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 30%, rgba(232,201,106,0.8) 50%, rgba(201,168,76,0.5) 70%, transparent 100%);
          z-index: 10;
        }

        .geo-pattern {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.05;
          transition: opacity 0.4s ease;
        }

        /* Page layout */
        .page-content {
          position: relative;
          z-index: 1;
          max-width: 1024px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
        }

        /* Header */
        .site-header { text-align: center; margin-bottom: 4rem; }
        .header-star { display: block; margin: 0 auto 1rem; }
        .header-basmala {
          font-family: 'Amiri', serif;
          font-size: 2.8rem;
          font-weight: 400;
          color: #C9A84C;
          text-shadow: 0 0 40px rgba(201,168,76,0.3);
          direction: rtl;
          line-height: 1.3;
        }
        .header-translation {
          font-family: 'Raleway', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.45);
          margin-top: 1rem;
        }
        .header-rule {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .rule-line {
          height: 1px;
          width: 6rem;
        }
        .rule-line-left  { background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4)); }
        .rule-line-right { background: linear-gradient(90deg, rgba(201,168,76,0.4), transparent); }
        .header-diamonds { display: flex; gap: 0.5rem; align-items: center; }
        .hdiamond {
          width: 5px; height: 5px;
          transform: rotate(45deg);
          background: rgba(201,168,76,0.35);
        }
        .hdiamond-center {
          background: rgba(201,168,76,0.85);
          transform: rotate(45deg) scale(1.4);
        }

        /* Pillars label */
        .pillars-label {
          text-align: center;
          margin-bottom: 2rem;
          font-family: 'Raleway', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.3);
        }

        /* Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px)  { .cards-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .cards-grid { grid-template-columns: 1fr 1fr 1fr; } }

        /* Card wrapper */
        .card-wrapper {
          position: relative;
          cursor: pointer;
          user-select: none;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-delay-0 { animation-delay: 0ms; }
        .card-delay-1 { animation-delay: 120ms; }
        .card-delay-2 { animation-delay: 240ms; }
        .card-delay-3 { animation-delay: 360ms; }
        .card-delay-4 { animation-delay: 480ms; }
        .card-delay-5 { animation-delay: 600ms; }

        /* Glow */
        .card-outer-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 2px;
          box-shadow: 0 0 0 rgba(201,168,76,0);
          transition: box-shadow 0.7s ease;
        }
        .card-wrapper:hover .card-outer-glow {
          box-shadow: 0 0 40px rgba(201,168,76,0.18), 0 0 80px rgba(201,168,76,0.08);
        }

        /* Inner card */
        .card-inner {
          position: relative;
          border: 1px solid rgba(201,168,76,0.22);
          overflow: hidden;
          background: linear-gradient(160deg, #0f0d08 0%, #0a0a0a 60%, #0d0b06 100%);
          box-shadow: inset 0 1px 0 rgba(201,168,76,0.06);
          transition: border-color 0.5s ease, background 0.5s ease, box-shadow 0.5s ease;
        }
        .card-wrapper:hover .card-inner,
        .card-inner.card-expanded {
          border-color: rgba(201,168,76,0.55);
          background: linear-gradient(160deg, #141008 0%, #0d0d0d 40%, #111008 100%);
          box-shadow: inset 0 1px 0 rgba(201,168,76,0.15), inset 0 -1px 0 rgba(201,168,76,0.08);
        }
        .card-wrapper:hover .geo-pattern { opacity: 0.1; }

        /* Corners */
        .corner-ornament { position: absolute; pointer-events: none; }
        .corner-tl { top: 6px;    left: 6px;  }
        .corner-tr { top: 6px;    right: 6px; }
        .corner-bl { bottom: 6px; left: 6px;  }
        .corner-br { bottom: 6px; right: 6px; }

        /* Top gold line */
        .card-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent);
          transition: background 0.5s ease;
        }
        .card-wrapper:hover .card-top-line {
          background: linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent);
        }

        /* Card body */
        .card-body-section { padding: 2rem 2rem 1.5rem; }
        .card-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .arabic-title {
          font-family: 'Amiri', serif;
          font-size: 1.875rem;
          font-weight: 400;
          color: #C9A84C;
          direction: rtl;
          line-height: 1.2;
          margin-bottom: 0.25rem;
          transition: text-shadow 0.4s ease;
        }
        .card-wrapper:hover .arabic-title {
          text-shadow: 0 0 20px rgba(201,168,76,0.4);
        }
        .eng-title {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: rgba(201,168,76,0.9);
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }
        .eng-subtitle {
          font-family: 'Raleway', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.45);
          margin-top: 0.25rem;
        }

        /* Glyph */
        .card-glyph {
          font-size: 1.5rem;
          color: rgba(201,168,76,0.35);
          transition: color 0.5s ease, text-shadow 0.5s ease, transform 0.5s ease;
        }
        .card-wrapper:hover .card-glyph {
          color: rgba(201,168,76,0.9);
          text-shadow: 0 0 16px rgba(201,168,76,0.5);
        }
        .glyph-rotated { transform: rotate(45deg); }

        /* Divider */
        .divider-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .divider-line { flex: 1; height: 1px; }
        .divider-line-left  { background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3)); }
        .divider-line-right { background: linear-gradient(90deg, rgba(201,168,76,0.3), transparent); }
        .divider-diamond {
          width: 5px; height: 5px;
          transform: rotate(45deg);
          background: rgba(201,168,76,0.5);
          flex-shrink: 0;
        }

        /* Verse */
        .verse-block { text-align: center; margin-bottom: 1rem; }
        .verse-arabic {
          font-family: 'Amiri', serif;
          font-size: 1.125rem;
          color: rgba(201,168,76,0.75);
          direction: rtl;
          line-height: 1.8;
          margin-bottom: 0.25rem;
        }
        .verse-ref {
          font-family: 'Raleway', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.35);
        }

        /* Body text */
        .card-body-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.925rem;
          line-height: 1.7;
          color: rgba(220,210,190,0.7);
        }

        /* Detail panel */
        .detail-panel {
          overflow: hidden;
          transition: max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .detail-divider-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 2rem;
          padding: 0.25rem 0;
        }
        .detail-diamonds { display: flex; gap: 0.25rem; align-items: center; }
        .detail-diamond {
          width: 5px; height: 5px;
          transform: rotate(45deg);
        }
        .dd-1 { background: rgba(201,168,76,0.2); }
        .dd-2 { background: rgba(201,168,76,0.35); }
        .dd-3 { background: rgba(201,168,76,0.5); }
        .detail-content { padding: 1rem 2rem 2rem; }
        .detail-label {
          font-family: 'Raleway', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.4);
          margin-bottom: 0.75rem;
        }
        .detail-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          line-height: 1.75;
          font-style: italic;
          color: rgba(220,210,190,0.55);
          border-left: 1px solid rgba(201,168,76,0.2);
          padding-left: 1rem;
        }

        /* Expand indicator */
        .expand-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 0.75rem;
          gap: 0.5rem;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }
        .card-wrapper:hover .expand-indicator { opacity: 1; }
        .expand-line { height: 1px; width: 2rem; background: rgba(201,168,76,0.3); }
        .expand-arrow {
          font-size: 0.75rem;
          color: rgba(201,168,76,0.5);
          transition: transform 0.5s ease;
        }
        .arrow-flipped { transform: rotate(180deg); }

        /* Footer */
        .site-footer {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(201,168,76,0.1);
        }
        .footer-arabic {
          font-family: 'Amiri', serif;
          font-size: 1.5rem;
          color: rgba(201,168,76,0.4);
          margin-bottom: 0.5rem;
        }
        .footer-translation {
          font-family: 'Raleway', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.2);
        }
      `}</style>

      <GeometricPattern />

      <div className="page-content">
        <header className="site-header">
          <HeaderStar />
          <div className="header-basmala">بسم الله الرحمن الرحيم</div>
          <div className="header-translation">
            In the name of Allah, the Most Gracious, the Most Merciful
          </div>
          <div className="header-rule">
            <div className="rule-line rule-line-left" />
            <div className="header-diamonds">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`hdiamond${i === 2 ? " hdiamond-center" : ""}`} />
              ))}
            </div>
            <div className="rule-line rule-line-right" />
          </div>
        </header>

        <div className="pillars-label">✦ &nbsp; Pillars of Sacred Knowledge &nbsp; ✦</div>

        <div className="cards-grid">
          {cards.map((card, i) => (
            <IslamicCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <footer className="site-footer">
          <div className="footer-arabic">الحمد لله رب العالمين</div>
          <div className="footer-translation">All praise is due to Allah, Lord of the Worlds</div>
        </footer>
      </div>
    </div>
  );
}