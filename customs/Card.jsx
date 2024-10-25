import React from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import TextContent from "../assets/styles/components/TextContent";
import { colors } from "../assets/styles/colors";

const Card = ({ title, background }) => {
  return (
    <Pressable>
      <View
        style={{
          width: 300,
          height: 400,
          backgroundColor: background,
        }}
      >
        <TextContent color={colors.white}>{title}</TextContent>
      </View>
    </Pressable>
  );
};

export default Card;
