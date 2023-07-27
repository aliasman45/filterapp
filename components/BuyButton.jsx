"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cartContext";

export default function BuyButton({ product }) {
  const { addToCart } = useContext(CartContext);
  const { title, thumbnail, price, id } = product;
  return (
    <>
      <button
        onClick={() => addToCart(product)}
        className="bg-yellow-400 py-2 px-7 rounded-md self-start text-black cursor-pointer hover:text-white"
      >
        Add to Cart
      </button>
    </>
  );
}
