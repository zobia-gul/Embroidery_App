import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity
        };
        return updatedItems;
      }
      // Item doesn't exist, add new
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const checkout = () => {
    // Handle checkout process
    setCartItems([]); // Clear cart after checkout
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};
