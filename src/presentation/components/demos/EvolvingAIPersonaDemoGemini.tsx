'use client';

import React, { useEffect, useState } from 'react';

// Evolving AI Persona Platform - Gemini 3.1 Pro Implementation
// Personal, intelligent interface that talks back and adapts visually.

export const EvolvingAIPersonaDemoGemini: React.FC = () => {
  type AIState = 'idle' | 'listening' | 'processing' | 'speaking';
  
  const [systemState, setSystemState] = useState<AIState>('idle');
  const [messages, setMessages] = useState<{ id: number, text: string, sender: 'ai' | 'user' }[]>([]);
  const [currentTypingText, setCurrentTypingText] = useState('');
  
  // Scenarios to drive the "conversation"
  const conversationFlow = [
    { trigger: null, response: "I've been waiting for you to connect." },
    { trigger: "Who are you?", response: "I am an adaptive interface. I change based on how you interact with me. Watch the environment." },
    { trigger: "What can you do?", response: "I synthesize data, predict patterns, and restructure this space to fit your cognitive needs." },
    { trigger: "Show me.", response: "Notice how the background shifts? How my responses float. We don't need grids or menus anymore." }
  ];

  const [flowIndex, setFlowIndex] = useState(0);

  // Initial greeting
  useEffect(() => {
    setTimeout(() => {
      triggerAIResponse(conversationFlow[0].response);
    }, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const triggerAIResponse = (text: string) => {
    setSystemState('processing');
    
    // Fake thinking time
    setTimeout(() => {
      setSystemState('speaking');
      let i = 0;
      setCurrentTypingText('');
      
      const typeWriter = setInterval(() => {
        if (i < text.length) {
          setCurrentTypingText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typeWriter);
          setMessages(prev => [...prev, { id: Date.now(), text, sender: 'ai' }]);
          setCurrentTypingText('');
          setSystemState('idle');
        }
      }, 40);
    }, 800);
  };

  const handleUserClick = (text: string) => {
    if (systemState === 'speaking' || systemState === 'processing') return;

    setSystemState('listening');
    setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user' }]);
    
    // Find next response
    const nextStep = flowIndex + 1;
    if (nextStep < conversationFlow.length) {
      setFlowIndex(nextStep);
      triggerAIResponse(conversationFlow[nextStep].response);
    } else {
      setTimeout(() => {
        triggerAIResponse("Our connection is deepening. The interface will now mold to your preferences automatically.");
      }, 500);
    }
  };

  // Determine visual themes based on state
  const getThemeVars = () => {
    switch(systemState) {
      case 'idle':
        return {
          '--bg-color': '#08080a',
          '--glow-color': 'rgba(100, 100, 255, 0.1)',
          '--orb-size': '200px',
          '--orb-blur': '100px'
        };
      case 'listening':
        return {
          '--bg-color': '#050a10',
          '--glow-color': 'rgba(0, 255, 200, 0.2)',
          '--orb-size': '300px',
          '--orb-blur': '80px'
        };
      case 'processing':
        return {
          '--bg-color': '#100510',
          '--glow-color': 'rgba(200, 50, 255, 0.3)',
          '--orb-size': '150px',
          '--orb-blur': '50px'
        };
      case 'speaking':
        return {
          '--bg-color': '#0a0a0d',
          '--glow-color': 'rgba(255, 255, 255, 0.15)',
          '--orb-size': '400px',
          '--orb-blur': '120px'
        };
    }
  };

  return (
    <div className="persona-container" style={getThemeVars() as React.CSSProperties}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');

        .persona-container {
          position: relative;
          min-height: 100vh;
          background: var(--bg-color);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          transition: background 2s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* --- Dynamic Neural Orb (Background) --- */
        .neural-orb {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: var(--orb-size);
          height: var(--orb-size);
          background: var(--glow-color);
          filter: blur(var(--orb-blur));
          border-radius: 50%;
          transition: all 1.5s cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none;
          z-index: 0;
        }

        .neural-orb::after {
          content: '';
          position: absolute; inset: -50%;
          background: conic-gradient(from 0deg, transparent, var(--glow-color), transparent);
          animation: spin 10s linear infinite;
          border-radius: 50%;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* --- Conversational UI Layout --- */
        .chat-space {
          position: relative;
          z-index: 10;
          width: 90%;
          max-width: 800px;
          height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 2rem;
        }

        /* --- Message Modules --- */
        .msg-module {
          padding: 1.5rem 2.5rem;
          border-radius: 30px;
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.4;
          letter-spacing: 0.02em;
          max-width: 80%;
          animation: float-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .msg-ai {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .msg-user {
          align-self: flex-end;
          color: rgba(255, 255, 255, 0.5);
          text-align: right;
          font-size: 1.2rem;
        }

        /* The Currently Typing Message */
        .msg-typing {
          align-self: flex-start;
          font-size: 1.8rem;
          font-weight: 400;
          margin-bottom: 2rem;
        }
        
        .cursor-blink {
          display: inline-block;
          width: 8px; height: 1.8rem;
          background: #fff;
          margin-left: 5px;
          vertical-align: middle;
          animation: blink 1s infinite;
        }

        @keyframes float-in {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* --- Interactive Choices (Replacing Menus) --- */
        .interaction-zone {
          position: relative;
          z-index: 10;
          margin-top: 4rem;
          display: flex;
          gap: 1.5rem;
          opacity: 1;
          transition: opacity 0.5s;
        }

        .interaction-zone.disabled {
          opacity: 0;
          pointer-events: none;
        }

        .choice-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          padding: 1rem 2rem;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          backdrop-filter: blur(5px);
        }

        .choice-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        /* Status Indicator */
        .sys-status {
          position: fixed;
          top: 2rem; right: 2rem;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          display: flex; align-items: center; gap: 10px;
        }
        
        .status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

      `}</style>

      <div className="neural-orb" />

      <div className="sys-status">
        SYSTEM: {systemState} <span className={`status-dot ${systemState !== 'idle' ? 'cursor-blink' : ''}`}></span>
      </div>

      <div className="chat-space">
        {/* Only show the last 3 messages to keep the UI minimal */}
        {messages.slice(-3).map((msg) => (
          <div key={msg.id} className={`msg-module ${msg.sender === 'ai' ? 'msg-ai' : 'msg-user'}`}>
            {msg.text}
          </div>
        ))}
        
        {/* Active typing area */}
        {currentTypingText && (
          <div className="msg-module msg-ai" style={{ border: 'none', background: 'transparent' }}>
            {currentTypingText}
            <span className="cursor-blink"></span>
          </div>
        )}
      </div>

      <div className={`interaction-zone ${systemState !== 'idle' ? 'disabled' : ''}`}>
        {flowIndex + 1 < conversationFlow.length && (
          <button 
            className="choice-btn"
            onClick={() => handleUserClick(conversationFlow[flowIndex + 1].trigger as string)}
          >
            {conversationFlow[flowIndex + 1].trigger}
          </button>
        )}
        <button 
          className="choice-btn"
          onClick={() => handleUserClick("Who controls you?")}
        >
          Who controls you?
        </button>
      </div>

    </div>
  );
};

export default EvolvingAIPersonaDemoGemini;
