import React, { createContext, useContext, useState } from 'react';

// Create a Context for the loading state
export const LoadingContext = createContext(); // Exporting LoadingContext

// Create a provider component
export const LoadingProvider = ({ children }) => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const setRequestLoading = (isLoading) => {
    setIsRequestLoading(isLoading);
  };

  return (
    <LoadingContext.Provider value={{ isRequestLoading, setRequestLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook for accessing loading state and actions
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
