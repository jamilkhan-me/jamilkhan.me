import { getNote } from "@/utils/notes";
import Link from "next/link";
import React from "react";

export default async function BookNoteContent({ params }) {
  const note = await getNote(params.slug);

  return (
    <div className="max-w-5xl mx-auto mt-28">
      <article className="prose dark:prose-invert">
        <div className="flex space-x-2 my-8">
          {note.frontmatter.tags.map((tag) => (
            <Link
              key={`${Math.floor(Math.random() * 1)}`}
              href={`/bookNote/?tags=${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>

        {note.content}
      </article>
    </div>
  );
}
