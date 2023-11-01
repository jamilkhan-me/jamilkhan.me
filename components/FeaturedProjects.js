import Image from "next/image";
import Link from "next/link";

function FeaturedProjects({ featuredProjects }) {
  return (
    <div className="mt-50 w-1/3 h-96 bg-white rounded-lg  border-2 p-3">
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

      <div className="flex justify-between">
        <Link className="link" href="/">
          Github
        </Link>
        <Link className="link" href="/">
          Preview
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProjects;
