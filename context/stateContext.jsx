import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { url } from "../api/api";
import { Alert } from "react-native";

const СonditionContext = createContext();

export const СonditionProvider = ({ children }) => {
  const [condition, setСondition] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      const response = await url.get("auth/accounts/me/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        userData,
        loading,
      }}
    >
      {children}
    </СonditionContext.Provider>
  );
};

export const useСondition = () => useContext(СonditionContext);
