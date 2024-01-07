import {
  getBookNotes,
  getFeaturedPosts,
  getFeaturedProjects,
  getNavLinks,
  getPosts,
  getProjects,
} from "@/services";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiJamboard } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
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
    <div className="flex flex-col justify-between gap-40">
      <section className="h-full flex flex-row justify-between mt-40 gap-14 sm:flex-col-reverse ">
        <div className=" w-2/3 h-auto flex flex-col justify-center sm:w-[26rem]">
          <h1 className="text-8xl font-bold tracking-wider sm:text-4xl sm:text-center ">
            Molding Ideas into Reality with the Art of <br />
            <span className=" highlight">CODE</span>&
            <span className="highlight">DESIGN</span>
          </h1>
          <p className="pt-20 text-xl sm:text-center sm:mx-1">
            As a proficient full-stack developer, I specialize in bringing
            concepts to life through cutting-edge web applications. Dive into my
            recent projects and writings to see my mastery in React.js and web
            development.
          </p>
          <div className="flex flex-row sm:justify-center mt-5">
            <Link
              className="button"
              href="/static/Resume.pdf"
              download="Jamil khan resume"
              target="_blank"
            >
              <button className="text-lg" type="button">
                Download CV
              </button>
              <span className="text-4xl">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-transparent cursor-pointer group perspective flex flex-col sm:mx-16 w-72 h-[29rem] rounded-xl drop-shadow-lg shadow-gray-900">
            <div className="rounded-xl relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className=" absolute backface-hidden  w-full h-full">
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

                  <p>{siteMetadata.profile}</p>
                  <p className="my-5 text-lg font-bold">Follow Me </p>
                  <div className=" flex flex-row gap-2 font-semibold text-gray-700 ">
                    <Link
                      className="scaleEffect "
                      href="https://twitter.com/JamilkhanInfo"
                      target="_blank"
                    >
                      <RiTwitterXLine size={23} />
                    </Link>
                    <Link
                      className="scaleEffect "
                      href="https://www.linkedin.com/in/jamilkhan-nu/"
                      target="_blank"
                    >
                      <FaLinkedin size={23} />
                    </Link>
                    <Link
                      className="scaleEffect "
                      href="https://github.com/JamilKhan-nu"
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
      {/* RECENT WORKS--------------------------------------- */}
      <section className="w-full h-full sm:h-auto my-16 gap-14">
        <div className="flex flex-row justify-between w-full border-t-2 border-black pt-8">
          <h1 className="text-4xl font-semibold my-10 ">My Work</h1>
          <Link
            href="/projects"
            className="flex transition duration-300 hover:translate-x-4 flex-row my-10"
          >
            <h2 className="text-xl mr-2">View more</h2>
            <span className="text-2xl">
              <MdArrowOutward />
            </span>
          </Link>
        </div>
        <div className="w-full h-full">
          {featuredProjects.map((featuredProjects) => (
            <FeaturedProjects
              key={featuredProjects.title}
              featuredProjects={featuredProjects}
            />
          ))}
        </div>
        <div className="flex flex-row my-10 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      {/* RECENT BLOGS--------------------------------------------------- */}
      <section className="w-full h-auto  sm:my-10 gap-14">
        <div className="flex flex-row gap-5">
          <div className="w-1/3">
            <hr class="mt-4" />
            <h1 className="text-6xl pt-8">Writing</h1>
          </div>
          <div className="2/3">
            <h1 className="text-2xl font-semibold">Recent blogs</h1>
            {posts.map((post) => (
              <RecentPost key={post.title} post={post} />
            ))}
            <Link
              className="text-2xl font-semibold flex flex-row items-center cursor-pointer  transition duration-300 hover:translate-x-4"
              href="/blog"
            >
              View all writing
              <span className="text-4xl">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* BOOK NOTES--------------------------------------- */}
      <section className="w-full h-screen sm:h-auto">
        <div className="flex flex-row gap-5">
          <div className="w-1/3">
            <hr class="mt-4" />
            <h1 className="text-6xl pt-8">
              Digital <br /> Bookself
            </h1>
          </div>
          <div className="w-2/3">
            <h1 className="text-2xl font-semibold">Recent reading list</h1>
            <div className=" grid grid-cols-4 gap-2">
              {bookNotes.map((book) => (
                <BookNoteCard key={book.title} book={book} />
              ))}
            </div>
            <Link
              className=" mt-8 text-2xl font-semibold flex flex-row items-center cursor-pointer  transition duration-300 hover:translate-x-4"
              href="/blog"
            >
              View all notes
              <span className="text-4xl">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
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
