"use client";

import React, { useState } from "react";

interface Case {
  id: number;
  code: string;
  title: string;
  suspect: string;
  evidence: string[];
  note: string;
}

const CASES: Case[] = [
  {
    id: 1,
    code: "No. 0447",
    title: "The Vanishing Chanteuse",
    suspect: "The Bandleader",
    evidence: ["Lipstick-stained glass", "A torn ticket stub", "Pawn-shop receipt, 3 a.m."],
    note: "She sang the last set, then nothing. The trumpet player swears she left alone. He's lying — his coat was dry, and it rained all night.",
  },
  {
    id: 2,
    code: "No. 0512",
    title: "Smoke Over 5th Street",
    suspect: "The Landlord",
    evidence: ["A half-burnt letter", "A spare brass key", "An unpaid betting slip"],
    note: "The fire was no accident. Someone wanted the ledgers gone more than the building. Follow the debt, not the flames.",
  },
  {
    id: 3,
    code: "No. 0588",
    title: "The Last Streetcar",
    suspect: "The Conductor",
    evidence: ["A watch stopped at 11:58", "A used transfer ticket", "A coat button, pearl"],
    note: "Everyone got off at Elm. Everyone but one. The watch stopped two minutes before the line says the car reached the depot.",
  },
];

interface Clue {
  id: string;
  label: string;
  x: number;
  y: number;
}

const CLUES: Clue[] = [
  { id: "a", label: "🚬 the alibi", x: 18, y: 20 },
  { id: "b", label: "💄 the dame", x: 72, y: 16 },
  { id: "c", label: "🔑 the key", x: 16, y: 70 },
  { id: "d", label: "🎩 the witness", x: 76, y: 66 },
];

