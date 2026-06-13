"use client";

import React, { useEffect, useRef, useState } from "react";

interface Specimen {
  id: number;
  title: string;
  binomial: string;
  zone: string;
  depth: string;
  bioluminescence: string;
  population: string;
  description: string;
  orbitRadius: number;
  orbitDuration: number;
}

const specimens: Specimen[] = [
  {
    id: 1,
    title: "Research Core",
    binomial: "NAUTILUS-IX",
    zone: "Command",
    depth: "—",
    bioluminescence: "—",
    population: "—",
    description: "The thinking heart of the vessel. All sonar, scan, and life-support telemetry converge here in real time.",
    orbitRadius: 0,
    orbitDuration: 0,
  },
  {
    id: 2,
    title: "Glass Squid",
    binomial: "Teuthowenia pellucida",
    zone: "Mesopelagic",
    depth: "640m",
    bioluminescence: "Photophore",
    population: "Dense",
    description: "A near-transparent cephalopod that hides in plain sight, lighting twin organs beneath its eyes to erase its own shadow.",
    orbitRadius: 160,
    orbitDuration: 28,
  },
  {
    id: 3,
    title: "Lantern Drifter",
    binomial: "Aequorea abyssa",
    zone: "Bathypelagic",
    depth: "1,820m",
    bioluminescence: "Pulsed",
    population: "Sparse",
    description: "A medusa that beats slow rings of cyan light to lure prey and signal the colony across the lightless deep.",
    orbitRadius: 200,
    orbitDuration: 36,
  },
  {
    id: 4,
    title: "Vent Crawler",
    binomial: "Riftia magna",
    zone: "Hydrothermal",
    depth: "2,510m",
    bioluminescence: "None",
    population: "Colony",
    description: "Tube fauna thriving on chemosynthesis beside scalding vents — life that needs no sun at all.",
    orbitRadius: 138,
    orbitDuration: 22,
  },
  {
    id: 5,
    title: "Abyssal Angler",
    binomial: "Melanocetus profundis",
    zone: "Abyssopelagic",
    depth: "3,400m",
    bioluminescence: "Esca lure",
    population: "Solitary",
    description: "A patient ambush predator dangling a glowing bacterial lure into the eternal dark.",
    orbitRadius: 182,
    orbitDuration: 32,
  },
  {
    id: 6,
    title: "Comb Veil",
    binomial: "Ctenophora iris",
    zone: "Mesopelagic",
    depth: "780m",
    bioluminescence: "Refractive",
    population: "Drifting",
    description: "Rows of beating cilia scatter the scan light into shifting rainbows as it tumbles through the current.",
    orbitRadius: 118,
    orbitDuration: 18,
  },
  {
    id: 7,
    title: "Ghost Octopod",
    binomial: "Grimpoteuthis nivea",
    zone: "Hadopelagic",
    depth: "4,200m",
    bioluminescence: "Faint",
    population: "Rare",
    description: "A finned 'dumbo' octopus flapping through the deepest plains, mapped only twice before this survey.",
    orbitRadius: 222,
    orbitDuration: 40,
  },
  {
    id: 8,
    title: "Siphon Chain",
    binomial: "Praya dubia",
    zone: "Bathypelagic",
    depth: "1,100m",
    bioluminescence: "Cascading",
    population: "Linked",
    description: "A colonial siphonophore stretching meters long, each unit firing light down the chain in a rolling wave.",
    orbitRadius: 100,
    orbitDuration: 16,
  },
];

const planktonParticles = [...Array(70)].map((_, i) => ({
  left: Math.sin(i * 1.618) * 50 + 50,
  top: Math.cos(i * 2.718) * 50 + 50,
  size: 0.5 + ((i * 1.414) % 3),
  delay: ((i * 3.14159) % 60) / 10,
  duration: 6 + ((i * 1.732) % 10),
  opacity: 0.08 + ((i * 2.236) % 25) / 100,
}));

const sonarRings = [
  { size: 100, opacity: 0.12, duration: 6 },
  { size: 150, opacity: 0.08, duration: 6 },
  { size: 200, opacity: 0.05, duration: 6 },
];

