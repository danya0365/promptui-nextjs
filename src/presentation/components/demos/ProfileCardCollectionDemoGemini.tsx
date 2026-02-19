/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  PROFILE CARD COLLECTION (Gemini Version)                 ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + 3D Flip Effects + Glassmorphism
 */

'use client';

export function ProfileCardCollectionDemoGemini() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        .profile-collection {
          --p-bg: #0f172a;
          --p-card: rgba(255, 255, 255, 0.05);
          --p-accent: #8b5cf6;
          --p-glow: #a78bfa;
          
          font-family: 'Outfit', sans-serif;
          background: var(--p-bg);
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 40px;
          perspective: 1000px;
        }

        .profile-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px;
          max-width: 1200px; width: 100%;
        }

        /* 3D Flip Card Container */
        .profile-card-container {
          background-color: transparent;
          width: 280px; height: 380px;
          perspective: 1000px;
          margin: 0 auto;
        }

        .profile-card-inner {
          position: relative; width: 100%; height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .profile-card-container:hover .profile-card-inner {
          transform: rotateY(180deg);
        }

        /* Front & Back Common */
        .profile-front, .profile-back {
          position: absolute; width: 100%; height: 100%;
          -webkit-backface-visibility: hidden; backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        /* Front Styling */
        .profile-front {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        .profile-front::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6);
        }

        .profile-avatar-box {
          position: relative; width: 100px; height: 100px; margin-bottom: 20px;
        }
        .profile-avatar {
          width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
          border: 3px solid rgba(255,255,255,0.1); padding: 3px;
        }
        .profile-status {
          position: absolute; bottom: 5px; right: 5px; width: 16px; height: 16px;
          background: #22c55e; border-radius: 50%; border: 3px solid var(--p-bg);
          box-shadow: 0 0 10px #22c55e;
        }

        .profile-name { font-size: 24px; font-weight: 700; color: white; margin-bottom: 4px; }
        .profile-role { font-size: 14px; color: #94a3b8; letter-spacing: 1px; text-transform: uppercase; font-weight: 500; }

        /* Back Styling */
        .profile-back {
          transform: rotateY(180deg);
          padding: 30px;
          display: flex; flex-direction: column; justify-content: space-between;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(15, 23, 42, 0.9));
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .profile-stats {
          display: flex; justify-content: space-between; margin-bottom: 20px;
        }
        .profile-stat-item { text-align: center; }
        .profile-stat-val { font-size: 18px; font-weight: 700; color: white; }
        .profile-stat-label { font-size: 12px; color: #94a3b8; }

        .profile-skills h4 { color: white; font-size: 14px; margin-bottom: 10px; text-align: left; }
        .skill-bar { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; margin-bottom: 10px; position: relative; overflow: hidden; }
        .skill-fill { height: 100%; background: linear-gradient(90deg, #ec4899, #8b5cf6); border-radius: 3px; }

        .profile-btn {
          width: 100%; padding: 12px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer;
          background: white; color: #0f172a; transition: 0.3s;
        }
        .profile-btn:hover { background: #8b5cf6; color: white; transform: scale(1.05); }

      `}</style>
      
      <div className="profile-collection">
        <div className="profile-grid">
          
          {/* Card 1 */}
          <div className="profile-card-container">
            <div className="profile-card-inner">
              <div className="profile-front">
                <div className="profile-avatar-box">
                  <div className="profile-avatar" style={{ background: 'url(https://i.pravatar.cc/150?img=32) center/cover' }}></div>
                  <div className="profile-status"></div>
                </div>
                <h3 className="profile-name">Sarah Jenkins</h3>
                <span className="profile-role">UX Designer</span>
              </div>
              <div className="profile-back">
                <div className="profile-stats">
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">124</div>
                    <div className="profile-stat-label">Projects</div>
                  </div>
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">4k</div>
                    <div className="profile-stat-label">Followers</div>
                  </div>
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">9.8</div>
                    <div className="profile-stat-label">Rating</div>
                  </div>
                </div>
                <div className="profile-skills">
                  <h4>Skills</h4>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '75%' }}></div></div>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
                </div>
                <button className="profile-btn">View Profile</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="profile-card-container">
            <div className="profile-card-inner">
              <div className="profile-front">
                <div className="profile-avatar-box">
                  <div className="profile-avatar" style={{ background: 'url(https://i.pravatar.cc/150?img=11) center/cover' }}></div>
                  <div className="profile-status" style={{ background: '#eab308', boxShadow: '0 0 10px #eab308' }}></div>
                </div>
                <h3 className="profile-name">Mike Ross</h3>
                <span className="profile-role">Frontend Dev</span>
              </div>
              <div className="profile-back">
                <div className="profile-stats">
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">85</div>
                    <div className="profile-stat-label">Repos</div>
                  </div>
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">12k</div>
                    <div className="profile-stat-label">Stars</div>
                  </div>
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">5y</div>
                    <div className="profile-stat-label">Exp</div>
                  </div>
                </div>
                <div className="profile-skills">
                  <h4>Stack</h4>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '95%', background: '#3b82f6' }}></div></div>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '80%', background: '#3b82f6' }}></div></div>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '60%', background: '#3b82f6' }}></div></div>
                </div>
                <button className="profile-btn">Follow</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="profile-card-container">
            <div className="profile-card-inner">
              <div className="profile-front">
                <div className="profile-avatar-box">
                  <div className="profile-avatar" style={{ background: 'url(https://i.pravatar.cc/150?img=5) center/cover' }}></div>
                  <div className="profile-status" style={{ background: '#ef4444', boxShadow: '0 0 10px #ef4444' }}></div>
                </div>
                <h3 className="profile-name">Elena K.</h3>
                <span className="profile-role">Product Mgr</span>
              </div>
              <div className="profile-back">
                <div className="profile-stats">
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">42</div>
                    <div className="profile-stat-label">Sprints</div>
                  </div>
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">25</div>
                    <div className="profile-stat-label">Team</div>
                  </div>
                  <div className="profile-stat-item">
                    <div className="profile-stat-val">A+</div>
                    <div className="profile-stat-label">Perf</div>
                  </div>
                </div>
                <div className="profile-skills">
                  <h4>Leadership</h4>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '100%', background: '#10b981' }}></div></div>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '90%', background: '#10b981' }}></div></div>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: '85%', background: '#10b981' }}></div></div>
                </div>
                <button className="profile-btn">Connect</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
