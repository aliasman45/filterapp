"use client";
import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({ category: [], brand: [] });
  const [querry, setQuerry] = useState("");
  const [menu, setMenu] = useState(true);

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, querry, setQuerry, menu, setMenu }}
    >
      {children}
    </FilterContext.Provider>
  );
};
