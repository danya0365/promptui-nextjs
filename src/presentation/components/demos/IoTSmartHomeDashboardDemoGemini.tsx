/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  IOT SMART HOME DASHBOARD (Gemini Version)                ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Sliders + Toggles
 */

'use client';

import { useState } from 'react';

export function IoTSmartHomeDashboardDemoGemini() {
  const [lights, setLights] = useState(true);
  const [temp, setTemp] = useState(24);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');

        .iot-dash {
          --i-bg: #18181b;
          --i-card: #27272a;
          --i-accent: #f59e0b;
          --i-text: #e4e4e7;
          
          font-family: 'Lexend', sans-serif;
          background: var(--i-bg);
          color: var(--i-text);
          min-height: 100vh;
          padding: 30px;
        }

        .iot-h1 { font-size: 28px; font-weight: 600; margin-bottom: 30px; color: white; }

        .iot-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;
        }

        .iot-card {
          background: var(--i-card); border-radius: 20px; padding: 24px;
          display: flex; flex-direction: column; justify-content: space-between;
          min-height: 180px; transition: 0.3s;
        }
        .iot-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

        .iot-icon {
          width: 48px; height: 48px; border-radius: 12px; background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px;
        }
        .iot-icon.active { background: var(--i-accent); color: #000; }

        .iot-label { font-size: 16px; font-weight: 600; }
        .iot-status { font-size: 13px; color: #a1a1aa; margin-top: 4px; }

        /* Controls */
        .iot-toggle {
          width: 50px; height: 30px; background: #52525b; border-radius: 15px;
          position: relative; cursor: pointer; transition: 0.3s; align-self: flex-end;
        }
        .iot-toggle.active { background: var(--i-accent); }
        .iot-toggle::after {
          content: ''; position: absolute; top: 3px; left: 3px; width: 24px; height: 24px;
          background: white; border-radius: 50%; transition: 0.3s;
        }
        .iot-toggle.active::after { left: 23px; }

        .iot-slider {
          -webkit-appearance: none; width: 100%; height: 6px; background: #52525b; border-radius: 3px; outline: none; margin-top: 20px;
        }
        .iot-slider::-webkit-slider-thumb {
          -webkit-appearance: none; width: 20px; height: 20px; background: white; border-radius: 50%; cursor: pointer;
        }

        /* Temp Dial */
        .temp-dial {
          width: 150px; height: 150px; border-radius: 50%; border: 8px solid #3f3f46;
          display: flex; align-items: center; justify-content: center; margin: 0 auto;
          position: relative;
        }
        .temp-val { font-size: 42px; font-weight: 700; }
        .temp-unit { font-size: 16px; color: #a1a1aa; vertical-align: top; }
        .temp-indicator {
           position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%;
           border: 8px solid transparent; border-top-color: var(--i-accent); border-right-color: var(--i-accent);
           transform: rotate(45deg);
        }

        /* Scenes */
        .scene-container { display: flex; gap: 12px; margin-top: 24px; overflow-x: auto; padding-bottom: 10px; }
        .scene-btn {
          flex: 1; padding: 16px; background: #3f3f46; border-radius: 16px; text-align: center;
          cursor: pointer; transition: 0.2s; min-width: 100px;
        }
        .scene-btn:hover { background: #52525b; }
        .scene-icon { font-size: 24px; margin-bottom: 8px; display: block; }
        .scene-name { font-size: 13px; font-weight: 500; }

      `}</style>
      
      <div className="iot-dash">
        <h1 className="iot-h1">My Home</h1>

        <div className="iot-grid">
          {/* Light Control */}
          <div className="iot-card">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className={`iot-icon ${lights ? 'active' : ''}`}>💡</div>
              <div className={`iot-toggle ${lights ? 'active' : ''}`} onClick={() => setLights(!lights)}></div>
            </div>
            <div>
              <div className="iot-label">Living Room Lights</div>
              <div className="iot-status">{lights ? 'On • 80% Brightness' : 'Off'}</div>
              {lights && <input type="range" className="iot-slider" defaultValue="80" />}
            </div>
          </div>

          {/* Thermostat */}
          <div className="iot-card" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className="temp-dial">
              <div className="temp-indicator" style={{ transform: `rotate(${temp * 5}deg)` }}></div>
              <div>
                <span className="temp-val">{temp}</span>
                <span className="temp-unit">°C</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <button onClick={() => setTemp(temp-1)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'none', background: '#3f3f46', color: 'white' }}>-</button>
              <div className="iot-label">Thermostat</div>
              <button onClick={() => setTemp(temp+1)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'none', background: '#3f3f46', color: 'white' }}>+</button>
            </div>
          </div>

          {/* Security */}
          <div className="iot-card">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="iot-icon" style={{ background: '#ef4444', color: 'white' }}>🛡️</div>
              <div className="iot-status" style={{ color: '#ef4444', fontWeight: 'bold' }}>ARMED</div>
            </div>
            <div>
              <div className="iot-label">Front Door Camera</div>
              <div className="iot-status">Recording • Motion Detected</div>
              <div style={{ marginTop: '15px', height: '8px', background: '#3f3f46', borderRadius: '4px', overflow: 'hidden' }}>
                 <div style={{ width: '30%', height: '100%', background: '#ef4444', animation: 'pulse 1s infinite' }}></div>
              </div>
            </div>
          </div>

          {/* Weather */}
          <div className="iot-card" style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '48px' }}>22°</div>
                <div style={{ fontSize: '16px', fontWeight: '500' }}>Cloudy</div>
              </div>
              <div style={{ fontSize: '48px' }}>☁️</div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', opacity: 0.9 }}>
              <div>H: 24° L: 18°</div>
              <div>Humidity: 45%</div>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: '40px', marginBottom: '20px', fontSize: '20px', fontWeight: '600' }}>Scenes</h3>
        <div className="scene-container">
          <div className="scene-btn">
            <span className="scene-icon">☀️</span>
            <span className="scene-name">Morning</span>
          </div>
          <div className="scene-btn">
            <span className="scene-icon">🏠</span>
            <span className="scene-name">Home</span>
          </div>
          <div className="scene-btn">
            <span className="scene-icon">🏃</span>
            <span className="scene-name">Leaving</span>
          </div>
          <div className="scene-btn">
            <span className="scene-icon">🍿</span>
            <span className="scene-name">Movie</span>
          </div>
          <div className="scene-btn">
            <span className="scene-icon">🌙</span>
            <span className="scene-name">Sleep</span>
          </div>
        </div>
      </div>
    </>
  );
}
