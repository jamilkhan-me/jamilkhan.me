import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <Link
      href={project.preview}
      target="_blank"
      className="cursor-pointer transition duration-200 ease-out hover:skew-x-2 w-1/2 h-auto sm:w-full"
    >
      <Image
        src={project.projectImage.url}
        alt={project.title}
        className="w-full h-80 rounded-xl border-2 "
        width={500}
        height={400}
      />

      <div className="flex flex-col mt-3 ">
        <h1 className="text-3xl font-extrabold uppercase mb-3 ">
          {project.title}
        </h1>
        <h2 className="text-xl font-medium">{project.description}</h2>
      </div>
    </Link>
  );
}

export default ProjectCard;
