import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { url } from "../api/api";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StateCarContext = createContext();

const initialFilterState = {
  registration_country: { id: 1, name: "Кыргызстан" },
  mark: { id: 0, name: "Любой" },
  category: { id: 0, name: "Любой" },
  car_condition: { id: 0, name: "Любой" }, // новое
  currency: { id: 0, name: "Любой" }, // 
  color: { id: 0, name: "Любой" },  // цвет
  configuration: { id: 0, name: "Любой" },
  gear_box: { id: 0, name: "Любой" }, // каропка передач
  media: { id: 0, name: "Любой" },   // медиа
  other_option: { id: 0, name: "Любой" }, // техосмотр пройден 
  fuel: { id: 0, name: "Любой" },  // бензин
  other_option: { id: 0, name: "Любой" },
  featured_option: { id: 0, name: "Любой" }, // в наличии
  transmission: { id: 0, name: "Любой" }, // передный задный
  exchange: { id: 0, name: "Любой" },  // толко обмен 
  steering_wheel: { id: 0, name: "Любой" }, // слева справа
  interior: { id: 0, name: "Любой" },  // кожа 
  exterior: { id: 0, name: "Любой" }, //   люк 
  configuration: { id: 0, name: "Любой" }, // полный электро пакет 
  comment_allowed: { id: 0, name: "Любой" }, // зарегистреванные ползователи никто все
  car_type: { id: 0, name: "Любой" },  //  легковые
  fuel: { id: 0, name: "Любой" },
  featured_option: { id: 0, name: "Любой" },
  year:"",
  ceiling_height: "",
  mileage: "",
  is_urgent: false,
  price: "",
  // picture_exists: false,
  // video_exists: false,
  // exchange: false,
  // installment: false
  // mortgage: false,
};

const initialFilterStateAdd = {
  mark: { id: 0, name: "Любой" },
  car_models: { id: 0, name: "Любой" },
  material: { id: 0, name: "Любой" },
  floor: { id: 0, name: "Любой" },
  floors: { id: 0, name: "Любой" },
  condition: { id: 0, name: "Любой" },
  heating: { id: 0, name: "Любой" },
  phone_info: { id: 0, name: "Любой" },
  internet: { id: 0, name: "Любой" },
  safety: { id: 0, name: "Любой" },
  documents: { id: 0, name: "Любой" },
  year: "",
  land_square: "",
  square: "",
  ceiling_height: "",
  description: "",
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
  const [paramAdd, setParamAdd] = useState([]);
  const [filter, setFilter] = useState(initialFilterState);
  const [carAdd, setCarAdd] = useState(initialFilterStateAdd)
  const [proLoading, setProLoading] = useState(false);
  useEffect(() => {
    getResult();
  }, [filter, getResult]);

  const getResult = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");
    const headers = token ? { Authorization: `Token ${token}` } : {};

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
    setLoading(true);
    try {
      const response = await url.get(
        `cars/cars-posts/?${queryParams.toString()}/`,
        // headers,
      );
      setResult(response.data.data);
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
    const token = await AsyncStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
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
  const getParamAdd = async () => {
    setPaLoading(true);
    try {
      const response = await url.get("cars-data/public/data/");
      setParamAdd(response.data);
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
    getParamAdd()
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
        setFilter,
        filter,
        deLoading, 
        setCarAdd,
        carAdd,
        // GetParamAdd
      }}
    >
      {children}
    </StateCarContext.Provider>
  );
};

export const useStateCar = () => useContext(StateCarContext);
