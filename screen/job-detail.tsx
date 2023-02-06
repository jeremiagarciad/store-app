import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types-navigation";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

type Props = NativeStackScreenProps<RootStackParamList, "Job-detail">;

export default function JobDetail({ route, navigation }: Props) {
  const [showDescription, setShowDescription] = useState(0);
  const insets = useSafeAreaInsets();

  const jobdetails = route.params.good_jobs;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            // marginTop: 8,
            // borderWidth: 1,
          }}
        >
          <View
            style={{
              width: 130,
              height: 180,
              padding: 16,
              backgroundColor: Colors.lightGray,
              borderRadius: 8,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* image */}
            <View
              style={{
                backgroundColor: Colors.background,
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Image
                source={jobdetails.image}
                style={{ width: 80, height: 80 }}
              />
            </View>
            <View style={{ marginTop: 8, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: Fonts["poppins-semiBold"],
                  lineHeight: 22,
                }}
              >
                {jobdetails.company.enterprise}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: Fonts["poppins-regular"],
                  fontSize: 12,
                }}
              >
                {jobdetails.company.location}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
            }}
          >
            {/* position - full-time etc */}
            <Text
              style={{
                fontFamily: Fonts["poppins-bold"],
                fontSize: 24,
              }}
            >
              {jobdetails.position}
            </Text>

            <Text
              style={{ fontSize: 16, fontFamily: Fonts["poppins-semiBold"] }}
            >
              {jobdetails.salary} / year
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Fonts["poppins-semiBold"],
                marginTop: 16,
                backgroundColor: Colors.lightGray,
                padding: 4,
                width: 80,
              }}
            >
              {jobdetails.work_period}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            height: 76,
            padding: 8,
            flexDirection: "row",
            borderRadius: 8,
            backgroundColor: Colors.lightGray,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.backgroundCart,
              width: "50%",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.background,
                fontSize: 16,
                fontFamily: Fonts["poppins-regular"],
              }}
            >
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.lightGray,
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 16, fontFamily: Fonts["poppins-regular"] }}
            >
              Company
            </Text>
          </TouchableOpacity>
        </View>
        {/* About de Job */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts["poppins-bold"],
              marginBottom: 16,
            }}
          >
            About de job
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts["poppins-regular"],
            }}
          >
            {jobdetails.description_job}
          </Text>
        </View>

        {/* requiremenst */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts["poppins-bold"],
              marginBottom: 16,
            }}
          >
            Requirements
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts["poppins-regular"],
            }}
          >
            {jobdetails.requirements.items.level}
          </Text>
        </View>

        {/* requiremenst */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts["poppins-bold"],
              marginBottom: 16,
            }}
          >
            Responsabilities
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts["poppins-regular"],
            }}
          >
            {jobdetails.requirements.items.knowledge}
          </Text>
        </View>

        {/* Appply Button */}
      </ScrollView>
    </View>
  );
}
