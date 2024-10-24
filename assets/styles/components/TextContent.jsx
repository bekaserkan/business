import React from "react";
import { Text } from "react-native";

const TextContent = ({
  style,
  top,
  left,
  right,
  bottom,
  fontSize,
  fontWeight,
  children,
  color,
  center,
}) => {
  return (
    <Text
      style={[
        {
          marginTop: top,
          marginLeft: left,
          marginRight: right,
          marginBottom: bottom,
          fontSize: fontSize,
          fontWeight: `${fontWeight}`,
          color: color,
          textAlign: center,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextContent;
