import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../auth/login";

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
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
