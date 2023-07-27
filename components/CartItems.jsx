"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import cartEmpty from "@/public/cartempty.gif";
import {
  AiFillDelete,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
export default function CartItems() {
  const { cart, setIsOpen, isOpen } = useContext(CartContext);
  return (
    <div className="pt-5">
      <AiOutlineClose
        size={20}
        className="cursor-pointer hover:text-red-600 ml-5"
        onClick={() => setIsOpen(!isOpen)}
      />
      {cart.map(({ thumbnail, title, price }) => (
        <div className="flex justify-between p-2 cursor-pointer shadow-lg rounded-md">
          <div className="flex gap-2 max-w-[85%]">
            <Image
              src={thumbnail}
              width={100}
              height={100}
              className="h-24 object-contain"
            />
            <div className="flex flex-col justify-around">
              <h1 className="text-sm">{title}</h1>
              <div className="flex gap-4">
                <AiFillMinusCircle />
                <h3 className="text-xs">$ {price}</h3>
                <AiFillPlusCircle />
              </div>
            </div>
          </div>
          <AiFillDelete className="text-lg cursor-pointer hover:text-gray-500" />
        </div>
      ))}
      {cart.length > 0 && (
        <button className="bg-yellow-400 py-2 px-7 rounded-md self-start text-black cursor-pointer hover:text-white">
          CheckOut!!!
        </button>
      )}
      {!cart.length && (
        <div className="flex items-center justify-center h-screen">
          <Image src={cartEmpty} width={300} height={300} className="" />
        </div>
      )}
    </div>
  );
}
