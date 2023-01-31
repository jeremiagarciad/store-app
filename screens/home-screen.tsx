import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import Container from '../components/container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import Spacing from '../constants/Spacing';
import { products } from '../data';

type Props = NativeStackScreenProps<RootStackParamList, "Home">;


const HomeScreen: React.FC<Props> = ({navigation: {navigate}}) => {
  return (
    <Container>
      <>
      {products.map((product) =>
      <TouchableOpacity
      key={product.id}
          onPress={() => navigate("Product-detail", {product: product})}
          style={{
            padding: Spacing / 2,
          }}
          >
          <Text>{product.name}</Text>
        </TouchableOpacity>
      )}

      </>
    </Container>
  )
}

export default HomeScreen;