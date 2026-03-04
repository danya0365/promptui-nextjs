'use client';

import React, { useEffect, useState } from 'react';

// Global Event Platform Interface - Gemini 3.1 Pro Implementation
// A web platform that visually adapts to time and simulates global data

export const GlobalEventPlatformDemoGemini: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    // Update time every second for the lived clock
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted || !currentTime) return null;

  // Derive logical time of day bounds (Sunrise: 6, Day: 8-16, Sunset: 17-18, Night: 19-5)
  const hour = currentTime.getHours();
  // Using hour for logic, but let's artificially speed up the visual representation
  // for showcase purposes if we wanted to, but we'll stick to real time for authenticity
  
  let timeMode: 'day' | 'night' | 'sunrise' | 'sunset' = 'day';
  if (hour >= 19 || hour < 5) timeMode = 'night';
  else if (hour >= 5 && hour < 7) timeMode = 'sunrise';
  else if (hour >= 17 && hour < 19) timeMode = 'sunset';

  const formatTime = (date: Date, timeZone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZone,
      hour12: false
    }).format(date);
  };

  return (
    <div className={`global-container mode-${timeMode}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Syncopate:wght@400;700&display=swap');

        :root {
          /* Default to Day */
          --sky-top: #4da0b0;
          --sky-bottom: #d39d38;
          --ui-glow: rgba(255, 255, 255, 0.2);
          --text-primary: #fff;
          --text-muted: rgba(255, 255, 255, 0.7);
          --panel-bg: rgba(255, 255, 255, 0.1);
          --accent: #FF9D00;
        }

        .mode-night {
          --sky-top: #0a0a1a;
          --sky-bottom: #1a1a3a;
          --ui-glow: rgba(100, 200, 255, 0.4);
          --text-primary: #e0f0ff;
          --text-muted: rgba(200, 230, 255, 0.5);
          --panel-bg: rgba(10, 20, 50, 0.4);
          --accent: #00E5FF;
        }

        .mode-sunrise {
          --sky-top: #1a2a6c;
          --sky-bottom: #fdbb2d;
          --ui-glow: rgba(253, 187, 45, 0.4);
          --accent: #FF512F;
        }

        .mode-sunset {
          --sky-top: #355C7D;
          --sky-bottom: #C06C84;
          --ui-glow: rgba(192, 108, 132, 0.4);
          --accent: #F67280;
        }

        .global-container {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(to bottom, var(--sky-top), var(--sky-bottom));
          color: var(--text-primary);
          font-family: 'Space Grotesk', sans-serif;
          overflow: hidden;
          transition: background 2s ease;
        }

        /* --- Ambient Particles --- */
        .ambient-particles {
          position: absolute; inset: 0; pointer-events: none; overflow: hidden;
        }
        .particle {
          position: absolute;
          width: 2px; height: 10px;
          background: var(--accent);
          opacity: 0.5;
          filter: blur(1px);
          animation: drop linear infinite;
        }
        @keyframes drop {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        /* --- Map Simulation --- */
        .world-map-bg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120vw; height: 100vh;
          background-image: radial-gradient(circle at center, transparent 40%, var(--sky-bottom) 100%), 
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.3;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        
        .mode-night .world-map-bg {
          opacity: 0.6;
          /* Add subtle glowing dots simulating cities at night */
          background-image: radial-gradient(2px 2px at 20% 40%, rgba(255,255,255,0.8) 100%, transparent),
                            radial-gradient(2px 2px at 70% 30%, rgba(255,255,255,0.8) 100%, transparent),
                            radial-gradient(2px 2px at 80% 60%, rgba(255,255,255,0.8) 100%, transparent),
                            radial-gradient(circle at center, transparent 40%, var(--sky-bottom) 100%),
                            url("data:image/svg+xml,... (grid svgs)"); /* same grid as above */
        }

        /* --- Header & Clock --- */
        header {
          padding: 2rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
          z-index: 10;
        }

        .brand h1 {
          font-family: 'Syncopate', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 4px;
          margin: 0;
          text-transform: uppercase;
          text-shadow: 0 0 10px var(--ui-glow);
        }

        .local-time {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 2px;
          font-variant-numeric: tabular-nums;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .time-badge {
          font-size: 0.7rem;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          background: var(--accent);
          color: #000;
          font-weight: 700;
          text-transform: uppercase;
        }

        /* --- Main Content Grid --- */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 350px 1fr 350px;
          gap: 2rem;
          padding: 4rem;
          position: relative;
          z-index: 10;
        }

        .panel {
          background: var(--panel-bg);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2), inset 0 0 20px var(--ui-glow);
          transition: all 0.3s ease;
        }

        .panel-header {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 0.5rem;
        }

        /* --- Global Clocks List --- */
        .global-clocks {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .clock-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .clock-city { font-weight: 500; font-size: 1.1rem; }
        .clock-time { font-family: monospace; font-size: 1.2rem; color: var(--accent); }

        /* --- Center Hero --- */
        .center-hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 500px;
        }
        .hero-title {
          font-family: 'Syncopate', sans-serif;
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
          text-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .hero-sub {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 500px;
          line-height: 1.6;
        }
        
        .pulse-ring {
          position: absolute;
          width: 300px; height: 300px;
          border: 1px solid var(--accent);
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          pointer-events: none;
        }
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; border-width: 2px; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; border-width: 0; }
        }

        /* --- Lock/Unlock Logic --- */
        .locked-content {
          position: relative;
          filter: grayscale(100%);
          opacity: 0.5;
          pointer-events: none;
        }
        .locked-overlay {
          position: absolute; inset: 0;
          display: flex; justify-content: center; align-items: center;
          backdrop-filter: blur(5px);
          font-weight: bold; letter-spacing: 2px;
          color: #fff; background: rgba(0,0,0,0.5);
          border-radius: 12px;
          z-index: 20;
        }

        @media (max-width: 1200px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Background Atmosphere */}
      <div className="world-map-bg"></div>
      
      {/* Dynamic Data Particles (representing active connections) */}
      <div className="ambient-particles">
        {Array.from({length: 20}).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}></div>
        ))}
      </div>

      {/* Header */}
      <header>
        <div className="brand">
          <h1>Pangea Net</h1>
        </div>
        <div className="local-time">
          <span className="time-badge">{timeMode} PROTOCOL</span>
          {formatTime(currentTime, Intl.DateTimeFormat().resolvedOptions().timeZone)}
        </div>
      </header>

      {/* Main Grid */}
      <main className="dashboard-grid">
        
        {/* Left Column: World Clocks */}
        <div className="panel">
          <div className="panel-header">SYNCHRONIZATION ZONES</div>
          <div className="global-clocks">
            <div className="clock-item">
              <span className="clock-city">Tokyo, JP</span>
              <span className="clock-time">{formatTime(currentTime, 'Asia/Tokyo')}</span>
            </div>
            <div className="clock-item">
              <span className="clock-city">London, UK</span>
              <span className="clock-time">{formatTime(currentTime, 'Europe/London')}</span>
            </div>
            <div className="clock-item">
              <span className="clock-city">New York, US</span>
              <span className="clock-time">{formatTime(currentTime, 'America/New_York')}</span>
            </div>
            <div className="clock-item">
              <span className="clock-city">Sydney, AU</span>
              <span className="clock-time">{formatTime(currentTime, 'Australia/Sydney')}</span>
            </div>
          </div>
        </div>

        {/* Center Column: Hero Insight */}
        <div className="center-hero">
          <div className="pulse-ring"></div>
          <h2 className="hero-title">GLOBAL<br/>AWARENESS</h2>
          <p className="hero-sub">Systems are currently operating in {timeMode.toUpperCase()} mode. Network traffic is optimized for local regional spikes.</p>
        </div>

        {/* Right Column: Dynamic Data (Locked/Unlocked based on time) */}
        <div className={`panel ${timeMode === 'night' ? 'locked-content' : ''}`}>
          {timeMode === 'night' && (
            <div className="locked-overlay">OFFLINE : REGIONAL SLEEP CYCLE</div>
          )}
          <div className="panel-header">DATA STREAMS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
               <div style={{ height: '100%', width: '75%', background: 'var(--accent)', transition: 'width 2s' }}></div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sector 7 Activity: High Volume</div>
            
            <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', marginTop: '1rem' }}>
               <div style={{ height: '100%', width: '40%', background: 'var(--accent)', opacity: 0.6, transition: 'width 2s' }}></div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Latent Capacity: Standby</div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default GlobalEventPlatformDemoGemini;
