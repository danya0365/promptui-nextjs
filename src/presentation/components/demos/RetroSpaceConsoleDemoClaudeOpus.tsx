"use client";

import React, { useState } from "react";

interface Subsystem {
  key: string;
  label: string;
  detail: string;
}

const SUBSYSTEMS: Subsystem[] = [
  { key: "lamps", label: "GROW LAMPS", detail: "spectrum 6500K" },
  { key: "water", label: "WATER LOOP", detail: "recirc 1.2 L/m" },
  { key: "o2", label: "O₂ SCRUBBER", detail: "CO₂ → 0.04%" },
  { key: "heat", label: "HEATERS", detail: "set 21°C" },
  { key: "comms", label: "COMMS UPLINK", detail: "earth 1.3s lag" },
  { key: "solar", label: "SOLAR ARRAY", detail: "tracking sun" },
];

export const RetroSpaceConsoleDemoClaudeOpus: React.FC = () => {
  const [on, setOn] = useState<Record<string, boolean>>({
    lamps: true,
    water: true,
    o2: true,
    heat: false,
    comms: true,
    solar: true,
  });
  const [armed, setArmed] = useState(false);

  const online = SUBSYSTEMS.filter((s) => on[s.key]).length;
  const nominal = online >= 5;

  const toggle = (k: string) => setOn((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="retro-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Oswald:wght@500;600;700&display=swap');

        .retro-root {
          min-height: 100vh; width: 100%;
          background:
            radial-gradient(ellipse at 50% 0%, #e8d6b0 0%, #d8c098 55%, #c4a878 100%);
          background-color: #d8c098;
          font-family: 'Oswald', sans-serif;
          color: #3a2e1c;
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          padding: 2rem 1.5rem;
        }
        /* warm plastic speckle */
        .retro-root::before {
          content: ''; position: absolute; inset: 0; pointer-events: none; opacity: 0.35;
          background-image: radial-gradient(circle at 1px 1px, rgba(90,60,20,0.12) 1px, transparent 0);
          background-size: 5px 5px;
        }

        /* ---- the console body ---- */
        .console {
          position: relative; z-index: 2; width: 100%; max-width: 940px;
          background: linear-gradient(180deg, #efe0c2, #d9c6a0);
          border-radius: 22px;
          padding: 1.6rem;
          box-shadow:
            inset 0 2px 0 rgba(255,250,235,0.9),
            inset 0 -6px 14px rgba(120,85,35,0.35),
            0 20px 50px rgba(70,45,15,0.4);
          border: 2px solid #b89a66;
        }
        .console-rivets { position: absolute; inset: 12px; border-radius: 16px; pointer-events: none; }
        .rivet {
          position: absolute; width: 10px; height: 10px; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #fff6e2, #9a7a44 70%, #6e5026);
          box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .rivet.tl { top: 0; left: 0; } .rivet.tr { top: 0; right: 0; }
        .rivet.bl { bottom: 0; left: 0; } .rivet.br { bottom: 0; right: 0; }

        .console-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1.1rem; padding: 0 0.4rem;
        }
        .badge { display: flex; align-items: center; gap: 0.7rem; }
        .badge-chip {
          width: 46px; height: 46px; border-radius: 10px;
          background: linear-gradient(150deg, #d8534a, #a8342c);
          border: 2px solid #7e241e;
          display: flex; align-items: center; justify-content: center;
          color: #ffe9d8; font-size: 1.5rem;
          box-shadow: inset 0 2px 3px rgba(255,255,255,0.3), 0 3px 5px rgba(0,0,0,0.25);
        }
        .badge-text h2 { margin: 0; font-size: 1.2rem; font-weight: 700; letter-spacing: 0.04em; color: #4a3a22; }
        .badge-text p { margin: 0; font-size: 0.72rem; letter-spacing: 0.18em; color: #8a6f44; }
        .head-plate {
          font-family: 'VT323', monospace; font-size: 1.1rem; color: #6a5230;
          background: #c9b384; padding: 0.2rem 0.7rem; border-radius: 5px;
          border: 1px solid #a88c5a; box-shadow: inset 0 1px 2px rgba(120,85,35,0.4);
        }

        /* ---- screens row ---- */
        .screens { display: grid; grid-template-columns: 1.4fr 1fr 0.8fr; gap: 1.1rem; margin-bottom: 1.2rem; }

        .crt {
          position: relative; border-radius: 12px; overflow: hidden;
          background: radial-gradient(ellipse at 50% 45%, #2a1c08, #160e03 90%);
          border: 6px solid #b89a66;
          box-shadow: inset 0 0 18px rgba(0,0,0,0.8), inset 0 0 50px rgba(255,160,0,0.06), 0 3px 6px rgba(0,0,0,0.3);
          padding: 0.9rem 1rem;
          color: #ffb000;
          font-family: 'VT323', monospace;
          text-shadow: 0 0 6px rgba(255,176,0,0.6);
        }
        .crt::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(180deg, rgba(0,0,0,0) 0 2px, rgba(0,0,0,0.22) 2px 3px);
          mix-blend-mode: multiply;
        }
        .crt-label { font-size: 1.1rem; letter-spacing: 0.1em; color: #ffcf6a; border-bottom: 1px solid rgba(255,176,0,0.3); padding-bottom: 0.25rem; margin-bottom: 0.5rem; }

        /* oscilloscope */
        .scope { height: 120px; position: relative; }
        .scope-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,176,0,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,176,0,0.12) 1px, transparent 1px);
          background-size: 22px 22px;
        }
        .scope svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .scope path { fill: none; stroke: #ffb000; stroke-width: 2; filter: drop-shadow(0 0 4px rgba(255,176,0,0.8)); }
        .scope .sweep { stroke-dasharray: 600; stroke-dashoffset: 600; animation: sweep 3.2s linear infinite; }
        @keyframes sweep { to { stroke-dashoffset: 0; } }
        .scope-foot { font-size: 0.95rem; margin-top: 0.3rem; color: #e8a23a; }

        /* status grid screen */
        .stat-line { display: flex; justify-content: space-between; font-size: 1.05rem; line-height: 1.5; }
        .stat-ok { color: #8fe06a; text-shadow: 0 0 6px rgba(143,224,106,0.6); }
        .stat-off { color: #d8603a; text-shadow: 0 0 6px rgba(216,96,58,0.5); }
        .stat-foot { margin-top: 0.5rem; font-size: 1.15rem; }

        /* LED day counter */
        .led-screen {
          background: radial-gradient(ellipse at 50% 40%, #1a0f02, #0e0801);
          border: 6px solid #b89a66; border-radius: 12px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 0.6rem; position: relative; overflow: hidden;
        }
        .led-screen::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(180deg, transparent 0 2px, rgba(0,0,0,0.2) 2px 3px);
        }
        .led-cap { font-family: 'VT323', monospace; font-size: 0.95rem; color: #ffcf6a; letter-spacing: 0.12em; }
        .led-num { font-family: 'VT323', monospace; font-size: 3.6rem; line-height: 1; color: #ff5a36; text-shadow: 0 0 10px rgba(255,90,54,0.7); }
        .led-sub { font-family: 'VT323', monospace; font-size: 1rem; color: #e8a23a; }

        /* ---- control panel ---- */
        .panel {
          background: linear-gradient(180deg, #d9c6a0, #c9b384);
          border-radius: 14px; padding: 1.1rem;
          box-shadow: inset 0 3px 8px rgba(120,85,35,0.4), inset 0 -2px 0 rgba(255,250,235,0.6);
          border: 1px solid #b89a66;
          display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 0.9rem; align-items: stretch;
        }

        .switch {
          background: #c4ad7c; border-radius: 9px; padding: 0.6rem 0.7rem;
          border: 1px solid #a88c5a; cursor: pointer; text-align: left;
          box-shadow: inset 0 1px 2px rgba(255,250,235,0.6);
          transition: background 0.2s ease;
        }
        .switch:hover { background: #ccb684; }
        .switch-top { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
        .switch-name { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.03em; color: #4a3a22; }
        .rocker {
          width: 40px; height: 22px; border-radius: 5px; flex-shrink: 0; position: relative;
          background: #8a6f44; border: 1px solid #6e5026;
          box-shadow: inset 0 2px 3px rgba(0,0,0,0.4);
          transition: background 0.2s ease;
        }
        .rocker.on { background: #6a9a3a; }
        .rocker-knob {
          position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; border-radius: 3px;
          background: linear-gradient(180deg, #f4ead2, #cdb888);
          box-shadow: 0 1px 2px rgba(0,0,0,0.4);
          transition: transform 0.18s cubic-bezier(0.4,0,0.2,1);
        }
        .rocker.on .rocker-knob { transform: translateX(18px); }
        .switch-detail { font-family: 'VT323', monospace; font-size: 0.95rem; color: #7a5f34; margin-top: 0.35rem; }
        .lamp { width: 9px; height: 9px; border-radius: 50%; display: inline-block; margin-right: 5px; background: #6e5026; }
        .lamp.lit { background: #ffd23a; box-shadow: 0 0 7px rgba(255,210,58,0.9); }

        /* big initiate */
        .initiate {
          grid-row: span 2; align-self: center;
          display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
          padding: 0 0.5rem;
        }
        .big-btn {
          width: 96px; height: 96px; border-radius: 50%; cursor: pointer;
          font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 0.92rem; letter-spacing: 0.05em;
          color: #fff2e6; border: 4px solid #7e241e;
          background: radial-gradient(circle at 38% 32%, #e8645a, #b8382e 70%, #8a2820);
          box-shadow: inset 0 3px 6px rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.35), 0 6px 0 #7e241e, 0 10px 14px rgba(0,0,0,0.3);
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .big-btn:active { transform: translateY(5px); box-shadow: inset 0 3px 6px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.35), 0 1px 0 #7e241e; }
        .big-btn.armed {
          background: radial-gradient(circle at 38% 32%, #7ad06a, #3f9a3a 70%, #2e7a2c);
          border-color: #246e22; box-shadow: inset 0 3px 6px rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.3), 0 6px 0 #246e22, 0 10px 14px rgba(0,0,0,0.3);
        }
        .init-lamp {
          font-family: 'VT323', monospace; font-size: 1rem; letter-spacing: 0.08em;
          display: flex; align-items: center; gap: 6px; color: #6a5230;
        }
        .init-lamp .led { width: 11px; height: 11px; border-radius: 50%; background: #8a6f44; }
        .init-lamp .led.go { background: #58d23a; box-shadow: 0 0 9px rgba(88,210,58,0.9); animation: blink 1s steps(2) infinite; }
        @keyframes blink { 50% { opacity: 0.35; } }

        @media (max-width: 820px) {
          .screens { grid-template-columns: 1fr; }
          .panel { grid-template-columns: 1fr 1fr; }
          .initiate { grid-row: auto; grid-column: span 2; flex-direction: row; justify-content: center; }
        }
      `}</style>

      <div className="console">
        <div className="console-rivets">
          <span className="rivet tl" /><span className="rivet tr" />
          <span className="rivet bl" /><span className="rivet br" />
        </div>

        {/* HEAD */}
        <div className="console-head">
          <div className="badge">
            <div className="badge-chip">🌱</div>
            <div className="badge-text">
              <h2>BACKYARD MOON PROGRAM</h2>
              <p>ORBITAL GREENHOUSE · UNIT 7</p>
            </div>
          </div>
          <div className="head-plate">EST. 1986</div>
        </div>

        {/* SCREENS */}
        <div className="screens">
          {/* oscilloscope */}
          <div className="crt">
            <div className="crt-label">O₂ TELEMETRY</div>
            <div className="scope">
              <div className="scope-grid" />
              <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                <path
                  className="sweep"
                  d="M0,60 C25,20 45,100 70,60 C95,20 115,100 140,60 C165,20 185,100 210,60 C235,20 255,100 280,60 L300,60"
                />
              </svg>
            </div>
            <div className="scope-foot">
              ▸ {nominal ? "OXYGEN STABLE · 20.9%" : "RECALIBRATING…"}
            </div>
          </div>

          {/* status grid */}
          <div className="crt">
            <div className="crt-label">SUBSYSTEMS</div>
            {SUBSYSTEMS.map((s) => (
              <div className="stat-line" key={s.key}>
                <span>{s.label}</span>
                <span className={on[s.key] ? "stat-ok" : "stat-off"}>
                  {on[s.key] ? "● ONLINE" : "○ STANDBY"}
                </span>
              </div>
            ))}
            <div className="stat-foot">
              {nominal ? (
                <span className="stat-ok">ALL SYSTEMS NOMINAL ☺</span>
              ) : (
                <span className="stat-off">CHECK SUBSYSTEMS</span>
              )}
            </div>
          </div>

          {/* LED counter */}
          <div className="led-screen">
            <div className="led-cap">MISSION DAY</div>
            <div className="led-num">042</div>
            <div className="led-sub">{online}/6 ONLINE</div>
          </div>
        </div>

        {/* CONTROL PANEL */}
        <div className="panel">
          {SUBSYSTEMS.map((s) => (
            <div className="switch" key={s.key} onClick={() => toggle(s.key)}>
              <div className="switch-top">
                <span className="switch-name">
                  <span className={`lamp ${on[s.key] ? "lit" : ""}`} />
                  {s.label}
                </span>
                <span className={`rocker ${on[s.key] ? "on" : ""}`}>
                  <span className="rocker-knob" />
                </span>
              </div>
              <div className="switch-detail">{on[s.key] ? s.detail : "— idle —"}</div>
            </div>
          ))}

          <div className="initiate">
            <button
              type="button"
              className={`big-btn ${armed ? "armed" : ""}`}
              onClick={() => setArmed((a) => !a)}
            >
              {armed ? "CYCLE\nRUNNING" : "BEGIN\nCYCLE"}
            </button>
            <span className="init-lamp">
              <span className={`led ${armed ? "go" : ""}`} />
              {armed ? "GROWING" : "READY"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
