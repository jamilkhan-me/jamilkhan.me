import BlogCard from "@/components/blog/BlogCard";
import { getPosts } from "@/services";

function Blog({ posts }) {
  return (
    <>
      <div className="my-40 w-1/2">
        <h1 className="text-3xl  font-righteous font-extrabold leading-9 tracking-wide text-n-1 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Writings.
        </h1>
        <p className="text-3xl my-8 leading-[2.5rem] font-mono font-semibold text-n-1">
          Here are some of my writings from the last few months.
        </p>
        <p className="text-lg font-mono  text-n-2">
          I have had the privilege of working on diverse projects that have
          allowed me to hone my skills and push boundaries.
        </p>
      </div>
      <div className="w-full h-auto">
        <h1 className="text-4xl uppercase font-righteous my-8 sm:flex sm:items-center">
          Recent blogs
        </h1>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
          {posts.map((post) => (
            <BlogCard key={post.title} blog={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 600,
  };
}

export default Blog;
