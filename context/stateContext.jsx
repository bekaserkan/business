import React, { createContext, useContext, useEffect, useState } from "react";
import { url } from "../api/api";

const СonditionContext = createContext();

export const СonditionProvider = ({ children }) => {
  const [condition, setСondition] = useState(false);
  const [dataListHouses, setDataListHouses] = useState([]);
  const [dataListCars, setDataListCars] = useState([]);
  const [loading, setLoading] = useState();

  const CarActive = () => {
    setСondition(false);
  };

  const HouseActive = () => {
    setСondition(true);
  };
  const getDataListHouses = async () => {
    setLoading(true);
    try {
      const response = await url.get("api/hottours");
      setDataListHouses(response.data.hottours.tour);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDataListCars = async () => {
    try {
      const response = await url.get("api/hottours");
      setDataListCars(response.data.hottours.tour);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataListHouses();
    getDataListCars();
  }, []);

  return (
    <СonditionContext.Provider
      value={{
        loading,
        dataListCars,
        dataListHouses,
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
