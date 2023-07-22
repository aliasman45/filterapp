import React from "react";
import SearchInput from "./SearchInput";
import Categories from "./Categories";
import Brands from "./Brands";
import Menu from "./Menu";
export default function Nav() {
  return (
    <div className="flex justify-between items-center relative">
      <SearchInput />
      <Menu />
      {/* <div className="absolute right-0 top-[100%] z-10 bg-green-400 md:hidden">
        <div>
          <Categories />
          <Brands />
        </div>
      </div> */}
    </div>
  );
}
