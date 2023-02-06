import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

import fonts from "./config/index";

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
