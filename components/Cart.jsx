"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import CartItems from "./CartItems";
export default function Cart() {
  const { isOpen, setIsOpen, cart, totalAmount } = useContext(CartContext);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <div
        className="absolute w-full h-screen flex flex-col justify-between pb-3 right-0 top-0 sm:w-1/2 lg:w-1/4 bg-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <CartItems />
        {cart.length > 0 && (
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">
              Total: <span className="text-lg font-normal">{totalAmount}</span>
            </h1>
            <button className="bg-yellow-400 py-2 px-7 rounded-md self-center text-black cursor-pointer hover:text-white">
              CheckOut!!!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
