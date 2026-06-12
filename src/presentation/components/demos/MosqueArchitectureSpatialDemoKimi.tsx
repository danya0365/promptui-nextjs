"use client";

import React, { useEffect, useRef, useState } from "react";

interface KnowledgeArch {
  id: number;
  title: string;
  arabic: string;
  category: string;
  content: string;
  detail: string;
  x: number;
  y: number;
  size: "large" | "medium" | "small";
}

const knowledgeArches: KnowledgeArch[] = [
  {
    id: 1, title: "Tawhid", arabic: "التوحيد",
    category: "Theology", content: "The oneness of Allah — the foundation of all Islamic knowledge and the first pillar of faith.",
    detail: "Understanding Tawhid is the gateway to comprehending the entire Islamic worldview. It shapes how Muslims perceive creation, purpose, and destiny.",
    x: 20, y: 30, size: "large",
  },
  {
    id: 2, title: "Sunnah", arabic: "السُّنَّة",
    category: "Prophetic Way", content: "The living tradition of the Prophet Muhammad — guidance preserved through generations of scholars.",
    detail: "The Sunnah illuminates the Quran, providing practical application for divine guidance in every aspect of life.",
    x: 50, y: 20, size: "large",
  },
  {
    id: 3, title: "Fiqh", arabic: "الفقه",
    category: "Jurisprudence", content: "The deep understanding of divine law — how sacred texts shape human action in the world.",
    detail: "Islamic jurisprudence evolves through scholarly consensus, analogy, and the foundational sources of Quran and Sunnah.",
    x: 80, y: 32, size: "medium",
  },
  {
    id: 4, title: "Aqidah", arabic: "العقيدة",
    category: "Creed", content: "The articles of faith that anchor the believer&apos;s heart — from angels to the unseen realm.",
    detail: "Aqidah encompasses belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree.",
    x: 15, y: 62, size: "medium",
  },
  {
    id: 5, title: "Tazkiyah", arabic: "التزكية",
    category: "Purification", content: "The spiritual science of purifying the soul — the inner architecture of the believer.",
    detail: "Through remembrance, reflection, and righteous action, the heart is polished until it reflects divine light.",
    x: 50, y: 72, size: "large",
  },
  {
    id: 6, title: "Ihsan", arabic: "الإحسان",
    category: "Excellence", content: "To worship Allah as if you see Him — the highest station of spiritual realization.",
    detail: "Ihsan transforms every act into worship. It is the secret bridge between outward action and inward presence.",
    x: 85, y: 65, size: "medium",
  },
  {
    id: 7, title: "Ummah", arabic: "الأُمَّة",
    category: "Community", content: "The global community of believers — one body connected across time and space.",
    detail: "The Prophet described the Ummah as one body: when one part suffers, the whole responds with wakefulness and compassion.",
    x: 35, y: 48, size: "small",
  },
  {
    id: 8, title: "Qiblah", arabic: "القِبْلَة",
    category: "Direction", content: "The sacred orientation that unites all prayer toward the House of Allah in Makkah.",
    detail: "The Qiblah is more than direction — it is the spiritual anchor that orients the believer&apos;s entire existence toward the divine.",
    x: 68, y: 50, size: "small",
  },
];

const dustParticles = [...Array(45)].map((_, i) => ({
  left: (Math.sin(i * 1.414) * 50 + 50),
  top: (Math.cos(i * 2.236) * 50 + 50),
  size: 0.5 + ((i * 1.618) % 2),
  delay: ((i * 2.718) % 50) / 10,
  duration: 6 + ((i * 1.732) % 10),
  opacity: 0.08 + ((i * 3.141) % 20) / 100,
}));

const minaretPoints = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((d) => {
  const rad = (d * Math.PI) / 180;
  return { x: 50 + 35 * Math.cos(rad), y: 50 + 35 * Math.sin(rad) };
});

