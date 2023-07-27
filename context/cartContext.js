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
  // decrease quantity of cart item if clicked on minus button
  const decreaseQuantity = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem && cartItem.quantity > 1) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  // remove product from cart when it's clicked on bin icon
  const removeProduct = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        decreaseQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
