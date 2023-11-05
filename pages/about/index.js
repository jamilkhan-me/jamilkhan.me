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

function About({ about }) {
  return (
    <div className="flex flex-row justify-between gap-10 mx-10 mt-48">
      <div className="w-2/3">
        <div className="prose">
          {about.map((abot) => (
            <RichText key={abot.details} content={abot.details.raw} />
          ))}
        </div>
      </div>
      <div className="w-1/3 flex flex-col">
        <div>
          <Image
            className="w-72 h-96 border-4 p-5"
            src="/static/aboutMe.jpg"
            alt="Jamil Khan"
            width={500}
            height={500}
          />
        </div>
        <div className="w-72 rounded-lg flex flex-col gap-5 mt-5 p-5 border-4">
          <span className="flex flex-row gap-4 text-xl font-semibold">
            Resume <FaCloudDownloadAlt size={27} />
          </span>
          <h1>Follow me on</h1>
          <span className="flex flex-row gap-2">
            <FaLinkedin size={27} /> /in/jamilkhan
          </span>
          <span className="flex flex-row gap-2">
            <RiTwitterXLine size={27} /> @jamillkhan
          </span>
          <span className="flex flex-row gap-2">
            <FaGithubSquare size={27} /> @jamilkhan
          </span>
          <span className="flex flex-row gap-2">
            <FaFacebookSquare size={27} /> @jamilkhan
          </span>
          <span className="flex flex-row gap-2">
            <FaInstagramSquare size={27} /> @jamillkhan
          </span>
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
