import React from "react";
import { StateHouseProvider } from "./context/stateHouseContext";
import { StateCarProvider } from "./context/stateCarContext";
import { СonditionProvider } from "./context/stateContext";
import { AuthProvider } from "./context/authContext";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import MainScreens from "./routes/main";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <СonditionProvider>
        <AuthProvider>
          <StateHouseProvider>
            <StateCarProvider>
              <MainScreens />
            </StateCarProvider>
          </StateHouseProvider>
        </AuthProvider>
      </СonditionProvider>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />
    </Provider>
  );
}
