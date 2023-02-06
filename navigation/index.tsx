/**
 * reactnativecodes
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
// React Native
import { StyleSheet } from "react-native";
// Screens
import Onboarding from "../screen/onboarding";
import HomeScreen from "../screen/homescreen";
import JobDetail from "../screen/job-detail";
import Notifications from "../screen/notifications";
import Settings from "../screen/settings";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../types-navigation";

//
import { Ionicons } from "@expo/vector-icons";

import Spacing from "../constants/Spacing";

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Job-detail" component={JobDetail} />
    </Stack.Navigator>
  );
}

// function MyBottomTabs() {
//   return (
//     <BottomTabs.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         // tabBarStyle: style.tabBarStyle,
//       }}
//     >
//       <BottomTabs.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused, size }) => (
//             <Ionicons
//               name="home-sharp"
//               size={Spacing * 3}
//               color={focused ? Colors.backgroundCart : Colors.gray}
//             />
//           ),
//         }}
//       />
//       <BottomTabs.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           tabBarIcon: ({ focused, size }) => (
//             <Ionicons
//               name="notifications-circle-sharp"
//               size={Spacing * 3}
//               color={focused ? Colors.backgroundCart : Colors.gray}
//             />
//           ),
//         }}
//       />
//       <BottomTabs.Screen
//         name="Profile"
//         component={JobDetail}
//         options={{
//           tabBarIcon: ({ focused, size }) => (
//             <Ionicons
//               name="person-sharp"
//               size={Spacing * 3}
//               color={focused ? Colors.backgroundCart : Colors.gray}
//             />
//           ),
//         }}
//       />
//       <BottomTabs.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons
//               name="settings-sharp"
//               size={Spacing * 3}
//               color={focused ? Colors.backgroundCart : Colors.gray}
//             />
//           ),
//         }}
//       />
//     </BottomTabs.Navigator>
//   );
// }

// const style = StyleSheet.create({
//   // tabBarStyle: {
//   //   height: 80,
//   //   position: "absolute",
//   //   marginHorizontal: 10,
//   //   borderRadius: 16,
//   //   bottom: 10,
//   //   backgroundColor: "rgba(255, 255, 255, 0.4)",
//   // },
// });
