import React from "react";
import { View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import defaultTheme from "./src/styles/theme/default";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import AppProvider from "./src/hooks";

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent />
      <AppProvider>
        <View style={{ backgroundColor: "#312e38", flex: 1 }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
