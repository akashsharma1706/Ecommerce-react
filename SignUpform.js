import React, { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await signUp(email, password);
      setEmail('');
      setPassword('');
      setFeedbackMessage('Signup successful!');
    } catch (error) {
      setFeedbackMessage('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Signup failed'));
      }, 2000);
    });
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
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
          {isLoading ? 'Sending request...' : 'Sign Up'}
        </button>
      </form>
      {feedbackMessage && <div>{feedbackMessage}</div>}
    </div>
  );
}

export default SignUpForm;
