import React from "react";
import Image from "next/image";

const StoreSection = () => {
  return (
    <div className="bg-[#B8B0B0] lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-5xl mt-5">Guitar Cave Jakarta</h1>
          <h1 className="text-2xl mt-2 mb-5 text-center lg:text-left">Setiabudi, Jakarta Selatan</h1>
          <p className="text-center lg:text-left"><b>Mon-Fri</b>  10am–7pm</p>
          <p className="text-center lg:text-left"><b>Sun</b>  12pm–6pm</p>
        </div>
        <div className="relative w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[60rem] lg:h-[60rem]">
          <Image src="/guitarstore.jpg" layout="fill" objectFit="contain" alt="guitarstore" />
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
