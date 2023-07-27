"use client";
import React, { useEffect, useState, useContext } from "react";
import { getData } from "@/utils/getData";
import { FilterContext } from "@/context/filterCotext";
export default function Brands({ brand }) {
  const { filters, setFilters } = useContext(FilterContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setFilters((prev) => ({
        ...prev,
        brand: [...prev.brand, value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        brand: [...prev.brand].filter((item) => item !== value),
      }));
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-600">Brands</h1>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {brand?.map((category, index) => (
          <label key={index} className="flex gap-4 justify-start pb-2">
            <input
              type="checkbox"
              value={category}
              className="justify-center capitalize"
              onChange={handleChange}
            />
            {category}
          </label>
        )) || "loading..."}
      </div>
    </div>
  );
}
