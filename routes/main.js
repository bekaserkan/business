import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreens from "./authScreens";
import ProfileScreens from "./profileScreens";
import HouseScreens from "./houseScreens";
import CarScreens from "./carsScreens";

const Stack = createStackNavigator();

export default function MainScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
        initialRouteName="AuthScreens"
      >
        <Stack.Screen name="AuthScreens" component={AuthScreens} />
        <Stack.Screen name="ProfileScreens" component={ProfileScreens} />
        <Stack.Screen name="HouseScreens" component={HouseScreens} />
        <Stack.Screen name="CarScreens" component={CarScreens} />
      </Stack.Navigator>
      <Flex>
        
      </Flex>
    </NavigationContainer>
  );
}
