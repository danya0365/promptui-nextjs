/**
 * ╔════════════════════════════════════════════════════════════╗
 * ║  KANBAN BOARD (Gemini Version)                            ║
 * ║  Gemini 3 Pro Implementation                              ║
 * ╚════════════════════════════════════════════════════════════╝
 *
 * Scoped Pure CSS + Drag & Drop Simulation
 */

'use client';

import { useState } from 'react';

const INITIAL_TASKS = [
  { id: 1, title: 'Design System', status: 'todo', priority: 'high', assignee: 'JD' },
  { id: 2, title: 'API Integration', status: 'progress', priority: 'medium', assignee: 'MR' },
  { id: 3, title: 'Unit Tests', status: 'review', priority: 'low', assignee: 'JD' },
  { id: 4, title: 'Deploy to Prod', status: 'done', priority: 'urgent', assignee: 'EK' },
  { id: 5, title: 'User Research', status: 'todo', priority: 'medium', assignee: 'EK' },
];

export function KanbanBoardDemoGemini() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const moveTask = (id: number, newStatus: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .kanban-board {
          --k-bg: #f3f4f6;
          --k-col: #ebecf0;
          --k-card: #ffffff;
          --k-text: #172b4d;
          
          font-family: 'Inter', sans-serif;
          background: var(--k-bg);
          min-height: 100vh;
          padding: 20px;
          color: var(--k-text);
          overflow-x: auto;
        }

        .kanban-header {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;
        }
        .kanban-h1 { font-size: 24px; font-weight: 700; color: #111827; }
        .kanban-avatars { display: flex; }
        .kanban-avatar { 
          width: 32px; height: 32px; border-radius: 50%; background: #ddd; border: 2px solid white; 
          margin-left: -8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: #555;
        }

        .kanban-cols {
          display: flex; gap: 20px; align-items: flex-start;
          min-width: 100%;
        }

        .kanban-col {
          flex: 1; min-width: 280px; background: var(--k-col); border-radius: 12px; padding: 12px;
        }
        .kanban-col-header {
          font-weight: 600; font-size: 14px; color: #5e6c84; margin-bottom: 12px; padding: 0 4px;
          display: flex; justify-content: space-between;
        }

        .kanban-card {
          background: var(--k-card); border-radius: 8px; padding: 12px; margin-bottom: 8px;
          box-shadow: 0 1px 2px rgba(9, 30, 66, 0.25); cursor: grab; transition: 0.2s;
          border border: 1px solid transparent;
        }
        .kanban-card:hover { background: #fafbfc; border-color: #091e42; }
        .kanban-card:active { cursor: grabbing; transform: rotate(2deg); }

        .k-tag { font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; display: inline-block; }
        .k-tag.high { background: #ffedeb; color: #c9372c; }
        .k-tag.medium { background: #fff7d6; color: #b67906; }
        .k-tag.low { background: #e3fcef; color: #006644; }
        .k-tag.urgent { background: #ffe2dd; color: #de350b; border: 1px solid #de350b; }

        .k-card-title { font-size: 14px; font-weight: 500; margin-bottom: 12px; line-height: 1.4; color: #172b4d; }
        
        .k-card-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
        .k-card-id { font-size: 11px; color: #5e6c84; }
        .k-card-av { width: 24px; height: 24px; border-radius: 50%; background: #0052cc; color: white; display: flex; align-items: center; justify-content: center; font-size: 10px; }

      `}</style>
      
      <div className="kanban-board">
        <header className="kanban-header">
          <h1 className="kanban-h1">Sprint 24 Board</h1>
          <div className="kanban-avatars">
            <div className="kanban-avatar" style={{ background: '#ffab00' }}>EK</div>
            <div className="kanban-avatar" style={{ background: '#36b37e' }}>JD</div>
            <div className="kanban-avatar" style={{ background: '#0052cc', color: 'white' }}>MR</div>
            <div className="kanban-avatar" style={{ background: '#dfe1e6' }}>+2</div>
          </div>
        </header>

        <div className="kanban-cols">
          {['todo', 'progress', 'review', 'done'].map(status => (
            <div key={status} className="kanban-col">
              <div className="kanban-col-header">
                <span style={{ textTransform: 'uppercase' }}>{status}</span>
                <span>{tasks.filter(t => t.status === status).length}</span>
              </div>
              
              {tasks.filter(t => t.status === status).map(task => (
                <div key={task.id} className="kanban-card" onClick={() => moveTask(task.id, status === 'done' ? 'todo' : 'done')}>
                  <span className={`k-tag ${task.priority}`}>{task.priority}</span>
                  <div className="k-card-title">{task.title}</div>
                  <div className="k-card-footer">
                    <span className="k-card-id">#{task.id}</span>
                    <div className="k-card-av" style={{ background: task.assignee === 'JD' ? '#36b37e' : task.assignee === 'MR' ? '#0052cc' : '#ffab00' }}>
                      {task.assignee}
                    </div>
                  </div>
                </div>
              ))}
              
              <div 
                style={{ padding: '8px', color: '#5e6c84', fontSize: '14px', cursor: 'pointer', borderRadius: '4px' }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(9, 30, 66, 0.08)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                + Create issue
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
