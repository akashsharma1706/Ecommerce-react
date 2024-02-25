// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const history = useHistory();

  const login = (token) => {
    setToken(token);
    history.push('/profile'); // Redirect to profile page after login
  };

  const logout = () => {
    setToken(null);
    history.push('/login'); // Redirect to login page after logout
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
