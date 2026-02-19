/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  E-COMMERCE PRODUCT GRID (Gemini Version)                 ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Filter Sidebar + Hover Effects
 */

'use client';

import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: "Urban Sneakers", price: 129, category: "Shoes", img: "👟", color: "blue" },
  { id: 2, name: "Leather Backpack", price: 89, category: "Accessories", img: "🎒", color: "brown" },
  { id: 3, name: "Minimal Watch", price: 199, category: "Accessories", img: "⌚", color: "black" },
  { id: 4, name: "Denim Jacket", price: 79, category: "Clothing", img: "🧥", color: "blue" },
  { id: 5, name: "Wireless Headphones", price: 250, category: "Electronics", img: "🎧", color: "black" },
  { id: 6, name: "Sunglasses", price: 145, category: "Accessories", img: "🕶️", color: "black" },
];

export function ProductCardGridDemoGemini() {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap');

        .ecom-container {
          --e-accent: #22c55e;
          --e-dark: #1f2937;
          --e-gray: #f3f4f6;
          
          font-family: 'Jost', sans-serif;
          background: white;
          min-height: 100vh;
          display: flex;
          color: #374151;
        }

        .ecom-sidebar {
          width: 250px; flex-shrink: 0; padding: 40px 20px;
          border-right: 1px solid #e5e7eb; position: sticky; top: 0; height: 100vh;
        }
        .ecom-main { flex: 1; padding: 40px; background: #fafafa; }

        .ecom-title { font-size: 24px; font-weight: 600; margin-bottom: 24px; }
        .ecom-filter-btn {
          display: block; width: 100%; text-align: left; padding: 10px 15px;
          border-radius: 8px; margin-bottom: 5px; cursor: pointer; border: none; background: transparent;
          font-weight: 500; color: #6b7280; transition: 0.2s;
        }
        .ecom-filter-btn.active {
          background: #e0f2fe; color: #0284c7; font-weight: 600;
        }
        .ecom-filter-btn:hover:not(.active) { background: #f3f4f6; }

        /* Grid */
        .ecom-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 30px;
        }

        /* Card */
        .ecom-card {
          background: white; border-radius: 16px; overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          transition: 0.3s; position: relative; group: 1;
        }
        .ecom-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.08); }

        .ecom-card-img {
          height: 200px;
          display: flex; align-items: center; justify-content: center;
          font-size: 80px; background: #f9fafb; transition: 0.3s;
        }
        .ecom-card:hover .ecom-card-img { transform: scale(1.05); }

        .ecom-card-body { padding: 20px; }
        .ecom-card-cat { font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; }
        .ecom-card-name { font-size: 16px; font-weight: 600; margin: 4px 0 12px 0; color: #111827; }
        .ecom-card-footer { display: flex; justify-content: space-between; align-items: center; }
        .ecom-price { font-size: 18px; font-weight: 700; color: #059669; }
        
        .ecom-add-btn {
          width: 32px; height: 32px; border-radius: 50%; background: #e5e7eb; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: 0.2s;
        }
        .ecom-card:hover .ecom-add-btn { background: #111827; color: white; }

        /* Quick View Overlay */
        .ecom-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 200px;
          background: rgba(0,0,0,0.1); opacity: 0; transition: 0.3s;
          display: flex; align-items: center; justify-content: center;
        }
        .ecom-card:hover .ecom-overlay { opacity: 1; }
        .ecom-quick-view {
          padding: 8px 16px; background: white; border-radius: 20px; font-size: 12px; font-weight: 600;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); transform: translateY(10px); transition: 0.3s;
        }
        .ecom-card:hover .ecom-quick-view { transform: translateY(0); }

        @media(max-width: 768px) {
          .ecom-container { flex-direction: column; }
          .ecom-sidebar { width: 100%; height: auto; padding: 20px; border-right: none; border-bottom: 1px solid #e5e7eb; }
        }
      `}</style>

      <div className="ecom-container">
        <aside className="ecom-sidebar">
          <div className="ecom-title">Shop</div>
          
          <div style={{ marginBottom: '30px' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px', color: '#9ca3af' }}>Categories</div>
            {['All', 'Shoes', 'Accessories', 'Clothing', 'Electronics'].map(cat => (
              <button 
                key={cat} 
                className={`ecom-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div style={{ padding: '20px', background: '#f0fdf4', borderRadius: '12px', color: '#15803d' }}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Summer Sale</span>
            <p style={{ fontSize: '12px', marginTop: '4px' }}>Up to 50% off select items.</p>
          </div>
        </aside>

        <main className="ecom-main">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700' }}>{filter} Products</h2>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Showing {filteredProducts.length} results</div>
          </div>

          <div className="ecom-grid">
            {filteredProducts.map(p => (
              <div key={p.id} className="ecom-card">
                <div className="ecom-card-img">
                  {p.img}
                  <div className="ecom-overlay">
                    <div className="ecom-quick-view">Quick View</div>
                  </div>
                </div>
                <div className="ecom-card-body">
                  <div className="ecom-card-cat">{p.category}</div>
                  <div className="ecom-card-name">{p.name}</div>
                  <div className="ecom-card-footer">
                    <div className="ecom-price">${p.price}</div>
                    <button className="ecom-add-btn">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
