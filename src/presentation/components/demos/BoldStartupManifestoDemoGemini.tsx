'use client';

import React, { useEffect, useState } from 'react';

// Bold Revolutionary Startup Manifesto - Gemini 3.1 Pro
// Disruptive, fearless, unapologetic, movement-driven.

export const BoldStartupManifestoDemoGemini: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="manifesto-container">
      {/* Import Massive Bold Fonts: Syne (Headings) & Space Grotesk (Body) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Syne:wght@700;800&display=swap');
      `}</style>

      {/* Navigation (Brutal & Minimal) */}
      <nav className="mani-nav">
        <div className="nav-brand">OVERRIDE_</div>
        <div className="nav-menu">
          <a href="#philosophy">BELIEFS</a>
          <a href="#impact">IMPACT</a>
          <button className="nav-cta">JOIN THE CULT</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="kinetic-marquee">
            <div className="marquee-track" style={{ transform: `translateX(${scrollY * -0.5}px)` }}>
              <span>BREAK THE SYSTEM.</span>
              <span>REBUILD THE RULES.</span>
              <span>BREAK THE SYSTEM.</span>
              <span>REBUILD THE RULES.</span>
              <span>BREAK THE SYSTEM.</span>
              <span>REBUILD THE RULES.</span>
              <span>BREAK THE SYSTEM.</span>
              <span>REBUILD THE RULES.</span>
              <span>BREAK THE SYSTEM.</span>
              <span>REBUILD THE RULES.</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            WE ARE NOT <br />
            HERE TO <br />
            <span className="accent-bg">COMPROMISE.</span>
          </h1>
          
          <div className="hero-footer">
            <p className="hero-desc">
              The old guard is dead. We are building the infrastructure for the next century of human escalation. Either get on board or get out of the way.
            </p>
            <div className="scroll-indicator">
              <span>[ SCROLL ]</span>
              <div className="scroll-line"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="philosophy-section">
        <div className="phil-block" style={{ transform: `translateY(${scrollY * 0.1 - 50}px)` }}>
          <h2 className="phil-title">MEDIOCRITY<br />IS THE<br />ENEMY.</h2>
        </div>
        <div className="phil-text-block">
          <p>
            You have been sold a lie of incremental progress. We reject the slow death of "good enough". Our entire architecture is designed to fundamentally disrupt the complacent monopolies that sleep at the wheel.
          </p>
          <p className="bold-quote">
            "IF IT DOESN'T SCARE YOU, IT'S NOT AMBITIOUS ENOUGH."
          </p>
        </div>
      </section>

      {/* Feature Showcase Grid (Asymmetrical) */}
      <section className="features-section">
        <div className="asym-grid">
          <div className="grid-item item-1">
            <h3>ZERO<br />FRICTION</h3>
            <div className="feat-box box-black"></div>
            <p>Eradicating legacy processes with absolute prejudice. Absolute vertical integration.</p>
          </div>
          <div className="grid-item item-2">
            <h3>RADICAL<br />TRANSPARENCY</h3>
            <div className="feat-box box-accent"></div>
            <p>Open ledgers. Raw metrics. No corporate doublespeak.</p>
          </div>
          <div className="grid-item item-3">
            <h3>INFINITE<br />SCALE</h3>
            <div className="feat-box box-outline"></div>
            <p>Elastic architecture built to handle planetary-scale demand without breaking a sweat.</p>
          </div>
        </div>
      </section>

      {/* Data-Driven Impact */}
      <section id="impact" className="impact-section">
        <div className="impact-split">
          <div className="impact-left">
            <h2>THE<br />MATH<br />DOESN'T<br />LIE.</h2>
          </div>
          <div className="impact-right">
            <div className="stat-block">
              <span className="stat-number">10x</span>
              <span className="stat-label">FASTER VELOCITY</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">-$4M</span>
              <span className="stat-label">OVERHEAD CRUSHED</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">0%</span>
              <span className="stat-label">ROOM FOR ERROR</span>
            </div>
          </div>
        </div>
        
        {/* Kinetic Divider */}
        <div className="kinetic-divider">
          <div className="marquee-track" style={{ transform: `translateX(${(scrollY * 0.5) - 1500}px)` }}>
            <span>UNAPOLOGETIC.</span>
            <span>UNSTOPPABLE.</span>
            <span>UNAPOLOGETIC.</span>
            <span>UNSTOPPABLE.</span>
            <span>UNAPOLOGETIC.</span>
            <span>UNSTOPPABLE.</span>
            <span>UNAPOLOGETIC.</span>
            <span>UNSTOPPABLE.</span>
            <span>UNAPOLOGETIC.</span>
            <span>UNSTOPPABLE.</span>
            <span>UNAPOLOGETIC.</span>
            <span>UNSTOPPABLE.</span>
            <span>UNAPOLOGETIC.</span>
            <span>UNSTOPPABLE.</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-headline">CHOOSE<br />YOUR SIDE.</h2>
          <button className="giant-cta-btn">COMMIT NOW</button>
        </div>
      </section>

      <footer className="mani-footer">
        <div className="footer-brand">OVERRIDE_ ©2026</div>
        <div className="footer-links">
          <span>MANIFESTO</span>
          <span>SYSTEM</span>
          <span>TERMS OF WAR</span>
        </div>
      </footer>

      <style>{`
        :root {
          --mn-black: #050505;
          --mn-white: #f5f5f5;
          --mn-accent: #D4FF00; /* Acid Yellow */
          
          --font-head: 'Syne', sans-serif;
          --font-body: 'Space Grotesk', sans-serif;
        }

        .manifesto-container {
          min-height: 100vh;
          background-color: var(--mn-white);
          color: var(--mn-black);
          font-family: var(--font-body);
          overflow-x: hidden;
          selection-background-color: var(--mn-accent);
          selection-color: var(--mn-black);
        }

        /* Typography Utilities */
        h1, h2, h3 { font-family: var(--font-head); font-weight: 800; text-transform: uppercase; line-height: 0.9; margin: 0; }
        
        /* Navigation */
        .mani-nav {
          position: fixed; top: 0; left: 0; right: 0;
          display: flex; justify-content: space-between; align-items: center;
          padding: 2rem 3rem;
          mix-blend-mode: difference;
          color: white;
          z-index: 100;
        }

        .nav-brand { font-family: var(--font-head); font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; }

        .nav-menu { display: flex; align-items: center; gap: 3rem; }
        .nav-menu a { color: white; text-decoration: none; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }

        .nav-cta {
          background: white; color: black; border: none; padding: 0.8rem 1.5rem;
          font-family: var(--font-head); font-weight: 800; font-size: 0.9rem;
          cursor: pointer; text-transform: uppercase; transition: transform 0.2s;
        }
        .nav-cta:hover { transform: scale(1.05); }

        /* Hero Section */
        .hero-section {
          height: 100vh; background: var(--mn-white);
          display: flex; flex-direction: column; justify-content: center;
          position: relative; overflow: hidden;
        }

        .kinetic-marquee {
          position: absolute; top: 20%; left: -10%; width: 120vw;
          white-space: nowrap; overflow: hidden; opacity: 0.05; pointer-events: none;
        }

        .marquee-track { display: inline-block; }
        .marquee-track span { font-family: var(--font-head); font-size: 15vw; font-weight: 800; padding-right: 2rem; }

        .hero-content { 
          position: relative; z-index: 10; padding: 0 4rem; 
          max-width: 1400px; width: 100%; margin: 6rem auto 0; 
        }

        .hero-title { font-size: clamp(2.5rem, 6.5vw, 7.5rem); letter-spacing: -0.04em; line-height: 1; }
        
        .accent-bg { background: var(--mn-accent); color: var(--mn-black); padding: 0.1em 0.25em; display: inline-block; transform: rotate(-2deg); margin-top: 0.1em; }

        .hero-footer {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-top: 4rem; width: 100%;
        }

        .hero-desc {
          max-width: 450px; font-size: 1.25rem; font-weight: 600; line-height: 1.5;
        }

        .scroll-indicator { display: flex; flex-direction: column; align-items: flex-end; gap: 1rem; }
        .scroll-indicator span { font-family: var(--font-head); font-weight: 800; font-size: 0.8rem; letter-spacing: 2px; }
        .scroll-line { width: 2px; height: 100px; background: var(--mn-black); }

        /* Philosophy Section */
        .philosophy-section {
          background: var(--mn-black); color: var(--mn-white);
          padding: 10rem 4rem; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 4rem;
          align-items: center; position: relative;
        }

        .phil-title { font-size: clamp(3.5rem, 6vw, 8rem); color: var(--mn-accent); line-height: 0.85; letter-spacing: -3px; }

        .phil-text-block { max-width: 500px; }
        .phil-text-block p { font-size: 1.5rem; line-height: 1.6; margin-bottom: 3rem; }
        .bold-quote { font-family: var(--font-head); font-size: 2rem; font-weight: 800; line-height: 1.2; padding-left: 2rem; border-left: 8px solid var(--mn-accent); text-transform: uppercase; }

        /* Features Asymmetrical Grid */
        .features-section { padding: 10rem 4rem; background: var(--mn-white); }
        
        .asym-grid {
          display: grid; grid-template-columns: repeat(12, 1fr); gap: 2rem;
          max-width: 1600px; margin: 0 auto;
        }

        .grid-item { display: flex; flex-direction: column; }
        .grid-item h3 { font-size: 3rem; margin-bottom: 2rem; }
        .grid-item p { font-size: 1.2rem; font-weight: 600; line-height: 1.5; margin-top: 2rem; }

        .feat-box { width: 100%; height: 300px; transition: transform 0.4s ease; }
        .grid-item:hover .feat-box { transform: scale(0.95); }

        .item-1 { grid-column: 1 / 6; }
        .box-black { background: var(--mn-black); }

        .item-2 { grid-column: 7 / 10; margin-top: 10rem; }
        .box-accent { background: var(--mn-accent); }

        .item-3 { grid-column: 10 / 13; margin-top: 5rem; }
        .box-outline { border: 4px solid var(--mn-black); }

        /* Impact Statistics */
        .impact-section {
          background: var(--mn-black); color: var(--mn-white);
          padding: 10rem 0 0 0; position: relative; overflow: hidden;
        }

        .impact-split {
          display: flex; justify-content: space-between; align-items: stretch;
          padding: 0 4rem; margin-bottom: 10rem; flex-wrap: wrap; gap: 4rem;
        }

        .impact-left { flex: 1; min-width: 300px; }
        .impact-left h2 { font-size: clamp(4rem, 9vw, 10rem); word-break: break-word; }

        .impact-right {
          display: flex; flex-direction: column; justify-content: center; gap: 4rem; flex: 1; min-width: 300px;
        }

        .stat-block { display: flex; flex-direction: column; }
        .stat-number { font-family: var(--font-head); font-size: 6rem; font-weight: 800; color: var(--mn-accent); line-height: 1; margin-bottom: 0.5rem; }
        .stat-label { font-size: 1.5rem; font-weight: 700; letter-spacing: 2px; }

        .kinetic-divider {
          background: var(--mn-accent); padding: 2rem 0;
          white-space: nowrap; overflow: hidden; color: var(--mn-black);
          width: 100vw; margin-left: calc(50% - 50vw);
        }
        .kinetic-divider span { font-family: var(--font-head); font-size: 4rem; font-weight: 800; padding-right: 3rem; }

        /* Call To Action */
        .cta-section {
          height: 100vh; background: var(--mn-white);
          display: flex; justify-content: center; align-items: center; text-align: center;
        }

        .cta-headline { font-size: clamp(3.5rem, 8vw, 10rem); letter-spacing: -5px; line-height: 0.8; margin-bottom: 4rem; }

        .giant-cta-btn {
          background: var(--mn-black); color: var(--mn-accent);
          border: none; padding: 2rem 6rem;
          font-family: var(--font-head); font-size: 2.5rem; font-weight: 800;
          text-transform: uppercase; cursor: pointer;
          transition: all 0.2s; box-shadow: 15px 15px 0px var(--mn-accent);
        }

        .giant-cta-btn:hover {
          transform: translate(5px, 5px); box-shadow: 10px 10px 0px var(--mn-accent);
        }
        .giant-cta-btn:active {
          transform: translate(15px, 15px); box-shadow: 0px 0px 0px var(--mn-accent);
        }

        /* Footer */
        .mani-footer {
          background: var(--mn-black); color: var(--mn-white);
          padding: 4rem; display: flex; justify-content: space-between; align-items: center;
        }

        .footer-brand { font-family: var(--font-head); font-weight: 800; font-size: 1.5rem; }
        .footer-links { display: flex; gap: 2rem; font-weight: 600; font-size: 0.9rem; letter-spacing: 1px; }

        @media (max-width: 1024px) {
          .mani-nav { padding: 1.5rem 2rem; position: absolute; }
          .nav-menu a { display: none; }
          .nav-menu { gap: 1rem; }
          .hero-content { padding: 0 2rem; margin-top: 6rem; }
          .hero-footer { flex-direction: column; align-items: flex-start; gap: 3rem; }
          .philosophy-section { grid-template-columns: minmax(0, 1fr); padding: 6rem 2rem; gap: 2rem; }
          .asym-grid { display: flex; flex-direction: column; gap: 4rem; padding: 0 2rem; }
          .item-2, .item-3 { margin-top: 0; }
          .impact-split { flex-direction: column; padding: 0 2rem; gap: 4rem; }
          .mani-footer { flex-direction: column; gap: 2rem; text-align: center; }
          .giant-cta-btn { font-size: 1.5rem; padding: 1.5rem 3rem; }
        }
      `}</style>
    </div>
  );
};

export default BoldStartupManifestoDemoGemini;
