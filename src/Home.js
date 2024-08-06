import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductContainer from './ProductContainer';

const HomeScreen = () => {
  const navigation = useNavigation();

  const products = [
    {
      id: 1,
      name: 'Hand Embroidered Scarf',
      price: '45',
      image: require('./assets/scarf.jpg'),
    },
    {
      id: 2,
      name: 'Hand Embroidered Bag',
      price: '60',
      image: require('./assets/bag.jpg'),
    },
    {
      id: 3,
      name: 'Hand Embroidered Shirt',
      price: '100',
      image: require('./assets/shirt.jpg'),
    },
    {
      id: 4,
      name: 'Hand Embroidered Jeans',
      price: '90',
      image: require('./assets/jeans.jpg'),
    },

  ];

  return (
    <View style={styles.container}>
      {products.map((product) => (
        <ProductContainer
          key={product.id}
          product={product}
          onPress={() => navigation.navigate('ProductDetail', { product })}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap', // Allows items to wrap to the next line
  },
});

export default HomeScreen;
