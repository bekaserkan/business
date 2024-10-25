import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../auth/login";
import Wervwr from "../pages/wervwr";

const Stack = createStackNavigator();

export default function AuthScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Wervwr} />
    </Stack.Navigator>
  );
}
