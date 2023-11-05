import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedProjects({ featuredProjects }) {
  return (
    <div className="projectCard hover:boxShadow">
      <Image
        src={featuredProjects.projectImage.url}
        alt={featuredProjects.title}
        className="rounded-lg w-96 h-60"
        width={500}
        height={400}
      />

      <h1 className="text-xl font-bold flex justify-center my-1">
        {featuredProjects.title}
      </h1>
      <p className="flex justify-center font-light mb-2">
        {featuredProjects.description}
      </p>

      <div className="flex flex-row justify-between">
        <div>Tags</div>
        <div className="flex flex-row gap-2">
          <Link href="/">
            <FaGithubSquare size={23} />
          </Link>
          <Link href="/">
            <FaExternalLinkAlt size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
