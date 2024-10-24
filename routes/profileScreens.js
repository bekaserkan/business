import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function ProfileScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="MainProfilePage"
    >
      <Stack.Screen name="MainProfilePage" component={<View></View>} />
    </Stack.Navigator>
  );
}
