import {
  getBookNotes,
  getFeaturedPosts,
  getFeaturedProjects,
  getPosts,
  getProjects,
} from "@/services";

import ProjectCard from "@/components/ProjectCard";
import RecentPost from "@/components/RecentPost";
import BookNoteCard from "@/components/BookNoteCard";
import HeroSection from "@/components/HeroSection";

export default function Home({ posts, projects, bookNotes }) {
  return (
    <div className="flex flex-col justify-between gap-40">
      <section className="my-40">
        <HeroSection />
      </section>

      {/* RECENT WORKS--------------------------------------- */}
      <section className="w-full sm:w-[38rem] h-full sm:h-auto my-16 gap-14">
        <div className="flex flex-row justify-between w-full  pt-8">
          <h1 className="text-4xl uppercase font-righteous my-10 sm:flex sm:items-center">
            Recent Work
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      {/* RECENT BLOGS--------------------------------------------------- */}
      <section className="w-full h-auto sm:w-[38rem] sm:mx-10 sm:my-10 gap-14">
        <h1 className="text-4xl uppercase font-righteous my-10 sm:flex sm:items-center">
          Recent Blogs
        </h1>

        <div className="w-full bg-n-7 border-t-2 border-n-4 rounded-3xl">
          {posts.map((post) => (
            <RecentPost key={post.title} post={post} />
          ))}
        </div>
      </section>
      {/* BOOK NOTES--------------------------------------- */}
      <section className="w-full sm:w-[38rem] h-auto sm:h-auto sm:mx-10">
        <h1 className="text-4xl uppercase font-righteous my-10 sm:flex sm:items-center text-stone-50">
          Recent Reads
        </h1>
        <div className="grid grid-cols-3 gap-10">
          {bookNotes.map((book) => (
            <BookNoteCard key={book.title} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  const posts = await getPosts();
  const bookNotes = await getBookNotes();
  return {
    props: { projects, posts, bookNotes },
    revalidate: 600,
  };
}
