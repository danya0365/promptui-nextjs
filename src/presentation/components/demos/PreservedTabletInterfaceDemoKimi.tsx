"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevelationLayer {
  id: number;
  title: string;
  arabic: string;
  subtitle: string;
  verse: string;
  meaning: string;
  x: number;
  y: number;
  depth: number;
}

const revelationLayers: RevelationLayer[] = [
  {
    id: 1, title: "Al-Lawh", arabic: "اللَّوْح", subtitle: "The Preserved Tablet",
    verse: "Indeed, it is a mighty Quran. In a Book well-protected.",
    meaning: "The source of all divine knowledge — every decree, every soul, every moment inscribed in light before creation.",
    x: 50, y: 30, depth: 1,
  },
  {
    id: 2, title: "Al-Qalam", arabic: "الْقَلَم", subtitle: "The Pen",
    verse: "Nun. By the pen and what they inscribe.",
    meaning: "The instrument through which divine will flows into manifestation — the first creation that wrote all that would be.",
    x: 22, y: 48, depth: 2,
  },
  {
    id: 3, title: "Al-Arsh", arabic: "الْعَرْش", subtitle: "The Throne",
    verse: "The Most Merciful rose above the Throne.",
    meaning: "The grandest creation — encompassing all heavens and earth in its magnificence, the seat of divine sovereignty.",
    x: 78, y: 45, depth: 2,
  },
  {
    id: 4, title: "Al-Kursi", arabic: "الْكُرْسِيّ", subtitle: "The Footstool",
    verse: "His Kursi extends over the heavens and the earth.",
    meaning: "The guardian of all existence. Between the Throne and creation, it holds the dominion of the cosmos.",
    x: 35, y: 68, depth: 3,
  },
  {
    id: 5, title: "Al-Sama", arabic: "السَّمَاء", subtitle: "The Heavens",
    verse: "He created the heavens without pillars that you see.",
    meaning: "Seven layers of cosmic order — each a realm of wonder, each a veil between the seen and the unseen.",
    x: 68, y: 72, depth: 3,
  },
  {
    id: 6, title: "Al-Ard", arabic: "الْأَرْض", subtitle: "The Earth",
    verse: "And the earth, He laid it out for the creatures.",
    meaning: "The dwelling place of humanity — where the Preserved Tablet unfolds into experience, test, and return.",
    x: 50, y: 88, depth: 4,
  },
];

const celestialDust = [...Array(50)].map((_, i) => ({
  left: (Math.sin(i * 1.618) * 50 + 50),
  top: (Math.cos(i * 2.718) * 50 + 50),
  size: 0.5 + ((i * 1.414) % 2),
  delay: ((i * 3.141) % 60) / 10,
  duration: 6 + ((i * 1.732) % 10),
  opacity: 0.08 + ((i * 2.236) % 20) / 100,
}));

const sacredStarPoints = [...Array(8)].map((_, i) => {
  const outer = (i * 45 - 90) * (Math.PI / 180);
  const inner = (i * 45 + 22.5 - 90) * (Math.PI / 180);
  return {
    outerX: 50 + 35 * Math.cos(outer),
    outerY: 50 + 35 * Math.sin(outer),
    innerX: 50 + 16 * Math.cos(inner),
    innerY: 50 + 16 * Math.sin(inner),
  };
});

