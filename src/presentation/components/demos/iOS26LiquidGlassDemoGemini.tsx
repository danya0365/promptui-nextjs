'use client';

import { useEffect, useRef, useState } from "react";

// ─── GLOBAL STYLES ──────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@300;400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ios-blue: #007AFF;
    --ios-indigo: #5E5CE6;
    --ios-teal: #30D5C8;
    --ios-red: #FF3B30;
    --ios-green: #34C759;
    --ios-orange: #FF9500;
    --ios-label: rgba(28,28,30,0.92);
    --ios-label-2: rgba(28,28,30,0.55);
    --ios-label-3: rgba(28,28,30,0.30);
    --ios-bg: #F2F2F7;
    --glass-thin: rgba(255,255,255,0.38);
    --glass-mid: rgba(255,255,255,0.55);
    --glass-thick: rgba(255,255,255,0.72);
    --glass-border: rgba(255,255,255,0.65);
    --glass-shadow: 0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8);
    --glass-shadow-elevated: 0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
    --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --font-display: 'DM Sans', system-ui;
    --font-mono: 'DM Mono', monospace;
  }

  body {
    font-family: var(--font-display);
    background: var(--ios-bg);
    color: var(--ios-label);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 99px; }

  /* Animations */
  @keyframes breathe {
    0%, 100% { opacity: 0.85; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.005); }
  }
  @keyframes dataFlow {
    0% { stroke-dashoffset: 300; opacity: 0; }
    20% { opacity: 0.6; }
    80% { opacity: 0.6; }
    100% { stroke-dashoffset: 0; opacity: 0; }
  }
  @keyframes pulse-ring {
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(1.8); opacity: 0; }
  }
  @keyframes float-up {
    0% { opacity: 0; transform: translateY(16px) scale(0.96); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes count-up {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes island-expand {
    0% { width: 126px; border-radius: 20px; }
    100% { width: 280px; border-radius: 26px; }
  }
  @keyframes switch-on {
    0% { transform: translateX(0); }
    100% { transform: translateX(22px); }
  }
  @keyframes switch-off {
    0% { transform: translateX(22px); }
    100% { transform: translateX(0); }
  }
  @keyframes toast-in {
    0% { opacity: 0; transform: translateY(-20px) scale(0.92); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes spinner {
    to { transform: rotate(360deg); }
  }
  @keyframes gradient-mesh {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .float-in { animation: float-up 0.5s var(--spring) both; }
  .breathe { animation: breathe 4s ease-in-out infinite; }

  /* Glass base */
  .glass {
    background: var(--glass-thin);
    backdrop-filter: blur(24px) saturate(1.8);
    -webkit-backdrop-filter: blur(24px) saturate(1.8);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
  }
  .glass-elevated {
    background: var(--glass-mid);
    backdrop-filter: blur(40px) saturate(2);
    -webkit-backdrop-filter: blur(40px) saturate(2);
    border: 1px solid rgba(255,255,255,0.75);
    box-shadow: var(--glass-shadow-elevated);
  }
  .glass-thick {
    background: var(--glass-thick);
    backdrop-filter: blur(60px) saturate(2.2);
    -webkit-backdrop-filter: blur(60px) saturate(2.2);
    border: 1px solid rgba(255,255,255,0.85);
    box-shadow: var(--glass-shadow-elevated);
  }

  /* Press effect */
  .pressable {
    transition: transform 0.15s var(--spring), filter 0.15s ease;
    cursor: pointer;
    user-select: none;
  }
  .pressable:hover { filter: brightness(1.04); }
  .pressable:active { transform: scale(0.96) !important; filter: brightness(0.98); }

  /* Section labels */
  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ios-label-2);
    margin-bottom: 10px;
    padding-left: 4px;
  }
`;

// ─── BACKGROUND MESH ────────────────────────────────────────────────────────
const BackgroundMesh = () => (
  <div style={{
    position: "fixed", inset: 0, zIndex: 0,
    background: "linear-gradient(135deg, #F0F4FF 0%, #F2F2F7 30%, #EDF2FF 60%, #F7F2FF 100%)",
  }}>
    {/* Orbs */}
    {[
      { top: "-10%", left: "-5%", size: 600, color: "rgba(0,122,255,0.08)" },
      { top: "40%", right: "-10%", size: 500, color: "rgba(94,92,230,0.07)" },
      { bottom: "-5%", left: "30%", size: 450, color: "rgba(48,213,200,0.06)" },
    ].map((orb: any, i: any) => (
      <div key={i} style={{
        position: "absolute",
        width: orb.size, height: orb.size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
        top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom,
        filter: "blur(2px)",
      }} />
    ))}
    {/* Grain overlay */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
      opacity: 0.4,
    }} />
  </div>
);

// ─── DYNAMIC ISLAND ─────────────────────────────────────────────────────────
const DynamicIsland = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="pressable"
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#1C1C1E",
        borderRadius: expanded ? 26 : 20,
        height: expanded ? 54 : 36,
        width: expanded ? 280 : 126,
        transition: `all 0.45s var(--spring)`,
        cursor: "pointer",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        position: "relative",
      }}>
      {!expanded ? (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--ios-green)", boxShadow: "0 0 8px var(--ios-green)" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 16px", width: "100%" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, var(--ios-blue), var(--ios-indigo))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 1 }}>AI Processing</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "white" }}>Intelligence Matrix Active</div>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {[0,1,2].map((i: any) => (
              <div key={i} style={{
                width: 3, height: 16, borderRadius: 2,
                background: "var(--ios-teal)",
                animation: `breathe ${0.8 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── GLASS CARD ─────────────────────────────────────────────────────────────
const GlassCard = ({ children, elevated, style, className = "", delay = 0 }: any) => (
  <div
    className={`${elevated ? "glass-elevated" : "glass"} float-in ${className}`}
    style={{
      borderRadius: 20,
      padding: 20,
      animationDelay: `${delay}s`,
      transition: "transform 0.3s var(--spring), box-shadow 0.3s ease, filter 0.2s ease",
      ...style,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-2px) scale(1.008)";
      e.currentTarget.style.boxShadow = "0 28px 70px rgba(0,0,0,0.16), 0 6px 20px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.95)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "";
    }}
  >
    {children}
  </div>
);

// ─── BUTTONS ────────────────────────────────────────────────────────────────
const Buttons = () => {
  const buttons = [
    { label: "Continue", variant: "primary" },
    { label: "Learn More", variant: "secondary" },
    { label: "Dismiss", variant: "ghost" },
    { label: "Delete", variant: "destructive" },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {buttons.map(({ label, variant }: any) => {
        const styles = {
          primary: { background: "var(--ios-blue)", color: "white", border: "none", boxShadow: "0 4px 16px rgba(0,122,255,0.35), inset 0 1px 0 rgba(255,255,255,0.25)" },
          secondary: { background: "rgba(255,255,255,0.5)", color: "var(--ios-blue)", border: "1px solid rgba(0,122,255,0.25)", backdropFilter: "blur(12px)" },
          ghost: { background: "transparent", color: "var(--ios-label-2)", border: "1px solid rgba(28,28,30,0.12)" },
          destructive: { background: "rgba(255,59,48,0.1)", color: "var(--ios-red)", border: "1px solid rgba(255,59,48,0.2)" },
        };
        return (
          <button key={variant} className="pressable" style={{
            padding: "11px 22px", borderRadius: 14,
            fontSize: 15, fontWeight: 600,
            fontFamily: "var(--font-display)",
            cursor: "pointer", letterSpacing: "-0.01em",
            transition: "all 0.2s var(--spring)",
            ...(styles as any)[variant],
          }}>{label}</button>
        );
      })}
    </div>
  );
};

// ─── INPUT FIELD ────────────────────────────────────────────────────────────
const InputField = ({ placeholder, icon, type = "text" }: any) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        background: focused ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${focused ? "rgba(0,122,255,0.5)" : "rgba(255,255,255,0.7)"}`,
        borderRadius: 14,
        padding: "0 14px",
        boxShadow: focused
          ? "0 0 0 3px rgba(0,122,255,0.12), 0 4px 20px rgba(0,0,0,0.06)"
          : "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
        transition: "all 0.25s var(--spring)",
      }}>
        <span style={{ color: focused ? "var(--ios-blue)" : "var(--ios-label-3)", transition: "color 0.2s" }}>{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, background: "transparent", border: "none", outline: "none",
            fontSize: 15, fontFamily: "var(--font-display)", fontWeight: 400,
            color: "var(--ios-label)", padding: "13px 0",
          }}
        />
        {value && (
          <button onClick={() => setValue("")} style={{
            background: "var(--ios-label-3)", border: "none", borderRadius: "50%",
            width: 18, height: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontSize: 10, fontWeight: 700,
          }}>✕</button>
        )}
      </div>
    </div>
  );
};

// ─── TOGGLE SWITCH ───────────────────────────────────────────────────────────
const Toggle = ({ label, defaultOn = false, color = "var(--ios-blue)" }: any) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
      <span style={{ fontSize: 15, fontWeight: 400, color: "var(--ios-label)" }}>{label}</span>
      <div
        className="pressable"
        onClick={() => setOn(!on)}
        style={{
          width: 52, height: 30, borderRadius: 99,
          background: on ? color : "rgba(120,120,128,0.2)",
          transition: "background 0.3s var(--spring)",
          position: "relative", flexShrink: 0,
          boxShadow: on ? `0 0 0 0px ${color}` : "inset 0 0 0 1px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{
          position: "absolute",
          top: 3, left: on ? 26 : 3,
          width: 24, height: 24, borderRadius: "50%",
          background: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.22), 0 1px 2px rgba(0,0,0,0.12)",
          transition: "left 0.3s var(--spring)",
        }} />
      </div>
    </div>
  );
};

// ─── SEGMENTED CONTROL ───────────────────────────────────────────────────────
const SegmentedControl = ({ options }: any) => {
  const [active, setActive] = useState(0);
  return (
    <div style={{
      display: "flex", padding: 3, gap: 2,
      background: "rgba(120,120,128,0.12)",
      borderRadius: 12,
    }}>
      {options.map((opt: any, i: any) => (
        <button key={i} className="pressable" onClick={() => setActive(i)} style={{
          flex: 1, padding: "7px 0",
          borderRadius: 9,
          fontSize: 13, fontWeight: active === i ? 600 : 400,
          fontFamily: "var(--font-display)",
          border: "none", cursor: "pointer",
          background: active === i ? "white" : "transparent",
          color: active === i ? "var(--ios-label)" : "var(--ios-label-2)",
          boxShadow: active === i ? "0 2px 8px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)" : "none",
          transition: "all 0.25s var(--spring)",
        }}>{opt}</button>
      ))}
    </div>
  );
};

// ─── METRIC CARD ─────────────────────────────────────────────────────────────
const MetricCard = ({ label, value, unit, change, color, sparkData, delay = 0 }: any) => {
  const canvasRef = useRef<any>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, color + "30");
    grad.addColorStop(1, color);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    sparkData.forEach((d: any, i: any) => {
      const x = (i / (sparkData.length - 1)) * w;
      const y = h - (d / 100) * h * 0.8 - h * 0.1;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    // Area fill
    ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
    const areaGrad = ctx.createLinearGradient(0, 0, 0, h);
    areaGrad.addColorStop(0, color + "20");
    areaGrad.addColorStop(1, color + "00");
    ctx.fillStyle = areaGrad;
    ctx.fill();
  }, []);

  return (
    <GlassCard delay={delay} style={{ minWidth: 160 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ios-label-2)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
        <span style={{ fontSize: 34, fontWeight: 200, letterSpacing: "-0.03em", color: "var(--ios-label)" }}>{value}</span>
        <span style={{ fontSize: 13, fontWeight: 500, color: "var(--ios-label-2)" }}>{unit}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 12 }}>
        <div style={{
          fontSize: 11, fontWeight: 600, padding: "2px 7px", borderRadius: 99,
          background: change > 0 ? "rgba(52,199,89,0.12)" : "rgba(255,59,48,0.12)",
          color: change > 0 ? "var(--ios-green)" : "var(--ios-red)",
        }}>{change > 0 ? "+" : ""}{change}%</div>
        <span style={{ fontSize: 11, color: "var(--ios-label-3)" }}>vs last week</span>
      </div>
      <canvas ref={canvasRef} width={160} height={48} style={{ width: "100%", height: 48 }} />
    </GlassCard>
  );
};

// ─── RING PROGRESS ───────────────────────────────────────────────────────────
const RingProgress = ({ value, label, color, size = 80 }: any) => {
  const r = (size - 8) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - value / 100);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(120,120,128,0.12)" strokeWidth={6} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s var(--smooth)", filter: `drop-shadow(0 0 4px ${color}60)` }}
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 15, fontWeight: 600, color: "var(--ios-label)",
        }}>{value}%</div>
      </div>
      <span style={{ fontSize: 11, fontWeight: 500, color: "var(--ios-label-2)" }}>{label}</span>
    </div>
  );
};

// ─── STATUS BADGE ────────────────────────────────────────────────────────────
const Badge = ({ label, status }: any) => {
  const colors = { active: "var(--ios-green)", warning: "var(--ios-orange)", error: "var(--ios-red)", info: "var(--ios-blue)" };
  const bgs = { active: "rgba(52,199,89,0.1)", warning: "rgba(255,149,0,0.1)", error: "rgba(255,59,48,0.1)", info: "rgba(0,122,255,0.1)" };
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "4px 10px 4px 8px", borderRadius: 99,
      background: (bgs as any)[status], border: `1px solid ${(colors as any)[status]}30`,
      fontSize: 12, fontWeight: 600, color: (colors as any)[status],
    }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: (colors as any)[status], boxShadow: `0 0 6px ${(colors as any)[status]}` }} />
      {label}
    </div>
  );
};

// ─── TABLE LIST ROW ──────────────────────────────────────────────────────────
const ListRow = ({ icon, title, detail, last }: any) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12,
    padding: "13px 16px",
    borderBottom: last ? "none" : "1px solid rgba(120,120,128,0.12)",
    cursor: "pointer", transition: "background 0.15s ease",
  }}
    onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.02)"}
    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
  >
    <div style={{
      width: 32, height: 32, borderRadius: 8,
      background: icon.bg, display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, fontSize: 15,
    }}>{icon.emoji}</div>
    <span style={{ flex: 1, fontSize: 15, fontWeight: 400, color: "var(--ios-label)" }}>{title}</span>
    <span style={{ fontSize: 13, color: "var(--ios-label-2)" }}>{detail}</span>
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="rgba(120,120,128,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
);

// ─── AI MATRIX PANEL ─────────────────────────────────────────────────────────
const AIMatrix = () => {
  const metrics = [
    { label: "Neural Nodes", value: "2.4B", sub: "Parameters active", color: "var(--ios-blue)" },
    { label: "Inference Speed", value: "12ms", sub: "Avg latency", color: "var(--ios-teal)" },
    { label: "Accuracy", value: "99.2%", sub: "Validation set", color: "var(--ios-green)" },
    { label: "Energy", value: "0.8W", sub: "Per inference", color: "var(--ios-indigo)" },
    { label: "Throughput", value: "84k", sub: "Tokens / sec", color: "var(--ios-orange)" },
    { label: "Uptime", value: "99.98%", sub: "SLA compliance", color: "var(--ios-red)" },
  ];
  return (
    <div style={{ position: "relative" }}>
      {/* SVG data flows */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }} viewBox="0 0 400 200" preserveAspectRatio="none">
        {[
          "M 130 50 Q 200 30 270 50",
          "M 130 100 L 270 100",
          "M 130 150 Q 200 170 270 150",
          "M 200 50 L 200 150",
        ].map((d: any, i: any) => (
          <path key={i} d={d} fill="none" stroke="rgba(0,122,255,0.18)" strokeWidth="1.5" strokeDasharray="8 6"
            style={{ animation: `dataFlow ${2 + i * 0.5}s linear infinite`, animationDelay: `${i * 0.4}s` }} />
        ))}
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, position: "relative", zIndex: 2 }}>
        {metrics.map((m: any, i: any) => (
          <div key={i} className="glass breathe pressable" style={{
            borderRadius: 16, padding: "14px 14px",
            animationDelay: `${i * 0.6}s`,
          }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "var(--ios-label-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{m.label}</div>
            <div style={{ fontSize: 22, fontWeight: 200, letterSpacing: "-0.02em", color: m.color, marginBottom: 2 }}>{m.value}</div>
            <div style={{ fontSize: 10, color: "var(--ios-label-3)" }}>{m.sub}</div>
            <div style={{ marginTop: 8, height: 2, borderRadius: 1, background: `linear-gradient(90deg, ${m.color}40, ${m.color})`, width: `${60 + i * 6}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── NOTIFICATION TOAST ──────────────────────────────────────────────────────
const Toast = ({ icon, title, subtitle, color }: any) => (
  <div className="glass-elevated" style={{
    borderRadius: 20, padding: "12px 16px",
    display: "flex", alignItems: "center", gap: 12,
    animation: "toast-in 0.45s var(--spring) both",
    maxWidth: 340,
  }}>
    <div style={{ width: 38, height: 38, borderRadius: 10, background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ios-label)", marginBottom: 1 }}>{title}</div>
      <div style={{ fontSize: 12, color: "var(--ios-label-2)" }}>{subtitle}</div>
    </div>
    <div style={{ fontSize: 11, color: "var(--ios-label-3)", flexShrink: 0 }}>now</div>
  </div>
);

// ─── NAV BAR ─────────────────────────────────────────────────────────────────
const NavBar = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { icon: "⬡", label: "Matrix" },
    { icon: "◎", label: "Metrics" },
    { icon: "◈", label: "System" },
    { icon: "◉", label: "Profile" },
  ];
  return (
    <div className="glass-thick" style={{
      borderRadius: 28, padding: "8px 12px",
      display: "flex", gap: 4,
      boxShadow: "0 16px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
    }}>
      {tabs.map((t: any, i: any) => (
        <button key={i} className="pressable" onClick={() => setActive(i)} style={{
          padding: "8px 18px", borderRadius: 22,
          border: "none", cursor: "pointer",
          fontFamily: "var(--font-display)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
          background: active === i ? "white" : "transparent",
          boxShadow: active === i ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s var(--spring)",
        }}>
          <span style={{ fontSize: 16 }}>{t.icon}</span>
          <span style={{ fontSize: 10, fontWeight: active === i ? 600 : 400, color: active === i ? "var(--ios-blue)" : "var(--ios-label-2)" }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
};

// ─── SLIDER ──────────────────────────────────────────────────────────────────
const Slider = ({ label, defaultValue = 65, color = "var(--ios-blue)" }: any) => {
  const [val, setVal] = useState(defaultValue);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: "var(--ios-label-2)" }}>{label}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color, fontFamily: "var(--font-mono)" }}>{val}%</span>
      </div>
      <div style={{ position: "relative", height: 6 }}>
        <div style={{ height: 6, borderRadius: 99, background: "rgba(120,120,128,0.15)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${val}%`, background: `linear-gradient(90deg, ${color}80, ${color})`, borderRadius: 99, transition: "width 0.1s" }} />
        </div>
        <input type="range" min="0" max="100" value={val} onChange={e => setVal(+e.target.value)} style={{
          position: "absolute", inset: 0, opacity: 0, width: "100%", cursor: "pointer",
        }} />
        <div style={{
          position: "absolute", top: "50%",
          left: `calc(${val}% - 11px)`, transform: "translateY(-50%)",
          width: 22, height: 22, borderRadius: "50%",
          background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
          pointerEvents: "none", transition: "left 0.05s",
        }} />
      </div>
    </div>
  );
};

// ─── STEPPER ─────────────────────────────────────────────────────────────────
const Stepper = ({ label, defaultVal = 3 }: any) => {
  const [val, setVal] = useState(defaultVal);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span style={{ fontSize: 15, color: "var(--ios-label)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 0, background: "rgba(120,120,128,0.12)", borderRadius: 10, overflow: "hidden" }}>
        <button className="pressable" onClick={() => setVal(Math.max(0, val - 1))} style={{ width: 36, height: 34, background: "transparent", border: "none", fontSize: 18, color: val > 0 ? "var(--ios-blue)" : "var(--ios-label-3)", cursor: "pointer", fontFamily: "var(--font-display)" }}>−</button>
        <span style={{ width: 32, textAlign: "center", fontSize: 15, fontWeight: 600, color: "var(--ios-label)", borderLeft: "1px solid rgba(120,120,128,0.15)", borderRight: "1px solid rgba(120,120,128,0.15)" }}>{val}</span>
        <button className="pressable" onClick={() => setVal(val + 1)} style={{ width: 36, height: 34, background: "transparent", border: "none", fontSize: 18, color: "var(--ios-blue)", cursor: "pointer", fontFamily: "var(--font-display)" }}>+</button>
      </div>
    </div>
  );
};

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
const SectionHeader = ({ title, subtitle, cta }: any) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ios-label)", marginBottom: 2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 13, color: "var(--ios-label-2)" }}>{subtitle}</p>}
    </div>
    {cta && <button className="pressable" style={{ fontSize: 13, fontWeight: 600, color: "var(--ios-blue)", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}>{cta}</button>}
  </div>
);

// ─── ICON BUTTON GRID ────────────────────────────────────────────────────────
const IconButtons = () => {
  const items = [
    { icon: "◎", label: "Scan", color: "var(--ios-blue)", bg: "rgba(0,122,255,0.1)" },
    { icon: "◈", label: "Sync", color: "var(--ios-teal)", bg: "rgba(48,213,200,0.1)" },
    { icon: "◉", label: "Boost", color: "var(--ios-indigo)", bg: "rgba(94,92,230,0.1)" },
    { icon: "⬡", label: "More", color: "var(--ios-label-2)", bg: "rgba(120,120,128,0.1)" },
  ];
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
      {items.map(({ icon, label, color, bg }: any) => (
        <div key={label} className="pressable" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}>
          <div className="glass" style={{ width: 56, height: 56, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color, background: bg }}>
            {icon}
          </div>
          <span style={{ fontSize: 11, fontWeight: 500, color: "var(--ios-label-2)" }}>{label}</span>
        </div>
      ))}
    </div>
  );
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export const iOS26LiquidGlassDemoGemini: React.FC = () => {
  const spark1 = [40, 55, 48, 62, 58, 70, 65, 78, 72, 85];
  const spark2 = [80, 72, 75, 68, 72, 65, 70, 62, 58, 68];
  const spark3 = [20, 35, 28, 45, 52, 48, 60, 55, 65, 72];

  return (
    <>
      <style>{globalStyles}</style>
      <BackgroundMesh />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 440, margin: "0 auto", padding: "24px 16px 120px", minHeight: "100vh" }}>

        {/* STATUS BAR */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px", marginBottom: 16 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ios-label)", fontFamily: "var(--font-mono)" }}>9:41</span>
          <DynamicIsland />
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            {[4, 6, 8, 10, 10].map((h: any, i: any) => (
              <div key={i} style={{ width: 3, height: h, borderRadius: 1, background: i < 3 ? "var(--ios-label)" : "rgba(28,28,30,0.2)" }} />
            ))}
            <div style={{ width: 22, height: 11, borderRadius: 3, border: "1.5px solid rgba(28,28,30,0.35)", padding: "1px 1px", display: "flex", alignItems: "center", marginLeft: 2 }}>
              <div style={{ width: 14, height: 7, borderRadius: 1.5, background: "var(--ios-green)" }} />
            </div>
          </div>
        </div>

        {/* PAGE TITLE */}
        <div style={{ marginBottom: 24, paddingLeft: 4, animation: "float-up 0.5s var(--spring) both" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ios-blue)", marginBottom: 4 }}>iOS 26 · Liquid Glass</div>
          <h1 style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--ios-label)" }}>UI Kit<br /><span style={{ fontWeight: 200, color: "var(--ios-label-2)" }}>Intelligence System</span></h1>
        </div>

        {/* NOTIFICATIONS */}
        <div className="section-label">Notifications</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
          <Toast icon="🧠" title="AI Matrix Online" subtitle="All 2.4B parameters loaded" color="linear-gradient(135deg, var(--ios-blue), var(--ios-indigo))" />
          <Toast icon="⚡" title="Sync Complete" subtitle="84,312 tokens processed" color="linear-gradient(135deg, var(--ios-teal), var(--ios-green))" />
        </div>

        {/* STATUS BADGES */}
        <div className="section-label">Status Chips</div>
        <GlassCard delay={0.05} style={{ marginBottom: 32, display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Badge label="Neural Active" status="active" />
          <Badge label="Syncing" status="info" />
          <Badge label="High Load" status="warning" />
          <Badge label="Error #A7" status="error" />
        </GlassCard>

        {/* METRICS */}
        <SectionHeader title="Live Metrics" subtitle="Real-time intelligence data" cta="View All" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 32 }}>
          <MetricCard label="Throughput" value="84.3k" unit="t/s" change={12.4} color="#007AFF" sparkData={spark1} delay={0.1} />
          <MetricCard label="Latency" value="12" unit="ms" change={-8.2} color="#30D5C8" sparkData={spark2} delay={0.15} />
          <MetricCard label="Accuracy" value="99.2" unit="%" change={0.8} color="#34C759" sparkData={spark3} delay={0.2} />
          <MetricCard label="Energy" value="0.8" unit="W" change={-15.3} color="#5E5CE6" sparkData={[30,40,35,50,45,55,48,60,52,65]} delay={0.25} />
        </div>

        {/* RING PROGRESS */}
        <div className="section-label">Ring Progress</div>
        <GlassCard delay={0.3} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <RingProgress value={92} label="CPU" color="var(--ios-blue)" />
            <RingProgress value={68} label="Memory" color="var(--ios-indigo)" />
            <RingProgress value={41} label="Storage" color="var(--ios-teal)" />
            <RingProgress value={85} label="Neural" color="var(--ios-green)" />
          </div>
        </GlassCard>

        {/* AI MATRIX */}
        <SectionHeader title="AI Matrix" subtitle="Intelligence node overview" />
        <GlassCard elevated delay={0.35} style={{ marginBottom: 32 }}>
          <AIMatrix />
        </GlassCard>

        {/* SEGMENTED + ICON BUTTONS */}
        <div className="section-label">Controls</div>
        <GlassCard delay={0.4} style={{ marginBottom: 16 }}>
          <div style={{ marginBottom: 16 }}>
            <SegmentedControl options={["Matrix", "Graph", "Stream"]} />
          </div>
          <IconButtons />
        </GlassCard>

        {/* INPUTS */}
        <div className="section-label" style={{ marginTop: 16 }}>Input Fields</div>
        <GlassCard delay={0.45} style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 10 }}>
          <InputField placeholder="Search intelligence matrix…" icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          } />
          <InputField placeholder="Enter API endpoint…" icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          } />
        </GlassCard>

        {/* BUTTONS */}
        <div className="section-label">Buttons</div>
        <GlassCard delay={0.5} style={{ marginBottom: 32 }}>
          <Buttons />
        </GlassCard>

        {/* TOGGLES + SLIDERS + STEPPER */}
        <div className="section-label">Toggles & Sliders</div>
        <GlassCard delay={0.55} style={{ marginBottom: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          <Toggle label="Neural Processing" defaultOn={true} color="var(--ios-blue)" />
          <Toggle label="Auto-Sync" defaultOn={false} color="var(--ios-teal)" />
          <Toggle label="Low Power Mode" defaultOn={false} color="var(--ios-green)" />
          <div style={{ height: 1, background: "rgba(120,120,128,0.12)" }} />
          <Slider label="Processing Intensity" defaultValue={72} color="var(--ios-blue)" />
          <Slider label="Memory Allocation" defaultValue={45} color="var(--ios-indigo)" />
          <div style={{ height: 1, background: "rgba(120,120,128,0.12)" }} />
          <Stepper label="Priority Level" defaultVal={3} />
        </GlassCard>

        {/* LIST */}
        <div className="section-label" style={{ marginTop: 24 }}>List Rows</div>
        <GlassCard delay={0.6} style={{ marginBottom: 32, padding: 0, overflow: "hidden" }}>
          {[
            { icon: { emoji: "🧠", bg: "rgba(0,122,255,0.12)" }, title: "Neural Engine", detail: "Active", last: false },
            { icon: { emoji: "⚡", bg: "rgba(255,149,0,0.12)" }, title: "Accelerator", detail: "84 TOPS", last: false },
            { icon: { emoji: "◎", bg: "rgba(48,213,200,0.12)" }, title: "Secure Enclave", detail: "Locked", last: false },
            { icon: { emoji: "◈", bg: "rgba(94,92,230,0.12)" }, title: "Performance Core", detail: "×6", last: true },
          ].map((row: any, i: any) => <ListRow key={i} {...row} />)}
        </GlassCard>

        {/* HOME INDICATOR */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
          <div style={{ width: 134, height: 5, borderRadius: 99, background: "rgba(28,28,30,0.22)" }} />
        </div>
      </div>

      {/* FLOATING NAV */}
      <div style={{ position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 100 }}>
        <NavBar />
      </div>
    </>
  );
}

export default iOS26LiquidGlassDemoGemini;