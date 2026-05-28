import React, { useState } from 'react';
import { mockSingleAIResponse } from '../services/mockData';
import MoodBadge from '../components/MoodBadge';
import JournalForm from '../features/journal/JournalForm';
import InsightCard from '../features/journal/InsightCard';
import EmotionList from '../features/journal/EmotionList';
import TriggerMetrics from '../features/journal/TriggerMetrics';

export default function JournalInputView() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  const processJournalEntry = (typedText) => {
    setIsLoading(true);
    // Simulating the 1 second processing time from an AI model/database
    setTimeout(() => {
      setAiResult({ ...mockSingleAIResponse, text: typedText });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">📝 Journal Analyzer</h1>
        <p className="text-sm text-gray-400 mt-1">Modular architecture parsing decoupled emotional attributes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Column */}
        <JournalForm onAnalyze={processJournalEntry} isLoading={isLoading} />

        {/* Analytics Display Column */}
        <div className="lg:col-span-2 space-y-6">
          {aiResult && !isLoading && (
            <div className="space-y-6">
              {/* Polarities & Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border p-4 rounded-xl shadow-xs">
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Polarity Profile</p>
                  <MoodBadge moodType={aiResult.mood_type} />
                </div>
                <div className="bg-white border p-4 rounded-xl shadow-xs">
                  <p className="text-xs text-gray-400 font-semibold uppercase">Dominant Emotion</p>
                  <p className="text-base font-bold capitalize text-gray-800 mt-1">😨 {aiResult.dominant_emotion}</p>
                </div>
              </div>

              {/* Psychological Summary Card */}
              <InsightCard summary={aiResult.summary} />

              {/* Multi-Dimensional Breakdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EmotionList emotions={aiResult.detected_emotions} />
                <TriggerMetrics triggers={aiResult.triggers} keywords={aiResult.keywords} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}