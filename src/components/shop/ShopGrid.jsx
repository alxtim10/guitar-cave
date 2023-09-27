"use client";

import React, { useContext, useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import Cart from "../cart/Cart";
import { guitarShopData } from "../../utils/guitarData.js";
import { ShopContext } from "@/contexts/shop.context";
import axios from "axios";

const ShopGrid = () => {
  // const [filteredData, setFilteredData] = useState(guitarShopData);
  const [filteredData, setFilteredData] = useState([]);
  const [datas, setDatas] = useState(guitarShopData);
  let inputValue = "";

  const filterByName = (event) => {
    inputValue = event.target.value;
  };

  const searchHandler = () => {
    // const filtered = datas.filter((data) =>
    //   data.name.toLowerCase().includes(inputValue.toLowerCase())
    // );
    const filtered = guitarData.filter((data) =>
      data.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const { guitarData, setMainGuitarsData, setMainFeaturedData } =
    useContext(ShopContext);

  async function fetch() {
    const res = await axios.get(
      "https://guitar-cave-backend.vercel.app/guitars"
    );
    // const res = await axios.get(
    //   "http://localhost:8080/guitars"
    // );
    setMainGuitarsData(res.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    setFilteredData(guitarData);
  }, [guitarData]);

  return (
    <section className="">
      <div className="flex items-center justify-center xl:justify-end py-10 gap-10 xl:pr-20">
        <div className="flex">
          <input
            type="text"
            className="w-[15rem] bg-white pl-2 text-base font-semibold outline-0"
            placeholder="Guitar"
            onChange={filterByName}
          />
          <button
            onClick={searchHandler}
            type="submit"
            className="bg-gray-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-5 px-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap justify-center xl:justify-start lg:justify-left items-start gap-10">
            {filteredData.map((guitar) => {
              return <ShopCard key={guitar.name} guitar={guitar} />;
            })}
          </div>
        </div>
        <Cart />
      </div>
    </section>
  );
};

export default ShopGrid;
