/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  RECIPE & COOKING APP (Gemini Version)                    ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Interactive Checklists + Nutrition Charts
 */

'use client';

import { useState } from 'react';

export function RecipeCookingAppDemoGemini() {
  const [ingredients, setIngredients] = useState([
    { id: 1, text: '2 large eggs', checked: false },
    { id: 2, text: '1/2 cup avocado oil', checked: false },
    { id: 3, text: '1 cup almond flour', checked: false },
    { id: 4, text: '1 tsp baking powder', checked: false },
    { id: 5, text: 'Pinch of sea salt', checked: false },
  ]);

  const toggleIngredient = (id: number) => {
    setIngredients(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;700&display=swap');

        .recipe-app {
          --r-bg: #fffbf7;
          --r-accent: #d97706;
          --r-text: #292524;
          --r-sec: #78716c;
          
          font-family: 'Lato', sans-serif;
          background: var(--r-bg);
          color: var(--r-text);
          min-height: 100vh;
          display: flex; justify-content: center;
        }
        
        .recipe-container {
          width: 100%; max-width: 800px;
          background: white;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          margin: 40px auto;
          border-radius: 24px; overflow: hidden;
        }

        .r-hero {
          position: relative; height: 400px;
        }
        .r-hero-img { width: 100%; height: 100%; object-fit: cover; }
        .r-back-btn {
          position: absolute; top: 20px; left: 20px; width: 40px; height: 40px; background: white; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .r-save-btn {
          position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; background: white; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); color: var(--r-accent);
        }

        .r-content { padding: 40px 50px; }
        .r-meta { display: flex; gap: 20px; margin-bottom: 20px; }
        .r-tag {
          padding: 6px 12px; border-radius: 20px; background: #fff7ed; color: var(--r-accent); font-weight: 700; font-size: 12px; text-transform: uppercase;
        }
        
        .r-title { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 700; line-height: 1.1; margin-bottom: 12px; }
        .r-desc { color: var(--r-sec); line-height: 1.6; margin-bottom: 30px; }
        
        .r-stats {
          display: flex; justify-content: space-between; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 20px 0; margin-bottom: 40px;
        }
        .r-stat-item { text-align: center; flex: 1; border-right: 1px solid #eee; }
        .r-stat-item:last-child { border: none; }
        .r-stat-val { font-weight: 700; font-size: 18px; display: block; }
        .r-stat-label { font-size: 12px; color: var(--r-sec); text-transform: uppercase; letter-spacing: 1px; }

        .r-section-title { font-family: 'Playfair Display', serif; font-size: 28px; margin-bottom: 20px; }
        
        .r-ing-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; }
        .r-ing-item {
          display: flex; align-items: center; padding: 12px; border-radius: 12px; transition: 0.2s; cursor: pointer; border: 1px solid transparent;
        }
        .r-ing-item:hover { background: #fafaf9; }
        .r-ing-item.checked { background: #f0fdf4; border-color: #bbf7d0; }
        .r-ing-item.checked .r-ing-text { text-decoration: line-through; color: #86efac; }
        
        .r-checkbox {
          width: 24px; height: 24px; border: 2px solid #ddd; border-radius: 6px; margin-right: 16px;
          display: flex; align-items: center; justify-content: center; transition: 0.2s;
        }
        .r-ing-item.checked .r-checkbox { background: #22c55e; border-color: #22c55e; color: white; }
        
        .r-nutrition {
          background: #1c1917; color: white; border-radius: 16px; padding: 30px; display: flex; justify-content: space-between; align-items: center;
        }
        .nut-circle {
          width: 70px; height: 70px; border-radius: 50%; border: 4px solid var(--r-accent);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .nut-val { font-weight: 700; font-size: 18px; }
        .nut-label { font-size: 10px; opacity: 0.8; }

        .cook-mode-btn {
           width: 100%; padding: 18px; background: var(--r-accent); color: white; font-weight: 700; border: none; border-radius: 16px; font-size: 16px; cursor: pointer; margin-top: 20px; transition: 0.2s; box-shadow: 0 10px 20px rgba(217, 119, 6, 0.3);
        }
        .cook-mode-btn:hover { transform: translateY(-2px); box-shadow: 0 15px 30px rgba(217, 119, 6, 0.4); }

      `}</style>
      
      <div className="recipe-app">
        <div className="recipe-container">
          <div className="r-hero">
            <img src="https://picsum.photos/seed/pancakes/800/600" className="r-hero-img" alt="Pancakes" />
            <div className="r-back-btn">←</div>
            <div className="r-save-btn">♥</div>
          </div>

          <div className="r-content">
            <div className="r-meta">
              <span className="r-tag">Breakfast</span>
              <span className="r-tag">Gluten-Free</span>
            </div>

            <h1 className="r-title">Fluffy Almond Flour Pancakes</h1>
            <p className="r-desc">
              These pancakes are incredibly light, fluffy, and naturally gluten-free. Made with almond flour and lightly sweetened with maple syrup, they're the perfect healthy start to your day.
            </p>

            <div className="r-stats">
               <div className="r-stat-item">
                 <span className="r-stat-val">15 min</span>
                 <span className="r-stat-label">Prep</span>
               </div>
               <div className="r-stat-item">
                 <span className="r-stat-val">10 min</span>
                 <span className="r-stat-label">Cook</span>
               </div>
               <div className="r-stat-item">
                 <span className="r-stat-val">Easy</span>
                 <span className="r-stat-label">Level</span>
               </div>
               <div className="r-stat-item">
                 <span className="r-stat-val">2</span>
                 <span className="r-stat-label">Servings</span>
               </div>
            </div>

            <h2 className="r-section-title">Ingredients</h2>
            <div className="r-ing-list">
              {ingredients.map(ing => (
                <div key={ing.id} className={`r-ing-item ${ing.checked ? 'checked' : ''}`} onClick={() => toggleIngredient(ing.id)}>
                   <div className="r-checkbox">
                     {ing.checked && '✓'}
                   </div>
                   <span className="r-ing-text">{ing.text}</span>
                </div>
              ))}
            </div>

            <h2 className="r-section-title">Nutrition</h2>
            <div className="r-nutrition">
               <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>Calories</h4>
                  <p style={{ fontSize: '14px', color: '#a8a29e' }}>Per serving</p>
               </div>
               <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="nut-circle">
                    <span className="nut-val">320</span>
                    <span className="nut-label">Kcal</span>
                  </div>
                  <div className="nut-circle" style={{ borderColor: '#22c55e' }}>
                    <span className="nut-val">12g</span>
                    <span className="nut-label">Protein</span>
                  </div>
                  <div className="nut-circle" style={{ borderColor: '#3b82f6' }}>
                    <span className="nut-val">8g</span>
                    <span className="nut-label">Carbs</span>
                  </div>
               </div>
            </div>

            <button className="cook-mode-btn">Start Cooking Mode 👨‍🍳</button>
          </div>
        </div>
      </div>
    </>
  );
}
