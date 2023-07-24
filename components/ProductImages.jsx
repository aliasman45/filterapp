"use client";
import React, { useRef } from "react";
import Image from "next/image";
export default function ProductImages({ thumbnail, images }) {
  const imageLink = useRef(thumbnail);
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <Image
        src={thumbnail}
        ref={imageLink}
        alt={thumbnail}
        priority={true}
        width={500}
        height={500}
        className="w-full items-center rounded-md"
      />
      <div className="flex flex-wrap gap-2 cursor-pointer w-full justify-between">
        <Image
          src={thumbnail}
          width={100}
          height={100}
          alt={thumbnail}
          priority={true}
          className="border-2 border-gray-500 rounded-md"
          onClick={(e) => console.log(e.target)}
        />
        {images.map((image, index) => (
          <Image
            src={image}
            width={100}
            height={100}
            key={index}
            priority={true}
            alt={image}
            className="border-2 border-gray-500 rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
