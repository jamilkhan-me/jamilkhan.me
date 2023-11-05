import { getBookNotes } from "@/services";
import BookNote from "@/components/books/BookNote";
import BookHeading from "@/components/books/BookHeading";
import Link from "next/link";

function BookNotes({ notes }) {
  return (
    <>
      <div className="mt-32">
        <div className="my-10 h-72">
          <BookHeading />
        </div>
        <hr className="mb-5" />
        <h1 className="flex justify-center text-2xl font-bold mb-8 underline underline-offset-4">
          My Recent Reads
        </h1>
        <div className="flex flex-row justify-center flex-wrap gap-5">
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
  };
}

export default BookNotes;
