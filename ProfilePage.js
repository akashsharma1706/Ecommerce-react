// ProfilePage.js
import React from 'react';
import { useAuth } from './AuthContext';

function ProfilePage() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
