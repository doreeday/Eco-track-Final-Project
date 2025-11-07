import React, { useState } from 'react';
import InputField from '../components/InputField';
import './Register.css';

export default function Register({ darkMode }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`register-card ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="register-title">Register</h2>
      <InputField label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="register-btn">Register</button>
    </div>
  );
}
