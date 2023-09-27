"use client";

import { createContext, useState } from "react";

export const ShopContext = createContext({
  guitarData: [],
  featuredData: [],
});

export const ShopProvider = ({ children }) => {
  const [guitarData, setGuitarData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);

  const setMainGuitarsData = (dbData) => {
    setGuitarData(dbData);
  };

  const setMainFeaturedData = (dbData) => {
    setFeaturedData(dbData);
  };

  const value = {
    guitarData,
    featuredData,
    setMainGuitarsData,
    setMainFeaturedData,
  };
  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  );
};
