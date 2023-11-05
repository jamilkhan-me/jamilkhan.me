import Image from "next/image";
import Link from "next/link";

function BookNote({ note }) {
  return (
    <Link href={`/notes/${note.slug}`}>
      <div className="w-60 h-auto pb-4 border-2 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer">
        <Image
          src={note.bookCover.url}
          alt={note.title}
          className="h-72 w-48 mx-5 my-4 rounded-xl"
          width={500}
          height={800}
        />
        <h1 className="flex justify-center text-xl font-bold">{note.title}</h1>
        <h1 className="flex justify-center font-md">{note.author}</h1>
      </div>
    </Link>
  );
}

export default BookNote;
