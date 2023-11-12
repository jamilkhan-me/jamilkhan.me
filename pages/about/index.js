import { getAbout } from "@/services";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  FaCloudDownloadAlt,
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";

function About({ about }) {
  return (
    <div className="flex flex-row sm:flex-col-reverse justify-between gap-10 mx-10 mt-48">
      <div className="w-2/3 sm:w-full">
        <div className="prose">
          {about.map((abot) => (
            <RichText key={abot.details} content={abot.details.raw} />
          ))}
        </div>
      </div>
      <div className="w-1/3 sm:w-full flex flex-col">
        <div>
          <Image
            className="w-72 h-96 border-4 p-5"
            src="/static/aboutMe.jpg"
            alt="Jamil Khan"
            width={500}
            height={500}
          />
        </div>
        <div className="sm:hidden w-72 rounded-lg flex flex-col gap-5 mt-5 p-5 border-4">
          <Link
            href="/static/Resume.pdf"
            target="_blank"
            download="Jamil khan Resume"
            className="flex flex-row gap-4 text-xl font-semibold hover:text-blue-600"
          >
            Resume <FaCloudDownloadAlt size={27} />
          </Link>
          <h1>Follow me on</h1>
          <Link
            href="https://www.linkedin.com/in/jamilkhan-nu/"
            target="_blank"
            className="flex flex-row gap-2 hover:text-blue-600"
          >
            <FaLinkedin size={27} /> /in/jamilkhan
          </Link>
          <Link
            href="https://twitter.com/JamilkhanInfo"
            target="_blank"
            className="flex flex-row gap-2 hover:text-blue-600"
          >
            <RiTwitterXLine size={27} /> @jamillkhan
          </Link>
          <Link
            href="https://github.com/JamilKhan-nu"
            target="_blank"
            className="flex flex-row gap-2 hover:text-blue-600"
          >
            <FaGithubSquare size={27} /> @jamilkhan
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex flex-row gap-2 hover:text-blue-600"
          >
            <FaFacebookSquare size={27} /> @jamilkhan
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex flex-row gap-2 hover:text-blue-600"
          >
            <FaInstagramSquare size={27} /> @jamillkhan
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const about = await getAbout();

  return {
    props: { about },
    revalidate: 600,
  };
}
export default About;
