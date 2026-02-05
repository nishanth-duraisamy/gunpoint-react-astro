import React, { createContext, useState, useContext } from 'react';

const LoadingContext = createContext(undefined);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {children}
      </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  // This error is your best friend during migration to catch unhydrated components
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};