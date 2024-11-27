import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HouseScreens from "./houseScreens";
import CarScreens from "./carsScreens";
import MainScreen from "../screens/MainScreen/MainScreen";
import Favorites from "../screens/Favorites/Favorites";
import Chat from "../screens/Chat/Chat";
import { View } from "react-native";
import { colors } from "../assets/styles/colors";
import Profile from "../screens/Profile/Profile";
import Login from "../auth/login";
import Activation from "../auth/activation";

const Stack = createStackNavigator();


export default function MainScreens() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}
          initialRouteName="MainScreen"
        >
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="HouseScreens" component={HouseScreens} />
          <Stack.Screen name="CarScreens" component={CarScreens} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Activation" component={Activation} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
