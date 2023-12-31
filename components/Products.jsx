"use client";
import React, { useEffect, useState, useContext } from "react";
import { filterData } from "@/utils/filterData";
import ProductCard from "./ProductCard";
import { FilterContext } from "@/context/filterCotext";
export default function Products({ data }) {
  const [products, setProducts] = useState([]);
  const { filters, setFilters, querry } = useContext(FilterContext);
  useEffect(() => {
    const fetchData = async () => {
      const res = await filterData(data, filters, querry);
      setProducts(res);
    };
    fetchData();
  }, [filters, querry, setFilters]);

  return (
    <>
      <div className="grid grid-cols-1 self-start w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) || "loading......."}
      </div>
    </>
  );
}
