import React, { createContext, useContext } from "react";

const StateHouseContext = createContext();

export const StateHouseProvider = ({ children }) => {
  return (
    <StateHouseContext.Provider value={{}}>
      {children}
    </StateHouseContext.Provider>
  );
};

export const useStateHouse = () => useContext(StateHouseContext);