export const MosqueArchitectureSpatialDemoKimi: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const archRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      knowledgeArches.forEach((arch, i) => {
        const el = archRefs.current[i];
        if (!el) return;
        const driftY = Math.sin((elapsed + i * 0.8) * 0.5) * 5;
        const driftX = Math.cos((elapsed + i * 0.5) * 0.4) * 3;
        el.style.transform = `translate(${driftX}px, ${driftY}px)`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="mosque-spatial-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .mosque-spatial-container {
          min-height: 100vh; width: 100%; background: #06080c;
          background-image:
            radial-gradient(ellipse at 50% 10%, rgba(212,175,55,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 80%, rgba(255,255,255,0.015) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(10,14,22,1) 0%, #06080c 100%);
          color: #e8ecf1; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center;
        }

        .dust-layer { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .dust-particle {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
          animation: dustFloat linear infinite;
        }
        @keyframes dustFloat {
          0% { transform: translateY(0) translateX(0); opacity: var(--d-opacity); }
          50% { transform: translateY(-20px) translateX(8px); opacity: calc(var(--d-opacity) * 2); }
          100% { transform: translateY(0) translateX(0); opacity: var(--d-opacity); }
        }

        .central-dome {
          position: relative; z-index: 5; width: 220px; height: 220px;
          margin: 2.5rem 0 1rem; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
        }
        .dome-outer {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.1);
          animation: domePulse 8s ease-in-out infinite;
        }
        .dome-inner {
          position: absolute; inset: 20px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.05);
          animation: domePulse 6s ease-in-out infinite reverse;
        }
        .dome-core {
          position: absolute; inset: 40px; border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(255,255,255,0.02) 50%, transparent 70%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          border: 1px solid rgba(212,175,55,0.15);
        }
        .dome-crescent {
          font-family: 'Amiri', serif; font-size: 2rem; color: rgba(212,175,55,0.5);
        }
        .dome-label { font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(148,163,184,0.5); margin-top: 0.25rem; }
        @keyframes domePulse { 0%,100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.03); } }

        .minaret-ring {
          position: absolute; top: 50%; left: 50%;
          width: 340px; height: 340px; transform: translate(-50%,-50%);
          pointer-events: none;
        }
        .minaret {
          position: absolute; width: 3px; height: 12px;
          background: linear-gradient(to bottom, rgba(212,175,55,0.3), transparent);
          border-radius: 2px; transform: translate(-50%,-50%);
        }

        .mosque-hud {
          position: relative; z-index: 20; width: 100%; max-width: 1200px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 3rem 0.5rem;
        }
        .mosque-brand { display: flex; align-items: center; gap: 1rem; }
        .mosque-icon {
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(212,175,55,0.15), rgba(255,255,255,0.05));
          border: 1px solid rgba(212,175,55,0.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Amiri', serif; font-size: 1rem; color: #d4af37;
        }
        .mosque-title { font-size: 1.05rem; font-weight: 500; color: #f1f5f9; letter-spacing: 0.02em; }
        .mosque-subtitle { font-size: 0.68rem; color: rgba(148,163,184,0.6); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.15rem; }
        .mosque-meta { text-align: right; }
        .mosque-meta-line { font-size: 0.7rem; color: rgba(148,163,184,0.45); }

        .arches-stage {
          position: relative; z-index: 10; width: 100%; max-width: 1100px;
          height: 520px; margin: 0.5rem 0 1rem;
        }

        .knowledge-arch {
          position: absolute; transform: translate(-50%,-50%);
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 1.25rem 1.5rem; cursor: pointer; z-index: 15;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
          overflow: hidden;
        }
        .knowledge-arch::before {
          content: ''; position: absolute; inset: 0; border-radius: 24px;
          background: radial-gradient(ellipse at 50% 0%, var(--arch-glow) 0%, transparent 55%);
          opacity: 0.5; pointer-events: none;
        }
        .knowledge-arch::after {
          content: ''; position: absolute; top: 0; left: 15%; right: 15%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--arch-top), transparent);
          pointer-events: none;
        }
        .knowledge-arch:hover {
          border-color: rgba(212,175,55,0.25);
          box-shadow: 0 8px 40px rgba(212,175,55,0.08);
        }
        .knowledge-arch.expanded {
          z-index: 30;
          box-shadow: 0 12px 60px rgba(212,175,55,0.12), 0 0 80px rgba(212,175,55,0.04);
        }
        .knowledge-arch.large { min-width: 200px; max-width: 260px; }
        .knowledge-arch.medium { min-width: 170px; max-width: 220px; }
        .knowledge-arch.small { min-width: 150px; max-width: 190px; }

        .arch-header { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .arch-category { font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(212,175,55,0.6); }
        .arch-arabic { font-family: 'Amiri', serif; font-size: 1.1rem; color: rgba(255,255,255,0.7); }
        .arch-title { font-size: 0.95rem; font-weight: 500; color: #f1f5f9; margin-top: 0.4rem; position: relative; z-index: 1; }
        .arch-content { font-size: 0.78rem; color: rgba(226,232,240,0.6); line-height: 1.5; margin-top: 0.5rem; position: relative; z-index: 1; }

        .arch-body {
          position: relative; z-index: 1; margin-top: 0.5rem;
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, margin-top 0.4s ease;
          opacity: 0;
        }
        .knowledge-arch.expanded .arch-body { max-height: 200px; opacity: 1; margin-top: 0.75rem; }
        .arch-detail { font-size: 0.75rem; color: rgba(148,163,184,0.7); line-height: 1.6; }
        .arch-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent); margin: 0.75rem 0; }
        .arch-footer { display: flex; gap: 1rem; }
        .arch-stat { display: flex; flex-direction: column; }
        .arch-stat-value { font-size: 0.75rem; font-weight: 600; color: #d4af37; }
        .arch-stat-label { font-size: 0.6rem; color: rgba(148,163,184,0.5); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.1rem; }

        .mosque-footer {
          position: relative; z-index: 20; width: 100%; text-align: center;
          padding: 1rem 2rem 2.5rem;
        }
        .footer-calligraphy { font-family: 'Amiri', serif; font-size: 1.1rem; color: rgba(212,175,55,0.3); }
        .footer-trans { font-size: 0.6rem; color: rgba(148,163,184,0.3); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }

        @media (max-width: 900px) {
          .arches-stage { height: 650px; transform: scale(0.85); }
          .mosque-hud { padding: 1.5rem 1.5rem 0.5rem; }
          .central-dome { transform: scale(0.85); }
        }
        @media (max-width: 600px) {
          .arches-stage { height: 750px; transform: scale(0.7); }
          .knowledge-arch { padding: 1rem 1.25rem; }
          .knowledge-arch.large { min-width: 160px; max-width: 200px; }
          .knowledge-arch.medium { min-width: 140px; max-width: 180px; }
          .knowledge-arch.small { min-width: 130px; max-width: 160px; }
        }
      `}</style>

      <div className="dust-layer">
        {dustParticles.map((d, i) => (
          <div
            key={`d-${i}`}
            className="dust-particle"
            style={{
              left: `${d.left}%`, top: `${d.top}%`,
              width: d.size, height: d.size,
              animationDelay: `${d.delay}s`, animationDuration: `${d.duration}s`,
              ["--d-opacity" as string]: d.opacity,
            }}
          />
        ))}
      </div>

      <div className="mosque-hud">
        <div className="mosque-brand">
          <div className="mosque-icon">مسجد</div>
          <div>
            <div className="mosque-title">Mosque Architecture Spatial</div>
            <div className="mosque-subtitle">Futuristic Knowledge Navigation</div>
          </div>
        </div>
        <div className="mosque-meta">
          <div className="mosque-meta-line">8 Knowledge Arches</div>
          <div className="mosque-meta-line">Spatial Interface 2050</div>
        </div>
      </div>

      <div className="central-dome">
        <div className="dome-outer" />
        <div className="dome-inner" />
        <div className="dome-core">
          <span className="dome-crescent">☪</span>
          <span className="dome-label">Sacred Center</span>
        </div>
        <div className="minaret-ring">
          {minaretPoints.map((pt, i) => (
            <div key={`m-${i}`} className="minaret" style={{ left: `${pt.x}%`, top: `${pt.y}%` }} />
          ))}
        </div>
      </div>

      <div className="arches-stage">
        {knowledgeArches.map((arch, idx) => {
          const isExpanded = expandedId === arch.id;
          const isHovered = hoveredId === arch.id;
          const dimmed = expandedId !== null && expandedId !== arch.id;
          return (
            <div
              key={arch.id}
              ref={(el) => { archRefs.current[idx] = el; }}
              className={`knowledge-arch ${arch.size} ${isExpanded ? "expanded" : ""}`}
              style={{
                left: `${arch.x}%`, top: `${arch.y}%`,
                ["--arch-glow" as string]: isExpanded || isHovered ? "rgba(212,175,55,0.25)" : "transparent",
                ["--arch-top" as string]: isExpanded || isHovered ? "rgba(212,175,55,0.4)" : "rgba(255,255,255,0.1)",
                opacity: dimmed ? 0.35 : 1,
              }}
              onClick={() => setExpandedId(isExpanded ? null : arch.id)}
              onMouseEnter={() => setHoveredId(arch.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="arch-header">
                <span className="arch-category">{arch.category}</span>
                <span className="arch-arabic">{arch.arabic}</span>
              </div>
              <div className="arch-title">{arch.title}</div>
              <div className="arch-content">{arch.content}</div>
              <div className="arch-body">
                <div className="arch-detail">{arch.detail}</div>
                <div className="arch-divider" />
                <div className="arch-footer">
                  <div className="arch-stat">
                    <span className="arch-stat-value">{arch.size === "large" ? "Core" : arch.size === "medium" ? "Major" : "Minor"}</span>
                    <span className="arch-stat-label">Weight</span>
                  </div>
                  <div className="arch-stat">
                    <span className="arch-stat-value">{arch.id}</span>
                    <span className="arch-stat-label">Node</span>
                  </div>
                  <div className="arch-stat">
                    <span className="arch-stat-value">{arch.arabic.length}</span>
                    <span className="arch-stat-label">Chars</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mosque-footer">
        <div className="footer-calligraphy">وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا</div>
        <div className="footer-trans">And the mosques are for Allah, so do not invoke with Allah anyone</div>
      </div>
    </div>
  );
};
