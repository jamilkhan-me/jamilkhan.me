import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

function FeaturedProjects({ featuredProject }) {
  return (
    <div className="cursor-pointer transition duration-200 ease-out hover:skew-x-2 sm:w-96 sm:h-96">
      {/* <Image
        src={featuredProject.projectImage.url}
        alt={featuredProject.title}
        className=" rounded-xl w-full h-full z-10"
        width={500}
        height={400}
      /> */}
      <div className="">
        <div className="flex flex-row mt-3 ">
          <h1 className="text-2xl font-semibold ">{featuredProject.title}</h1>
          <span className="text-4xl font-semibold flex items-center">
            <IoIosArrowRoundForward />
          </span>
        </div>
        <h2 className="text-xl">{featuredProject.description}</h2>
      </div>
    </div>
  );
}

export default FeaturedProjects;
