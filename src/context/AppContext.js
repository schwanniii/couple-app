'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState('next'); // Wird jetzt direkt gesetzt
  const [appData, setAppData] = useState({
    todoInput: '',       
    loveNoteInput: '',   
    currentPartner: 'Schatz'
  });

  const updateField = (key, value) => {
    setAppData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <AppContext.Provider value={{ activeTab, setActiveTab, direction, setDirection, appData, updateField }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);