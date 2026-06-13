"use client";

import React, { useState } from "react";

interface Preserve {
  id: number;
  name: string;
  season: string;
  jar: string;
  lid: string;
  yield: string;
  note: string;
  ingredients: string[];
  steps: string[];
}

const PRESERVES: Preserve[] = [
  {
    id: 1,
    name: "Strawberry & Vanilla Jam",
    season: "Midsummer",
    jar: "#c9485f",
    lid: "#c98b8b",
    yield: "makes 4 small jars",
    note: "Skim the pink foam and save it on warm bread — the cook's reward.",
    ingredients: ["900g ripe strawberries", "750g jam sugar", "1 vanilla pod, split", "juice of one lemon"],
    steps: ["Hull the berries and crush half with a fork.", "Warm gently with sugar until dissolved.", "Boil hard to setting point, ~8 minutes.", "Rest, stir in vanilla seeds, then pot up."],
  },
  {
    id: 2,
    name: "Plum & Ginger Chutney",
    season: "Late Autumn",
    jar: "#7a4a78",
    lid: "#9a7a86",
    yield: "makes 3 jars",
    note: "Hide it in a cool cupboard until the first frost — it only gets better.",
    ingredients: ["1kg dark plums, stoned", "2 onions, finely chopped", "200ml cider vinegar", "thumb of fresh ginger"],
    steps: ["Soften onions slowly in a heavy pan.", "Add plums, ginger, sugar and vinegar.", "Simmer low until thick and glossy.", "Spoon hot into warm jars and seal."],
  },
  {
    id: 3,
    name: "Lemon & Thyme Curd",
    season: "Early Spring",
    jar: "#e8c24a",
    lid: "#e8c97a",
    yield: "makes 2 jars",
    note: "Keep this one in the cold larder and eat within the fortnight.",
    ingredients: ["4 unwaxed lemons, zest & juice", "200g caster sugar", "100g butter, cubed", "3 eggs, beaten"],
    steps: ["Melt butter, sugar, zest and juice gently.", "Whisk in the beaten eggs off the boil.", "Stir over low heat till it coats a spoon.", "Pass through a sieve and pot warm."],
  },
  {
    id: 4,
    name: "Elderflower Cordial",
    season: "May Hedgerows",
    jar: "#cfd4a8",
    lid: "#b7c08a",
    yield: "makes 1.5 litres",
    note: "Pick the heads on a dry sunny morning, well away from the lane.",
    ingredients: ["25 elderflower heads, shaken", "1.5kg sugar", "2 lemons, sliced", "50g citric acid"],
    steps: ["Steep flowers, lemon and acid in hot syrup.", "Cover with a cloth and leave overnight.", "Strain through muslin twice.", "Bottle and dilute to taste with cold water."],
  },
  {
    id: 5,
    name: "Spiced Apple Butter",
    season: "Harvest",
    jar: "#a8632e",
    lid: "#c08a52",
    yield: "makes 3 jars",
    note: "Stir often near the end — it likes to catch and grumble at the pan.",
    ingredients: ["1.5kg windfall apples", "150g soft brown sugar", "1 tsp cinnamon", "a grating of nutmeg"],
    steps: ["Stew the apples down to a soft mush.", "Sieve, then return to a low heat.", "Cook slowly until dark and spoonable.", "Add spices and pot the velvety butter."],
  },
];

