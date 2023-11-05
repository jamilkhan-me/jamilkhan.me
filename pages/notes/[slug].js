import { getBookNotes } from "@/services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdIosShare, MdOutlineTimer } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import Image from "next/image";

function Note({ note }) {
  const [count, setCount] = useState(1);

  function likeCount() {
    setCount(count + 1);
  }
  return (
    <div className="mt-48 flex flex-row justify-between gap-8">
      <div>
        <div>
          <h1 className="text-2xl font-bold">Book Summary</h1>
          <h1 className="text-6xl font-bold my-5">
            {note.title}, <br /> by {note.author}
          </h1>
          <div className="flex flex-row justify-between gap-5 my-5 border-y-2 py-2">
            <div className="flex flex-row gap-8 text-sm">
              <h1 className="flex flex-row gap-3 font-md text-gray-600">
                <LuCalendarDays size={20} /> Nov 04, 2023
              </h1>
              <h1 className="flex flex-row gap-3 font-md text-gray-600">
                <MdOutlineTimer size={20} /> 3 min read
              </h1>
            </div>
            <div className="flex flex-row gap-8">
              <span className="flex flex-row gap-2">
                <FcLike size={25} onClick={likeCount} /> {count}
              </span>
              <MdIosShare size={25} />
            </div>
          </div>
        </div>

        <div className=" prose">
          <RichText content={note.bookNote.raw} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="rounded-lg border-2 p-4">
          <Image
            src={note.bookCover.url}
            className="rounded-lg w-72 h-96 object-cover object-center "
            alt={note.title}
            width={500}
            height={500}
          />

          <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{note.title}</h1>
            <h1 className="text-xl font-semibold">by {note.author}</h1>
            <h1>Rating: 8.96/10</h1>
            <h1>Genres: Productivity, Self-help</h1>
            <h1>Completed Reading: Jun 29, 2023</h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Note;

export async function getStaticPaths() {
  const notes = await getBookNotes();
  const paths = notes.map((note) => ({ params: { slug: note.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const notes = await getBookNotes();
  const note = notes.find((x) => x.slug === slug);

  return {
    props: { note },
  };
}
