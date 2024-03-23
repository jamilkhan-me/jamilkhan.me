import myImages from "@/data/myImages";
import Image from "next/image";
import skills from "@/data/skills";
import SkillCard from "@/components/SkillCard";
import education from "@/data/education";
import whyChooseMe from "@/data/whyChooseMe";
import EducationCard from "@/components/EducationCard";
import WhyChooseMeCard from "@/components/WhyChooseMeCard";
import Testimonials from "@/data/testimonials";
import TestimonialsCard from "@/components/TestimonialsCard";

function About() {
  return (
    <>
      <div className="my-40 w-1/2">
        <h1 className="text-3xl  font-righteous font-extrabold leading-9 tracking-wide text-n-1 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About.
        </h1>
        <p className="text-3xl my-8 leading-[2.5rem] font-mono font-semibold text-n-1">
          I&apos;m a software engineer from London with a passion for building
          digital products.
        </p>
        <p className="text-lg font-mono  text-n-2">
          When I&apos;m not immersed in lines of code, I&apos;m out exploring
          city, trekking through forests, diving into the depths of the digital
          world, or surfing the waves of innovation.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {myImages.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.name}
            width={500}
            height={600}
            className="rounded-2xl"
          />
        ))}
      </div>
      <div className="my-56">
        <h1 className="text-4xl uppercase font-righteous my-8 sm:flex sm:items-center">
          My approach
        </h1>

        <div className=" grid grid-cols-4 sm:grid-cols-1 gap-10">
          {whyChooseMe.map((list) => (
            <WhyChooseMeCard key={list.title} list={list} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl uppercase font-righteous my-8 sm:flex sm:items-center">
          Skills
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-1 gap-10">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      <div className="my-56">
        <h1 className="text-4xl uppercase font-righteous my-8 sm:flex sm:items-center">
          Education
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 ">
          {education.map((list) => (
            <EducationCard key={list.title} list={list} />
          ))}
        </div>
      </div>
      <div className="my-56">
        <h1 className="text-4xl uppercase font-righteous my-8 sm:flex sm:items-center">
          testimonials
        </h1>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 ">
          {Testimonials.map((item) => (
            <TestimonialsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
