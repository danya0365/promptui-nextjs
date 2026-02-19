/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  GLASSMORPHISM LOGIN FORM — Live Demo                     ║
 * ║  Self-contained component with its own Tailwind CSS       ║
 * ║  Copy this entire file + Tailwind to use in your project  ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Tech: Next.js + Tailwind CSS v4 (standalone)
 * Features:
 *   - Glassmorphism frosted-glass panel
 *   - Animated gradient border
 *   - Floating label inputs
 *   - Gradient submit button with hover glow
 *   - Social login buttons (Google, GitHub)
 *   - Dark purple/blue theme
 *   - Fully responsive
 */

'use client';

import { useState } from 'react';

export function GlassmorphismLoginDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      {/* ── Scoped styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .demo-login-page {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #070b14;
          position: relative;
          overflow: hidden;
        }

        /* ── Animated background ── */
        .demo-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: demo-float 8s ease-in-out infinite;
        }
        .demo-bg-orb-1 {
          width: 400px;
          height: 400px;
          background: #7c3aed;
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }
        .demo-bg-orb-2 {
          width: 350px;
          height: 350px;
          background: #ec4899;
          bottom: -80px;
          right: -80px;
          animation-delay: -3s;
        }
        .demo-bg-orb-3 {
          width: 250px;
          height: 250px;
          background: #3b82f6;
          top: 50%;
          right: 20%;
          animation-delay: -5s;
        }

        @keyframes demo-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* ── Grid pattern ── */
        .demo-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(124, 58, 237, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.06) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* ── Card ── */
        .demo-login-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: 1rem;
          z-index: 10;
        }

        .demo-login-card-inner {
          position: relative;
          background: rgba(15, 20, 40, 0.7);
          backdrop-filter: blur(24px) saturate(1.5);
          -webkit-backdrop-filter: blur(24px) saturate(1.5);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.25rem;
          padding: 2.5rem;
          box-shadow:
            0 0 40px rgba(124, 58, 237, 0.08),
            0 25px 60px rgba(0, 0, 0, 0.4);
        }

        /* ── Animated gradient border ── */
        .demo-login-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 1.3rem;
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.5),
            rgba(236, 72, 153, 0.3),
            rgba(59, 130, 246, 0.5),
            rgba(124, 58, 237, 0.5)
          );
          background-size: 300% 300%;
          animation: demo-gradient-rotate 6s linear infinite;
          z-index: -1;
          opacity: 0.6;
        }

        @keyframes demo-gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── Logo ── */
        .demo-logo {
          width: 56px;
          height: 56px;
          margin: 0 auto 1.5rem;
          border-radius: 1rem;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
        }

        .demo-title {
          color: #f1f5f9;
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.35rem;
        }

        .demo-subtitle {
          color: #94a3b8;
          font-size: 0.875rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        /* ── Float label input group ── */
        .demo-input-group {
          position: relative;
          margin-bottom: 1.25rem;
        }

        .demo-input {
          width: 100%;
          padding: 0.875rem 1rem;
          padding-top: 1.25rem;
          background: rgba(30, 35, 60, 0.6);
          border: 1px solid rgba(100, 116, 139, 0.2);
          border-radius: 0.75rem;
          color: #f1f5f9;
          font-size: 0.875rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        .demo-input:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
        }

        .demo-input::placeholder {
          color: transparent;
        }

        .demo-float-label {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          font-size: 0.875rem;
          pointer-events: none;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .demo-input:focus ~ .demo-float-label,
        .demo-input:not(:placeholder-shown) ~ .demo-float-label {
          top: 0.5rem;
          transform: translateY(0);
          font-size: 0.7rem;
          color: #a78bfa;
          font-weight: 500;
        }

        /* ── Password toggle ── */
        .demo-pw-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          font-size: 1.1rem;
          padding: 0.25rem;
          transition: color 0.2s;
        }
        .demo-pw-toggle:hover {
          color: #a78bfa;
        }

        /* ── Remember / Forgot ── */
        .demo-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          font-size: 0.8rem;
        }

        .demo-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          cursor: pointer;
          user-select: none;
        }

        .demo-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #7c3aed;
          cursor: pointer;
        }

        .demo-forgot {
          color: #a78bfa;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .demo-forgot:hover {
          color: #c4b5fd;
        }

        /* ── Submit button ── */
        .demo-submit {
          width: 100%;
          padding: 0.875rem;
          border: none;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .demo-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.35);
        }

        .demo-submit:active:not(:disabled) {
          transform: translateY(0) scale(0.98);
        }

        .demo-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* shimmer */
        .demo-submit::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: demo-shimmer 3s infinite;
        }
        @keyframes demo-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* ── Spinner ── */
        .demo-spinner {
          display: inline-block;
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: demo-spin 0.6s linear infinite;
          vertical-align: middle;
          margin-right: 0.5rem;
        }
        @keyframes demo-spin {
          to { transform: rotate(360deg); }
        }

        /* ── Divider ── */
        .demo-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
          color: #475569;
          font-size: 0.75rem;
        }
        .demo-divider::before,
        .demo-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(100, 116, 139, 0.2);
        }

        /* ── Social buttons ── */
        .demo-social-row {
          display: flex;
          gap: 0.75rem;
        }
        .demo-social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 0.75rem;
          background: rgba(30, 35, 60, 0.5);
          border: 1px solid rgba(100, 116, 139, 0.15);
          color: #cbd5e1;
          font-size: 0.8rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }
        .demo-social-btn:hover {
          border-color: rgba(124, 58, 237, 0.3);
          background: rgba(40, 45, 70, 0.6);
          transform: translateY(-1px);
        }

        /* ── Footer link ── */
        .demo-footer-text {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.8rem;
          color: #64748b;
        }
        .demo-footer-text a {
          color: #a78bfa;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }
        .demo-footer-text a:hover {
          color: #c4b5fd;
        }
      `}</style>

      <div className="demo-login-page">
        {/* Background elements */}
        <div className="demo-bg-orb demo-bg-orb-1" />
        <div className="demo-bg-orb demo-bg-orb-2" />
        <div className="demo-bg-orb demo-bg-orb-3" />
        <div className="demo-grid-bg" />

        {/* Login card */}
        <div className="demo-login-card">
          <div className="demo-login-card-inner">
            {/* Logo */}
            <div className="demo-logo">🔐</div>

            <h1 className="demo-title">ยินดีต้อนรับกลับ</h1>
            <p className="demo-subtitle">
              เข้าสู่ระบบเพื่อจัดการบัญชีของคุณ
            </p>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="demo-input-group">
                <input
                  id="demo-email"
                  type="email"
                  className="demo-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="demo-email" className="demo-float-label">
                  อีเมล
                </label>
              </div>

              {/* Password */}
              <div className="demo-input-group">
                <input
                  id="demo-password"
                  type={showPassword ? 'text' : 'password'}
                  className="demo-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="demo-password" className="demo-float-label">
                  รหัสผ่าน
                </label>
                <button
                  type="button"
                  className="demo-pw-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>

              {/* Remember / Forgot */}
              <div className="demo-row">
                <label className="demo-checkbox-label">
                  <input
                    type="checkbox"
                    className="demo-checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  จดจำฉัน
                </label>
                <a href="#" className="demo-forgot">
                  ลืมรหัสผ่าน?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="demo-submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="demo-spinner" />
                    กำลังเข้าสู่ระบบ...
                  </>
                ) : (
                  'เข้าสู่ระบบ'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="demo-divider">หรือเข้าสู่ระบบด้วย</div>

            {/* Social login */}
            <div className="demo-social-row">
              <button type="button" className="demo-social-btn">
                <span>🔵</span> Google
              </button>
              <button type="button" className="demo-social-btn">
                <span>⚫</span> GitHub
              </button>
            </div>

            {/* Sign up link */}
            <p className="demo-footer-text">
              ยังไม่มีบัญชี?{' '}
              <a href="#">สมัครสมาชิก</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
