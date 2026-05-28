import React, { useState } from 'react';

export default function JournalForm({ onAnalyze, isLoading }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) onAnalyze(text);
  };

  return (
    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-xs">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        How are you feeling today?
      </label>
      <textarea
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start writing your thoughts..."
        className="w-full p-4 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
      ></textarea>
      <button
        type="submit"
        disabled={isLoading || !text.trim()}
        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl disabled:bg-gray-300 transition-colors text-sm shadow-xs flex items-center justify-center gap-2"
      >
        {isLoading ? 'Running Analysis...' : 'Analyze Entry ✨'}
      </button>
    </div>
  );
}