import React, { useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";

const Wave = ({ style, handle, width, height, children }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const phonValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();

    Animated.spring(phonValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    Animated.spring(phonValue, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={() => (handle ? handle() : "")}
      style={[
        {
          width: width,
          height: height,
        },
        style,
      ]}
      activeOpacity={0.8}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Wave;
