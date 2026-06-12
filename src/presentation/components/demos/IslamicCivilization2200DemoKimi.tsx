"use client";

import React, { useEffect, useRef, useState } from "react";

interface CityNode {
  id: number;
  name: string;
  arabic: string;
  region: string;
  population: string;
  spirituality: number;
  innovation: number;
  unity: number;
  description: string;
  x: number;
  y: number;
}

const cityNodes: CityNode[] = [
  {
    id: 1, name: "Makkah", arabic: "مكة", region: "Hijaz",
    population: "14.2M", spirituality: 100, innovation: 92, unity: 99,
    description: "The eternal heart of the Ummah. The Grand Mosque hosts 8 million worshippers simultaneously through spatial expansion technology.",
    x: 48, y: 28,
  },
  {
    id: 2, name: "Madinah", arabic: "المدينة", region: "Hijaz",
    population: "9.8M", spirituality: 99, innovation: 88, unity: 98,
    description: "The City of Light advances prophetic medicine and interstellar ethics, guided by the luminous presence of the Prophet&apos;s Mosque.",
    x: 52, y: 22,
  },
  {
    id: 3, name: "Istanbul", arabic: "إسطنبول", region: "Anatolia",
    population: "28.5M", spirituality: 91, innovation: 97, unity: 94,
    description: "Where continents meet and civilizations converge. The Bosphorus Space Elevator connects Earth to orbital stations.",
    x: 68, y: 18,
  },
  {
    id: 4, name: "Cairo", arabic: "القاهرة", region: "Nile",
    population: "35.1M", spirituality: 93, innovation: 95, unity: 92,
    description: "The reborn knowledge capital. AI-augmented Al-Azhar guides 50 million students through holographic learning networks.",
    x: 62, y: 32,
  },
  {
    id: 5, name: "Kuala Lumpur", arabic: "كوالالمبور", region: "Southeast Asia",
    population: "18.7M", spirituality: 89, innovation: 98, unity: 96,
    description: "The green megacity of the east. Vertical forests and atmospheric processors make it the most breathable city on Earth.",
    x: 82, y: 55,
  },
  {
    id: 6, name: "Casablanca", arabic: "الدار البيضاء", region: "Maghreb",
    population: "12.4M", spirituality: 87, innovation: 94, unity: 93,
    description: "The western gate of the Islamic world. Atlantic tidal power stations generate clean energy for three continents.",
    x: 28, y: 25,
  },
  {
    id: 7, name: "Isfahan", arabic: "أصفهان", region: "Persia",
    population: "7.9M", spirituality: 95, innovation: 96, unity: 91,
    description: "Where geometric perfection meets quantum computing. The city itself is a living algorithm of Islamic art and science.",
    x: 72, y: 26,
  },
  {
    id: 8, name: "Jakarta", arabic: "جاكرتا", region: "Maritime",
    population: "42.3M", spirituality: 90, innovation: 93, unity: 97,
    description: "The oceanic capital. Floating districts adapt to sea levels while preserving the world&apos;s largest mosque complex.",
    x: 85, y: 62,
  },
];

const streamParticles = [...Array(40)].map((_, i) => ({
  left: (Math.sin(i * 1.414) * 50 + 50),
  top: (Math.cos(i * 2.236) * 50 + 50),
  size: 1 + ((i * 1.618) % 2.5),
  delay: ((i * 2.718) % 60) / 10,
  duration: 5 + ((i * 1.732) % 8),
  opacity: 0.1 + ((i * 3.141) % 30) / 100,
}));

const earthRings = [
  { size: 200, opacity: 0.08, duration: 40 },
  { size: 240, opacity: 0.05, duration: 50 },
  { size: 280, opacity: 0.03, duration: 60 },
];

