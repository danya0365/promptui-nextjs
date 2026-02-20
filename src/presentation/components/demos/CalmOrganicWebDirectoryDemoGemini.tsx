'use client';

import { useState } from 'react';

export function CalmOrganicWebDirectoryDemoGemini() {
  const [activeFilter, setActiveFilter] = useState('Everything');

  const filters = ['Everything', 'Mindfulness', 'Wellness', 'Growth'];

  const resources = [
    {
      id: 'res-1',
      title: 'Breathe Easy',
      category: 'Mindfulness',
      author: 'Aria Solis',
      count: '01',
      isFeatured: true,
      color: '#A3B18A', // Sage
      desc: 'A collection of guided breathing exercises designed to lower cortisol and bring you back to the present moment.'
    },
    {
      id: 'res-2',
      title: 'Sleep Soundly',
      category: 'Wellness',
      author: 'Dr. Elias Thorne',
      count: '02',
      isFeatured: false,
      color: '#DDA15E', // Sand
      desc: 'Scientifically proven soundscapes and sleep hygiene routines for deep, restorative rest.'
    },
    {
      id: 'res-3',
      title: 'Intentional Living',
      category: 'Growth',
      author: 'Maya Lin',
      count: '03',
      isFeatured: true,
      color: '#BC6C25', // Clay
      desc: 'Workshops and journal prompts reflecting on personal values, decluttering the mind, and setting compassionate boundaries.'
    },
    {
      id: 'res-4',
      title: 'Morning Rituals',
      category: 'Mindfulness',
      author: 'Julian Reed',
      count: '04',
      isFeatured: false,
      color: '#A3B18A',
      desc: 'Start your day with purpose. Curated stretches, tea preparation rituals, and morning meditations.'
    },
    {
      id: 'res-5',
      title: 'Nourish Body',
      category: 'Wellness',
      author: 'Sarah Chen',
      count: '05',
      isFeatured: false,
      color: '#DDA15E',
      desc: 'Whole-food recipes and intuitive eating guides focusing on how food makes you feel rather than what it restricts.'
    },
    {
      id: 'res-6',
      title: 'Digital Detox',
      category: 'Growth',
      author: 'Sam Porter',
      count: '06',
      isFeatured: false,
      color: '#BC6C25',
      desc: 'Strategies for unhooking from the scroll, reclaiming your attention, and finding joy in offline hobbies.'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Nunito:wght@300;400;600&display=swap');

        .organic-app {
          font-family: 'Nunito', sans-serif;
          min-height: 100vh;
          background-color: #F4F1EA; /* Warm off-white */
          color: #4A4A4A; /* Soft charcoal */
          padding: 80px 24px;
          -webkit-font-smoothing: antialiased;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        }

        .organic-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .organic-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .organic-title {
          font-family: 'Lora', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          color: #38423B; /* Deep organic green/gray */
          margin: 0 0 16px 0;
          letter-spacing: -0.01em;
        }

        .organic-subtitle {
          font-size: 1.1rem;
          font-weight: 300;
          color: #7A7A7A;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .organic-nav {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 48px;
          flex-wrap: wrap;
        }

        .organic-filter {
          background-color: transparent;
          border: none;
          padding: 10px 24px;
          font-size: 1rem;
          color: #8C8A84;
          cursor: pointer;
          border-radius: 30px;
          transition: all 0.3s ease;
          font-family: 'Nunito', sans-serif;
          font-weight: 400;
        }

        .organic-filter:hover {
          color: #4A4A4A;
          background-color: rgba(230, 226, 216, 0.5);
        }

        .organic-filter.active {
          color: #38423B;
          background-color: #E6E2D8; /* Slightly darker sand */
          font-weight: 600;
        }

        .organic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
        }

        .organic-card {
          background-color: #FFFFFF;
          border-radius: 20px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 10px 30px rgba(163, 155, 140, 0.08); /* Soft sand shadow */
          cursor: pointer;
          min-height: 420px;
        }

        .organic-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(163, 155, 140, 0.15);
        }

        /* Top section of the card */
        .organic-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .organic-count {
          font-family: 'Lora', serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #C8C3BA;
          background: #F8F6F1;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .organic-featured {
          background-color: rgba(163, 177, 138, 0.15); /* Soft sage bg */
          color: #72805A; /* Deep sage text */
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 30px;
          letter-spacing: 0.02em;
        }

        .organic-category {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          display: inline-block;
        }

        .organic-card-title {
          font-family: 'Lora', serif;
          font-size: 2rem;
          font-weight: 500;
          color: #38423B;
          line-height: 1.2;
          margin: 0 0 20px 0;
        }

        .organic-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: #6B6B6B;
          font-weight: 300;
          flex-grow: 1;
        }

        .organic-card-footer {
          margin-top: auto;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #F0EEE9;
        }

        .organic-author {
          font-size: 0.9rem;
          color: #8C8A84;
        }

        .organic-author span {
          color: #4A4A4A;
          font-weight: 600;
        }

        .organic-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #F4F1EA;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8C8A84;
          transition: all 0.3s ease;
        }

        .organic-card:hover .organic-arrow {
          background-color: #E6E2D8;
          color: #38423B;
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .organic-app { padding: 40px 16px; }
          .organic-grid { grid-template-columns: 1fr; gap: 24px; }
          .organic-title { font-size: 2.5rem; }
          .organic-nav { gap: 8px; justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 10px; }
          .organic-filter { white-space: nowrap; }
        }
      `}</style>

      <div className="organic-app">
        <div className="organic-container">
          <header className="organic-header">
            <h1 className="organic-title">Find Your Center</h1>
            <p className="organic-subtitle">
              A curated directory of resources for mindful living, deep wellness, and intentional personal growth.
            </p>

            <nav className="organic-nav">
              {filters.map((filter) => (
                <button 
                  key={filter} 
                  className={`organic-filter ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </nav>
          </header>

          <div className="organic-grid">
            {resources.map((item) => {
              // Filter logic
              if (activeFilter !== 'Everything' && item.category !== activeFilter) {
                return null;
              }
               
              return (
                <article key={item.id} className="organic-card">
                  <div className="organic-card-top">
                    <div className="organic-count">{item.count}</div>
                    {item.isFeatured && (
                      <div className="organic-featured">Mindful Pick</div>
                    )}
                  </div>
                  
                  <div className="organic-category" style={{ color: item.color }}>
                    {item.category}
                  </div>
                  <h2 className="organic-card-title">{item.title}</h2>
                  <p className="organic-desc">{item.desc}</p>
                  
                  <footer className="organic-card-footer">
                    <div className="organic-author">
                      By <span>{item.author}</span>
                    </div>
                    <div className="organic-arrow">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
