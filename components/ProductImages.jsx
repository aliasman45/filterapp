"use client";
import React, { useRef } from "react";
import Image from "next/image";
export default function ProductImages({ thumbnail, images }) {
  const imageLink = useRef(null);
  const handleImageUrl = (url) => {
    imageLink.current.src = url;
  };
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2 pt-10 self-start">
      <img
        src={thumbnail}
        ref={imageLink}
        alt={thumbnail}
        // priority={true}
        // width={500}
        // height={500}
        className="w-full h-40 sm:h-44 md:h-56 lg:h-80 items-center rounded-md self-start object-contain border-2 border-gray-300"
      />

      <div className="flex flex-wrap gap-2 cursor-pointer w-full">
        <img
          src={thumbnail}
          // width={100}
          // height={100}
          // priority={true}
          alt={thumbnail}
          className="border-2 border-gray-500 rounded-md w-20 object-contain"
          onClick={() => handleImageUrl(thumbnail)}
        />
        {images.map((image, index) => (
          <img
            src={image}
            // width={100}
            // height={100}
            // priority={true}
            key={index}
            alt={image}
            className="border-2 border-gray-500 rounded-md w-20 object-contain"
            onClick={() => handleImageUrl(image)}
          />
        ))}
      </div>
    </div>
  );
}
