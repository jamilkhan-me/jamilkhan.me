import { getNote } from "@/utils/notes";
import Link from "next/link";
import React from "react";

export default async function BookNoteContent({ params }) {
  const note = await getNote(params.slug);

  return (
    <article className="prose">
      <div className="flex space-x-2 my-8">
        {note.frontmatter.tags.map((tag) => (
          <Link href={`/bookNote/?tags=${tag}`}>{tag}</Link>
        ))}
      </div>

      {note.content}
    </article>
  );
}
