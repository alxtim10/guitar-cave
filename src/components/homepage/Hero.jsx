import React from "react";
import bg from "../../../public/mainBG.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="min-h-screen flex flex-col gap-20 justify-center items-center bg-center bg-auto bg-fixed"
    >
      <h1 className="text-white text-5xl text-center">Discover your guitar to shred</h1>
      <Link href="/shop">
        <button className="text-white text-lg border border-white p-2 hover:bg-black transition duration-300 hover:bg-opacity-50">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default Hero;
