import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { url } from "../api/api";
import { Alert } from "react-native";

const StateCarContext = createContext();

const initialFilterState = {
  registration_country: { id: 0, name: "Чуйская область / Бишкек" },
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
  const [filter, setFilter] = useState(initialFilterState);
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
