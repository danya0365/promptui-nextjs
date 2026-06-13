"use client";

import React, { useState } from "react";

interface Record {
  code: string;
  label: string;
  value: string;
  state: string;
}

interface Section {
  key: string;
  label: string;
  sub: string;
  rows: Record[];
}

const SECTIONS: Section[] = [
  {
    key: "dep",
    label: "DEPARTURES",
    sub: "PLATFORM REGISTRY",
    rows: [
      { code: "07", label: "NORTH RING / GREY LINE", value: "04", state: "BOARDING" },
      { code: "12", label: "FOUNDRY DISTRICT EXPRESS", value: "11", state: "ON TIME" },
      { code: "19", label: "LOWER SECTORS LOCAL", value: "02", state: "DELAYED" },
      { code: "23", label: "RESERVOIR / WORKS LOOP", value: "08", state: "ON TIME" },
      { code: "31", label: "CENTRAL ARCHIVE SHUTTLE", value: "01", state: "HELD" },
    ],
  },
  {
    key: "arc",
    label: "ARCHIVE",
    sub: "RECORDS VAULT",
    rows: [
      { code: "A-44", label: "CIVIC PLANNING / 1971", value: "330", state: "SEALED" },
      { code: "B-09", label: "STRUCTURAL SURVEYS", value: "112", state: "OPEN" },
      { code: "C-87", label: "WATERWORKS LEDGER", value: "058", state: "OPEN" },
      { code: "D-15", label: "POPULATION CENSUS", value: "904", state: "RESTRICTED" },
      { code: "E-02", label: "FOUNDATION DECREES", value: "017", state: "SEALED" },
    ],
  },
  {
    key: "per",
    label: "PERSONNEL",
    sub: "DUTY ROSTER",
    rows: [
      { code: "P-1", label: "WORKS / MAINTENANCE", value: "240", state: "ON SHIFT" },
      { code: "P-2", label: "ARCHIVE WARDENS", value: "036", state: "ON SHIFT" },
      { code: "P-3", label: "PLATFORM CONTROL", value: "088", state: "ROTATING" },
      { code: "P-4", label: "STRUCTURAL ENGINEERS", value: "052", state: "OFF DUTY" },
      { code: "P-5", label: "NIGHT WATCH", value: "019", state: "STANDBY" },
    ],
  },
  {
    key: "sec",
    label: "SECTORS",
    sub: "GRID STATUS",
    rows: [
      { code: "I", label: "CENTRAL CONCOURSE", value: "100", state: "NOMINAL" },
      { code: "II", label: "FOUNDRY QUARTER", value: "094", state: "NOMINAL" },
      { code: "III", label: "RESERVOIR FIELD", value: "061", state: "CAUTION" },
      { code: "IV", label: "LOWER SECTORS", value: "078", state: "NOMINAL" },
      { code: "V", label: "OUTER WORKS", value: "042", state: "OFFLINE" },
    ],
  },
];

