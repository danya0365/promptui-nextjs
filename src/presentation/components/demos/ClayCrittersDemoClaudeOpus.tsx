"use client";

import React, { useState } from "react";

interface Mood {
  key: string;
  label: string;
  body: string;
  cheek: string;
  tint: string;
  mouth: string; // css for mouth shape
  eyes: "open" | "happy" | "sleepy";
}

const MOODS: Mood[] = [
  { key: "happy", label: "Sunny", body: "#ffd06b", cheek: "#ff9e7d", tint: "#fff3da", mouth: "smile", eyes: "happy" },
  { key: "calm", label: "Calm", body: "#9ed8c8", cheek: "#7fc2b0", tint: "#e6f5ef", mouth: "soft", eyes: "open" },
  { key: "sleepy", label: "Sleepy", body: "#b7add8", cheek: "#9e91c8", tint: "#efeaf7", mouth: "tiny", eyes: "sleepy" },
  { key: "excited", label: "Excited", body: "#ff9bb8", cheek: "#ff6f97", tint: "#ffe9f0", mouth: "open", eyes: "open" },
];

interface Habit {
  id: number;
  emoji: string;
  label: string;
  color: string;
}

const HABITS: Habit[] = [
  { id: 1, emoji: "💧", label: "Water", color: "#9ed8e8" },
  { id: 2, emoji: "🌙", label: "Sleep", color: "#b7add8" },
  { id: 3, emoji: "🥬", label: "Greens", color: "#a8d88a" },
  { id: 4, emoji: "🚶", label: "Walk", color: "#ffd06b" },
  { id: 5, emoji: "📖", label: "Read", color: "#ff9bb8" },
];

