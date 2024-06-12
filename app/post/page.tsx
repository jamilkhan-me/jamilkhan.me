import Pagination from "@/components/Pagination";
import PostPreview from "@/components/PostPreview";
import { getPosts } from "@/utils/posts";
import React from "react";

export default async function PostPage({ searchParams }: any) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 6;

  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  return (
    <main className="max-w-7xl mx-auto mt-48 mb-20 px-8">
      <h1 className="heading">
        All of my <span className="text-purple"> Technical Knowledge </span> in
        one place
      </h1>
      <h1 className="text-center font-light text-lg flex items-center justify-center mx-auto max-w-4xl my-5">
        I&apos;ve a knack for writing messy code, and a passion for writing
        about it. Here, I share my journey with code, the mistakes I&apos;ve
        made, and the lessons I&apos;ve learned along the way.
      </h1>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {posts.map((post, idx) => {
          return <PostPreview key={idx} post={post} />;
        })}
      </div>
      <div className="mt-8">
        <Pagination pageCount={pageCount} />
      </div>
    </main>
  );
}
