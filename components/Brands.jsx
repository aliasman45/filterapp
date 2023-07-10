import React from "react";
import { uniqueBrand } from "@/utils/getBrands";

export default function Brands() {
  //   console.log(brands);
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-600">Brands</h1>
      <div className="flex flex-col">
        {uniqueBrand.map((category) => (
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
