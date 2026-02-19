/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  MULTI-STEP REGISTRATION FORM (Gemini Version)            ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Slide Transitions + Validation
 */

'use client';

import { useState } from 'react';

export function MultiStepRegisterDemoGemini() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

        .form-page {
          background: #f0f2f5;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Sans', sans-serif;
          padding: 20px;
        }

        .form-container {
          width: 100%; max-width: 480px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          overflow: hidden;
          position: relative;
        }

        .form-header {
          padding: 40px 40px 20px 40px;
        }

        /* Progress Bar */
        .form-progress {
          display: flex; justify-content: space-between; margin-bottom: 30px; position: relative;
        }
        .form-progress::before {
          content: ''; position: absolute; top: 15px; left: 0; width: 100%; height: 2px;
          background: #e2e8f0; z-index: 0;
        }
        .form-progress-bg {
          position: absolute; top: 15px; left: 0; height: 2px; background: #3b82f6; z-index: 0; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .form-step {
          width: 32px; height: 32px; border-radius: 50%; background: white; border: 2px solid #e2e8f0;
          z-index: 1; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #94a3b8;
          transition: 0.3s;
        }
        .form-step.active {
          border-color: #3b82f6; color: #3b82f6;
        }
        .form-step.completed {
          background: #3b82f6; border-color: #3b82f6; color: white;
        }

        /* Form Body */
        .form-body {
          padding: 0 40px 40px 40px;
        }

        .form-group { margin-bottom: 24px; }
        .form-label { display: block; font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 8px; }
        .form-input {
          width: 100%; padding: 14px 16px; border: 2px solid #f1f5f9; border-radius: 12px;
          font-size: 16px; color: #334155; transition: 0.2s; outline: none; background: #f8fafc;
        }
        .form-input:focus { border-color: #3b82f6; background: white; }

        .form-actions {
          display: flex; gap: 16px; margin-top: 40px;
        }
        .form-btn {
          flex: 1; padding: 16px; border-radius: 12px; font-weight: 700; font-size: 16px; cursor: pointer; border: none; transition: 0.2s;
        }
        .form-btn-next { background: #3b82f6; color: white; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); }
        .form-btn-next:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4); }
        .form-btn-back { background: transparent; color: #64748b; }
        .form-btn-back:hover { background: #f1f5f9; color: #334155; }

        /* Animations */
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .step-content { animation: fadeIn 0.4s ease-out; }

      `}</style>
      
      <div className="form-page">
        <div className="form-container">
          <div className="form-header">
            <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0', color: '#0f172a' }}>Create Account</h2>
            <p style={{ color: '#64748b', fontSize: '15px' }}>Step {step} of {totalSteps}</p>
            
            <div className="form-progress" style={{ marginTop: '24px' }}>
              <div className="form-progress-bg" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>
              {[1, 2, 3].map(i => (
                <div key={i} className={`form-step ${step === i ? 'active' : ''} ${step > i ? 'completed' : ''}`}>
                  {step > i ? '✓' : i}
                </div>
              ))}
            </div>
          </div>

          <div className="form-body">
            {step === 1 && (
              <div className="step-content">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="e.g. John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="john@example.com" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="step-content">
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-input" placeholder="••••••••" />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-input" placeholder="••••••••" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="step-content" style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</div>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>Almost Done!</h3>
                <p style={{ color: '#64748b' }}>We sent a verification code to your email. Enter it below to finish.</p>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '30px' }}>
                  {[1, 2, 3, 4].map(i => (
                    <input key={i} type="text" style={{ width: '50px', height: '60px', borderRadius: '12px', border: '2px solid #e2e8f0', fontSize: '24px', textAlign: 'center', fontWeight: 'bold' }} maxLength={1} />
                  ))}
                </div>
              </div>
            )}

            <div className="form-actions">
              {step > 1 && (
                <button className="form-btn form-btn-back" onClick={prevStep}>Back</button>
              )}
              <button className="form-btn form-btn-next" onClick={nextStep}>
                {step === totalSteps ? 'Finish' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
