/**
 * Instagram reactnativecodes
 * github jgsensei
 * Daily UI #01
 * thank you
 */

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

import Container from "../components/container";
import Input from "../components/input";

import { RootStackParamList } from "../types/types";
import Spacing from "../constants/Spacing";

import { categories, user, watches } from "../data";

import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const IMAGE_WITH = 160;
const IMAGE_HEIGHT = 250;

const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <SafeAreaView>
      <Container>
        <View>
          {/* Header Container */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: Spacing,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={user.image}
                style={{
                  width: Spacing * 5,
                  height: Spacing * 5,
                }}
              />
              <Text
                style={{
                  fontSize: Spacing * 1.6,
                  fontFamily: Fonts["poppins-semiBold"],
                  marginLeft: Spacing,
                  color: Colors.text,
                }}
              >
                Hi, {user.name} {user.last_name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={Spacing * 3}
                  color={Colors.text}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="cart-outline"
                  size={Spacing * 3}
                  color={Colors.text}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            style={{
              marginBottom: Spacing * 10,
            }}
          >
            {/* header Title */}
            <View
              style={{
                paddingTop: Spacing * 2,
              }}
            >
              <Text
                style={{
                  fontSize: Spacing * 3,
                  fontFamily: Fonts["poppins-regular"],
                }}
              >
                Choice your Best Product
              </Text>
            </View>
            <View>
              <Input />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: Spacing * 2 }}
            >
              {[{ id: 0, name: "All" }, ...categories].map(
                (category, index) => (
                  <TouchableOpacity
                    onPress={() => setActiveCategoryIndex(index)}
                    key={category.id}
                    style={[
                      {
                        paddingHorizontal: Spacing * 2,
                        paddingVertical: Spacing,
                        borderColor: Colors.borderWithOpacity,
                        // borderWidth: 1,
                        borderRadius: 8,
                        marginRight: Spacing,
                        backgroundColor: Colors.Lightgray,
                      },
                      activeCategoryIndex === index && {
                        backgroundColor: Colors.lightBlue,
                        borderWidth: 0,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color:
                          activeCategoryIndex === index
                            ? Colors.onPrimary
                            : Colors.text,
                        fontFamily: Fonts["poppins-regular"],
                        fontSize: Spacing * 1.6,
                      }}
                    >
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </ScrollView>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  // borderWidth: 1,
                  marginBottom: Spacing * 10,
                }}
              >
                {watches.map((product) => (
                  <TouchableOpacity
                    key={product.id}
                    onPress={() =>
                      navigate("Product-detail", { product: product })
                    }
                    style={{
                      padding: Spacing / 1.5,
                      // borderWidth: 1,
                      marginBottom: Spacing,
                    }}
                  >
                    <Image
                      style={{
                        width: IMAGE_WITH,
                        height: IMAGE_HEIGHT,
                        borderRadius: Spacing * 2,
                        borderWidth: 1,
                      }}
                      source={product.image}
                    />
                    <Text
                      style={{
                        fontFamily: Fonts["poppins-semiBold"],
                        fontSize: Spacing * 1.4,
                        marginTop: Spacing,
                      }}
                    >
                      {product.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: Fonts["poppins-semiBold"],
                          fontSize: Spacing * 1.4,
                          color: Colors.gray,
                        }}
                      >
                        $ {product.price}
                      </Text>
                      <View
                        style={{
                          width: Spacing / 2,
                          height: Spacing / 2,
                          backgroundColor: Colors.gray,
                          borderRadius: Spacing / 4,
                          marginHorizontal: 8,
                          borderWidth: 1,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: Fonts["poppins-semiBold"],
                          fontSize: Spacing * 1.4,
                          color: Colors.gray,
                        }}
                      >
                        {product.brand}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
