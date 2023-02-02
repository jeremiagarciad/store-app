import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { timeElapsed } from "./utils";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

import fonts from "./config/index";

const NEW_DATE = new Date();
const TIMEELAPSED = 11000;
// {timeElapsed(NEW_DATE, TIMEELAPSED)}

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
