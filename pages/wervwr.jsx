import React from "react";
import { View } from "react-native";
import Card from "../customs/Card";
import { colors } from "../assets/styles/colors";
import Wrapper from "../assets/styles/components/Wrapper";

const Wervwr = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card title={"kytdtkyku"} price={"kjvljv"} background={colors.green} />
      <Wrapper padding={[0, 16]}>

      </Wrapper>
    </View>
  );
};

export default Wervwr;
