import { getBookNotes } from "@/services";
import BookNote from "@/components/books/BookNote";
import BookHeading from "@/components/books/BookHeading";
import Link from "next/link";

function BookNotes({ notes }) {
  return (
    <>
      <div className="my-40 w-1/2">
        <h1 className="text-3xl  font-righteous font-extrabold leading-9 tracking-wide text-n-1 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Book Notes.
        </h1>
        <p className="text-3xl my-8 leading-[2.5rem] font-mono font-semibold text-n-1">
          Here are some of my book notes from the last few months.
        </p>
        <p className="text-lg font-mono  text-n-2">
          I have had the privilege of working on diverse projects that have
          allowed me to hone my skills and push boundaries.
        </p>
      </div>

      <div className=" ">
        <h1 className="text-4xl uppercase font-righteous my-8 sm:flex sm:items-center">
          Explore
        </h1>
        <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
          {notes.map((note) => (
            <BookNote key={note.title} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const notes = await getBookNotes();

  return {
    props: { notes },
    revalidate: 600,
  };
}

export default BookNotes;
