import React from 'react';

export default function InsightCard({ summary }) {
  return (
    <div className="bg-indigo-50/60 border border-indigo-100 p-5 rounded-2xl">
      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1.5 flex items-center gap-1.5">
        🤖 AI Mental Health Insight
      </h4>
      <p className="text-sm text-gray-700 font-medium leading-relaxed">
        "{summary}"
      </p>
    </div>
  );
}