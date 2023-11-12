import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

function Card({ project }) {
  return (
    <div className="w-1/2 sm:w-96 sm:mx-3 h-auto flex flex-row  justify-between">
      <div className="flex flex-col border-2 rounded-xl hover:shadow-2xl">
        <Image
          src={project.projectImage.url}
          alt={project.title}
          className="w-[33rem] h-96 sm:w-96 sm:h-72"
          width={800}
          height={1200}
        />
        <div className="mx-6 sm:mx-3 my-5 sm:my-2">
          <h1 className=" text-2xl font-bold mb-3">{project.title}</h1>
          <h1 className="text-lg font-md capitalize">{project.description}</h1>
          <div className="flex flex-row justify-between my-3">
            <h1 className="font-bold">{project.tag}</h1>
            <div className="flex flex-row gap-5">
              <Link href={project.preview} target="_blank">
                <BiLinkExternal size={25} />
              </Link>
              <Link href={project.github} target="_blank">
                <FiGithub size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
