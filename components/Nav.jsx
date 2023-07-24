import React from "react";
import SearchInput from "./SearchInput";
import Menu from "./Menu";
export default function Nav() {
  return (
    <div className="flex justify-between items-center relative">
      <SearchInput />
      <Menu />
    </div>
  );
}
