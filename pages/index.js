import {
  getBookNotes,
  getFeaturedPosts,
  getFeaturedProjects,
  getNavLinks,
  getPosts,
  getProjects,
} from "@/services";
import { SiJamboard } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import PostCard from "@/components/RecentPost";
import Image from "next/image";
import siteMetadata from "@/data/siteMetaData";
import Link from "next/link";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import PostSection from "@/components/PostSection";
import RecentPost from "@/components/RecentPost";
import FeaturedPost from "@/components/FeaturedPost";
import FeaturedProjects from "@/components/FeaturedProjects";
import BookNoteCard from "@/components/BookNoteCard";
import RoundButton from "@/components/RoundButton";

export default function Home({
  posts,
  projects,
  featuredPosts,
  featuredProjects,
  bookNotes,
}) {
  return (
    <div className="flex flex-col gap-40">
      <section className="flex flex-row justify-between mt-40 gap-14">
        <div className=" w-2/3 flex flex-col justify-center">
          <h1 className="text-6xl font-bold tracking-wider ">
            Molding Ideas into Reality with the Art of
            <span className=" highlight">CODE</span>
            and
            <span className="highlight">DESIGN</span>
          </h1>
          <p className="pt-8 text-xl">
            As a proficient full-stack developer, I specialize in bringing
            concepts to life through cutting-edge web applications. Dive into my
            recent projects and writings to see my mastery in React.js and web
            development.
          </p>
          <div className="flex flex-row mt-5">
            <Button>Download CV</Button>
          </div>
        </div>
        <div className="w-1/3">
          <div className=" flex flex-col  w-72 h-[29rem] rounded-xl drop-shadow-lg shadow-gray-900  ">
            <div className="h-1/2 bg-blue-400 rounded-t-lg flex flex-col justify-center ">
              <div className="rounded-xl flex justify-center w-12 h-3 mt-3 mx-auto bg-white"></div>
              <div>
                <Image
                  src="/static/profile1.png"
                  alt="profile image"
                  className="flex justify-center rounded-full mx-auto my-6"
                  width={130}
                  height={55}
                />
              </div>
            </div>
            <div className="h-1/2 bg-gray-200 flex flex-col justify-between rounded-b-lg">
              <div className="flex flex-col pt-3">
                <span className="flex justify-center text-2xl font-bold">
                  {siteMetadata.author}
                </span>
                <span className="flex justify-center pt-1 font-semibold">
                  {siteMetadata.occupation}
                </span>
                <span className="flex justify-center pt-1 text-sm">
                  <MdOutlineWork size={20} />{" "}
                  <span className="px-2 "> {siteMetadata.workStatus} </span>
                </span>
              </div>
              <div className="flex flex-row pb-3 px-3 text-blue-700">
                <span>
                  <SiJamboard size={30} />
                </span>
                <span className="text-xl font-semibold uppercase">
                  {siteMetadata.Company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen mt-20 gap-14">
        <div>
          <h1 className="flex justify-center text-4xl font-bold my-10">
            <span className="highlight">Portfolio</span> section
          </h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-between w-full h-60 object-cover mb-60">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            <div className=" w-full h-50 flex flex-row justify-start gap-5">
              {featuredProjects.map((featuredProjects) => (
                <FeaturedProjects
                  key={featuredProjects.title}
                  featuredProjects={featuredProjects}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <RoundButton>Show All</RoundButton>
          </div>
        </div>
      </section>
      <section className="w-full h-auto gap-14">
        <div className="flex flex-row justify-between gap-5">
          <div className="w-2/3 h-auto flex flex-col justify-start gap-5">
            <div className="mb-5 ">
              <h1 className="text-4xl font-bold">
                Popular <span className="highlight">Posts</span>
              </h1>
              <p className="my-5 font-semibold tracking-wider">
                Do not miss the latest trends
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </div>
          </div>
          <div className="w-1/3 h-auto border-2 p-4 bg-gray-200 rounded-xl">
            <div className="flex flex-row justify-between mb-5">
              <h1 className="text-2xl font-bold border-b-4 border-yellow-500">
                Recent posts
              </h1>
              <Link className="border-b-4 border-yellow-500" href="/">
                View all
              </Link>
            </div>
            {posts.map((post) => (
              <RecentPost key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-screen">
        <h1 className="flex justify-center text-4xl font-bold mb-8">
          My <span className="highlight">Digital BookSelf</span>
        </h1>
        <div className="flex flex-row justify-between flex-wrap gap-5">
          {bookNotes.map((book) => (
            <BookNoteCard key={book.title} book={book} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <RoundButton>See All Notes</RoundButton>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  const posts = await getPosts();
  const featuredPosts = await getFeaturedPosts();
  const featuredProjects = await getFeaturedProjects();
  const bookNotes = await getBookNotes();
  return {
    props: { projects, posts, featuredPosts, featuredProjects, bookNotes },
  };
}
