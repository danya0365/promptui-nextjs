"use client";

import React, { useEffect, useRef, useState } from "react";

interface PrayerCard {
  id: number;
  title: string;
  arabic: string;
  time: string;
  status: "upcoming" | "active" | "completed";
  rakaat: number;
  quote: string;
}

const prayerCards: PrayerCard[] = [
  {
    id: 1,
    title: "Fajr",
    arabic: "الفجر",
    time: "05:12",
    status: "completed",
    rakaat: 2,
    quote: "The dawn prayer is better than sleep and its world.",
  },
  {
    id: 2,
    title: "Dhuhr",
    arabic: "الظهر",
    time: "12:30",
    status: "active",
    rakaat: 4,
    quote: "Midday light centers the soul in divine presence.",
  },
  {
    id: 3,
    title: "Asr",
    arabic: "العصر",
    time: "15:45",
    status: "upcoming",
    rakaat: 4,
    quote: "Guard the afternoon prayer — it is the witness of faith.",
  },
  {
    id: 4,
    title: "Maghrib",
    arabic: "المغرب",
    time: "18:22",
    status: "upcoming",
    rakaat: 3,
    quote: "Sunset is the doorway between worlds.",
  },
  {
    id: 5,
    title: "Isha",
    arabic: "العشاء",
    time: "19:48",
    status: "upcoming",
    rakaat: 4,
    quote: "Night prayer wraps the believer in celestial peace.",
  },
];

const particleSeeds = [...Array(60)].map((_, i) => ({
  left: Math.sin(i * 1.618) * 50 + 50,
  top: Math.cos(i * 2.718) * 50 + 50,
  size: 1 + ((i * 1.414) % 3),
  delay: ((i * 3.14159) % 50) / 10,
  duration: 4 + ((i * 1.732) % 6),
  opacity: 0.15 + ((i * 2.236) % 40) / 100,
}));

const celestialPhases = [
  { label: "Pre-Dawn", arabic: "السَّحَر", angle: 0 },
  { label: "Sunrise", arabic: "الشُّرُوق", angle: 72 },
  { label: "Noon", arabic: "الزَّوال", angle: 144 },
  { label: "Afternoon", arabic: "العَصْر", angle: 216 },
  { label: "Sunset", arabic: "الغُرُوب", angle: 288 },
];

