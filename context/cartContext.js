"use client";
import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //check if cart is opoen or close
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  // add to cart

  const addToCart = (product) => {
    // check if the product is already in the card
    const cartItem = cart.find((item) => item.id === product.id);
    if (!cartItem) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
