import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../types-navigation";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import Spacing, {
  HEIGHT_SCREEN,
  isSmall,
  WIDTH_SCREEN,
} from "../constants/Spacing";

console.log(HEIGHT_SCREEN);

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function Onboarding({ navigation: { navigate } }: Props) {
  const insets = useSafeAreaInsets();

  const compare = WIDTH_SCREEN <= isSmall;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Colors.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        position: "relative",
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: Fonts["poppins-bold"],
            fontSize: Spacing * 3,
          }}
        >
          Hiring.io
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 400,
          marginHorizontal: 16,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 400,
          }}
          source={require("../assets/images/onboarding-image.jpg")}
          resizeMode="cover"
        />
      </View>

      <View>
        <Text
          style={[
            {
              paddingHorizontal: Spacing,
              fontFamily: Fonts["poppins-semiBold"],
              textAlign: "center",
              fontSize: compare ? Spacing * 2.5 : Spacing * 4.5,
              // color: activeScreen === isSmall ? "red" : "green",
            },
          ]}
        >
          Everything you need in one app
        </Text>
        <Text
          style={{
            paddingHorizontal: Spacing,
            marginTop: Spacing,
            fontFamily: Fonts["poppins-regular"],
            fontSize: compare ? Spacing * 1.4 : Spacing * 2,
            textAlign: "center",
          }}
        >
          Finding your dream job is more easier and faster with Hiring.io
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => navigate("Home")}
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 70,
            borderWidth: 1,
            backgroundColor: Colors.darkText,
            marginTop: Spacing * 10,
            borderRadius: Spacing,
          }}
        >
          <Text
            style={{
              marginRight: Spacing * 4,
              color: Colors.background,
              fontFamily: Fonts["poppins-regular"],
              fontSize: Spacing * 2,
            }}
          >
            Let's Get Started
          </Text>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={Spacing * 3}
            color={Colors.background}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
