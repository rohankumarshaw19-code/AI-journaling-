import React from 'react';

export default function TriggerMetrics({ triggers, keywords }) {
  return (
    <div className="space-y-4">
      {/* Trigger Category Section */}
      <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-xs">
        <h3 className="text-sm font-bold text-gray-800 mb-3">🎯 Trigger Vector</h3>
        <div className="flex flex-wrap gap-2">
          {triggers.map((trig, idx) => (
            <span key={idx} className="bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-red-100 capitalize">
              🚨 {trig}
            </span>
          ))}
        </div>
      </div>

      {/* Keyword Cloud Section */}
      <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-xs">
        <h3 className="text-sm font-bold text-gray-800 mb-3">🔑 Extracted Keywords</h3>
        <div className="flex flex-wrap gap-1.5">
          {keywords.map((kw, idx) => (
            <span key={idx} className="bg-slate-100 text-gray-700 text-xs px-2.5 py-1 rounded-md">
              #{kw.keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}