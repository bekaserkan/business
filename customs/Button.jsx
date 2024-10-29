import React from "react";
import Wave from "./Wave";
import { View } from "react-native";
import TextContent from "../assets/styles/components/TextContent";
import { colors } from "../assets/styles/colors";
import { useNavigation } from "@react-navigation/native";

const Button = ({ pathMain, path, top, bottom, style, color, children }) => {
  const navigation = useNavigation();

  const pathFunction = () => {
    if (path && pathMain) {
      navigation.navigate(pathMain, {
        screen: path,
      });
    } else if (path) {
      navigation.navigate(path);
    }
  };

  return (
    <Wave handle={pathFunction}>
      <View
        style={[
          {
            marginTop: top,
            marginBottom: bottom,
            width: "100%",
            height: 50,
            borderRadius: 10,
            backgroundColor: color,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ]}
      >
        <TextContent fontSize={16} fontWeight={500} color={colors.white}>
          {children}
        </TextContent>
      </View>
    </Wave>
  );
};

export default Button;
