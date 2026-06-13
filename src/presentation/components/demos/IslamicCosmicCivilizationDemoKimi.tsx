"use client";

import React, { useEffect, useRef, useState } from "react";

interface CelestialHub {
  id: number;
  title: string;
  arabic: string;
  sector: string;
  population: string;
  mosques: string;
  knowledge: string;
  description: string;
  x: number;
  y: number;
  orbitRadius: number;
  orbitDuration: number;
}

const celestialHubs: CelestialHub[] = [
  {
    id: 1, title: "Tawheed Prime", arabic: "التوحيد", sector: "Central Galaxy",
    population: "12B", mosques: "890K", knowledge: "99.9%",
    description: "The spiritual capital of the Ummah among the stars. Every prayer here is synchronized across 40 orbital platforms.",
    x: 50, y: 50, orbitRadius: 0, orbitDuration: 0,
  },
  {
    id: 2, title: "Nur Station", arabic: "النور", sector: "Andromeda Arm",
    population: "4.2B", mosques: "210K", knowledge: "97.5%",
    description: "A beacon of light in the outer spiral. Scholars here decoded the first extraterrestrial signs of monotheism.",
    x: 50, y: 50, orbitRadius: 160, orbitDuration: 28,
  },
  {
    id: 3, title: "Hikmah Nebula", arabic: "الحكمة", sector: "Orion Belt",
    population: "6.8B", mosques: "340K", knowledge: "98.2%",
    description: "Where ancient manuscripts meet quantum archives. The greatest library in the known universe spans 12 megastructures.",
    x: 50, y: 50, orbitRadius: 200, orbitDuration: 36,
  },
  {
    id: 4, title: "Salah Ring", arabic: "الصلاة", sector: "Pleiades Cluster",
    population: "3.1B", mosques: "180K", knowledge: "96.8%",
    description: "A toroidal megastructure where every surface orients toward the Earth — the eternal Qiblah preserved across light-years.",
    x: 50, y: 50, orbitRadius: 140, orbitDuration: 22,
  },
  {
    id: 5, title: "Adl Colonies", arabic: "العدل", sector: "Lyra Constellation",
    population: "8.5B", mosques: "450K", knowledge: "98.7%",
    description: "Justice flows through these colonies like rivers of light. The first interstellar court of equity was established here in 2157.",
    x: 50, y: 50, orbitRadius: 180, orbitDuration: 32,
  },
  {
    id: 6, title: "Rahmah Outpost", arabic: "الرحمة", sector: "Cygnus Fringe",
    population: "1.9B", mosques: "95K", knowledge: "94.1%",
    description: "The frontier of compassion. This outpost welcomes refugees from dying stars, offering sanctuary and faith.",
    x: 50, y: 50, orbitRadius: 120, orbitDuration: 18,
  },
  {
    id: 7, title: "Ihsan Foundry", arabic: "الإحسان", sector: "Perseus Cloud",
    population: "5.3B", mosques: "280K", knowledge: "97.9%",
    description: "Excellence in all things. From terraforming engines to holographic prayer mats — every creation is an act of worship.",
    x: 50, y: 50, orbitRadius: 220, orbitDuration: 40,
  },
  {
    id: 8, title: "Sabr Haven", arabic: "الصبر", sector: "Cassiopeia Depths",
    population: "2.7B", mosques: "130K", knowledge: "95.6%",
    description: "Patience forged in isolation. The deepest colony maintains its faith despite being centuries from any other hub.",
    x: 50, y: 50, orbitRadius: 100, orbitDuration: 16,
  },
];

const nebulaParticles = [...Array(70)].map((_, i) => ({
  left: (Math.sin(i * 1.618) * 50 + 50),
  top: (Math.cos(i * 2.718) * 50 + 50),
  size: 0.5 + ((i * 1.414) % 3),
  delay: ((i * 3.14159) % 60) / 10,
  duration: 5 + ((i * 1.732) % 10),
  opacity: 0.08 + ((i * 2.236) % 25) / 100,
}));

