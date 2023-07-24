import React from "react";
import { getSingleProdcut } from "@/utils/getSingleProduct";
import ProductImages from "@/components/ProductImages";
export default async function page({ params }) {
  const { id } = params;
  const product = await getSingleProdcut(id);
  const { thumbnail, images } = product;
  return (
    <div className="flex flex-col md:flex-row">
      <ProductImages thumbnail={thumbnail} images={images} />
      <div>hello</div>
    </div>
  );
}
