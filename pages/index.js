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
import { RiTwitterXLine } from "react-icons/ri";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
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
      <section className=" flex flex-row justify-between mt-40 gap-14">
        <div className=" w-2/3 h-auto flex flex-col justify-center">
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
          <div className="bg-transparent cursor-pointer group perspective flex flex-col  w-72 h-[29rem] rounded-xl drop-shadow-lg shadow-gray-900  ">
            <div className="rounded-xl relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className=" absolute backface-hidden border-2 w-full h-full">
                <div className="h-1/2 bg-blue-400 rounded-t-lg flex flex-col justify-center ">
                  <div className="rounded-xl flex justify-center w-12 h-3 mt-3 mx-auto bg-white"></div>
                  <div>
                    <Image
                      src="/static/profile1.png"
                      alt="profile image"
                      className="flex justify-center  rounded-full mx-auto my-6"
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
              <div className="absolute rounded-xl my-rotate-y-180 backface-hidden w-full h-full bg-gray-200 overflow-hidden">
                <div className="rounded-xl flex justify-center w-12 h-3 mt-5 mx-auto bg-white"></div>
                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <h1 className="text-3xl font-semibold mb-3">Hello 👋</h1>

                  <p>
                    My name is Jamil Khan. I am a software developer who loves
                    to write clean code and staying current with industry
                    trends. Beyond coding, I love reading technical articles and
                    non-fictional books. I strongly believe in continunous
                    learning and improving myself.
                  </p>
                  <p className="my-5 text-lg font-bold">Follow Me </p>
                  <div className=" flex flex-row gap-2 font-semibold text-gray-700 ">
                    <Link
                      className="scaleEffect "
                      href="https://twitter.com"
                      target="_blank"
                    >
                      <RiTwitterXLine size={23} />
                    </Link>
                    <Link
                      className="scaleEffect "
                      href="https://linkedin.com"
                      target="_blank"
                    >
                      <FaLinkedin size={23} />
                    </Link>
                    <Link
                      className="scaleEffect "
                      href="https://github.com"
                      target="_blank"
                    >
                      <FaGithubSquare size={23} />
                    </Link>
                    <Link
                      className="scaleEffect "
                      href="https://facebook.com"
                      target="_blank"
                    >
                      <FaFacebookSquare size={23} />
                    </Link>
                    <Link
                      className="scaleEffect "
                      href="https://instagram.com"
                      target="_blank"
                    >
                      <FaInstagramSquare size={23} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen mt-20 gap-14">
        <div>
          <h1 className="flex justify-center  text-4xl font-bold my-10">
            <span className="highlight ">Portfolio</span> section
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
            <Link href="/projects">
              <RoundButton>View More Projects</RoundButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full h-auto my-20 gap-14">
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
              <Link
                className="border-2 px-2 py-1 rounded-lg bg-gray-100  hover:border-gray-600"
                href="/blog"
              >
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
          <Link href="/notes">
            <RoundButton>View More Notes</RoundButton>
          </Link>
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
    revalidate: 600,
  };
}
