import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Container from "../../assets/styles/components/Container";
import Back from "../../assets/svg/back";
import ChekMarked from "../../assets/svg/chekMark";
import { useNavigation } from "@react-navigation/native";
import { url } from "../../api/api";

const AddCar = () => {
  const [currentStep, setCurrentStep] = useState("mark");
  const [selectedData, setSelectedData] = useState({
    mark: null,
    model: null,
    year: null,
    serie: null,
    generation: null,
    fuel: null,
    transmission: null,
    gear_box: null,
    modification: null,
    steering_wheel: null,
  });
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const stepTitles = {
    mark: "Марка",
    model: "Модель",
    year: "Год выпуска",
    serie: "Серия",
    generation: "Поколение",
    fuel: "Тип топлива",
    transmission: "Трансмиссия",
    gear_box: "Коробка передач",
    modification: "Модификация",
    steering_wheel: "Руль",
  };

  // Функция загрузки данных для текущего шага
  const fetchStepData = async () => {
    if (!selectedData[currentStep]) {
      setLoading(true);
      try {
        const params = new URLSearchParams(selectedData);
        const response = await url.get(
          `http://217.18.62.110/cars-data/parameters/?${params}`
        );
        const result = response.data;
        setOptions(result[currentStep] || []);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchStepData();
  }, [currentStep]);

  const handleSelect = (key, value) => {
    setSelectedData((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    const steps = Object.keys(stepTitles);
    const currentStepIndex = steps.indexOf(key);
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1]);
    } else {
      alert("Все параметры выбраны!");
      console.log("Выбранные данные:", selectedData);
    }
  };

  const handleBack = () => {
    const steps = Object.keys(stepTitles);
    const currentStepIndex = steps.indexOf(currentStep);

    if (currentStepIndex === 0) {
      navigation.navigate("MainScreen");
    } else {
      setCurrentStep(steps[currentStepIndex - 1]);
    }
  };

  const handleReset = () => {
    setSelectedData({
      mark: null,
      model: null,
      year: null,
      serie: null,
      generation: null,
      fuel: null,
      transmission: null,
      gear_box: null,
      modification: null,
      steering_wheel: null,
    });
    setCurrentStep("mark");
  };

  const renderStep = () => (
    <View style={styles.stepContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#1B4DFC" />
      ) : (
        <FlatList
          data={options}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(currentStep, item.id)}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              {selectedData[currentStep] === item.id && <ChekMarked />}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );

  return (
    <Container>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.currentStepTitle}>{stepTitles[currentStep]}</Text>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>Сбросить</Text>
        </TouchableOpacity>
      </View>
      {renderStep()}
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  currentStepTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  resetText: {
    color: "#1E1E1E",
    fontWeight: "500",
    fontSize: 14,
  },
  stepContainer: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
});

export default AddCar;
