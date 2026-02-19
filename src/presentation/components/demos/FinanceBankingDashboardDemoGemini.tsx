/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  FINANCE BANKING DASHBOARD (Gemini Version)               ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Credit Card Tilt + Charts
 */

'use client';

export function FinanceBankingDashboardDemoGemini() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

        .finance-dash {
          --f-bg: #0b1120;
          --f-panel: #1e293b;
          --f-gold: #fbbf24;
          --f-green: #10b981;
          --f-text: #e2e8f0;
          
          font-family: 'Manrope', sans-serif;
          background: var(--f-bg);
          color: var(--f-text);
          min-height: 100vh;
          padding: 20px;
          display: flex;
          gap: 20px;
        }

        /* Sidebar */
        .f-sidebar {
          width: 80px; background: var(--f-panel); border-radius: 20px;
          display: flex; flex-direction: column; align-items: center; padding: 40px 0;
          flex-shrink: 0;
        }
        .f-icon-btn {
          width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; color: #64748b; transition: 0.3s; cursor: pointer;
        }
        .f-icon-btn.active { background: rgba(251, 191, 36, 0.1); color: var(--f-gold); }
        .f-icon-btn:hover { color: var(--f-gold); }

        /* Main */
        .f-main { flex: 1; display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
        
        .f-header {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;
        }
        .f-h1 { font-size: 28px; font-weight: 800; }
        .f-h1 span { color: var(--f-gold); }

        .f-section-title { font-size: 18px; font-weight: 700; margin-bottom: 20px; display: flex; justify-content: space-between; }

        /* Wallet Card */
        .f-wallet-card {
          background: linear-gradient(135deg, #0f172a, #334155);
          border-radius: 24px; padding: 30px;
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 30px;
        }
        .f-balance-label { font-size: 14px; color: #94a3b8; margin-bottom: 8px; }
        .f-balance-amount { font-size: 42px; font-weight: 800; color: white; }
        .f-trend { display: inline-flex; align-items: center; gap: 4px; padding: 4px 12px; border-radius: 20px; background: rgba(16, 185, 129, 0.1); color: var(--f-green); font-size: 14px; font-weight: 700; }

        /* Cards Carousel */
        .f-cards-container {
          perspective: 1000px;
        }
        .f-credit-card {
          width: 100%; height: 220px; border-radius: 24px; padding: 25px;
          background: linear-gradient(135deg, #d97706, #fbbf24);
          box-shadow: 0 20px 50px rgba(251, 191, 36, 0.2);
          position: relative; overflow: hidden;
          transition: 0.5s; transform-style: preserve-3d;
          color: white;
        }
        .f-credit-card:hover { transform: rotateY(10deg) rotateX(5deg); }
        .f-card-chip { width: 40px; height: 30px; background: rgba(255,255,255,0.2); border-radius: 6px; margin-bottom: 20px; }
        .f-card-num { font-size: 24px; letter-spacing: 2px; margin-bottom: 30px; font-family: monospace; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .f-card-holder { font-size: 12px; opacity: 0.8; text-transform: uppercase; }
        .f-card-name { font-size: 16px; font-weight: 700; }

        /* Transactions */
        .f-trans-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 15px; border-radius: 16px; background: var(--f-panel); margin-bottom: 12px;
          transition: 0.2s;
        }
        .f-trans-item:hover { transform: scale(1.02); background: #283548; }
        .f-trans-icon {
          width: 48px; height: 48px; border-radius: 12px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; margin-right: 15px;
        }
        .f-trans-info h4 { font-size: 16px; font-weight: 600; margin: 0 0 4px 0; }
        .f-trans-info p { font-size: 13px; color: #94a3b8; margin: 0; }
        .f-trans-amount { font-weight: 700; font-size: 16px; }
        .f-trans-amount.neg { color: #f87171; }
        .f-trans-amount.pos { color: var(--f-green); }

        /* Right Panel */
        .f-right-panel { background: var(--f-panel); border-radius: 24px; padding: 30px; }
        .f-quick-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 40px; }
        .f-action-btn {
          background: rgba(255,255,255,0.05); border: none; border-radius: 16px; padding: 20px; color: #e2e8f0;
          display: flex; flex-direction: column; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s;
        }
        .f-action-btn:hover { background: rgba(251, 191, 36, 0.1); color: var(--f-gold); transform: translateY(-3px); }

        @media(max-width: 1024px) {
          .finance-dash { flex-direction: column; }
          .f-sidebar { width: 100%; height: 60px; flex-direction: row; justify-content: center; gap: 20px; padding: 0; }
          .f-main { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="finance-dash">
        <aside className="f-sidebar">
          <div className="f-icon-btn active">🏠</div>
          <div className="f-icon-btn">💳</div>
          <div className="f-icon-btn">📊</div>
          <div className="f-icon-btn">⚙️</div>
        </aside>

        <main className="f-main">
          <div className="f-col-main">
            <header className="f-header">
              <h1 className="f-h1">Good Morning, <span>Alex</span></h1>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155' }}></div>
            </header>

            <div className="f-wallet-card">
              <div>
                <div className="f-balance-label">Total Balance</div>
                <div className="f-balance-amount">$24,562.00</div>
              </div>
              <div className="f-trend">↑ 12.5%</div>
            </div>

            <div className="f-section-title">
              <span>Recent Transactions</span>
              <span style={{ fontSize: '14px', color: '#64748b', cursor: 'pointer' }}>View All</span>
            </div>

            <div className="f-transactions">
              <div className="f-trans-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="f-trans-icon">🍎</div>
                  <div className="f-trans-info">
                    <h4>Apple Global</h4>
                    <p>Electronics</p>
                  </div>
                </div>
                <div className="f-trans-amount neg">-$1,299.00</div>
              </div>
              <div className="f-trans-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="f-trans-icon">💼</div>
                  <div className="f-trans-info">
                    <h4>Upwork Remittance</h4>
                    <p>Freelance</p>
                  </div>
                </div>
                <div className="f-trans-amount pos">+$3,450.00</div>
              </div>
              <div className="f-trans-item">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="f-trans-icon">☕</div>
                  <div className="f-trans-info">
                    <h4>Starbucks</h4>
                    <p>Food & Drink</p>
                  </div>
                </div>
                <div className="f-trans-amount neg">-$5.50</div>
              </div>
            </div>
          </div>

          <div className="f-right-panel">
            <div className="f-section-title">My Cards</div>
            <div className="f-cards-container">
              <div className="f-credit-card">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className="f-card-chip"></div>
                  <div style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px' }}>VISA</div>
                </div>
                <div className="f-card-num">**** **** **** 4289</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div className="f-card-holder">Card Holder</div>
                    <div className="f-card-name">Alex Johnson</div>
                  </div>
                  <div>
                    <div className="f-card-holder">Expires</div>
                    <div className="f-card-name">12/28</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="f-section-title" style={{ marginTop: '40px' }}>Quick Actions</div>
            <div className="f-quick-actions">
              <button className="f-action-btn">
                <span style={{ fontSize: '24px' }}>💸</span>
                <span>Transfer</span>
              </button>
              <button className="f-action-btn">
                <span style={{ fontSize: '24px' }}>⚡</span>
                <span>Top Up</span>
              </button>
              <button className="f-action-btn">
                <span style={{ fontSize: '24px' }}>🧾</span>
                <span>Bill Pay</span>
              </button>
              <button className="f-action-btn">
                <span style={{ fontSize: '24px' }}>📈</span>
                <span>Invest</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
