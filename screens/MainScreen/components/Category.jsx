import React from "react";
import { StyleSheet, View } from "react-native";
import Between from "../../../assets/styles/components/Between";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../assets/styles/colors";
import Wave from "../../../customs/Wave";

const Category = ({ house, car }) => {
  const navigation = useNavigation();

  if (house) {
    return (
      <Between center={"center"}>
        <Wave>
          <View style={styles.box}></View>
        </Wave>
        <Wave>
          <View style={styles.box}></View>
        </Wave>
        <Wave>
          <View style={styles.box}></View>
        </Wave>
        <Wave>
          <View style={styles.box}></View>
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
    height: 75,
    borderRadius: 14,
    backgroundColor: colors.phon,
  },
});

export default Category;
