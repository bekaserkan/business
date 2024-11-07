import React, { createContext, useContext, useEffect, useState } from "react";
import { url } from "../api/api";

const StateCarContext = createContext();

export const StateCarProvider = ({ children }) => {
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

  const postProduct = async () => {
    setProLoading(true);
    try {
      const response = await url.post("");
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
      const response = await url.get("");
      setRecomention(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setReLoading(false);
    }
  };

  const getParam = async () => {
    setPaLoading(true);
    try {
      const response = await url.get("");
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
      const response = await url.get("");
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
      const response = await url.get(`${id}`);
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
    <StateCarContext.Provider
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
    </StateCarContext.Provider>
  );
};

export const useStateCar = () => useContext(StateCarContext);
