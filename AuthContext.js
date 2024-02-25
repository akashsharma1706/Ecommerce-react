// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    let logoutTimer;
    const lastActivityTime = Date.now();

    const handleActivity = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        logout();
        alert('Session expired. Please login again.');
      }, 300000); // 5 minutes in milliseconds
    };

    handleActivity(); // Start the activity handler

    // Add event listeners to detect user activity
    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keypress', handleActivity);
    document.addEventListener('click', handleActivity);

    return () => {
      // Cleanup event listeners
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keypress', handleActivity);
      document.removeEventListener('click', handleActivity);
    };
  }, []);

  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token); // Store token in localStorage
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
