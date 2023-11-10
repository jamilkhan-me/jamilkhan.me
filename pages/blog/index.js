import BlogCard from "@/components/blog/BlogCard";
import Category from "@/components/blog/Category";
import { getCategories, getPosts } from "@/services";

function Blog({ posts, categories }) {
  return (
    <div className="my-48 ">
      <h1 className="text-4xl font-bold mb-3 sm:flex sm:justify-center">
        Latest Posts
      </h1>
      <hr />
      <div className="flex flex-row sm:flex-col justify-between gap-5">
        <div className="w-3/4 sm:w-full">
          {posts.map((post) => (
            <BlogCard key={post.title} blog={post} />
          ))}
        </div>
        <div className="w-1/4 sm:w-full border-2 mt-7 p-5 h-auto bg-slate-100 rounded-lg">
          <h1 className="text-xl font-semibold uppercase mb-7">CATEGORIES</h1>
          {categories.map((category) => (
            <Category key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const categories = await getCategories();
  return {
    props: { posts, categories },
    revalidate: 600,
  };
}

export default Blog;
