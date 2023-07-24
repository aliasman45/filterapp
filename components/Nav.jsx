import React from "react";
import SearchInput from "./SearchInput";
import Menu from "./Menu";
import Link from "next/link";
import { GrHome } from "react-icons/gr";
export default function Nav() {
  return (
    <div className="flex justify-between items-center relative">
      <div className="flex gap-5 items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">🏠OME</h1>
        </Link>
        <SearchInput />
      </div>
      <Menu />
    </div>
  );
}
