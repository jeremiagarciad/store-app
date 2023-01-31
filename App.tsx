/**
 * Instagram reactnativecodes
 * github jgsensei 
 * Daily UI #01
 * thank you
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {useFonts} from "expo-font"
import fonts from './config/fonts';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';

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
