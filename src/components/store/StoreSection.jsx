import React from "react";
import Image from "next/image";

const StoreSection = () => {
  return (
    <div className="bg-[#B8B0B0] px-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl">Guitar Cave Jakarta</h1>
          <h1 className="text-2xl mt-2 mb-5">Setiabudi, Jakarta Selatan</h1>
          <p><b>Mon-Fri</b>  10am–7pm</p>
          <p><b>Sun</b>  12pm–6pm</p>
        </div>
        <div className="relative w-[60rem] h-[60rem]">
          <Image src="/guitarstore.jpg" layout="fill" objectFit="contain" alt="guitarstore" />
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
