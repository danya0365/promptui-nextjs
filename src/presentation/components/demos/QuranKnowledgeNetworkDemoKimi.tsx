"use client";

import React, { useEffect, useRef, useState } from "react";

interface VerseNode {
  id: number;
  surah: string;
  ayah: number;
  arabic: string;
  translation: string;
  theme: string;
  related: number[];
  x: number;
  y: number;
  glow: string;
}

const verseNodes: VerseNode[] = [
  {
    id: 1,
    surah: "Al-Baqarah",
    ayah: 255,
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    translation:
      "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence.",
    theme: "Tawhid",
    related: [2, 3, 5],
    x: 50,
    y: 35,
    glow: "rgba(212,175,55,0.35)",
  },
  {
    id: 2,
    surah: "Al-Ikhlas",
    ayah: 1,
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    translation: "Say: He is Allah, the One.",
    theme: "Oneness",
    related: [1, 4],
    x: 30,
    y: 25,
    glow: "rgba(6,182,212,0.3)",
  },
  {
    id: 3,
    surah: "Ar-Rahman",
    ayah: 13,
    arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    translation: "So which of the favors of your Lord would you deny?",
    theme: "Gratitude",
    related: [1, 5, 6],
    x: 70,
    y: 28,
    glow: "rgba(16,185,129,0.3)",
  },
  {
    id: 4,
    surah: "Al-Hashr",
    ayah: 24,
    arabic: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
    translation: "He is Allah, the Creator, the Inventor, the Fashioner.",
    theme: "Creation",
    related: [2, 6],
    x: 22,
    y: 55,
    glow: "rgba(6,182,212,0.3)",
  },
  {
    id: 5,
    surah: "Al-Baqarah",
    ayah: 286,
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation:
      "Allah does not charge a soul except [with that within] its capacity.",
    theme: "Mercy",
    related: [1, 3],
    x: 75,
    y: 50,
    glow: "rgba(212,175,55,0.3)",
  },
  {
    id: 6,
    surah: "Al-Asr",
    ayah: 1,
    arabic: "وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
    translation: "By time, indeed mankind is in loss.",
    theme: "Time",
    related: [3, 4, 7],
    x: 48,
    y: 68,
    glow: "rgba(139,92,246,0.3)",
  },
  {
    id: 7,
    surah: "Al-Mulk",
    ayah: 2,
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ",
    translation: "He who created death and life to test you.",
    theme: "Purpose",
    related: [6, 8],
    x: 65,
    y: 72,
    glow: "rgba(212,175,55,0.3)",
  },
  {
    id: 8,
    surah: "Ya-Sin",
    ayah: 82,
    arabic: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا",
    translation: "His command is only when He intends a thing.",
    theme: "Divine Will",
    related: [4, 7],
    x: 35,
    y: 75,
    glow: "rgba(6,182,212,0.3)",
  },
];

const particleSeeds = [...Array(50)].map((_, i) => ({
  left: Math.sin(i * 1.618) * 50 + 50,
  top: Math.cos(i * 2.718) * 50 + 50,
  size: 1 + ((i * 1.414) % 2.5),
  delay: ((i * 3.14159) % 40) / 10,
  duration: 5 + ((i * 1.732) % 8),
  opacity: 0.1 + ((i * 2.236) % 30) / 100,
}));

const sacredGeometryPoints = [...Array(12)].map((_, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  return { x: 50 + 42 * Math.cos(angle), y: 50 + 42 * Math.sin(angle) };
});

