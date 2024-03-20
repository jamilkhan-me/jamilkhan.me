import Card from "@/components/Card";
import { getAllProjects } from "@/services";

export default function Projects({ projects }) {
  return (
    <>
      <div className="my-40 w-1/2">
        <h1 className="text-3xl  font-righteous font-extrabold leading-9 tracking-wide text-n-1 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects.
        </h1>
        <p className="text-3xl my-8 leading-[2.5rem] font-mono font-semibold text-n-1">
          Here are some of my projects from the last few months.
        </p>
        <p className="text-lg font-mono  text-n-2">
          I have had the privilege of working on diverse projects that have
          allowed me to hone my skills and push boundaries.
        </p>
      </div>
      <div>
        <h1 className="text-4xl uppercase font-righteous my-8 sm:flex sm:items-center">
          Recent Works
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-10">
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: { projects },
    revalidate: 600,
  };
}
