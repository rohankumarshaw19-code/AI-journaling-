import React, { useState } from 'react';

export default function SignupTab({ usersList, onRegisterUser, onRegisterSuccess, onError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      onError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      onError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      onError('Password must be at least 6 characters long.');
      return;
    }

    const userExists = usersList.some(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (userExists) {
      onError('Username is already taken.');
      return;
    }

    onRegisterUser({ username, password });
    onRegisterSuccess();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose username"
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create password"
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repeat password"
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
        />
      </div>

      <button
        type="submit"
        style={{ backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', marginTop: '10px' }}
      >
        Sign Up
      </button>
    </form>
  );
}