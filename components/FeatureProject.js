import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

const FeatureProject = ({ project }) => {
  return (
    <div className="flex flex-row sm:flex-col ">
      <div className=" w-2/3 sm:w-full">
        <Link href={project.previewLink} target="_blank">
          <Image
            src={project.projectImage.url}
            alt={project.title}
            className="w-full h-full rounded-xl cursor-pointer transition duration-200 ease-out hover:skew-x-2"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="w-1/3 sm:w-full flex flex-col  mt-16 sm:mt-2 ">
        <h1 className="flex justify-end  text-xl sm:hidden">Feature Project</h1>
        <h1 className="flex justify-end sm:justify-start text-4xl sm:text-3xl font-extrabold uppercase my-3">
          {project.title}
        </h1>
        <p className="flex justify-end sm:justify-start items-end text-xl text-right font-medium ">
          {project.description}
        </p>
        <h1 className="flex justify-end text-lg font-mono my-3 sm:hidden">
          {project.tag}
        </h1>
        <span className="flex justify-end sm:hidden">
          <Link href={project.githubLink} target="_blank">
            <FaGithub className="text-2xl mx-3" />
          </Link>
          <Link href={project.previewLink} target="_blank">
            <BiLinkExternal className="text-2xl" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FeatureProject;
