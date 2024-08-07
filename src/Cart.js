import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useCart } from './CartContext'; // Ensure CartContext is correctly imported

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart, checkout } = useCart();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    checkout();
    navigation.navigate("Login", { resetForm: true });
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>PKR {item.price} x {item.quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
        <Ionicons name="trash-bin" size={24} color="#ff0000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.totalText}>Total: PKR {calculateTotal()}</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Place order & Checkout</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#20B2AA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
