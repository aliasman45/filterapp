import React from "react";
import Filters from "./Filters";
import SearchInput from "./SearchInput";
export default function Nav() {
  return (
    <div className="flex justify-between items-center relative">
      <SearchInput />
      <Filters />
      <div className="absolute bottom-0 right-0">hello</div>
    </div>
  );
}
