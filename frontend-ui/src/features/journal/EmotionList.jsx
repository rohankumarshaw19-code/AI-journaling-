import React from 'react';

export default function EmotionList({ emotions }) {
  return (
    <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-xs">
      <h3 className="text-sm font-bold text-gray-800 mb-4">📈 Intensity Weights</h3>
      {emotions.map((item, idx) => {
        const percentage = Math.round(item.score * 100);
        return (
          <div key={idx} className="mb-3.5 last:mb-0">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium text-gray-700 capitalize">{item.emotion}</span>
              <span className="font-semibold text-gray-500">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}