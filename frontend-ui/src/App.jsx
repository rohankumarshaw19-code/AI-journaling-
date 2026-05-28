import React, { useState } from 'react';
import JournalInputView from './views/JournalInputView';

function DashboardViewPlaceholder() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-950">📊 Weekly Dashboard</h1>
      <p className="text-sm text-gray-500">Analytics visualization panels are loading here.</p>
      <div className="p-8 border border-dashed rounded-2xl bg-gray-50 text-center text-gray-400">
        [Phase 3 Charting Components Coming Next]
      </div>
    </div>
  );
}

function HistoryViewPlaceholder() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-950">⏳ Journal History Log</h1>
      <p className="text-sm text-gray-500">Your historical logs and key filtering systems are loading here.</p>
      <div className="p-8 border border-dashed rounded-2xl bg-gray-50 text-center text-gray-400">
        [Phase 4 Historic Entry Components Coming Next]
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('journal');

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 antialiased flex flex-col">
      
      {/* Navbar Header Layout */}
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-xs">
        <span className="text-xl font-bold text-indigo-600 flex items-center gap-2">
          🧠 MindLog <span className="text-xs font-normal bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-100">AI Module</span>
        </span>
        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
          ME
        </div>
      </header>

      <div className="flex pt-16 flex-1">
        
        {/* Sidebar Frame Controller */}
        <aside className="fixed top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 p-4">
          <ul className="space-y-2">
            {[
              { id: 'journal', label: 'New Journal Entry', icon: '📝' },
              { id: 'dashboard', label: 'Weekly Dashboard', icon: '📊' },
              { id: 'history', label: 'Journal History Log', icon: '⏳' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                    activeTab === item.id
                      ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-3 text-base">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* View Main Viewport Canvas */}
        <main className="ml-64 p-8 w-full min-h-[calc(100vh-4rem)]">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm min-h-[75vh]">
            {activeTab === 'journal' && <JournalInputView />}
            {activeTab === 'dashboard' && <DashboardViewPlaceholder />}
            {activeTab === 'history' && <HistoryViewPlaceholder />}
          </div>
        </main>

      </div>
    </div>
  );
}