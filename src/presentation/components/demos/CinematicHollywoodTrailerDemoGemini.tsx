'use client';

import React, { useEffect, useRef, useState } from 'react';

// Cinematic Hollywood Trailer - Gemini 3.1 Pro Implementation
// Pure CSS styling, intersection observers for scroll storytelling, ultra-bold typography.

const SEQUENCES = [
  {
    id: 'seq-1',
    headline: 'THE WORLD CHANGER',
    subtext: 'BEYOND EXPECTATIONS. BEYOND IMAGINATION.',
    theme: 'dark'
  },
  {
    id: 'seq-2',
    headline: 'ABSOLUTE POWER',
    subtext: 'UNPRECEDENTED PERFORMANCE IN THE PALM OF YOUR HAND.',
    theme: 'light'
  },
  {
    id: 'seq-3',
    headline: 'PURE EMOTION',
    subtext: 'TECHNOLOGY THAT FEELS HUMAN.',
    theme: 'dark'
  },
  {
    id: 'seq-4',
    headline: 'THE FUTURE IS HERE',
    subtext: 'RESERVE YOUR PLACE IN HISTORY.',
    theme: 'epic',
    cta: 'PRE-ORDER NOW'
  }
];

export const CinematicHollywoodTrailerDemoGemini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSeq, setActiveSeq] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Scroll tracking for parallax and sequence activation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setScrollY(scrollPos);
      
      // Calculate which sequence sequence is active based on scroll
      const newActive = Math.min(
        Math.floor((scrollPos + windowHeight / 2) / windowHeight),
        SEQUENCES.length - 1
      );
      
      if (newActive !== activeSeq) {
        setActiveSeq(newActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSeq]);

  return (
    <div className="trailer-container" ref={containerRef}>
      {/* Dynamic Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@300;400;700;900&display=swap');
      `}</style>
      
      {/* Cinematic Black Bars (Letterboxing) */}
      <div className="cinematic-bar top"></div>
      <div className="cinematic-bar bottom"></div>

      {/* Global Ambient Dust Particles */}
      <div className="ambient-dust"></div>

      {/* Storytelling Sequences (Each takes 100vh) */}
      {SEQUENCES.map((seq, index) => {
        const isActive = index === activeSeq;
        const isPast = index < activeSeq;
        
        // Calculate specific parallax transform for this section based on global scroll
        const sectionScrollOffset = scrollY - (index * window.innerHeight);
        const parallaxTranslateY = sectionScrollOffset * 0.4;
        const textScale = isActive ? 1 + Math.abs(sectionScrollOffset) * 0.0005 : 0.9;

        return (
          <section 
            key={seq.id}
            className={`sequence-panel ${seq.theme} ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
          >
            {/* Background elements specific to theme */}
            <div className="seq-bg-layer" style={{ transform: `translateY(${parallaxTranslateY}px) scale(1.1)` }}>
              {seq.theme === 'dark' && <div className="bg-gradient-dark"></div>}
              {seq.theme === 'light' && <div className="bg-gradient-light"></div>}
              {seq.theme === 'epic' && <div className="bg-gradient-epic"></div>}
              
              {/* Fake Video/Image Placeholder */}
              <div className="bg-visual-placeholder"></div>
            </div>

            {/* Content Layer */}
            <div className="seq-content">
              <div 
                className={`text-wrapper ${isActive ? 'reveal' : ''}`}
                style={{ transform: `scale(${textScale})` }}
              >
                {/* Slow Reveal Typography */}
                <h1 className="epic-headline">
                  {seq.headline.split(' ').map((word, i) => (
                     <span key={i} className="word-reveal" style={{ animationDelay: `${i * 0.2 + 0.3}s` }}>
                       {word}&nbsp;
                     </span>
                  ))}
                </h1>
                
                <p className="epic-subtext" style={{ transitionDelay: '0.8s' }}>
                  {seq.subtext}
                </p>

                {seq.cta && (
                  <button className="epic-cta-btn" style={{ transitionDelay: '1.2s' }}>
                    {seq.cta}
                    <div className="btn-flare"></div>
                  </button>
                )}
              </div>
            </div>

            {/* Dramatic Flash Effect on transition */}
            {isActive && index > 0 && <div className="transition-flash"></div>}
          </section>
        );
      })}

      <style>{`
        :root {
          --th-dark-bg: #000000;
          --th-dark-text: #FFFFFF;
          --th-light-bg: #FAFAFA;
          --th-light-text: #050505;
          
          --font-display: 'Anton', sans-serif;
          --font-body: 'Montserrat', sans-serif;
        }

        /* Essential for scroll-based sections */
        body, html {
          margin: 0;
          padding: 0;
          background: #000;
        }

        .trailer-container {
          position: relative;
          width: 100vw;
          /* Leave normal document flow for scrollbar to work, sections are 100vh each */
          background: #000;
          overflow-x: hidden;
          font-family: var(--font-body);
        }

        /* Cinematic Letterbox */
        .cinematic-bar {
          position: fixed;
          left: 0; right: 0;
          height: 8vh;
          background: #000;
          z-index: 100;
          pointer-events: none;
        }
        .cinematic-bar.top { top: 0; box-shadow: 0 10px 30px rgba(0,0,0,0.8); }
        .cinematic-bar.bottom { bottom: 0; box-shadow: 0 -10px 30px rgba(0,0,0,0.8); }

        /* Ambient Dust */
        .ambient-dust {
          position: fixed;
          inset: 0;
          background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="1.5" fill="rgba(255,255,255,0.15)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="160" cy="140" r="2" fill="rgba(255,255,255,0.05)"/></svg>');
          background-size: 150px 150px;
          z-index: 50;
          pointer-events: none;
          animation: dustDrift 40s linear infinite;
        }

        @keyframes dustDrift {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
        }

        /* Sequence Panels */
        .sequence-panel {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          /* Keep panels sticky to create overlap/wipe effects */
          position: sticky;
          top: 0;
        }

        /* Background Layers */
        .seq-bg-layer {
          position: absolute;
          inset: -10%; /* Extra size for parallax without edge showing */
          z-index: 1;
          will-change: transform;
        }

        .bg-visual-placeholder {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          filter: contrast(1.2) grayscale(0.2);
          mix-blend-mode: overlay;
        }

        /* Theme Styles */
        .sequence-panel.dark { background: var(--th-dark-bg); color: var(--th-dark-text); }
        .bg-gradient-dark {
          position: absolute; inset: 0;
          background: radial-gradient(circle at center, #1a1a24 0%, #000000 70%);
        }

        .sequence-panel.light { background: var(--th-light-bg); color: var(--th-light-text); }
        .bg-gradient-light {
          position: absolute; inset: 0;
          background: radial-gradient(circle at center, #ffffff 0%, #d4d6dc 100%);
        }
        .sequence-panel.light .bg-visual-placeholder { opacity: 0.1; filter: invert(1); }

        .sequence-panel.epic { background: var(--th-dark-bg); color: var(--th-dark-text); }
        .bg-gradient-epic {
          position: absolute; inset: 0;
          background: radial-gradient(circle at center, #2e0000 0%, #000000 80%);
        }

        /* Content & Typography */
        .seq-content {
          position: relative;
          z-index: 10;
          width: 80%;
          max-width: 1200px;
          text-align: center;
        }

        .text-wrapper {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .text-wrapper.reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .epic-headline {
          font-family: var(--font-display);
          font-size: clamp(4rem, 10vw, 12rem);
          line-height: 0.9;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          overflow: hidden; /* Hide words before they animate up */
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .word-reveal {
          display: inline-block;
          transform: translateY(120%);
          opacity: 0;
        }

        .text-wrapper.reveal .word-reveal {
          animation: slideUpFade 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        @keyframes slideUpFade {
          to { transform: translateY(0); opacity: 1; }
        }

        .epic-subtext {
          font-weight: 700;
          font-size: clamp(1rem, 2vw, 1.5rem);
          letter-spacing: 0.4em;
          text-transform: uppercase;
          margin: 0;
          opacity: 0;
          transform: scale(0.95);
        }

        .text-wrapper.reveal .epic-subtext {
          opacity: 0.7;
          transform: scale(1);
          transition: all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* Colors for light theme */
        .sequence-panel.light .epic-subtext { color: #555; }

        /* Epic CTA Button */
        .epic-cta-btn {
          margin-top: 4rem;
          background: transparent;
          color: inherit;
          border: 2px solid currentColor;
          padding: 1.2rem 4rem;
          font-family: var(--font-display);
          font-size: 2rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
        }

        .text-wrapper.reveal .epic-cta-btn {
          opacity: 1;
          transform: translateY(0);
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .epic-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
          z-index: -1;
        }

        .epic-cta-btn:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }

        .epic-cta-btn:hover {
          color: #000; /* Assuming dark theme for CTA */
        }
        
        .sequence-panel.light .epic-cta-btn:hover { color: #FFF; }

        /* Dramatic Flash Transition Effect */
        .transition-flash {
          position: absolute;
          inset: 0;
          background: #FFF;
          z-index: 20;
          pointer-events: none;
          animation: cinematicFlash 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        @keyframes cinematicFlash {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

      `}</style>
    </div>
  );
};

export default CinematicHollywoodTrailerDemoGemini;