export const ClayCrittersDemoClaudeOpus: React.FC = () => {
  const [moodKey, setMoodKey] = useState("happy");
  const [wobble, setWobble] = useState(false);
  const [done, setDone] = useState<Record<number, boolean>>({ 1: true });

  const mood = MOODS.find((m) => m.key === moodKey) ?? MOODS[0];
  const doneCount = Object.values(done).filter(Boolean).length;

  const poke = () => setWobble(true);
  const toggleHabit = (id: number) => setDone((d) => ({ ...d, [id]: !d[id] }));

  return (
    <div className="clay-root" style={{ background: `radial-gradient(ellipse at 50% 30%, ${mood.tint}, #e9e2d6 75%, #ded5c6 100%)` }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Quicksand:wght@500;600;700&display=swap');

        .clay-root {
          min-height: 100vh; width: 100%;
          font-family: 'Quicksand', sans-serif; color: #6a5a48;
          position: relative; overflow: hidden;
          padding: 1.8rem; transition: background 0.6s ease;
          display: flex; flex-direction: column;
        }

        .clay-title {
          font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 1.9rem; text-align: center;
          color: #7a6852; letter-spacing: 0.01em;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.7), 2px 3px 4px rgba(120,90,60,0.18);
        }
        .clay-sub { text-align: center; font-weight: 600; font-size: 0.85rem; color: #a89a82; margin-bottom: 1.4rem; }

        .clay-body { flex: 1; display: grid; grid-template-columns: 1fr 300px; gap: 2rem; align-items: center; max-width: 900px; margin: 0 auto; width: 100%; }

        /* big creature */
        .critter-stage { display: flex; flex-direction: column; align-items: center; gap: 1.2rem; }
        .critter {
          position: relative; width: 200px; height: 180px; cursor: pointer;
          border-radius: 52% 48% 46% 54% / 58% 56% 44% 42%;
          transition: background 0.6s ease;
        }
        .critter.wob { animation: squish 0.55s cubic-bezier(0.34,1.56,0.5,1); }
        @keyframes squish {
          0% { transform: scale(1,1); }
          30% { transform: scale(1.12,0.84) translateY(8px); }
          55% { transform: scale(0.92,1.1) translateY(-6px); }
          75% { transform: scale(1.04,0.97); }
          100% { transform: scale(1,1); }
        }
        /* clay shading on the body */
        .critter-skin {
          position: absolute; inset: 0; border-radius: inherit;
          box-shadow:
            inset 10px 12px 22px rgba(255,255,255,0.55),
            inset -14px -16px 26px rgba(120,80,50,0.28),
            12px 16px 30px rgba(120,90,60,0.3);
        }
        /* thumb-press dents */
        .dent { position: absolute; border-radius: 50%; box-shadow: inset 3px 4px 7px rgba(120,80,50,0.3), inset -2px -2px 4px rgba(255,255,255,0.4); }
        .dent.d1 { width: 26px; height: 22px; bottom: 26px; left: 30px; }
        .dent.d2 { width: 18px; height: 16px; top: 34px; right: 32px; }

        .cheek { position: absolute; width: 26px; height: 18px; border-radius: 50%; top: 96px; opacity: 0.8; filter: blur(1px); }
        .cheek.l { left: 38px; } .cheek.r { right: 38px; }

        .eye { position: absolute; top: 72px; width: 20px; height: 24px; background: #4a3f33; border-radius: 50%; box-shadow: inset -2px -2px 3px rgba(0,0,0,0.3); }
        .eye::after { content: ''; position: absolute; top: 4px; left: 4px; width: 6px; height: 6px; background: #fff; border-radius: 50%; }
        .eye.l { left: 62px; } .eye.r { right: 62px; }
        .eye.happy { height: 12px; border-radius: 20px 20px 0 0; top: 78px; }
        .eye.happy::after { display: none; }
        .eye.sleepy { height: 6px; border-radius: 10px; top: 84px; }
        .eye.sleepy::after { display: none; }

        .mouth { position: absolute; left: 50%; transform: translateX(-50%); top: 112px; background: #8a5a4a; }
        .mouth.smile { width: 46px; height: 24px; border-radius: 0 0 40px 40px; }
        .mouth.soft { width: 30px; height: 8px; border-radius: 10px; }
        .mouth.tiny { width: 14px; height: 14px; border-radius: 50%; }
        .mouth.open { width: 30px; height: 30px; border-radius: 50%; box-shadow: inset 0 -4px 4px rgba(0,0,0,0.25); }

        .poke-hint { font-family: 'Baloo 2', cursive; font-weight: 600; font-size: 0.92rem; color: #a89a82; }

        /* mood selector */
        .mood-row { display: flex; gap: 0.7rem; justify-content: center; }
        .mood-pick {
          width: 54px; height: 54px; border-radius: 50%; cursor: pointer; border: none; position: relative;
          box-shadow: inset 4px 5px 9px rgba(255,255,255,0.5), inset -5px -6px 10px rgba(120,80,50,0.25), 4px 6px 10px rgba(120,90,60,0.22);
          transition: transform 0.15s ease;
        }
        .mood-pick:hover { transform: translateY(-3px); }
        .mood-pick.active { transform: translateY(-3px) scale(1.08); box-shadow: inset 4px 5px 9px rgba(255,255,255,0.5), inset -5px -6px 10px rgba(120,80,50,0.25), 0 0 0 4px rgba(255,255,255,0.7), 6px 9px 14px rgba(120,90,60,0.28); }
        .mood-label { display:block; text-align:center; font-family: 'Baloo 2', cursive; font-weight: 600; font-size: 0.72rem; color: #8a7a62; margin-top: 0.3rem; }

        /* habits */
        .habit-card {
          background: #f3ece0; border-radius: 28px; padding: 1.3rem 1.4rem;
          box-shadow: inset 6px 7px 14px rgba(255,255,255,0.7), inset -7px -8px 16px rgba(120,90,60,0.16), 10px 14px 26px rgba(120,90,60,0.18);
        }
        .habit-h { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 1.1rem; color: #7a6852; margin-bottom: 0.2rem; }
        .habit-sub { font-size: 0.78rem; font-weight: 600; color: #a89a82; margin-bottom: 1rem; }
        .pebble {
          display: flex; align-items: center; gap: 0.8rem; cursor: pointer;
          padding: 0.6rem 0.8rem; border-radius: 18px; margin-bottom: 0.6rem; background: #ece4d6;
          box-shadow: 4px 5px 10px rgba(120,90,60,0.16), inset 2px 2px 4px rgba(255,255,255,0.6);
          transition: box-shadow 0.2s ease, transform 0.12s ease, opacity 0.2s ease;
        }
        .pebble:active { transform: scale(0.97); }
        .pebble.done {
          box-shadow: inset 4px 5px 10px rgba(120,80,50,0.3), inset -3px -3px 6px rgba(255,255,255,0.5);
          opacity: 0.78;
        }
        .pebble-blob {
          width: 38px; height: 38px; border-radius: 46% 54% 50% 50% / 54% 50% 50% 46%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
          box-shadow: inset 3px 4px 6px rgba(255,255,255,0.5), inset -3px -4px 7px rgba(120,80,50,0.28);
        }
        .pebble-label { font-family: 'Baloo 2', cursive; font-weight: 600; font-size: 1rem; color: #6a5a48; flex: 1; }
        .pebble-check {
          width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; position: relative;
          box-shadow: inset 2px 2px 4px rgba(120,80,50,0.25), inset -2px -2px 4px rgba(255,255,255,0.5);
          background: #ddd3c4;
        }
        .pebble.done .pebble-check { background: #a8d88a; }
        .pebble.done .pebble-check::after {
          content: '✓'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          color: #4a6a32; font-weight: 800; font-size: 0.9rem;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
          animation: stamp 0.3s cubic-bezier(0.34,1.6,0.5,1);
        }
        @keyframes stamp { from { transform: scale(2); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .habit-tally { text-align: center; font-family: 'Baloo 2', cursive; font-weight: 700; color: #8a9a5a; margin-top: 0.6rem; font-size: 0.92rem; }

        @media (max-width: 860px) { .clay-body { grid-template-columns: 1fr; } }
      `}</style>

      <div className="clay-title">Clay Critters</div>
      <div className="clay-sub">a squishy little companion for your day</div>

      <div className="clay-body">
        {/* CREATURE */}
        <div className="critter-stage">
          <div
            className={`critter ${wobble ? "wob" : ""}`}
            style={{ background: mood.body }}
            onClick={poke}
            onAnimationEnd={() => setWobble(false)}
          >
            <span className="critter-skin" />
            <span className="dent d1" />
            <span className="dent d2" />
            <span className="cheek l" style={{ background: mood.cheek }} />
            <span className="cheek r" style={{ background: mood.cheek }} />
            <span className={`eye l ${mood.eyes}`} />
            <span className={`eye r ${mood.eyes}`} />
            <span className={`mouth ${mood.mouth}`} />
          </div>
          <div className="poke-hint">↑ give it a poke ~</div>

          <div>
            <div className="mood-row">
              {MOODS.map((m) => (
                <div key={m.key} style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    className={`mood-pick ${m.key === moodKey ? "active" : ""}`}
                    style={{ background: m.body }}
                    onClick={() => setMoodKey(m.key)}
                  />
                  <span className="mood-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HABITS */}
        <div className="habit-card">
          <div className="habit-h">Today's Pebbles</div>
          <div className="habit-sub">press one in when it's done</div>
          {HABITS.map((h) => (
            <div
              key={h.id}
              className={`pebble ${done[h.id] ? "done" : ""}`}
              onClick={() => toggleHabit(h.id)}
            >
              <span className="pebble-blob" style={{ background: h.color }}>{h.emoji}</span>
              <span className="pebble-label">{h.label}</span>
              <span className="pebble-check" />
            </div>
          ))}
          <div className="habit-tally">
            {doneCount === HABITS.length ? "all pressed in — lovely 🌼" : `${doneCount} of ${HABITS.length} pressed in`}
          </div>
        </div>
      </div>
    </div>
  );
};