export const QuranKnowledgeNetworkDemoKimi: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      verseNodes.forEach((node, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        const driftX = Math.sin((elapsed + i) * 0.4) * 8;
        const driftY = Math.cos((elapsed + i * 0.7) * 0.3) * 6;
        el.style.transform = `translate(${driftX}px, ${driftY}px)`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const getConnections = (nodeId: number) => {
    const node = verseNodes.find((n) => n.id === nodeId);
    if (!node) return [];
    return node.related
      .map((rid) => verseNodes.find((n) => n.id === rid))
      .filter(Boolean) as VerseNode[];
  };

  const activeConnections =
    expandedId !== null ? getConnections(expandedId) : [];
  const hoverConnections =
    hoveredId !== null && expandedId === null ? getConnections(hoveredId) : [];
  const visibleConnections =
    activeConnections.length > 0 ? activeConnections : hoverConnections;
  const activeNode =
    expandedId !== null ? verseNodes.find((n) => n.id === expandedId) : null;

  return (
    <div className="quran-network-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .quran-network-container {
          min-height: 100vh; width: 100%; background: #030508;
          background-image:
            radial-gradient(ellipse at 25% 30%, rgba(212,175,55,0.03) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 70%, rgba(6,182,212,0.02) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(8,14,24,1) 0%, #030508 100%);
          color: #e8ecf1; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center;
        }

        .particle-layer { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .network-particle {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%);
          animation: netParticleFloat linear infinite;
        }
        .network-particle.cyan { background: radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%); }
        @keyframes netParticleFloat {
          0% { transform: translateY(0); opacity: var(--np-opacity); }
          50% { transform: translateY(-25px); opacity: calc(var(--np-opacity) * 2); }
          100% { transform: translateY(0); opacity: var(--np-opacity); }
        }

        .sacred-ring {
          position: absolute; top: 50%; left: 50%;
          width: 500px; height: 500px; transform: translate(-50%,-50%);
          pointer-events: none; z-index: 1;
        }
        .sacring-outer {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.06);
          animation: sacredSpin 80s linear infinite;
        }
        .sacring-inner {
          position: absolute; inset: 40px; border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.05);
          animation: sacredSpin 60s linear infinite reverse;
        }
        .sacring-hex {
          position: absolute; inset: 80px; border-radius: 50%;
          border: 1px solid rgba(16,185,129,0.04);
        }
        @keyframes sacredSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .quran-hud {
          position: relative; z-index: 20; width: 100%; max-width: 1200px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 3rem 1rem;
        }
        .quran-brand { display: flex; align-items: center; gap: 1rem; }
        .quran-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(212,175,55,0.2), rgba(6,182,212,0.1));
          border: 1px solid rgba(212,175,55,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Amiri', serif; font-size: 1.1rem; color: #d4af37;
        }
        .quran-title { font-size: 1.05rem; font-weight: 500; letter-spacing: 0.02em; color: #f1f5f9; }
        .quran-subtitle { font-size: 0.7rem; color: rgba(148,163,184,0.7); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.15rem; }
        .quran-meta { text-align: right; }
        .quran-meta-count { font-size: 0.75rem; color: rgba(148,163,184,0.5); }
        .quran-meta-label { font-size: 0.65rem; color: rgba(148,163,184,0.4); letter-spacing: 0.1em; text-transform: uppercase; }

        .network-stage {
          position: relative; z-index: 10; width: 100%; max-width: 1000px;
          height: 600px; margin: 1rem 0;
        }

        .connection-line {
          position: absolute; height: 1px; transform-origin: left center;
          background: linear-gradient(90deg, rgba(212,175,55,0.4), rgba(6,182,212,0.2), transparent);
          pointer-events: none; z-index: 5;
          animation: linePulse 3s ease-in-out infinite;
        }
        @keyframes linePulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }

        .verse-node {
          position: absolute; transform: translate(-50%,-50%);
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 1rem 1.25rem; cursor: pointer; z-index: 15;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
          min-width: 180px; max-width: 240px;
        }
        .verse-node::before {
          content: ''; position: absolute; inset: 0; border-radius: 20px;
          background: radial-gradient(ellipse at 50% 0%, var(--node-glow) 0%, transparent 60%);
          opacity: 0.5; pointer-events: none;
        }
        .verse-node:hover {
          border-color: rgba(212,175,55,0.3);
          box-shadow: 0 0 30px rgba(212,175,55,0.1);
        }
        .verse-node.expanded {
          min-width: 320px; max-width: 400px;
          border-color: rgba(212,175,55,0.4);
          box-shadow: 0 0 50px rgba(212,175,55,0.15), 0 0 100px rgba(6,182,212,0.05);
        }

        .node-header { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .node-surah { font-size: 0.65rem; color: rgba(212,175,55,0.7); letter-spacing: 0.1em; text-transform: uppercase; }
        .node-ayah { font-size: 0.6rem; color: rgba(148,163,184,0.5); }
        .node-arabic {
          font-family: 'Amiri', serif; font-size: 0.95rem; color: rgba(255,255,255,0.85);
          margin-top: 0.5rem; line-height: 1.6; position: relative; z-index: 1;
          text-align: right; direction: rtl;
        }
        .node-theme {
          display: inline-block; margin-top: 0.5rem; padding: 0.2rem 0.5rem;
          border-radius: 6px; font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase;
          background: rgba(6,182,212,0.1); color: rgba(6,182,212,0.7); border: 1px solid rgba(6,182,212,0.15);
          position: relative; z-index: 1;
        }

        .node-body {
          position: relative; z-index: 1; margin-top: 0.75rem;
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
          opacity: 0;
        }
        .verse-node.expanded .node-body { max-height: 300px; opacity: 1; margin-top: 1rem; }

        .node-translation { font-size: 0.8rem; color: rgba(226,232,240,0.7); line-height: 1.6; font-style: italic; }
        .node-tafsir { margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.05); }
        .tafsir-label { font-size: 0.6rem; color: rgba(212,175,55,0.6); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.4rem; }
        .tafsir-text { font-size: 0.75rem; color: rgba(148,163,184,0.7); line-height: 1.5; }
        .node-related { margin-top: 0.75rem; display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .related-tag { font-size: 0.6rem; padding: 0.2rem 0.5rem; border-radius: 4px; background: rgba(255,255,255,0.04); color: rgba(148,163,184,0.6); border: 1px solid rgba(255,255,255,0.06); }

        .network-footer {
          position: relative; z-index: 20; width: 100%; text-align: center;
          padding: 1.5rem 2rem 2.5rem;
        }
        .footer-verse { font-family: 'Amiri', serif; font-size: 1rem; color: rgba(212,175,55,0.4); }
        .footer-meaning { font-size: 0.6rem; color: rgba(148,163,184,0.35); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }

        @media (max-width: 900px) {
          .network-stage { height: 700px; transform: scale(0.85); }
          .quran-hud { padding: 1.5rem 1.5rem 0.5rem; }
        }
        @media (max-width: 600px) {
          .network-stage { height: 800px; transform: scale(0.7); }
          .verse-node { min-width: 150px; padding: 0.75rem 1rem; }
          .verse-node.expanded { min-width: 260px; }
        }
      `}</style>

      <div className="particle-layer">
        {particleSeeds.map((p, i) => (
          <div
            key={`np-${i}`}
            className={`network-particle ${i % 3 === 0 ? "cyan" : ""}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              ["--np-opacity" as string]: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="sacred-ring">
        <div className="sacring-outer" />
        <div className="sacring-inner" />
        <div className="sacring-hex" />
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.06,
          }}
        >
          <polygon
            points={sacredGeometryPoints.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="rgba(212,175,55,0.5)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="quran-hud">
        <div className="quran-brand">
          <div className="quran-icon">قرآن</div>
          <div>
            <div className="quran-title">Quran Knowledge Network</div>
            <div className="quran-subtitle">
              Holographic Intelligence System
            </div>
          </div>
        </div>
        <div className="quran-meta">
          <div className="quran-meta-count">
            8 Active Nodes • 14 Connections
          </div>
          <div className="quran-meta-label">Living Knowledge Graph</div>
        </div>
      </div>

      <div className="network-stage">
        {visibleConnections.map((conn) => {
          const from = activeNode || verseNodes.find((n) => n.id === hoveredId);
          if (!from) return null;
          const dx = conn.x - from.x;
          const dy = conn.y - from.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          return (
            <div
              key={`conn-${from.id}-${conn.id}`}
              className="connection-line"
              style={{
                left: `${from.x}%`,
                top: `${from.y}%`,
                width: `${length}%`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}

        {verseNodes.map((node, idx) => {
          const isExpanded = expandedId === node.id;
          const isHovered = hoveredId === node.id;
          const isConnected = visibleConnections.some((c) => c.id === node.id);
          const isSource =
            activeNode?.id === node.id ||
            (hoveredId === node.id && expandedId === null);
          const showGlow = isExpanded || isHovered || isConnected || isSource;

          return (
            <div
              key={node.id}
              ref={(el) => {
                nodeRefs.current[idx] = el;
              }}
              className={`verse-node ${isExpanded ? "expanded" : ""}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                ["--node-glow" as string]: showGlow ? node.glow : "transparent",
                opacity:
                  expandedId !== null && !isExpanded && !isConnected ? 0.35 : 1,
              }}
              onClick={() => setExpandedId(isExpanded ? null : node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="node-header">
                <span className="node-surah">{node.surah}</span>
                <span className="node-ayah">
                  {node.ayah}:{node.ayah}
                </span>
              </div>
              <div className="node-arabic">{node.arabic}</div>
              <span className="node-theme">{node.theme}</span>
              <div className="node-body">
                <div className="node-translation">{node.translation}</div>
                <div className="node-tafsir">
                  <div className="tafsir-label">Contextual Knowledge</div>
                  <div className="tafsir-text">
                    This verse connects to the broader theme of{" "}
                    {node.theme.toLowerCase()} within the Quranic narrative. The
                    holographic network reveals {node.related.length} direct
                    relationships to other verses, forming a living map of
                    divine knowledge.
                  </div>
                </div>
                <div className="node-related">
                  {node.related.map((rid) => {
                    const r = verseNodes.find((n) => n.id === rid);
                    return r ? (
                      <span key={rid} className="related-tag">
                        {r.surah} {r.ayah}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="network-footer">
        <div className="footer-verse">
          وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ
          لِلْمُؤْمِنِينَ
        </div>
        <div className="footer-meaning">
          And We send down of the Quran that which is healing and mercy for the
          believers
        </div>
      </div>
    </div>
  );
};
