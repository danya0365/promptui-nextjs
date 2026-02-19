/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  MINIMAL BLOG LANDING (Gemini Version)                    ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Typography Focused + Reading Progress
 */

'use client';

import { useEffect, useState } from 'react';

export function MinimalBlogLandingDemoGemini() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

        .blog-page {
          --b-bg: #fffaf5;
          --b-text: #2d2a26;
          --b-accent: #d946ef;
          
          font-family: 'Lato', sans-serif;
          background: var(--b-bg);
          color: var(--b-text);
          min-height: 200vh; /* Simulate scroll content */
        }

        .reading-progress {
          position: fixed; top: 0; left: 0; height: 4px; background: var(--b-accent); z-index: 100;
        }

        .blog-nav {
          display: flex; justify-content: space-between; align-items: center; padding: 40px 10%;
        }
        .blog-logo { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; font-style: italic; }

        .blog-hero {
          text-align: center; padding: 80px 20px;
        }
        .blog-title {
          font-family: 'Playfair Display', serif; font-size: 64px; line-height: 1.2; margin-bottom: 24px;
        }
        .blog-subtitle {
          font-size: 18px; color: #777; max-width: 600px; margin: 0 auto; line-height: 1.6;
        }

        .blog-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 40px;
          padding: 60px 10%;
        }

        .blog-card {
          border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 20px; transition: 0.3s; cursor: pointer;
        }
        .blog-card:hover { transform: translateY(-5px); }
        .blog-card-img {
          width: 100%; height: 240px; background: #eee; margin-bottom: 20px; border-radius: 4px; overflow: hidden;
        }
        .blog-card-img img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .blog-card:hover img { transform: scale(1.1); }
        
        .blog-meta { font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
        .blog-card-title { font-family: 'Playfair Display', serif; font-size: 24px; margin-bottom: 12px; }
        .blog-card-desc { color: #555; line-height: 1.6; font-size: 15px; }

        .newsletter-section {
          background: #2d2a26; color: white; padding: 80px 20px; text-align: center; margin-top: 60px;
        }
        .newsletter-input {
          padding: 15px 20px; border: none; border-radius: 30px; width: 300px; margin-right: 10px; font-family: 'Lato', sans-serif;
        }
        .newsletter-btn {
          padding: 15px 30px; border: none; border-radius: 30px; background: var(--b-accent); color: white; font-weight: bold; cursor: pointer; transition: 0.3s;
        }
        .newsletter-btn:hover { background: white; color: var(--b-accent); }

      `}</style>
      
      <div className="blog-page">
        <div className="reading-progress" style={{ width: `${scrollProgress * 100}%` }}></div>
        
        <nav className="blog-nav">
          <div className="blog-logo">Chronicle.</div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <span>Stories</span>
            <span>Culture</span>
            <span>About</span>
          </div>
        </nav>

        <header className="blog-hero">
          <h1 className="blog-title">The Art of Minimal Living</h1>
          <p className="blog-subtitle">Discovering clarity in a chaotic world through design, simplicity, and intentional choices.</p>
        </header>

        <section className="blog-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="blog-card">
              <div className="blog-card-img">
                <img src={`https://picsum.photos/seed/${i * 123}/600/400`} alt="Blog thumbnail" />
              </div>
              <div className="blog-meta">Lifestyle • 5 min read</div>
              <h3 className="blog-card-title">Finding Silence in Noise {i}</h3>
              <p className="blog-card-desc">How to cultivate a quiet mind amidst the digital distractions of modern life.</p>
            </div>
          ))}
        </section>

        <section className="newsletter-section">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '36px', marginBottom: '20px' }}>Join the conversation</h2>
          <p style={{ opacity: 0.7, marginBottom: '40px' }}>Weekly insights on design and slow living.</p>
          <div>
            <input type="email" className="newsletter-input" placeholder="Your email address" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </section>
        
        <footer style={{ padding: '40px', textAlign: 'center', fontSize: '12px', opacity: 0.5 }}>
          © 2025 Chronicle Blog. Designed by Gemini.
        </footer>
      </div>
    </>
  );
}
