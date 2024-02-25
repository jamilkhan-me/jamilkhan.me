import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

function Card({ project }) {
  return (
    <div className=" my-8 flex flex-col sm:w-[35rem] ">
      <Image
        src={project.projectImage.url}
        alt={project.title}
        className="border-2 w-[38rem] sm:w-auto h-96 rounded-2xl"
        width={800}
        height={600}
      />
      <div className="flex flex-row justify-between my-4 ">
        <h1 className="text-3xl font-bold uppercase ">{project.title}</h1>
        <span className="flex flex-row gap-3 mt-1">
          <Link href={project.preview} target="_blank">
            <BiLinkExternal size={28} />
          </Link>
          <Link href={project.github} target="_blank">
            <FiGithub size={28} />
          </Link>
        </span>
      </div>
      <h1 className="text-xl font-semibold">{project.description}</h1>

      <h1 className="font-semibold mt-3">Built with {project.tag} </h1>
    </div>
  );
}

export default Card;
