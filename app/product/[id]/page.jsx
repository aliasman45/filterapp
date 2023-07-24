import React from "react";
import { getSingleProdcut } from "@/utils/getSingleProduct";
import ProductImages from "@/components/ProductImages";
export default async function page({ params }) {
  const { id } = params;
  const product = await getSingleProdcut(id);
  console.log(product);
  const { title, thumbnail, images, price, description } = product;
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 md:items-center">
      <ProductImages thumbnail={thumbnail} images={images} />
      <div className="w-1/2">
        <h1 className="text-2xl text-black font-bold py-4">{title}</h1>
        <h4 className="text-xl text-gray-950 py-4">{description}</h4>
        <h1 className="text-2xl text-black font-bold py-4">$ {price}</h1>
        <button className="bg-yellow-400 py-2 px-7 rounded-md self-start text-black cursor-pointer hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
