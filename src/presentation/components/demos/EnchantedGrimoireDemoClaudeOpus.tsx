"use client";

import React, { useMemo, useState } from "react";

interface Ingredient {
  icon: string;
  name: string;
}

interface Spell {
  id: number;
  name: string;
  type: string;
  drop: string;
  blurb: string;
  ingredients: Ingredient[];
  result: string;
}

const SPELLS: Spell[] = [
  {
    id: 1,
    name: "Moonlight Mend",
    type: "a gentle healing draught",
    drop: "M",
    blurb:
      "oonlight gathered in a silver thimble, stirred widdershins until the ache forgets itself.",
    ingredients: [
      { icon: "🌙", name: "Moonpetal" },
      { icon: "💧", name: "Morning Dewdrop" },
      { icon: "🌿", name: "Silver Moss" },
    ],
    result: "A soft glow settles over you. The bruise of the day melts away.",
  },
  {
    id: 2,
    name: "Ember Courage",
    type: "a warming heart-tonic",
    drop: "T",
    blurb:
      "hree breaths of dragon-smoke folded into oak, for the morning you must be braver than you feel.",
    ingredients: [
      { icon: "🌶️", name: "Dragon Chili" },
      { icon: "🔥", name: "Ember Coal" },
      { icon: "🌰", name: "Oak Heart" },
    ],
    result: "A small fire kindles in your chest. You stand a little taller.",
  },
  {
    id: 3,
    name: "Whisperwind",
    type: "a draught of light feet",
    drop: "C",
    blurb:
      "aught on a feather that fell from a passing thought, this brew makes worries weigh nothing at all.",
    ingredients: [
      { icon: "🪶", name: "Falling Feather" },
      { icon: "🌫️", name: "Hill Mist" },
      { icon: "🪻", name: "Blue Thistle" },
    ],
    result: "You feel impossibly light, as if the wind has offered you a ride.",
  },
  {
    id: 4,
    name: "Dreamless Sleep",
    type: "a quiet midnight tea",
    drop: "L",
    blurb:
      "ured from the hush between owl-calls, sweetened with star anise, for nights that refuse to soften.",
    ingredients: [
      { icon: "💜", name: "Lavender" },
      { icon: "✨", name: "Star Anise" },
      { icon: "🦉", name: "Owl Lullaby" },
    ],
    result: "The room exhales. Sleep comes like a tide you do not fight.",
  },
];

