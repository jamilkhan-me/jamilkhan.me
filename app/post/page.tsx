import Pagination from "@/components/Pagination";
import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/utils/getPostMetadata";
import { getPosts } from "@/utils/posts";
import Link from "next/link";
import React from "react";

export default async function PostPage({ searchParams }) {
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
      <h1 className="heading">I&apos;ve been building a lot of things</h1>
      <h1 className="text-lg font-light py-10 lg:px-32 flex items-center justify-center">
        Come explore the fruits of my labor, from small experiments to
        full-blown web applications, each project showcases my love for coding
        and design.
      </h1>
      <hr />
      <div className="mb-8">
        Display&nbsp;
        {order === "newest" && (
          <Link href="/blog?order=oldest" className="underline">
            oldest
          </Link>
        )}
        {order === "oldest" && (
          <Link href="/blog?order=newest" className="underline">
            newest
          </Link>
        )}
      </div>
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
