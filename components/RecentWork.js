import React from "react";
import { getProjects } from "@/services";

const RecentWork = ({ projects }) => {
  return (
    <div>
      <h1 className="font-righteous font-semibold text-4xl uppercase">
        Recent Work
      </h1>
      <div>
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-10">
          {projects.map((item) => (
            <h1>{item.title}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentWork;

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { projects },
    revalidate: 600,
  };
}
