/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  SAAS LANDING PAGE (Gemini Version)                       ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + 3D Transforms + Gradient Aesthetics
 */

'use client';

import { useState } from 'react';

export function SaaSLandingPageDemoGemini() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .saas-container {
          --s-primary: #6366f1;
          --s-secondary: #ec4899;
          --s-dark: #0f172a;
          --s-light: #f8fafc;
          --s-text: #334155;
          --s-text-light: #94a3b8;
          
          font-family: 'Inter', sans-serif;
          background: white;
          color: var(--s-text);
          overflow-x: hidden;
          line-height: 1.5;
        }

        /* ── Nav ── */
        .saas-nav {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 40px;
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .saas-logo { font-weight: 800; font-size: 24px; background: linear-gradient(135deg, var(--s-primary), var(--s-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .saas-nav-links { display: flex; gap: 24px; font-weight: 500; font-size: 14px; }
        .saas-btn {
          padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; border: none;
        }
        .saas-btn-primary { background: var(--s-primary); color: white; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); }
        .saas-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4); }

        /* ── Hero ── */
        .saas-hero {
          min-height: 80vh;
          display: flex; align-items: center; justify-content: center;
          padding: 60px 20px;
          background: radial-gradient(circle at top right, rgba(99,102,241,0.1), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(236,72,153,0.1), transparent 40%);
          position: relative;
          overflow: hidden;
        }
        .saas-hero-content {
          text-align: center; max-width: 800px; z-index: 1;
        }
        .saas-h1 {
          font-size: 56px; line-height: 1.1; font-weight: 800; letter-spacing: -1px; margin-bottom: 24px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .saas-p { font-size: 20px; color: var(--s-text-light); margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
        
        /* 3D Elements */
        .saas-3d-scene {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;
          perspective: 1000px;
        }
        .saas-float {
          position: absolute; width: 60px; height: 60px; border-radius: 12px;
          background: linear-gradient(135deg, white, #f1f5f9);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          animation: saasFloat 6s ease-in-out infinite;
        }
        @keyframes saasFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        
        /* ── Feature Grid ── */
        .saas-features { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
        .saas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .saas-card {
          padding: 32px; border-radius: 20px; background: white; border: 1px solid #e2e8f0;
          transition: 0.3s; position: relative; overflow: hidden;
        }
        .saas-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); border-color: var(--s-primary); }
        .saas-icon {
          width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, var(--s-primary), var(--s-secondary));
          display: flex; align-items: center; justify-content: center; margin-bottom: 20px; color: white; font-size: 24px;
        }

        /* ── Pricing ── */
        .saas-pricing { background: var(--s-dark); color: white; padding: 100px 20px; text-align: center; }
        .saas-price-grid { display: flex; justify-content: center; gap: 30px; margin-top: 60px; flex-wrap: wrap; }
        .saas-price-card {
          width: 300px; padding: 40px; border-radius: 24px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; position: relative;
        }
        .saas-price-card.popular { background: linear-gradient(180deg, rgba(99,102,241,0.2), rgba(255,255,255,0.05)); border: 1px solid var(--s-primary); transform: scale(1.05); }
        .saas-price-amount { font-size: 48px; font-weight: 800; margin: 20px 0; }
        .saas-price-sub { font-size: 14px; opacity: 0.6; }
        .saas-check { color: var(--s-primary); margin-right: 10px; }

        @media (max-width: 768px) {
          .saas-h1 { font-size: 36px; }
          .saas-price-card.popular { transform: scale(1); }
        }
      `}</style>
      
      <div className="saas-container">
        <nav className="saas-nav">
          <div className="saas-logo">NEXUS</div>
          <div className="saas-nav-links">
            <span>Features</span>
            <span>Pricing</span>
            <span>Company</span>
          </div>
          <button className="saas-btn saas-btn-primary">Get Started</button>
        </nav>

        <section className="saas-hero">
          <div className="saas-3d-scene">
            <div className="saas-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
            <div className="saas-float" style={{ bottom: '30%', right: '15%', animationDelay: '1s' }}></div>
            <div className="saas-float" style={{ top: '15%', right: '25%', width: '40px', height: '40px', animationDelay: '2s' }}></div>
          </div>
          
          <div className="saas-hero-content">
            <h1 className="saas-h1">Scale your business without limits</h1>
            <p className="saas-p">The all-in-one platform to automate, analyze, and grow your digital presence. Join 10,000+ creators today.</p>
            <div style={{ display: 'flex', gap: '16px', justifyItems: 'center', justifyContent: 'center' }}>
              <button className="saas-btn saas-btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>Start Free Trial</button>
              <button className="saas-btn" style={{ background: '#f1f5f9', color: '#334155' }}>View Demo</button>
            </div>
          </div>
        </section>

        <section className="saas-features">
          <div className="saas-grid">
            <div className="saas-card">
              <div className="saas-icon">⚡</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Lightning Fast</h3>
              <p style={{ color: '#64748b' }}>Optimized for speed with global CDN delivery and instant loading times.</p>
            </div>
            <div className="saas-card">
              <div className="saas-icon">🔒</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Enterprise Security</h3>
              <p style={{ color: '#64748b' }}>Bank-grade encryption and SOC2 compliance out of the box.</p>
            </div>
            <div className="saas-card">
              <div className="saas-icon">📈</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Real-time Analytics</h3>
              <p style={{ color: '#64748b' }}>Track every metric that matters with our live dashboard.</p>
            </div>
          </div>
        </section>

        <section className="saas-pricing">
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px' }}>Simple Pricing</h2>
          <p style={{ opacity: 0.6 }}>No hidden fees. Cancel anytime.</p>
          
          <div className="saas-price-grid">
            <div className="saas-price-card">
              <h3>Starter</h3>
              <div className="saas-price-amount">$0<span className="saas-price-sub">/mo</span></div>
              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, marginBottom: '20px', lineHeight: '2' }}>
                <li><span className="saas-check">✓</span> 1 Project</li>
                <li><span className="saas-check">✓</span> 5GB Storage</li>
                <li><span className="saas-check">✓</span> Community Support</li>
              </ul>
              <button className="saas-btn" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', color: 'white' }}>Current Plan</button>
            </div>
            <div className="saas-price-card popular">
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#6366f1', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>MOST POPULAR</div>
              <h3>Pro</h3>
              <div className="saas-price-amount">$29<span className="saas-price-sub">/mo</span></div>
              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, marginBottom: '20px', lineHeight: '2' }}>
                <li><span className="saas-check">✓</span> Unlimited Projects</li>
                <li><span className="saas-check">✓</span> 100GB Storage</li>
                <li><span className="saas-check">✓</span> Priority Support</li>
                <li><span className="saas-check">✓</span> Analytics</li>
              </ul>
              <button className="saas-btn saas-btn-primary" style={{ width: '100%' }}>Upgrade Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
