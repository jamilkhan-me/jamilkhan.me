import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="w-1/2 h-80">
      <div className="bg-white rounded-lg m-2 border-2 p-5">
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
          <Link className="link" href={project.github}>
            {project.github}
          </Link>
          <Link className="link" href={project.preview}>
            {project.preview}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
