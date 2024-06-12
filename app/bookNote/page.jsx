import React from "react";
import { getNotes } from "@/utils/notes";
import Link from "next/link";
import BookNote from "@/components/BookNote";
import Pagination from "@/components/Pagination";

export default async function BookNotePage({ searchParams }) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 8;

  const { notes, pageCount } = await getNotes({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  return (
    <div className="max-w-7xl mx-auto mt-48 mb-20 px-8">
      <h1 className="heading">
        Welcome to my
        <span className="text-purple"> Digital Bookshelf </span>
      </h1>
      <p className="text-center font-light text-lg flex items-center justify-center mx-auto max-w-4xl my-5">
        I&apos;m an avid reader, always looking to learn and grow. Here, I share
        detailed notes and insights from the books I&apos;ve read, capturing the
        key ideas and lessons that have inspired me along the way.
      </p>
      <hr />

      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link
                className="flex flex-row justify-between"
                href={`/bookNote/${note.slug}`}
              >
                <BookNote book={note} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Pagination pageCount={pageCount} />
        </div>
      </section>
    </div>
  );
}
