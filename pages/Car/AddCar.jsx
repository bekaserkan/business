import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import Container from "../../assets/styles/components/Container";
import Back from "../../assets/svg/back";
import ChekMarked from "../../assets/svg/chekMark";
import { useNavigation } from "@react-navigation/native";
import { useStateCar } from "../../context/stateCarContext";


const AddCar = () => {
  const {paramAdd,  setProLoading, postProduct, carAdd, setCarAdd } = useStateCar();
  const [currentStep, setCurrentStep] = useState("brand");
  const navigation = useNavigation(); 

  const [selectedData, setSelectedData] = useState({
    brand: null,
    model: null,
    year: null,
    bodyType: null,
    typeKuzov: null,
    color: null,
    engineType: null,
    transmission: null,
    fuelType: null,
    mileage: null,
    price: null,
  });

  const data = {
    brand: ["Audi", "BMW", "Chery", "Ford", "Hyundai"],
    model: ["Model X", "Model Y", "Model Z"],
    year: ["2024", "2023", "2022"],
    bodyType: ["Седан", "Кроссовер", "Хэтчбек"],
    typeKuzov: [
      "Седан",
      "Хэтчбек",
      "Кроссовер",
      "Купе",
      "Универсал",
      "Пикап",
      "Минивэн",
      "Родстер",
      "Спортивный автомобиль",
      "Кабриолет",
    ],
    color: [
      "Черный",
      "Белый",
      "Серый",
      "Синий",
      "Красный",
      "Зеленый",
      "Желтый",
      "Фиолетовый",
      "Оранжевый",
      "Серебристый",
    ],
    engineType: ["Бензин", "Дизель", "Электрический", "Гибрид"],
    transmission: ["Робот", "Механика", "Автомат", "Вариатор"],
    fuelType: ["Бензин", "Дизель", "Электричество", "Газ"],
    mileage: [
      "0-50000 км",
      "50001-100000 км",
      "100001-150000 км",
      "150001+ км",
    ],
    price: [
      "До 500,000",
      "500,000 - 1,000,000",
      "1,000,000 - 2,000,000",
      "2,000,000+",
    ],
  };

  const stepTitles = {
    brand: "Марка",
    model: "Модель",
    year: "Год выпуска",
    bodyType: "Тип кузова",
    typeKuzov: "Тип кузова (доп.)",
    color: "Цвет",
    engineType: "Тип двигателя",
    transmission: "Тип трансмиссии",
    fuelType: "Тип топлива",
    mileage: "Пробег",
    price: "",
  };

  const handleSelect = (key, value) => {
    setSelectedData({ ...selectedData, [key]: value });
    const steps = Object.keys(selectedData);
    const currentStepIndex = steps.indexOf(key);
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps = Object.keys(data);
    const currentStepIndex = steps.indexOf(currentStep);

    if (currentStepIndex === 0) {
      navigation.navigate("MainScreen"); 
    } else {
      setCurrentStep(steps[currentStepIndex - 1]);
    }
  
  };

  const handleReset = () => {
    setSelectedData({
      brand: null,
      model: null,
      year: null,
      bodyType: null,
      typeKuzov: null,
      color: null,
      engineType: null,
      transmission: null,
      fuelType: null,
      mileage: null,
      price: null,
    });
    setCurrentStep("brand");
  };

  const renderStep = () => {
    const currentData = data[currentStep];
    const selectedKey = selectedData[currentStep];
    return (
      <View style={styles.stepContainer}>
        <FlatList
          data={currentData}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.item,
                selectedKey === item && { backgroundColor: "#fff" },
              ]}
              onPress={() => handleSelect(currentStep, item)}
            >
              <View style={styles.itemContent}>
                <Text
                  style={[
                    styles.itemText,
                    selectedKey === item && styles.itemTextSelected,
                  ]}
                >
                  {item}
                </Text>
                {selectedKey === item && <ChekMarked />}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  const progressSteps = Object.keys(data);
  const getProgressStyle = (step) => {
    const currentIndex = progressSteps.indexOf(currentStep);
    const stepIndex = progressSteps.indexOf(step);
  
    if (stepIndex < currentIndex) {
      return { backgroundColor: "#1B4DFC", width: "100%" };
    } else if (stepIndex === currentIndex) {
      return { backgroundColor: "#1B4DFC", width: "50%" };
    } else {
      return { backgroundColor: "#ccc", width: "10%" };
    }
  };
  
  return (
    <Container>
      <View style={styles.progressContainer}>
        {progressSteps.map((step, index) => (
          <View
            key={index}
            style={[styles.progressStep, getProgressStyle(step)]}
          />
        ))}
      </View>
      <View style={styles.header}>
        <View style={styles.back_box}>
          <TouchableOpacity onPress={handleBack}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.currentStepTitle}>{stepTitles[currentStep]}</Text>
        </View>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>Сбросить</Text>
        </TouchableOpacity>
      </View>
      {currentStep === "price" ? (
        <View style={styles.summary}>
          <Text style={styles.title}>Вы выбрали:</Text>
          {Object.entries(selectedData).map(
            ([key, value]) =>
              value && (
                <Text key={key}>
                  {stepTitles[key]}: {value}
                </Text>
              )
          )}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => alert("Автомобиль добавлен!") || navigation.navigate("MainScreen")}
          >
            <Text style={styles.submitText}>Подтвердить</Text>
          </TouchableOpacity>
        </View>
      ) : (
        renderStep()
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  checkMarkText: {
    color: "#000",
    fontWeight: "bold",
  },
  summary: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  submitButton: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#1B4DFC",
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:16
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 60 : 42,
  },
  progressStep: {
    height: 5,
    borderRadius: 2,
    flex: 1,
    marginHorizontal: 2,
  },
  back_box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    gap: 20,
  },
});

export default AddCar;
