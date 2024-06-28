import { getNote } from "@/utils/notes";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function BookNoteContent({ params }) {
  const note = await getNote(params.slug);

  return (
    <div className="max-w-4xl mx-auto mt-48 mb-20 px-8">
      <div className="flex flex-row gap-4 sm:space-x-8 border-2 border-slate-700 p-4 rounded-lg">
        <div>
          <Image
            src={note.frontmatter.image}
            alt={note.frontmatter.title}
            width={200}
            height={500}
            className="w-30 sm:h-72 rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-md font-medium ">Book Summary</h3>
          <h1 className="text-2xl sm:text-4xl text-zinc-200 font-semibold ">
            {note.frontmatter.title}
          </h1>
          <h2 className="text-md font-medium ">By {note.frontmatter.author}</h2>
          <small className=" mt-5  text-zinc-400 text-md font-light tracking-wide block">
            Date Read: {note.frontmatter.date}
          </small>
          <small className="  text-zinc-400 text-md font-light tracking-wide block my-4">
            Genre:
            <span>
              {note.frontmatter.tags.map((tag) => (
                <Link
                  className=" px-3"
                  key={`${Math.floor(Math.random() * 1)}`}
                  href={`/bookNote/?tags=${tag}`}
                >
                  {tag},
                </Link>
              ))}
            </span>
          </small>
        </div>
      </div>
      <article className="mt-10 prose dark:prose-invert">
        {note.content}
      </article>
    </div>
  );
}
