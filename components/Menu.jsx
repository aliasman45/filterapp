"use client";
import React, { useContext } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillShopping } from "react-icons/ai";
import { FilterContext } from "@/context/filterCotext";
import { CartContext } from "@/context/cartContext";
import Categories from "./Categories";
import Brands from "./Brands";
import Cart from "./Cart";
export default function Menu() {
  const { menu, setMenu } = useContext(FilterContext);
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div className="flex gap-4">
      <AiFillShopping
        size={30}
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <Cart />}
      <div className="lg:hidden">
        <div onClick={() => setMenu(!menu)}>
          {menu ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
        <div
          className={`${
            menu ? "hidden" : "block"
          } absolute right-0 top-[100%] z-10 bg-white lg:hidden p-2 shadow-2xl`}
        >
          <Categories />
          <Brands />
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
