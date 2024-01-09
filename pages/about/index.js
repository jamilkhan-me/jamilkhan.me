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
import socialMedialinks from "@/data/socialMedialinks";
import { IoIosArrowRoundForward } from "react-icons/io";
import skills from "@/data/skills";
import SkillCard from "@/components/SkillCard";
import education from "@/data/education";
import whyChooseMe from "@/data/whyChooseMe";
import EducationCard from "@/components/EducationCard";
import WhyChooseMeCard from "@/components/WhyChooseMeCard";

function About({ about }) {
  return (
    <div className="w-full h-full">
      <div className="mt-52 flex flex-col items-center">
        <h1 className="text-8xl font-extrabold">Hello 👋 I&aposm Jamil Khan</h1>
        <h1 className="text-8xl font-extrabold pt-4">I build digital stuff</h1>
        <p className="text-4xl font-semibold w-[60rem] pt-10">
          I'm passionate about my work because I believe that good design can
          make a real difference in the world — It can help businesses attract
          new customers, build stronger relationships, and create a more
          positive brand image. I love the challenge of taking someone&aposs
          vision and turning it into a reality.
        </p>
        <div className="pt-10">
          {socialMedialinks.map((link) => (
            <button
              className="py-1 px-2 border-2 border-black mr-4 rounded-2xl transition duration-500 hover:bg-black hover:text-white"
              key={link.name}
            >
              <Link target="_blank" href={link.link}>
                {link.name}
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className="h-full flex flex-row gap-5 border-t-2 my-20">
        <div className="w-1/2 py-32">
          <h1 className="text-2xl font-semibold flex flex-row">
            About me
            <span className="text-4xl">
              <IoIosArrowRoundForward />
            </span>
          </h1>
          <h1 className="text-7xl font-semibold leading-tight pt-4">
            Bridging Innovation with Technology Solutions
          </h1>
          <p className="text-3xl font-semibold ">
            I believe that good design can make a real difference in the world.
            It can help businesses attract new customers, build stronger
            relationships, and create a more positive brand image.
          </p>
        </div>
        <div className="w-1/2 py-32 flex flex-col items-center  overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-2xl shadow-2xl transition duration-300 ease-in-out hover:scale-110"
            src="/profileimg.jpg"
            alt="profile"
            width={400}
            height={600}
          />
        </div>
      </div>
      <div className="h-full flex flex-row gap-5 border-t-2 my-20">
        <div className="w-1/3 py-40">
          <h1 className="text-6xl font-semibold flex flex-row">
            Skils
            <span className="text-6xl">
              <IoIosArrowRoundForward />
            </span>
          </h1>
        </div>
        <div className="w-2/3 py-32 grid grid-cols-4 gap-2">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      <div className="h-full flex flex-row gap-5 border-t-2 my-20">
        <div className="w-1/3 py-32">
          <h1 className="text-6xl font-semibold flex flex-row">
            Education
            <span className="text-6xl">
              <IoIosArrowRoundForward />
            </span>
          </h1>
        </div>
        <div className="w-2/3 py-32">
          <div className="w-full">
            {education.map((list) => (
              <EducationCard key={list.title} list={list} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex flex-row gap-5 border-t-2 mt-20">
        <div className="w-1/3 pt-20">
          <h1 className="text-5xl font-semibold flex flex-row">
            Why choose me
            <span className="text-6xl flex items-center">
              <IoIosArrowRoundForward />
            </span>
          </h1>
        </div>
        <div className="w-2/3 pt-20">
          <div className="w-full grid grid-cols-2 gap-10">
            {whyChooseMe.map((list) => (
              <WhyChooseMeCard key={list.title} list={list} />
            ))}
          </div>
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
