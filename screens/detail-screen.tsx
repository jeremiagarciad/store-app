import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Spacing from '../constants/Spacing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Ionicons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

type Props = NativeStackScreenProps<RootStackParamList, "Product-detail">;

const DetailScreen: React.FC<Props> = ({route, navigation}) => {

  const products = route.params.product;
  console.log(products.name);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: Spacing * 2,
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
      <Text>
        {products.name}
      </Text>
    </View>
  )
}

export default DetailScreen