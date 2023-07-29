"use client";
import React, { useContext } from "react";
import { FilterContext } from "@/context/filterCotext";
export default function Categories({ categories }) {
  const { filters, setFilters } = useContext(FilterContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setFilters((prev) => ({
        ...prev,
        category: [...prev.category, value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        category: [...prev.category].filter((item) => item !== value),
      }));
    }
  }
  // console.log(filters.category);
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-600">Categories</h1>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {categories?.map((category, index) => (
          <label key={index} className="flex gap-4 justify-start pb-2">
            <input
              type="checkbox"
              value={category}
              className="justify-center capitalize"
              onChange={handleChange}
            />
            {category}
          </label>
        )) || "loading....."}
      </div>
    </div>
  );
}
