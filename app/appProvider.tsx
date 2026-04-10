import React, { useState } from 'react';
import { AppContext } from './appContext';

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({ userName: 'Unknown', points: 0, easterEggsCollected: 0, maxEasterEggs: 20, easterList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] });
  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};