"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black  w-full flex justify-between px-10 py-5 transition duration-500 z-50">
      <Link href="/">
        <h1 className="text-white text-3xl">Guitar Cave</h1>
      </Link>
      <div className="flex flex-col md:flex-row gap-2 md:gap-10 text-white text-sm md:text-lg">
        <Link href="/shop">
          <h1>Buy</h1>
        </Link>
        <Link href="/">
          <h1>About Us</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