export const DeepOceanExplorationDemoClaudeOpus: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      specimens.forEach((s, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        if (s.orbitRadius === 0) {
          const pulse = 1 + Math.sin(elapsed * 0.7) * 0.025;
          el.style.transform = `translate(-50%,-50%) scale(${pulse})`;
          return;
        }
        const angle = ((elapsed / s.orbitDuration) * 360 + i * 45) % 360;
        const rad = (angle * Math.PI) / 180;
        // gentle current sway layered on the orbit
        const sway = Math.sin(elapsed * 0.5 + i) * 8;
        const x = s.orbitRadius * Math.cos(rad) + sway;
        const y = s.orbitRadius * Math.sin(rad) + Math.cos(elapsed * 0.4 + i) * 6;
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="ocean-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .ocean-container {
          min-height: 100vh; width: 100%; background: #020812;
          background-image:
            radial-gradient(ellipse at 40% 25%, rgba(34,211,238,0.05) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 75%, rgba(56,189,248,0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 18% 82%, rgba(45,212,191,0.03) 0%, transparent 42%),
            radial-gradient(circle at 50% 45%, rgba(3,12,26,1) 0%, #010509 100%);
          color: #e2eef5; font-family: 'Space Grotesk', sans-serif;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; align-items: center;
        }

        /* drifting plankton / marine snow */
        .plankton-layer { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .plankton {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%);
          animation: planktonDrift linear infinite;
        }
        .plankton.teal { background: radial-gradient(circle, rgba(45,212,191,0.35) 0%, transparent 70%); }
        .plankton.pearl { background: radial-gradient(circle, rgba(226,238,245,0.3) 0%, transparent 70%); }
        @keyframes planktonDrift {
          0% { transform: translateY(0) translateX(0); opacity: var(--p-opacity); }
          50% { transform: translateY(-28px) translateX(12px); opacity: calc(var(--p-opacity) * 2.6); }
          100% { transform: translateY(0) translateX(0); opacity: var(--p-opacity); }
        }

        /* slow caustic light shafts */
        .caustics { position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0.5;
          background: linear-gradient(105deg, transparent 40%, rgba(56,189,248,0.04) 50%, transparent 60%);
          background-size: 200% 200%; animation: causticMove 16s ease-in-out infinite; }
        @keyframes causticMove { 0%,100% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } }

        .ocean-hud {
          position: relative; z-index: 20; width: 100%; max-width: 1200px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 3rem 0.5rem;
        }
        .ocean-brand { display: flex; align-items: center; gap: 1rem; }
        .ocean-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(34,211,238,0.2), rgba(45,212,191,0.1));
          border: 1px solid rgba(34,211,238,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; color: #67e8f9;
        }
        .ocean-title { font-size: 1.05rem; font-weight: 500; color: #f0f7fb; letter-spacing: 0.02em; }
        .ocean-subtitle { font-size: 0.68rem; color: rgba(148,180,196,0.55); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.15rem; }
        .ocean-meta { display: flex; gap: 2rem; }
        .ocean-stat { text-align: center; }
        .ocean-stat-value { font-size: 0.9rem; font-weight: 600; color: #22d3ee; }
        .ocean-stat-label { font-size: 0.6rem; color: rgba(148,180,196,0.45); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.1rem; }

        .reef-stage {
          position: relative; z-index: 10; width: 100%; max-width: 900px;
          height: 600px; margin: 1rem 0;
          display: flex; align-items: center; justify-content: center;
        }

        .core-node {
          position: absolute; transform: translate(-50%,-50%);
          width: 140px; height: 140px; border-radius: 50%;
          background: radial-gradient(circle, rgba(34,211,238,0.16) 0%, rgba(45,212,191,0.05) 50%, transparent 70%);
          border: 1px solid rgba(34,211,238,0.22);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 20;
        }
        .core-glyph { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-weight: 600; color: rgba(103,232,249,0.75); line-height: 1; }
        .core-label { font-size: 0.55rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(148,180,196,0.55); margin-top: 0.3rem; }

        /* expanding sonar pulse */
        .sonar-ring {
          position: absolute; top: 50%; left: 50%;
          border-radius: 50%; border: 1px solid rgba(34,211,238,0.3);
          animation: sonarPulse ease-out infinite;
        }
        @keyframes sonarPulse {
          0% { transform: translate(-50%,-50%) scale(0.4); opacity: 0.6; }
          100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
        }

        .specimen-node {
          position: absolute; transform: translate(-50%,-50%);
          left: 50%; top: 50%;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012));
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 1rem 1.25rem; cursor: pointer; z-index: 15;
          transition: min-width 0.5s cubic-bezier(0.4,0,0.2,1), max-width 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease;
          min-width: 165px; max-width: 215px; overflow: hidden;
        }
        .specimen-node::before {
          content: ''; position: absolute; inset: 0; border-radius: 22px;
          background: radial-gradient(ellipse at 50% 0%, var(--node-glow) 0%, transparent 55%);
          opacity: 0.5; pointer-events: none;
        }
        .specimen-node::after {
          content: ''; position: absolute; top: 0; left: 12%; right: 12%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--node-top), transparent);
          pointer-events: none;
        }
        .specimen-node:hover {
          border-color: rgba(34,211,238,0.28);
          box-shadow: 0 8px 40px rgba(34,211,238,0.1);
        }
        .specimen-node.expanded {
          min-width: 300px; max-width: 380px; z-index: 30;
          box-shadow: 0 12px 60px rgba(34,211,238,0.14);
        }

        .node-header { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
        .node-zone { font-size: 0.55rem; color: rgba(148,180,196,0.5); letter-spacing: 0.1em; text-transform: uppercase; }
        .node-binomial { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.9rem; color: rgba(103,232,249,0.6); }
        .node-title { font-size: 0.9rem; font-weight: 500; color: #f0f7fb; margin-top: 0.3rem; position: relative; z-index: 1; }
        .node-stats { display: flex; gap: 0.8rem; margin-top: 0.4rem; position: relative; z-index: 1; }
        .node-stat { display: flex; flex-direction: column; }
        .node-stat-value { font-size: 0.72rem; font-weight: 600; color: #2dd4bf; }
        .node-stat-label { font-size: 0.55rem; color: rgba(148,180,196,0.5); text-transform: uppercase; letter-spacing: 0.06em; }

        .node-body {
          position: relative; z-index: 1;
          max-height: 0; overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, margin-top 0.4s ease;
          opacity: 0;
        }
        .specimen-node.expanded .node-body { max-height: 220px; opacity: 1; margin-top: 0.75rem; }
        .node-desc { font-size: 0.76rem; color: rgba(226,238,245,0.7); line-height: 1.5; }
        .node-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(34,211,238,0.12), transparent); margin: 0.6rem 0; }
        .node-metrics { display: flex; gap: 1rem; }
        .node-metric { display: flex; flex-direction: column; }
        .node-metric-value { font-size: 0.72rem; font-weight: 600; color: #22d3ee; }
        .node-metric-label { font-size: 0.55rem; color: rgba(148,180,196,0.45); text-transform: uppercase; letter-spacing: 0.06em; }

        .ocean-footer {
          position: relative; z-index: 20; width: 100%; text-align: center;
          padding: 1rem 2rem 2.5rem;
        }
        .footer-quote { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.05rem; color: rgba(34,211,238,0.4); }
        .footer-coord { font-size: 0.6rem; color: rgba(148,180,196,0.35); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }

        @media (max-width: 900px) {
          .reef-stage { height: 650px; transform: scale(0.85); }
          .ocean-hud { padding: 1.5rem 1.5rem 0.5rem; }
          .ocean-meta { gap: 1.2rem; }
        }
        @media (max-width: 600px) {
          .reef-stage { height: 750px; transform: scale(0.7); }
          .specimen-node { padding: 0.875rem 1rem; min-width: 145px; max-width: 185px; }
          .specimen-node.expanded { min-width: 260px; max-width: 320px; }
          .core-node { width: 110px; height: 110px; }
        }
      `}</style>

      <div className="caustics" />

      <div className="plankton-layer">
        {planktonParticles.map((p, i) => (
          <div
            key={`p-${i}`}
            className={`plankton ${i % 4 === 0 ? "teal" : i % 5 === 0 ? "pearl" : ""}`}
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

      <div className="ocean-hud">
        <div className="ocean-brand">
          <div className="ocean-icon">🜄</div>
          <div>
            <div className="ocean-title">Abyssal Research Companion</div>
            <div className="ocean-subtitle">Deep Ocean Exploration · 2050</div>
          </div>
        </div>
        <div className="ocean-meta">
          <div className="ocean-stat">
            <div className="ocean-stat-value">4,200m</div>
            <div className="ocean-stat-label">Depth</div>
          </div>
          <div className="ocean-stat">
            <div className="ocean-stat-value">7</div>
            <div className="ocean-stat-label">Specimens</div>
          </div>
          <div className="ocean-stat">
            <div className="ocean-stat-value">418 bar</div>
            <div className="ocean-stat-label">Pressure</div>
          </div>
        </div>
      </div>

      <div className="reef-stage">
        <div className="core-node">
          <span className="core-glyph">∿</span>
          <span className="core-label">Nautilus Core</span>
        </div>
        {sonarRings.map((ring, i) => (
          <div
            key={`s-${i}`}
            className="sonar-ring"
            style={{
              width: ring.size,
              height: ring.size,
              borderColor: `rgba(34,211,238,${ring.opacity})`,
              animationDuration: `${ring.duration}s`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}

        {specimens.map((s, idx) => {
          const isExpanded = expandedId === s.id;
          const isHovered = hoveredId === s.id;
          const dimmed = expandedId !== null && expandedId !== s.id && s.id !== 1;
          return (
            <div
              key={s.id}
              ref={(el) => {
                nodeRefs.current[idx] = el;
              }}
              className={`specimen-node ${isExpanded ? "expanded" : ""}`}
              style={{
                ["--node-glow" as string]:
                  isExpanded || isHovered ? "rgba(34,211,238,0.28)" : "transparent",
                ["--node-top" as string]:
                  isExpanded || isHovered ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.08)",
                opacity: dimmed ? 0.3 : 1,
              }}
              onClick={() => setExpandedId(isExpanded ? null : s.id)}
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="node-header">
                <span className="node-zone">{s.zone}</span>
                <span className="node-binomial">{s.binomial}</span>
              </div>
              <div className="node-title">{s.title}</div>
              <div className="node-stats">
                <div className="node-stat">
                  <span className="node-stat-value">{s.depth}</span>
                  <span className="node-stat-label">Depth</span>
                </div>
                <div className="node-stat">
                  <span className="node-stat-value">{s.bioluminescence}</span>
                  <span className="node-stat-label">Biolum</span>
                </div>
                <div className="node-stat">
                  <span className="node-stat-value">{s.population}</span>
                  <span className="node-stat-label">Pop</span>
                </div>
              </div>
              <div className="node-body">
                <div className="node-desc">{s.description}</div>
                <div className="node-divider" />
                <div className="node-metrics">
                  <div className="node-metric">
                    <span className="node-metric-value">{s.depth}</span>
                    <span className="node-metric-label">Recorded Depth</span>
                  </div>
                  <div className="node-metric">
                    <span className="node-metric-value">{s.zone}</span>
                    <span className="node-metric-label">Zone</span>
                  </div>
                  <div className="node-metric">
                    <span className="node-metric-value">{s.bioluminescence}</span>
                    <span className="node-metric-label">Bioluminescence</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ocean-footer">
        <div className="footer-quote">&ldquo;In the deepest dark, life still chooses to glow.&rdquo;</div>
        <div className="footer-coord">11°22&apos;N 142°35&apos;E · Challenger Deep Survey</div>
      </div>
    </div>
  );
};
