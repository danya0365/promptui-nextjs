"use client";

import React, { useMemo, useState } from "react";

interface Stratum {
  key: string;
  name: string;
  height: string;
  species: { emoji: string; name: string }[];
  note: string;
}

const STRATA: Stratum[] = [
  {
    key: "emergent",
    name: "Emergent Layer",
    height: "45–60 m",
    species: [
      { emoji: "🦅", name: "Harpy Eagle" },
      { emoji: "🦋", name: "Blue Morpho" },
      { emoji: "🐝", name: "Orchid Bee" },
    ],
    note: "Above the roof of the world — only the tallest giants and the boldest wings reach this far into the light.",
  },
  {
    key: "canopy",
    name: "The Canopy",
    height: "20–45 m",
    species: [
      { emoji: "🐒", name: "Spider Monkey" },
      { emoji: "🦜", name: "Scarlet Macaw" },
      { emoji: "🦥", name: "Three-toed Sloth" },
    ],
    note: "A green ceiling humming with life. Most of the forest's creatures never touch the ground at all.",
  },
  {
    key: "understory",
    name: "Understory",
    height: "5–20 m",
    species: [
      { emoji: "🐆", name: "Margay" },
      { emoji: "🐸", name: "Glass Frog" },
      { emoji: "🦎", name: "Anole" },
    ],
    note: "Dim, still, and patient. Broad leaves catch the few coins of light that fall through the canopy.",
  },
  {
    key: "floor",
    name: "Forest Floor",
    height: "0–5 m",
    species: [
      { emoji: "🐜", name: "Leafcutter Ants" },
      { emoji: "🍄", name: "Bioluminescent Fungi" },
      { emoji: "🐛", name: "Forest Beetles" },
    ],
    note: "Where everything returns and begins again. Decay here is not an ending — it is the soil of the next green thing.",
  },
];

