import React, { useState } from 'react';
import InputField from '../components/InputField';
import './Login.css';

export default function Login({ darkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`login-card ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="login-title">Login</h2>
      <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="login-btn">Login</button>
    </div>
  );
}
