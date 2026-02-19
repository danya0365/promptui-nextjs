/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  CALENDAR APP (Gemini Version)                            ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Grid Layout + Hover Effects
 */

'use client';

export function CalendarAppDemoGemini() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1); // Simple 1-35 for demo grid

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

        .cal-app {
          --c-bg: #ffffff;
          --c-gray: #f8f9fa;
          --c-border: #e9ecef;
          --c-text: #212529;
          --c-prime: #4da6ff;
          
          font-family: 'DM Sans', sans-serif;
          background: #eef2f5;
          min-height: 100vh;
          padding: 40px;
          display: flex; justify-content: center;
        }

        .cal-container {
          background: var(--c-bg);
          width: 100%; max-width: 1100px;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
          display: flex;
          overflow: hidden;
        }

        /* Sidebar */
        .cal-sidebar {
          width: 280px; background: #fdfdfe; border-right: 1px solid var(--c-border);
          padding: 30px;
          display: flex; flex-direction: column;
        }
        .cal-create-btn {
          width: 100%; padding: 14px; background: #333; color: white; border-radius: 12px;
          font-weight: 700; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-bottom: 40px; box-shadow: 0 8px 16px rgba(0,0,0,0.1); transition: 0.3s;
        }
        .cal-create-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 20px rgba(0,0,0,0.15); }

        .mini-cal { margin-bottom: 40px; }
        .mini-cal-header { display: flex; justify-content: space-between; margin-bottom: 20px; font-weight: 700; }
        .mini-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; text-align: center; }
        .mini-day { font-size: 11px; color: #adb5bd; }
        .mini-date { 
          width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; 
          border-radius: 50%; font-size: 13px; cursor: pointer; 
        }
        .mini-date:hover { background: #f1f3f5; }
        .mini-date.active { background: #333; color: white; }

        .cal-filters h4 { font-size: 14px; color: #adb5bd; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; }
        .filter-item { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 14px; }
        .checkbox { width: 18px; height: 18px; border-radius: 4px; border: 2px solid #ddd; }
        .checkbox.c-work { background: #4dabf7; border-color: #4dabf7; }
        .checkbox.c-personal { background: #ff6b6b; border-color: #ff6b6b; }

        /* Main Calendar */
        .cal-main { flex: 1; display: flex; flex-direction: column; }
        
        .cal-header {
          padding: 24px 30px; border-bottom: 1px solid var(--c-border);
          display: flex; justify-content: space-between; align-items: center;
        }
        .cal-title { font-size: 24px; font-weight: 700; }
        .cal-nav { display: flex; gap: 10px; }
        .cal-nav-btn { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--c-border); background: white; cursor: pointer; }
        .cal-view-toggle { background: #f1f3f5; padding: 4px; border-radius: 8px; display: flex; }
        .view-btn { padding: 6px 16px; border-radius: 6px; font-size: 14px; border: none; text-align: center; cursor: pointer; background: transparent; }
        .view-btn.active { background: white; shadow: 0 2px 5px rgba(0,0,0,0.05); font-weight: 600; }

        .cal-grid {
          flex: 1; padding: 30px; 
          display: grid; grid-template-columns: repeat(7, 1fr); grid-auto-rows: 1fr;
          gap: 1px; background: var(--c-border); /* gap fix for borders */
          border: 1px solid var(--c-border);
        }
        .cal-day-cell {
          background: white; min-height: 120px; padding: 10px; position: relative;
          transition: 0.2s;
        }
        .cal-day-cell:hover { background: #fcfcfc; }
        
        .cd-head { font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #495057; display: flex; justify-content: flex-end; }
        .cd-head span { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; }
        .cd-head.today span { background: #339af0; color: white; border-radius: 50%; }

        .cal-event {
          padding: 6px 10px; border-radius: 6px; font-size: 12px; margin-bottom: 4px;
          cursor: pointer; border-left: 3px solid; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          transition: 0.2s;
        }
        .cal-event:hover { transform: translateY(-1px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        
        .evt-blue { background: #e7f5ff; color: #1c7ed6; border-color: #1c7ed6; }
        .evt-red { background: #fff5f5; color: #fa5252; border-color: #fa5252; }
        .evt-green { background: #ebfbee; color: #2f9e44; border-color: #2f9e44; }

      `}</style>
      
      <div className="cal-app">
        <div className="cal-container">
          <aside className="cal-sidebar">
            <button className="cal-create-btn">
              <span>+</span> Create Event
            </button>

            <div className="mini-cal">
              <div className="mini-cal-header">
                <span>June 2025</span>
                <span>{'< >'}</span>
              </div>
              <div className="mini-grid">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="mini-day">{d}</div>)}
                {Array.from({length: 31}, (_, i) => (
                  <div key={i} className={`mini-date ${i === 14 ? 'active' : ''}`}>{i+1}</div>
                ))}
              </div>
            </div>

            <div className="cal-filters">
              <h4>My Calendars</h4>
              <div className="filter-item"><div className="checkbox c-work"></div> Work</div>
              <div className="filter-item"><div className="checkbox c-personal"></div> Personal</div>
              <div className="filter-item"><div className="checkbox" style={{borderColor:'#444'}}></div> Birthdays</div>
            </div>
          </aside>

          <section className="cal-main">
            <header className="cal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <h2 className="cal-title">June 2025</h2>
                <div className="cal-nav">
                  <button className="cal-nav-btn">{'<'}</button>
                  <button className="cal-nav-btn">{'>'}</button>
                </div>
              </div>
              <div className="cal-view-toggle">
                <button className="view-btn active">Month</button>
                <button className="view-btn">Week</button>
                <button className="view-btn">Day</button>
              </div>
            </header>

            <style>{`
              .grid-headers { display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; border-bottom: 1px solid #e9ecef; }
              .gh-item { padding: 10px; font-size: 14px; font-weight: 600; color: #868e96; background: white; }
            `}</style>
            
            <div className="grid-headers">
              {days.map(d => <div key={d} className="gh-item">{d}</div>)}
            </div>

            <div className="cal-grid">
              {dates.map((d, i) => (
                <div key={i} className="cal-day-cell">
                  {d <= 30 && (
                     <>
                      <div className={`cd-head ${d === 15 ? 'today' : ''}`}>
                         <span>{d}</span>
                      </div>
                      
                      {d === 4 && <div className="cal-event evt-blue">Team Meeting (10:00)</div>}
                      {d === 4 && <div className="cal-event evt-green">Lunch with Client</div>}
                      
                      {d === 12 && <div className="cal-event evt-red">Project Deadline 🚀</div>}
                      
                      {d === 15 && <div className="cal-event evt-blue">Design Review</div>}
                      
                      {d === 24 && <div className="cal-event evt-green">Dentist Appointment</div>}
                     </>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
