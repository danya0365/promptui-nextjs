"use client";

import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: 1,
    arabic: "العلم نور",
    title: "Divine Knowledge",
    subtitle: "Sacred Intelligence",
    content:
      "The light of knowledge illuminates the path to understanding the cosmic order inscribed in every atom.",
    orbitRadius: 280,
    orbitDuration: 24,
    orbitDelay: 0,
  },
  {
    id: 2,
    arabic: "الحكمة أصل",
    title: "Ancient Wisdom",
    subtitle: "Timeless Guidance",
    content:
      "Wisdom flows through centuries like rivers through valleys, shaping civilizations and nurturing souls.",
    orbitRadius: 320,
    orbitDuration: 28,
    orbitDelay: -7,
  },
  {
    id: 3,
    arabic: "التوحيد سر",
    title: "Unity Essence",
    subtitle: "Oneness of Being",
    content:
      "At the heart of all existence lies a single truth — the unity that binds the cosmos into coherent harmony.",
    orbitRadius: 260,
    orbitDuration: 22,
    orbitDelay: -14,
  },
  {
    id: 4,
    arabic: "العدل قيمة",
    title: "Cosmic Justice",
    subtitle: "Universal Balance",
    content:
      "Justice is the mathematical precision of the universe, where every action finds its perfect equilibrium.",
    orbitRadius: 300,
    orbitDuration: 26,
    orbitDelay: -21,
  },
];

const knowledgePanels = [
  {
    id: 1,
    title: "The House of Wisdom",
    arabic: "بيت الحكمة",
    body: "In the golden age of Islamic civilization, the House of Wisdom in Baghdad stood as the greatest center of learning. Scholars from across the world gathered to translate, preserve, and expand human knowledge.",
    metrics: [
      { label: "Scholars", value: "400+" },
      { label: "Manuscripts", value: "100K+" },
      { label: "Centuries", value: "5" },
    ],
  },
  {
    id: 2,
    title: "The Golden Ratio",
    arabic: "النسبة الذهبية",
    body: "Islamic geometric art encodes the divine proportion — phi (1.618) — found everywhere from the spiral of galaxies to the arrangement of petals.",
    metrics: [
      { label: "Precision", value: "99.99%" },
      { label: "Patterns", value: "\u221e" },
      { label: "Universality", value: "100%" },
    ],
  },
  {
    id: 3,
    title: "Light & Matter",
    arabic: "النور والمادة",
    body: "Quantum physics now confirms what Sufi mystics intuited centuries ago: light is the fundamental substance of reality.",
    metrics: [
      { label: "Speed", value: "299,792 km/s" },
      { label: "Dual Nature", value: "Wave/Particle" },
      { label: "Entropy", value: "Zero" },
    ],
  },
  {
    id: 4,
    title: "The Celestial Balance",
    arabic: "التوازن السماوي",
    body: "Every atom seeks equilibrium. The orbit of planets, the spin of electrons, the pulse of stars — all follow the same mathematical law of justice.",
    metrics: [
      { label: "Galaxies", value: "2T+" },
      { label: "Stars", value: "10\u2072\u2074" },
      { label: "Harmony", value: "Absolute" },
    ],
  },
];

const starPositions = [...Array(40)].map((_, i) => ({
  left: Math.sin(i * 1.618) * 50 + 50,
  top: Math.cos(i * 2.718) * 50 + 50,
  animationDelay: ((i * 3.14159) % 30) / 10,
  opacity: 0.3 + ((i * 1.414) % 70) / 100,
}));

