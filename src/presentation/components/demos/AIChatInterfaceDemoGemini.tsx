/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  AI CHAT INTERFACE (Gemini Version)                       ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Streaming Effect + Code Blocks
 */

'use client';

import { useEffect, useRef, useState } from 'react';

export function AIChatInterfaceDemoGemini() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: 'Hello! I am your AI assistant. How can I help you code today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMsg = { id: Date.now(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response stream
    setTimeout(() => {
      const aiResponseText = "Here's a simple React component example for you:\n\n```jsx\nfunction Button() {\n  return <button>Click me</button>;\n}\n```\n\nIs there anything else you'd like to know?";
      let currentText = '';
      const aiMsgId = Date.now() + 1;
      
      // Placeholder for streaming
      setMessages(prev => [...prev, { id: aiMsgId, role: 'ai', text: '' }]);

      let i = 0;
      const interval = setInterval(() => {
        currentText += aiResponseText.charAt(i);
        setMessages(prev => prev.map(m => m.id === aiMsgId ? { ...m, text: currentText } : m));
        i++;
        if (i >= aiResponseText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);
    }, 1000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap');

        .ai-chat-app {
          --ai-bg: #343541;
          --ai-panel: #202123;
          --ai-user: #343541; /* user bubble transparent/dark */
          --ai-bot: #444654;
          --ai-text: #ececf1;
          --ai-accent: #10a37f;
          
          font-family: 'Inter', sans-serif;
          background: var(--ai-bg);
          color: var(--ai-text);
          min-height: 100vh;
          display: flex;
        }

        /* Sidebar */
        .ai-sidebar {
          width: 260px; background: var(--ai-panel); display: flex; flex-direction: column; padding: 10px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .ai-new-chat {
          padding: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px;
          display: flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.2s; font-size: 14px;
        }
        .ai-new-chat:hover { background: rgba(255,255,255,0.05); }
        
        .ai-history { flex: 1; overflow-y: auto; margin-top: 20px; }
        .ai-history-item {
          padding: 12px; border-radius: 6px; cursor: pointer; font-size: 14px;
          display: flex; align-items: center; gap: 10px;
          color: #c5c5d2; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .ai-history-item:hover { background: #2a2b32; }
        .ai-history-item.active { background: #343541; }

        /* Main Chat */
        .ai-main { flex: 1; display: flex; flex-direction: column; position: relative; }
        .ai-chat-area { flex: 1; overflow-y: auto; padding-bottom: 120px; }
        
        .ai-message {
          padding: 24px 0; border-bottom: 1px solid rgba(0,0,0,0.1);
          display: flex; justify-content: center;
        }
        .ai-message.ai { background: var(--ai-bot); border-bottom: 1px solid rgba(0,0,0,0.1); }
        .ai-message-content {
          width: 100%; max-width: 768px; display: flex; gap: 20px; padding: 0 20px;
        }
        
        .ai-avatar {
          width: 30px; height: 30px; border-radius: 2px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .ai-avatar.ai { background: var(--ai-accent); color: white; border-radius: 4px; }
        .ai-avatar.user { background: #5436da; color: white; border-radius: 4px; }
        
        .ai-text { font-size: 16px; line-height: 1.6; white-space: pre-wrap; font-weight: 400; }
        .ai-text code {
          font-family: 'JetBrains Mono', monospace; background: black; padding: 2px 4px; border-radius: 4px; font-size: 14px;
        }
        .ai-code-block {
          background: #000; border-radius: 6px; margin: 10px 0; overflow: hidden; font-family: 'JetBrains Mono', monospace;
        }
        .ai-code-header {
          background: #343541; padding: 6px 12px; font-size: 12px; color: #d9d9e3; border-bottom: 1px solid #565869;
          display: flex; justify-content: space-between;
        }
        .ai-code-content { padding: 12px; font-size: 14px; color: #e0e0e0; overflow-x: auto; }

        /* Input Area */
        .ai-input-container {
          position: absolute; bottom: 0; left: 0; width: 100%;
          background: linear-gradient(to bottom, transparent, var(--ai-bg) 20%);
          padding: 40px 0; display: flex; justify-content: center;
        }
        .ai-input-box {
          width: 100%; max-width: 768px; position: relative;
          background: #40414f; border-radius: 12px; padding: 12px 16px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.1);
        }
        .ai-input {
          width: 100%; background: transparent; border: none; color: white; font-size: 16px; font-family: inherit; resize: none; outline: none; max-height: 200px;
        }
        .ai-send-btn {
          position: absolute; right: 12px; bottom: 12px;
          background: var(--ai-accent); color: white; border: none; padding: 6px 10px; border-radius: 6px; cursor: pointer; transition: 0.2s;
        }
        .ai-send-btn:hover { opacity: 0.8; }
        .ai-send-btn:disabled { background: #565869; cursor: not-allowed; }

        .cursor { display: inline-block; width: 8px; height: 16px; background: #e0e0e0; animation: blink 1s step-end infinite; vertical-align: middle; margin-left: 2px; }
        @keyframes blink { 50% { opacity: 0; } }

      `}</style>
      
      <div className="ai-chat-app">
        <aside className="ai-sidebar">
          <div className="ai-new-chat">
            <span>+</span> New chat
          </div>

          <div style={{ marginTop: '20px', fontSize: '12px', paddingLeft: '12px', color: '#8e8ea0' }}>Today</div>
          <div className="ai-history">
             <div className="ai-history-item active">💬 React Component Help</div>
             <div className="ai-history-item">💬 Python Script Debug</div>
             <div className="ai-history-item">💬 UI Design Ideas</div>
          </div>
          
          <div style={{ marginTop: 'auto', padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
             <div className="ai-history-item">👤 Upgrade to Plus</div>
             <div className="ai-history-item">⚙️ Settings</div>
          </div>
        </aside>

        <main className="ai-main">
          <div className="ai-chat-area">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message ${msg.role}`}>
                <div className="ai-message-content">
                  <div className={`ai-avatar ${msg.role}`}>
                    {msg.role === 'ai' ? '🤖' : '👤'}
                  </div>
                  <div className="ai-text">
                    {msg.text.split('```').map((part, index) => {
                      if (index % 2 === 1) { // Code block
                        const lines = part.trim().split('\n');
                        const lang = lines[0];
                        const code = lines.slice(1).join('\n');
                        return (
                          <div key={index} className="ai-code-block">
                             <div className="ai-code-header">
                               <span>{lang}</span>
                               <span>Copy code</span>
                             </div>
                             <div className="ai-code-content">{code}</div>
                          </div>
                        );
                      }
                      return <span key={index}>{part}</span>;
                    })}
                    {msg.role === 'ai' && msg.id === messages[messages.length - 1].id && isTyping && <span className="cursor"></span>}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-input-container">
             <div className="ai-input-box">
               <textarea 
                  className="ai-input" 
                  rows={1} 
                  placeholder="Send a message..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
               />
               <button className="ai-send-btn" onClick={handleSend} disabled={!input.trim() || isTyping}>
                 ➤
               </button>
             </div>
             <div style={{ position: 'absolute', bottom: '10px', fontSize: '12px', color: '#9ca3af' }}>
               ChatGPT can make mistakes. Consider checking important information.
             </div>
          </div>
        </main>
      </div>
    </>
  );
}
