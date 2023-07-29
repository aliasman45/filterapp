"use client";
import React, { useContext } from "react";
import { FilterContext } from "@/context/filterCotext";
import { BsSearch } from "react-icons/bs";
export default function SearchInput() {
  const { querry, setQuerry, filters } = useContext(FilterContext);
  return (
    <input
      type="text"
      value={querry}
      onChange={(e) => setQuerry(e.target.value)}
      placeholder={`search...`}
      className="text-gray-400 outline-none border-2 rounded-md border-gray-400 w-[60%] placeholder-sm:w-32 placeholder-md:w-48 placeholder-lg:w-64"
    />
  );
}
