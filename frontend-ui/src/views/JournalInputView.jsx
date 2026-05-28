import React, { useState } from 'react';

export default function JournalInputView({ onAddEntry }) {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!text.trim() || isAnalyzing) return;

    setIsAnalyzing(true);

    // Simulate an AI processing micro-interaction lag
    setTimeout(() => {
      const newEntryPayload = {
        id: Date.now(),
        date: "May 29, 2026",
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        rawText: text,
        summary: "AI analysis complete: User successfully deployed cross-view reactive state streams.",
        moodType: "positive",
        emotions: ["Productive", "Focused"]
      };

      if (onAddEntry) {
        onAddEntry(newEntryPayload);
      }
      
      setText('');
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-4 font-sans text-center">
      {/* Icon and Title Set */}
      <div className="text-5xl mb-3 cursor-default">📝</div>
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Journal Analyzer</h1>
      <p className="text-sm text-slate-500 mb-8 max-w-md">
        Modular architecture parsing decoupled emotional attributes.
      </p>

      {/* Input Core Canvas Container */}
      <div className="w-full max-w-xl flex flex-col items-center gap-4">
        <textarea
          value={text}
          disabled={isAnalyzing}
          onChange={(e) => setText(e.target.value)}
          placeholder={isAnalyzing ? "AI is processing your emotional metrics..." : "Start writing your thoughts..."}
          className={`w-full h-44 p-4 rounded-xl border text-base font-sans resize-none box-border outline-none transition-all duration-200 shadow-sm
            ${isAnalyzing 
              ? 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed' 
              : 'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
            }`}
        />
        
        <button
          onClick={handleAnalyze}
          disabled={!text.trim() || isAnalyzing}
          className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 transform box-border shadow-md
            ${!text.trim() || isAnalyzing
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed scale-100'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-98 hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-0.5'
            }`}
        >
          {isAnalyzing ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Analyzing Sentiment...
            </span>
          ) : (
            'Analyze Entry ✨'
          )}
        </button>
      </div>
    </div>
  );
}