export const IslamicSpatialIntelligenceDemoKimi: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      cards.forEach((card, i) => {
        const el = cardRefs.current[i];
        if (el) {
          const angle = (i * 90 + (elapsed / card.orbitDuration) * 360) % 360;
          const x = Math.cos((angle * Math.PI) / 180) * card.orbitRadius;
          const y = Math.sin((angle * Math.PI) / 180) * card.orbitRadius;
          el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="spatial-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .spatial-container {
          min-height: 100vh; width: 100%; background: #02040a;
          background-image:
            radial-gradient(ellipse at 20% 30%, rgba(212,175,55,0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.02) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(10,20,40,1) 0%, #02040a 100%);
          color: #f0f0f0; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          perspective: 1200px;
        }

        .star-field { position: absolute; inset: 0; pointer-events: none; }
        .star { position: absolute; width: 2px; height: 2px; background: rgba(255,255,255,0.6); border-radius: 50%; animation: starPulse 3s ease-in-out infinite; }
        @keyframes starPulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }

        .sacred-pattern { position: absolute; inset: 0; pointer-events: none; opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0L110 40h40L120 60l20 40-40-20-40 20 20-40L60 40h40z' fill='%23d4af37'/%3E%3C/svg%3E");
          background-size: 200px 200px; animation: patternRotate 120s linear infinite; }
        @keyframes patternRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .light-ray { position: absolute; top: -20%; left: 50%; width: 2px; height: 140%;
          background: linear-gradient(to bottom, transparent, rgba(212,175,55,0.08), rgba(255,255,255,0.05), transparent);
          transform-origin: top center; pointer-events: none; filter: blur(1px); }
        .light-ray:nth-child(1) { transform: translateX(-200px) rotate(-25deg); animation: rayFlicker 6s ease-in-out infinite; }
        .light-ray:nth-child(2) { transform: translateX(-120px) rotate(-12deg); animation: rayFlicker 7s ease-in-out infinite 1s; }
        .light-ray:nth-child(3) { transform: translateX(-40px) rotate(-4deg); animation: rayFlicker 5s ease-in-out infinite 2s; }
        .light-ray:nth-child(4) { transform: translateX(40px) rotate(4deg); animation: rayFlicker 8s ease-in-out infinite 0.5s; }
        .light-ray:nth-child(5) { transform: translateX(120px) rotate(12deg); animation: rayFlicker 6.5s ease-in-out infinite 1.5s; }
        .light-ray:nth-child(6) { transform: translateX(200px) rotate(25deg); animation: rayFlicker 7.5s ease-in-out infinite 2.5s; }
        @keyframes rayFlicker { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }

        .core-area { position: relative; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; transform-style: preserve-3d; }

        .core-geometry { position: absolute; width: 120px; height: 120px; transform-style: preserve-3d;
          animation: coreFloat 8s ease-in-out infinite, coreRotate 20s linear infinite; }
        @keyframes coreFloat { 0%,100% { transform: translateY(0px) rotateX(15deg) rotateY(0deg); } 50% { transform: translateY(-20px) rotateX(15deg) rotateY(180deg); } }
        @keyframes coreRotate { from { transform: rotateY(0deg) rotateX(15deg); } to { transform: rotateY(360deg) rotateX(15deg); } }

        .core-face { position: absolute; width: 120px; height: 120px; border: 1px solid rgba(212,175,55,0.4); background: rgba(0,0,0,0.6); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; }
        .core-face:nth-child(1) { transform: translateZ(60px); }
        .core-face:nth-child(2) { transform: rotateY(90deg) translateZ(60px); }
        .core-face:nth-child(3) { transform: rotateY(180deg) translateZ(60px); }
        .core-face:nth-child(4) { transform: rotateY(-90deg) translateZ(60px); }
        .core-face:nth-child(5) { transform: rotateX(90deg) translateZ(60px); border-color: rgba(212,175,55,0.6); background: rgba(212,175,55,0.05); }
        .core-face:nth-child(6) { transform: rotateX(-90deg) translateZ(60px); border-color: rgba(212,175,55,0.6); background: rgba(212,175,55,0.05); }

        .core-glow { position: absolute; width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%);
          animation: glowPulse 4s ease-in-out infinite; pointer-events: none; }
        @keyframes glowPulse { 0%,100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.3); opacity: 1; } }

        .core-label { font-family: 'Amiri', serif; font-size: 0.75rem; color: rgba(212,175,55,0.8); letter-spacing: 0.3em; text-align: center; }

        .geometry-ring { position: absolute; border: 1px solid rgba(212,175,55,0.1); border-radius: 50%; pointer-events: none; }
        .geometry-ring:nth-child(1) { width: 220px; height: 220px; animation: ringSpin1 30s linear infinite; }
        .geometry-ring:nth-child(2) { width: 300px; height: 300px; animation: ringSpin2 40s linear infinite reverse; }
        .geometry-ring:nth-child(3) { width: 380px; height: 380px; animation: ringSpin1 50s linear infinite; }
        @keyframes ringSpin1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ringSpin2 { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

        .ring-vertex { position: absolute; width: 6px; height: 6px; background: rgba(212,175,55,0.5); border-radius: 50%; box-shadow: 0 0 10px rgba(212,175,55,0.5); }

        .orbit-system { position: absolute; width: 800px; height: 800px; transform-style: preserve-3d; }

        .holo-card { position: absolute; width: 280px; padding: 1.75rem;
          background: rgba(255,255,255,0.03); backdrop-filter: blur(24px);
          border: 1px solid rgba(212,175,55,0.2); border-radius: 16px; cursor: pointer;
          transition: all 0.6s cubic-bezier(0.16,1,0.3,1); transform-style: preserve-3d; z-index: 10; }
        .holo-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(212,175,55,0.5);
          box-shadow: 0 0 40px rgba(212,175,55,0.15), inset 0 0 20px rgba(212,175,55,0.05);
          transform: scale(1.05) translateZ(30px); }
        .holo-card.expanded { width: 480px; z-index: 100; background: rgba(10,15,30,0.95);
          border-color: rgba(212,175,55,0.6);
          box-shadow: 0 0 60px rgba(212,175,55,0.2), inset 0 0 30px rgba(212,175,55,0.08); }

        .card-gold-border { position: absolute; inset: -1px; border-radius: 16px; padding: 1px;
          background: linear-gradient(135deg, rgba(212,175,55,0.4), transparent, rgba(212,175,55,0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; opacity: 0; transition: opacity 0.4s; }
        .holo-card:hover .card-gold-border, .holo-card.expanded .card-gold-border { opacity: 1; }

        .card-arabic { font-family: 'Amiri', serif; font-size: 1.75rem; color: #d4af37; margin-bottom: 0.75rem;
          text-shadow: 0 0 15px rgba(212,175,55,0.3); direction: rtl; }
        .card-title { font-size: 1.125rem; font-weight: 600; color: #fff; margin-bottom: 0.25rem; letter-spacing: -0.01em; }
        .card-subtitle { font-size: 0.75rem; color: rgba(212,175,55,0.7); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem; }
        .card-body { font-size: 0.875rem; line-height: 1.6; color: rgba(255,255,255,0.55); transition: color 0.4s; }
        .holo-card:hover .card-body { color: rgba(255,255,255,0.8); }

        .knowledge-panel { max-height: 0; overflow: hidden; opacity: 0; transition: all 0.8s cubic-bezier(0.16,1,0.3,1); margin-top: 0; }
        .holo-card.expanded .knowledge-panel { max-height: 400px; opacity: 1; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(212,175,55,0.15); }

        .panel-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }
        .panel-arabic { font-family: 'Amiri', serif; font-size: 1.25rem; color: #d4af37; }
        .panel-title { font-size: 1rem; font-weight: 600; color: #fff; }
        .panel-body { font-size: 0.8125rem; line-height: 1.7; color: rgba(255,255,255,0.6); margin-bottom: 1.5rem; }
        .panel-metrics { display: flex; gap: 2rem; }
        .metric { display: flex; flex-direction: column; gap: 0.25rem; }
        .metric-value { font-size: 1.25rem; font-weight: 700; color: #d4af37; text-shadow: 0 0 10px rgba(212,175,55,0.3); }
        .metric-label { font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4); }

        .spatial-hud { position: absolute; top: 2rem; left: 0; right: 0; display: flex; justify-content: space-between; align-items: center;
          padding: 0 3rem; z-index: 50; pointer-events: none; }
        .hud-left { display: flex; align-items: center; gap: 1rem; }
        .hud-logo { width: 32px; height: 32px; border: 1px solid rgba(212,175,55,0.4); display: flex; align-items: center; justify-content: center;
          font-family: 'Amiri', serif; font-size: 0.875rem; color: #d4af37; }
        .hud-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(255,255,255,0.5); }
        .hud-right { display: flex; align-items: center; gap: 1.5rem; }
        .hud-indicator { display: flex; align-items: center; gap: 0.5rem; font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4); }
        .indicator-dot { width: 6px; height: 6px; border-radius: 50%; background: #d4af37; box-shadow: 0 0 8px rgba(212,175,55,0.6); animation: indicatorPulse 2s ease-in-out infinite; }
        @keyframes indicatorPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

        .sacred-footer { position: absolute; bottom: 2rem; left: 0; right: 0; text-align: center; z-index: 50; pointer-events: none; }
        .footer-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; color: rgba(212,175,55,0.4); margin-bottom: 0.5rem; }
        .footer-english { font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.5em; color: rgba(255,255,255,0.2); }

        @media (max-width: 1200px) { .orbit-system { transform: scale(0.8); } }
        @media (max-width: 900px) { .orbit-system { transform: scale(0.6); } .holo-card { width: 220px; padding: 1.25rem; } .holo-card.expanded { width: 320px; } }
        @media (max-width: 600px) { .orbit-system { transform: scale(0.45); } .spatial-hud { padding: 0 1.5rem; } .hud-right { display: none; } }
      `}</style>

      {[...Array(6)].map((_, i) => (
        <div key={`ray-${i}`} className="light-ray" />
      ))}
      <div className="sacred-pattern" />
      <div className="star-field">
        {starPositions.map((star, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="spatial-hud">
        <div className="hud-left">
          <div className="hud-logo">ك</div>
          <span className="hud-title">Spatial Intelligence Core</span>
        </div>
        <div className="hud-right">
          <div className="hud-indicator">
            <div className="indicator-dot" />
            <span>Live</span>
          </div>
          <div className="hud-indicator">
            <span>Kimi K2.6</span>
          </div>
        </div>
      </div>

      <div className="core-area">
        <div className="geometry-ring">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
            <div
              key={`v1-${d}`}
              className="ring-vertex"
              style={{
                left: `${50 + 45 * Math.cos((d * Math.PI) / 180)}%`,
                top: `${50 + 45 * Math.sin((d * Math.PI) / 180)}%`,
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </div>
        <div className="geometry-ring">
          {[0, 60, 120, 180, 240, 300].map((d) => (
            <div
              key={`v2-${d}`}
              className="ring-vertex"
              style={{
                left: `${50 + 40 * Math.cos((d * Math.PI) / 180)}%`,
                top: `${50 + 40 * Math.sin((d * Math.PI) / 180)}%`,
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </div>
        <div className="geometry-ring">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((d) => (
            <div
              key={`v3-${d}`}
              className="ring-vertex"
              style={{
                left: `${50 + 38 * Math.cos((d * Math.PI) / 180)}%`,
                top: `${50 + 38 * Math.sin((d * Math.PI) / 180)}%`,
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </div>

        <div className="core-glow" />
        <div className="core-geometry">
          {[...Array(6)].map((_, i) => (
            <div key={`face-${i}`} className="core-face">
              <span className="core-label">{i < 4 ? "الكعبة" : "المركز"}</span>
            </div>
          ))}
        </div>

        <div className="orbit-system">
          {cards.map((card, idx) => {
            const isExpanded = expandedId === card.id;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`holo-card ${isExpanded ? "expanded" : ""}`}
                style={{
                  left: "50%",
                  top: "50%",
                }}
                onClick={() => setExpandedId(isExpanded ? null : card.id)}
              >
                <div className="card-gold-border" />
                <div className="card-arabic">{card.arabic}</div>
                <div className="card-title">{card.title}</div>
                <div className="card-subtitle">{card.subtitle}</div>
                <div className="card-body">{card.content}</div>
                <div className="knowledge-panel">
                  {(() => {
                    const panel = knowledgePanels.find((p) => p.id === card.id);
                    if (!panel) return null;
                    return (
                      <>
                        <div className="panel-header">
                          <span className="panel-arabic">{panel.arabic}</span>
                          <span className="panel-title">{panel.title}</span>
                        </div>
                        <div className="panel-body">{panel.body}</div>
                        <div className="panel-metrics">
                          {panel.metrics.map((m) => (
                            <div key={m.label} className="metric">
                              <span className="metric-value">{m.value}</span>
                              <span className="metric-label">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sacred-footer">
        <div className="footer-arabic">الله نور السماوات والأرض</div>
        <div className="footer-english">
          Allah is the Light of the heavens and the earth
        </div>
      </div>
    </div>
  );
};