export const PreservedTabletInterfaceDemoKimi: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      revelationLayers.forEach((_, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        const floatY = Math.sin((elapsed + i * 0.7) * 0.5) * 5;
        const floatX = Math.cos((elapsed + i * 0.5) * 0.4) * 3;
        el.style.transform = `translate(${floatX}px, ${floatY}px)`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="tablet-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .tablet-container {
          min-height: 100vh; width: 100%; background: #f8f6f2;
          background-image:
            radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 70%, rgba(255,255,255,0.5) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(250,248,245,1) 0%, #f8f6f2 100%);
          color: #2c2520; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center;
        }

        .celestial-dust { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .dust-mote {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%);
          animation: moteFloat linear infinite;
        }
        .dust-mote.white { background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%); }
        @keyframes moteFloat {
          0% { transform: translateY(0); opacity: var(--m-opacity); }
          50% { transform: translateY(-20px); opacity: calc(var(--m-opacity) * 2.5); }
          100% { transform: translateY(0); opacity: var(--m-opacity); }
        }

        .sacred-star {
          position: absolute; top: 22%; left: 50%;
          width: 320px; height: 320px; transform: translate(-50%,-50%);
          pointer-events: none; z-index: 1;
        }
        .star-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          border-radius: 50%; border: 1px solid rgba(212,175,55,0.08);
          animation: starSpin 70s linear infinite;
        }
        @keyframes starSpin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }

        .tablet-hud {
          position: relative; z-index: 20; width: 100%; max-width: 1200px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 3rem 0.5rem;
        }
        .tablet-brand { display: flex; align-items: center; gap: 1rem; }
        .tablet-icon {
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(212,175,55,0.15), rgba(255,255,255,0.5));
          border: 1px solid rgba(212,175,55,0.2);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Amiri', serif; font-size: 1.1rem; color: #b8942a;
        }
        .tablet-title { font-size: 1.05rem; font-weight: 500; color: #3d352b; letter-spacing: 0.02em; }
        .tablet-subtitle { font-size: 0.68rem; color: rgba(100,90,80,0.5); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.15rem; }
        .tablet-meta { text-align: right; }
        .tablet-meta-line { font-size: 0.7rem; color: rgba(140,130,115,0.5); }

        .layers-stage {
          position: relative; z-index: 10; width: 100%; max-width: 1000px;
          height: 600px; margin: 1rem 0 1rem;
        }

        .revelation-layer {
          position: absolute; transform: translate(-50%,-50%);
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(212,175,55,0.12);
          padding: 1.25rem 1.5rem; cursor: pointer; z-index: 15;
          transition: all 0.6s cubic-bezier(0.4,0,0.2,1);
          min-width: 190px; max-width: 250px; overflow: hidden;
          box-shadow: 0 4px 30px rgba(212,175,55,0.05), 0 1px 3px rgba(0,0,0,0.03);
        }
        .revelation-layer::before {
          content: ''; position: absolute; inset: 0; border-radius: 24px;
          background: radial-gradient(ellipse at 50% 0%, var(--layer-glow) 0%, transparent 55%);
          opacity: 0.6; pointer-events: none;
        }
        .revelation-layer::after {
          content: ''; position: absolute; top: 0; left: 15%; right: 15%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--layer-top), transparent);
          pointer-events: none;
        }
        .revelation-layer:hover {
          border-color: rgba(212,175,55,0.25);
          box-shadow: 0 8px 40px rgba(212,175,55,0.1), 0 1px 3px rgba(0,0,0,0.05);
        }
        .revelation-layer.expanded {
          min-width: 340px; max-width: 420px; z-index: 30;
          box-shadow: 0 12px 60px rgba(212,175,55,0.12), 0 2px 8px rgba(0,0,0,0.04);
        }

        .layer-header { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .layer-number { font-size: 0.6rem; color: rgba(180,160,120,0.5); letter-spacing: 0.1em; }
        .layer-arabic { font-family: 'Amiri', serif; font-size: 1.2rem; color: rgba(180,145,50,0.6); }
        .layer-title { font-size: 0.95rem; font-weight: 500; color: #3d352b; margin-top: 0.3rem; position: relative; z-index: 1; }
        .layer-subtitle { font-size: 0.72rem; color: rgba(140,130,115,0.6); margin-top: 0.15rem; position: relative; z-index: 1; }
        .layer-verse {
          font-family: 'Amiri', serif; font-size: 0.85rem; color: rgba(60,50,40,0.7);
          margin-top: 0.6rem; line-height: 1.5; text-align: right; direction: rtl;
          position: relative; z-index: 1; font-style: italic;
        }

        .layer-body {
          position: relative; z-index: 1; margin-top: 0.5rem;
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, margin-top 0.4s ease;
          opacity: 0;
        }
        .revelation-layer.expanded .layer-body { max-height: 200px; opacity: 1; margin-top: 0.75rem; }
        .layer-meaning { font-size: 0.78rem; color: rgba(80,70,60,0.65); line-height: 1.6; }
        .layer-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent); margin: 0.6rem 0; }
        .layer-depth { display: flex; align-items: center; gap: 0.5rem; }
        .depth-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(212,175,55,0.4); }
        .depth-label { font-size: 0.6rem; color: rgba(140,130,115,0.5); letter-spacing: 0.08em; text-transform: uppercase; }

        .tablet-footer {
          position: relative; z-index: 20; width: 100%; text-align: center;
          padding: 1rem 2rem 2.5rem;
        }
        .footer-calligraphy { font-family: 'Amiri', serif; font-size: 1.1rem; color: rgba(180,145,50,0.35); }
        .footer-trans { font-size: 0.6rem; color: rgba(140,130,115,0.35); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }

        @media (max-width: 900px) {
          .layers-stage { height: 680px; transform: scale(0.85); }
          .tablet-hud { padding: 1.5rem 1.5rem 0.5rem; }
          .sacred-star { transform: translate(-50%,-50%) scale(0.85); }
        }
        @media (max-width: 600px) {
          .layers-stage { height: 780px; transform: scale(0.7); }
          .revelation-layer { padding: 1rem 1.25rem; min-width: 160px; max-width: 200px; }
          .revelation-layer.expanded { min-width: 280px; max-width: 340px; }
        }
      `}</style>

      <div className="celestial-dust">
        {celestialDust.map((d, i) => (
          <div
            key={`m-${i}`}
            className={`dust-mote ${i % 3 === 0 ? "white" : ""}`}
            style={{
              left: `${d.left}%`, top: `${d.top}%`,
              width: d.size, height: d.size,
              animationDelay: `${d.delay}s`, animationDuration: `${d.duration}s`,
              ["--m-opacity" as string]: d.opacity,
            }}
          />
        ))}
      </div>

      <div className="sacred-star">
        <div className="star-ring" style={{ width: 300, height: 300 }} />
        <div className="star-ring" style={{ width: 260, height: 260, animationDirection: "reverse", animationDuration: "50s" }} />
        <div className="star-ring" style={{ width: 220, height: 220, animationDuration: "40s" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}>
          <polygon
            points={sacredStarPoints.map((p) => `${p.outerX},${p.outerY}`).join(" ")}
            fill="none"
            stroke="rgba(180,145,50,0.5)"
            strokeWidth="0.5"
          />
          <polygon
            points={sacredStarPoints.map((p) => `${p.innerX},${p.innerY}`).join(" ")}
            fill="none"
            stroke="rgba(180,145,50,0.3)"
            strokeWidth="0.3"
          />
        </svg>
      </div>

      <div className="tablet-hud">
        <div className="tablet-brand">
          <div className="tablet-icon">لوح</div>
          <div>
            <div className="tablet-title">The Preserved Tablet</div>
            <div className="tablet-subtitle">Sacred Knowledge Interface</div>
          </div>
        </div>
        <div className="tablet-meta">
          <div className="tablet-meta-line">6 Layers of Revelation</div>
          <div className="tablet-meta-line">Eternal Knowledge System</div>
        </div>
      </div>

      <div className="layers-stage">
        {revelationLayers.map((layer, idx) => {
          const isExpanded = expandedId === layer.id;
          const isHovered = hoveredId === layer.id;
          const dimmed = expandedId !== null && expandedId !== layer.id;
          return (
            <div
              key={layer.id}
              ref={(el) => { layerRefs.current[idx] = el; }}
              className={`revelation-layer ${isExpanded ? "expanded" : ""}`}
              style={{
                left: `${layer.x}%`, top: `${layer.y}%`,
                ["--layer-glow" as string]: isExpanded || isHovered ? "rgba(212,175,55,0.2)" : "transparent",
                ["--layer-top" as string]: isExpanded || isHovered ? "rgba(212,175,55,0.4)" : "rgba(212,175,55,0.1)",
                opacity: dimmed ? 0.35 : 1,
              }}
              onClick={() => setExpandedId(isExpanded ? null : layer.id)}
              onMouseEnter={() => setHoveredId(layer.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="layer-header">
                <span className="layer-number">Layer {layer.depth}</span>
                <span className="layer-arabic">{layer.arabic}</span>
              </div>
              <div className="layer-title">{layer.title}</div>
              <div className="layer-subtitle">{layer.subtitle}</div>
              <div className="layer-verse">{layer.verse}</div>
              <div className="layer-body">
                <div className="layer-meaning">{layer.meaning}</div>
                <div className="layer-divider" />
                <div className="layer-depth">
                  {[...Array(layer.depth)].map((_, i) => (
                    <div key={i} className="depth-dot" />
                  ))}
                  <span className="depth-label">Depth {layer.depth}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="tablet-footer">
        <div className="footer-calligraphy">بَلْ هُوَ قُرْآنٌ مَجِيدٌ فِي لَوْحٍ مَحْفُوظٍ</div>
        <div className="footer-trans">Nay, it is a glorious Quran on a preserved tablet</div>
      </div>
    </div>
  );
};
