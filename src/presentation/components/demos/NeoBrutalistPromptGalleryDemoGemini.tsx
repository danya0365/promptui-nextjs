'use client';


export function NeoBrutalistPromptGalleryDemoGemini() {
  const cards = [
    {
      id: 1,
      author: '@NICOLECHAN',
      date: 'Nov 21, 2025',
      title: 'การ์ดคำคมแนวนอนพร้อมรูปภาพบุคคลและปรับแต่งภาษา จีน/อังกฤษ',
      thumbBg: 'linear-gradient(135deg, #8B4513, #CD853F)',
      thumbText: '保持饥饿，保持愚蠢\n\n— Steve Jobs',
      desc: 'ข้อความสำหรับสร้างการ์ดคำคมแนวนอนขนาดเล็กที่มีรูปภาพผู้มีชื่อเสียงเป็นรูปภาพประกอบ โดยจะมีพื้นหลังสีน้ำตาล...',
      prompt: 'การ์ดคำคมขนาดแนวนอน... Stay Hungry, Stay Foolish ...',
    },
    {
      id: 2,
      author: '@MANSI SANGHANI',
      date: 'Jan 20, 2026',
      title: 'อินโฟกราฟิกผลิตภัณฑ์ Premium liquid glass Bento grid พร้อม 8 โมดูล',
      thumbBg: 'linear-gradient(135deg, #1A1A1A, #4A0000)',
      thumbText: 'Bento Grid Layout 8 Modules\n\n(Product Name)',
      desc: 'สร้างอินโฟกราฟิก Bento grid layout 8 โมดูล ผู้ใช้สามารถระบุชื่อผลิตภัณฑ์ได้ ผู้ใช้เลือกภาษา, สไตล์พื้นหลัง...',
      prompt: 'ตัวแปรนำเข้า: [insert product name]\nภาษา: [insert language]\n\nคำสั่งระบบ:\nสร้าง... Bento Grid ...',
    },
    {
      id: 3,
      author: '@SEMINAR_AI',
      date: 'Nov 22, 2025',
      title: 'ภาพส่วนหัวสไตล์วาดด้วยมือจากรูปภาพ',
      thumbBg: 'linear-gradient(135deg, #87CEEB, #E0F6FF)',
      thumbText: 'Google AI\nNano Banana Pro\n\nHand-Drawn Style',
      desc: 'ภาพส่วนหัวสไตล์วาดด้วยมือ เป็นรูปคนกำลังอธิบาย Nano Banana Pro ...',
      prompt: 'สร้างบุคคลที่มีสไตล์โหลดใหม่ทั้งหมด ทำให้เป็นภาพส่วนหัวสำหรับความบันเทิง... แนวนอน 16:9 สไตล์วาดด้วยมือ...',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        .neo-app {
          font-family: 'Sarabun', sans-serif;
          background-color: #f4f4f0;
          color: #111;
          min-height: 100vh;
        }

        .neo-nav {
          background: #fff;
          border-bottom: 4px solid #000;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .neo-logo {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .neo-nav-actions {
          display: flex;
          gap: 12px;
        }

        .neo-btn-icon, .neo-btn-label {
          background: #fff;
          border: 3px solid #000;
          box-shadow: 2px 2px 0 #000;
          border-radius: 4px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.1s;
        }

        .neo-btn-icon {
          width: 40px;
          height: 40px;
          font-size: 18px;
        }

        .neo-btn-label {
          padding: 0 16px;
          height: 40px;
        }

        .neo-btn-yellow {
          background: #ffe600;
        }

        .neo-btn-icon:active, .neo-btn-label:active {
          box-shadow: 0px 0px 0 #000;
          transform: translate(2px, 2px);
        }

        .neo-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding: 24px;
          border-bottom: 2px dashed #000;
        }

        .neo-tag {
          padding: 6px 16px;
          border: 2px solid #000;
          box-shadow: 2px 2px 0 #000;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          background: #fff;
          cursor: pointer;
        }

        .neo-tag.active {
          background: #ffe600;
        }

        .neo-main {
          padding: 32px 24px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .neo-card {
          background: #fff;
          border: 4px solid #000;
          border-radius: 8px;
          box-shadow: 8px 8px 0 #000;
          padding: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.2s;
        }

        .neo-card:hover {
          transform: translateY(-4px);
        }

        .neo-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: #ffe600;
          border: 3px solid #000;
          padding: 4px 12px;
          font-weight: 700;
          font-size: 14px;
          transform: rotate(3deg);
          box-shadow: 2px 2px 0 #000;
        }

        .neo-card-header {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Space Mono', monospace;
          color: #444;
        }

        .neo-card-title {
          font-size: 20px;
          font-weight: 800;
          line-height: 1.3;
        }

        .neo-thumbnail {
          height: 180px;
          border: 3px solid #000;
          border-radius: 4px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 16px;
          font-weight: 600;
        }

        .neo-thumbnail-badge {
          position: absolute;
          bottom: -15px;
          background: #000;
          color: #fff;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 700;
          border-radius: 4px;
        }

        .neo-desc {
          font-size: 15px;
          line-height: 1.5;
          color: #222;
          flex-grow: 1;
        }

        .neo-prompt-box {
          background: #111;
          color: #4afe00;
          border: 3px solid #000;
          border-radius: 6px;
          padding: 16px;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          position: relative;
        }
        
        .neo-prompt-title {
           background: #fff;
           color: #000;
           display: inline-block;
           padding: 2px 8px;
           font-size: 12px;
           font-weight: bold;
           border: 2px solid #000;
           position: absolute;
           top: -12px;
           left: 10px;
        }
        
        .neo-copy-btn {
           position: absolute;
           top: 8px;
           right: 8px;
           background: #fff;
           color: #000;
           border: 2px solid #000;
           padding: 2px 8px;
           font-size: 12px;
           font-weight: bold;
           cursor: pointer;
           border-radius: 2px;
        }

        .neo-card-footer {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        .neo-btn-primary {
          flex: 1;
          background: #000;
          color: #fff;
          border: 2px solid #000;
          padding: 10px;
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          border-radius: 4px;
          box-shadow: 3px 3px 0 #ccc;
          transition: all 0.1s;
        }

        .neo-btn-primary:active {
          box-shadow: 0 0 0 #ccc;
          transform: translate(3px, 3px);
        }

        .neo-btn-secondary {
          background: #fff;
          border: 2px solid #000;
          width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          border-radius: 4px;
          box-shadow: 3px 3px 0 #000;
          transition: all 0.1s;
        }
        
        .neo-btn-secondary.yellow {
          background: #ffe600;
        }

        .neo-btn-secondary:active {
          box-shadow: 0 0 0 #000;
          transform: translate(3px, 3px);
        }

      `}</style>
      
      <div className="neo-app">
        <header className="neo-nav">
          <div className="neo-logo">YouMind</div>
          <div className="neo-nav-actions">
            <button className="neo-btn-icon">🔍</button>
            <button className="neo-btn-icon">📥</button>
            <button className="neo-btn-icon">📶</button>
            <button className="neo-btn-label neo-btn-yellow">ทั้งหมด: 9645</button>
          </div>
        </header>

        <div className="neo-filters">
          <button className="neo-tag active">ทั้งหมด</button>
          <button className="neo-tag">โปรไฟล์ / รูปประจำตัว</button>
          <button className="neo-tag">โพสต์บนโซเชียลมีเดีย</button>
          <button className="neo-tag">ภาพประกอบเพื่อการศึกษา</button>
          <button className="neo-tag">ภาพหน้าปกของ YOUTUBE</button>
          <button className="neo-tag">คอมิก / สตอรี่บอร์ด</button>
          <button className="neo-tag">โปสเตอร์ / ใบปลิว</button>
        </div>

        <main className="neo-main">
          {cards.map((card) => (
            <div key={card.id} className="neo-card">
               <div className="neo-badge">แนะนำ</div>
               
               <div className="neo-card-header">
                 <span>โดย {card.author}</span>
                 <span>{card.date}</span>
               </div>
               
               <h2 className="neo-card-title">{card.title}</h2>
               
               <div className="neo-thumbnail" style={{ background: card.thumbBg }}>
                 <div style={{ whiteSpace: 'pre-line' }}>{card.thumbText}</div>
                 <div className="neo-thumbnail-badge">ดูเพิ่มเติมจากโมเดลอื่น</div>
               </div>
               
               <p className="neo-desc">{card.desc}</p>
               
               <div className="neo-prompt-box">
                 <div className="neo-prompt-title">พารามิเตอร์</div>
                 <button className="neo-copy-btn" onClick={() => alert('คัดลอกพรอมต์แล้ว!')}>คัดลอก</button>
                 <div style={{ whiteSpace: 'pre-line', marginTop: '16px' }}>{card.prompt}</div>
               </div>
               
               <div className="neo-card-footer">
                 <button className="neo-btn-primary">⚡ ลองเลย</button>
                 <button className="neo-btn-secondary">🔗</button>
                 <button className="neo-btn-secondary yellow">⨯</button>
               </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
