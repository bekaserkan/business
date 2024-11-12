import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Between from "../../../assets/styles/components/Between";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../assets/styles/colors";
import Wave from "../../../customs/Wave";
import TextContent from "../../../assets/styles/components/TextContent";

const Category = ({ house, car }) => {
  const navigation = useNavigation();

  const Sybmit = () => {
    navigation.navigate("HouseScreens", {
      screen: "HouseResult",
    });
  };

  if (house) {
    return (
      <Between center={"center"}>
        <Wave handle={Sybmit}>
          <View style={styles.box}>
            <Image
              style={{
                width: 74,
                height: 74,
              }}
              source={require("../../../assets/images/1-8.png")}
            />
            <TextContent fontSize={12} fontWeight={500} color={colors.black}>
              Срочно
            </TextContent>
          </View>
        </Wave>
        <Wave handle={Sybmit}>
          <View style={styles.box}>
            <Image
              style={{
                width: 74,
                height: 74,
              }}
              source={require("../../../assets/images/1-9.png")}
            />
            <TextContent fontSize={12} fontWeight={500} color={colors.black}>
              Компании
            </TextContent>
          </View>
        </Wave>
        <Wave handle={Sybmit}>
          <View style={styles.box}>
            <Image
              style={{
                width: 74,
                height: 74,
              }}
              source={require("../../../assets/images/1-5.png")}
            />
            <TextContent fontSize={12} fontWeight={500} color={colors.black}>
              Продажа
            </TextContent>
          </View>
        </Wave>
        <Wave handle={Sybmit}>
          <View style={styles.box}>
            <Image
              style={{
                width: 74,
                height: 74,
              }}
              source={require("../../../assets/images/1-6.png")}
            />
            <TextContent fontSize={12} fontWeight={500} color={colors.black}>
              Аренда
            </TextContent>
          </View>
        </Wave>
      </Between>
    );
  }
  if (car) {
    return (
      <Between center={"center"}>
        <Wave>
          <View style={styles.box}></View>
        </Wave>
        <Wave>
          <View style={styles.box}></View>
        </Wave>
        <Wave
          handle={() =>
            navigation.navigate("CarScreens", { screen: "CarChek" })
          }
        >
          <View style={styles.box}></View>
        </Wave>
        <Wave>
          <View style={styles.box}></View>
        </Wave>
      </Between>
    );
  }
};

const styles = StyleSheet.create({
  box: {
    width: 75,
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
});

export default Category;
