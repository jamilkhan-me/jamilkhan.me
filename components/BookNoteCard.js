import Image from "next/image";
import Link from "next/link";
import { RiDoubleQuotesL } from "react-icons/ri";

function BookNoteCard({ book }) {
  return (
    <Link
      className="bg-n-7 border-t-2 border-n-4 rounded-2xl h-[25rem] duration-500 hover:-translate-y-2"
      href={`/notes/${book.slug}`}
    >
      <Image
        src={book.bookCover.url}
        alt={book.title}
        className="w-24 h-36 rounded-xl m-5"
        width={100}
        height={150}
      />
      <h1 className="mx-5 font-mono font-semibold text-2xl text-stone-50">
        {book.title}
      </h1>
      <h2 className="mx-5 font-mono font-semibold text-lg text-stone-50">
        by {book.author}
      </h2>
      <hr className="mx-5 my-3" />
      <p className="mx-5 font-mono italic text-md text-wrap text-stone-50">
        <span>
          <RiDoubleQuotesL className="mb-3" size={30} />
        </span>
        This is book note description. You will get a summary from the book and
      </p>
    </Link>
  );
}

export default BookNoteCard;
