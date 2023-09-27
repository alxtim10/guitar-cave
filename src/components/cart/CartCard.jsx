"use client";

import { CartContext } from "@/contexts/cart.context";
import Image from "next/image";
import React, { useContext } from "react";
import { Minus, Plus } from "react-feather";

const CartCard = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart } = useContext(CartContext);

  const removeItemHandler = () => removeItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (
    <section className="bg-[#5f5e5e] p-2 shadow-xl mt-5">
      <div className="flex justify-start items-center">
        <div className="relative w-20 h-20  md:w-20 md:h-28">
          <Image
            src={cartItem.image}
            layout="fill"
            objectFit="cover"
            alt="guitar"
          />
        </div>
        <div className="text-white ml-5">
          <p>{cartItem.name}</p>
          <p>$ {cartItem.price}</p>
          <h1 className="flex justify-start items-center gap-5 mt-5">
            <Minus
              size={15}
              className="cursor-pointer"
              onClick={removeItemHandler}
            />
            <p className="text-">{cartItem.quantity}</p>
            <Plus
              size={15}
              className="cursor-pointer"
              onClick={addItemHandler}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CartCard;
