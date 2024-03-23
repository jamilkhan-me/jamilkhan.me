import Image from "next/image";
import Link from "next/link";

function BookNoteCard({ book }) {
  return (
    <Link className="book-wrapper" href={`/notes/${book.slug}`}>
      <div class="book-items">
        <div class="main-book-wrap">
          <div class="book-cover">
            <div class="book-inside"></div>
            <div class="book-image">
              <Image
                src={book.bookCover.url}
                alt={book.title}
                width={500}
                className="w-72 h-96"
                height={800}
              />
              <div class="effect"></div>
              <div class="light"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BookNoteCard;
