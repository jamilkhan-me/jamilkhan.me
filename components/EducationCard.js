import React from "react";
import { MdDateRange } from "react-icons/md";

const EducationCard = ({ list }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-20 rounded-3xl py-4 px-10 bg-n-6 border-t-2 border-n-2 ">
      <h1 className="text-xl font-mono flex flex-row gap-4">
        <MdDateRange size={25} />
        {list.session}
      </h1>
      <h1 className="text-xl font-mono font-semibold ">{list.title}</h1>
      <h1 className="text-xl font-mono">{list.university}</h1>
    </div>
  );
};

export default EducationCard;
