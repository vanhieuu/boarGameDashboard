import React, { useCallback } from "react";
import { Provider } from "react-redux";
import { useTheme } from "@app/theme";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/assets/store/store";
import RootNavigator from "./src/navigation/root-navigatior";
import * as SplashScreen from "expo-splash-screen";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { Platform } from "react-native";

export default function App() {
  const [sound, setSound] = React.useState<Sound>();

  const enableAudio = async () => {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: Platform.OS === "ios" ? true : false,
      shouldDuckAndroid: true,
      staysActiveInBackground: Platform.OS === "ios" ? true : false,
      allowsRecordingIOS: Platform.OS === "ios" ? true : false,
    });
  };

  async function playSound() {

    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound/themeSound.mp3")
    );

    setSound(sound);

    await sound.playAsync();
    await sound.setVolumeAsync(0.15);
    await sound.setIsLoopingAsync(true);
  }

  React.useEffect(() => {
    enableAudio();
    Audio.requestPermissionsAsync();
    playSound();
    return;
  }, []);

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
