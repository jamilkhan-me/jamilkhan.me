import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <div className="bg-gradient-to-b from-n-5 from-0% to-30% border-t-2 border-n-2 w-auto py-5 h-auto rounded-2xl duration-500 group hover:-translate-y-2">
      <Link className="grid" href={project.preview} target="_blank">
        <div className="flex flex-row justify-between">
          <span>
            <h1 className="font-space px-5 mb-3  text-2xl font-semibold ">
              {project.title}
            </h1>
            <p className="relative px-5 mb-5 font-mono text-lg">
              {project.tag}
            </p>
          </span>
          <FaArrowRightLong
            size={25}
            className="mr-5 duration-500 -rotate-45 group-hover:rotate-0"
          />
        </div>
        <Image
          src={project.projectImage.url}
          alt={project.title}
          width={800}
          height={800}
          className="w-[36rem] h-96 justify-self-center rounded-2xl"
        />
      </Link>
    </div>
  );
}

export default ProjectCard;