export const SpatialPrayerCompanionDemoKimi: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const offset = i * 1.2;
        const floatY = Math.sin((elapsed + offset) * 0.8) * 6;
        const floatX = Math.cos((elapsed + offset) * 0.5) * 3;
        const scale = 1 + Math.sin((elapsed + offset) * 0.3) * 0.02;
        el.style.transform = `translate(${floatX}px, ${floatY}px) scale(${scale})`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const activeIndex = prayerCards.findIndex((c) => c.status === "active");

  const getCardGlow = (
    card: PrayerCard,
    isHovered: boolean,
    isExpanded: boolean,
  ) => {
    if (isExpanded) return "rgba(16,185,129,0.35)";
    if (isHovered) return "rgba(255,255,255,0.15)";
    if (card.status === "active") return "rgba(16,185,129,0.25)";
    if (card.status === "completed") return "rgba(148,163,184,0.08)";
    return "rgba(255,255,255,0.05)";
  };

  const getCardBorder = (
    card: PrayerCard,
    isHovered: boolean,
    isExpanded: boolean,
  ) => {
    if (isExpanded) return "rgba(16,185,129,0.5)";
    if (isHovered) return "rgba(255,255,255,0.25)";
    if (card.status === "active") return "rgba(16,185,129,0.4)";
    if (card.status === "completed") return "rgba(148,163,184,0.15)";
    return "rgba(255,255,255,0.08)";
  };

  return (
    <div className="prayer-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .prayer-container {
          min-height: 100vh; width: 100%; background: #070a0f;
          background-image:
            radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.04) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(12,18,28,1) 0%, #070a0f 100%);
          color: #e8ecf1; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center;
          perspective: 1000px;
        }

        .particle-field { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .particle {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
          animation: particleFloat linear infinite;
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: var(--p-opacity); }
          50% { transform: translateY(-30px) translateX(10px); opacity: calc(var(--p-opacity) * 1.5); }
          100% { transform: translateY(0) translateX(0); opacity: var(--p-opacity); }
        }

        .moon-glow {
          position: absolute; top: 8%; right: 12%; width: 120px; height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(16,185,129,0.03) 40%, transparent 70%);
          filter: blur(20px); animation: moonPulse 6s ease-in-out infinite;
        }
        @keyframes moonPulse {
          0%,100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .prayer-hud {
          position: relative; z-index: 10; width: 100%; max-width: 1200px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 3rem 1rem;
        }
        .hud-brand { display: flex; align-items: center; gap: 1rem; }
        .hud-icon {
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(255,255,255,0.05));
          border: 1px solid rgba(16,185,129,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Amiri', serif; font-size: 1.25rem; color: #34d399;
        }
        .hud-title { font-size: 1.1rem; font-weight: 500; letter-spacing: 0.02em; color: #f1f5f9; }
        .hud-subtitle { font-size: 0.75rem; color: rgba(148,163,184,0.8); letter-spacing: 0.08em; text-transform: uppercase; }
        .hud-meta { text-align: right; }
        .hud-date { font-size: 0.8rem; color: rgba(148,163,184,0.7); }
        .hud-location { font-size: 0.75rem; color: rgba(148,163,184,0.5); margin-top: 0.25rem; }

        .celestial-ring {
          position: relative; z-index: 5; width: 280px; height: 280px; margin: 1.5rem 0;
        }
        .ring-outer {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1px solid rgba(16,185,129,0.12);
          animation: ringSpin 60s linear infinite;
        }
        .ring-inner {
          position: absolute; inset: 24px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.06);
          animation: ringSpin 40s linear infinite reverse;
        }
        .ring-core {
          position: absolute; inset: 48px; border-radius: 50%;
          background: radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(255,255,255,0.03) 50%, transparent 70%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          border: 1px solid rgba(16,185,129,0.2);
        }
        .core-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; color: rgba(52,211,153,0.8); }
        .core-label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(148,163,184,0.6); margin-top: 0.25rem; }
        .core-time { font-size: 2rem; font-weight: 300; color: #f8fafc; letter-spacing: 0.05em; margin-top: 0.5rem; }
        @keyframes ringSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .phase-marker {
          position: absolute; width: 6px; height: 6px; border-radius: 50%;
          background: rgba(16,185,129,0.5); transform: translate(-50%,-50%);
          box-shadow: 0 0 8px rgba(16,185,129,0.3);
        }
        .phase-label {
          position: absolute; font-size: 0.6rem; color: rgba(148,163,184,0.5);
          transform: translate(-50%,-50%); white-space: nowrap;
        }

        .cards-stage {
          position: relative; z-index: 10; width: 100%; max-width: 1200px;
          flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
          padding: 0 2rem 2rem; gap: 1rem;
        }

        .prayer-card {
          position: relative; width: 100%; max-width: 520px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 1.25rem 1.5rem;
          cursor: pointer; transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
          overflow: hidden;
        }
        .prayer-card::before {
          content: ''; position: absolute; inset: 0; border-radius: 24px;
          background: radial-gradient(ellipse at 30% 0%, var(--card-glow) 0%, transparent 60%);
          opacity: 0.6; pointer-events: none;
        }
        .prayer-card::after {
          content: ''; position: absolute; inset: 0; border-radius: 24px;
          border: 1px solid var(--card-border); pointer-events: none;
        }
        .prayer-card.expanded { max-width: 620px; padding: 1.75rem 2rem; }
        .prayer-card.active { border-color: rgba(16,185,129,0.2); }
        .prayer-card.completed { opacity: 0.6; }

        .card-header { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .card-left { display: flex; align-items: center; gap: 1rem; }
        .card-arabic {
          font-family: 'Amiri', serif; font-size: 1.1rem; color: rgba(52,211,153,0.7);
          min-width: 48px;
        }
        .card-title-group { display: flex; flex-direction: column; }
        .card-title { font-size: 1rem; font-weight: 500; color: #f1f5f9; }
        .card-rakaat { font-size: 0.7rem; color: rgba(148,163,184,0.6); margin-top: 0.15rem; }
        .card-time { font-size: 0.9rem; font-weight: 300; color: rgba(255,255,255,0.7); letter-spacing: 0.05em; }
        .card-status {
          width: 8px; height: 8px; border-radius: 50%; margin-left: 0.75rem;
          box-shadow: 0 0 6px currentColor;
        }
        .card-status.active { background: #34d399; color: #34d399; animation: statusPulse 2s ease-in-out infinite; }
        .card-status.upcoming { background: rgba(148,163,184,0.4); color: rgba(148,163,184,0.4); }
        .card-status.completed { background: rgba(100,116,139,0.5); color: rgba(100,116,139,0.5); }
        @keyframes statusPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

        .card-body {
          position: relative; z-index: 1; margin-top: 0.75rem;
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
          opacity: 0;
        }
        .prayer-card.expanded .card-body { max-height: 200px; opacity: 1; margin-top: 1rem; }

        .card-quote { font-size: 0.85rem; font-style: italic; color: rgba(226,232,240,0.7); line-height: 1.6; }
        .card-metrics { display: flex; gap: 1.5rem; margin-top: 1rem; }
        .metric { display: flex; flex-direction: column; }
        .metric-value { font-size: 0.8rem; font-weight: 600; color: #34d399; }
        .metric-label { font-size: 0.65rem; color: rgba(148,163,184,0.6); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.1rem; }

        .timeline-track {
          position: relative; z-index: 10; width: 100%; max-width: 900px;
          margin: 1rem 0 2.5rem; padding: 0 2rem;
        }
        .timeline-label { font-size: 0.7rem; color: rgba(148,163,184,0.5); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
        .timeline-bar {
          position: relative; height: 2px;
          background: linear-gradient(90deg, rgba(16,185,129,0.3), rgba(255,255,255,0.06), rgba(16,185,129,0.1));
          border-radius: 1px;
        }
        .timeline-dot {
          position: absolute; top: 50%; transform: translate(-50%,-50%);
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(16,185,129,0.3); border: 2px solid rgba(16,185,129,0.5);
        }
        .timeline-dot.active { background: #34d399; border-color: #34d399; box-shadow: 0 0 12px rgba(52,211,153,0.4); }
        .timeline-dot.completed { background: rgba(100,116,139,0.5); border-color: rgba(100,116,139,0.5); }
        .timeline-dot-label { position: absolute; top: -22px; left: 50%; transform: translateX(-50%); font-size: 0.6rem; color: rgba(148,163,184,0.5); white-space: nowrap; }

        .prayer-footer {
          position: relative; z-index: 10; width: 100%; text-align: center;
          padding: 1.5rem 2rem 2.5rem;
        }
        .footer-arabic { font-family: 'Amiri', serif; font-size: 1.1rem; color: rgba(52,211,153,0.5); }
        .footer-translation { font-size: 0.65rem; color: rgba(148,163,184,0.4); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 0.5rem; }

        @media (max-width: 768px) {
          .prayer-hud { padding: 1.5rem 1.5rem 0.5rem; }
          .celestial-ring { transform: scale(0.8); margin: 0.5rem 0; }
          .cards-stage { padding: 0 1rem 1rem; }
          .prayer-card { padding: 1rem 1.25rem; }
          .prayer-card.expanded { padding: 1.25rem 1.5rem; }
          .timeline-track { padding: 0 1rem; }
        }
      `}</style>

      <div className="particle-field">
        {particleSeeds.map((p, i) => (
          <div
            key={`p-${i}`}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              ["--p-opacity" as string]: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="moon-glow" />

      <div className="prayer-hud">
        <div className="hud-brand">
          <div className="hud-icon">ص</div>
          <div>
            <div className="hud-title">Salah Companion</div>
            <div className="hud-subtitle">Spatial Prayer OS — 2050</div>
          </div>
        </div>
        <div className="hud-meta">
          <div className="hud-date">12 Rabi&apos; al-Awwal 1472 AH</div>
          <div className="hud-location">Makkah, Saudi Arabia • 21.4°N</div>
        </div>
      </div>

      <div className="celestial-ring">
        <div className="ring-outer" />
        <div className="ring-inner" />
        <div className="ring-core">
          <span className="core-arabic">الصلاة</span>
          <span className="core-label">Next Prayer</span>
          <span className="core-time">
            {prayerCards[activeIndex]?.time || "--:--"}
          </span>
        </div>
        {celestialPhases.map((phase) => {
          const rad = ((phase.angle - 90) * Math.PI) / 180;
          const x = 50 + 44 * Math.cos(rad);
          const y = 50 + 44 * Math.sin(rad);
          return (
            <React.Fragment key={phase.label}>
              <div
                className="phase-marker"
                style={{ left: `${x}%`, top: `${y}%` }}
              />
              <div
                className="phase-label"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {phase.arabic}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="cards-stage">
        {prayerCards.map((card, idx) => {
          const isExpanded = expandedId === card.id;
          const isHovered = hoveredId === card.id;
          return (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className={`prayer-card ${card.status} ${isExpanded ? "expanded" : ""}`}
              style={{
                ["--card-glow" as string]: getCardGlow(
                  card,
                  isHovered,
                  isExpanded,
                ),
                ["--card-border" as string]: getCardBorder(
                  card,
                  isHovered,
                  isExpanded,
                ),
              }}
              onClick={() => setExpandedId(isExpanded ? null : card.id)}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-header">
                <div className="card-left">
                  <span className="card-arabic">{card.arabic}</span>
                  <div className="card-title-group">
                    <span className="card-title">{card.title}</span>
                    <span className="card-rakaat">
                      {card.rakaat} Raka&apos;at
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="card-time">{card.time}</span>
                  <div className={`card-status ${card.status}`} />
                </div>
              </div>
              <div className="card-body">
                <div className="card-quote">&ldquo;{card.quote}&rdquo;</div>
                <div className="card-metrics">
                  <div className="metric">
                    <span className="metric-value">{card.rakaat}</span>
                    <span className="metric-label">Raka&apos;at</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">
                      {card.status === "active" ? "Now" : card.time}
                    </span>
                    <span className="metric-label">Time</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">
                      {card.status === "completed"
                        ? "Done"
                        : card.status === "active"
                          ? "In Progress"
                          : "Pending"}
                    </span>
                    <span className="metric-label">Status</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="timeline-track">
        <div className="timeline-label">Daily Worship Timeline</div>
        <div className="timeline-bar" ref={timelineRef}>
          {prayerCards.map((card, i) => (
            <div
              key={card.id}
              className={`timeline-dot ${card.status}`}
              style={{ left: `${(i / (prayerCards.length - 1)) * 100}%` }}
            >
              <div className="timeline-dot-label">{card.arabic}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="prayer-footer">
        <div className="footer-arabic">
          إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا
        </div>
        <div className="footer-translation">
          Indeed, prayer has been decreed upon the believers a decree of
          specified times
        </div>
      </div>
    </div>
  );
};
