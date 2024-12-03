import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import Container from "../../assets/styles/components/Container";
import Back from "../../assets/svg/back";
import { useNavigation } from "@react-navigation/native";
import { url } from "../../api/api";
import Loading from "../../ui/Loading";
import ChekMark from "../../assets/svg/chekMark";
import { colors } from "../../assets/styles/colors";
import Wave from "../../customs/Wave";
import InputSelect from "../../customs/InputSelect";
import Button from "../../customs/Button";
import TextContent from "../../assets/styles/components/TextContent";

const AddCar = () => {
  const [currentStep, setCurrentStep] = useState("mark");
  const [selectedData, setSelectedData] = useState({});
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
    options: "",
    color: "Цвет",
  };

  const steps = Object.keys(stepTitles);

  const fetchStepData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams(
        Object.fromEntries(
          Object.entries(selectedData).filter(([key, value]) => value !== null)
        )
      );
      const response = await url.get(`/cars-data/parameters/?${params}`);
      setOptions(
        response.data.data.map((item) =>
          typeof item === "number" ? { id: item, name: item.toString() } : item
        ) || []
      );
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStepData();
  }, [currentStep]);
  const handleSelect = (key, value) => {
    if (key === "color" || key === "options") {
      setSelectedData((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    } else {
      setSelectedData((prevState) => ({ ...prevState, [key]: Number(value) }));
    }

    const currentStepIndex = steps.indexOf(key);
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1]);
    }
  };
  const handleBack = () => {
    const currentStepIndex = steps.indexOf(currentStep);

    if (currentStepIndex === 0) {
      setSelectedData({});
      navigation.navigate("MainScreen");
    } else {
      setSelectedData((prevState) => {
        const newState = { ...prevState };
        delete newState[currentStep];
        const previousStep = steps[currentStepIndex - 1];
        delete newState[previousStep];
        return newState;
      });
      const previousStep = steps[currentStepIndex - 1];
      setCurrentStep(previousStep);
    }
  };
  const handleReset = () => {
    setSelectedData({});
    setCurrentStep("mark");
  };
  const renderProgressBar = () => {
    const currentStepIndex = steps.indexOf(currentStep);
    return (
      <View style={styles.progressBarContainer}>
        {steps.map((step, index) => (
          <View
            key={step}
            style={[
              styles.progressBarStep,
              index <= currentStepIndex && styles.progressBarStepActive,
            ]}
          />
        ))}
      </View>
    );
  };
  const renderStep = () => (
    <View style={styles.stepContainer}>
      {loading ? (
        <Loading color={colors.blue} />
      ) : currentStep === "color" ? (
        <View style={styles.inputContainer}>
          <Text>Цвет:</Text>
          <TextInput
            style={styles.input}
            value={selectedData.color}
            onChangeText={(text) =>
              setSelectedData((prevState) => ({ ...prevState, color: text }))
            }
          />
        </View>
      ) : currentStep === "options" ? (
        <View style={styles.inputContainer}>
          <InputSelect
            select={true}
            label="Выберите цвет"
            value="color"
            car={true}
          />
          <InputSelect
            select={true}
            label="Учет"
            value="registration_country"
            car={true}
          />
          <InputSelect
            select={true}
            label="Состояние"
            value="car_condition"
            car={true}
          />
          <InputSelect
            select={true}
            label="Наличие"
            value="featured_option"
            car={true}
          />
          <Wave
            style={{
              marginTop: 20,
            }}
            handle={() => {
              navigation.navigate("Tariffs");
            }}
          >
            <View
              style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                backgroundColor: colors.blue,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextContent fontSize={16} fontWeight={500} color={colors.white}>
                Отправить
              </TextContent>
            </View>
          </Wave>
        </View>
      ) : (
        <FlatList
          data={options}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(currentStep, item.id)}
            >
              <View style={styles.itemContent}>
                <Text style={styles.itemText}>{item.name}</Text>
                {selectedData[currentStep] === item.id && <ChekMark />}
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );

  return (
    <Container>
      {renderProgressBar()}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={handleBack}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.currentStepTitle}>{stepTitles[currentStep]}</Text>
        </View>
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
    height: 50,
    backgroundColor: "#fff",
  },
  option_box: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    borderBottomColor: "#D0D0D0",
    borderBottomWidth: 1,
  },
  currentStepTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 20,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  resetText: {
    color: "#1E1E1E",
    fontWeight: "500",
    fontSize: 14,
  },
  stepContainer: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    gap: 4,
  },
  progressBarStep: {
    flex: 1,
    height: 4,
    marginTop: Platform.OS === "ios" ? 60 : 42,
    backgroundColor: "#ccc",
    borderRadius: 2,
  },
  progressBarStepActive: {
    backgroundColor: "#1B4DFC",
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "column",
    gap: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default AddCar;
