
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={{
        fontSize: 28,
        color: "white"
      }}>Software Engineer...</Text>
      <Text style={{
        fontSize: 28,
        color: "white"
      }}>Daily UI Challenge! 100 Days</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D61355',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
