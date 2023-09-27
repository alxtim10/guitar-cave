"use client";
import { CartContext } from "@/contexts/cart.context";
import Image from "next/image";
import React, { useContext } from "react";

const ShopCard = ({ guitar }) => {
  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = (data) => {
    addItemToCart(data);
  };

  return (
    <>
      <div className="flex flex-col h-[40rem] bg-[#585858] w-96 rounded-md">
        <div className="relative w-full h-full">
          <Image
            src={guitar.image}
            layout="fill"
            objectFit="cover"
            alt="guitar"
          />
        </div>
        <div className="p-2 flex justify-between">
          <div className="text-white">
            <h1>{guitar.name}</h1>
            <h1>$ {guitar.price}</h1>
          </div>
          <button
            onClick={() => addItemHandler(guitar)}
            className="cursor-pointer px-4 py-2 bg-black bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
