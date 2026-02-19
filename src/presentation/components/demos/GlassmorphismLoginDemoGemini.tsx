/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  GLASSMORPHISM LOGIN FORM (Gemini Version)                ║
 * ║  Alternative interpretation by Gemini 3 Pro               ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Tech: Next.js + Pure CSS (No Tailwind)
 */

'use client';

import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export function GlassmorphismLoginDemoGemini() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Interact animations
  const [hovered, setHovered] = useState(false);
  const formSpring = useSpring({
    transform: hovered ? 'scale(1.01) translateY(-5px)' : 'scale(1) translateY(0)',
    boxShadow: hovered 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
      : '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gemini-demo-body {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          position: relative;
          overflow: hidden;
          color: white;
        }

        /* ── Dynamic Background ── */
        .gemini-bg-shape {
          position: absolute;
          filter: blur(90px);
          opacity: 0.6;
          animation: gemini-pulse 10s infinite alternate;
        }
        .gemini-shape-1 {
          top: -10%; left: -10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, #0ea5e9, transparent 70%);
        }
        .gemini-shape-2 {
          bottom: -10%; right: -10%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, #6366f1, transparent 70%);
          animation-delay: -5s;
        }
        .gemini-shape-3 {
          top: 40%; left: 40%;
          width: 300px; height: 300px;
          background: radial-gradient(circle, #10b981, transparent 70%);
          animation-duration: 15s;
        }

        @keyframes gemini-pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0.7; }
        }

        /* ── Glass Card ── */
        .gemini-glass-card {
          position: relative;
          width: 100%;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          z-index: 10;
        }

        .gemini-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .gemini-icon-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          margin-bottom: 24px;
          box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.5);
        }
        
        .gemini-icon {
          width: 32px;
          height: 32px;
          color: white;
        }

        .gemini-title {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .gemini-subtitle {
          color: #94a3b8;
        }

        /* ── Inputs ── */
        .gemini-input-wrapper {
          position: relative;
          margin-bottom: 24px;
        }
        
        .gemini-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          color: white;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .gemini-input:focus {
          background: rgba(0, 0, 0, 0.4);
          border-color: #38bdf8;
          box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.1);
        }

        .gemini-label {
          position: absolute;
          left: 16px;
          top: 16px;
          color: #94a3b8;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .gemini-input:focus ~ .gemini-label,
        .gemini-input:not(:placeholder-shown) ~ .gemini-label {
          transform: translateY(-28px) translateX(-5px) scale(0.85);
          color: #38bdf8;
          top: 16px;
        }

        /* ── Options Row ── */
        .gemini-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          font-size: 14px;
          color: #94a3b8;
        }

        .gemini-checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: color 0.2s;
        }
        .gemini-checkbox-label:hover {
          color: white;
        }

        .gemini-checkbox {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          position: relative;
        }
        .gemini-checkbox:checked {
          background: #0ea5e9;
          border-color: #0ea5e9;
        }
        .gemini-checkbox:checked::after {
          content: '✔';
          position: absolute;
          font-size: 10px;
          color: white;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .gemini-forgot {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .gemini-forgot:hover {
          color: #38bdf8;
        }

        /* ── Button ── */
        .gemini-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .gemini-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
        }

        .gemini-btn:active {
          transform: translateY(0);
        }

        /* ── Divider ── */
        .gemini-divider {
          position: relative;
          margin: 32px 0;
          text-align: center;
        }
        .gemini-divider::before {
          content: '';
          position: absolute;
          top: 50%; left: 0; right: 0;
          height: 1px;
          background: rgba(255,255,255,0.1);
        }
        .gemini-divider span {
          position: relative;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(4px);
          padding: 0 10px;
          color: #64748b;
          font-size: 14px;
        }

        /* ── Socials ── */
        .gemini-socials {
          display: flex;
          gap: 16px;
        }
        
        .gemini-social-btn {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .gemini-social-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .gemini-social-icon {
          width: 20px;
          height: 20px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .gemini-social-btn:hover .gemini-social-icon {
          opacity: 1;
        }
        .gemini-social-icon.invert {
          filter: invert(1);
        }
      `}</style>

      <div className="gemini-demo-body">
        <div className="gemini-bg-shape gemini-shape-1" />
        <div className="gemini-bg-shape gemini-shape-2" />
        <div className="gemini-bg-shape gemini-shape-3" />

        <animated.div 
          className="gemini-glass-card"
          style={formSpring}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="gemini-header">
            <div className="gemini-icon-box">
              <svg className="gemini-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="gemini-title">Welcome Back</h2>
            <p className="gemini-subtitle">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="gemini-input-wrapper">
              <input 
                type="email" 
                className="gemini-input" 
                placeholder=" " 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="gemini-label">Email Address</label>
            </div>

            <div className="gemini-input-wrapper">
              <input 
                type="password" 
                className="gemini-input" 
                placeholder=" " 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="gemini-label">Password</label>
            </div>

            <div className="gemini-options">
              <label className="gemini-checkbox-label">
                <input type="checkbox" className="gemini-checkbox" />
                Remember me
              </label>
              <a href="#" className="gemini-forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="gemini-btn">
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="gemini-divider">
            <span>Or continue with</span>
          </div>

          <div className="gemini-socials">
            <button className="gemini-social-btn">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="gemini-social-icon" alt="Google" />
            </button>
            <button className="gemini-social-btn">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="gemini-social-icon invert" alt="GitHub" />
            </button>
            <button className="gemini-social-btn">
              <img src="https://www.svgrepo.com/show/448206/apple.svg" className="gemini-social-icon invert" alt="Apple" />
            </button>
          </div>
        </animated.div>
      </div>
    </>
  );
}
