import Pagination from "@/components/Pagination";
import PostPreview from "@/components/PostPreview";
import { getPosts } from "@/utils/posts";
import React from "react";

export default async function PostPage({ searchParams }) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 100;

  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  return (
    <main className="max-w-7xl mx-auto mt-48 mb-20 px-8">
      <h1 className="heading">
        <span className="text-purple"> The Knowledge </span> I want to share
      </h1>
      <h1 className="text-center font-light text-md flex items-center justify-center mx-auto max-w-4xl my-5">
        I don't write nearly enough to be good but this is my place to practice.
        I write articles on a diverse range of non-fiction topics. Long and
        short, serious and fun, good and bad. <br /> <br />I hope you can find
        something you enjoy! 😊
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
