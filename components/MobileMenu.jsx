"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import { FilterContext } from "@/context/filterCotext";
import { AiOutlineMenu, AiOutlineClose, AiFillShopping } from "react-icons/ai";
import Categories from "./Categories";
import Cart from "./Cart";
import Brands from "./Brands";
export default function MobileMenu({ brand, categories }) {
  const { menu, setMenu } = useContext(FilterContext);
  const { isOpen, setIsOpen, cart } = useContext(CartContext);
  return (
    <div className="flex gap-3">
      <div className="relative">
        <AiFillShopping
          size={30}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-1 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </div>
      {isOpen && <Cart />}
      <div className="lg:hidden">
        <div onClick={() => setMenu(!menu)}>
          {menu ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
        <div
          className={`${
            menu ? "hidden" : "block"
          } absolute right-0 top-[100%] z-10 bg-white lg:hidden p-2 shadow-2xl w-full`}
        >
          <Categories categories={categories} />
          <Brands brand={brand} />

          <button
            className="cursor-pointer bg-yellow-400 py-2 px-7 rounded-md hover:text-white"
            onClick={() => setMenu(!menu)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
