import projectsData from "@/data/projectsData";
import Card from "@/components/Card";
import { getProjects } from "@/services";

export default function Projects({ projects }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-28 sm:mt-20">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl flex justify-center font-extrabold leading-9 tracking-wide uppercase text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg flex justify-center leading-7 text-gray-500 dark:text-gray-400">
            Things I have built to showcase my skills
          </p>
        </div>
        <div className="flex flex-row sm:flex-col justify-center gap-10 ">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { projects },
    revalidate: 600,
  };
}
