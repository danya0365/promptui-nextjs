"use client";

import React, { useState } from "react";

// --- pixel hero sprite ---
const SPRITE = [
  "...OOOO...",
  "..OHHHHO..",
  "..OSSSSO..",
  "..OSOOSO..",
  "..OSSSSO..",
  ".OBBBBBBO.",
  "OWBBBBBBO.",
  ".OBBBBBBO.",
  ".OBLLLLBO.",
  "..OLLLLO..",
  "..OL..LO..",
  "..FF..FF..",
];
const LEGEND: Record<string, string> = {
  O: "#1a1024",
  H: "#7a4a22",
  S: "#f0c089",
  B: "#2e9e63",
  L: "#36406e",
  F: "#6e4a24",
  W: "#d4d4dc",
};

interface Item {
  id: number;
  icon: string;
  name: string;
  desc: string;
  use?: "hp" | "mp";
}

const ITEMS: Item[] = [
  { id: 1, icon: "🗡️", name: "IRON SWORD", desc: "+4 ATK. Notched and scratched, but loyal to the end." },
  { id: 2, icon: "🛡️", name: "OAK SHIELD", desc: "+3 DEF. Smells faintly of the forest it came from." },
  { id: 3, icon: "🧪", name: "HEALTH POTION", desc: "Restores 30 HP. Tastes of strawberries, somehow.", use: "hp" },
  { id: 4, icon: "✨", name: "MANA TONIC", desc: "Restores 20 MP. Fizzy. Slightly electric.", use: "mp" },
  { id: 5, icon: "🔑", name: "RUSTY KEY", desc: "Opens a door you have not found yet." },
  { id: 6, icon: "🍞", name: "TRAVEL BREAD", desc: "Hard as a rock. Heroes cannot live on glory alone." },
  { id: 7, icon: "💎", name: "MOONSTONE", desc: "It hums when the moon is high. Worth a small fortune." },
  { id: 8, icon: "🗺️", name: "OLD MAP", desc: "Marked with an X. The ink has nearly faded away." },
];

const QUESTS = [
  { done: true, text: "Light the watchtower beacon" },
  { done: true, text: "Find the blacksmith's hammer" },
  { done: false, text: "Cross the Whispering Marsh" },
  { done: false, text: "Wake the sleeping golem" },
];

