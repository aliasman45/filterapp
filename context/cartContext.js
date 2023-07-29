"use client";
import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //check if cart is opoen or close
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  // totale amount of cart items in cart
  const [totalAmount, setTotalAmount] = useState(0);

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

  // calculate totale amount of products in cart
  useEffect(() => {
    const totalAmount = (cart) => {
      const totalAmount = cart.reduce((acc, currentItem) => {
        return currentItem.quantity * currentItem.price + acc;
      }, 0);
      setTotalAmount(totalAmount);
    };
    totalAmount(cart);
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        decreaseQuantity,
        removeProduct,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
