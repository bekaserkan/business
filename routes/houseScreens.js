import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function HouseScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="MainHousePage"
    >
      <Stack.Screen name="MainHousePage" component={<View></View>} />
    </Stack.Navigator>
  );
}
