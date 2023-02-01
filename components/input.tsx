import { View, Text, TextInput } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import Fonts from "../constants/Fonts";

export default function Input() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: Spacing * 1,
        borderColor: Colors.borderWithOpacity,
        borderWidth: 1,
        borderRadius: Spacing * 4,
      }}
    >
      <Ionicons
        name="search-outline"
        size={Spacing * 3}
        color={Colors.border}
      />
      <TextInput
        placeholder="Search"
        style={{
          flex: 1,
          fontFamily: Fonts["poppins-regular"],
          fontSize: Spacing * 2,
          marginTop: 5,
          marginLeft: Spacing,
        }}
      />
    </View>
  );
}
