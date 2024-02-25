// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      //Firebase Authentication API to login
      await login(email, password);
      setError(''); 
      // Redirect to products page after successful login
      history.push('/products');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.'); 
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button onClick={handleLogin}>Login</button>
      {error && <div>{error}</div>} 
    </div>
  );
}

export default LoginPage;
