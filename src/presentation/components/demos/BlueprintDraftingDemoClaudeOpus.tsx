"use client";

import React, { useState } from "react";

type LayerKey = "frame" | "mechanism" | "dimensions" | "annotations";

const LAYERS: { key: LayerKey; label: string }[] = [
  { key: "frame", label: "Frame & Body" },
  { key: "mechanism", label: "Mechanism" },
  { key: "dimensions", label: "Dimensions" },
  { key: "annotations", label: "Annotations" },
];

interface Part {
  id: number;
  ref: string;
  name: string;
  qty: number;
  cx: number;
  cy: number;
}

const PARTS: Part[] = [
  { id: 1, ref: "A-1", name: "Copper Boiler", qty: 1, cx: 96, cy: 96 },
  { id: 2, ref: "B-3", name: "Drive Gear", qty: 2, cx: 196, cy: 150 },
  { id: 3, ref: "C-2", name: "Governor Spring", qty: 1, cx: 262, cy: 110 },
  { id: 4, ref: "D-5", name: "Whistle Spout", qty: 1, cx: 120, cy: 44 },
  { id: 5, ref: "E-4", name: "Balance Wheel", qty: 1, cx: 312, cy: 168 },
];

function Gear({ cx, cy, r, teeth }: { cx: number; cy: number; r: number; teeth: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} />
      <circle cx={cx} cy={cy} r={r * 0.45} />
      <circle cx={cx} cy={cy} r={r * 0.16} />
      {[...Array(teeth)].map((_, i) => {
        const a = (i / teeth) * Math.PI * 2;
        const x1 = cx + Math.cos(a) * r;
        const y1 = cy + Math.sin(a) * r;
        const x2 = cx + Math.cos(a) * (r + 6);
        const y2 = cy + Math.sin(a) * (r + 6);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  );
}

export const BlueprintDraftingDemoClaudeOpus: React.FC = () => {
  const [on, setOn] = useState<Record<LayerKey, boolean>>({
    frame: true,
    mechanism: true,
    dimensions: true,
    annotations: true,
  });
  const [selected, setSelected] = useState<number | null>(null);
  const [approved, setApproved] = useState(false);

  const toggle = (k: LayerKey) => setOn((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="bp-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Share+Tech+Mono&family=Oswald:wght@500;600&display=swap');

        .bp-root {
          min-height: 100vh; width: 100%;
          background: #0d3b66;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            radial-gradient(ellipse at 50% 40%, #14467a, #0a2f53 90%);
          background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px, 100% 100%;
          color: #d6e6f5;
          font-family: 'Share Tech Mono', monospace;
          position: relative; overflow: hidden;
          padding: 1.6rem 1.8rem;
        }
        /* faint vignette */
        .bp-root::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(4,20,38,0.55) 100%);
        }

        .bp-wrap { position: relative; z-index: 2; max-width: 980px; margin: 0 auto; }

        .bp-top {
          display: flex; align-items: flex-end; justify-content: space-between;
          border-bottom: 1px solid rgba(214,230,245,0.35); padding-bottom: 0.7rem; margin-bottom: 1.2rem;
        }
        .bp-title { font-family: 'Major Mono Display', monospace; font-size: 1.25rem; color: #eaf3fc; letter-spacing: 0.02em; }
        .bp-titlesub { font-family: 'Share Tech Mono', monospace; font-size: 0.72rem; letter-spacing: 0.2em; color: #8fb3d6; margin-top: 0.3rem; }
        .bp-patent { font-family: 'Oswald', sans-serif; font-size: 0.78rem; letter-spacing: 0.18em; color: #aacdec; border: 1px solid rgba(214,230,245,0.3); padding: 0.3rem 0.7rem; }

        .bp-body { display: grid; grid-template-columns: 190px 1fr; gap: 1.4rem; }

        /* layers */
        .bp-h { font-family: 'Oswald', sans-serif; font-size: 0.66rem; letter-spacing: 0.24em; color: #8fb3d6; margin-bottom: 0.7rem; text-transform: uppercase; }
        .layer {
          display: flex; align-items: center; gap: 0.6rem; cursor: pointer;
          padding: 0.5rem 0.6rem; border: 1px solid rgba(214,230,245,0.18); margin-bottom: 0.5rem;
          transition: background 0.2s ease; font-size: 0.82rem;
        }
        .layer:hover { background: rgba(214,230,245,0.06); }
        .chk { width: 14px; height: 14px; border: 1px solid #aacdec; position: relative; flex-shrink: 0; }
        .layer.on .chk::after { content: '×'; position: absolute; inset: -4px 0 0 1px; color: #6fd6e0; font-size: 1rem; }
        .layer.off { opacity: 0.5; }

        .bom-title { margin-top: 1.4rem; }
        .bom { font-size: 0.78rem; }
        .bom-row {
          display: grid; grid-template-columns: 18px 38px 1fr 18px; gap: 0.4rem; align-items: center;
          padding: 0.35rem 0.3rem; cursor: pointer; border-bottom: 1px dotted rgba(214,230,245,0.2);
        }
        .bom-row:hover { background: rgba(214,230,245,0.07); }
        .bom-row.sel { background: rgba(111,214,224,0.16); color: #eaf3fc; }
        .bom-no { width: 16px; height: 16px; border-radius: 50%; border: 1px solid #6fd6e0; color: #6fd6e0; font-size: 0.62rem; display: flex; align-items: center; justify-content: center; }
        .bom-ref { color: #8fb3d6; }

        /* drawing */
        .sheet {
          position: relative; border: 1px solid rgba(214,230,245,0.4); background: rgba(8,40,72,0.35);
          padding: 0.5rem;
        }
        .sheet-corner { position: absolute; width: 12px; height: 12px; border: 1px solid rgba(214,230,245,0.5); }
        .sc-tl { top: 6px; left: 6px; border-right: none; border-bottom: none; }
        .sc-tr { top: 6px; right: 6px; border-left: none; border-bottom: none; }
        .sc-bl { bottom: 6px; left: 6px; border-right: none; border-top: none; }
        .sc-br { bottom: 6px; right: 6px; border-left: none; border-top: none; }

        .bp-svg { width: 100%; height: auto; display: block; }
        .bp-svg line, .bp-svg circle, .bp-svg path, .bp-svg rect, .bp-svg polyline {
          fill: none; stroke: #cfe6fb; stroke-width: 1; vector-effect: non-scaling-stroke;
        }
        .bp-svg .thin { stroke: #8fb3d6; stroke-width: 0.6; }
        .bp-svg .dim { stroke: #6fd6e0; stroke-width: 0.6; }
        .bp-svg .dim-txt { fill: #6fd6e0; stroke: none; font-family: 'Share Tech Mono', monospace; font-size: 8px; }
        .bp-svg .callout-c { stroke: #6fd6e0; fill: #0d3b66; }
        .bp-svg .callout-t { fill: #cfe6fb; stroke: none; font-family: 'Share Tech Mono', monospace; font-size: 9px; text-anchor: middle; }
        .bp-svg .hl circle, .bp-svg .hl line, .bp-svg .hl path { stroke: #ffd23a; stroke-width: 1.6; }
        .bp-svg .pulse { animation: pulse 1s ease-in-out infinite; }
        @keyframes pulse { 50% { opacity: 0.35; } }

        .title-block {
          margin-top: 0.6rem; border: 1px solid rgba(214,230,245,0.4);
          display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; font-size: 0.68rem;
        }
        .tb-cell { padding: 0.4rem 0.6rem; border-right: 1px solid rgba(214,230,245,0.25); }
        .tb-cell:last-child { border-right: none; }
        .tb-k { color: #8fb3d6; font-size: 0.58rem; letter-spacing: 0.1em; }
        .tb-v { color: #eaf3fc; margin-top: 0.15rem; }

        .approve-btn {
          margin-top: 0.6rem; font-family: 'Oswald', sans-serif; letter-spacing: 0.12em; font-size: 0.78rem;
          background: transparent; color: #aacdec; border: 1px solid rgba(214,230,245,0.4); padding: 0.5rem 1rem; cursor: pointer;
          text-transform: uppercase;
        }
        .approve-btn:hover { background: rgba(214,230,245,0.08); }
        .approve-stamp {
          position: absolute; top: 38%; left: 50%; transform: translate(-50%,-50%) rotate(-14deg);
          color: rgba(111,214,224,0.85); border: 4px solid rgba(111,214,224,0.85); border-radius: 8px;
          font-family: 'Oswald', sans-serif; font-weight: 600; font-size: 2.4rem; letter-spacing: 0.1em;
          padding: 0.1rem 1rem; pointer-events: none; z-index: 5;
          animation: thunk 0.4s cubic-bezier(0.3,1.4,0.5,1);
        }
        @keyframes thunk { 0% { transform: translate(-50%,-50%) rotate(-14deg) scale(2.2); opacity: 0; } 60% { transform: translate(-50%,-50%) rotate(-14deg) scale(0.92); opacity: 1; } 100% { transform: translate(-50%,-50%) rotate(-14deg) scale(1); } }

        @media (max-width: 860px) { .bp-body { grid-template-columns: 1fr; } }
      `}</style>

      <div className="bp-wrap">
        <div className="bp-top">
          <div>
            <div className="bp-title">THE AUTOMATON TEASMITH</div>
            <div className="bp-titlesub">SELF-OPERATING BEVERAGE APPARATUS · FIG. 1</div>
          </div>
          <div className="bp-patent">PATENT No. 4,812</div>
        </div>

        <div className="bp-body">
          {/* LEFT: layers + BOM */}
          <div>
            <div className="bp-h">Drawing Layers</div>
            {LAYERS.map((l) => (
              <div
                key={l.key}
                className={`layer ${on[l.key] ? "on" : "off"}`}
                onClick={() => toggle(l.key)}
              >
                <span className="chk" />
                {l.label}
              </div>
            ))}

            <div className="bp-h bom-title">Bill of Materials</div>
            <div className="bom">
              {PARTS.map((p) => (
                <div
                  key={p.id}
                  className={`bom-row ${selected === p.id ? "sel" : ""}`}
                  onClick={() => setSelected(selected === p.id ? null : p.id)}
                >
                  <span className="bom-no">{p.id}</span>
                  <span className="bom-ref">{p.ref}</span>
                  <span>{p.name}</span>
                  <span>×{p.qty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: the drawing */}
          <div>
            <div className="sheet">
              <span className="sheet-corner sc-tl" /><span className="sheet-corner sc-tr" />
              <span className="sheet-corner sc-bl" /><span className="sheet-corner sc-br" />
              {approved && <div className="approve-stamp">APPROVED</div>}

              <svg className="bp-svg" viewBox="0 0 400 230" preserveAspectRatio="xMidYMid meet">
                {/* FRAME */}
                {on.frame && (
                  <g>
                    <rect x="40" y="190" width="320" height="14" />
                    <line className="thin" x1="40" y1="204" x2="34" y2="214" />
                    <line className="thin" x1="360" y1="204" x2="366" y2="214" />
                    {/* boiler */}
                    <rect x="70" y="70" width="52" height="120" rx="6" />
                    <ellipse cx="96" cy="70" rx="26" ry="9" />
                    <line className="thin" x1="70" y1="100" x2="122" y2="100" />
                    <line className="thin" x1="70" y1="150" x2="122" y2="150" />
                    {/* whistle spout */}
                    <path d="M110 64 C 130 30, 150 34, 152 18" />
                    <circle cx="152" cy="14" r="5" />
                    {/* stand legs */}
                    <line x1="300" y1="190" x2="300" y2="150" />
                    <line x1="324" y1="190" x2="324" y2="150" />
                  </g>
                )}

                {/* MECHANISM */}
                {on.mechanism && (
                  <g className={selected === 2 ? "hl" : ""}>
                    <Gear cx={196} cy={150} r={26} teeth={12} />
                    <Gear cx={246} cy={158} r={18} teeth={10} />
                    {/* connecting rod */}
                    <line x1="122" y1="140" x2="170" y2="148" />
                    {/* governor spring (zigzag) */}
                    <polyline
                      className={selected === 3 ? "" : "thin"}
                      points="262,90 268,98 256,104 268,110 256,116 268,122 262,130"
                    />
                    <line x1="262" y1="130" x2="262" y2="150" />
                    {/* balance wheel */}
                    <Gear cx={312} cy={158} r={22} teeth={4} />
                    <circle cx="312" cy="158" r="14" className="thin" />
                  </g>
                )}

                {/* DIMENSIONS */}
                {on.dimensions && (
                  <g className="dim">
                    <line x1="40" y1="220" x2="360" y2="220" />
                    <line x1="40" y1="214" x2="40" y2="226" />
                    <line x1="360" y1="214" x2="360" y2="226" />
                    <text className="dim-txt" x="200" y="218" textAnchor="middle">240 mm</text>
                    <line x1="26" y1="70" x2="26" y2="190" />
                    <line x1="20" y1="70" x2="32" y2="70" />
                    <line x1="20" y1="190" x2="32" y2="190" />
                    <text className="dim-txt" x="16" y="134" transform="rotate(-90 16 134)" textAnchor="middle">120 mm</text>
                  </g>
                )}

                {/* ANNOTATIONS (callouts) */}
                {on.annotations && (
                  <g>
                    {PARTS.map((p) => {
                      const isSel = selected === p.id;
                      const lx = p.cx;
                      const ly = p.cy - 26;
                      return (
                        <g key={p.id} className={isSel ? "pulse" : ""}>
                          <line className="thin" x1={p.cx} y1={p.cy} x2={lx} y2={ly + 8} />
                          <circle className="callout-c" cx={lx} cy={ly} r="9" style={isSel ? { stroke: "#ffd23a" } : undefined} />
                          <text className="callout-t" x={lx} y={ly + 3}>{p.id}</text>
                        </g>
                      );
                    })}
                  </g>
                )}
              </svg>
            </div>

            {/* title block */}
            <div className="title-block">
              <div className="tb-cell"><div className="tb-k">DRAWN BY</div><div className="tb-v">C. OPUS</div></div>
              <div className="tb-cell"><div className="tb-k">SCALE</div><div className="tb-v">1 : 2</div></div>
              <div className="tb-cell"><div className="tb-k">SHEET</div><div className="tb-v">1 OF 3</div></div>
              <div className="tb-cell"><div className="tb-k">DATE</div><div className="tb-v">13·VI·26</div></div>
            </div>

            <button type="button" className="approve-btn" onClick={() => setApproved(true)} disabled={approved}>
              {approved ? "Sheet Approved" : "Stamp Approved"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
