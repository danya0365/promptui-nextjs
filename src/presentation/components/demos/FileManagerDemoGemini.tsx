/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  FILE MANAGER DASHBOARD (Gemini Version)                  ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Folder Grid + Breadcrumbs
 */

'use client';

export function FileManagerDemoGemini() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap');

        .fm-app {
          --f-bg: #f8fafc;
          --f-sidebar: #ffffff;
          --f-accent: #3b82f6;
          --f-text: #334155;
          --f-border: #e2e8f0;
          
          font-family: 'Karla', sans-serif;
          background: #f1f5f9;
          min-height: 100vh;
          padding: 40px;
          display: flex; justify-content: center;
        }

        .fm-container {
          width: 100%; max-width: 1200px;
          background: white; border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex; overflow: hidden; height: 800px;
        }

        /* Sidebar */
        .fm-sidebar {
          width: 260px; background: #f8fafc; border-right: 1px solid var(--f-border);
          padding: 24px; display: flex; flex-direction: column;
        }
        .fm-logo { font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 40px; display: flex; align-items: center; gap: 8px; }
        .fm-menu-group { margin-bottom: 30px; }
        .fm-group-title { font-size: 12px; color: #94a3b8; font-weight: 700; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px; }
        .fm-menu-item {
          padding: 10px 12px; border-radius: 8px; color: #475569; cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 10px; margin-bottom: 4px;
        }
        .fm-menu-item:hover, .fm-menu-item.active { background: #e0f2fe; color: var(--f-accent); }
        
        .storage-widget {
          margin-top: auto; background: white; padding: 20px; border-radius: 12px; border: 1px solid var(--f-border);
        }
        .storage-bar-bg { height: 6px; background: #e2e8f0; border-radius: 3px; margin: 10px 0; overflow: hidden; }
        .storage-bar-fill { height: 100%; width: 75%; background: var(--f-accent); border-radius: 3px; }

        /* Main */
        .fm-main { flex: 1; display: flex; flex-direction: column; }
        
        .fm-header {
           padding: 20px 30px; border-bottom: 1px solid var(--f-border);
           display: flex; justify-content: space-between; align-items: center;
        }
        .fm-search {
          background: #f1f5f9; padding: 10px 20px; border-radius: 30px; width: 300px; color: #64748b; font-size: 14px;
        }
        
        .fm-content { flex: 1; padding: 30px; overflow-y: auto; }
        
        .fm-breadcrumbs { font-size: 14px; color: #64748b; margin-bottom: 24px; display: flex; align-items: center; gap: 8px; }
        .fm-crumb-link { color: var(--f-accent); font-weight: 600; cursor: pointer; }
        
        .fm-section-title { font-size: 18px; font-weight: 700; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }

        .folder-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px; margin-bottom: 40px;
        }
        .folder-card {
           background: white; border: 1px solid var(--f-border); border-radius: 12px; padding: 20px;
           display: flex; flex-direction: column; align-items: center; text-align: center;
           transition: 0.2s; cursor: pointer;
        }
        .folder-card:hover { border-color: var(--f-accent); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1); transform: translateY(-2px); }
        .folder-icon { font-size: 40px; margin-bottom: 12px; color: #fbbf24; }
        .folder-name { font-weight: 600; font-size: 15px; margin-bottom: 4px; }
        .folder-info { font-size: 12px; color: #94a3b8; }

        .file-list { display: flex; flex-direction: column; gap: 10px; }
        .file-row {
          display: flex; align-items: center; padding: 12px 20px; border-radius: 8px;
          border-bottom: 1px solid #f1f5f9; transition: 0.2s;
        }
        .file-row:hover { background: #f8fafc; }
        .file-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-weight: 700; font-size: 10px; color: white; }
        .fi-pdf { background: #ef4444; }
        .fi-img { background: #8b5cf6; }
        .fi-doc { background: #3b82f6; }
        
        .file-name { flex: 1; font-weight: 500; }
        .file-date { color: #94a3b8; font-size: 13px; width: 150px; }
        .file-size { color: #64748b; font-size: 13px; font-weight: 600; width: 80px; text-align: right; }

      `}</style>
      
      <div className="fm-app">
        <div className="fm-container">
          <aside className="fm-sidebar">
            <div className="fm-logo">
              <span style={{ fontSize: '24px', color: '#3b82f6' }}>☁️</span> CloudBox
            </div>

            <div className="fm-menu-group">
              <div className="fm-group-title">Menu</div>
              <div className="fm-menu-item active">📁 My Files</div>
              <div className="fm-menu-item">🕒 Recent</div>
              <div className="fm-menu-item">⭐ Starred</div>
              <div className="fm-menu-item">🗑️ Trash</div>
            </div>

            <div className="storage-widget">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '700' }}>
                 <span>Storage</span>
                 <span>75%</span>
              </div>
              <div className="storage-bar-bg"><div className="storage-bar-fill"></div></div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Used 75 GB of 100 GB</div>
            </div>
          </aside>

          <main className="fm-main">
            <header className="fm-header">
              <div className="fm-search">Search files...</div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <span className="fm-menu-item" style={{ background: '#3b82f6', color: 'white' }}>+ Upload</span>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#cbd5e1' }}></div>
              </div>
            </header>

            <div className="fm-content">
              <div className="fm-breadcrumbs">
                 <span className="fm-crumb-link">Home</span>
                 <span>/</span>
                 <span className="fm-crumb-link">Projects</span>
                 <span>/</span>
                 <span>Marketing Assets</span>
              </div>

              <div className="fm-section-title">
                Folders
                <span style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '500', cursor: 'pointer' }}>View All</span>
              </div>
              <div className="folder-grid">
                <div className="folder-card">
                  <div className="folder-icon">📂</div>
                  <div className="folder-name">Q2 Campaigns</div>
                  <div className="folder-info">12 files • 24MB</div>
                </div>
                <div className="folder-card">
                  <div className="folder-icon">📂</div>
                  <div className="folder-name">Logos & Assets</div>
                  <div className="folder-info">45 files • 128MB</div>
                </div>
                <div className="folder-card">
                  <div className="folder-icon">📂</div>
                  <div className="folder-name">Social Media</div>
                  <div className="folder-info">8 files • 3.2MB</div>
                </div>
                <div className="folder-card">
                  <div className="folder-icon">📂</div>
                  <div className="folder-name">Archives</div>
                  <div className="folder-info">120 files • 2.4GB</div>
                </div>
              </div>

              <div className="fm-section-title">Recent Files</div>
              <div className="file-list">
                <div className="file-row">
                  <div className="file-icon fi-pdf">PDF</div>
                  <div className="file-name">Campaign_Proposal_v2.pdf</div>
                  <div className="file-date">Today, 10:23 AM</div>
                  <div className="file-size">2.4 MB</div>
                </div>
                <div className="file-row">
                  <div className="file-icon fi-img">JPG</div>
                  <div className="file-name">hero_banner_final.jpg</div>
                  <div className="file-date">Yesterday, 4:50 PM</div>
                  <div className="file-size">1.8 MB</div>
                </div>
                <div className="file-row">
                  <div className="file-icon fi-doc">DOC</div>
                  <div className="file-name">Copy_Draft_Q2.docx</div>
                  <div className="file-date">Jun 24, 2025</div>
                  <div className="file-size">450 KB</div>
                </div>
                <div className="file-row">
                  <div className="file-icon fi-img">PNG</div>
                  <div className="file-name">logo_transparent.png</div>
                  <div className="file-date">Jun 22, 2025</div>
                  <div className="file-size">120 KB</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
