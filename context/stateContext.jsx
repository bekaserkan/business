import React, { createContext, useContext, useState } from "react";

const СonditionContext = createContext();

export const СonditionProvider = ({ children }) => {
  const [condition, setСondition] = useState(false);

  const CarActive = () => {
    setСondition(false);
  };

  const HouseActive = () => {
    setСondition(true);
  };

  return (
    <СonditionContext.Provider
      value={{
        condition,
        CarActive,
        HouseActive,
      }}
    >
      {children}
    </СonditionContext.Provider>
  );
};

export const useСondition = () => useContext(СonditionContext);
