import { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

import { Ionicons } from "@expo/vector-icons";

import Spacing from "../constants/Spacing";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";

type Props = NativeStackScreenProps<RootStackParamList, "Product-detail">;

const IMAGE_HEIGHT = 350;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const products = route.params.product;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: Spacing * 1,
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: Spacing / 2,
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={Spacing * 3}
            color={Colors.text}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: Fonts["poppins-semiBold"],
            fontSize: Spacing * 2,
            color: Colors.text,
          }}
        >
          Detail
        </Text>

        <TouchableOpacity
          style={{
            padding: Spacing / 2,
          }}
        >
          <Ionicons
            name="cart-outline"
            size={Spacing * 3}
            color={Colors.text}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: Spacing * 10,
        }}
      >
        <View>
          <Image
            style={{
              width: "100%",
              height: IMAGE_HEIGHT,
              borderRadius: Spacing * 2,
              borderWidth: 1,
            }}
            source={products.image}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: Spacing * 2,
            marginVertical: Spacing * 2,
          }}
        >
          <Text
            style={{
              fontFamily: Fonts["poppins-bold"],
              fontSize: Spacing * 2.3,
            }}
          >
            {products.name} {""}
          </Text>
          <Text
            style={{
              fontFamily: Fonts["poppins-semiBold"],
              fontSize: Spacing * 1.8,
              color: Colors.gray,
            }}
          >
            {`$${products.price}`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            paddingHorizontal: Spacing * 2,
          }}
        >
          <Text
            style={{
              fontFamily: Fonts["poppins-semiBold"],
              fontSize: Spacing * 1.6,
            }}
          >
            About
          </Text>
          <Text style={{ fontFamily: Fonts["poppins-regular"] }}>
            {products.description}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: Spacing,
            paddingHorizontal: Spacing * 2,
          }}
        >
          <Ionicons name="star" color={Colors.secondary} size={Spacing * 2} />
          <Text
            style={{
              marginLeft: Spacing,
              color: Colors.gray,
              fontFamily: Fonts["poppins-regular"],
            }}
          >
            {products.rating}
          </Text>
          <Text
            style={{
              marginLeft: Spacing,
              color: Colors.gray,
              fontFamily: Fonts["poppins-regular"],
            }}
          >
            {products.reviews} Reviews
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: Spacing,
            paddingHorizontal: Spacing * 2,
          }}
        >
          {products.sizes?.map((size, index) => (
            <TouchableOpacity
              onPress={() => setActiveCategoryIndex(index)}
              key={size.id}
              style={[
                {
                  paddingHorizontal: Spacing * 2,
                  paddingVertical: Spacing,
                  borderColor: Colors.borderWithOpacity,
                  borderWidth: 1,
                  borderRadius: 50,
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
                {size.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: Spacing,
            paddingHorizontal: Spacing * 2,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.lightBlue,
              paddingHorizontal: Spacing * 3,
              paddingVertical: Spacing * 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderRadius: Spacing * 2,
            }}
          >
            <Ionicons
              name="cart-outline"
              size={Spacing * 3}
              color={Colors.onPrimary}
            />
            <Text
              style={{
                fontFamily: Fonts["poppins-semiBold"],
                color: Colors.onPrimary,
                fontSize: Spacing * 2,
                marginLeft: Spacing / 2,
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