export const LivingRainforestDemoClaudeOpus: React.FC = () => {
  const [stratumKey, setStratumKey] = useState("canopy");
  const [humidity, setHumidity] = useState(74);
  const [leaves, setLeaves] = useState(2);
  const [dewy, setDewy] = useState(false);

  const stratum = STRATA.find((s) => s.key === stratumKey) ?? STRATA[1];

  const mist = () => {
    setHumidity((h) => Math.min(99, h + 5));
    setDewy(true);
  };
  const tend = () => setLeaves((l) => Math.min(7, l + 1));

  // deterministic dappled light spots
  const dapples = useMemo(
    () =>
      [...Array(7)].map((_, i) => ({
        left: (Math.sin(i * 1.9) * 42 + 50),
        top: (Math.cos(i * 1.3) * 38 + 35),
        size: 90 + ((i * 47) % 120),
        delay: (i * 1.1) % 7,
      })),
    []
  );

  return (
    <div className="rf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Nunito+Sans:wght@400;600;700&display=swap');

        .rf-root {
          min-height: 100vh; width: 100%;
          background:
            radial-gradient(ellipse at 50% 0%, #4a7a3a 0%, #2f5a30 38%, #1d3d24 78%, #142e1c 100%);
          color: #eef3df;
          font-family: 'Nunito Sans', sans-serif;
          position: relative; overflow: hidden;
          padding: 1.8rem;
        }

        /* dappled light gobos */
        .dapples { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .dapple {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(220,240,160,0.22), transparent 70%);
          filter: blur(6px);
          animation: glimmer ease-in-out infinite;
        }
        @keyframes glimmer { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.85; transform: scale(1.12); } }

        /* big swaying leaf silhouettes at edges */
        .leaf-bg { position: absolute; font-size: 9rem; opacity: 0.16; z-index: 0; pointer-events: none; transform-origin: top center; }
        .leaf-bg.sway { animation: sway 7s ease-in-out infinite; }
        @keyframes sway { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
        .leaf-tl { top: -30px; left: -20px; } .leaf-tr { top: -40px; right: -10px; animation-delay: 1.5s; }
        .leaf-bl { bottom: -50px; left: 10px; animation-delay: 0.8s; } .leaf-br { bottom: -40px; right: 0; animation-delay: 2.2s; }

        .rf-wrap { position: relative; z-index: 3; max-width: 940px; margin: 0 auto; }

        .rf-top { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.4rem; }
        .rf-brand { display: flex; align-items: center; gap: 0.7rem; }
        .rf-leaf-mark { font-size: 2rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
        .rf-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.7rem; color: #f4f8e6; line-height: 1; }
        .rf-title small { display: block; font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 0.62rem; letter-spacing: 0.24em; text-transform: uppercase; color: #b6cf8e; margin-top: 0.3rem; }
        .rf-clock { font-family: 'Fraunces', serif; font-style: italic; font-size: 0.95rem; color: #cfe3a8; }

        .rf-body { display: grid; grid-template-columns: 230px 1fr 230px; gap: 1.3rem; align-items: start; }

        .leaf-card {
          background: rgba(20,46,28,0.5); backdrop-filter: blur(3px);
          border: 1px solid rgba(180,207,142,0.22); border-radius: 22px;
          padding: 1.1rem 1.2rem;
          box-shadow: 0 10px 26px rgba(0,0,0,0.25);
        }
        .card-h { font-family: 'Fraunces', serif; font-size: 1.02rem; color: #dcebb8; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.4rem; }

        /* vitals */
        .vital { margin-bottom: 0.9rem; }
        .vital-top { display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 700; color: #cfe3a8; margin-bottom: 0.35rem; }
        .vital-bar { height: 8px; background: rgba(180,207,142,0.16); border-radius: 6px; overflow: hidden; }
        .vital-fill { height: 100%; border-radius: 6px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }
        .mist-btn {
          width: 100%; margin-top: 0.4rem; cursor: pointer;
          font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 0.9rem; color: #1d3d24;
          background: linear-gradient(180deg, #cfe88a, #9ec762); border: none; border-radius: 14px; padding: 0.6rem;
          box-shadow: 0 4px 0 #6f9a45; transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .mist-btn:hover { transform: translateY(-1px); box-shadow: 0 5px 0 #6f9a45; }
        .mist-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #6f9a45; }

        /* center strata */
        .strata-rows { display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1rem; }
        .stratum {
          display: flex; align-items: center; justify-content: space-between; cursor: pointer;
          padding: 0.6rem 0.9rem; border-radius: 12px; border: 1px solid transparent;
          background: rgba(180,207,142,0.06); transition: all 0.35s ease; color: #cfe3a8;
        }
        .stratum:hover { background: rgba(180,207,142,0.14); }
        .stratum.active { background: rgba(180,207,142,0.2); border-color: rgba(207,232,138,0.6); color: #f4f8e6; }
        .st-name { font-family: 'Fraunces', serif; font-size: 1.05rem; }
        .st-height { font-size: 0.78rem; font-weight: 700; color: #9ec762; }

        .stratum-detail { animation: rise 0.5s ease; }
        @keyframes rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .species-row { display: flex; gap: 0.6rem; margin: 0.3rem 0 0.9rem; flex-wrap: wrap; }
        .species {
          display: flex; align-items: center; gap: 0.4rem; background: rgba(20,46,28,0.55);
          border: 1px solid rgba(180,207,142,0.2); border-radius: 30px; padding: 0.35rem 0.8rem 0.35rem 0.5rem;
          font-size: 0.86rem; font-weight: 600; color: #eef3df;
        }
        .species .emo { font-size: 1.15rem; }
        .stratum-note { font-family: 'Fraunces', serif; font-style: italic; font-size: 1rem; line-height: 1.6; color: #dcebb8; }

        /* sprout */
        .sprout-stage { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; min-height: 150px; padding: 0.4rem 0; }
        .stem { width: 4px; background: linear-gradient(180deg, #8fbf5a, #5e8a38); border-radius: 4px; transition: height 0.5s ease; }
        .sprout-leaf {
          font-size: 1.5rem; line-height: 0.7; margin: -4px 0;
          animation: unfurl 0.5s cubic-bezier(0.34,1.5,0.5,1);
        }
        .sprout-leaf:nth-child(even) { transform: scaleX(-1); }
        @keyframes unfurl { from { transform: scale(0) rotate(-40deg); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .tend-btn {
          width: 100%; margin-top: 0.6rem; cursor: pointer;
          font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 0.9rem; color: #f4f8e6;
          background: rgba(180,207,142,0.18); border: 1px solid rgba(207,232,138,0.5); border-radius: 14px; padding: 0.55rem;
          transition: background 0.3s ease;
        }
        .tend-btn:hover { background: rgba(180,207,142,0.3); }
        .tend-cap { text-align: center; font-family: 'Fraunces', serif; font-style: italic; font-size: 0.84rem; color: #b6cf8e; margin-top: 0.5rem; }

        /* dew shimmer pass */
        .dew-flash {
          position: absolute; inset: 0; z-index: 9; pointer-events: none;
          background: radial-gradient(circle at 50% 30%, rgba(200,255,180,0.2), transparent 60%);
          animation: dewflash 0.9s ease;
        }
        @keyframes dewflash { 0% { opacity: 0; } 30% { opacity: 1; } 100% { opacity: 0; } }

        @media (max-width: 880px) {
          .rf-body { grid-template-columns: 1fr; }
        }
      `}</style>

      {dewy && <div className="dew-flash" onAnimationEnd={() => setDewy(false)} />}

      <div className="dapples">
        {dapples.map((d, i) => (
          <span
            key={i}
            className="dapple"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              animationDelay: `${d.delay}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <span className="leaf-bg leaf-tl sway">🌿</span>
      <span className="leaf-bg leaf-tr sway">🍃</span>
      <span className="leaf-bg leaf-bl sway">🌴</span>
      <span className="leaf-bg leaf-br sway">🌿</span>

      <div className="rf-wrap">
        <div className="rf-top">
          <div className="rf-brand">
            <span className="rf-leaf-mark">🌱</span>
            <div className="rf-title">
              Canopy
              <small>Living Conservatory · Dome 3</small>
            </div>
          </div>
          <div className="rf-clock">— a warm, dripping morning</div>
        </div>

        <div className="rf-body">
          {/* vitals */}
          <div className="leaf-card">
            <div className="card-h">💧 Terrarium Vitals</div>
            <div className="vital">
              <div className="vital-top"><span>Humidity</span><span>{humidity}%</span></div>
              <div className="vital-bar">
                <div className="vital-fill" style={{ width: `${humidity}%`, background: "linear-gradient(90deg,#6fb0d8,#9ec762)" }} />
              </div>
            </div>
            <div className="vital">
              <div className="vital-top"><span>Warmth</span><span>26°C</span></div>
              <div className="vital-bar">
                <div className="vital-fill" style={{ width: "68%", background: "linear-gradient(90deg,#e8b15a,#cfe88a)" }} />
              </div>
            </div>
            <div className="vital">
              <div className="vital-top"><span>Canopy Light</span><span>filtered</span></div>
              <div className="vital-bar">
                <div className="vital-fill" style={{ width: "52%", background: "linear-gradient(90deg,#cfe88a,#dcf0a0)" }} />
              </div>
            </div>
            <button type="button" className="mist-btn" onClick={mist}>≈ mist the terrarium</button>
          </div>

          {/* strata */}
          <div className="leaf-card">
            <div className="card-h">🌳 Canopy Strata</div>
            <div className="strata-rows">
              {STRATA.map((s) => (
                <div
                  key={s.key}
                  className={`stratum ${s.key === stratumKey ? "active" : ""}`}
                  onClick={() => setStratumKey(s.key)}
                >
                  <span className="st-name">{s.name}</span>
                  <span className="st-height">{s.height}</span>
                </div>
              ))}
            </div>
            <div className="stratum-detail" key={stratum.key}>
              <div className="species-row">
                {stratum.species.map((sp) => (
                  <span className="species" key={sp.name}>
                    <span className="emo">{sp.emoji}</span>
                    {sp.name}
                  </span>
                ))}
              </div>
              <div className="stratum-note">{stratum.note}</div>
            </div>
          </div>

          {/* sprout */}
          <div className="leaf-card">
            <div className="card-h">🌿 Tend the Sprout</div>
            <div className="sprout-stage">
              {[...Array(leaves)].map((_, i) => (
                <span className="sprout-leaf" key={i}>🍃</span>
              ))}
              <div className="stem" style={{ height: 18 + leaves * 16 }} />
            </div>
            <button type="button" className="tend-btn" onClick={tend}>
              {leaves >= 7 ? "✦ flourishing ✦" : "♥ water it gently"}
            </button>
            <div className="tend-cap">
              {leaves >= 7 ? "it has grown strong" : `${leaves} leaf${leaves === 1 ? "" : "s"} unfurled`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
