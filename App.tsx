import React, { useCallback } from "react";
import { Provider } from "react-redux";
import { useTheme } from "@app/theme";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/assets/store/store";
import RootNavigator from "./src/navigation/root-navigatior";
import * as SplashScreen from 'expo-splash-screen';
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.otf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.otf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.otf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.otf"),
    

  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <StatusBar
          style="dark"
          backgroundColor={useTheme().colors.backgroundCard}
        />
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
