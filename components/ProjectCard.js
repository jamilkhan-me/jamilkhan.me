import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="w-1/2 h-80">
      <div className="projectCard hover:boxShadow">
        <Image
          src={project.projectImage.url}
          alt={project.title}
          className="w-full h-80 rounded-lg"
          width={500}
          height={400}
        />

        <h1 className=" flex justify-center py-2 text-xl font-semibold">
          {project.title}
        </h1>
        <p className="flex justify-center capitalize">{project.description}</p>

        <div className="flex flex-row justify-between mt-3">
          <div>Tags</div>
          <div className="flex flex-row gap-2">
            <Link href={project.github}>
              <FaGithubSquare size={28} />
            </Link>
            <Link href={project.preview}>
              <FaExternalLinkAlt size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
