import React, { useState } from 'react';
import LoginView from './views/LoginView';
import JournalInputView from './views/JournalInputView';
import DashboardView from './views/DashboardView';
import HistoryView from './views/HistoryView';
import { mockHistoryLog, mockWeeklyData } from './services/MockData';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('journal');
  const [historyList, setHistoryList] = useState(mockHistoryLog);
  const [chartData, setChartData] = useState(mockWeeklyData);
  
  const [usersList, setUsersList] = useState([
    { username: 'admin', password: 'mindlog2026' }
  ]);

  const handleAddNewEntry = (newEntry) => {
    mockHistoryLog.unshift(newEntry);
    setHistoryList([...mockHistoryLog]);
    
    const updatedChartData = chartData.map(item => {
      if (item.day === "Thu") {
        return { ...item, moodScore: 7, stressLevel: 35 };
      }
      return item;
    });
    setChartData(updatedChartData);
    setActiveTab('history'); 
  };

  const handleRegisterUser = (newUser) => {
    setUsersList([...usersList, newUser]);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <LoginView 
          usersList={usersList} 
          onRegisterUser={handleRegisterUser} 
          onLoginSuccess={() => setIsAuthenticated(true)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 antialiased flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <span className="text-xl font-bold text-indigo-600 flex items-center gap-2 hover:opacity-80 cursor-pointer transition-opacity">
          🧠 MindLog AI Module
        </span>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="bg-slate-100 hover:bg-slate-200 text-slate-600 border-none px-4 py-2 rounded-lg cursor-pointer text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95"
        >
          Logout 🚪
        </button>
      </header>

      {/* Navigation Menu Controls with Micro-interactions */}
      <div className="flex bg-slate-100/80 p-1.5 rounded-xl gap-1 items-center justify-center mt-24 mb-6 max-w-lg mx-auto shadow-inner border border-slate-200/50">
        <button 
          onClick={() => setActiveTab('journal')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer border-none
            ${activeTab === 'journal' 
              ? 'bg-white text-indigo-600 shadow-sm transform scale-102' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
        >
          📝 New Journal Entry
        </button>
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer border-none
            ${activeTab === 'dashboard' 
              ? 'bg-white text-indigo-600 shadow-sm transform scale-102' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
        >
          📊 Weekly Dashboard
        </button>
        <button 
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer border-none
            ${activeTab === 'history' 
              ? 'bg-white text-indigo-600 shadow-sm transform scale-102' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
        >
          ⏳ Journal History Log
        </button>
      </div>

      <main className="p-8 w-full flex justify-center">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md w-full max-w-4xl min-h-[60vh] transition-all duration-300 hover:shadow-lg">
          {activeTab === 'journal' && <JournalInputView onAddEntry={handleAddNewEntry} />}
          {activeTab === 'dashboard' && <DashboardView chartData={chartData} />}
          {activeTab === 'history' && <HistoryView />}
        </div>
      </main>
    </div>
  );
}