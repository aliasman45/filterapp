import React, { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import CartItems from "./CartItems";
export default function Cart() {
  const { isOpen, setIsOpen } = useContext(CartContext);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <div
        className="absolute w-full h-screen right-0 top-0 sm:w-1/2 lg:w-1/4 bg-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <CartItems />
      </div>
    </div>
  );
}