export const NoirDetectiveDeskDemoClaudeOpus: React.FC = () => {
  const [caseId, setCaseId] = useState(1);
  const [pinned, setPinned] = useState<Record<string, boolean>>({});
  const [solved, setSolved] = useState<Record<number, boolean>>({});

  const active = CASES.find((c) => c.id === caseId) ?? CASES[0];
  const isSolved = !!solved[caseId];

  const selectCase = (id: number) => {
    setCaseId(id);
    setPinned({});
  };
  const togglePin = (id: string) => setPinned((p) => ({ ...p, [id]: !p[id] }));
  const closeCase = () => setSolved((s) => ({ ...s, [caseId]: true }));

  return (
    <div className="noir-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Oswald:wght@500;600;700&family=Cutive+Mono&display=swap');

        .noir-root {
          min-height: 100vh; width: 100%;
          background:
            radial-gradient(ellipse at 50% 12%, rgba(255,196,110,0.16) 0%, transparent 42%),
            radial-gradient(ellipse at 50% 40%, #2a241a 0%, #14110c 70%, #0b0907 100%);
          color: #cdc4b2;
          font-family: 'Cutive Mono', monospace;
          position: relative; overflow: hidden;
          padding: 1.6rem 1.8rem;
          filter: saturate(0.55);
        }
        /* venetian-blind shadow stripes */
        .noir-root::before {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 6; opacity: 0.5;
          background: repeating-linear-gradient(8deg, transparent 0 26px, rgba(0,0,0,0.42) 26px 40px);
          mask-image: linear-gradient(120deg, #000 0%, transparent 55%);
          -webkit-mask-image: linear-gradient(120deg, #000 0%, transparent 55%);
        }
        /* film grain + vignette */
        .noir-root::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 7;
          background:
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0),
            radial-gradient(ellipse at 50% 45%, transparent 40%, rgba(0,0,0,0.7) 100%);
          background-size: 3px 3px, 100% 100%;
        }

        .noir-wrap { position: relative; z-index: 3; max-width: 980px; margin: 0 auto; }

        .noir-top {
          display: flex; align-items: flex-end; justify-content: space-between;
          border-bottom: 1px solid rgba(205,196,178,0.2); padding-bottom: 0.8rem; margin-bottom: 1.2rem;
        }
        .noir-brand { font-family: 'Special Elite', cursive; font-size: 1.6rem; color: #e8dec6; letter-spacing: 0.02em; }
        .noir-brand small { display:block; font-family: 'Cutive Mono', monospace; font-size: 0.68rem; letter-spacing: 0.32em; color: #8a8170; margin-top: 0.25rem; }
        .noir-stamp-date { font-family: 'Special Elite', cursive; font-size: 0.85rem; color: #9a9078; border: 1px solid rgba(205,196,178,0.3); padding: 0.3rem 0.7rem; transform: rotate(-2deg); }

        .noir-body { display: grid; grid-template-columns: 210px 1fr 300px; gap: 1.4rem; }

        /* case files list */
        .files-title, .board-title { font-family: 'Oswald', sans-serif; font-size: 0.7rem; letter-spacing: 0.24em; color: #8a8170; margin-bottom: 0.7rem; text-transform: uppercase; }
        .file {
          background: linear-gradient(180deg, #d8cba6, #c4b48c);
          color: #2a2316; cursor: pointer; padding: 0.7rem 0.8rem; margin-bottom: 0.6rem;
          border-left: 4px solid #8a3a30; position: relative;
          box-shadow: 2px 3px 7px rgba(0,0,0,0.5);
          transform: rotate(-0.6deg); transition: transform 0.15s ease;
        }
        .file:nth-child(odd) { transform: rotate(0.7deg); }
        .file:hover { transform: rotate(0) translateX(3px); }
        .file.active { border-left-color: #c0392b; box-shadow: 3px 4px 12px rgba(0,0,0,0.6); }
        .file-code { font-family: 'Special Elite', cursive; font-size: 0.68rem; color: #6a5a3a; letter-spacing: 0.1em; }
        .file-title { font-family: 'Special Elite', cursive; font-size: 0.96rem; line-height: 1.2; margin-top: 0.2rem; }
        .file-tab { position: absolute; top: -7px; right: 10px; width: 34px; height: 9px; background: #b89a5a; border-radius: 3px 3px 0 0; }

        /* dossier */
        .dossier {
          position: relative; background: linear-gradient(180deg, #ece3c8, #ddd1ad);
          color: #2a2316; padding: 1.4rem 1.6rem; min-height: 360px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6); border: 1px solid #b6a679;
        }
        .dossier::before {
          content: 'CONFIDENTIAL'; position: absolute; top: 12px; right: 14px;
          font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 0.7rem; letter-spacing: 0.2em;
          color: rgba(140,58,48,0.55); border: 2px solid rgba(140,58,48,0.45); padding: 0.15rem 0.5rem; transform: rotate(4deg);
        }
        .dos-code { font-family: 'Special Elite', cursive; font-size: 0.74rem; color: #6a5a3a; letter-spacing: 0.12em; }
        .dos-title {
          font-family: 'Special Elite', cursive; font-size: 1.5rem; color: #1f1a10; margin: 0.2rem 0 1rem;
          border-bottom: 2px solid rgba(60,48,28,0.3); padding-bottom: 0.5rem;
        }
        .dos-title::after { content: '▋'; color: #8a3a30; animation: caret 1s steps(2) infinite; margin-left: 2px; }
        @keyframes caret { 50% { opacity: 0; } }
        .dos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem 1.4rem; }
        .dos-h { font-family: 'Oswald', sans-serif; font-size: 0.66rem; letter-spacing: 0.2em; text-transform: uppercase; color: #8a6a3a; margin-bottom: 0.3rem; }
        .dos-suspect { font-family: 'Special Elite', cursive; font-size: 1.15rem; color: #8a3a30; }
        .dos-ev { list-style: none; margin: 0; padding: 0; }
        .dos-ev li { font-size: 0.86rem; line-height: 1.7; color: #3a3020; }
        .dos-ev li::before { content: '▪ '; color: #8a3a30; }
        .dos-note { grid-column: span 2; font-size: 0.92rem; line-height: 1.65; color: #2a2316; font-style: italic; border-top: 1px dashed rgba(60,48,28,0.3); padding-top: 0.8rem; }

        .solved-stamp {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%) rotate(-11deg);
          font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 2.6rem; letter-spacing: 0.1em;
          color: rgba(192,57,43,0.85); border: 5px solid rgba(192,57,43,0.85); border-radius: 8px;
          padding: 0.1rem 1rem; pointer-events: none;
          animation: thunk 0.4s cubic-bezier(0.3,1.4,0.5,1);
        }
        @keyframes thunk { 0% { transform: translateX(-50%) rotate(-11deg) scale(2.4); opacity: 0; } 60% { transform: translateX(-50%) rotate(-11deg) scale(0.92); opacity: 1; } 100% { transform: translateX(-50%) rotate(-11deg) scale(1); } }

        .close-btn {
          margin-top: 1rem; font-family: 'Oswald', sans-serif; font-weight: 700; letter-spacing: 0.08em;
          background: #1f1a10; color: #e8dec6; border: 1px solid #000; padding: 0.55rem 1.2rem; cursor: pointer;
          text-transform: uppercase; font-size: 0.8rem;
        }
        .close-btn:hover { background: #8a3a30; }
        .close-btn:disabled { opacity: 0.4; cursor: default; }

        /* corkboard */
        .board {
          position: relative; background:
            radial-gradient(circle at 30% 30%, rgba(0,0,0,0.18), transparent 40%),
            linear-gradient(135deg, #7a5a36, #5e4327);
          border: 8px solid #2a1d10; border-radius: 4px; min-height: 360px;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
          overflow: hidden;
        }
        .board-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .hub {
          position: absolute; left: 47%; top: 44%; transform: translate(-50%,-50%); z-index: 2;
          background: #1f1a10; color: #e8dec6; font-family: 'Special Elite', cursive; font-size: 0.74rem;
          padding: 0.45rem 0.6rem; border: 1px solid #000; box-shadow: 0 3px 8px rgba(0,0,0,0.6); text-align: center; max-width: 90px;
        }
        .clue {
          position: absolute; transform: translate(-50%,-50%); z-index: 2; cursor: pointer;
          background: #efe7cf; color: #2a2316; font-family: 'Special Elite', cursive; font-size: 0.74rem;
          padding: 0.45rem 0.6rem; box-shadow: 0 3px 8px rgba(0,0,0,0.55);
          transition: transform 0.12s ease, box-shadow 0.2s ease;
        }
        .clue::before { content: '📌'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); font-size: 0.8rem; filter: grayscale(0.3); }
        .clue:hover { transform: translate(-50%,-50%) scale(1.06); }
        .clue.pinned { background: #d8c79c; box-shadow: 0 3px 12px rgba(192,57,43,0.5); }

        @media (max-width: 880px) {
          .noir-body { grid-template-columns: 1fr; }
          .files-title ~ .file { display: inline-block; width: 46%; margin-right: 2%; }
          .board { min-height: 300px; }
        }
      `}</style>

      <div className="noir-wrap">
        <div className="noir-top">
          <div className="noir-brand">
            Marlowe &amp; Co.
            <small>PRIVATE INVESTIGATIONS · EST. 1947</small>
          </div>
          <div className="noir-stamp-date">FILED · OCT 14, 11:58 PM</div>
        </div>

        <div className="noir-body">
          {/* FILES */}
          <div>
            <div className="files-title">Open Cases</div>
            {CASES.map((c) => (
              <div
                key={c.id}
                className={`file ${c.id === caseId ? "active" : ""}`}
                onClick={() => selectCase(c.id)}
              >
                <span className="file-tab" />
                <div className="file-code">{c.code}</div>
                <div className="file-title">{c.title}</div>
              </div>
            ))}
          </div>

          {/* DOSSIER */}
          <div className="dossier" key={active.id}>
            <div className="dos-code">CASE FILE {active.code}</div>
            <h2 className="dos-title">{active.title}</h2>
            <div className="dos-grid">
              <div>
                <div className="dos-h">Prime Suspect</div>
                <div className="dos-suspect">{active.suspect}</div>
              </div>
              <div>
                <div className="dos-h">Evidence Logged</div>
                <ul className="dos-ev">
                  {active.evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
              <div className="dos-note">{active.note}</div>
            </div>

            <button
              type="button"
              className="close-btn"
              onClick={closeCase}
              disabled={isSolved}
            >
              {isSolved ? "Case Closed" : "Close the Case"}
            </button>

            {isSolved && <div className="solved-stamp">SOLVED</div>}
          </div>

          {/* CORKBOARD */}
          <div>
            <div className="board-title">The Board · pin the connections</div>
            <div className="board">
              <svg className="board-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                {CLUES.filter((c) => pinned[c.id]).map((c) => (
                  <line
                    key={c.id}
                    x1={c.x}
                    y1={c.y}
                    x2={47}
                    y2={44}
                    stroke="#c0392b"
                    strokeWidth="0.7"
                  />
                ))}
              </svg>
              <div className="hub">{active.suspect}</div>
              {CLUES.map((c) => (
                <div
                  key={c.id}
                  className={`clue ${pinned[c.id] ? "pinned" : ""}`}
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  onClick={() => togglePin(c.id)}
                >
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
