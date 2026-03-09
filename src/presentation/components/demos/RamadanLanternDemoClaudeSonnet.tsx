'use client';

import { useEffect, useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Lateef:wght@200;300;400;500;600;700;800&family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --night: #05040f;
    --deep: #080618;
    --gold: #f0c060;
    --gold-bright: #ffe090;
    --gold-soft: #d4a030;
    --amber: #e08020;
    --copper: #b06010;
    --glow: rgba(240, 192, 96, 0.35);
    --glow-strong: rgba(240, 192, 96, 0.6);
    --teal: #0a2030;
    --indigo: #0d1040;
  }

  body {
    background: var(--night);
    font-family: 'Cormorant Garamond', serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── Night Sky ── */
  .ramadan-app {
    min-height: 100vh;
    background:
      radial-gradient(ellipse 120% 60% at 50% 0%, #1a0a30 0%, transparent 60%),
      radial-gradient(ellipse 80% 40% at 20% 30%, #0a1840 0%, transparent 50%),
      radial-gradient(ellipse 60% 50% at 80% 60%, #100820 0%, transparent 50%),
      linear-gradient(180deg, #030210 0%, #080618 40%, #0a0418 100%);
    position: relative;
    overflow: hidden;
    padding: 0 0 80px;
  }

  /* ── Stars ── */
  .stars-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }
  .star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle var(--dur, 3s) ease-in-out infinite var(--delay, 0s);
  }
  @keyframes twinkle {
    0%, 100% { opacity: var(--min-op, 0.2); transform: scale(1); }
    50% { opacity: var(--max-op, 0.9); transform: scale(1.3); }
  }

  /* ── Floating Particles ── */
  .particles-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }
  .particle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, var(--gold-bright), transparent 70%);
    animation: floatUp var(--dur, 8s) ease-in infinite var(--delay, 0s);
    opacity: 0;
  }
  @keyframes floatUp {
    0% { opacity: 0; transform: translateY(0) scale(0.5); }
    15% { opacity: 0.7; }
    85% { opacity: 0.3; }
    100% { opacity: 0; transform: translateY(-80vh) scale(1.2) translateX(var(--drift, 20px)); }
  }

  /* ── Moon ── */
  .moon-container {
    position: absolute;
    top: 40px;
    right: 120px;
    z-index: 2;
    animation: moonFloat 6s ease-in-out infinite;
  }
  @keyframes moonFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  .moon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffe8a0, #f0c060 40%, #c08020 80%);
    box-shadow:
      0 0 30px 10px rgba(240,192,96,0.4),
      0 0 80px 30px rgba(240,192,96,0.15),
      inset -10px -8px 20px rgba(150,80,0,0.3);
    position: relative;
  }
  .moon::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 4px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: #07051a;
    box-shadow: 0 0 15px rgba(7,5,26,0.8);
  }
  .moon-star {
    position: absolute;
    top: 14px;
    right: 8px;
    font-size: 18px;
    z-index: 1;
    filter: drop-shadow(0 0 6px var(--gold-bright));
    animation: starSpin 20s linear infinite;
  }
  @keyframes starSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* ── Header ── */
  .ramadan-header {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 60px 20px 50px;
  }
  .header-label {
    font-family: 'Lateef', serif;
    font-size: 14px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: var(--gold-soft);
    opacity: 0.7;
    margin-bottom: 8px;
  }
  .header-title {
    font-family: 'Lateef', serif;
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 300;
    color: var(--gold-bright);
    text-shadow:
      0 0 20px var(--gold),
      0 0 60px rgba(240,192,96,0.4),
      0 0 120px rgba(240,192,96,0.2);
    line-height: 1;
    letter-spacing: 4px;
  }
  .header-arabic {
    font-family: 'Lateef', serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    color: rgba(240,192,96,0.6);
    margin-top: 6px;
    letter-spacing: 2px;
    font-weight: 300;
  }
  .header-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 20px auto;
    max-width: 400px;
  }
  .divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-soft), transparent);
  }
  .divider-gem {
    width: 8px;
    height: 8px;
    background: var(--gold);
    transform: rotate(45deg);
    box-shadow: 0 0 10px var(--gold);
  }

  /* ── Lantern String Rope ── */
  .lantern-rope {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    z-index: 3;
    pointer-events: none;
  }

  /* ── Grid ── */
  .cards-grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ── Lantern Card ── */
  .lantern-card {
    position: relative;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    animation: cardFloat var(--float-dur, 5s) ease-in-out infinite var(--float-delay, 0s);
  }
  @keyframes cardFloat {
    0%, 100% { transform: translateY(0px) rotate(var(--tilt, 0deg)); }
    50% { transform: translateY(-10px) rotate(calc(var(--tilt, 0deg) * -0.5)); }
  }
  .lantern-card:hover {
    transform: translateY(-16px) scale(1.03) !important;
    animation-play-state: paused;
    z-index: 20;
  }
  .lantern-card.expanded {
    transform: translateY(-20px) scale(1.04) !important;
    animation-play-state: paused;
    z-index: 20;
  }

  /* Hanging cord */
  .card-cord {
    display: block;
    width: 2px;
    height: 32px;
    background: linear-gradient(180deg, rgba(180,120,20,0.6), rgba(180,120,20,0.2));
    margin: 0 auto;
    position: relative;
  }
  .card-cord::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 6px;
    background: linear-gradient(180deg, var(--gold), var(--copper));
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 6px var(--gold);
  }

  /* Card Body */
  .card-body {
    border-radius: 24px 24px 40px 40px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(160deg, #1a0c28 0%, #120820 40%, #0e0818 100%);
    border: 1px solid rgba(240,192,96,0.15);
    box-shadow:
      0 0 0 1px rgba(240,192,96,0.08),
      0 8px 32px rgba(0,0,0,0.6),
      0 0 60px rgba(240,192,96,0.05),
      inset 0 1px 0 rgba(240,192,96,0.12);
    transition: box-shadow 0.4s ease, border-color 0.4s ease;
  }
  .lantern-card:hover .card-body,
  .lantern-card.expanded .card-body {
    border-color: rgba(240,192,96,0.4);
    box-shadow:
      0 0 0 1px rgba(240,192,96,0.2),
      0 16px 48px rgba(0,0,0,0.7),
      0 0 80px rgba(240,192,96,0.2),
      0 0 120px rgba(240,192,96,0.08),
      inset 0 1px 0 rgba(240,192,96,0.25);
  }

  /* Card Top Cap */
  .card-cap-top {
    height: 16px;
    background: linear-gradient(180deg, #2a1a08, #1a0c04);
    border-bottom: 1px solid rgba(240,192,96,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    position: relative;
    z-index: 2;
  }
  .cap-gem {
    width: 5px;
    height: 5px;
    background: var(--gold);
    border-radius: 50%;
    box-shadow: 0 0 6px var(--gold);
  }
  .cap-line {
    flex: 1;
    height: 1px;
    background: rgba(240,192,96,0.25);
    max-width: 40px;
  }

  /* Islamic Pattern Overlay */
  .pattern-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.04;
    background-image:
      repeating-linear-gradient(
        45deg,
        rgba(240,192,96,1) 0px, rgba(240,192,96,1) 1px,
        transparent 1px, transparent 14px
      ),
      repeating-linear-gradient(
        -45deg,
        rgba(240,192,96,1) 0px, rgba(240,192,96,1) 1px,
        transparent 1px, transparent 14px
      );
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.4s ease;
  }
  .lantern-card:hover .pattern-overlay,
  .lantern-card.expanded .pattern-overlay {
    opacity: 0.08;
  }

  /* Inner glow */
  .inner-glow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 50%;
    background: radial-gradient(ellipse, rgba(240,192,96,0.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.4s ease;
  }
  .lantern-card:hover .inner-glow,
  .lantern-card.expanded .inner-glow {
    opacity: 2;
    background: radial-gradient(ellipse, rgba(240,192,96,0.18) 0%, transparent 70%);
  }

  /* Card Content */
  .card-content {
    position: relative;
    z-index: 2;
    padding: 24px 20px 20px;
  }

  .card-icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(240,192,96,0.15), rgba(180,100,20,0.1));
    border: 1px solid rgba(240,192,96,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 16px;
    box-shadow:
      0 0 20px rgba(240,192,96,0.1),
      inset 0 1px 0 rgba(240,192,96,0.15);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .lantern-card:hover .card-icon-wrap {
    box-shadow:
      0 0 30px rgba(240,192,96,0.25),
      inset 0 1px 0 rgba(240,192,96,0.3);
    transform: scale(1.08);
  }

  .card-tag {
    display: inline-block;
    font-family: 'Cinzel', serif;
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold-soft);
    opacity: 0.6;
    margin-bottom: 8px;
  }

  .card-title {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--gold-bright);
    margin-bottom: 8px;
    text-shadow: 0 0 20px rgba(240,192,96,0.4);
    line-height: 1.3;
  }

  .card-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.85rem;
    color: rgba(240,192,96,0.45);
    font-style: italic;
    margin-bottom: 16px;
    font-weight: 300;
  }

  .card-desc {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.95rem;
    color: rgba(220,200,180,0.65);
    line-height: 1.7;
    font-weight: 300;
  }

  /* Stats Row */
  .card-stats {
    display: flex;
    gap: 0;
    margin-top: 20px;
    border-top: 1px solid rgba(240,192,96,0.1);
    padding-top: 16px;
  }
  .stat-item {
    flex: 1;
    text-align: center;
    padding: 0 8px;
    position: relative;
  }
  .stat-item + .stat-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(240,192,96,0.12);
  }
  .stat-value {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    color: var(--gold);
    font-weight: 500;
    text-shadow: 0 0 15px rgba(240,192,96,0.5);
    display: block;
  }
  .stat-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.72rem;
    color: rgba(240,192,96,0.4);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: block;
    margin-top: 2px;
  }

  /* Expanded Panel */
  .card-expanded-panel {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
  }
  .card-expanded-panel.open {
    max-height: 300px;
  }
  .expanded-inner {
    padding: 0 20px 20px;
    border-top: 1px solid rgba(240,192,96,0.1);
    margin: 0 20px;
  }
  .expanded-title {
    font-family: 'Cinzel', serif;
    font-size: 0.72rem;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--gold-soft);
    opacity: 0.5;
    padding-top: 16px;
    margin-bottom: 10px;
  }
  .expanded-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .expanded-list li {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.92rem;
    color: rgba(220,195,165,0.7);
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.5;
  }
  .expanded-list li::before {
    content: '◆';
    color: var(--gold-soft);
    opacity: 0.5;
    font-size: 0.5rem;
    margin-top: 5px;
    flex-shrink: 0;
  }

  /* Bottom cap */
  .card-cap-bottom {
    height: 20px;
    background: linear-gradient(180deg, #1a0c04, #2a1a08);
    border-top: 1px solid rgba(240,192,96,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .card-cap-bottom::after {
    content: '';
    display: block;
    width: 30px;
    height: 4px;
    background: linear-gradient(90deg, transparent, rgba(240,192,96,0.3), transparent);
    border-radius: 2px;
  }

  /* Card Tassel */
  .card-tassel {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2px;
  }
  .tassel-chain {
    width: 2px;
    height: 18px;
    background: linear-gradient(180deg, rgba(180,120,20,0.5), rgba(180,120,20,0.1));
  }
  .tassel-ball {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, var(--gold-bright), var(--copper));
    box-shadow: 0 0 8px rgba(240,192,96,0.5);
  }

  /* Card number badge */
  .card-badge {
    position: absolute;
    top: -8px;
    right: 16px;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, var(--gold), var(--amber));
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 0.6rem;
    font-weight: 600;
    color: #1a0800;
    box-shadow: 0 0 12px rgba(240,192,96,0.5);
    z-index: 5;
  }

  /* Halo glow when expanded */
  .card-halo {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(240,192,96,0.08) 0%, transparent 70%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }
  .lantern-card.expanded .card-halo {
    opacity: 1;
  }

  /* Progress bar */
  .progress-bar-wrap {
    margin-top: 14px;
    height: 3px;
    background: rgba(240,192,96,0.1);
    border-radius: 2px;
    overflow: hidden;
  }
  .progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--copper), var(--gold-bright));
    border-radius: 2px;
    box-shadow: 0 0 8px var(--gold);
    transition: width 1s ease 0.3s;
    position: relative;
  }
  .progress-bar-fill::after {
    content: '';
    position: absolute;
    right: 0;
    top: -2px;
    bottom: -2px;
    width: 6px;
    background: var(--gold-bright);
    border-radius: 3px;
    box-shadow: 0 0 10px var(--gold-bright);
  }

  /* ── Bottom Ornament ── */
  .bottom-ornament {
    position: relative;
    z-index: 10;
    text-align: center;
    margin-top: 64px;
    padding-bottom: 20px;
  }
  .ornament-text {
    font-family: 'Lateef', serif;
    font-size: 2rem;
    color: rgba(240,192,96,0.3);
    letter-spacing: 12px;
    filter: drop-shadow(0 0 10px rgba(240,192,96,0.2));
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .cards-grid { grid-template-columns: 1fr; padding: 0 20px; gap: 24px; }
    .moon-container { top: 20px; right: 20px; }
    .moon { width: 56px; height: 56px; }
    .moon::after { width: 44px; height: 44px; top: 6px; right: 3px; }
  }
