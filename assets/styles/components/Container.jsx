import React from "react";
import { Platform, View } from "react-native";

const Container = ({ style, head, flex, top, bottom, none, children }) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: !none && 16,
          paddingTop: head ? (Platform.OS === "ios" ? 60 : 42) + top : top,
          paddingBottom: bottom,
        },
        flex && {
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