export const IslamicCivilization2200DemoKimi: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      cityNodes.forEach((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        const driftY = Math.sin((elapsed + i * 0.6) * 0.5) * 6;
        const driftX = Math.cos((elapsed + i * 0.4) * 0.4) * 4;
        el.style.transform = `translate(${driftX}px, ${driftY}px)`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const getRegionColor = (region: string) => {
    const map: Record<string, string> = {
      "Hijaz": "rgba(212,175,55,0.4)",
      "Anatolia": "rgba(6,182,212,0.35)",
      "Nile": "rgba(16,185,129,0.35)",
      "Southeast Asia": "rgba(139,92,246,0.35)",
      "Maghreb": "rgba(249,115,22,0.35)",
      "Persia": "rgba(236,72,153,0.35)",
      "Maritime": "rgba(14,165,233,0.35)",
    };
    return map[region] || "rgba(255,255,255,0.2)";
  };

  return (
    <div className="civ-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .civ-container {
          min-height: 100vh; width: 100%; background: #02040a;
          background-image:
            radial-gradient(ellipse at 50% 40%, rgba(6,182,212,0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.02) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(6,10,20,1) 0%, #02040a 100%);
          color: #e8ecf1; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center;
        }

        .stream-layer { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .stream-particle {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%);
          animation: streamFloat linear infinite;
        }
        .stream-particle.cyan { background: radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%); }
        @keyframes streamFloat {
          0% { transform: translateY(0) translateX(0); opacity: var(--s-opacity); }
          50% { transform: translateY(-30px) translateX(12px); opacity: calc(var(--s-opacity) * 2); }
          100% { transform: translateY(0) translateX(0); opacity: var(--s-opacity); }
        }

        .earth-core {
          position: absolute; top: 55%; left: 50%; transform: translate(-50%,-50%);
          width: 180px; height: 180px; border-radius: 50%; z-index: 1; pointer-events: none;
        }
        .earth-glow {
          position: absolute; inset: 0; border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(212,175,55,0.03) 40%, transparent 70%);
          filter: blur(8px);
        }
        .earth-body {
          position: absolute; inset: 20px; border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.12);
          background: radial-gradient(circle at 30% 30%, rgba(6,182,212,0.08) 0%, transparent 60%);
        }
        .earth-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          border-radius: 50%; border: 1px solid rgba(212,175,55,0.06);
          animation: earthSpin linear infinite;
        }
        @keyframes earthSpin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }

        .civ-hud {
          position: relative; z-index: 20; width: 100%; max-width: 1200px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 3rem 0.5rem;
        }
        .civ-brand { display: flex; align-items: center; gap: 1rem; }
        .civ-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(6,182,212,0.2), rgba(212,175,55,0.1));
          border: 1px solid rgba(6,182,212,0.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Amiri', serif; font-size: 1rem; color: #22d3ee;
        }
        .civ-title { font-size: 1.05rem; font-weight: 500; color: #f1f5f9; letter-spacing: 0.02em; }
        .civ-subtitle { font-size: 0.68rem; color: rgba(148,163,184,0.6); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.15rem; }
        .civ-meta { display: flex; gap: 2rem; }
        .civ-stat { text-align: center; }
        .civ-stat-value { font-size: 0.9rem; font-weight: 600; color: #d4af37; }
        .civ-stat-label { font-size: 0.6rem; color: rgba(148,163,184,0.5); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.1rem; }

        .cards-grid {
          position: relative; z-index: 10; width: 100%; max-width: 1100px;
          height: 560px; margin: 1.5rem 0 1rem;
        }

        .civ-card {
          position: absolute; transform: translate(-50%,-50%);
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 1rem 1.25rem; cursor: pointer; z-index: 15;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
          min-width: 170px; max-width: 220px; overflow: hidden;
        }
        .civ-card::before {
          content: ''; position: absolute; inset: 0; border-radius: 20px;
          background: radial-gradient(ellipse at 50% 0%, var(--card-glow) 0%, transparent 55%);
          opacity: 0.5; pointer-events: none;
        }
        .civ-card::after {
          content: ''; position: absolute; top: 0; left: 12%; right: 12%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--card-top), transparent);
          pointer-events: none;
        }
        .civ-card:hover { border-color: rgba(212,175,55,0.25); box-shadow: 0 8px 40px rgba(212,175,55,0.08); }
        .civ-card.expanded { min-width: 300px; max-width: 380px; z-index: 30; box-shadow: 0 12px 60px rgba(212,175,55,0.1); }

        .card-region { font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(148,163,184,0.5); position: relative; z-index: 1; }
        .card-name-row { display: flex; align-items: baseline; gap: 0.5rem; margin-top: 0.2rem; position: relative; z-index: 1; }
        .card-name { font-size: 0.95rem; font-weight: 500; color: #f1f5f9; }
        .card-arabic { font-family: 'Amiri', serif; font-size: 0.85rem; color: rgba(212,175,55,0.6); }
        .card-pop { font-size: 0.68rem; color: rgba(148,163,184,0.5); margin-top: 0.3rem; position: relative; z-index: 1; }
        .card-bars { display: flex; gap: 0.4rem; margin-top: 0.5rem; position: relative; z-index: 1; }
        .card-bar { display: flex; flex-direction: column; align-items: center; gap: 0.15rem; }
        .bar-track { width: 3px; height: 28px; border-radius: 2px; background: rgba(255,255,255,0.05); position: relative; overflow: hidden; }
        .bar-fill { position: absolute; bottom: 0; left: 0; right: 0; border-radius: 2px; transition: height 0.8s ease; }
        .bar-label { font-size: 0.5rem; color: rgba(148,163,184,0.4); text-transform: uppercase; }

        .card-body {
          position: relative; z-index: 1; margin-top: 0.5rem;
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, margin-top 0.4s ease;
          opacity: 0;
        }
        .civ-card.expanded .card-body { max-height: 220px; opacity: 1; margin-top: 0.75rem; }
        .card-desc { font-size: 0.78rem; color: rgba(226,232,240,0.65); line-height: 1.5; }
        .card-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent); margin: 0.6rem 0; }
        .card-metrics { display: flex; gap: 1rem; }
        .card-metric { display: flex; flex-direction: column; }
        .card-metric-value { font-size: 0.75rem; font-weight: 600; color: #d4af37; }
        .card-metric-label { font-size: 0.58rem; color: rgba(148,163,184,0.5); text-transform: uppercase; letter-spacing: 0.06em; }

        .civ-footer {
          position: relative; z-index: 20; width: 100%; text-align: center;
          padding: 1rem 2rem 2.5rem;
        }
        .footer-arabic { font-family: 'Amiri', serif; font-size: 1rem; color: rgba(6,182,212,0.35); }
        .footer-trans { font-size: 0.6rem; color: rgba(148,163,184,0.3); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }

        @media (max-width: 900px) {
          .cards-grid { height: 650px; transform: scale(0.85); }
          .civ-hud { padding: 1.5rem 1.5rem 0.5rem; }
          .civ-meta { gap: 1.2rem; }
          .earth-core { transform: translate(-50%,-50%) scale(0.8); }
        }
        @media (max-width: 600px) {
          .cards-grid { height: 750px; transform: scale(0.7); }
          .civ-card { padding: 0.875rem 1rem; min-width: 150px; max-width: 190px; }
          .civ-card.expanded { min-width: 260px; max-width: 300px; }
        }
      `}</style>

      <div className="stream-layer">
        {streamParticles.map((p, i) => (
          <div
            key={`sp-${i}`}
            className={`stream-particle ${i % 4 === 0 ? "cyan" : ""}`}
            style={{
              left: `${p.left}%`, top: `${p.top}%`,
              width: p.size, height: p.size,
              animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
              ["--s-opacity" as string]: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="earth-core">
        <div className="earth-glow" />
        <div className="earth-body" />
        {earthRings.map((ring, i) => (
          <div
            key={`er-${i}`}
            className="earth-ring"
            style={{
              width: ring.size, height: ring.size,
              borderColor: `rgba(212,175,55,${ring.opacity})`,
              animationDuration: `${ring.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="civ-hud">
        <div className="civ-brand">
          <div className="civ-icon">عالم</div>
          <div>
            <div className="civ-title">Islamic Civilization 2200</div>
            <div className="civ-subtitle">Planetary Intelligence Network</div>
          </div>
        </div>
        <div className="civ-meta">
          <div className="civ-stat">
            <div className="civ-stat-value">8</div>
            <div className="civ-stat-label">Megacities</div>
          </div>
          <div className="civ-stat">
            <div className="civ-stat-value">2.1B</div>
            <div className="civ-stat-label">Citizens</div>
          </div>
          <div className="civ-stat">
            <div className="civ-stat-value">99.7%</div>
            <div className="civ-stat-label">Unity</div>
          </div>
        </div>
      </div>

      <div className="cards-grid">
        {cityNodes.map((city, idx) => {
          const isExpanded = expandedId === city.id;
          const isHovered = hoveredId === city.id;
          const dimmed = expandedId !== null && expandedId !== city.id;
          const regionColor = getRegionColor(city.region);
          return (
            <div
              key={city.id}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={`civ-card ${isExpanded ? "expanded" : ""}`}
              style={{
                left: `${city.x}%`, top: `${city.y}%`,
                ["--card-glow" as string]: isExpanded || isHovered ? regionColor : "transparent",
                ["--card-top" as string]: isExpanded || isHovered ? regionColor.replace("0.35", "0.5") : "rgba(255,255,255,0.08)",
                opacity: dimmed ? 0.3 : 1,
              }}
              onClick={() => setExpandedId(isExpanded ? null : city.id)}
              onMouseEnter={() => setHoveredId(city.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-region">{city.region}</div>
              <div className="card-name-row">
                <span className="card-name">{city.name}</span>
                <span className="card-arabic">{city.arabic}</span>
              </div>
              <div className="card-pop">{city.population} citizens</div>
              <div className="card-bars">
                <div className="card-bar">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: `${city.spirituality}%`, background: "linear-gradient(to top, rgba(212,175,55,0.6), rgba(212,175,55,0.2))" }} />
                  </div>
                  <span className="bar-label">Sp</span>
                </div>
                <div className="card-bar">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: `${city.innovation}%`, background: "linear-gradient(to top, rgba(6,182,212,0.6), rgba(6,182,212,0.2))" }} />
                  </div>
                  <span className="bar-label">In</span>
                </div>
                <div className="card-bar">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: `${city.unity}%`, background: "linear-gradient(to top, rgba(16,185,129,0.6), rgba(16,185,129,0.2))" }} />
                  </div>
                  <span className="bar-label">Un</span>
                </div>
              </div>
              <div className="card-body">
                <div className="card-desc">{city.description}</div>
                <div className="card-divider" />
                <div className="card-metrics">
                  <div className="card-metric">
                    <span className="card-metric-value">{city.spirituality}%</span>
                    <span className="card-metric-label">Spirituality</span>
                  </div>
                  <div className="card-metric">
                    <span className="card-metric-value">{city.innovation}%</span>
                    <span className="card-metric-label">Innovation</span>
                  </div>
                  <div className="card-metric">
                    <span className="card-metric-value">{city.unity}%</span>
                    <span className="card-metric-label">Unity</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="civ-footer">
        <div className="footer-arabic">إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ</div>
        <div className="footer-trans">Indeed, We have granted you abundance</div>
      </div>
    </div>
  );
};
