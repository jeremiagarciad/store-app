import React from "react";
import { View, Text, Image } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../types-navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { user } from "../data";
import Spacing from "../constants/Spacing";
import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ route, navigation: { navigate } }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        padding: Spacing + 6,
        backgroundColor: Colors.background,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: Fonts["poppins-regular"],
            fontSize: Spacing * 2.5,
          }}
        >
          Hiring.io
        </Text>
        <Image style={{ width: 48, height: 48 }} source={user.image} />
      </View>

      <View>
        <Text
          style={{
            fontFamily: Fonts["poppins-bold"],
            fontSize: Spacing * 4.9,
            lineHeight: 66,
          }}
        >
          Find your creative Job
        </Text>
      </View>
    </View>
  );
}
