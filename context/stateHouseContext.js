import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { url } from "../api/api";
import { Alert } from "react-native";

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

export const StateHouseProvider = ({ children }) => {
  const [recomention, setRecomention] = useState([]);
  const [reLoading, setReLoading] = useState(true);
  const [param, setParam] = useState([]);
  const [paLoading, setPaLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [deLoading, setDeLoading] = useState(true);
  const [resident, setResident] = useState([]);
  const [addHouse, setAddHouse] = useState({
    value: "",
  });
  const [filter, setFilter] = useState(initialFilterState);
  const [proLoading, setProLoading] = useState(false);
  console.log(param);
  useEffect(() => {
    getResult();
  }, [filter, getResult]);

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
      const response = await url.get(`house/ads/?${queryParams.toString()}`);
      setResult(response.data.results);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    getParam();
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
    setReLoading(true);
    try {
      const response = await url.get("house/ads");
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
      const response = await url.get("house/public/data/?region=3");
      setParam(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setPaLoading(false);
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
      }}
    >
      {children}
    </StateHouseContext.Provider>
  );
};

export const useStateHouse = () => useContext(StateHouseContext);