export const EnchantedGrimoireDemoClaudeOpus: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const [added, setAdded] = useState<Record<string, boolean>>({});
  const [brewed, setBrewed] = useState(false);

  const spell = SPELLS.find((s) => s.id === activeId) ?? SPELLS[0];
  const addedCount = spell.ingredients.filter((i) => added[`${spell.id}-${i.name}`]).length;
  const complete = addedCount === spell.ingredients.length;
  const fill = (addedCount / spell.ingredients.length) * 100;

  const selectSpell = (id: number) => {
    setActiveId(id);
    setAdded({});
    setBrewed(false);
  };

  const addIngredient = (name: string) => {
    setAdded((a) => ({ ...a, [`${spell.id}-${name}`]: true }));
    setBrewed(false);
  };

  // deterministic firefly motes (warm, sparse — thematic, not sci-fi glow)
  const motes = useMemo(
    () =>
      [...Array(12)].map((_, i) => ({
        left: (Math.sin(i * 2.1) * 46 + 50),
        top: (Math.cos(i * 1.3) * 44 + 50),
        size: 2 + ((i * 3) % 4),
        delay: (i * 0.8) % 6,
        duration: 5 + ((i * 1.3) % 5),
      })),
    []
  );

  return (
    <div className="grim-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Caveat:wght@600&display=swap');

        .grim-root {
          min-height: 100vh; width: 100%;
          background:
            radial-gradient(ellipse at 50% 30%, #3a4a32 0%, #283a2a 40%, #1c2a1f 100%);
          font-family: 'Cormorant Garamond', serif;
          color: #3a2c1a;
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          padding: 2rem 1.5rem;
        }
        /* warm candle wash */
        .grim-root::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at 50% 42%, rgba(255,210,140,0.12), transparent 55%);
        }

        .motes { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .mote {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,224,150,0.9), rgba(255,200,90,0));
          animation: drift ease-in-out infinite;
        }
        @keyframes drift {
          0%,100% { transform: translate(0,0); opacity: 0.3; }
          50% { transform: translate(14px,-22px); opacity: 0.9; }
        }

        /* ---- the book ---- */
        .book {
          position: relative; z-index: 2; width: 100%; max-width: 960px;
          display: grid; grid-template-columns: 1fr 1fr;
          background: linear-gradient(180deg, #2a1d12, #1d130b);
          padding: 16px; border-radius: 10px;
          box-shadow: 0 30px 70px rgba(0,0,0,0.55), inset 0 0 0 2px #6a4a28;
        }
        .book::after {
          content: ''; position: absolute; top: 16px; bottom: 16px; left: 50%; width: 26px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.05), rgba(0,0,0,0.35));
          z-index: 5; pointer-events: none;
        }

        .page {
          position: relative;
          background:
            radial-gradient(ellipse at 50% 50%, #f6ecd2 0%, #ecdcb6 80%, #e0cb9e 100%);
          padding: 2rem 2.1rem;
          min-height: 520px;
        }
        .page.left { border-radius: 6px 0 0 6px; box-shadow: inset -14px 0 26px rgba(120,85,40,0.22); }
        .page.right { border-radius: 0 6px 6px 0; box-shadow: inset 14px 0 26px rgba(120,85,40,0.22); }
        /* ornate inner frame */
        .page::before {
          content: ''; position: absolute; inset: 14px; pointer-events: none;
          border: 1.5px solid rgba(120,80,38,0.45);
          border-radius: 3px;
          box-shadow: inset 0 0 0 3px rgba(120,80,38,0.12);
        }
        .corner {
          position: absolute; width: 26px; height: 26px; z-index: 3;
          color: rgba(120,80,38,0.6); font-size: 1.3rem; line-height: 1;
          display: flex; align-items: center; justify-content: center;
        }
        .corner.tl { top: 10px; left: 10px; } .corner.tr { top: 10px; right: 10px; }
        .corner.bl { bottom: 10px; left: 10px; } .corner.br { bottom: 10px; right: 10px; }

        .page-inner { position: relative; z-index: 2; }

        .grim-title {
          font-family: 'Cinzel Decorative', serif; font-size: 1.35rem; color: #6a3d1e;
          text-align: center; letter-spacing: 0.02em; margin: 0 0 0.3rem;
        }
        .grim-sub { text-align: center; font-family: 'Caveat', cursive; font-size: 1.2rem; color: #8a6a3a; margin-bottom: 1.4rem; }
        .flourish { text-align: center; color: rgba(120,80,38,0.55); font-size: 1rem; margin: 0.4rem 0 1.2rem; letter-spacing: 0.3em; }

        /* index list */
        .spell-row {
          display: flex; align-items: baseline; gap: 0.6rem; cursor: pointer;
          padding: 0.55rem 0.4rem; border-bottom: 1px dotted rgba(120,80,38,0.35);
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .spell-row:hover { padding-left: 0.8rem; color: #7e3d1a; }
        .spell-row.active { color: #6a3d1e; }
        .spell-bullet { font-size: 0.9rem; color: #9a6a3a; }
        .spell-name { font-size: 1.18rem; font-weight: 600; flex: 1; }
        .spell-row.active .spell-name { text-decoration: underline wavy rgba(154,106,58,0.5); }
        .spell-dots { flex: 1; border-bottom: 1px dotted rgba(120,80,38,0.4); margin: 0 4px 4px; }
        .spell-type { font-style: italic; font-size: 0.92rem; color: #8a6a3a; }

        /* right page recipe */
        .recipe { animation: settle 0.6s ease; }
        @keyframes settle { from { opacity: 0; transform: translateY(8px) rotate(-0.4deg); } to { opacity: 1; transform: none; } }
        .recipe-name { font-family: 'Cinzel Decorative', serif; font-size: 1.4rem; color: #6a3d1e; margin: 0 0 0.2rem; }
        .recipe-type { font-style: italic; color: #8a6a3a; margin-bottom: 1rem; }
        .recipe-blurb { font-size: 1.12rem; line-height: 1.55; color: #4a3620; margin-bottom: 1.3rem; }
        .recipe-blurb .dropcap {
          float: left; font-family: 'Cinzel Decorative', serif; font-size: 3rem; line-height: 0.8;
          color: #9a3d1e; margin: 0.1rem 0.5rem 0 0;
        }

        .ing-title { font-family: 'Caveat', cursive; font-size: 1.3rem; color: #7e5a2e; margin-bottom: 0.6rem; }
        .ing-list { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.2rem; }
        .ing {
          display: flex; align-items: center; gap: 0.7rem; cursor: pointer;
          padding: 0.45rem 0.7rem; border: 1px solid rgba(120,80,38,0.3); border-radius: 8px;
          background: rgba(255,250,235,0.4); transition: all 0.25s ease;
        }
        .ing:hover { transform: translateX(3px); background: rgba(255,250,235,0.75); }
        .ing.in { background: rgba(170,140,80,0.18); border-color: rgba(120,80,38,0.5); opacity: 0.7; }
        .ing-icon { font-size: 1.3rem; }
        .ing-name { font-size: 1.08rem; flex: 1; }
        .ing.in .ing-name { text-decoration: line-through; color: #8a6a3a; }
        .ing-add { font-family: 'Caveat', cursive; font-size: 1.05rem; color: #9a6a3a; }

        /* cauldron */
        .cauldron-area { display: flex; align-items: center; gap: 1.1rem; margin-top: 0.4rem; }
        .cauldron {
          position: relative; width: 92px; height: 78px; flex-shrink: 0;
          background: linear-gradient(180deg, #3a3a3a, #1c1c1c);
          border-radius: 0 0 46px 46px / 0 0 40px 40px;
          border: 3px solid #111; border-top: none; overflow: hidden;
        }
        .cauldron::before {
          content: ''; position: absolute; top: -7px; left: -8px; right: -8px; height: 12px;
          background: #2a2a2a; border: 3px solid #111; border-radius: 6px;
        }
        .brew-fill {
          position: absolute; left: 0; right: 0; bottom: 0;
          background: linear-gradient(180deg, #8fd47a, #4ea65a);
          transition: height 0.5s ease;
        }
        .brew-fill::after {
          content: ''; position: absolute; top: -4px; left: 0; right: 0; height: 8px;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.5) 2px, transparent 3px),
                      radial-gradient(circle at 70% 50%, rgba(255,255,255,0.4) 2px, transparent 3px);
          animation: bubble 1.4s ease-in-out infinite;
        }
        @keyframes bubble { 0%,100% { transform: translateY(0); opacity: 0.7; } 50% { transform: translateY(-3px); opacity: 1; } }

        .cauldron-info { flex: 1; }
        .brew-btn {
          font-family: 'Cinzel Decorative', serif; font-size: 0.95rem; letter-spacing: 0.03em;
          background: linear-gradient(180deg, #7e4d2a, #5e3518); color: #f6e6c8;
          border: 1px solid #4a2810; border-radius: 8px; padding: 0.55rem 1.2rem; cursor: pointer;
          box-shadow: 0 3px 0 #3a1f0c; transition: all 0.12s ease;
        }
        .brew-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 0 #3a1f0c; }
        .brew-btn:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 0 0 #3a1f0c; }
        .brew-btn:disabled { opacity: 0.45; cursor: default; box-shadow: 0 3px 0 #3a1f0c; }
        .brew-hint { font-family: 'Caveat', cursive; font-size: 1.05rem; color: #8a6a3a; margin-top: 0.5rem; }
        .brew-result {
          font-style: italic; font-size: 1.1rem; color: #6a3d1e; line-height: 1.5;
          background: rgba(255,245,220,0.6); border-left: 3px solid #9a6a3a;
          padding: 0.7rem 0.9rem; border-radius: 0 8px 8px 0; animation: shimmer 0.7s ease;
        }
        @keyframes shimmer { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }

        @media (max-width: 820px) {
          .book { grid-template-columns: 1fr; }
          .book::after { display: none; }
          .page.left { border-radius: 6px 6px 0 0; }
          .page.right { border-radius: 0 0 6px 6px; min-height: auto; }
        }
      `}</style>

      <div className="motes">
        {motes.map((m, i) => (
          <span
            key={i}
            className="mote"
            style={{
              left: `${m.left}%`,
              top: `${m.top}%`,
              width: m.size * 2,
              height: m.size * 2,
              animationDelay: `${m.delay}s`,
              animationDuration: `${m.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="book">
        {/* LEFT PAGE — index */}
        <div className="page left">
          <span className="corner tl">❧</span>
          <span className="corner tr">❧</span>
          <span className="corner bl">❧</span>
          <span className="corner br">❧</span>
          <div className="page-inner">
            <h1 className="grim-title">The Enchanted Grimoire</h1>
            <div className="grim-sub">~ of small & kindly magics ~</div>
            <div className="flourish">✦ · ✦ · ✦</div>
            {SPELLS.map((s) => (
              <div
                key={s.id}
                className={`spell-row ${s.id === activeId ? "active" : ""}`}
                onClick={() => selectSpell(s.id)}
              >
                <span className="spell-bullet">✶</span>
                <span className="spell-name">{s.name}</span>
                <span className="spell-dots" />
                <span className="spell-type">{s.type}</span>
              </div>
            ))}
            <div className="flourish" style={{ marginTop: "1.6rem" }}>❀</div>
          </div>
        </div>

        {/* RIGHT PAGE — recipe */}
        <div className="page right">
          <span className="corner tl">❧</span>
          <span className="corner tr">❧</span>
          <span className="corner bl">❧</span>
          <span className="corner br">❧</span>
          <div className="page-inner">
            <div className="recipe" key={spell.id}>
              <h2 className="recipe-name">{spell.name}</h2>
              <div className="recipe-type">{spell.type}</div>
              <p className="recipe-blurb">
                <span className="dropcap">{spell.drop}</span>
                {spell.blurb}
              </p>

              <div className="ing-title">gather, then add to the pot —</div>
              <div className="ing-list">
                {spell.ingredients.map((ing) => {
                  const isIn = !!added[`${spell.id}-${ing.name}`];
                  return (
                    <div
                      key={ing.name}
                      className={`ing ${isIn ? "in" : ""}`}
                      onClick={() => !isIn && addIngredient(ing.name)}
                    >
                      <span className="ing-icon">{ing.icon}</span>
                      <span className="ing-name">{ing.name}</span>
                      <span className="ing-add">{isIn ? "in the pot ✓" : "+ add"}</span>
                    </div>
                  );
                })}
              </div>

              <div className="cauldron-area">
                <div className="cauldron">
                  <div className="brew-fill" style={{ height: `${fill}%` }} />
                </div>
                <div className="cauldron-info">
                  <button
                    type="button"
                    className="brew-btn"
                    disabled={!complete}
                    onClick={() => setBrewed(true)}
                  >
                    {brewed ? "✦ brewed ✦" : "stir & brew"}
                  </button>
                  {!complete && (
                    <div className="brew-hint">
                      {addedCount}/{spell.ingredients.length} gathered…
                    </div>
                  )}
                </div>
              </div>

              {brewed && <div className="brew-result" style={{ marginTop: "1rem" }}>{spell.result}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
