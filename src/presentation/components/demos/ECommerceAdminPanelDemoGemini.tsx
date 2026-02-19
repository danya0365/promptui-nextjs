/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  E-COMMERCE ADMIN PANEL (Gemini Version)                  ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Tables + Status Badges
 */

'use client';

export function ECommerceAdminPanelDemoGemini() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap');

        .admin-dash {
          --a-bg: #f4f6f8;
          --a-card: #ffffff;
          --a-primary: #6366f1;
          --a-text: #212b36;
          --a-sub: #637381;
          
          font-family: 'Public Sans', sans-serif;
          background: var(--a-bg);
          color: var(--a-text);
          min-height: 100vh;
          padding: 24px;
        }

        .admin-h1 { font-size: 24px; font-weight: 700; margin-bottom: 24px; }

        /* KPI Cards */
        .kpi-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 24px;
        }
        .kpi-card {
          background: var(--a-card); border-radius: 16px; padding: 24px;
          box-shadow: 0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12);
        }
        .kpi-label { font-size: 14px; font-weight: 600; color: var(--a-sub); margin-bottom: 8px; }
        .kpi-val { font-size: 32px; font-weight: 700; margin-bottom: 16px; }
        .kpi-trend { font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
        .trend-up { color: #229a16; }
        .trend-down { color: #b72136; }

        /* Content Grid */
        .content-grid {
          display: grid; grid-template-columns: 2fr 1fr; gap: 24px;
        }
        
        .admin-panel {
          background: var(--a-card); border-radius: 16px; padding: 24px;
          box-shadow: 0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12);
        }
        .panel-title { font-size: 18px; font-weight: 700; margin-bottom: 24px; }

        /* Table */
        .admin-table { width: 100%; border-collapse: collapse; }
        .admin-table th { text-align: left; padding: 16px; color: var(--a-sub); font-size: 14px; background: #f4f6f8; }
        .admin-table td { padding: 16px; border-bottom: 1px solid #f1f3f5; font-size: 14px; font-weight: 500; }
        .admin-table tr:last-child td { border-bottom: none; }
        
        .status-badge {
          padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 700; display: inline-block;
        }
        .status-completed { background: rgba(34, 154, 22, 0.16); color: #118d57; }
        .status-pending { background: rgba(255, 171, 0, 0.16); color: #b78103; }
        .status-cancelled { background: rgba(183, 33, 54, 0.16); color: #b72136; }

        /* Chart Placeholder */
        .chart-placeholder {
          height: 300px;
          display: flex; align-items: flex-end; justify-content: space-between; gap: 8px; padding-top: 20px;
        }
        .bar { background: var(--a-primary); opacity: 0.8; border-radius: 4px 4px 0 0; flex: 1; }
        .bar-alt { background: #36b37e; opacity: 0.8; border-radius: 4px 4px 0 0; flex: 1; }

        @media(max-width: 1024px) {
          .kpi-grid { grid-template-columns: 1fr 1fr; }
          .content-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      
      <div className="admin-dash">
        <h1 className="admin-h1">Dashboard Overview</h1>

        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Total Sales</div>
            <div className="kpi-val">$714,000</div>
            <div className="kpi-trend trend-up">↑ 2.6%</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Total Visits</div>
            <div className="kpi-val">1.2m</div>
            <div className="kpi-trend trend-down">↓ 0.1%</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Total Orders</div>
            <div className="kpi-val">17,233</div>
            <div className="kpi-trend trend-up">↑ 5.1%</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Sold Items</div>
            <div className="kpi-val">34,121</div>
            <div className="kpi-trend trend-up">↑ 1.2%</div>
          </div>
        </div>

        <div className="content-grid">
          <div className="admin-panel">
            <div className="panel-title">Revenue Updates</div>
             <div className="chart-placeholder">
               {[40, 70, 50, 90, 60, 80, 75, 45, 65, 85, 95, 100].map((h, i) => (
                 <div key={i} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end', flex: 1, gap: '4px', margin: '0 4px' }}>
                   <div className="bar" style={{ height: `${h * 0.6}%` }}></div>
                   <div className="bar-alt" style={{ height: `${h * 0.3}%` }}></div>
                 </div>
               ))}
             </div>
          </div>

          <div className="admin-panel">
            <div className="panel-title">Recent Orders</div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#4256</td>
                  <td>Alex T.</td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                </tr>
                <tr>
                  <td>#4255</td>
                  <td>Sarah M.</td>
                  <td><span className="status-badge status-pending">Pending</span></td>
                </tr>
                <tr>
                  <td>#4254</td>
                  <td>Michael B.</td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                </tr>
                <tr>
                  <td>#4253</td>
                  <td>Emily R.</td>
                  <td><span className="status-badge status-cancelled">Cancelled</span></td>
                </tr>
                <tr>
                  <td>#4252</td>
                  <td>David K.</td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
