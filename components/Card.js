import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

function Card({ project }) {
  return (
    <div className="w-1/2 h-auto flex flex-row justify-between">
      <div className="flex flex-col border-2 rounded-xl shadow-xl">
        <Image
          src={project.projectImage.url}
          alt={project.title}
          className="w-[33rem] h-96"
          width={800}
          height={1200}
        />
        <div className="mx-6 my-5">
          <h1 className=" text-2xl font-bold mb-3">{project.title}</h1>
          <h1 className="text-lg font-md capitalize">{project.description}</h1>
          <div className="flex flex-row justify-between my-3">
            <h1>Tech stack</h1>
            <div className="flex flex-row gap-5">
              <BiLinkExternal size={25} />
              <FiGithub size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
