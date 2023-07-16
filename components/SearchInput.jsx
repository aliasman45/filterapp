"use client";
import React, { useContext, useEffect } from "react";
import { FilterContext } from "@/context/filterCotext";
import { BsSearch } from "react-icons/bs";
import { filterData } from "@/utils/filterData";
export default function SearchInput() {
  const { querry, setQuerry, filters } = useContext(FilterContext);
  useEffect(() => {
    const data = async () => {
      await filterData(filters, querry);
    };
    data();
    // console.log(querry);
  }, [querry]);
  return (
    <nav className="py-4">
      <label className="flex items-center gap-3 ">
        <input
          type="text"
          value={querry}
          onChange={(e) => setQuerry(e.target.value)}
          placeholder={`search...`}
          className="text-gray-400 outline-none border-2 rounded-md border-gray-400 p-2"
        />
        <button className="cursor-pointer bg-yellow-400 py-2 px-7 rounded-md hover:text-white">
          <BsSearch />
        </button>
      </label>
    </nav>
  );
}
