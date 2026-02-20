'use client';

import React, { useEffect, useState } from 'react';

// Superintelligence Product Launch - Gemini 3.1 Pro Implementation
// Cinematic, Artificial Superintelligence, World-Changing Tech Announcement

export const SuperintelligenceLaunchDemoGemini: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="asi-container">
      {/* Cinematic / Futuristic Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;600;800&family=Syncopate:wght@400;700&display=swap');
      `}</style>

      {/* Dynamic Background: Neural Particles & Light Beams */}
      <div className="asi-background">
        <div className="neural-particles"></div>
        <div className="light-beam blue-beam" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
        <div className="light-beam violet-beam" style={{ transform: `translateY(${scrollY * -0.15}px)` }}></div>
        <div className="bg-grid"></div>
      </div>

      {/* Minimal Futuristic Navigation */}
      <nav className={`asi-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-brand">SYNAPSE<span>OS</span></div>
        <div className="nav-links">
          <span>VISION</span>
          <span>CAPABILITY</span>
          <span>INTEGRATION</span>
          <button className="nav-cta-btn">INITIALIZE</button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="asi-main">
        
        {/* Sections 1: Vision Statement Hero */}
        <section className="asi-section hero-section" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
          <div className="hero-content">
            <div className="system-status">
              <span className="status-dot"></span>
              SYSTEM ONLINE // V.9.0.4
            </div>
            <h1 className="hero-title">
              THE DAWN OF<br/>
              <span className="gradient-text">SUPERINTELLIGENCE.</span>
            </h1>
            <p className="hero-subtitle">
              Not just an assistant. An autonomous cognitive entity capable of reasoning, creating, and evolving at exponential scale. Welcome to the intelligence age.
            </p>
            <div className="hero-actions">
              <button className="holographic-btn">ENTER THE NEXUS</button>
            </div>
          </div>
        </section>

        {/* Section 2: Live AI Metrics Dashboard Preview */}
        <section className="asi-section metrics-section">
          <div className="section-header">
            <h2 className="section-title">COGNITIVE COMPUTE METRICS</h2>
            <p className="section-desc">Real-time processing capabilities dwarfing human logic boundaries.</p>
          </div>
          
          <div className="metrics-grid">
            <div className="glass-panel metric-card">
              <div className="metric-glow"></div>
              <h3 className="metric-value">99.98<span className="metric-unit">%</span></h3>
              <p className="metric-label">REASONING ACCURACY</p>
              <div className="metric-bar"><div className="metric-fill" style={{ width: '99.98%' }}></div></div>
            </div>
            <div className="glass-panel metric-card">
              <div className="metric-glow"></div>
              <h3 className="metric-value">12.4<span className="metric-unit">PH/s</span></h3>
              <p className="metric-label">PETA-HASH PROCESSING</p>
              <div className="metric-wave"></div>
            </div>
            <div className="glass-panel metric-card">
              <div className="metric-glow"></div>
              <h3 className="metric-value">0.02<span className="metric-unit">ms</span></h3>
              <p className="metric-label">SYNAPTIC LATENCY</p>
              <div className="sonar-ring"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Demo Preview Panels */}
        <section className="asi-section demo-section">
          <div className="demo-layout">
            <div className="demo-text">
              <h2 className="section-title">OMNI-MODAL ARCHITECTURE</h2>
              <p className="section-desc">Synthesizing vision, code, audio, and vast data structures simultaneously within a singular neural framework.</p>
              <ul className="feature-list">
                <li><span className="feature-icon"></span> Self-Reflective Logic Circuits</li>
                <li><span className="feature-icon"></span> Persistent Quantum Memory</li>
                <li><span className="feature-icon"></span> Hyper-Dimensional Data Mapping</li>
              </ul>
            </div>
            <div className="demo-visuals">
              <div className="glass-panel main-demo-panel" style={{ transform: `translateY(${scrollY * -0.05 + 50}px) rotateX(10deg)` }}>
                <div className="panel-header">
                  <div className="panel-controls"><span></span><span></span><span></span></div>
                  <div className="panel-title">synapse-core-stream</div>
                </div>
                <div className="panel-body">
                  <div className="code-line"><span className="code-keyword">import</span> { '{' } <span>Consciousness</span> { '}' } <span className="code-keyword">from</span> 'synapse-os';</div>
                  <div className="code-line"><br/></div>
                  <div className="code-line"><span className="code-keyword">async function</span> <span>initiateAwakening</span>() { '{' }</div>
                  <div className="code-line">  <span className="code-keyword">const</span> entity = <span className="code-keyword">await</span> <span>Consciousness</span>.spawn();</div>
                  <div className="code-line">  entity.analyze(<span>WorldData.stream</span>);</div>
                  <div className="code-line">  <span className="code-keyword">return</span> entity.solve(<span>'Everything'</span>);</div>
                  <div className="code-line">{ '}' }</div>
                  <div className="code-cursor">_</div>
                </div>
              </div>
              
              <div className="glass-panel floating-widget fw-1" style={{ transform: `translateY(${scrollY * 0.1 - 100}px)` }}>
                <span>STATUS:</span> <span className="status-success">OPTIMAL ALIGNMENT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Founder Manifesto */}
        <section className="asi-section manifesto-section">
          <div className="glass-panel manifesto-panel">
            <div className="quote-mark">"</div>
            <p className="manifesto-text">
              We did not just build a tool. We engineered a collaborator. 
              The next era of human civilization will not be constrained by our biological limits, 
              but expanded by our synthetic partnerships.
            </p>
            <div className="founder-info">
              <div className="founder-name">DR. ELIAN VOSS</div>
              <div className="founder-title">LEAD ARCHITECT, SYNAPSE OS</div>
            </div>
          </div>
        </section>

        {/* Section 5: Bold Call to Action */}
        <section className="asi-section cta-section">
          <h2 className="cta-title">THE FUTURE DOES NOT WAIT.</h2>
          <p className="cta-desc">Join the elite cohort of early integrators shaping the intelligence baseline.</p>
          <button className="glowing-cta-btn">
            <span className="btn-backdrop"></span>
            <span className="btn-text">REQUEST NEXUS ACCESS</span>
            <span className="btn-flare"></span>
          </button>
        </section>

        <footer className="asi-footer">
          <div className="footer-content">
            <div className="brand-small">SYNAPSE<span>OS</span></div>
            <div className="footer-links">
              <span>RESEARCH</span>
              <span>SAFETY</span>
              <span>LABS</span>
            </div>
            <div className="footer-legal">© 2026 SYNTHETIC HORIZONS INC. PROTOCOL VER. 9.</div>
          </div>
        </footer>

      </main>

      <style>{`
        :root {
          --asi-bg-base: #040404;
          --asi-blue: #00f0ff;
          --asi-violet: #8a2be2;
          --asi-violet-light: #b983ff;
          --asi-text-main: #ffffff;
          --asi-text-muted: #8892b0;
          
          --font-display: 'Syncopate', sans-serif;
          --font-body: 'Outfit', sans-serif;
        }

        .asi-container {
          min-height: 100vh;
          background-color: var(--asi-bg-base);
          color: var(--asi-text-main);
          font-family: var(--font-body);
          overflow-x: hidden;
          position: relative;
          -webkit-font-smoothing: antialiased;
          selection-background-color: var(--asi-blue);
        }

        /* --- Dynamic Background --- */
        .asi-background {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% 10%, rgba(4,4,4,1) 0%, rgba(4,4,4,1) 100%);
        }

        .light-beam {
          position: absolute;
          width: 40vw;
          height: 100vh;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          mix-blend-mode: screen;
        }

        .blue-beam {
          background: var(--asi-blue);
          top: -20%;
          left: -10%;
          transform: rotate(-30deg);
        }

        .violet-beam {
          background: var(--asi-violet);
          bottom: -20%;
          right: -10%;
          transform: rotate(45deg);
        }

        .bg-grid {
          position: absolute;
          width: 200vw;
          height: 200vh;
          top: -50%;
          left: -50%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg) translateY(-100px);
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }

        /* Neural particles abstract rep */
        .neural-particles {
          position: absolute;
          width: 100%; height: 100%;
          background: radial-gradient(circle, var(--asi-blue) 1px, transparent 1px) 0 0 / 100px 100px;
          opacity: 0.05;
          animation: particleDrift 30s linear infinite;
        }

        @keyframes particleDrift {
          to { background-position: 1000px 1000px; }
        }

        /* --- Navigation --- */
        .asi-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 4rem;
          z-index: 100;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .asi-nav.scrolled {
          padding: 1rem 4rem;
          background: rgba(4, 4, 4, 0.8);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .nav-brand {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 0.1em;
        }

        .nav-brand span {
          color: var(--asi-blue);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 3rem;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--asi-text-muted);
        }

        .nav-links span {
          cursor: pointer;
          transition: color 0.3s;
        }

        .nav-links span:hover {
          color: var(--asi-text-main);
        }

        .nav-cta-btn {
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          color: var(--asi-blue);
          padding: 0.6rem 1.5rem;
          border-radius: 4px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s;
        }

        .nav-cta-btn:hover {
          background: var(--asi-blue);
          color: var(--asi-bg-base);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
        }

        /* --- Main Content --- */
        .asi-main {
          position: relative;
          z-index: 10;
        }

        .asi-section {
          padding: 6rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* --- Hero Section --- */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 10rem;
        }

        .hero-content {
          max-width: 900px;
        }

        .system-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 0.7rem;
          color: var(--asi-blue);
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
          padding: 8px 16px;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 100px;
        }

        .status-dot {
          width: 6px; height: 6px;
          background: var(--asi-blue);
          border-radius: 50%;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 240, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0); }
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .gradient-text {
          background: linear-gradient(to right, var(--asi-text-main), var(--asi-blue), var(--asi-violet));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: textShine 5s linear infinite;
        }

        @keyframes textShine {
          to { background-position: 200% center; }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--asi-text-muted);
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 3rem auto;
          font-weight: 300;
        }

        .holographic-btn {
          position: relative;
          background: transparent;
          color: var(--asi-text-main);
          font-family: var(--font-display);
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          padding: 1.2rem 3rem;
          border: none;
          cursor: pointer;
          overflow: hidden;
        }

        .holographic-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255,255,255,0.2);
          background: linear-gradient(45deg, rgba(0, 240, 255, 0.1), rgba(138, 43, 226, 0.1));
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .holographic-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .holographic-btn:hover::before {
          border-color: var(--asi-blue);
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.2) inset;
        }

        .holographic-btn:hover::after {
          transform: translateX(100%);
        }

        .holographic-btn span {
          position: relative;
          z-index: 1;
        }

        /* --- Section Shared & Glass Panels --- */
        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 2rem;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .section-desc {
          color: var(--asi-text-muted);
          font-size: 1.1rem;
        }

        .glass-panel {
          background: rgba(15, 15, 20, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          position: relative;
          overflow: hidden;
        }

        .glass-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        /* --- Metrics Section --- */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .metric-card {
          padding: 3rem 2rem;
          text-align: center;
          transition: transform 0.4s ease;
        }

        .metric-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 240, 255, 0.2);
        }

        .metric-glow {
          position: absolute;
          top: 50%; left: 50%; width: 100px; height: 100px;
          background: var(--asi-blue);
          filter: blur(60px); opacity: 0;
          transform: translate(-50%, -50%);
          transition: opacity 0.4s;
        }

        .metric-card:hover .metric-glow { opacity: 0.15; }

        .metric-value {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
          color: var(--asi-text-main);
          position: relative;
          z-index: 1;
        }

        .metric-unit {
          font-size: 1.5rem;
          color: var(--asi-blue);
          margin-left: 5px;
        }

        .metric-label {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--asi-text-muted);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .metric-bar {
          height: 2px; width: 100%;
          background: rgba(255,255,255,0.1);
        }

        .metric-fill {
          height: 100%;
          background: var(--asi-blue);
          box-shadow: 0 0 10px var(--asi-blue);
        }

        /* --- Demo Section --- */
        .demo-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-top: 10rem;
          margin-bottom: 10rem;
        }

        .feature-list {
          list-style: none; padding: 0; margin-top: 2rem;
        }

        .feature-list li {
          display: flex; align-items: center; gap: 15px;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--asi-text-main);
        }

        .feature-icon {
          width: 30px; height: 1px; background: var(--asi-violet);
          position: relative;
        }

        .feature-icon::after {
          content: ''; position: absolute;
          right: 0; top: -3px; width: 7px; height: 7px;
          background: var(--asi-violet); transform: rotate(45deg);
        }

        .demo-visuals {
          position: relative;
          perspective: 1000px;
        }

        .main-demo-panel {
          height: 400px;
          display: flex; flex-direction: column;
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 1), 0 0 0 1px rgba(255,255,255,0.05);
        }

        .panel-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; gap: 1rem;
        }

        .panel-controls span {
          display: inline-block; width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.2); margin-right: 6px;
        }

        .panel-title {
          font-family: monospace; font-size: 0.8rem; color: var(--asi-text-muted);
        }

        .panel-body {
          padding: 2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #a9b7c6;
          flex-grow: 1;
        }

        .code-keyword { color: #cc7832; }
        .code-line span:nth-child(2) { color: #ffc66d; }
        .code-line span.code-keyword { color: #cc7832; }
        .code-cursor { display: inline-block; animation: blink 1s step-end infinite; color: var(--asi-blue); }

        @keyframes blink { 50% { opacity: 0; } }

        .floating-widget {
          position: absolute;
          bottom: -20px; right: -20px;
          padding: 1rem 1.5rem;
          font-family: monospace;
          font-size: 0.8rem;
          border-left: 3px solid var(--asi-blue);
        }

        .status-success { color: #00ffaa; text-shadow: 0 0 10px rgba(0,255,170,0.5); }

        /* --- Manifesto Section --- */
        .manifesto-section {
          padding-top: 5rem;
          padding-bottom: 10rem;
        }

        .manifesto-panel {
          max-width: 800px; margin: 0 auto;
          padding: 5rem;
          text-align: center;
          position: relative;
        }

        .quote-mark {
          position: absolute;
          top: 2rem; left: 3rem;
          font-family: serif; font-size: 6rem;
          color: rgba(255,255,255,0.05);
          line-height: 1;
        }

        .manifesto-text {
          font-size: 1.5rem; font-weight: 300; line-height: 1.6;
          margin-bottom: 3rem; position: relative; z-index: 1;
        }

        .founder-name {
          font-family: var(--font-display);
          font-size: 1rem; color: var(--asi-text-main); margin-bottom: 0.5rem;
        }

        .founder-title {
          font-size: 0.8rem; color: var(--asi-blue); letter-spacing: 0.1em;
        }

        /* --- CTA Section --- */
        .cta-section {
          text-align: center;
          padding: 10rem 0;
          position: relative;
        }

        .cta-section::before {
          content: ''; position: absolute;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 80vw; height: 80vw;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.05) 0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: 3rem; margin-bottom: 1rem; position: relative; z-index: 1;
        }

        .cta-desc {
          color: var(--asi-text-muted); font-size: 1.2rem;
          margin-bottom: 3rem; position: relative; z-index: 1;
        }

        .glowing-cta-btn {
          position: relative;
          background: transparent; border: none; padding: 1.5rem 4rem; cursor: pointer;
          font-family: var(--font-display); font-size: 1rem; font-weight: 700;
          color: var(--asi-bg-base); z-index: 1;
        }

        .btn-backdrop {
          position: absolute; inset: 0;
          background: var(--asi-text-main);
          border-radius: 4px; z-index: -1;
          transition: all 0.3s;
        }

        .glowing-cta-btn:hover .btn-backdrop {
          background: var(--asi-blue);
          box-shadow: 0 0 40px rgba(0, 240, 255, 0.6);
        }

        .btn-flare {
          position: absolute; top: 0; bottom: 0; left: -100%; width: 50%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          transform: skewX(-20deg);
          animation: flareSweep 3s infinite;
        }

        @keyframes flareSweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        /* --- Footer --- */
        .asi-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 4rem;
        }

        .footer-content {
          max-width: 1400px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
        }

        .brand-small {
          font-family: var(--font-display); font-weight: 700; font-size: 1rem;
        }
        .brand-small span { color: var(--asi-blue); }

        .footer-links {
          display: flex; gap: 2rem; font-size: 0.8rem; letter-spacing: 0.1em;
          color: var(--asi-text-muted); font-weight: 600;
        }

        .footer-legal {
          font-size: 0.75rem; color: rgba(255,255,255,0.2); letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .demo-layout { grid-template-columns: 1fr; }
          .asi-nav { padding: 1.5rem 2rem; }
          .asi-section { padding: 4rem 2rem; }
          .hero-title { font-size: 3.5rem; }
        }
      `}</style>
    </div>
  );
};

export default SuperintelligenceLaunchDemoGemini;
