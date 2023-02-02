import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { timeElapsed } from "./utils";

const NEW_DATE = new Date();
const TIMEELAPSED = 90;

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 28,
          color: "white",
        }}
      >
        Software Engineer...
      </Text>
      <Text
        style={{
          fontSize: 28,
          color: "white",
        }}
      >
        {timeElapsed(NEW_DATE, TIMEELAPSED)}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D61355",
    alignItems: "center",
    justifyContent: "center",
  },
});
