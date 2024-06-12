import React from "react";
import { getNotes } from "@/utils/notes";
import Link from "next/link";
import Pagination from "@/components/pagination";

export default async function BookNote({ searchParams }) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 3;

  const { notes, pageCount } = await getNotes({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  return (
    <div>
      <h1>Recent posts</h1>
      <p>Here are my recent writtings</p>
      <hr />

      <section>
        <div className="my-8">
          Display&nbsp;
          {order === "newest" && (
            <Link href="/bookNote?order=oldest" className="underline">
              oldest
            </Link>
          )}
          {order === "oldest" && (
            <Link href="/bookNote?order=newest" className="underline">
              newest
            </Link>
          )}
        </div>
        <ul>
          {notes.map((note) => (
            <li key={note.slug}>
              <Link
                className="flex flex-row justify-between"
                href={`/bookNote/${note.slug}`}
              >
                <h1>{note.frontmatter.title}</h1>
                <span>{note.frontmatter.date}</span>
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
