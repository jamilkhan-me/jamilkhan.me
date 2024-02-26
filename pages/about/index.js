import { getAbout } from "@/services";
import Image from "next/image";
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
      <div className="flex flex-row sm:flex-col mt-52 gap-5">
        <div className="w-1/2 sm:w-full flex flex-col">
          <h1 className="text-2xl font-bold">Hi, my name is</h1>
          <h1 className="text-8xl font-extrabold sm:text-7xl">Jamil Khan</h1>
          <h1 className="text-6xl font-extrabold sm:text-6xl pt-4">
            I build digital product
          </h1>
          <p className="text-2xl font-semibold pt-10">
            I&apos;m software engineer specializing in crafting exceptional
            digital experiences. My expertise extends beyond mere development.
            Whether it&apos;s architecting robust backend systems or refining
            the frontend interface, I&apos;m dedicated to pushing the boundaries
            of technology to deliver outstanding digital products that delight
            users.
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
        <div className="w-1/2 sm:w-full sm:mb-5 flex justify-center">
          <Image
            className="rounded-2xl shadow-2xl transition duration-300 ease-in-out hover:scale-110"
            src="/profileimg.jpg"
            alt="profile"
            width={400}
            height={600}
          />
        </div>
      </div>

      <div className="h-full flex flex-row sm:flex-col gap-5 border-t-2 my-20 sm:my-1">
        <div className="w-1/3 py-40 sm:pb-2">
          <h1 className="text-6xl font-semibold flex flex-row ">
            Skills
            <span className="text-6xl">
              <IoIosArrowRoundForward />
            </span>
          </h1>
        </div>
        <div className="w-2/3 sm:w-full py-32 sm:py-2 grid grid-cols-4 sm:grid-cols-3 gap-2">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      <div className="h-full flex flex-row sm:flex-col gap-5 border-t-2 my-20 ">
        <div className="w-1/3 py-32 sm:pb-1">
          <h1 className="text-6xl font-semibold flex flex-row">
            Education
            <span className="text-6xl">
              <IoIosArrowRoundForward />
            </span>
          </h1>
        </div>
        <div className="w-2/3 py-32 sm:py-5">
          <div className="w-full">
            {education.map((list) => (
              <EducationCard key={list.title} list={list} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex flex-row sm:flex-col gap-5 border-t-2 mt-20">
        <div className="w-1/3 sm:w-full pt-20">
          <h1 className="text-5xl font-semibold flex flex-row">
            Why choose me
            <span className="text-6xl flex items-center">
              <IoIosArrowRoundForward />
            </span>
          </h1>
        </div>
        <div className="w-2/3 sm:w-full pt-20">
          <div className=" grid grid-cols-2 sm:grid-cols-1 gap-10">
            {whyChooseMe.map((list) => (
              <WhyChooseMeCard key={list.title} list={list} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col sm:flex-col gap-5 border-t-2 mt-20 pt-20">
        <h1 className="text-5xl font-semibold flex justify-center mb-5">
          Little Gallary
        </h1>
        <div className="h-full flex flex-row sm:items-center sm:flex-col gap-8">
          <div className="flex h-[60rem] sm:h-fit flex-col gap-8">
            <Image
              src="/static/canada/lavender.jpg"
              alt="lake"
              className="h-1/2"
              width={500}
              height={300}
            />
            <Image
              src="/static/canada/ocean.jpg"
              alt="lake"
              className="h-1/2"
              width={500}
              height={300}
            />
          </div>
          <div className="flex h-[60rem] sm:h-fit flex-col gap-8">
            <Image
              src="/static/canada/beachsunset.jpg"
              alt="lake"
              className="h-1/3"
              width={500}
              height={300}
            />
            <Image
              src="/static/canada/towerbridge.jpg"
              alt="lake"
              className="h-1/3"
              width={500}
              height={300}
            />
            <Image
              src="/static/canada/beach.jpg"
              alt="lake"
              className="h-1/3"
              width={500}
              height={300}
            />
          </div>
          <div className="flex h-[60rem] sm:h-fit flex-col gap-8">
            <Image
              src="/static/canada/flower.jpg"
              alt="lake"
              className="h-1/2"
              width={500}
              height={300}
            />
            <Image
              src="/static/canada/sunset.jpg"
              alt="lake"
              className="h-1/2"
              width={500}
              height={300}
            />
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
