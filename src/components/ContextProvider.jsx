import React, { useState, createContext } from 'react';

export const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <FormContext.Provider value={[data, setData]}>
      {children}
    </FormContext.Provider>
  );
}
