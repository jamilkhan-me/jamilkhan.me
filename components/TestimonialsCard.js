import Image from "next/image";
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialsCard = ({ item }) => {
  return (
    <div className="w-full h-[33rem] relative bg-n-6 border-t-2 border-n-2 rounded-3xl py-10 px-8">
      <RiDoubleQuotesL className="mb-3" size={30} />
      <p className="mx-3 font-mono italic text-md text-wrap text-n-1">
        {item.testimonials}
      </p>
      <div className="my-10 absolute bottom-0  flex flex-row justify-start items-center gap-5">
        <Image
          className="w-20 h-20 rounded-full"
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
        />
        <span>
          <h3 className="text-xl leading-[2.5rem] font-mono font-semibold text-n-1">
            {item.name}
          </h3>
          <p className="font-mono  text-n-2">{item.position}</p>
        </span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
