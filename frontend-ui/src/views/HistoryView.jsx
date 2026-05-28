import React from 'react';
import { mockHistoryLog } from '../services/MockData';

export default function HistoryView() {
  // Helper to color code the background cards based on mood types
  const getMoodStyles = (type) => {
    switch (type) {
      case 'positive': return { border: 'left-4 solid #10b981', bg: '#f0fdf4' };
      case 'anxious': return { border: 'left-4 solid #f59e0b', bg: '#fffbeb' };
      case 'neutral': return { border: 'left-4 solid #64748b', bg: '#f8fafc' };
      default: return { border: 'left-4 solid #e2e8f0', bg: '#ffffff' };
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>⏳ Journal History Log</h1>
        <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Review and audit chronological emotional records over time.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {mockHistoryLog.map((entry) => {
          const styles = getMoodStyles(entry.moodType);
          return (
            <div 
              key={entry.id} 
              style={{
                border: '1px solid #e2e8f0',
                borderLeft: styles.border,
                borderRadius: '12px',
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
              }}
            >
              {/* Card Meta Header */}
              <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b' }}>{entry.date}</span>
                  <span style={{ fontSize: '11px', color: '#94a3b8', marginLeft: '8px' }}>{entry.time}</span>
                </div>
                
                {/* Emotion Badges */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {entry.emotions.map((emo, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        backgroundColor: '#eee9ff',
                        color: '#6366f1',
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {emo}
                    </span>
                  ))}
                </div>
              </div>

              {/* Journal Body Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', color: '#94a3b8', margin: '0 0 4px 0', tracking: 'wide' }}>Your Thoughts:</h4>
                  <p style={{ fontSize: '13px', color: '#334155', margin: 0, lineHeight: '1.5' }}>"{entry.rawText}"</p>
                </div>

                <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: styles.bg }}>
                  <h4 style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', color: '#475569', margin: '0 0 4px 0' }}>✨ AI Cognitive Analysis Summary:</h4>
                  <p style={{ fontSize: '12px', color: '#334155', margin: 0, lineHeight: '1.4', fontStyle: 'italic' }}>{entry.summary}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}