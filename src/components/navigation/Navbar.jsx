"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 925) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={` ${
        color ? "bg-black opacity-60" : "bg-transparent"
      } w-full flex justify-between fixed top-0 left-0 px-10 py-5 transition duration-500 z-50`}
    >
      <Link href="/">
        <h1 className="text-white text-3xl">Guitar Cave</h1>
      </Link>
      <div className="flex gap-10 text-white text-lg">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/shop">
          <h1>Buy</h1>
        </Link>
        <h1>About Us</h1>
        <h1>Account</h1>
      </div>
    </div>
  );
};

export default Navbar;
