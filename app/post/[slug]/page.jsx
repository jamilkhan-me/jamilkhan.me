import { notFound } from "next/navigation";
import { getPost as getPostNotCached, getPosts } from "@/utils/posts";
import { cache } from "react";
import Image from "next/image";

const getPost = cache(async (slug) => await getPostNotCached(slug));

export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { frontmatter } = await getPost(params.slug);
  return frontmatter;
}

export default async function BlogPage({ params }) {
  let post;

  try {
    post = await getPost(params.slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto mt-48 mb-20 px-8">
      <div className="flex flex-col space-x-2 mb-8">
        <small className="ml-4 mt-5 md:border-l md:border-zinc-100 md:pl-4  text-zinc-400 text-md font-light tracking-wide block">
          {post.frontmatter.date}
        </small>
        <h1 className="text-4xl text-zinc-200 font-semibold my-5">
          {post.frontmatter.title}
        </h1>
        <Image
          src={post.frontmatter.image}
          alt={post.frontmatter.title}
          width={500}
          height={500}
          className="w-[35rem] h-72 rounded-lg"
        />
        {/* {post.frontmatter.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/?tags=${tag}`}
            className="dark:text-gray-400 text-gray-500"
          >
            #{tag}
          </Link>
        ))} */}
      </div>
      <article className="prose dark:prose-invert">{post.content}</article>
    </div>
  );
}
