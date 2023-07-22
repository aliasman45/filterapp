"use client";
import { getData } from "@/utils/getData";
import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "@/context/filterCotext";
export default function Categories() {
  const [categories, setCategories] = useState(null);
  const { filters, setFilters } = useContext(FilterContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      const categories = data.map((item) => item.category);
      const uniqueCategories = Array.from(new Set(categories));
      setCategories(uniqueCategories);
    };
    fetchData();
  }, []);
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
        )) || "loading...."}
      </div>
    </div>
  );
}
