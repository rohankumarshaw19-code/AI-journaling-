import React from 'react';

export default function MoodBadge({ moodType }) {
  const styles = {
    positive: 'bg-green-100 text-green-800 border-green-200',
    negative: 'bg-red-100 text-red-800 border-red-200',
    neutral: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  return (
    <span className={`inline-flex items-center capitalize px-3 py-1 text-xs font-semibold rounded-full border ${styles[moodType] || styles.neutral}`}>
      <span className={`w-1.5 h-1.5 mr-1.5 rounded-full ${
        moodType === 'positive' ? 'bg-green-500' : moodType === 'negative' ? 'bg-red-500' : 'bg-gray-400'
      }`}></span>
      {moodType} Mood
    </span>
  );
}