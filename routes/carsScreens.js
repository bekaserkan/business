import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function CarScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="MainCarPage"
    >
      <Stack.Screen name="MainCarPage" component={<View></View>} />
    </Stack.Navigator>
  );
}
