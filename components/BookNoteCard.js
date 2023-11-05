import Image from "next/image";
import Link from "next/link";

function BookNoteCard({ book }) {
  return (
    <Link href={`/notes/${book.slug}`}>
      <div className="w-60 h-auto pb-4 border-2 rounded-xl shadow-lg hover:boxShadow cursor-pointer">
        <Image
          src={book.bookCover.url}
          alt={book.title}
          className="h-72 w-48 mx-5 my-4 rounded-xl"
          width={500}
          height={800}
        />
        <h1 className="text-lg font-bold flex justify-center m-3">
          {book.title}
        </h1>
        <h2 className="text-lg font-light flex justify-center">
          {book.author}
        </h2>
      </div>
    </Link>
  );
}

export default BookNoteCard;
