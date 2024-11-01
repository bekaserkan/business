import React from "react";
import { Platform, View } from "react-native";
import Button from "../customs/Button";
import Phone from "../assets/svg/phoneWhite";
import { colors } from "../assets/styles/colors";

const ButtonLayouts = ({ loading, handle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      {children}
      <View
        style={{
          position: "absolute",
          padding: 16,
          paddingBottom: Platform.OS === "ios" ? 26 : 16,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.white,
          borderTopColor: "#F1F1F1",
          borderTopWidth: 1,
          shadowColor: "#474747",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <Button
          handle={handle}
          loading={loading}
          icon={<Phone />}
          color={colors.green}
        >
          Позвонить
        </Button>
      </View>
    </View>
  );
};

export default ButtonLayouts;
