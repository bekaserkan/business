import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { Alert } from "react-native";

const StateHouseContext = createContext();

export const StateHouseProvider = ({ children }) => {
  const [recomention, setRecomention] = useState([]);
  const [reLoading, setReLoading] = useState(true);
  const [param, setParam] = useState([]);
  const [paLoading, setPaLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [deLoading, setDeLoading] = useState(true);
  const [addHouse, setAddHouse] = useState({
    value: "",
  });
  const [filter, setFilter] = useState({
    value: "",
  });
  const [proLoading, setProLoading] = useState(false);

  console.log(param);

  const postProduct = async () => {
    setProLoading(true);
    const newData = {
      value: "",
    };
    try {
      const response = await api.post(
        "house/ads/set",
        { headers: {} },
        newData
      );
      Alert.alert("Successful", response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setProLoading(false);
    }
  };

  const getRecomention = async () => {
    setReLoading(true);
    try {
      const response = await api.get("v1.0/house/ads");
      setRecomention(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setReLoading(false);
    }
  };

  const getParam = async () => {
    setPaLoading(true);
    try {
      const response = await api.get("v1.0/house/public/data");
      setParam(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setPaLoading(false);
    }
  };

  const getResult = async () => {
    setLoading(true);
    try {
      const response = await api.get("");
      setResult(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDetail = async ({ id }) => {
    setDeLoading(true);
    try {
      const response = await api.get(`v1.0/house/ads/${id}`);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setDeLoading(false);
    }
  };

  useEffect(() => {
    getParam();
    getRecomention();
  }, []);

  return (
    <StateHouseContext.Provider
      value={{
        // AddProduct
        postProduct,
        proLoading,
        // Recomention
        recomention,
        reLoading,
        // Param
        param,
        paLoading,
        // Rusult
        getResult,
        result,
        loading,
        // Detail
        getDetail,
        detail,
        deLoading,
        // StateForAdd
        setAddHouse,
        addHouse,
        // StateForFilter
        setFilter,
        filter,
      }}
    >
      {children}
    </StateHouseContext.Provider>
  );
};

export const useStateHouse = () => useContext(StateHouseContext);
