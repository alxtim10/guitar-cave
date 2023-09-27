"use client";

import React, { useContext } from "react";
import CartCard from "./CartCard";
import { CartContext } from "@/contexts/cart.context";
import Swal from "sweetalert2";
import axios from "axios";

const Cart = () => {
  const { cartItems, cartTotal, clearItemFromCart } = useContext(CartContext);

  const handlePurchase = async () => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you want to purchase?',
      icon: 'info',
      confirmButtonText: 'Confirm',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire('Purchased', '', 'success')
        clearItemFromCart();
      }
    })
  };

  return (
    <section className="min-h-[100px] bg-[#585858] w-[20rem] md:w-[40rem] max-w-md">
      <div className="p-10">
        <h1 className="mb-8 text-3xl text-white">Cart</h1>
        {cartItems.map((cartItem) => {
          return <CartCard key={cartItem.id} cartItem={cartItem} />;
        })}
        <div className="mt-5 text-white">
          <h1 className="text-xl mb-5">Cart Totals</h1>
          <div className="flex justify-between text-lg font-outfit">
            <h1>Subtotal</h1>
            <h1>$ {cartTotal}</h1>
          </div>
          <div className="flex justify-between text-lg font-outfit">
            <h1>Shipping</h1>
            <h1>$ 50</h1>
          </div>
          <div className="flex justify-between text-lg font-outfit mt-5">
            <h1>Total</h1>
            <h1 className="font-bold">$ {cartTotal + 50}</h1>
          </div>
          <button
            onClick={() => handlePurchase()}
            className={`${
              cartItems.length == 0 ? "hidden" : "block"
            } mt-5 cursor-pointer px-4 py-2 bg-black bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md text-sm`}
          >
            Purchase
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
