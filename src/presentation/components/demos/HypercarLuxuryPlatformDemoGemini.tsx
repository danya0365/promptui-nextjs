'use client';

import React, { useEffect, useState } from 'react';

// Luxury High-Performance Tech Platform - Gemini 3.1 Pro Implementation
// Hypercar branding vibes. Powerful, elite, performance-driven.

export const HypercarLuxuryPlatformDemoGemini: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hyper-container">
      {/* Premium Fonts Import: Cinzel (Ultra-premium serif) & Montserrat (Modern sans-serif) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800;900&family=Montserrat:wght@300;400;600;700&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className={`hyper-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="hyper-logo">
          <span className="logo-icon"></span>
          VELOCE
        </div>
        <div className="hyper-links">
          <a href="#machinery">THE MACHINERY</a>
          <a href="#performance">PERFORMANCE</a>
          <a href="#heritage">HERITAGE</a>
        </div>
        <button className="hyper-cta-nav">RESERVE</button>
      </nav>

      <main className="hyper-main">
        {/* Hero Section */}
        <section className="hyper-hero">
          <div className="hero-bg-accent" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
          <div className="hero-content" style={{ transform: `translateY(${scrollY * -0.15}px)` }}>
            <h4 className="hero-kicker">ENGINEERED FOR THE APEX</h4>
            <h1 className="hero-title">
              ABSOLUTE<br />
              <span className="text-silver">SUPREMACY.</span>
            </h1>
            <p className="hero-subtitle">
              A synthesis of brutal power and meticulous craftsmanship. The world's first carbon-lattice compute engine. Designed for those who demand nothing less than everything.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                <span>DISCOVER V-12 CORE</span>
                <div className="btn-flare"></div>
              </button>
              <button className="btn-secondary">VIEW GALLERY</button>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span>SCROLL TO IGNITE</span>
          </div>
        </section>

        {/* Feature Highlight Blocks with Angled Cut Layouts */}
        <section id="machinery" className="hyper-features">
          <div className="feature-block block-left">
            <div className="feature-image-container">
              {/* Cinematic lighting gradient placeholder */}
              <div className="placeholder-image glow-red">
                <div className="img-overlay"></div>
              </div>
            </div>
            <div className="feature-text">
              <div className="section-line"></div>
              <h2 className="feature-title">FORGED IN <span>SECRECY.</span></h2>
              <p className="feature-desc">
                Every logic board is meticulously milled from a solid block of aerospace-grade titanium. Finished with a proprietary shadow-chrome vapor deposition. Aesthetics driven purely by aerodynamic thermal routing.
              </p>
              <a href="#" className="hyper-link">AERODYNAMICS OF DATA →</a>
            </div>
          </div>

          <div className="feature-block block-right angled-top">
            <div className="feature-text">
              <div className="section-line"></div>
              <h2 className="feature-title">UNYIELDING <span>TORQUE.</span></h2>
              <p className="feature-desc">
                The bespoke quantum-silicon architecture delivers incomprehensible bandwidth. 100 TFLOPs of raw computational horsepower channeled through liquid-cooled plasma conduits. Zero latency. Infinite scale.
              </p>
              <a href="#" className="hyper-link">EXPLORE THE POWERTRAIN →</a>
            </div>
            <div className="feature-image-container">
              <div className="placeholder-image glow-silver">
                <div className="img-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section id="performance" className="hyper-performance angled-bottom">
          <div className="perf-header">
            <h3 className="perf-kicker">THE MEASURE OF EXCELLENCE</h3>
            <h2 className="perf-title">UNRIVALED METRICS</h2>
          </div>
          <div className="perf-grid">
            <div className="perf-metric">
              <div className="metric-number">0.9<span className="metric-unit">ms</span></div>
              <div className="metric-label">COLD BOOT TO PEAK</div>
            </div>
            <div className="perf-metric">
              <div className="metric-number">12,000<span className="metric-unit">RPM</span></div>
              <div className="metric-label">FLUID CENTRIFUGE COOLING</div>
            </div>
            <div className="perf-metric">
              <div className="metric-number">∞<span className="metric-unit">Hz</span></div>
              <div className="metric-label">UNLOCKED FREQUENCY</div>
            </div>
          </div>
        </section>

        {/* Prestige Testimonial Showcase */}
        <section id="heritage" className="hyper-testimonial">
          <div className="test-content">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              "We didn't build a computer. We crafted an instrument of sheer domination. It is a terrifyingly beautiful intersection of art and raw computational violence."
            </p>
            <div className="quote-author">
              <span className="author-name">A. VANDERBILT</span>
              <span className="author-title">CHIEF ARCHITECT, VELOCE</span>
            </div>
          </div>
        </section>

        {/* Bold Minimal Footer */}
        <footer className="hyper-footer">
          <div className="footer-top">
            <h2 className="footer-call">CLAIM YOUR APEX.</h2>
            <button className="btn-primary footer-btn">
              <span>REQUEST INVITATION</span>
              <div className="btn-flare"></div>
            </button>
          </div>
          <div className="footer-bottom">
            <div className="footer-brand">
              <span className="logo-icon-small"></span>
              VELOCE
            </div>
            <div className="footer-legal">
              © 2026 VELOCE MOTORS & TECHNOLOGIES. CONFIDENTIAL.
            </div>
            <div className="footer-social">
              <span>X</span><span>IG</span><span>LI</span>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        :root {
          /* Hypercar Palette */
          --hc-bg-dark: #09090b; /* Dark graphite base */
          --hc-bg-lighter: #121214;
          --hc-red-deep: #b00101; /* Ferrari/Hypercar deep red */
          --hc-red-glow: #ff2a2a;
          --hc-silver: #e2e4e9; /* Metallic silver */
          --hc-silver-dark: #8c909b;
          --hc-white: #ffffff;
          
          /* Typography */
          --font-display: 'Cinzel', serif;
          --font-body: 'Montserrat', sans-serif;
        }

        .hyper-container {
          min-height: 100vh;
          background-color: var(--hc-bg-dark);
          color: var(--hc-silver);
          font-family: var(--font-body);
          overflow-x: hidden;
          background-image: radial-gradient(circle at 50% 0%, rgba(30, 30, 35, 0.4) 0%, transparent 60%);
        }

        /* Navigation */
        .hyper-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          padding: 2rem 4rem;
          display: flex; justify-content: space-between; align-items: center;
          z-index: 100;
          transition: all 0.4s ease;
          border-bottom: 1px solid transparent;
        }

        .hyper-nav.scrolled {
          background: rgba(9, 9, 11, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .hyper-logo {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--hc-white);
          letter-spacing: 0.2em;
          display: flex; align-items: center; gap: 15px;
        }

        .logo-icon {
          width: 24px; height: 24px;
          background: linear-gradient(135deg, var(--hc-red-deep) 0%, var(--hc-red-glow) 100%);
          clip-path: polygon(100% 0, 0 0, 50% 100%);
        }

        .logo-icon-small {
          width: 14px; height: 14px;
          background: var(--hc-silver);
          clip-path: polygon(100% 0, 0 0, 50% 100%);
        }

        .hyper-links {
          display: flex; gap: 3rem;
        }

        .hyper-links a {
          color: var(--hc-silver-dark);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-decoration: none;
          transition: color 0.3s;
          position: relative;
        }

        .hyper-links a:hover {
          color: var(--hc-white);
        }

        .hyper-links a::after {
          content: ''; position: absolute;
          bottom: -5px; left: 0; width: 0; height: 1px;
          background: var(--hc-red-glow);
          transition: width 0.3s ease;
        }

        .hyper-links a:hover::after {
          width: 100%;
        }

        .hyper-cta-nav {
          background: transparent; color: var(--hc-white);
          border: 1px solid var(--hc-silver-dark);
          padding: 0.75rem 2rem;
          font-family: var(--font-body);
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em;
          cursor: pointer; transition: all 0.3s;
        }

        .hyper-cta-nav:hover {
          background: var(--hc-white); color: var(--hc-bg-dark);
        }

        /* --- Hero Section --- */
        .hyper-hero {
          height: 100vh;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-accent {
          position: absolute;
          width: 150vw; height: 100vh;
          top: -20%; left: -25%;
          background: radial-gradient(ellipse at center, rgba(176, 1, 1, 0.15) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }

        .hero-content {
          position: relative; z-index: 10;
          max-width: 1000px; padding: 0 2rem;
        }

        .hero-kicker {
          font-size: 0.8rem; letter-spacing: 0.4em;
          color: var(--hc-red-glow);
          margin-bottom: 2rem; font-weight: 700;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 8rem);
          line-height: 0.95;
          margin-bottom: 2rem;
          color: var(--hc-white);
          text-transform: uppercase;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .text-silver {
          background: linear-gradient(180deg, #ffffff 0%, #8c909b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.1rem; line-height: 1.8;
          color: var(--hc-silver-dark);
          max-width: 650px; margin: 0 auto 3rem auto;
          font-weight: 400;
        }

        .hero-actions {
          display: flex; gap: 1.5rem; justify-content: center;
        }

        /* Buttons */
        .btn-primary {
          background: var(--hc-red-deep);
          color: var(--hc-white);
          border: none;
          padding: 1.25rem 3rem;
          font-family: var(--font-body);
          font-weight: 700; font-size: 0.8rem; letter-spacing: 0.2em;
          cursor: pointer; position: relative; overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn-primary::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 1px;
          background: rgba(255,255,255,0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(176, 1, 1, 0.4);
          background: #cc0000;
        }

        .btn-flare {
          position: absolute; top: 0; bottom: 0; left: -100%; width: 50px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg); animation: flarePass 3s infinite;
        }

        @keyframes flarePass { 0% { left: -100%; } 100% { left: 200%; } }

        .btn-secondary {
          background: transparent;
          color: var(--hc-white);
          border: 1px solid var(--hc-silver-dark);
          padding: 1.25rem 3rem;
          font-family: var(--font-body);
          font-weight: 700; font-size: 0.8rem; letter-spacing: 0.2em;
          cursor: pointer; transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.05); border-color: var(--hc-white);
        }

        /* Scroll Indicator */
        .hero-scroll-indicator {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          opacity: 0.7;
        }

        .mouse {
          width: 24px; height: 36px; border: 1px solid var(--hc-silver-dark);
          border-radius: 12px; position: relative;
        }

        .wheel {
          width: 2px; height: 6px; background: var(--hc-red-glow);
          position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
          border-radius: 2px; animation: scrollWheel 1.5s infinite;
        }

        @keyframes scrollWheel {
          0% { top: 6px; opacity: 1; }
          100% { top: 18px; opacity: 0; }
        }

        .hero-scroll-indicator span {
          font-size: 0.6rem; letter-spacing: 0.3em; color: var(--hc-silver-dark); font-weight: 700;
        }

        /* --- Feature Layouts with Angled Cuts --- */
        .hyper-features {
          padding: 0;
          background: var(--hc-bg-dark);
        }

        .feature-block {
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 80vh;
        }

        .feature-image-container {
          background: var(--hc-bg-lighter);
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }

        .placeholder-image {
          width: 100%; height: 100%; position: absolute;
          background-image: 
            linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.02) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.02) 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }

        .glow-red { background-color: rgba(176, 1, 1, 0.05); box-shadow: inset 0 0 150px rgba(176, 1, 1, 0.1); }
        .glow-silver { background-color: rgba(255, 255, 255, 0.02); box-shadow: inset 0 0 150px rgba(255, 255, 255, 0.05); }

        .feature-text {
          padding: 8rem 6rem;
          display: flex; flex-direction: column; justify-content: center;
        }

        .section-line {
          width: 40px; height: 2px; background: var(--hc-red-glow); margin-bottom: 2rem;
        }

        .feature-title {
          font-family: var(--font-display);
          font-size: 3rem; color: var(--hc-white); margin-bottom: 1.5rem; line-height: 1.1;
        }
        
        .feature-title span { color: var(--hc-silver-dark); font-style: italic; }

        .feature-desc {
          font-size: 1.1rem; line-height: 1.8; color: var(--hc-silver); margin-bottom: 3rem; font-weight: 300;
        }

        .hyper-link {
          color: var(--hc-white); text-decoration: none; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em;
          display: inline-flex; align-items: center; transition: color 0.3s;
        }
        
        .hyper-link:hover { color: var(--hc-red-glow); }

        /* Angled Cut Layout Magic */
        .angled-top {
          clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0 100%);
          margin-top: -5vw; position: relative; z-index: 2;
        }

        .angled-bottom {
          clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
          margin-top: -5vw; padding-top: 10vw;
          z-index: 1; position: relative;
        }

        /* --- Performance Metrics --- */
        .hyper-performance {
          background: #000;
          padding: 10rem 4rem;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .perf-kicker {
          font-size: 0.8rem; letter-spacing: 0.3em; color: var(--hc-red-glow); margin-bottom: 1rem;
        }

        .perf-title {
          font-family: var(--font-display); font-size: 3.5rem; color: var(--hc-white); margin-bottom: 5rem;
        }

        .perf-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 4rem; max-width: 1200px; margin: 0 auto;
        }

        .perf-metric {
          position: relative;
        }
        
        .perf-metric::after {
          content: ''; position: absolute; right: -2rem; top: 20%; height: 60%; width: 1px; background: rgba(255,255,255,0.1);
        }
        .perf-metric:last-child::after { display: none; }

        .metric-number {
          font-family: var(--font-display); font-size: 4rem; font-weight: 400; color: var(--hc-white);
          line-height: 1; margin-bottom: 1rem;
          text-shadow: 0 0 40px rgba(255,255,255,0.1);
        }

        .metric-unit {
          font-size: 1.5rem; color: var(--hc-silver-dark); font-family: var(--font-body); font-weight: 300; margin-left: 5px;
        }

        .metric-label {
          font-size: 0.75rem; letter-spacing: 0.2em; font-weight: 700; color: var(--hc-silver);
        }

        /* --- Testimonial Heritage --- */
        .hyper-testimonial {
          background: var(--hc-bg-lighter); padding: 12rem 2rem; text-align: center; position: relative; overflow: hidden;
        }

        .hyper-testimonial::before {
          content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 1px; height: 100px; background: var(--hc-red-glow);
        }

        .test-content {
          max-width: 900px; margin: 0 auto; position: relative;
        }

        .quote-mark {
          font-family: var(--font-display); font-size: 8rem; color: rgba(255,255,255,0.03);
          position: absolute; top: -4rem; left: 50%; transform: translateX(-50%); line-height: 1;
        }

        .quote-text {
          font-family: var(--font-display); font-size: 2.2rem; line-height: 1.4; color: var(--hc-white); margin-bottom: 3rem; font-style: italic; position: relative; z-index: 1;
        }

        .quote-author { display: flex; flex-direction: column; gap: 5px; }
        .author-name { font-size: 0.9rem; font-weight: 700; letter-spacing: 0.2em; color: var(--hc-white); }
        .author-title { font-size: 0.7rem; letter-spacing: 0.1em; color: var(--hc-silver-dark); }

        /* --- Footer --- */
        .hyper-footer {
          background: var(--hc-bg-dark); border-top: 1px solid rgba(255,255,255,0.05); padding: 6rem 4rem 2rem 4rem;
        }

        .footer-top {
          display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4rem; margin-bottom: 2rem;
        }

        .footer-call {
          font-family: var(--font-display); font-size: 2.5rem; color: var(--hc-white);
        }

        .footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
        }

        .footer-brand {
          display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 900; letter-spacing: 0.2em; font-size: 1rem; color: var(--hc-white);
        }

        .footer-legal {
          font-size: 0.6rem; letter-spacing: 0.1em; color: var(--hc-silver-dark);
        }

        .footer-social {
          display: flex; gap: 2rem; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; color: var(--hc-white);
        }

        /* Responsive scaling */
        @media (max-width: 1024px) {
          .feature-block { grid-template-columns: 1fr; }
          .angled-top { clip-path: none; margin-top: 0; }
          .angled-bottom { clip-path: none; margin-top: 0; padding-top: 5rem; }
          .feature-text { padding: 4rem 2rem; }
          .footer-top { flex-direction: column; gap: 2rem; text-align: center; }
          .footer-bottom { flex-direction: column; gap: 2rem; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default HypercarLuxuryPlatformDemoGemini;
