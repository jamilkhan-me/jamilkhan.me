import React from "react";
import Image from "next/image";

const SkillCard = ({ skill }) => {
  return (
    <div className="w-full h-32 py-2 px-4 gap-5 rounded-2xl flex flex-row items-center bg-n-6 border-t-2 border-n-2">
      <Image
        className="w-20 h-20 rounded-full"
        src={skill.imgSrc}
        alt={skill.name}
        width={300}
        height={300}
      />
      <h1 className="py-5 text-2xl font-mono font-semibold">{skill.name}</h1>
    </div>
  );
};

export default SkillCard;
