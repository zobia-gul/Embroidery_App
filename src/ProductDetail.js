import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import StarRating from './StarRating';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    // Implement add to cart functionality here
    alert('Product added to cart');
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <StarRating rating={product.rating} />
      <Text style={styles.productPrice}>PKR {product.price}</Text>
      {/* Add more product details here */}
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#20B2AA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
