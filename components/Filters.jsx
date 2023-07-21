"use client";
import React, { useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FilterContext } from "@/context/filterCotext";

export default function Filters() {
  const { menu, setMenu } = useContext(FilterContext);
  return (
    <div className="lg:hidden">
      <div onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
    </div>
  );
}
