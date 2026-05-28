import React, { useState } from 'react';
import LoginTab from './LoginTab';
import SignupTab from './SignupTab';

export default function LoginView({ onLoginSuccess, onRegisterUser, usersList }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegisterSuccess = () => {
    setError('');
    setSuccessMessage('Account created successfully! Switching to Login...');
    setTimeout(() => {
      setIsLoginMode(true);
      setSuccessMessage('');
    }, 1500);
  };

  const handleTabToggle = (mode) => {
    setIsLoginMode(mode);
    setError('');
    setSuccessMessage('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        
        {/* Tab Selection Headers */}
        <div style={{ display: 'flex', marginBottom: '25px', borderBottom: '1px solid #e2e8f0' }}>
          <button 
            onClick={() => handleTabToggle(true)}
            style={{ flex: 1, padding: '10px', cursor: 'pointer', border: 'none', background: 'none', fontSize: '14px', fontWeight: '600', color: isLoginMode ? '#4f46e5' : '#64748b', borderBottom: isLoginMode ? '2px solid #4f46e5' : 'none' }}
          >
            Sign In
          </button>
          <button 
            onClick={() => handleTabToggle(false)}
            style={{ flex: 1, padding: '10px', cursor: 'pointer', border: 'none', background: 'none', fontSize: '14px', fontWeight: '600', color: !isLoginMode ? '#4f46e5' : '#64748b', borderBottom: !isLoginMode ? '2px solid #4f46e5' : 'none' }}
          >
            Create Account
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <span style={{ fontSize: '36px' }}>{isLoginMode ? '🔐' : '🚀'}</span>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f172a', margin: '5px 0 0 0' }}>
            {isLoginMode ? 'Welcome Back' : 'Get Started'}
          </h2>
        </div>

        {/* Dynamic Layer Insertion */}
        {isLoginMode ? (
          <LoginTab 
            usersList={usersList} 
            onLoginSuccess={onLoginSuccess} 
            onError={setError} 
          />
        ) : (
          <SignupTab 
            usersList={usersList} 
            onRegisterUser={onRegisterUser} 
            onRegisterSuccess={handleRegisterSuccess} 
            onError={setError} 
          />
        )}

        {/* Status Alerts Notification Windows */}
        {error && <div style={{ color: '#ef4444', fontSize: '13px', textAlign: 'center', fontWeight: '500', marginTop: '15px' }}>⚠️ {error}</div>}
        {successMessage && <div style={{ color: '#10b981', fontSize: '13px', textAlign: 'center', fontWeight: '500', marginTop: '15px' }}>✅ {successMessage}</div>}

      </div>
    </div>
  );
}