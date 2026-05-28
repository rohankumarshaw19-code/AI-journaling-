import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';

export default function DashboardView({ chartData }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px', color: '#0f172a' }}>📊 Weekly Analytics Dashboard</h1>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '25px' }}>Real-time mental health indices compiled across the last 7 days.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Chart 1: Mood Trajectory */}
        <div style={{ border: '1px solid #e2e8f0', padding: '20px', borderRadius: '16px', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b' }}>📈 Mood Trajectory Trend (1-10)</h3>
          <LineChart width={500} height={250} data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <YAxis domain={[0, 10]} axisLine={false} tickLine={false} stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Line type="monotone" dataKey="moodScore" stroke="#4f46e5" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} name="Mood" />
          </LineChart>
        </div>

        {/* Chart 2: Stress Level */}
        <div style={{ border: '1px solid #e2e8f0', padding: '20px', borderRadius: '16px', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b' }}>⚡ Stress Level Intensity Path (%)</h3>
          <AreaChart width={500} height={250} data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <YAxis domain={[0, 100]} axisLine={false} tickLine={false} stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Area type="monotone" dataKey="stressLevel" stroke="#ef4444" fill="#fee2e2" strokeWidth={2.5} name="Stress %" />
          </AreaChart>
        </div>

      </div>
    </div>
  );
}