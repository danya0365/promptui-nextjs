/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  HEALTH & FITNESS TRACKER (Gemini Version)                ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Radial Progress + Pulse Animation
 */

'use client';

export function HealthFitnessTrackerDemoGemini() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        .fit-dash {
          --h-bg: #111827;
          --h-card: #1f2937;
          --h-accent: #10b981;
          --h-blue: #3b82f6;
          --h-text: #f3f4f6;
          
          font-family: 'Nunito', sans-serif;
          background: var(--h-bg);
          color: var(--h-text);
          min-height: 100vh;
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .fit-card {
          background: var(--h-card); border-radius: 24px; padding: 24px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .fit-h1 { grid-column: 1 / -1; font-size: 28px; font-weight: 800; margin-bottom: 10px; }

        /* Steps Ring */
        .steps-ring-container {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .steps-svg { transform: rotate(-90deg); width: 200px; height: 200px; }
        .steps-circle-bg { fill: none; stroke: #374151; stroke-width: 10; }
        .steps-circle-fg { 
          fill: none; stroke: var(--h-accent); stroke-width: 10; 
          stroke-dasharray: 565; stroke-dashoffset: 100; /* 565 * (1 - 0.82) ≈ 100 */
          stroke-linecap: round; transition: 1s ease-out;
        }
        .steps-content { position: absolute; text-align: center; }
        .steps-num { font-size: 36px; font-weight: 800; color: white; display: block; }
        .steps-label { font-size: 14px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; }

        /* Heart Rate */
        .heart-rate-box {
          display: flex; align-items: center;
        }
        .hr-icon { 
          font-size: 40px; margin-right: 20px; color: #ef4444; 
          animation: heartBeat 1s infinite alternate; 
        }
        @keyframes heartBeat { to { transform: scale(1.1); } }
        
        .hr-val { font-size: 48px; font-weight: 800; line-height: 1; }
        .hr-unit { font-size: 16px; color: #9ca3af; font-weight: 600; margin-left: 4px; }
        .hr-chart { 
          height: 60px; display: flex; align-items: flex-end; gap: 4px; margin-top: 20px; 
        }
        .hr-bar { flex: 1; background: #ef4444; opacity: 0.3; border-radius: 2px; }
        .hr-bar.active { opacity: 1; height: 80%; }

        /* Sleep */
        .sleep-bars {
          display: flex; height: 20px; border-radius: 10px; overflow: hidden; margin: 20px 0;
        }
        .sleep-segment { height: 100%; }
        .s-deep { background: #4f46e5; width: 30%; }
        .s-light { background: #818cf8; width: 50%; }
        .s-rem { background: #c7d2fe; width: 20%; }
        
        .sleep-legend { display: flex; justify-content: space-between; font-size: 12px; color: #9ca3af; }
        .legend-item span { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 5px; }

        /* Weekly Activity */
        .activity-grid {
          display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; text-align: center;
        }
        .day-label { font-size: 12px; color: #9ca3af; margin-bottom: 8px; }
        .activity-bar {
          width: 100%; border-radius: 20px; background: #374151; height: 100px;
          display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden;
        }
        .activity-fill { width: 100%; background: var(--h-blue); transition: 0.5s; }

        /* Water */
        .water-glass {
          width: 60px; height: 100px; border: 4px solid #fff; border-top: none; border-radius: 0 0 20px 20px;
          margin: 0 auto; position: relative; overflow: hidden;
        }
        .water-fill {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 70%;
          background: #3b82f6; opacity: 0.8;
          animation: wave 2s infinite linear;
        }
        @keyframes wave { 0% { transform: translateY(2px); } 50% { transform: translateY(-2px); } 100% { transform: translateY(2px); } }

      `}</style>
      
      <div className="fit-dash">
        <h1 className="fit-h1">Fitness Tracker</h1>
        
        {/* Steps */}
        <div className="fit-card steps-ring-container">
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg className="steps-svg" viewBox="0 0 220 220">
              <circle className="steps-circle-bg" cx="110" cy="110" r="90" />
              <circle className="steps-circle-fg" cx="110" cy="110" r="90" />
            </svg>
            <div className="steps-content">
              <span className="steps-num">8,245</span>
              <span className="steps-label">Steps</span>
            </div>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>82%</span> of daily goal
          </div>
        </div>

        {/* Heart Rate */}
        <div className="fit-card">
          <h3 style={{ marginBottom: '20px', color: '#9ca3af' }}>Heart Rate</h3>
          <div className="heart-rate-box">
            <div className="hr-icon">❤️</div>
            <div className="hr-val">78 <span className="hr-unit">BPM</span></div>
          </div>
          <div className="hr-chart">
             {[40, 50, 60, 45, 70, 80, 75, 60, 55, 65, 70, 78].map((h, i) => (
               <div key={i} className={`hr-bar ${i === 11 ? 'active' : ''}`} style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </div>

        {/* Sleep Analysis */}
        <div className="fit-card">
          <h3 style={{ marginBottom: '20px', color: '#9ca3af' }}>Sleep Quality</h3>
          <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px' }}>7h 12m</div>
          <div className="sleep-bars">
            <div className="sleep-segment s-deep"></div>
            <div className="sleep-segment s-light"></div>
            <div className="sleep-segment s-rem"></div>
          </div>
          <div className="sleep-legend">
            <div className="legend-item"><span style={{ background: '#4f46e5' }}></span>Deep (30%)</div>
            <div className="legend-item"><span style={{ background: '#818cf8' }}></span>Light (50%)</div>
            <div className="legend-item"><span style={{ background: '#c7d2fe' }}></span>REM (20%)</div>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="fit-card" style={{ gridColumn: 'span 2' }}>
          <h3 style={{ marginBottom: '20px', color: '#9ca3af' }}>Weekly Activity</h3>
          <div className="activity-grid">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i}>
                <div className="activity-bar">
                  <div className="activity-fill" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                </div>
                <div className="day-label" style={{ marginTop: '8px' }}>{day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hydration */}
        <div className="fit-card" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px', color: '#9ca3af' }}>Hydration</h3>
          <div className="water-glass">
            <div className="water-fill"></div>
          </div>
          <div style={{ marginTop: '15px', fontWeight: 'bold' }}>1,400 ml</div>
          <div style={{ color: '#9ca3af', fontSize: '12px' }}>Target: 2,000 ml</div>
        </div>
      </div>
    </>
  );
}
