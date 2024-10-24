import React, { createContext, useContext } from "react";

const DataHouseContext = createContext();

export const DataHouseProvider = ({ children }) => {
  return (
    <DataHouseContext.Provider value={{}}>{children}</DataHouseContext.Provider>
  );
};

export const useDataHouse = () => useContext(DataHouseContext);
