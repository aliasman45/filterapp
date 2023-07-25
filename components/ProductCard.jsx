import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ product }) {
  const { thumbnail, title, price, id } = product;
  return (
    <Link href={`product/${id}`}>
      <div
        // key={}
        className="flex flex-col justify-between items-center h-62 py-3 shadow-lg rounded-md hover:cursor-pointer hover:scale-105"
      >
        <div className="pb-2 w-32 h-32">
          <Image
            src={thumbnail}
            width={200}
            height={200}
            alt={thumbnail}
            priority={true}
            className="object-contain w-full h-full items-center"
          />
        </div>
        <div className="flex flex-col pl-3">
          <h1>{title}</h1>
          <h5>€ {price}</h5>
        </div>
      </div>
    </Link>
  );
}