export const CottageKitchenDemoClaudeOpus: React.FC = () => {
  const [id, setId] = useState(1);
  const [sealed, setSealed] = useState(false);

  const p = PRESERVES.find((x) => x.id === id) ?? PRESERVES[0];

  const pick = (i: number) => {
    setId(i);
    setSealed(false);
  };

  return (
    <div className="ck-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&display=swap');

        .ck-root {
          min-height: 100vh; width: 100%;
          background: #f3ead6;
          background-image:
            radial-gradient(circle at 14% 12%, rgba(138,154,120,0.10) 0 12px, transparent 13px),
            radial-gradient(circle at 86% 78%, rgba(201,139,139,0.10) 0 10px, transparent 11px),
            linear-gradient(180deg, #f6efdd, #efe4cd);
          color: #5c4a3a; font-family: 'Fraunces', serif;
          padding: 1.4rem; display: flex; justify-content: center;
        }
        .ck-shell { width: 100%; max-width: 920px; }

        /* gingham banner */
        .ck-banner {
          position: relative; text-align: center; padding: 1.1rem 1rem 1.3rem; margin-bottom: 1.2rem;
          background-color: #e7d6b6;
          background-image:
            linear-gradient(90deg, rgba(138,154,120,0.5) 50%, transparent 50%),
            linear-gradient(rgba(138,154,120,0.5) 50%, transparent 50%);
          background-size: 22px 22px;
          border: 2px dashed #8a9a78; border-radius: 14px;
          box-shadow: 0 6px 18px rgba(120,100,70,0.18);
        }
        .ck-banner::after {
          content: ''; position: absolute; left: 8px; right: 8px; bottom: -9px; height: 14px;
          background: radial-gradient(circle at 10px -2px, #e7d6b6 9px, transparent 10px) repeat-x;
          background-size: 20px 14px;
        }
        .ck-banner h1 { font-family: 'Caveat', cursive; font-size: clamp(2rem, 5.5vw, 3rem); color: #6b5440; margin: 0; line-height: 0.95; text-shadow: 1px 1px 0 #f6efdd; }
        .ck-banner p { font-size: 0.72rem; letter-spacing: 0.28em; text-transform: uppercase; color: #8a7a5e; margin: 0.3rem 0 0; }

        .ck-cols { display: grid; grid-template-columns: 188px 1fr 250px; gap: 1.2rem; align-items: start; }

        .ck-h { font-family: 'Caveat', cursive; font-size: 1.5rem; color: #8a9a78; margin: 0 0 0.5rem; }

        /* pantry shelf */
        .shelf { background: #efe1c4; border: 2px dashed #c9a36a; border-radius: 12px; padding: 0.7rem; }
        .jar-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        .jar-btn {
          cursor: pointer; border: 2px solid transparent; border-radius: 10px; padding: 0.4rem 0.2rem 0.3rem; background: transparent;
          display: flex; flex-direction: column; align-items: center; transition: all 0.18s ease;
        }
        .jar-btn:hover { background: #f6efdd; transform: translateY(-2px); }
        .jar-btn.active { background: #fbf6e8; border-color: #c98b8b; box-shadow: 0 4px 10px rgba(160,120,90,0.18); }
        .jar-btn span { font-family: 'Caveat', cursive; font-size: 1.05rem; line-height: 1; margin-top: 0.2rem; color: #6b5440; }

        /* recipe card */
        .recipe {
          background: #fbf6e8; border-radius: 14px; padding: 1.3rem 1.4rem;
          border: 1px solid #e0cda2;
          background-image: repeating-linear-gradient(transparent 0 31px, rgba(138,154,120,0.16) 31px 32px);
          box-shadow: 0 8px 22px rgba(140,115,80,0.18);
        }
        .rc-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.6rem; }
        .rc-title { flex: 1; }
        .rc-title h2 { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.4rem; margin: 0; color: #6b5440; }
        .rc-season { font-family: 'Caveat', cursive; font-size: 1.2rem; color: #c98b8b; }
        .rc-cols { display: grid; grid-template-columns: 1fr 1.2fr; gap: 1.2rem; margin-top: 0.6rem; }
        .rc-sub { font-family: 'Caveat', cursive; font-size: 1.3rem; color: #8a9a78; margin: 0 0 0.3rem; }
        .ing { list-style: none; padding: 0; margin: 0; }
        .ing li { font-size: 0.92rem; line-height: 1.9; padding-left: 1.3rem; position: relative; }
        .ing li::before { content: '✿'; position: absolute; left: 0; color: #c98b8b; font-size: 0.8rem; }
        .steps { padding-left: 0; margin: 0; list-style: none; counter-reset: s; }
        .steps li { font-size: 0.92rem; line-height: 1.55; margin-bottom: 0.5rem; padding-left: 2rem; position: relative; counter-increment: s; }
        .steps li::before {
          content: counter(s); position: absolute; left: 0; top: 0.05rem; width: 1.35rem; height: 1.35rem;
          background: #8a9a78; color: #fbf6e8; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-family: 'Caveat', cursive; font-size: 1rem;
        }
        .rc-note { margin-top: 0.9rem; font-style: italic; font-size: 0.9rem; color: #9a8568; border-top: 1px dashed #d8c198; padding-top: 0.6rem; }

        /* label / seal panel */
        .panel { background: #efe1c4; border: 2px dashed #c9a36a; border-radius: 12px; padding: 0.9rem; text-align: center; }
        .jar-stage { position: relative; display: inline-block; margin: 0.2rem 0 0.6rem; }
        .jar-svg { display: block; }
        .cloth { animation: drop 0.4s ease; }
        @keyframes drop { from { transform: translateY(-8px); opacity: 0; } to { opacity: 1; } }
        .wax {
          position: absolute; top: 6px; left: 50%; transform: translateX(-50%) scale(0); width: 46px; height: 46px;
          background: radial-gradient(circle at 38% 34%, #d96a6a, #b03a4a); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; color: #fbe7d2; font-family: 'Caveat', cursive; font-size: 1.4rem;
          box-shadow: 0 2px 6px rgba(120,30,40,0.4); animation: press 0.45s cubic-bezier(0.3,1.4,0.5,1) forwards;
        }
        @keyframes press { to { transform: translateX(-50%) scale(1); } }
        .ymarker { font-family: 'Caveat', cursive; font-size: 1.15rem; color: #8a9a78; }
        .seal-btn {
          margin-top: 0.8rem; width: 100%; cursor: pointer; font-family: 'Caveat', cursive; font-size: 1.3rem;
          background: #c98b8b; color: #fbf6e8; border: none; border-radius: 10px; padding: 0.5rem; box-shadow: 0 4px 0 #a96b6b;
        }
        .seal-btn:active { transform: translateY(3px); box-shadow: none; }
        .seal-btn.done { background: #8a9a78; box-shadow: 0 4px 0 #6f7d60; cursor: default; }

        @media (max-width: 880px) {
          .ck-cols { grid-template-columns: 1fr; }
          .rc-cols { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ck-shell">
        <div className="ck-banner">
          <h1>The Cottage Pantry</h1>
          <p>a little book of preserves</p>
        </div>

        <div className="ck-cols">
          {/* PANTRY SHELF */}
          <div>
            <div className="ck-h">On the shelf</div>
            <div className="shelf">
              <div className="jar-row">
                {PRESERVES.map((x) => (
                  <button key={x.id} type="button" className={`jar-btn ${x.id === id ? "active" : ""}`} onClick={() => pick(x.id)}>
                    <svg width="42" height="54" viewBox="0 0 42 54">
                      <rect x="13" y="2" width="16" height="7" rx="2" fill={x.lid} />
                      <path d="M8 12 Q8 9 13 9 L29 9 Q34 9 34 12 L34 48 Q34 52 30 52 L12 52 Q8 52 8 48 Z" fill={x.jar} opacity="0.92" />
                      <rect x="8" y="28" width="26" height="14" rx="2" fill="#fbf6e8" opacity="0.9" />
                      <rect x="12" y="13" width="6" height="34" rx="3" fill="#fff" opacity="0.18" />
                    </svg>
                    <span>{x.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RECIPE */}
          <div className="recipe">
            <div className="rc-top">
              <div className="rc-title">
                <h2>{p.name}</h2>
                <span className="rc-season">~ {p.season} ~</span>
              </div>
            </div>
            <div className="rc-cols">
              <div>
                <div className="rc-sub">You will need</div>
                <ul className="ing">
                  {p.ingredients.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </div>
              <div>
                <div className="rc-sub">Method</div>
                <ol className="steps">
                  {p.steps.map((st, i) => <li key={i}>{st}</li>)}
                </ol>
              </div>
            </div>
            <div className="rc-note">{p.note}</div>
          </div>

          {/* LABEL & SEAL */}
          <div className="panel">
            <div className="ck-h">Seal &amp; label</div>
            <div className="jar-stage">
              {sealed && <div className="wax">✿</div>}
              <svg className="jar-svg" width="120" height="150" viewBox="0 0 120 150">
                <rect x="40" y="6" width="40" height="14" rx="4" fill={p.lid} />
                <path d="M22 30 Q22 22 36 22 L84 22 Q98 22 98 30 L98 134 Q98 144 86 144 L34 144 Q22 144 22 134 Z" fill={p.jar} opacity="0.92" />
                <rect x="22" y="70" width="76" height="40" rx="4" fill="#fbf6e8" opacity="0.95" />
                <rect x="34" y="34" width="14" height="100" rx="7" fill="#fff" opacity="0.16" />
                {sealed && (
                  <g className="cloth">
                    <path d="M30 22 Q60 6 90 22 L86 30 Q60 18 34 30 Z" fill="#c98b8b" />
                    <path d="M30 22 L34 30 M90 22 L86 30 M60 13 L60 22" stroke="#fbf6e8" strokeWidth="1.4" />
                  </g>
                )}
                <text x="60" y="92" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="13" fill="#6b5440">{p.name.split(" ")[0]}</text>
                <text x="60" y="106" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="10" fill="#9a8568">2026</text>
              </svg>
            </div>
            <div className="ymarker">{p.yield}</div>
            <button type="button" className={`seal-btn ${sealed ? "done" : ""}`} onClick={() => setSealed(true)} disabled={sealed}>
              {sealed ? "sealed with wax ✓" : "seal the jar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
