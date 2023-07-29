import React from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { getData } from "@/utils/getData";
export default async function Nav() {
  const data = await getData();
  // unique categories list
  const categories = data.map((item) => item.category);
  const uniqueCategories = Array.from(new Set(categories));
  // unique brands list
  const brands = data.map((product) => product.brand);
  const uniqueBrand = Array.from(new Set(brands));

  return (
    <div className="flex justify-between items-center relative py-5">
      <div className="flex items-center gap-2">
        <Link href="/">
          <h1 className="text-lg sm:text-2xl font-bold cursor-pointer">
            <span>🏠</span>HOME
          </h1>
        </Link>
        <SearchInput />
      </div>
      <MobileMenu brand={uniqueBrand} categories={uniqueCategories} />
      {/* <Menu /> */}
    </div>
  );
}
