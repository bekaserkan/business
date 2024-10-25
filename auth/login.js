import React from "react";
import { Text, View } from "react-native";
import TextContent from "../assets/styles/components/TextContent";
import { colors } from "../assets/styles/colors";

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text>Beka</Text>
      <TextContent
        color={colors.blue}
        center={"center"}
        fontSize={20}
        top={60}
        fontWeight={300}
      >
        rtbwrtbwr
      </TextContent>
    </View>
  );
};

export default Login;
