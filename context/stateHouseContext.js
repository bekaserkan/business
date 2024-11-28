import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { url } from "../api/api";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StateHouseContext = createContext();

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

const initialFilterStateAdd = {
  commercial_type: { id: 0, name: "Любой" },
  building_id: { id: 0, name: "Любой" },
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

export const StateHouseProvider = ({ children }) => {
  const [recomention, setRecomention] = useState([]);
  const [reLoading, setReLoading] = useState(true);
  const [param, setParam] = useState([]);
  const [paramAdd, setParamAdd] = useState([]);
  const [paLoading, setPaLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [deLoading, setDeLoading] = useState(true);
  const [resident, setResident] = useState([]);
  const [addHouse, setAddHouse] = useState(initialFilterStateAdd);
  const [filter, setFilter] = useState(initialFilterState);
  const [proLoading, setProLoading] = useState(false);
  useEffect(() => {
    getResult();
  }, [filter, getResult]);

  const reset = () => {
    setAddHouse();
  };

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
    console.log(queryParams.toString());
    try {
      setLoading(true);
      const response = await url.get(`house/ads/?${queryParams.toString()}`, {
        headers,
      });

      setResult(response.data.data);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    getParam();
    getParamAdd();
    getRecomention();
  }, []);

  const postProduct = async () => {
    setProLoading(true);
    const newData = {
      value: "",
    };

    try {
      const response = await url.post("house/ads/set", newData);
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

    try {
      setReLoading(true);

      const response = await url.get("house/ads/", header);

      console.log(response.data.data);

      setRecomention(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setReLoading(false);
    }
  };

  const getParamAdd = async () => {
    setPaLoading(true);
    try {
      const response = await url.get("house/public/data/?region=3");
      setParam(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setPaLoading(false);
    }
  };

  const getParam = async () => {
    try {
      const response = await url.get("/house/param/?type_id=1&category=3");
      setParamAdd(response.data.available_fields);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetail = async ({ id, complex_id }) => {
    setDeLoading(true);
    try {
      const response = await url.get(`house/ads/${id}`);
      setDetail(response.data);
      const responseTwo = await url.get(`house/${complex_id}/buildings`);
      setResident(responseTwo.data);
    } catch (error) {
      console.log(error);
    } finally {
      setDeLoading(false);
    }
  };

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
        resident,
        getDetail,
        detail,
        deLoading,
        // StateForAdd
        setAddHouse,
        addHouse,
        // StateForFilter
        setFilter,
        filter,
        reset,
        paramAdd,
      }}
    >
      {children}
    </StateHouseContext.Provider>
  );
};

export const useStateHouse = () => useContext(StateHouseContext);
