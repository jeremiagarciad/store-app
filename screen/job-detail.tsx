import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types-navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Job-detail">;

// { route, navigation })

export default function JobDetail({ route, navigation }: Props) {
  const jobdetails = route.params.good_jobs;
  console.warn(jobdetails);

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text>texto</Text>
    </View>
  );
}
