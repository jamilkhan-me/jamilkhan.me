import React from "react";
import Image from "next/image";

const SkillCard = ({ skill }) => {
  return (
    <div className="my-10 w-40 h-40 flex flex-col gap-2 items-center ">
      <Image src={skill.imgSrc} alt={skill.name} width={300} height={300} />
      <h1 className="text-xl font-semibold  rounded text-metal-900 shadow-lg">
        {skill.name}
      </h1>
    </div>
  );
};

export default SkillCard;
