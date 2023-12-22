import React, { createContext, useState, useContext } from 'react';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [getUserID, setUserId] = useState(null); // Initialize userId state with null

  const updateUserId = (newUserId) => {
    setUserId(newUserId);
  };
  return (
    <UserContext.Provider value={{ getUserID, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
