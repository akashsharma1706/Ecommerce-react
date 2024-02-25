// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic for authenticating user and obtaining token
    const token = 'sample_token'; // Sample token for demonstration
    login(token);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
