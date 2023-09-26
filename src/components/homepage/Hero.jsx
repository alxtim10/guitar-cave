import React from "react";
import bg from "../../../public/mainBG.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="min-h-screen flex justify-center items-center bg-center bg-auto bg-fixed"
    >
      <h1 className="text-white text-5xl">Discover your guitar to shred</h1>
    </div>
  );
};

export default Hero;