export const BrutalistConcreteTerminalDemoClaudeOpus: React.FC = () => {
  const [section, setSection] = useState("dep");
  const [engaged, setEngaged] = useState(true);

  const active = SECTIONS.find((s) => s.key === section) ?? SECTIONS[0];

  return (
    <div className="beton-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@500;600;700&family=Archivo+Narrow:wght@600;700&display=swap');

        .beton-root {
          min-height: 100vh; width: 100%;
          background-color: #8e8e8a;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 8%),
            radial-gradient(circle at 70% 60%, rgba(0,0,0,0.06) 0%, transparent 9%),
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
            linear-gradient(180deg, #9a9a96, #7e7e7a);
          background-size: 100% 100%, 100% 100%, 4px 4px, 100% 100%;
          color: #1c1c1a;
          font-family: 'Archivo', sans-serif;
          position: relative; overflow: hidden;
          padding: 1.6rem;
          display: flex; flex-direction: column;
        }

        /* concrete slab helper */
        .slab {
          background:
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0),
            linear-gradient(180deg, #b6b6b1, #9c9c97);
          background-size: 4px 4px, 100% 100%;
          border: 2px solid #1c1c1a;
          box-shadow: 8px 8px 0 rgba(28,28,26,0.55);
        }

        /* ---- header ---- */
        .beton-head {
          display: grid; grid-template-columns: 1fr auto; align-items: stretch;
          gap: 1.1rem; margin-bottom: 1.1rem;
        }
        .head-title { padding: 1.1rem 1.4rem; }
        .head-title h1 {
          font-family: 'Archivo Black', sans-serif; margin: 0;
          font-size: clamp(2.2rem, 6vw, 3.8rem); line-height: 0.82;
          letter-spacing: -0.02em; color: #1c1c1a;
        }
        .head-title .accent { color: #d8531f; }
        .head-title p {
          margin: 0.5rem 0 0; font-family: 'Archivo Narrow', sans-serif;
          font-weight: 700; letter-spacing: 0.32em; font-size: 0.72rem; color: #4a4a46;
        }
        .head-clock {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 1rem 1.6rem; min-width: 150px;
        }
        .clock-num { font-family: 'Archivo Black', sans-serif; font-size: 2.6rem; line-height: 1; color: #1c1c1a; }
        .clock-label { font-family: 'Archivo Narrow', sans-serif; font-weight: 700; letter-spacing: 0.2em; font-size: 0.62rem; color: #4a4a46; margin-top: 0.35rem; }

        /* ---- body ---- */
        .beton-body { display: grid; grid-template-columns: 230px 1fr; gap: 1.1rem; flex: 1; }

        /* nav blocks */
        .nav-col { display: flex; flex-direction: column; gap: 1.1rem; }
        .nav-block {
          padding: 1rem 1.1rem; cursor: pointer; position: relative;
          transition: transform 0.04s linear;
        }
        .nav-block:active { transform: translate(4px,4px); }
        .nav-block .nb-key { font-family: 'Archivo Narrow', sans-serif; font-weight: 700; font-size: 0.62rem; letter-spacing: 0.2em; color: #4a4a46; }
        .nav-block .nb-label { font-family: 'Archivo Black', sans-serif; font-size: 1.35rem; line-height: 0.95; color: #1c1c1a; margin-top: 0.2rem; }
        .nav-block.active {
          background: #1c1c1a;
          box-shadow: 8px 8px 0 rgba(216,83,31,0.85);
        }
        .nav-block.active .nb-key { color: #d8531f; }
        .nav-block.active .nb-label { color: #e8e8e3; }

        /* records panel */
        .rec-panel { padding: 0; display: flex; flex-direction: column; }
        .rec-head {
          display: flex; align-items: baseline; justify-content: space-between;
          padding: 0.9rem 1.3rem; border-bottom: 2px solid #1c1c1a;
          background: #1c1c1a; color: #e8e8e3;
        }
        .rec-head h2 { font-family: 'Archivo Black', sans-serif; margin: 0; font-size: 1.5rem; letter-spacing: -0.01em; }
        .rec-head span { font-family: 'Archivo Narrow', sans-serif; font-weight: 700; letter-spacing: 0.24em; font-size: 0.68rem; color: #9a9a96; }

        .rec-row {
          display: grid; grid-template-columns: 84px 1fr 120px 96px; align-items: center;
          padding: 0.95rem 1.3rem; border-bottom: 2px solid rgba(28,28,26,0.35);
          cursor: default; transition: none;
        }
        .rec-row:hover { background: #1c1c1a; color: #e8e8e3; }
        .rec-code { font-family: 'Archivo Black', sans-serif; font-size: 1.4rem; }
        .rec-label { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: 0.95rem; letter-spacing: 0.02em; }
        .rec-value { font-family: 'Archivo Black', sans-serif; font-size: 1.8rem; text-align: right; }
        .rec-state {
          font-family: 'Archivo Narrow', sans-serif; font-weight: 700; font-size: 0.68rem;
          letter-spacing: 0.12em; text-align: right; color: #4a4a46;
        }
        .rec-row:hover .rec-state { color: #d8531f; }

        /* footer / action switch */
        .beton-foot {
          display: grid; grid-template-columns: 1fr auto; gap: 1.1rem; margin-top: 1.1rem;
        }
        .foot-note {
          padding: 0.9rem 1.3rem; display: flex; align-items: center;
          font-family: 'Archivo Narrow', sans-serif; font-weight: 700; letter-spacing: 0.16em;
          font-size: 0.72rem; color: #4a4a46;
        }
        .switch-block {
          display: flex; align-items: stretch; cursor: pointer; min-width: 230px;
          border: 2px solid #1c1c1a; box-shadow: 8px 8px 0 rgba(28,28,26,0.55);
        }
        .switch-half {
          flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 0.9rem 0.6rem; font-family: 'Archivo Black', sans-serif; font-size: 1.1rem;
          background: #9c9c97; color: #4a4a46;
        }
        .switch-half .sh-sub { font-family: 'Archivo Narrow', sans-serif; font-weight: 700; font-size: 0.55rem; letter-spacing: 0.2em; margin-top: 0.15rem; }
        .switch-half.on.live { background: #1c1c1a; color: #d8531f; }
        .switch-half.off.dead { background: #1c1c1a; color: #e8e8e3; }

        @media (max-width: 820px) {
          .beton-body { grid-template-columns: 1fr; }
          .nav-col { flex-direction: row; flex-wrap: wrap; }
          .nav-block { flex: 1; min-width: 130px; }
          .rec-row { grid-template-columns: 56px 1fr 70px; }
          .rec-state { display: none; }
        }
      `}</style>

      {/* HEADER */}
      <div className="beton-head">
        <div className="head-title slab">
          <h1>
            BÉTON<span className="accent">.</span>
          </h1>
          <p>CENTRAL TERMINAL · PUBLIC RECORDS DIVISION</p>
        </div>
        <div className="head-clock slab">
          <span className="clock-num">18:42</span>
          <span className="clock-label">TERMINAL TIME</span>
        </div>
      </div>

      {/* BODY */}
      <div className="beton-body">
        <div className="nav-col">
          {SECTIONS.map((s) => (
            <div
              key={s.key}
              className={`nav-block slab ${s.key === section ? "active" : ""}`}
              onClick={() => setSection(s.key)}
            >
              <div className="nb-key">SECTION</div>
              <div className="nb-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="rec-panel slab">
          <div className="rec-head">
            <h2>{active.label}</h2>
            <span>{active.sub}</span>
          </div>
          {active.rows.map((r) => (
            <div className="rec-row" key={r.code}>
              <span className="rec-code">{r.code}</span>
              <span className="rec-label">{r.label}</span>
              <span className="rec-value">{r.value}</span>
              <span className="rec-state">{r.state}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="beton-foot">
        <div className="foot-note slab">
          ▪ RECORDS MAINTAINED UNDER MUNICIPAL ORDINANCE 44 · NO PHOTOGRAPHY BEYOND THIS POINT
        </div>
        <div className="switch-block" onClick={() => setEngaged((e) => !e)}>
          <div className={`switch-half on ${engaged ? "live" : ""}`}>
            ONLINE
            <span className="sh-sub">SYSTEM</span>
          </div>
          <div className={`switch-half off ${!engaged ? "dead" : ""}`}>
            HALT
            <span className="sh-sub">SYSTEM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
