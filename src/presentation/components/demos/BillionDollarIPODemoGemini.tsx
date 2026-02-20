'use client';

import React, { useEffect, useState } from 'react';

// Cinematic Billion-Dollar IPO Announcement - Gemini 3.1 Pro
// Prestigious, powerful, globally dominant tech empire.

export const BillionDollarIPODemoGemini: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ipo-container">
      {/* Import Elegant Fonts: Playfair Display (Serif) & Inter (Sans-Serif) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
      `}</style>

      {/* Navigation (Transparent to Solid Gold on Scroll) */}
      <nav className={`ipo-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-logo">AETHERIUM</div>
        <div className="nav-links">
          <a href="#vision">VISION</a>
          <a href="#leadership">LEADERSHIP</a>
          <a href="#innovation">INNOVATION</a>
          <button className="nav-btn-gold">INVESTOR RELATIONS</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className={`hero-content ${isLoaded ? 'fade-in-up' : ''}`}>
          <div className="pre-headline">THE FUTURE HAS ARRIVED. NYSE: AETH</div>
          <h1 className="hero-headline">
            Defining the <span className="gold-text">Next Century</span><br/>
            of Global Infrastructure.
          </h1>
          <p className="hero-subheadline">
            Today marks the dawn of a new era. Aetherium is officially a public company, poised to accelerate the world's transition into unbounded possibility.
          </p>
          <div className="hero-actions">
            <button className="btn-solid-gold">READ THE PROSPECTUS</button>
            <button className="btn-outline-gold">WATCH THE BELL RINGING</button>
          </div>
        </div>
        
        {/* Spotlight Gradient & Ambient Glow */}
        <div className="spotlight"></div>
        
        <div className="scroll-hint">
          <span>DISCOVER OUR LEGACY</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Vision Timeline Storytelling */}
      <section id="vision" className="vision-section fade-in-on-scroll" style={{ opacity: scrollY > 300 ? 1 : 0.3, transform: `translateY(${scrollY > 300 ? 0 : 50}px)` }}>
        <div className="container">
          <h2 className="section-title">An Unprecedented Trajectory.</h2>
          
          <div className="timeline-grid">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <h3 className="timeline-heading">Inception & Synthesis</h3>
              <p>Founded with the audacious goal of unifying disparate global computing networks into a single, cohesive neural substrate.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <h3 className="timeline-heading">Global Expansion</h3>
              <p>Achieved unicorn status within 36 months, deploying infrastructure across 45 countries with an unparalleled 99.999% uptime.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <h3 className="timeline-heading">The Public Offering</h3>
              <p>The largest technology IPO in human history. A testament to our relentless pursuit of perfection and dominant market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight (Immersive Panels) */}
      <section id="leadership" className="leadership-section">
        <div className="leadership-split">
          <div className="lead-image-panel">
            <div className="image-overlay"></div>
            {/* Semantic styling for image background */}
            <div className="lead-photo" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #080808), url("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop")' }}></div>
          </div>
          <div className="lead-content">
            <div className="lead-quote">
              "We didn't just build a company; we built the foundation for tomorrow's civilization. This IPO is merely day one."
            </div>
            <div className="lead-bio">
              <h3 className="lead-name">Alexander Sterling</h3>
              <p className="lead-title">Founder & Chief Executive Officer</p>
              <div className="gold-separator"></div>
              <p className="lead-desc">
                Visionary architect of the Aetherium ecosystem. Sterling's ruthless commitment to innovation has redefined the boundaries of scale and efficiency in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase Grid */}
      <section id="innovation" className="innovation-section">
        <div className="container center-text">
          <h2 className="section-title">Architecting the Impossible.</h2>
          <p className="section-subtitle">Our core divisions powering the future.</p>
          
          <div className="inno-grid">
            <div className="inno-card">
              <div className="inno-icon">✦</div>
              <h3>Quantum Computing</h3>
              <p>Proprietary logic gates operating at near-absolute zero, delivering unprecedented processing capabilities.</p>
            </div>
            <div className="inno-card highlight-card">
              <div className="inno-icon">⟡</div>
              <h3>Neural Architecture</h3>
              <p>Self-healing, autonomous networks that adapt and evolve, setting the gold standard for global redundancy.</p>
            </div>
            <div className="inno-card">
              <div className="inno-icon">✧</div>
              <h3>Syntell Intelligence</h3>
              <p>AGI-adjacent systems optimizing supply chains, energy distribution, and complex global logistics in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Confident Premium Call-To-Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-headline">Own a Piece of the<br/><span className="italic-serif gold-text">Future</span>.</h2>
          <p className="cta-desc">
            Review our S-1 filing, financial models, and strategic long-term vision. Join us as we reshape the world.
          </p>
          <button className="btn-solid-gold btn-large">ACCESS INVESTOR PORTAL</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="ipo-footer">
        <div className="container footer-flex">
          <div className="footer-brand">AETHERIUM</div>
          <div className="footer-links">
            <span>SEC FILINGS</span>
            <span>GOVERNANCE</span>
            <span>PRESS RELEASES</span>
            <span>TERMS</span>
          </div>
        </div>
        <div className="footer-legal">
          Certain statements in this website may constitute "forward-looking statements" within the meaning of the federal securities laws. <br/>
          © 2026 Aetherium Global Infrastructure, Inc. All rights reserved.
        </div>
      </footer>

      <style>{`
        :root {
          --ipo-pitch-black: #050505;
          --ipo-dark-grey: #111111;
          --ipo-light-grey: #888888;
          --ipo-off-white: #e0e0e0;
          --ipo-bright-white: #ffffff;
          --ipo-gold: #c5a365;
          --ipo-gold-light: #e6ce98;
          --ipo-gold-dark: #8c6f3d;
          
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }

        /* Base & Reset */
        .ipo-container {
          min-height: 100vh;
          background-color: var(--ipo-pitch-black);
          color: var(--ipo-off-white);
          font-family: var(--font-sans);
          overflow-x: hidden;
          selection-background-color: var(--ipo-gold);
          selection-color: var(--ipo-pitch-black);
        }

        .container {
          max-width: 1200px; margin: 0 auto; padding: 0 2rem;
        }
        
        .center-text { text-align: center; }

        h1, h2, h3 { font-family: var(--font-serif); margin: 0; font-weight: 400; }
        
        .gold-text { color: var(--ipo-gold); }
        .italic-serif { font-style: italic; }

        /* Buttons Component */
        button { font-family: var(--font-sans); cursor: pointer; transition: all 0.3s ease; letter-spacing: 1px; font-weight: 500; font-size: 0.85rem; border: none; }
        
        .btn-solid-gold {
          background: linear-gradient(135deg, var(--ipo-gold), var(--ipo-gold-dark)); border: 1px solid var(--ipo-gold-light);
          color: var(--ipo-pitch-black); padding: 1rem 2rem; border-radius: 2px;
        }
        .btn-solid-gold:hover { background: var(--ipo-gold-light); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(197, 163, 101, 0.2); }
        
        .btn-outline-gold {
          background: transparent; border: 1px solid var(--ipo-gold); color: var(--ipo-gold); padding: 1rem 2rem; border-radius: 2px;
        }
        .btn-outline-gold:hover { background: rgba(197, 163, 101, 0.1); }
        
        .btn-large { padding: 1.25rem 3rem; font-size: 1rem; }

        /* Navigation */
        .ipo-nav {
          position: fixed; top: 0; left: 0; right: 0; padding: 1.5rem 3rem;
          display: flex; justify-content: space-between; align-items: center;
          z-index: 1000; transition: all 0.4s ease; border-bottom: 1px solid transparent;
        }
        .ipo-nav.scrolled {
          background: rgba(5, 5, 5, 0.9); backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(197, 163, 101, 0.15); padding: 1rem 3rem;
        }

        .nav-logo { font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 3px; color: var(--ipo-bright-white); }
        
        .nav-links { display: flex; align-items: center; gap: 3rem; }
        .nav-links a { color: var(--ipo-off-white); text-decoration: none; font-size: 0.8rem; letter-spacing: 2px; transition: color 0.3s; }
        .nav-links a:hover { color: var(--ipo-gold); }
        
        .nav-btn-gold {
          background: transparent; color: var(--ipo-gold); border: 1px solid var(--ipo-gold); padding: 0.6rem 1.2rem;
          border-radius: 2px; transition: all 0.3s;
        }
        .nav-btn-gold:hover { background: var(--ipo-gold); color: var(--ipo-pitch-black); }

        /* Hero Section */
        .hero-section {
          height: 100vh; position: relative; display: flex; align-items: center; justify-content: center;
          text-align: center; overflow: hidden;
        }
        
        .spotlight {
          position: absolute; top: -20%; left: 50%; transform: translateX(-50%);
          width: 80vw; height: 80vw;
          background: radial-gradient(circle, rgba(197, 163, 101, 0.08) 0%, rgba(5, 5, 5, 0) 70%);
          z-index: 0; pointer-events: none;
        }

        .hero-content {
          position: relative; z-index: 10; max-width: 900px; padding: 0 2rem;
          opacity: 0; transform: translateY(30px); transition: opacity 1.5s ease-out, transform 1.5s ease-out;
        }
        .hero-content.fade-in-up { opacity: 1; transform: translateY(0); }

        .pre-headline { color: var(--ipo-gold); font-size: 0.85rem; letter-spacing: 4px; margin-bottom: 2rem; font-weight: 500; }
        
        .hero-headline { font-size: clamp(3.5rem, 8vw, 6rem); line-height: 1.1; margin-bottom: 1.5rem; color: var(--ipo-bright-white); }
        
        .hero-subheadline { font-size: 1.2rem; line-height: 1.8; color: var(--ipo-light-grey); max-width: 700px; margin: 0 auto 3rem; font-weight: 300; }

        .hero-actions { display: flex; justify-content: center; gap: 1.5rem; }

        .scroll-hint {
          position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 1rem; opacity: 0.6;
        }
        .scroll-hint span { font-size: 0.7rem; letter-spacing: 3px; color: var(--ipo-light-grey); }
        .scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, var(--ipo-light-grey), transparent); }

        /* General Section Styling */
        .section-title { font-size: clamp(2.5rem, 5vw, 4rem); color: var(--ipo-bright-white); margin-bottom: 4rem; }
        .section-subtitle { color: var(--ipo-gold); font-size: 1.1rem; letter-spacing: 2px; margin-top: -3rem; margin-bottom: 4rem; }

        /* Vision Section */
        .vision-section { padding: 8rem 0; transition: opacity 1s ease-out, transform 1s ease-out; }
        
        .timeline-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; border-top: 1px solid rgba(197, 163, 101, 0.2); padding-top: 4rem; }
        
        .timeline-item { position: relative; }
        .timeline-item::before { content: ''; position: absolute; top: -4.3rem; left: 0; width: 8px; height: 8px; background: var(--ipo-gold); border-radius: 50%; box-shadow: 0 0 10px var(--ipo-gold); }
        
        .timeline-year { color: var(--ipo-gold); font-family: var(--font-serif); font-size: 2.5rem; margin-bottom: 1rem; }
        .timeline-heading { font-size: 1.5rem; margin-bottom: 1rem; color: var(--ipo-bright-white); }
        .timeline-item p { color: var(--ipo-light-grey); line-height: 1.7; font-size: 1rem; font-weight: 300; }

        /* Leadership Spotlight */
        .leadership-section { padding: 8rem 0; background: var(--ipo-dark-grey); }
        
        .leadership-split { display: grid; grid-template-columns: 1fr 1fr; min-height: 80vh; }
        
        .lead-image-panel { position: relative; overflow: hidden; }
        .lead-photo {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-size: cover; background-position: center;
          filter: grayscale(80%) contrast(1.2); transition: transform 6s;
        }
        .leadership-split:hover .lead-photo { transform: scale(1.05); }
        
        .lead-content { padding: 6rem 8rem; display: flex; flex-direction: column; justify-content: center; }
        
        .lead-quote { font-family: var(--font-serif); font-size: 2.5rem; line-height: 1.4; color: var(--ipo-bright-white); font-style: italic; margin-bottom: 4rem; }
        
        .lead-name { font-size: 1.8rem; color: var(--ipo-gold); margin-bottom: 0.5rem; }
        .lead-title { color: var(--ipo-light-grey); font-size: 0.9rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2rem; }
        
        .gold-separator { width: 50px; height: 2px; background: var(--ipo-gold); margin-bottom: 2rem; }
        
        .lead-desc { color: var(--ipo-off-white); line-height: 1.8; font-weight: 300; }

        /* Innovation Section */
        .innovation-section { padding: 10rem 0; }
        
        .inno-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 2rem; }
        
        .inno-card {
          grid-column: span 4; background: var(--ipo-dark-grey); padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.05); transition: all 0.4s ease;
          border-radius: 4px;
        }
        .inno-card:hover { transform: translateY(-10px); border-color: rgba(197, 163, 101, 0.3); background: #151515; }
        
        .highlight-card {
          border-color: rgba(197, 163, 101, 0.2); position: relative; overflow: hidden;
        }
        .highlight-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--ipo-gold), transparent);
        }
        
        .inno-icon { color: var(--ipo-gold); font-size: 2.5rem; margin-bottom: 1.5rem; }
        .inno-card h3 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--ipo-bright-white); }
        .inno-card p { color: var(--ipo-light-grey); line-height: 1.6; font-size: 0.95rem; font-weight: 300; }

        /* CTA Section */
        .cta-section {
          padding: 12rem 2rem; text-align: center;
          background: radial-gradient(circle at center, rgba(197, 163, 101, 0.1) 0%, var(--ipo-pitch-black) 60%);
          border-top: 1px solid rgba(255, 255, 255, 0.05); align-items: center; justify-content: center; display: flex;
        }
        .cta-content { max-width: 800px; }
        .cta-headline { font-size: clamp(3rem, 6vw, 5.5rem); color: var(--ipo-bright-white); line-height: 1.1; margin-bottom: 2rem; }
        .cta-desc { color: var(--ipo-light-grey); font-size: 1.2rem; line-height: 1.7; margin-bottom: 3rem; font-weight: 300; }

        /* Footer */
        .ipo-footer { background: var(--ipo-pitch-black); border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 4rem 0 2rem; }
        
        .footer-flex { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4rem; }
        .footer-brand { font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 4px; color: var(--ipo-bright-white); opacity: 0.5; }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links span { color: var(--ipo-light-grey); font-size: 0.8rem; letter-spacing: 2px; cursor: pointer; transition: color 0.3s; }
        .footer-links span:hover { color: var(--ipo-gold); }
        
        .footer-legal { text-align: center; color: #444; font-size: 0.75rem; line-height: 1.5; padding: 0 2rem; }

        /* Responsive */
        @media (max-width: 1024px) {
          .timeline-grid { grid-template-columns: 1fr; gap: 3rem; }
          .leadership-split { grid-template-columns: 1fr; }
          .lead-image-panel { height: 400px; }
          .lead-content { padding: 4rem 2rem; }
          .inno-card { grid-column: span 12; }
          .hero-actions { flex-direction: column; width: 100%; }
          .nav-links { display: none; }
          .ipo-nav { padding: 1.5rem 2rem; }
          .footer-flex { flex-direction: column; gap: 2rem; align-items: flex-start; }
          .footer-links { flex-wrap: wrap; gap: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default BillionDollarIPODemoGemini;
