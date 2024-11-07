import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../assets/styles/colors";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  );
};

export default Loading;
