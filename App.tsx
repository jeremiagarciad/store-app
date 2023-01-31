/**
 * Instagram reactnativecodes
 * github jgsensei 
 * Daily UI #01
 * thank you
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 28,
        color: "black"
      }}>Daily UI Challenge! 100 Days</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
