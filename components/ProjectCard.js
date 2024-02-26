import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div>
      <Link
        href={project.preview}
        target="_blank"
        className="flex flex-col bg-slate-100 rounded-t-2xl sm:w-[38rem]  my-8 overflow-hidden bg-cover bg-no-repeat"
      >
        <Image
          src={project.projectImage.url}
          alt={project.title}
          className="border-2 w-[38rem] h-64 sm:w-auto rounded-t-2xl transition duration-300 ease-in-out hover:scale-110"
          width={800}
          height={600}
        />

        <div className="h-58 my-4 px-5 ">
          <h1 className="text-2xl my-3 hover:underlines font-semibold">
            {project.title}
          </h1>
          <hr className="#030712" />
          <h2 className="text-md my-5 font-light ">{project.description}</h2>
          <div className="flex flex-row justify-between object-bottom mt-4 ">
            <h1 className="font-semibold flex  ">{project.tag} </h1>
            <span className="flex flex-row gap-3 ">
              <Link
                className="hover:underlines"
                href={project.preview}
                target="_blank"
              >
                <BiLinkExternal size={20} />
              </Link>
              <Link
                className="hover:underlines"
                href={project.github}
                target="_blank"
              >
                <FiGithub size={20} />
              </Link>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
