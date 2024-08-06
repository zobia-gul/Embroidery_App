import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductContainer = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={onPress}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
        {product.name}
      </Text>
      <Text style={styles.productPrice}>PKR {product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    width: '45%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center', // Center content horizontally
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    alignSelf:'flex-start',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    alignSelf: 'flex-start', // Align the price text to the left
  },
});

export default ProductContainer;
