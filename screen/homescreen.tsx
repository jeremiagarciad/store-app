import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../types-navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { user } from "../data";

import Spacing, { isSmall, WIDTH_SCREEN } from "../constants/Spacing";
import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

import SearchInput from "../components/input";

import { recent_job_posted } from "../data/index";

import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ route, navigation: { navigate } }: Props) {
  const insets = useSafeAreaInsets();

  const compare = WIDTH_SCREEN === isSmall;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        padding: Spacing + 6,
        backgroundColor: Colors.background,
        // backgroundColor: "red",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: Fonts["poppins-regular"],
            fontSize: Spacing * 2,
          }}
        >
          Hiring.io
        </Text>
        <Image style={{ width: 40, height: 40 }} source={user.image} />
      </View>

      <View>
        <Text
          style={{
            fontFamily: Fonts["poppins-bold"],
            fontSize: compare ? Spacing * 3.9 : Spacing * 4.9,
            lineHeight: 66,
          }}
        >
          Find your creative Job
        </Text>
      </View>

      <View>
        <SearchInput />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: compare ? Spacing * 1.8 : Spacing * 2.5 }}>
          {" "}
          Popular Jobs
        </Text>
        <Text
          style={{
            fontSize: compare ? Spacing * 1.4 : Spacing * 2.5,
            color: Colors.gray,
          }}
        >
          See all
        </Text>
      </View>

      <ScrollView horizontal={true}>
        <View
          style={{
            flexDirection: "row",
            padding: 4,
            height: Spacing * 25,
          }}
        >
          {recent_job_posted.map((jobs) => (
            // container
            <View
              key={jobs.id}
              style={{
                width: compare ? Spacing * 30 : Spacing * 40,
                height: compare ? Spacing * 20 : Spacing * 24,
                marginRight: 16,
                borderRadius: 25,
                padding: 24,
                backgroundColor: Colors.lightGray,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 4,
                  // alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    borderColor: "red",
                    width: 200,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: Colors.background,
                      width: 80,
                      height: 75,
                      borderRadius: 16,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={jobs.image}
                      style={{
                        width: 42,
                        height: 42,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: 16,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: Fonts["poppins-semiBold"],
                        fontSize: 24,
                      }}
                    >
                      {jobs.name_company}
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts["poppins-regular"],
                        fontSize: 16,
                        lineHeight: 18,
                      }}
                    >
                      {jobs.location}
                    </Text>
                  </View>
                </View>
                <View>
                  <Ionicons
                    name="bookmark"
                    size={Spacing * 2}
                    color={Colors.darkText}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts["poppins-semiBold"],
                    fontSize: Spacing * 2.6,
                  }}
                >
                  {jobs.job}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts["poppins-regular"],
                    fontSize: Spacing * 2,
                  }}
                >
                  {jobs.salary} / year
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts["poppins-regular"],
                    fontSize: Spacing * 1.8,
                    marginLeft: 16,
                    paddingHorizontal: 6,
                    paddingVertical: 3,
                    borderRadius: 6,
                    backgroundColor: Colors.background,
                  }}
                >
                  {" "}
                  {jobs.work_period}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <Text style={{ fontSize: compare ? Spacing * 1.8 : Spacing * 2.5 }}>
          {" "}
          Popular Jobs
        </Text>
        <Text
          style={{
            fontSize: compare ? Spacing * 1.4 : Spacing * 2.5,
            color: Colors.gray,
          }}
        >
          See all
        </Text>
      </View>
    </View>
  );
}
