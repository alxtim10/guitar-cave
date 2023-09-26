import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <>
      <div className="min-h-screen bg-[#FBF0F0]">
        <h1 className="text-center pt-32 pb-16 text-4xl">Featured Guitars</h1>
        <div className="flex justify-center items-center px-20 w-full gap-5 pb-5">
          <img
            src="/guitar1.jpg"
            alt="guitar"
            className="h-[40rem] rounded-md"
          />
          <img
            src="/guitar3.jpg"
            alt="guitar"
            className="h-[40rem] rounded-md"
          />
          <img
            src="/guitar2.jpg"
            alt="guitar"
            className="h-[40rem] rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-[#DFD3D3]">
        <div className="flex flex-col justify-center items-center bg-bg bg-cover bg-center h-[600px] w-1/2 bg-black">
            <h1 className="text-4xl text-white">Mayer&apos;s Signature</h1>
            <button className="text-white mt-5 p-2 text-md border border-white hover:bg-black hover:border-black transition duration-300">View Collection</button>
        </div>
      </div>
    </>
  );
};

export default Featured;
