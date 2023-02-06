import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../types-navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Jobs, user } from "../data";

import { WIDTH_SCREEN } from "../constants/Spacing";
import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

import SearchInput from "../components/input";

import { recent_job_posted } from "../data/index";

import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

// console.log(Jobs);
export default function HomeScreen({ navigation: { navigate } }: Props) {
  const insets = useSafeAreaInsets();

  const [saveJob, setSaveJob] = useState<boolean>(false);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          padding: 16,
          backgroundColor: Colors.background,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: Fonts["poppins-regular"],
              fontSize: 24,
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
              // fontSize: compare ? Spacing * 3.9 : Spacing * 4.9,
              fontSize: 42,
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
          <Text style={{ fontSize: 16, fontFamily: Fonts["poppins-semiBold"] }}>
            {" "}
            Popular Jobs
          </Text>
          <Text
            style={{
              // fontSize: compare ? Spacing * 1.4 : Spacing * 2.5,
              fontSize: 16,
              color: Colors.gray,
            }}
          >
            See all
          </Text>
        </View>

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 16,
            }}
          >
            {recent_job_posted.map((jobs) => (
              // container
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                key={jobs.id}
                style={{
                  width: WIDTH_SCREEN - 90,
                  height: 166,
                  marginRight: 16,
                  borderRadius: 16,
                  padding: 14,
                  marginBottom: 8,
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
                      width: 200,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: Colors.background,
                        width: 54,
                        height: 54,
                        borderRadius: 16,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={jobs.image}
                        style={{
                          width: 38,
                          height: 38,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: Fonts["poppins-semiBold"],
                          fontSize: 16,
                        }}
                      >
                        {jobs.name_company}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Fonts["poppins-regular"],
                          fontSize: 14,
                        }}
                      >
                        {jobs.location}
                      </Text>
                    </View>
                  </View>
                  <View>
                    {saveJob && (
                      <Ionicons
                        onPress={() => setSaveJob(false)}
                        name="bookmark-sharp"
                        size={26}
                        color={Colors.darkText}
                      />
                    )}

                    {!saveJob && (
                      <Ionicons
                        onPress={() => setSaveJob(true)}
                        name="bookmark-outline"
                        size={26}
                        color={Colors.darkText}
                      />
                    )}
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
                      // fontSize: compare ? Spacing * 1.8 : Spacing * 2.6,
                      fontSize: 18,
                    }}
                  >
                    {jobs.job}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Fonts["poppins-regular"],
                      // fontSize: compare ? Spacing * 1.4 : Spacing * 2,
                      fontSize: 16,
                    }}
                  >
                    {jobs.salary} / year
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts["poppins-regular"],
                      // fontSize: compare ? Spacing * 1.4 : Spacing * 2,
                      fontSize: 16,
                      marginLeft: 8,
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
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: Fonts["poppins-semiBold"] }}>
            {" "}
            Recents Jobs
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: Colors.gray,
            }}
          >
            See all
          </Text>
        </View>
        {Jobs.map((job) => (
          <TouchableOpacity
            key={job.position}
            onPress={() => navigate("Job-detail", { good_jobs: job })}
            style={{
              backgroundColor: Colors.lightGray,
              width: WIDTH_SCREEN - 32,
              height: 70,
              borderRadius: 8,
              marginBottom: 16,
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                // borderWidth: 1,
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                backgroundColor: Colors.background,
              }}
            >
              <Image
                source={job.image}
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            </View>
            <View
              style={{
                padding: 4,
                marginLeft: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: Fonts["poppins-semiBold"],
                  fontSize: 14,
                }}
              >
                {job.position} {""}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts["poppins-regular"],
                  fontSize: 12,
                  lineHeight: 14,
                }}
              >
                {job.company.enterprise} - {job.work_period}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