const coreRings = [
  { size: 100, opacity: 0.12, duration: 30 },
  { size: 140, opacity: 0.08, duration: 40 },
  { size: 180, opacity: 0.05, duration: 50 },
];

export const IslamicCosmicCivilizationDemoKimi: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hubRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      celestialHubs.forEach((hub, i) => {
        const el = hubRefs.current[i];
        if (!el) return;
        if (hub.orbitRadius === 0) {
          const pulse = 1 + Math.sin(elapsed * 0.8) * 0.02;
          el.style.transform = `translate(-50%,-50%) scale(${pulse})`;
          return;
        }
        const angle = ((elapsed / hub.orbitDuration) * 360 + i * 45) % 360;
        const rad = (angle * Math.PI) / 180;
        const x = hub.orbitRadius * Math.cos(rad);
        const y = hub.orbitRadius * Math.sin(rad);
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="cosmos-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .cosmos-container {
          min-height: 100vh; width: 100%; background: #01030a;
          background-image:
            radial-gradient(ellipse at 40% 30%, rgba(16,185,129,0.04) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 70%, rgba(212,175,55,0.02) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(139,92,246,0.02) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(5,8,18,1) 0%, #01030a 100%);
          color: #e8ecf1; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center;
        }

        .nebula-layer { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .nebula-particle {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%);
          animation: nebulaFloat linear infinite;
        }
        .nebula-particle.emerald { background: radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%); }
        .nebula-particle.violet { background: radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%); }
        @keyframes nebulaFloat {
          0% { transform: translateY(0) translateX(0); opacity: var(--n-opacity); }
          50% { transform: translateY(-25px) translateX(10px); opacity: calc(var(--n-opacity) * 2.5); }
          100% { transform: translateY(0) translateX(0); opacity: var(--n-opacity); }
        }

        .cosmos-hud {
          position: relative; z-index: 20; width: 100%; max-width: 1200px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 3rem 0.5rem;
        }
        .cosmos-brand { display: flex; align-items: center; gap: 1rem; }
        .cosmos-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(212,175,55,0.1));
          border: 1px solid rgba(16,185,129,0.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Amiri', serif; font-size: 1rem; color: #34d399;
        }
        .cosmos-title { font-size: 1.05rem; font-weight: 500; color: #f1f5f9; letter-spacing: 0.02em; }
        .cosmos-subtitle { font-size: 0.68rem; color: rgba(148,163,184,0.5); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.15rem; }
        .cosmos-meta { display: flex; gap: 2rem; }
        .cosmos-stat { text-align: center; }
        .cosmos-stat-value { font-size: 0.9rem; font-weight: 600; color: #d4af37; }
        .cosmos-stat-label { font-size: 0.6rem; color: rgba(148,163,184,0.4); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.1rem; }

        .galaxy-stage {
          position: relative; z-index: 10; width: 100%; max-width: 900px;
          height: 600px; margin: 1rem 0 1rem;
          display: flex; align-items: center; justify-content: center;
        }

        .core-hub {
          position: absolute; transform: translate(-50%,-50%);
          width: 140px; height: 140px; border-radius: 50%;
          background: radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(212,175,55,0.05) 50%, transparent 70%);
          border: 1px solid rgba(16,185,129,0.2);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 20;
        }
        .core-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; color: rgba(52,211,153,0.7); }
        .core-label { font-size: 0.55rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(148,163,184,0.5); margin-top: 0.25rem; }

        .core-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          border-radius: 50%; border: 1px solid rgba(16,185,129,0.06);
          animation: coreSpin linear infinite;
        }
        @keyframes coreSpin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }

        .orbit-hub {
          position: absolute; transform: translate(-50%,-50%);
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 1rem 1.25rem; cursor: pointer; z-index: 15;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
          min-width: 160px; max-width: 210px; overflow: hidden;
        }
        .orbit-hub::before {
          content: ''; position: absolute; inset: 0; border-radius: 20px;
          background: radial-gradient(ellipse at 50% 0%, var(--hub-glow) 0%, transparent 55%);
          opacity: 0.5; pointer-events: none;
        }
        .orbit-hub::after {
          content: ''; position: absolute; top: 0; left: 12%; right: 12%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--hub-top), transparent);
          pointer-events: none;
        }
        .orbit-hub:hover {
          border-color: rgba(212,175,55,0.25);
          box-shadow: 0 8px 40px rgba(212,175,55,0.08);
        }
        .orbit-hub.expanded {
          min-width: 300px; max-width: 380px; z-index: 30;
          box-shadow: 0 12px 60px rgba(212,175,55,0.1);
        }

        .hub-header { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .hub-sector { font-size: 0.55rem; color: rgba(148,163,184,0.45); letter-spacing: 0.1em; text-transform: uppercase; }
        .hub-arabic { font-family: 'Amiri', serif; font-size: 0.95rem; color: rgba(212,175,55,0.5); }
        .hub-title { font-size: 0.9rem; font-weight: 500; color: #f1f5f9; margin-top: 0.3rem; position: relative; z-index: 1; }
        .hub-stats { display: flex; gap: 0.8rem; margin-top: 0.4rem; position: relative; z-index: 1; }
        .hub-stat { display: flex; flex-direction: column; }
        .hub-stat-value { font-size: 0.72rem; font-weight: 600; color: #34d399; }
        .hub-stat-label { font-size: 0.55rem; color: rgba(148,163,184,0.45); text-transform: uppercase; letter-spacing: 0.06em; }

        .hub-body {
          position: relative; z-index: 1; margin-top: 0.5rem;
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, margin-top 0.4s ease;
          opacity: 0;
        }
        .orbit-hub.expanded .hub-body { max-height: 200px; opacity: 1; margin-top: 0.75rem; }
        .hub-desc { font-size: 0.76rem; color: rgba(226,232,240,0.65); line-height: 1.5; }
        .hub-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent); margin: 0.6rem 0; }
        .hub-metrics { display: flex; gap: 1rem; }
        .hub-metric { display: flex; flex-direction: column; }
        .hub-metric-value { font-size: 0.72rem; font-weight: 600; color: #d4af37; }
        .hub-metric-label { font-size: 0.55rem; color: rgba(148,163,184,0.4); text-transform: uppercase; letter-spacing: 0.06em; }

        .cosmos-footer {
          position: relative; z-index: 20; width: 100%; text-align: center;
          padding: 1rem 2rem 2.5rem;
        }
        .footer-verse { font-family: 'Amiri', serif; font-size: 1rem; color: rgba(16,185,129,0.3); }
        .footer-trans { font-size: 0.6rem; color: rgba(148,163,184,0.3); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }

        @media (max-width: 900px) {
          .galaxy-stage { height: 650px; transform: scale(0.85); }
          .cosmos-hud { padding: 1.5rem 1.5rem 0.5rem; }
          .cosmos-meta { gap: 1.2rem; }
        }
        @media (max-width: 600px) {
          .galaxy-stage { height: 750px; transform: scale(0.7); }
          .orbit-hub { padding: 0.875rem 1rem; min-width: 140px; max-width: 180px; }
          .orbit-hub.expanded { min-width: 260px; max-width: 320px; }
          .core-hub { width: 110px; height: 110px; }
        }
      `}</style>

      <div className="nebula-layer">
        {nebulaParticles.map((p, i) => (
          <div
            key={`n-${i}`}
            className={`nebula-particle ${i % 4 === 0 ? "emerald" : i % 5 === 0 ? "violet" : ""}`}
            style={{
              left: `${p.left}%`, top: `${p.top}%`,
              width: p.size, height: p.size,
              animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
              ["--n-opacity" as string]: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="cosmos-hud">
        <div className="cosmos-brand">
          <div className="cosmos-icon">كوكب</div>
          <div>
            <div className="cosmos-title">Islamic Cosmic Civilization</div>
            <div className="cosmos-subtitle">Spatial Operating System</div>
          </div>
        </div>
        <div className="cosmos-meta">
          <div className="cosmos-stat">
            <div className="cosmos-stat-value">44.5B</div>
            <div className="cosmos-stat-label">Citizens</div>
          </div>
          <div className="cosmos-stat">
            <div className="cosmos-stat-value">8</div>
            <div className="cosmos-stat-label">Hubs</div>
          </div>
          <div className="cosmos-stat">
            <div className="cosmos-stat-value">2.6M</div>
            <div className="cosmos-stat-label">Mosques</div>
          </div>
        </div>
      </div>

      <div className="galaxy-stage">
        <div className="core-hub">
          <span className="core-arabic">الأمة</span>
          <span className="core-label">Ummah Core</span>
        </div>
        {coreRings.map((ring, i) => (
          <div
            key={`cr-${i}`}
            className="core-ring"
            style={{
              width: ring.size, height: ring.size,
              borderColor: `rgba(16,185,129,${ring.opacity})`,
              animationDuration: `${ring.duration}s`,
            }}
          />
        ))}

        {celestialHubs.map((hub, idx) => {
          const isExpanded = expandedId === hub.id;
          const isHovered = hoveredId === hub.id;
          const dimmed = expandedId !== null && expandedId !== hub.id && hub.id !== 1;
          return (
            <div
              key={hub.id}
              ref={(el) => { hubRefs.current[idx] = el; }}
              className={`orbit-hub ${isExpanded ? "expanded" : ""}`}
              style={{
                left: `${hub.x}%`, top: `${hub.y}%`,
                ["--hub-glow" as string]: isExpanded || isHovered ? "rgba(212,175,55,0.25)" : "transparent",
                ["--hub-top" as string]: isExpanded || isHovered ? "rgba(212,175,55,0.5)" : "rgba(255,255,255,0.08)",
                opacity: dimmed ? 0.3 : 1,
              }}
              onClick={() => setExpandedId(isExpanded ? null : hub.id)}
              onMouseEnter={() => setHoveredId(hub.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="hub-header">
                <span className="hub-sector">{hub.sector}</span>
                <span className="hub-arabic">{hub.arabic}</span>
              </div>
              <div className="hub-title">{hub.title}</div>
              <div className="hub-stats">
                <div className="hub-stat">
                  <span className="hub-stat-value">{hub.population}</span>
                  <span className="hub-stat-label">Pop</span>
                </div>
                <div className="hub-stat">
                  <span className="hub-stat-value">{hub.mosques}</span>
                  <span className="hub-stat-label">Mosques</span>
                </div>
                <div className="hub-stat">
                  <span className="hub-stat-value">{hub.knowledge}</span>
                  <span className="hub-stat-label">Know</span>
                </div>
              </div>
              <div className="hub-body">
                <div className="hub-desc">{hub.description}</div>
                <div className="hub-divider" />
                <div className="hub-metrics">
                  <div className="hub-metric">
                    <span className="hub-metric-value">{hub.population}</span>
                    <span className="hub-metric-label">Population</span>
                  </div>
                  <div className="hub-metric">
                    <span className="hub-metric-value">{hub.mosques}</span>
                    <span className="hub-metric-label">Mosques</span>
                  </div>
                  <div className="hub-metric">
                    <span className="hub-metric-value">{hub.knowledge}</span>
                    <span className="hub-metric-label">Knowledge</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cosmos-footer">
        <div className="footer-verse">وَجَعَلْنَاكُمْ أُمَّةً وَسَطًا</div>
        <div className="footer-trans">And We have made you a balanced community</div>
      </div>
    </div>
  );
};
