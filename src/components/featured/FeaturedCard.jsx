import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCard = ({ data }) => {
  return (
    <div className="flex flex-col w-full h-[45rem]">
      <div className="relative h-full hover:brightness-50 transition duration-300">
        <Link href="/shop">
          <Image
            src={data.image}
            layout="fill"
            objectFit="cover"
            alt="guitar"
          />
        </Link>
      </div>
      <h1 className="hover:underline cursor-pointer">{data.name}</h1>
    </div>
  );
};

export default FeaturedCard;
