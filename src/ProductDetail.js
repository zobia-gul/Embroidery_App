import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarRating from './StarRating';
import { useCart } from './CartContext';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={product.image} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{product.name}</Text>
      <StarRating rating={product.rating} />
      <Text style={styles.productPrice}>PKR {product.price}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={handleDecrease} />
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button title="+" onPress={handleIncrease} />
      </View>
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
  imageContainer:{
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    height:320
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
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
