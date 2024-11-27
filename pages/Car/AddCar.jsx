import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Platform } from "react-native";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";

const AddCar = () => {
  const [currentStep, setCurrentStep] = useState("brand");
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
    typeKuzov: ["Седан", "Хэтчбек", "Кроссовер", "Купе", "Универсал", "Пикап", "Минивэн", "Родстер", "Спортивный автомобиль", "Кабриолет"],
    color: ["Черный", "Белый", "Серый", "Синий", "Красный", "Зеленый", "Желтый", "Фиолетовый", "Оранжевый", "Серебристый"],
    engineType: ["Бензин", "Дизель", "Электрический", "Гибрид"],
    transmission: ["Робот", "Механика", "Автомат", "Вариатор"],
    fuelType: ["Бензин", "Дизель", "Электричество", "Газ"],
    mileage: ["0-50000 км", "50001-100000 км", "100001-150000 км", "150001+ км"],
    price: ["До 500,000", "500,000 - 1,000,000", "1,000,000 - 2,000,000", "2,000,000+"],
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
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1]);
    }
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
    price: "Цена",
  };
  const renderStep = () => {
    const currentData = data[currentStep];
    const selectedKey = selectedData[currentStep];
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.title}>{stepTitles[currentStep]}</Text>
        <FlatList
          data={currentData}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.item,
                selectedKey === item && { backgroundColor: "#1B4DFC" },
              ]}
              onPress={() => handleSelect(currentStep, item)}
            >
              <View style={styles.itemContent}>
                <Text>{item}</Text>
                <Text style={[styles.checkMark, selectedKey !== item && { opacity: 0 }]}>
                  ✔
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  const progressSteps = Object.keys(data);
  const getProgressStyle = (step) => {
    if (currentStep === step) return { backgroundColor: "#1B4DFC", width: "10%" };
    if (progressSteps.indexOf(currentStep) > progressSteps.indexOf(step)) {
      return { backgroundColor: "#1B4DFC", width: "100%" };
    }
    return { backgroundColor: "#ccc", width: "10%" };
  };
  return (
    <Container>
            <View style={styles.progressContainer}>
        {progressSteps.map((step, index) => (
          <View key={index} style={[styles.progressStep, getProgressStyle(step)]} />
        ))}
      </View>
      <Header back={true} onBack={handleBack}>{stepTitles[currentStep]}</Header>
      {currentStep === "price" ? (
        <View style={styles.summary}>
          <Text style={styles.title}>Вы выбрали:</Text>
          {Object.entries(selectedData).map(([key, value]) => (
            value && <Text key={key}>{stepTitles[key]}: {value}</Text>
          ))}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => alert("Автомобиль добавлен!")}
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
  stepContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    marginBottom: 10,
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkMark: {
    fontSize: 18,
    color: "red",
    marginLeft: 8,
  },
  summary: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  submitButton: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#000",
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
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
});
export default AddCar;