export const PixelQuestDemoClaudeOpus: React.FC = () => {
  const [selected, setSelected] = useState<Item | null>(ITEMS[0]);
  const [hp, setHp] = useState(54);
  const [mp, setMp] = useState(18);
  const [tab, setTab] = useState("ITEM");
  const [msg, setMsg] = useState<string | null>(null);

  const HP_MAX = 80;
  const MP_MAX = 40;

  const useItem = () => {
    if (!selected?.use) return;
    if (selected.use === "hp") {
      setHp((h) => Math.min(HP_MAX, h + 30));
      setMsg("Drank the potion. HP restored!");
    } else {
      setMp((m) => Math.min(MP_MAX, m + 20));
      setMsg("Sipped the tonic. MP restored!");
    }
  };

  const pickTab = (t: string) => {
    setTab(t);
    if (t === "MAGIC") setMsg("You have not learned any spells… yet.");
    else if (t === "EQUIP") setMsg("Iron Sword and Oak Shield equipped.");
    else if (t === "SAVE") setMsg("★ Game saved. Rest well, traveller.");
    else setMsg(null);
  };

  return (
    <div className="pq-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .pq-root {
          min-height: 100vh; width: 100%;
          background: #14102a;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 2px, transparent 2px),
            radial-gradient(circle at 50% 30%, #211a44, #100c22 80%);
          background-size: 100% 4px, 100% 100%;
          color: #e8e6f0; font-family: 'Press Start 2P', monospace;
          position: relative; overflow: hidden;
          padding: 1.6rem; image-rendering: pixelated;
          display: flex; flex-direction: column; align-items: center;
        }
        .pq-title { font-size: 1rem; color: #ffd23a; text-shadow: 3px 3px 0 #b5223a; letter-spacing: 0.04em; margin-bottom: 0.3rem; }
        .pq-sub { font-size: 0.5rem; color: #8a86b8; margin-bottom: 1.3rem; letter-spacing: 0.08em; }

        .pq-grid { display: grid; grid-template-columns: 1fr 1.1fr 1.2fr; gap: 1rem; max-width: 900px; width: 100%; }

        /* RPG window frame */
        .win {
          background: #1c2452; border: 4px solid #e8e6f0; padding: 0.9rem;
          box-shadow: 0 0 0 4px #1c2452, 0 0 0 8px #6a6aa8;
          position: relative;
        }
        .win-h { font-size: 0.6rem; color: #ffd23a; margin-bottom: 0.8rem; letter-spacing: 0.06em; }

        /* hero */
        .hero-box { display: flex; flex-direction: column; align-items: center; }
        .hero-sprite { animation: bob 0.8s steps(2) infinite; margin-bottom: 0.8rem; }
        @keyframes bob { 50% { transform: translateY(-4px); } }
        .hero-name { font-size: 0.66rem; color: #6fe06a; }
        .hero-lv { font-size: 0.55rem; color: #8a86b8; margin-top: 0.4rem; }

        .stat { margin-top: 0.8rem; }
        .stat-label { font-size: 0.5rem; display: flex; justify-content: space-between; margin-bottom: 0.3rem; }
        .stat-label .hpc { color: #6fe06a; } .stat-label .mpc { color: #6aa6ff; }
        .bar { height: 14px; background: #0c0a1c; border: 2px solid #6a6aa8; padding: 1px; display: flex; }
        .bar-fill {
          height: 100%;
          background-image: repeating-linear-gradient(90deg, transparent 0 5px, rgba(0,0,0,0.25) 5px 6px);
          transition: width 0.4s steps(8);
        }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem 0.8rem; margin-top: 0.9rem; font-size: 0.55rem; color: #c8c4e8; }
        .stat-grid span b { color: #ffd23a; }

        /* inventory */
        .inv-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
        .slot {
          aspect-ratio: 1; background: #0c0a1c; border: 3px solid #4a4a82; cursor: pointer;
          display: flex; align-items: center; justify-content: center; font-size: 1.3rem;
        }
        .slot:hover { border-color: #8a86b8; }
        .slot.sel { border-color: #ffd23a; background: #2a2356; }

        /* quest log */
        .quest { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.55rem; line-height: 1.7; margin-bottom: 0.6rem; color: #c8c4e8; }
        .qbox { width: 12px; height: 12px; border: 2px solid #6a6aa8; flex-shrink: 0; position: relative; margin-top: 1px; }
        .qbox.done { background: #6fe06a; border-color: #6fe06a; }
        .qbox.done::after { content: '✓'; position: absolute; inset: -4px 0 0 0; color: #14102a; font-size: 0.7rem; text-align: center; }
        .quest.done { color: #6a6aa8; text-decoration: line-through; }

        /* dialog + command bar */
        .pq-bottom { max-width: 900px; width: 100%; margin-top: 1rem; }
        .dialog {
          background: #0c0a1c; border: 4px solid #e8e6f0; box-shadow: 0 0 0 4px #0c0a1c, 0 0 0 8px #6a6aa8;
          padding: 1rem; min-height: 64px; font-size: 0.62rem; line-height: 1.9; color: #e8e6f0;
        }
        .dialog .dname { color: #ffd23a; }
        .use-btn {
          margin-top: 0.7rem; font-family: 'Press Start 2P', monospace; font-size: 0.55rem;
          background: #6fe06a; color: #14102a; border: 3px solid #2a7a2a; padding: 0.5rem 0.9rem; cursor: pointer;
          box-shadow: 3px 3px 0 #2a7a2a;
        }
        .use-btn:active { transform: translate(3px,3px); box-shadow: none; }
        .cmd-bar { display: flex; gap: 0.6rem; margin-top: 0.8rem; }
        .cmd {
          flex: 1; font-family: 'Press Start 2P', monospace; font-size: 0.58rem; cursor: pointer;
          background: #1c2452; color: #c8c4e8; border: 3px solid #6a6aa8; padding: 0.6rem; text-align: center;
        }
        .cmd:hover { background: #2a2356; }
        .cmd.active { background: #ffd23a; color: #14102a; border-color: #b5223a; }

        @media (max-width: 860px) { .pq-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="pq-title">★ PIXEL QUEST ★</div>
      <div className="pq-sub">ADVENTURER'S LOG</div>

      <div className="pq-grid">
        {/* HERO */}
        <div className="win hero-box">
          <div className="win-h">HERO</div>
          <svg className="hero-sprite" width="90" height="108" viewBox="0 0 10 12" shapeRendering="crispEdges">
            {SPRITE.flatMap((row, y) =>
              row.split("").map((ch, x) =>
                ch !== "." ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={LEGEND[ch]} /> : null
              )
            )}
          </svg>
          <div className="hero-name">PIXl</div>
          <div className="hero-lv">LV.7 · WANDERER</div>
        </div>

        {/* STATS */}
        <div className="win">
          <div className="win-h">STATUS</div>
          <div className="stat">
            <div className="stat-label"><span className="hpc">HP</span><span>{hp}/{HP_MAX}</span></div>
            <div className="bar"><div className="bar-fill" style={{ width: `${(hp / HP_MAX) * 100}%`, background: "#6fe06a" }} /></div>
          </div>
          <div className="stat">
            <div className="stat-label"><span className="mpc">MP</span><span>{mp}/{MP_MAX}</span></div>
            <div className="bar"><div className="bar-fill" style={{ width: `${(mp / MP_MAX) * 100}%`, background: "#6aa6ff" }} /></div>
          </div>
          <div className="stat-grid">
            <span>STR <b>14</b></span>
            <span>DEF <b>11</b></span>
            <span>SPD <b>09</b></span>
            <span>LCK <b>07</b></span>
            <span>GOLD <b>248</b></span>
            <span>EXP <b>61%</b></span>
          </div>
        </div>

        {/* INVENTORY + QUESTS */}
        <div className="win">
          <div className="win-h">ITEMS</div>
          <div className="inv-grid">
            {ITEMS.map((it) => (
              <div
                key={it.id}
                className={`slot ${selected?.id === it.id ? "sel" : ""}`}
                onClick={() => { setSelected(it); setMsg(null); setTab("ITEM"); }}
              >
                {it.icon}
              </div>
            ))}
          </div>
          <div className="win-h" style={{ marginTop: "1rem" }}>QUEST LOG</div>
          {QUESTS.map((q, i) => (
            <div key={i} className={`quest ${q.done ? "done" : ""}`}>
              <span className={`qbox ${q.done ? "done" : ""}`} />
              {q.text}
            </div>
          ))}
        </div>
      </div>

      {/* DIALOG + COMMANDS */}
      <div className="pq-bottom">
        <div className="dialog">
          {msg ? (
            <span>▸ {msg}</span>
          ) : selected ? (
            <span>
              <span className="dname">{selected.name}</span> — {selected.desc}
              {selected.use && (
                <>
                  <br />
                  <button type="button" className="use-btn" onClick={useItem}>▸ USE</button>
                </>
              )}
            </span>
          ) : (
            <span>▸ Choose an item, traveller.</span>
          )}
        </div>
        <div className="cmd-bar">
          {["ITEM", "MAGIC", "EQUIP", "SAVE"].map((t) => (
            <div key={t} className={`cmd ${tab === t ? "active" : ""}`} onClick={() => pickTab(t)}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