`;

// Data
const cards = [
  {
    id: 1,
    icon: "🌙",
    tag: "First Pillar",
    title: "Niyyah — Intention",
    subtitle: "نية · Al-Qalb",
    desc: "The heart's silent covenant with the Divine, renewed each dawn before the fast begins.",
    stats: [
      { value: "30", label: "Nights" },
      { value: "Fajr", label: "Begins" },
      { value: "Maghrib", label: "Breaks" },
    ],
    details: [
      "Set intention before Fajr each day",
      "Heart must be sincere and pure",
      "Renew faith at every suhoor",
      "Silent vow heard by the Divine",
    ],
    progress: 82,
    color: "#8060c0",
  },
  {
    id: 2,
    icon: "⭐",
    tag: "Second Pillar",
    title: "Sawm — Fasting",
    subtitle: "صوم · Al-Imsak",
    desc: "From the first light of dawn to the painted dusk, a sacred abstinence that purifies the soul.",
    stats: [
      { value: "~17h", label: "Duration" },
      { value: "Suhoor", label: "Pre-fast" },
      { value: "Iftar", label: "Meal" },
    ],
    details: [
      "Abstain from food, drink & desires",
      "Guard the tongue from falsehood",
      "Break fast with dates and water",
      "Intensify worship in final days",
    ],
    progress: 67,
    color: "#d08030",
  },
  {
    id: 3,
    icon: "📿",
    tag: "Third Pillar",
    title: "Dhikr — Remembrance",
    subtitle: "ذكر · Al-Lisaan",
    desc: "Lips that never tire of His name, a river of praise flowing through waking hours.",
    stats: [
      { value: "99", label: "Names" },
      { value: "∞", label: "Rewards" },
      { value: "Tasbih", label: "Beads" },
    ],
    details: [
      "SubhanAllah — Glory be to God",
      "Alhamdulillah — All praise to God",
      "Allahu Akbar — God is Greatest",
      "La ilaha illallah — One truth",
    ],
    progress: 90,
    color: "#3090a0",
  },
  {
    id: 4,
    icon: "🕌",
    tag: "Fourth Pillar",
    title: "Qiyam — Night Prayer",
    subtitle: "قيام · Al-Layl",
    desc: "Rising when the world sleeps, standing before the Throne in Tarawih's gentle embrace.",
    stats: [
      { value: "20", label: "Rak'ahs" },
      { value: "Isha", label: "After" },
      { value: "Witr", label: "Final" },
    ],
    details: [
      "Perform Tarawih in congregation",
      "Recite longer Quranic passages",
      "Seek Laylat al-Qadr in odd nights",
      "Last ten nights hold the Night of Power",
    ],
    progress: 55,
    color: "#507840",
  },
  {
    id: 5,
    icon: "📖",
    tag: "Fifth Pillar",
    title: "Tilawah — Recitation",
    subtitle: "تلاوة · Al-Quran",
    desc: "The tongue dances with sacred letters, completing the divine scripture in a single moon's arc.",
    stats: [
      { value: "30", label: "Juz" },
      { value: "114", label: "Surahs" },
      { value: "6236", label: "Verses" },
    ],
    details: [
      "Complete one full Quran by Eid",
      "Read one Juz each day to complete",
      "Perfect Tajweed — proper recitation",
      "Reflect on each verse's meaning",
    ],
    progress: 73,
    color: "#9050b0",
  },
  {
    id: 6,
    icon: "🤲",
    tag: "Sixth Pillar",
    title: "Zakat — Giving",
    subtitle: "زكاة · Al-Sadaqah",
    desc: "Wealth purified through sharing; the hand that gives receives tenfold in grace.",
    stats: [
      { value: "2.5%", label: "Zakat" },
      { value: "Eid", label: "Fitrah" },
      { value: "30×", label: "Reward" },
    ],
    details: [
      "Give 2.5% of eligible wealth annually",
      "Pay Zakat al-Fitr before Eid prayer",
      "Feed the poor and the hungry",
      "Every act of kindness is sadaqah",
    ],
    progress: 44,
    color: "#b07020",
  },
];

// Star data
const starData = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 60,
  size: Math.random() * 2.5 + 0.5,
  dur: (Math.random() * 4 + 2).toFixed(1),
  delay: (Math.random() * 5).toFixed(1),
  minOp: (Math.random() * 0.2 + 0.1).toFixed(2),
  maxOp: (Math.random() * 0.5 + 0.4).toFixed(2),
}));

// Particle data
const particleData = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 6 + 3,
  dur: (Math.random() * 10 + 6).toFixed(1),
  delay: (Math.random() * 10).toFixed(1),
  drift: `${(Math.random() - 0.5) * 80}px`,
}));

export default function RamadanLanternDemoClaudeSonnet() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleCardClick = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <style>{css}</style>
      <div className="ramadan-app">

        {/* Stars */}
        <div className="stars-layer">
          {starData.map(s => (
            <div key={s.id} className="star" style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
              "--min-op": s.minOp,
              "--max-op": s.maxOp,
            } as React.CSSProperties} />
          ))}
        </div>

        {/* Floating particles */}
        <div className="particles-layer">
          {particleData.map(p => (
            <div key={p.id} className="particle" style={{
              left: `${p.x}%`,
              bottom: `${Math.random() * 20}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--dur": `${p.dur}s`,
              "--delay": `${p.delay}s`,
              "--drift": p.drift,
            } as React.CSSProperties} />
          ))}
        </div>

        {/* Moon */}
        <div className="moon-container">
          <div className="moon">
            <span className="moon-star">✦</span>
          </div>
        </div>

        {/* Header */}
        <header className="ramadan-header">
          <p className="header-label">The Holy Month</p>
          <h1 className="header-title">Ramadan</h1>
          <p className="header-arabic">رمضان كريم</p>
          <div className="header-divider">
            <div className="divider-line" />
            <div className="divider-gem" />
            <div className="divider-line" />
          </div>
        </header>

        {/* Cards Grid */}
        <div className="cards-grid">
          {cards.map((card, i) => {
            const isExpanded = expandedId === card.id;
            const floatDur = (4.5 + i * 0.4).toFixed(1);
            const floatDelay = (i * 0.7).toFixed(1);
            const tilt = i % 2 === 0 ? '0.5deg' : '-0.5deg';

            return (
              <div
                key={card.id}
                className={`lantern-card${isExpanded ? ' expanded' : ''}`}
                style={{
                  "--float-dur": `${floatDur}s`,
                  "--float-delay": `${floatDelay}s`,
                  "--tilt": tilt,
                } as React.CSSProperties}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-halo" />
                <span className="card-cord" />

                <div className="card-body">
                  <div className="card-badge">{String(card.id).padStart(2, '0')}</div>
                  <div className="pattern-overlay" />
                  <div className="inner-glow" />

                  {/* Top cap */}
                  <div className="card-cap-top">
                    <div className="cap-line" />
                    <div className="cap-gem" />
                    <div className="cap-line" />
                  </div>

                  {/* Main content */}
                  <div className="card-content">
                    <div className="card-icon-wrap">{card.icon}</div>
                    <span className="card-tag">{card.tag}</span>
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-subtitle">{card.subtitle}</p>
                    <p className="card-desc">{card.desc}</p>

                    {/* Stats */}
                    <div className="card-stats">
                      {card.stats.map((s, si) => (
                        <div className="stat-item" key={si}>
                          <span className="stat-value">{s.value}</span>
                          <span className="stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress */}
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar-fill"
                        style={{ width: loaded ? `${card.progress}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Expanded panel */}
                  <div className={`card-expanded-panel${isExpanded ? ' open' : ''}`}>
                    <div className="expanded-inner">
                      <p className="expanded-title">Deeper Understanding</p>
                      <ul className="expanded-list">
                        {card.details.map((d, di) => (
                          <li key={di}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom cap */}
                  <div className="card-cap-bottom" />
                </div>

                {/* Tassel */}
                <div className="card-tassel">
                  <div className="tassel-chain" />
                  <div className="tassel-ball" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom ornament */}
        <div className="bottom-ornament">
          <p className="ornament-text">✦ ☽ ✦</p>
        </div>

      </div>
    </>
  );
}