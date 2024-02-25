import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const idToken = await signInWithEmailAndPassword(email, password);
      console.log('ID Token:', idToken); // Log the ID token (JWT) in the browser console
      setEmail('');
      setPassword('');
      setFeedbackMessage('Login successful!');
    } catch (error) {
      setFeedbackMessage('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_API_KEY', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Authentication failed');
        }
        return response.json();
      })
      .then(data => {
        resolve(data.idToken);
      })
      .catch(error => {
        reject(error);
      });
    });
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending request...' : 'Login'}
        </button>
      </form>
      {feedbackMessage && <div>{feedbackMessage}</div>}
    </div>
  );
}

export default LoginForm;
