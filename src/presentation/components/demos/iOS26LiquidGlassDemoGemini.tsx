'use client';

import React, { useEffect, useState } from 'react';

// iOS 26 Liquid Glass — Holographic Intelligence Dashboard
// A luminous glass cathedral floating in soft light. Not dark sci-fi — pure Apple optimism.

export const iOS26LiquidGlassDemoGemini: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('intelligence');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [toggles, setToggles] = useState({ ai: true, sync: false, live: true });
  const [sliderValue, setSliderValue] = useState(65);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showSheet, setShowSheet] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [dynamicIslandState, setDynamicIslandState] = useState<'rest' | 'expanded' | 'notification'>('rest');

  // Animated counters
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const targetCounter1 = 9847;
  const targetCounter2 = 23;
  const targetCounter3 = 99.7;

  useEffect(() => {
    setMounted(true);

    // Animate counters on mount
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounter1(Math.round(targetCounter1 * ease));
      setCounter2(Math.round(targetCounter2 * ease));
      setCounter3(parseFloat((targetCounter3 * ease).toFixed(1)));
      if (step >= steps) clearInterval(timer);
    }, interval);

    // Cycle dynamic island
    const islandTimer = setInterval(() => {
      setDynamicIslandState(prev => {
        if (prev === 'rest') return 'expanded';
        if (prev === 'expanded') return 'notification';
        return 'rest';
      });
    }, 4000);

    return () => { clearInterval(timer); clearInterval(islandTimer); };
  }, []);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const tabs = [
    { id: 'intelligence', label: 'Intelligence', icon: '🧠' },
    { id: 'metrics', label: 'Metrics', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className={`lg-viewport ${mounted ? 'lg-mounted' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════════
           iOS 26 LIQUID GLASS — DESIGN TOKENS
           ═══════════════════════════════════════════ */
        :root {
          /* Base Palette */
          --lg-bg: #FAFAFA;
          --lg-bg-warm: #F2F2F7;
          --lg-text: rgba(28, 28, 30, 0.9);
          --lg-text-secondary: rgba(28, 28, 30, 0.55);
          --lg-text-tertiary: rgba(28, 28, 30, 0.3);

          /* Glass Materials */
          --lg-glass-thin: rgba(255, 255, 255, 0.35);
          --lg-glass-medium: rgba(255, 255, 255, 0.50);
          --lg-glass-thick: rgba(255, 255, 255, 0.65);
          --lg-glass-opaque: rgba(255, 255, 255, 0.85);

          /* Accent Colors */
          --lg-blue: #007AFF;
          --lg-indigo: #5E5CE6;
          --lg-teal: #30D5C8;
          --lg-red: #FF3B30;
          --lg-green: #34C759;
          --lg-orange: #FF9500;

          /* Shadows */
          --lg-shadow-sm: 0 2px 20px rgba(0, 0, 0, 0.04);
          --lg-shadow-md: 0 8px 40px rgba(0, 0, 0, 0.06);
          --lg-shadow-lg: 0 16px 60px rgba(0, 0, 0, 0.08);
          --lg-shadow-xl: 0 24px 80px rgba(0, 0, 0, 0.10);

          /* Typography */
          --font-display: 'Inter', system-ui, -apple-system, sans-serif;

          /* Spacing (4pt grid) */
          --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px;
          --sp-5: 20px; --sp-6: 24px; --sp-8: 32px; --sp-11: 44px; --sp-12: 48px;

          /* Spring transition */
          --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
          --spring-smooth: cubic-bezier(0.22, 1, 0.36, 1);
        }

        body {
          margin: 0;
          font-family: var(--font-display);
          color: var(--lg-text);
          -webkit-font-smoothing: antialiased;
        }

        /* ═══════════════════════════════════════════
           VIEWPORT & AMBIENT BACKGROUND
           ═══════════════════════════════════════════ */
        .lg-viewport {
          min-height: 100vh;
          width: 100vw;
          background: var(--lg-bg);
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
          padding: var(--sp-12) var(--sp-6);
        }

        /* Warm ambient gradient mesh */
        .lg-viewport::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(94, 92, 230, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 80%, rgba(48, 213, 200, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 50% 10%, rgba(0, 122, 255, 0.04) 0%, transparent 50%),
            linear-gradient(180deg, #FAFAFA 0%, #F2F2F7 100%);
          pointer-events: none;
          z-index: 0;
        }

        /* ═══════════════════════════════════════════
           GLASS MATERIAL MIXIN (via classes)
           ═══════════════════════════════════════════ */
        .glass-thin {
          background: var(--lg-glass-thin);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: var(--lg-shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        .glass-medium {
          background: var(--lg-glass-medium);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: var(--lg-shadow-md), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        .glass-thick {
          background: var(--lg-glass-thick);
          backdrop-filter: blur(60px);
          -webkit-backdrop-filter: blur(60px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: var(--lg-shadow-lg), inset 0 2px 0 rgba(255, 255, 255, 1);
        }

        /* Caustic light effect overlay */
        .glass-caustic::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.3) 0%,
            transparent 40%,
            transparent 60%,
            rgba(255,255,255,0.15) 100%
          );
          pointer-events: none;
          animation: causticShift 8s ease-in-out infinite alternate;
        }
        @keyframes causticShift {
          0% { background-position: 0% 0%; opacity: 0.6; }
          100% { background-position: 100% 100%; opacity: 1; }
        }

        /* ═══════════════════════════════════════════
           LAYOUT CONTAINER
           ═══════════════════════════════════════════ */
        .lg-container {
          position: relative;
          z-index: 1;
          max-width: 1024px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--sp-6);
        }

        /* ═══════════════════════════════════════════
           1. DYNAMIC ISLAND
           ═══════════════════════════════════════════ */
        .dynamic-island {
          align-self: center;
          background: rgba(28, 28, 30, 0.95);
          border-radius: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.5s var(--spring);
          color: white;
          cursor: pointer;
        }
        .di-rest {
          width: 120px; height: 36px;
          padding: 0;
        }
        .di-expanded {
          width: 340px; height: 68px;
          padding: 0 var(--sp-5);
          gap: var(--sp-3);
        }
        .di-notification {
          width: 340px; height: 58px;
          padding: 0 var(--sp-4);
          gap: var(--sp-3);
        }
        .di-inner {
          display: flex;
          align-items: center;
          gap: var(--sp-3);
          width: 100%;
          opacity: 0;
          transition: opacity 0.3s ease 0.15s;
        }
        .di-expanded .di-inner, .di-notification .di-inner { opacity: 1; }
        .di-label {
          font-size: 13px;
          font-weight: 500;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .di-sublabel { font-size: 11px; color: rgba(255,255,255,0.6); }
        .di-icon {
          width: 28px; height: 28px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }
        .di-activity {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--lg-teal);
          animation: breathePulse 2s ease-in-out infinite alternate;
        }

        @keyframes breathePulse {
          0% { opacity: 0.6; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.1); }
        }

        /* ═══════════════════════════════════════════
           2. NAVIGATION BAR (Floating Pill)
           ═══════════════════════════════════════════ */
        .nav-bar {
          align-self: center;
          display: flex;
          gap: var(--sp-1);
          padding: 6px;
          border-radius: 100px;
          position: relative;
        }
        .nav-tab {
          position: relative;
          padding: var(--sp-2) var(--sp-5);
          border-radius: 100px;
          font-size: 15px;
          font-weight: 500;
          color: var(--lg-text-secondary);
          cursor: pointer;
          border: none;
          background: transparent;
          transition: all 0.4s var(--spring);
          display: flex;
          align-items: center;
          gap: var(--sp-2);
          z-index: 1;
          font-family: var(--font-display);
        }
        .nav-tab.active {
          color: var(--lg-blue);
          background: rgba(0, 122, 255, 0.08);
        }
        .nav-tab:hover:not(.active) { color: var(--lg-text); }
        .nav-tab::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scale(0);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--lg-blue);
          transition: transform 0.3s var(--spring);
        }
        .nav-tab.active::after { transform: translateX(-50%) scale(1); }

        /* ═══════════════════════════════════════════
           3. SEARCH BAR
           ═══════════════════════════════════════════ */
        .search-bar {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s var(--spring-smooth);
        }
        .search-bar.focused {
          box-shadow: var(--lg-shadow-md), inset 0 0 0 2px rgba(0, 122, 255, 0.3);
          background: var(--lg-glass-thick) !important;
        }
        .search-input {
          width: 100%;
          padding: var(--sp-3) var(--sp-4) var(--sp-3) 40px;
          border: none;
          background: transparent;
          font-family: var(--font-display);
          font-size: 17px;
          color: var(--lg-text);
          outline: none;
        }
        .search-input::placeholder { color: var(--lg-text-tertiary); }
        .search-icon {
          position: absolute;
          left: var(--sp-3);
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
          color: var(--lg-text-tertiary);
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════
           4. GLASS CARDS — Standard / Elevated / Interactive
           ═══════════════════════════════════════════ */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--sp-3);
        }

        .glass-card {
          border-radius: 20px;
          padding: var(--sp-4);
          position: relative;
          overflow: hidden;
          transition: all 0.4s var(--spring);
          cursor: pointer;
        }
        .glass-card:hover {
          transform: translateY(-2px) scale(1.01);
          background: var(--lg-glass-thick) !important;
        }
        .glass-card:active {
          transform: scale(0.97);
          transition: transform 0.15s ease;
        }
        .glass-card.elevated {
          border-radius: 24px;
        }

        .card-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--lg-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--sp-2);
        }
        .card-value {
          font-size: 48px;
          font-weight: 100;
          letter-spacing: -0.5px;
          line-height: 1;
          margin-bottom: var(--sp-2);
        }
        .card-subtitle {
          font-size: 15px;
          color: var(--lg-text-secondary);
        }

        /* Sparkline */
        .sparkline {
          margin-top: var(--sp-3);
          height: 40px;
          display: flex;
          align-items: flex-end;
          gap: 3px;
        }
        .spark-bar {
          flex: 1;
          border-radius: 4px 4px 0 0;
          transition: height 0.6s var(--spring-smooth);
        }

        /* Ring Progress */
        .ring-progress {
          width: 80px; height: 80px;
          position: relative;
          margin: var(--sp-3) auto;
        }
        .ring-progress svg { transform: rotate(-90deg); }
        .ring-bg { fill: none; stroke: rgba(0,0,0,0.05); stroke-width: 6; }
        .ring-fg {
          fill: none;
          stroke-width: 6;
          stroke-linecap: round;
          transition: stroke-dashoffset 1.5s var(--spring-smooth);
        }
        .ring-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 200;
        }

        /* ═══════════════════════════════════════════
           5. BUTTONS
           ═══════════════════════════════════════════ */
        .btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--sp-3);
          align-items: center;
        }
        .btn {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s var(--spring);
          display: inline-flex;
          align-items: center;
          gap: var(--sp-2);
        }
        .btn:active { transform: scale(0.96); filter: brightness(1.1); }

        .btn-primary {
          background: var(--lg-blue);
          color: white;
          padding: var(--sp-3) var(--sp-5);
          border-radius: 14px;
          box-shadow: 0 4px 16px rgba(0, 122, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .btn-primary:hover { filter: brightness(1.08); transform: translateY(-1px); }

        .btn-secondary {
          background: var(--lg-glass-medium);
          color: var(--lg-blue);
          padding: var(--sp-3) var(--sp-5);
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .btn-secondary:hover { background: var(--lg-glass-thick); }

        .btn-ghost {
          background: transparent;
          color: var(--lg-blue);
          padding: var(--sp-2) var(--sp-3);
        }
        .btn-ghost:hover { background: rgba(0, 122, 255, 0.06); border-radius: 10px; }

        .btn-icon {
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: var(--lg-glass-medium);
          border: 1px solid rgba(255,255,255,0.6);
        }
        .btn-icon:hover { background: var(--lg-glass-thick); }

        .btn-destructive {
          background: rgba(255, 59, 48, 0.1);
          color: var(--lg-red);
          padding: var(--sp-3) var(--sp-5);
          border-radius: 14px;
          border: 1px solid rgba(255, 59, 48, 0.15);
        }
        .btn-destructive:hover { background: rgba(255, 59, 48, 0.15); }

        /* ═══════════════════════════════════════════
           6. INPUT FIELDS
           ═══════════════════════════════════════════ */
        .input-group {
          position: relative;
        }
        .input-field {
          width: 100%;
          padding: var(--sp-4) var(--sp-4) var(--sp-2);
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.06);
          background: rgba(0,0,0,0.03);
          font-family: var(--font-display);
          font-size: 17px;
          color: var(--lg-text);
          outline: none;
          transition: all 0.3s var(--spring);
          box-sizing: border-box;
        }
        .input-field:focus {
          border-color: rgba(0, 122, 255, 0.4);
          background: rgba(0,0,0,0.01);
          box-shadow: inset 0 0 0 2px rgba(0, 122, 255, 0.15);
        }
        .input-label {
          position: absolute;
          left: var(--sp-4);
          top: 50%;
          transform: translateY(-50%);
          font-size: 17px;
          color: var(--lg-text-tertiary);
          pointer-events: none;
          transition: all 0.25s var(--spring);
        }
        .input-field:focus + .input-label,
        .input-field:not(:placeholder-shown) + .input-label {
          top: 8px;
          transform: translateY(0);
          font-size: 11px;
          color: var(--lg-blue);
          font-weight: 500;
        }

        /* ═══════════════════════════════════════════
           7. TOGGLES & CONTROLS
           ═══════════════════════════════════════════ */
        .controls-section {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-radius: 16px;
          overflow: hidden;
        }
        .control-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--sp-3) var(--sp-4);
          border-bottom: 1px solid rgba(0,0,0,0.04);
        }
        .control-row:last-child { border-bottom: none; }
        .control-row-label {
          font-size: 17px;
          display: flex;
          align-items: center;
          gap: var(--sp-3);
        }
        .control-row-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
        }

        /* iOS Toggle */
        .ios-toggle {
          width: 51px; height: 31px;
          border-radius: 16px;
          background: rgba(0,0,0,0.08);
          position: relative;
          cursor: pointer;
          transition: background 0.3s var(--spring);
          border: none;
          flex-shrink: 0;
        }
        .ios-toggle.on { background: var(--lg-green); }
        .ios-toggle::after {
          content: '';
          position: absolute;
          top: 2px; left: 2px;
          width: 27px; height: 27px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          transition: transform 0.3s var(--spring);
        }
        .ios-toggle.on::after { transform: translateX(20px); }

        /* Segmented Control */
        .segmented-control {
          display: flex;
          padding: 3px;
          border-radius: 10px;
          position: relative;
          gap: 2px;
        }
        .seg-option {
          flex: 1;
          padding: var(--sp-2) var(--sp-3);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          border: none;
          background: transparent;
          color: var(--lg-text-secondary);
          transition: all 0.3s var(--spring);
          font-family: var(--font-display);
          z-index: 1;
        }
        .seg-option.active {
          background: white;
          color: var(--lg-text);
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
        }

        /* Slider */
        .slider-track {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: rgba(0,0,0,0.06);
          position: relative;
          cursor: pointer;
          margin: var(--sp-4) 0;
        }
        .slider-fill {
          height: 100%;
          border-radius: 3px;
          background: var(--lg-blue);
          transition: width 0.15s ease;
        }
        .slider-thumb {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 28px; height: 28px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s;
          cursor: grab;
        }
        .slider-thumb:active { box-shadow: 0 4px 16px rgba(0,0,0,0.2); cursor: grabbing; }

        /* ═══════════════════════════════════════════
           8. BADGES & CHIPS
           ═══════════════════════════════════════════ */
        .chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--sp-2);
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: var(--sp-1);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .chip-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 20px; height: 20px;
          border-radius: 10px;
          padding: 0 6px;
          font-size: 11px;
          font-weight: 700;
          color: white;
          background: var(--lg-red);
        }

        /* ═══════════════════════════════════════════
           9. AI INTELLIGENCE PANEL
           ═══════════════════════════════════════════ */
        .ai-panel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--sp-3);
        }
        @media (max-width: 700px) {
          .ai-panel-grid { grid-template-columns: 1fr 1fr; }
        }

        .ai-card {
          border-radius: 20px;
          padding: var(--sp-4);
          position: relative;
          overflow: hidden;
          transition: all 0.4s var(--spring);
          cursor: pointer;
        }
        .ai-card:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: var(--lg-shadow-lg), inset 0 2px 0 rgba(255,255,255,1);
        }
        .ai-card:active { transform: scale(0.97); }
        .ai-card .ai-status {
          display: flex; align-items: center; gap: var(--sp-2);
          margin-bottom: var(--sp-2);
        }
        .ai-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          animation: breathePulse 2s ease-in-out infinite alternate;
        }
        .ai-card-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: var(--sp-1);
        }
        .ai-card-meta {
          font-size: 13px;
          color: var(--lg-text-secondary);
        }
        .ai-card-value {
          font-size: 34px;
          font-weight: 200;
          margin-top: var(--sp-3);
          letter-spacing: -0.5px;
        }

        /* Animated data flow SVG */
        .data-flow-container {
          position: relative;
          height: 60px;
          margin: var(--sp-3) 0;
        }
        .data-flow-svg {
          width: 100%;
          height: 100%;
        }
        .data-flow-line {
          fill: none;
          stroke-width: 2;
          stroke-dasharray: 8 4;
          animation: flowDash 2s linear infinite;
          opacity: 0.25;
        }
        @keyframes flowDash {
          100% { stroke-dashoffset: -48; }
        }

        /* AI Processing Indicator */
        .ai-breathing {
          animation: aiBreath 4s ease-in-out infinite alternate;
        }
        @keyframes aiBreath {
          0% { opacity: 0.85; }
          100% { opacity: 1; }
        }

        /* ═══════════════════════════════════════════
           10. BOTTOM SHEET
           ═══════════════════════════════════════════ */
        .sheet-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.15);
          z-index: 100;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .sheet-backdrop.visible {
          opacity: 1;
          pointer-events: auto;
        }
        .bottom-sheet {
          position: fixed;
          bottom: 0; left: 50%;
          transform: translateX(-50%) translateY(100%);
          width: min(500px, 95vw);
          max-height: 70vh;
          border-radius: 28px 28px 0 0;
          padding: var(--sp-5) var(--sp-5) var(--sp-12);
          z-index: 101;
          transition: transform 0.5s var(--spring);
          overflow-y: auto;
        }
        .sheet-backdrop.visible .bottom-sheet {
          transform: translateX(-50%) translateY(0);
        }
        .sheet-handle {
          width: 36px; height: 5px;
          border-radius: 3px;
          background: rgba(0,0,0,0.15);
          margin: 0 auto var(--sp-5);
        }
        .sheet-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: var(--sp-4);
        }

        /* ═══════════════════════════════════════════
           11. TOAST / NOTIFICATION
           ═══════════════════════════════════════════ */
        .toast {
          position: fixed;
          top: 80px;
          left: 50%;
          transform: translateX(-50%) translateY(-120px) scale(0.9);
          padding: var(--sp-3) var(--sp-5);
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: var(--sp-3);
          z-index: 200;
          opacity: 0;
          transition: all 0.5s var(--spring);
          pointer-events: none;
          white-space: nowrap;
        }
        .toast.visible {
          transform: translateX(-50%) translateY(0) scale(1);
          opacity: 1;
          pointer-events: auto;
        }
        .toast-title {
          font-size: 15px;
          font-weight: 600;
        }
        .toast-sub {
          font-size: 13px;
          color: var(--lg-text-secondary);
        }

        /* ═══════════════════════════════════════════
           12. SECTION LABELS
           ═══════════════════════════════════════════ */
        .section-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--lg-text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0 var(--sp-2);
        }

        /* ═══════════════════════════════════════════
           MOUNT ANIMATION
           ═══════════════════════════════════════════ */
        .lg-container > * {
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.6s var(--spring-smooth);
        }
        .lg-mounted .lg-container > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.0s; }
        .lg-mounted .lg-container > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.05s; }
        .lg-mounted .lg-container > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.10s; }
        .lg-mounted .lg-container > *:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.15s; }
        .lg-mounted .lg-container > *:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.20s; }
        .lg-mounted .lg-container > *:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.25s; }
        .lg-mounted .lg-container > *:nth-child(7) { opacity: 1; transform: translateY(0); transition-delay: 0.30s; }
        .lg-mounted .lg-container > *:nth-child(8) { opacity: 1; transform: translateY(0); transition-delay: 0.35s; }
        .lg-mounted .lg-container > *:nth-child(9) { opacity: 1; transform: translateY(0); transition-delay: 0.40s; }
        .lg-mounted .lg-container > *:nth-child(10) { opacity: 1; transform: translateY(0); transition-delay: 0.45s; }
        .lg-mounted .lg-container > *:nth-child(11) { opacity: 1; transform: translateY(0); transition-delay: 0.50s; }
        .lg-mounted .lg-container > *:nth-child(12) { opacity: 1; transform: translateY(0); transition-delay: 0.55s; }
        .lg-mounted .lg-container > *:nth-child(13) { opacity: 1; transform: translateY(0); transition-delay: 0.60s; }
        .lg-mounted .lg-container > *:nth-child(14) { opacity: 1; transform: translateY(0); transition-delay: 0.65s; }

        /* Home Indicator */
        .home-indicator {
          width: 134px; height: 5px;
          background: rgba(0,0,0,0.15);
          border-radius: 3px;
          margin: var(--sp-6) auto 0;
        }
      `}</style>

      <div className="lg-container">

        {/* ──── 1. DYNAMIC ISLAND ──── */}
        <div
          className={`dynamic-island di-${dynamicIslandState}`}
          onClick={() => {
            setDynamicIslandState(prev =>
              prev === 'rest' ? 'expanded' : prev === 'expanded' ? 'notification' : 'rest'
            );
          }}
        >
          {dynamicIslandState === 'rest' && <div className="di-activity" />}
          {dynamicIslandState === 'expanded' && (
            <div className="di-inner">
              <div className="di-icon" style={{ background: 'var(--lg-indigo)' }}>🧠</div>
              <div style={{ flex: 1 }}>
                <div className="di-label">AI Processing Active</div>
                <div className="di-sublabel">Analyzing 3 data streams...</div>
              </div>
              <div className="di-activity" />
            </div>
          )}
          {dynamicIslandState === 'notification' && (
            <div className="di-inner">
              <div className="di-icon" style={{ background: 'var(--lg-teal)' }}>✓</div>
              <div style={{ flex: 1 }}>
                <div className="di-label">Analysis Complete</div>
                <div className="di-sublabel">3 insights ready</div>
              </div>
              <span className="badge">3</span>
            </div>
          )}
        </div>

        {/* ──── 2. NAV BAR ──── */}
        <nav className="nav-bar glass-medium">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* ──── 3. SEARCH BAR ──── */}
        <div className={`search-bar glass-thin ${searchFocused ? 'focused' : ''}`}>
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            placeholder="Search intelligence..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        {/* ──── 4. METRIC CARDS ──── */}
        <div className="section-label">Live Metrics</div>
        <div className="card-grid">
          <div className="glass-card glass-medium glass-caustic elevated ai-breathing" onClick={() => setExpandedCard('processes')}>
            <div className="card-label" style={{ color: 'var(--lg-indigo)' }}>Active Processes</div>
            <div className="card-value" style={{ color: 'var(--lg-indigo)' }}>{counter1.toLocaleString()}</div>
            <div className="card-subtitle">+12% from last hour</div>
            <div className="sparkline">
              {[35, 50, 45, 70, 60, 85, 75, 90, 80, 95].map((h, i) => (
                <div key={i} className="spark-bar" style={{ height: `${h}%`, background: `rgba(94, 92, 230, ${0.15 + i * 0.08})` }} />
              ))}
            </div>
          </div>

          <div className="glass-card glass-medium glass-caustic elevated" onClick={() => setExpandedCard('streams')}>
            <div className="card-label" style={{ color: 'var(--lg-teal)' }}>Data Streams</div>
            <div className="card-value" style={{ color: 'var(--lg-teal)' }}>{counter2}</div>
            <div className="card-subtitle">All synchronized</div>
            <div className="ring-progress">
              <svg viewBox="0 0 80 80">
                <circle className="ring-bg" cx="40" cy="40" r="34" />
                <circle className="ring-fg" cx="40" cy="40" r="34"
                  style={{
                    stroke: 'var(--lg-teal)',
                    strokeDasharray: `${2 * Math.PI * 34}`,
                    strokeDashoffset: `${2 * Math.PI * 34 * (1 - counter2 / 30)}`
                  }}
                />
              </svg>
              <div className="ring-value" style={{ color: 'var(--lg-teal)' }}>{counter2}</div>
            </div>
          </div>

          <div className="glass-card glass-medium glass-caustic elevated" onClick={() => setExpandedCard('accuracy')}>
            <div className="card-label" style={{ color: 'var(--lg-blue)' }}>Accuracy</div>
            <div className="card-value" style={{ color: 'var(--lg-blue)' }}>{counter3}%</div>
            <div className="card-subtitle">Within threshold</div>
            <div className="sparkline">
              {[90, 92, 88, 95, 93, 97, 94, 98, 96, 99].map((h, i) => (
                <div key={i} className="spark-bar" style={{ height: `${h}%`, background: `rgba(0, 122, 255, ${0.1 + i * 0.08})` }} />
              ))}
            </div>
          </div>
        </div>

        {/* ──── 5. AI INTELLIGENCE PANEL ──── */}
        <div className="section-label">Intelligence Matrix</div>
        <div className="data-flow-container">
          <svg className="data-flow-svg" viewBox="0 0 1024 60" preserveAspectRatio="none">
            <path className="data-flow-line" d="M 0 30 Q 256 10 512 30 T 1024 30" style={{ stroke: 'var(--lg-indigo)' }} />
            <path className="data-flow-line" d="M 0 45 Q 200 20 400 40 T 800 35 T 1024 50" style={{ stroke: 'var(--lg-teal)', animationDelay: '0.5s' }} />
            <path className="data-flow-line" d="M 0 15 Q 300 40 600 20 T 1024 25" style={{ stroke: 'var(--lg-blue)', animationDelay: '1s' }} />
          </svg>
        </div>
        <div className="ai-panel-grid">
          {[
            { title: 'Neural Core', icon: '🧠', status: 'Processing', color: 'var(--lg-indigo)', val: '4.2T' },
            { title: 'Vision Engine', icon: '👁', status: 'Active', color: 'var(--lg-blue)', val: '120fps' },
            { title: 'Language Model', icon: '💬', status: 'Streaming', color: 'var(--lg-teal)', val: '8B tok' },
            { title: 'Safety Layer', icon: '🛡', status: 'Vigilant', color: 'var(--lg-green)', val: '100%' },
            { title: 'Memory Bank', icon: '💾', status: 'Syncing', color: 'var(--lg-orange)', val: '2.1PB' },
            { title: 'Quantum Link', icon: '⚛️', status: 'Entangled', color: 'var(--lg-indigo)', val: 'Q-256' },
          ].map((item, i) => (
            <div key={i} className="ai-card glass-medium glass-caustic">
              <div className="ai-status">
                <div className="ai-dot" style={{ background: item.color }} />
                <span style={{ fontSize: 11, color: 'var(--lg-text-secondary)', fontWeight: 500, letterSpacing: '0.5px' }}>{item.status.toUpperCase()}</span>
              </div>
              <div className="ai-card-title">{item.icon} {item.title}</div>
              <div className="ai-card-value" style={{ color: item.color }}>{item.val}</div>
            </div>
          ))}
        </div>

        {/* ──── 6. BUTTONS ──── */}
        <div className="section-label">Buttons</div>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={showToast}>Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-icon">＋</button>
          <button className="btn btn-destructive">Delete</button>
        </div>

        {/* ──── 7. INPUT FIELDS ──── */}
        <div className="section-label">Input Fields</div>
        <div className="glass-card glass-thin" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
          <div className="input-group">
            <input className="input-field" placeholder=" " />
            <label className="input-label">Model Name</label>
          </div>
          <div className="input-group">
            <input className="input-field" placeholder=" " type="number" />
            <label className="input-label">Token Limit</label>
          </div>
        </div>

        {/* ──── 8. CONTROLS ──── */}
        <div className="section-label">Controls</div>
        <div className="controls-section glass-medium">
          <div className="control-row">
            <span className="control-row-label">
              <span className="control-row-icon" style={{ background: 'var(--lg-indigo)' }}>🧠</span>
              AI Auto-Analysis
            </span>
            <button className={`ios-toggle ${toggles.ai ? 'on' : ''}`} onClick={() => setToggles(p => ({...p, ai: !p.ai}))} />
          </div>
          <div className="control-row">
            <span className="control-row-label">
              <span className="control-row-icon" style={{ background: 'var(--lg-blue)' }}>🔄</span>
              Background Sync
            </span>
            <button className={`ios-toggle ${toggles.sync ? 'on' : ''}`} onClick={() => setToggles(p => ({...p, sync: !p.sync}))} />
          </div>
          <div className="control-row">
            <span className="control-row-label">
              <span className="control-row-icon" style={{ background: 'var(--lg-teal)' }}>📡</span>
              Live Streaming
            </span>
            <button className={`ios-toggle ${toggles.live ? 'on' : ''}`} onClick={() => setToggles(p => ({...p, live: !p.live}))} />
          </div>
        </div>

        {/* ──── 9. SEGMENTED + SLIDER ──── */}
        <div className="glass-card glass-thin" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
          <div className="segmented-control glass-thin" style={{ background: 'rgba(0,0,0,0.04)' }}>
            {['Hourly', 'Daily', 'Weekly'].map(opt => (
              <button key={opt} className={`seg-option ${opt === 'Daily' ? 'active' : ''}`}>{opt}</button>
            ))}
          </div>
          <div>
            <span style={{ fontSize: 13, color: 'var(--lg-text-secondary)' }}>Confidence Threshold — {sliderValue}%</span>
            <div className="slider-track" onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
              setSliderValue(Math.max(0, Math.min(100, pct)));
            }}>
              <div className="slider-fill" style={{ width: `${sliderValue}%` }} />
              <div className="slider-thumb" style={{ left: `${sliderValue}%` }} />
            </div>
          </div>
        </div>

        {/* ──── 10. BADGES & CHIPS ──── */}
        <div className="section-label">Badges & Status</div>
        <div className="chips-row">
          <div className="chip glass-thin"><div className="chip-dot" style={{ background: 'var(--lg-green)' }} />Online</div>
          <div className="chip glass-thin"><div className="chip-dot" style={{ background: 'var(--lg-indigo)' }} />Processing</div>
          <div className="chip glass-thin"><div className="chip-dot" style={{ background: 'var(--lg-orange)' }} />Queued</div>
          <div className="chip glass-thin"><div className="chip-dot" style={{ background: 'var(--lg-red)' }} />Critical</div>
          <span className="badge">9</span>
          <span className="badge" style={{ background: 'var(--lg-blue)' }}>NEW</span>
        </div>

        {/* ──── 11. SHEET TRIGGER ──── */}
        <button className="btn btn-secondary" style={{ alignSelf: 'flex-start' }} onClick={() => setShowSheet(true)}>
          Open Bottom Sheet
        </button>

        {/* Home Indicator */}
        <div className="home-indicator" />
      </div>

      {/* ──── BOTTOM SHEET ──── */}
      <div className={`sheet-backdrop ${showSheet ? 'visible' : ''}`} onClick={() => setShowSheet(false)}>
        <div className="bottom-sheet glass-thick glass-caustic" onClick={e => e.stopPropagation()}>
          <div className="sheet-handle" />
          <div className="sheet-title">Intelligence Report</div>
          <div style={{ fontSize: 15, color: 'var(--lg-text-secondary)', lineHeight: 1.6 }}>
            All systems operating within normal parameters. Neural Core throughput at peak capacity.
            Quantum Link entanglement stable across all 256 qubit channels. No anomalies detected.
          </div>
          <div style={{ marginTop: 'var(--sp-5)', display: 'flex', gap: 'var(--sp-3)' }}>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setShowSheet(false)}>Acknowledge</button>
            <button className="btn btn-secondary" onClick={() => setShowSheet(false)}>Dismiss</button>
          </div>
        </div>
      </div>

      {/* ──── TOAST ──── */}
      <div className={`toast glass-thick ${toastVisible ? 'visible' : ''}`}>
        <span style={{ fontSize: 16 }}>✅</span>
        <div>
          <div className="toast-title">Action Completed</div>
          <div className="toast-sub">Intelligence pipeline updated</div>
        </div>
      </div>
    </div>
  );
};

export default iOS26LiquidGlassDemoGemini;
