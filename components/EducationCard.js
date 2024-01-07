import React from "react";

const EducationCard = ({ list }) => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl">{list.session}</h1>
      <h1 className="text-3xl font-semibold py-3">{list.title}</h1>
      <h1 className="text-xl font-semibold pb-2">{list.university}</h1>
      <hr className="mb-5 py-2" />
    </div>
  );
};

export default EducationCard;
