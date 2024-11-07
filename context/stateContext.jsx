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
<<<<<<< HEAD
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
=======
>>>>>>> 098ad11db7af04a148660c0ed8e6a9282295f6b7

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
