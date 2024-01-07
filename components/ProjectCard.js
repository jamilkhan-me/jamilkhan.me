import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProjectCard({ project }) {
  return (
    <div className="cursor-pointer transition duration-200 ease-out hover:skew-x-2 w-1/2 h-96 sm:w-96 sm:h-96">
      <div className=" hover:boxShadow">
        <Image
          src={project.projectImage.url}
          alt={project.title}
          className="w-full h-80 rounded-xl"
          width={500}
          height={400}
        />

        <div className="flex flex-row mt-3 ">
          <h1 className="text-2xl font-semibold ">{project.title}</h1>
          <span className="text-4xl font-semibold flex items-center">
            <IoIosArrowRoundForward />
          </span>
        </div>
        <h2 className="text-xl">{project.description}</h2>
      </div>
    </div>
  );
}

export default ProjectCard;
