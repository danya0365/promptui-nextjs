/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  MODERN ANALYTICS DASHBOARD (Gemini Version)              ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + SVG Charts + Interactive State
 */

'use client';

import { useState } from 'react';

export function ModernDashboardDemoGemini() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  // Sorting state (mock)
  const [sortCol, setSortCol] = useState('date');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

  const handleSort = (col: string) => {
    if (sortCol === col) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('desc');
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (notificationCount > 0) setNotificationCount(0);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        /* ── Layout & Variables ── */
        .gemini-dashboard {
          --g-bg-main: #0b1121;
          --g-bg-card: #151e32;
          --g-text-main: #e2e8f0;
          --g-text-mute: #94a3b8;
          --g-accent: #6366f1;
          --g-accent-glow: rgba(99, 102, 241, 0.3);
          --g-success: #10b981;
          --g-border: rgba(255, 255, 255, 0.08);
          
          font-family: 'Outfit', sans-serif;
          background-color: var(--g-bg-main);
          color: var(--g-text-main);
          min-height: 100vh;
          display: flex;
          overflow: hidden;
        }

        /* ── Sidebar ── */
        .gemini-sidebar {
          width: 260px;
          background-color: var(--g-bg-card);
          border-right: 1px solid var(--g-border);
          display: flex;
          flex-direction: column;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 20;
          flex-shrink: 0;
        }
        .gemini-sidebar.collapsed {
          width: 80px;
        }

        .gemini-logo-box {
          height: 70px;
          display: flex;
          align-items: center;
          padding: 0 24px;
          border-bottom: 1px solid var(--g-border);
          white-space: nowrap;
          overflow: hidden;
        }
        .gemini-logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          border-radius: 8px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
        }
        .gemini-logo-text {
          font-weight: 700;
          font-size: 18px;
          opacity: 1;
          transition: opacity 0.2s;
        }
        .gemini-sidebar.collapsed .gemini-logo-text {
          opacity: 0;
          width: 0;
        }

        .gemini-nav {
          padding: 24px 16px;
          flex: 1;
        }
        .gemini-nav-item {
          display: flex;
          align-items: center;
          padding: 12px;
          margin-bottom: 4px;
          border-radius: 12px;
          color: var(--g-text-mute);
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          overflow: hidden;
        }
        .gemini-nav-item:hover {
          background: rgba(255, 255, 255, 0.03);
          color: white;
        }
        .gemini-nav-item.active {
          background: rgba(99, 102, 241, 0.1);
          color: var(--g-accent);
        }
        .gemini-nav-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        /* ── Main Content ── */
        .gemini-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        /* ── Topbar ── */
        .gemini-topbar {
          height: 70px;
          border-bottom: 1px solid var(--g-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          background: rgba(11, 17, 33, 0.8);
          backdrop-filter: blur(8px);
          z-index: 10;
        }

        .gemini-top-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .gemini-top-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .gemini-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--g-text-mute);
          position: relative;
          transition: all 0.2s;
        }
        .gemini-icon-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }
        .gemini-icon-btn.active {
          background: rgba(99, 102, 241, 0.1);
          color: var(--g-accent);
        }

        .gemini-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          border: 2px solid var(--g-bg-card);
        }
        /* Notification Dropdown */
        .gemini-dropdown {
          position: absolute;
          top: 60px;
          right: 0;
          width: 280px;
          background: var(--g-bg-card);
          border: 1px solid var(--g-border);
          border-radius: 12px;
          box-shadow: 0 10px 30px -5px rgba(0,0,0,0.5);
          padding: 12px;
          z-index: 100;
          transform-origin: top right;
          animation: scaleIn 0.2s ease-out;
        }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .gemini-notif-item {
          padding: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 13px;
          color: var(--g-text-mute);
        }
        .gemini-notif-item:last-child { border-bottom: none; }
        .gemini-notif-title { color: white; display: block; margin-bottom: 4px; font-weight: 500; }

        .gemini-toggle-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          cursor: pointer;
          color: var(--g-text-mute);
        }
        .gemini-toggle-btn:hover { background: rgba(255,255,255,0.05); color: white; }

        .gemini-user-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 20px;
          border-left: 1px solid var(--g-border);
        }
        .gemini-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(to right, #ec4899, #8b5cf6);
          border: 2px solid rgba(255,255,255,0.1);
        }

        /* ── Dashboard Content ── */
        .gemini-content {
          padding: 32px;
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        .gemini-page-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        /* ── Stats Grid ── */
        .gemini-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .gemini-stat-card {
          background: var(--g-bg-card);
          border: 1px solid var(--g-border);
          border-radius: 16px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s;
        }
        .gemini-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }

        .gemini-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .gemini-stat-label { color: var(--g-text-mute); font-size: 14px; }
        .gemini-stat-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
        }

        .gemini-stat-value {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .gemini-stat-trend {
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .gemini-trend-up { color: var(--g-success); }
        .gemini-trend-down { color: #ef4444; }

        /* ── Charts Section ── */
        .gemini-charts-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }
        @media (max-width: 1024px) {
          .gemini-charts-row { grid-template-columns: 1fr; }
        }

        .gemini-chart-card {
          background: var(--g-bg-card);
          border: 1px solid var(--g-border);
          border-radius: 16px;
          padding: 24px;
          min-height: 350px;
          display: flex;
          flex-direction: column;
        }

        .gemini-chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        /* SVG Line Chart */
        .gemini-line-chart {
          width: 100%;
          height: 100%;
          flex: 1;
        }
        .gemini-line-path {
          fill: none;
          stroke: var(--g-accent);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 4px 6px var(--g-accent-glow));
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s ease-out forwards;
        }
        .gemini-area-path {
          fill: url(#gradientArea);
          stroke: none;
          opacity: 0.3;
          animation: fadeInArea 2s ease-out forwards;
        }

        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes fadeInArea { from { opacity: 0; } to { opacity: 0.3; } }

        /* Bar Chart */
        .gemini-bar-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 200px;
          padding-top: 20px;
        }
        .gemini-bar {
          width: 12%;
          background: #334155;
          border-radius: 6px;
          position: relative;
          transition: height 1s ease-out;
          overflow: hidden;
        }
        .gemini-bar::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          top: 0;
          background: linear-gradient(to top, var(--g-accent), #818cf8);
          opacity: 0.8;
          transform: translateY(100%);
          animation: barFill 1s ease-out forwards;
          animation-delay: var(--delay);
        }
        @keyframes barFill { to { transform: translateY(0); } }

        /* ── Data Table ── */
        .gemini-table-card {
          background: var(--g-bg-card);
          border: 1px solid var(--g-border);
          border-radius: 16px;
          overflow: hidden;
        }
        .gemini-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .gemini-table th {
          padding: 16px 24px;
          background: rgba(255,255,255,0.02);
          color: var(--g-text-mute);
          font-weight: 500;
          border-bottom: 1px solid var(--g-border);
          cursor: pointer;
          transition: color 0.2s;
          user-select: none;
        }
        .gemini-table th:hover {
          color: white;
          background: rgba(255,255,255,0.04);
        }
        .gemini-table td {
          padding: 16px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .gemini-table tr:hover { background: rgba(255,255,255,0.02); }
        
        .gemini-status {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
        }
        .status-success { background: rgba(16, 185, 129, 0.2); color: #34d399; }
        .status-pending { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }
        .status-failed { background: rgba(239, 68, 68, 0.2); color: #f87171; }

        .gemini-sort-icon {
          display: inline-block;
          margin-left: 6px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid currentColor;
          opacity: 0.3;
          vertical-align: middle;
          transition: all 0.2s;
        }
        .gemini-sort-icon.active { opacity: 1; color: var(--g-accent); }
        .gemini-sort-icon.desc { border-bottom: none; border-top: 4px solid currentColor; }
      `}</style>

      <div className="gemini-dashboard">
        {/* Sidebar */}
        <aside className={`gemini-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="gemini-logo-box">
            <div className="gemini-logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <span className="gemini-logo-text">DashGemini</span>
          </div>

          <nav className="gemini-nav">
            <div 
              className={`gemini-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <svg className="gemini-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
              </svg>
              <span>Overview</span>
            </div>
            <div className="gemini-nav-item">
              <svg className="gemini-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              <span>Messages</span>
            </div>
            <div className="gemini-nav-item">
              <svg className="gemini-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
              </svg>
              <span>Settings</span>
            </div>
          </nav>
        </aside>

        {/* Main Area */}
        <main className="gemini-main">
          <header className="gemini-topbar">
            <div className="gemini-top-left">
              <div className="gemini-toggle-btn" onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
            </div>

            <div className="gemini-top-right">
              {/* Notification Bell */}
              <div style={{ position: 'relative' }}>
                <div 
                  className={`gemini-icon-btn ${showNotifications ? 'active' : ''}`}
                  onClick={handleNotificationClick}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  {notificationCount > 0 && <span className="gemini-badge"></span>}
                </div>

                {/* Dropdown */}
                {showNotifications && (
                  <div className="gemini-dropdown">
                    <div className="gemini-notif-item">
                      <span className="gemini-notif-title">New Order #8816</span>
                      <span>Bruce Wayne placed an order for $5,400.00</span>
                    </div>
                    <div className="gemini-notif-item">
                      <span className="gemini-notif-title">System Alert</span>
                      <span>Server load high (85%)</span>
                    </div>
                    <div className="gemini-notif-item">
                      <span className="gemini-notif-title">Message</span>
                      <span>Sarah sent you a direct message</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="gemini-user-profile">
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>K.Gemini</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Admin</div>
                </div>
                <div className="gemini-avatar"></div>
              </div>
            </div>
          </header>

          <div className="gemini-content">
            <h1 className="gemini-page-title">Dashboard Overview</h1>

            <div className="gemini-stats-grid">
              <div className="gemini-stat-card">
                <div className="gemini-stat-header">
                  <span className="gemini-stat-label">Total Revenue</span>
                  <div className="gemini-stat-icon" style={{ color: '#0ea5e9' }}>$</div>
                </div>
                <div className="gemini-stat-value">$24,560</div>
                <div className="gemini-stat-trend gemini-trend-up">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  +12.5% vs last month
                </div>
              </div>

              <div className="gemini-stat-card">
                <div className="gemini-stat-header">
                  <span className="gemini-stat-label">Active Users</span>
                  <div className="gemini-stat-icon" style={{ color: '#ec4899' }}>👥</div>
                </div>
                <div className="gemini-stat-value">1,204</div>
                <div className="gemini-stat-trend gemini-trend-up">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  +5.2% vs last week
                </div>
              </div>

              <div className="gemini-stat-card">
                <div className="gemini-stat-header">
                  <span className="gemini-stat-label">Bounce Rate</span>
                  <div className="gemini-stat-icon" style={{ color: '#f59e0b' }}>📉</div>
                </div>
                <div className="gemini-stat-value">42.3%</div>
                <div className="gemini-stat-trend gemini-trend-down">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                  -2.1% (Good)
                </div>
              </div>
            </div>

            <div className="gemini-charts-row">
              <div className="gemini-chart-card">
                <div className="gemini-chart-header">
                  <h3>Revenue Growth</h3>
                  <select style={{ background: '#334155', border: 'none', color: 'white', padding: '4px 8px', borderRadius: '6px' }}>
                    <option>This Year</option>
                    <option>Last Year</option>
                  </select>
                </div>
                <div className="gemini-line-chart">
                  <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="gemini-area-path" d="M0,180 Q50,160 100,140 T200,100 T300,60 T400,80 T500,40 V200 H0 Z" />
                    <path className="gemini-line-path" d="M0,180 Q50,160 100,140 T200,100 T300,60 T400,80 T500,40" />
                  </svg>
                </div>
              </div>

              <div className="gemini-chart-card">
                <div className="gemini-chart-header">
                  <h3>Traffic Source</h3>
                </div>
                <div className="gemini-bar-chart">
                  {[40, 70, 50, 90, 60, 80].map((h, i) => (
                    <div 
                      key={i} 
                      className="gemini-bar" 
                      style={{ height: `${h}%`, '--delay': `${i * 0.1}s` } as any} 
                    />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3>Recent Transactions</h3>
              <div style={{ fontSize: '13px', color: '#6366f1', cursor: 'pointer' }}>View All →</div>
            </div>

            <div className="gemini-table-card">
              <table className="gemini-table">
                <thead>
                  <tr>
                    {[
                      { id: 'id', label: 'ID' },
                      { id: 'date', label: 'Date' },
                      { id: 'user', label: 'Customer' },
                      { id: 'status', label: 'Status' },
                      { id: 'amount', label: 'Amount', align: 'right' }
                    ].map((col) => (
                      <th 
                        key={col.id} 
                        onClick={() => handleSort(col.id)}
                        style={{ textAlign: col.align as any || 'left' }}
                      >
                        {col.label} 
                        <span className={`gemini-sort-icon ${sortCol === col.id ? 'active' : ''} ${sortCol === col.id && sortDir === 'asc' ? 'desc' : ''}`}></span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#TR-8812', date: 'Oct 24, 2025', user: 'Alex Morgan', status: 'Success', amount: '$450.00' },
                    { id: '#TR-8813', date: 'Oct 24, 2025', user: 'Sarah Connor', status: 'Pending', amount: '$120.50' },
                    { id: '#TR-8814', date: 'Oct 23, 2025', user: 'James Bond', status: 'Success', amount: '$999.00' },
                    { id: '#TR-8815', date: 'Oct 22, 2025', user: 'Ellen Ripley', status: 'Failed', amount: '$24.00' },
                    { id: '#TR-8816', date: 'Oct 21, 2025', user: 'Bruce Wayne', status: 'Success', amount: '$5,400.00' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td>{row.id}</td>
                      <td>{row.date}</td>
                      <td>{row.user}</td>
                      <td>
                        <span className={`gemini-status ${row.status === 'Success' ? 'status-success' : row.status === 'Pending' ? 'status-pending' : 'status-failed'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td style={{ fontWeight: 600, textAlign: 'right' }}>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
