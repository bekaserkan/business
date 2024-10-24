import React from "react";
import { StateHouseProvider } from "./context/stateHouseContext";
import { DataHouseProvider } from "./context/dataHouseContext";
import { AuthProvider } from "./context/authContext";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import MainScreens from "./routes/main";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <DataHouseProvider>
          <StateHouseProvider>
            <MainScreens />
          </StateHouseProvider>
        </DataHouseProvider>
      </AuthProvider>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />
    </Provider>
  );
}
