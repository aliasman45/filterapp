import React from "react";
import { getData } from "@/utils/getData";
import ProductCard from "./ProductCard";
export default async function Products() {
  const data = await getData();
  // console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
}
