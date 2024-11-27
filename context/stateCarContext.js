import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { url } from "../api/api";

const StateCarContext = createContext();

const initialFilterState = {
  region: { id: 1, name: "Чуйская область / Бишкек" },
  town: { id: 0, name: "Любой" },
  category: { id: 0, name: "Любой" },
  rooms: { id: 0, name: "Любой" },
  currency: { id: 0, name: "Любой" },
  floor: { id: 0, name: "Любой" },
  floors: { id: 0, name: "Любой" },
  floors_not_end: false,
  floors_last: false,
  serie: { id: 0, name: "Любой" },
  condition: { id: 0, name: "Любой" },
  heating: { id: 0, name: "Любой" },
  furniture: { id: 0, name: "Любой" },
  building_type: { id: 0, name: "Любой" },
  ceiling_height: "",
  square: "",
  land_square: "",
  living_square: "",
  kitchen_square: "",
  is_urgent: false,
  picture_exists: false,
  video_exists: false,
  exchange: false,
  installment: false,
  mortgage: false,
  owner_type: { id: 0, name: "Любой" },
  document: { id: 0, name: "Любой" },
  price: "",
};

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
    initialFilterState
  });
  const [filter, setFilter] = useState({
    value: "",
  });
  const [proLoading, setProLoading] = useState(false);

  const getResult = useCallback(async () => {
    const queryParams = new URLSearchParams();
    Object.entries(filter).forEach(([key, value]) => {
      if (typeof value === "object" && value.name !== "Любой") {
        queryParams.append(key, value.id);
      } else if (typeof value === "boolean") {
        queryParams.append(key, value);
      } else if (typeof value === "string" && value !== "") {
        queryParams.append(key, value);
      }
    });

    console.log(queryParams.toString());
    setLoading(true);
    try {
      const response = await api.get(
        `cars/cars-posts/?${queryParams.toString()}`
      );
      setResult(response.data.results);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  }, [filter]);
  
  const postProduct = async () => {
    setProLoading(true);
    try {
      const response = await url.post("cars/cars-posts/");
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
      const response = await url.get("cars/cars-posts/");
      setRecomention(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setReLoading(false);
    }
  };

  const getParam = async () => {
    setPaLoading(true);
    try {
      const response = await url.get("cars-data/public/data/");
      setParam(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setPaLoading(false);
    }
  };

  const getDetail = async ({ id }) => {
    setDeLoading(true);
    try {
      const response = await url.get(`cars/cars-posts/${id}`);
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
