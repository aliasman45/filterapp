"use client";
import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //check if cart is opoen or close
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  console.log(cart);
  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    // check if the product is already in the card
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
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
