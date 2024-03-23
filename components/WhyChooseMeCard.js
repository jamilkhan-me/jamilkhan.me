import Image from "next/image";
import React from "react";

const WhyChooseMeCard = ({ list }) => {
  return (
    <div className="bg-n-6 border-t-2 border-n-2 sm:w-[36rem] p-6 rounded-2xl">
      <Image
        className="rounded-xl"
        src={list.icon}
        alt={list.title}
        width={40}
        height={40}
      />
      <h1 className="py-5 text-2xl font-mono font-semibold">{list.title}</h1>
      <p className="text-lg font-mono  text-n-2">{list.description}</p>
    </div>
  );
};

export default WhyChooseMeCard;
