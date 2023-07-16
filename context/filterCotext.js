"use client";
import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({ category: [], brand: [] });
  const [querry, setQuerry] = useState("");

  return (
    <FilterContext.Provider value={{ filters, setFilters, querry, setQuerry }}>
      {children}
    </FilterContext.Provider>
  );
};
