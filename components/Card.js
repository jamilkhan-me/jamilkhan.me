import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ project }) {
  return (
    <div className="bg-n-7 border-t-2 border-n-4 w-auto py-5 h-auto rounded-2xl duration-500 group hover:-translate-y-2">
      <Link className="" href={project.preview} target="_blank">
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
            className="mr-5 duration-500 group-hover:-rotate-45"
          />
        </div>
        <Image
          src={project.projectImage.url}
          alt={project.title}
          width={800}
          height={600}
          className="px-5 w-auto h-96"
        />
      </Link>
    </div>
  );
}

export default Card;
