import React from "react";
import { uniqueCategories } from "@/utils/getCategories";
import { brands } from "@/utils/getBrands";
export default function Categories() {
  //   console.log(brands);
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-600">Categories</h1>
      <div className="flex flex-col">
        {uniqueCategories.map((category) => (
          <label className="flex gap-4 justify-start pb-2">
            <input
              type="checkbox"
              value={category}
              className="justify-center capitalize"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
}
