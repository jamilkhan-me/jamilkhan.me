import Image from "next/image";
import React from "react";

const WhyChooseMeCard = ({ list }) => {
  return (
    <div className="bg-slate-100 p-6 rounded-xl transition duration-300 hover:scale-110">
      <Image src={list.icon} alt={list.title} width={40} height={40} />
      <h1 className="py-5 text-2xl font-semibold">{list.title}</h1>
      <h2 className="text-lg text-left">{list.description}</h2>
    </div>
  );
};

export default WhyChooseMeCard;
