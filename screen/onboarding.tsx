import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../types-navigation";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import Spacing from "../constants/Spacing";

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function Onboarding({ navigation: { navigate } }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Colors.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
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

      <View>
        <Image
          style={{ width: 450, height: 450 }}
          source={require("../assets/images/onboarding-image.jpg")}
        />
      </View>

      <View>
        <Text
          style={{
            paddingHorizontal: Spacing,
            marginTop: Spacing,
            fontFamily: Fonts["poppins-semiBold"],
            fontSize: Spacing * 4,
            textAlign: "center",
          }}
        >
          Everything you need in one app
        </Text>
        <Text
          style={{
            paddingHorizontal: Spacing,
            marginTop: Spacing,
            fontFamily: Fonts["poppins-regular"],
            fontSize: Spacing * 2,
            textAlign: "center",
          }}
        >
          Finding your dream job is more easier and faster with Hiring.io
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigate("Root")}
          activeOpacity={0.8}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 350,
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
