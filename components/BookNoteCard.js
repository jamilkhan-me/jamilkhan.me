import Image from "next/image";
import Link from "next/link";

function BookNoteCard({ book }) {
  return (
    <Link
      className="my-8 relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
      href={`/notes/${book.slug}`}
    >
      <Image
        src={book.bookCover.url}
        alt={book.title}
        className="w-40 h-60 max-w-xs transition duration-300 ease-in-out hover:scale-110"
        width={100}
        height={150}
      />
    </Link>
  );
}

export default BookNoteCard;
