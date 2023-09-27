"use client";

import React, { useContext, useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import Cart from "../cart/Cart";
import { guitarShopData } from "../../utils/guitarData.js";
import { ShopContext } from "@/contexts/shop.context";
import axios from "axios";

const ShopGrid = () => {
  const [filteredData, setFilteredData] = useState([]);
  let inputValue = "";

  const filterByName = (event) => {
    inputValue = event.target.value;
  };

  const searchHandler = () => {
    const filtered = guitarData.filter((data) =>
      data.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const { guitarData, setMainGuitarsData, setMainFeaturedData } =
    useContext(ShopContext);

  async function fetch() {
    const res = await axios
      .get("http://localhost:5000/guitars/")
      .catch((error) => {
        if (!error.response) {
          console.log("BACKEND MATI");
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });

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
      <div className="flex items-center justify-end px-20 py-10 gap-10">
        <div className="flex">
          <input
            type="text"
            className="w-[20rem] bg-white pl-2 text-base font-semibold outline-0"
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
      <div className="flex justify-start items-start gap-5 px-10">
        <Cart />
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap justify-end items-start gap-10">
            {filteredData.map((guitar) => {
              return <ShopCard key={guitar.name} guitar={guitar} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
