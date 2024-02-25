import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function ProfilePage() {
  const { token, logout } = useAuth();
  const [newPassword, setNewPassword] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChangePassword = async () => {
    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=YOUR_API_KEY', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setFeedbackMessage('Password changed successfully.');
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      setFeedbackMessage(`Failed to change password: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleChangePassword}>Change Password</button>
      <button onClick={logout}>Logout</button>
      {feedbackMessage && <div>{feedbackMessage}</div>}
    </div>
  );
}

export default ProfilePage;
