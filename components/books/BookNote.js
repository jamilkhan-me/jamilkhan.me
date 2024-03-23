import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function BookNote({ note }) {
  return (
    <Link className="book-wrapper" href={`/notes/${note.slug}`}>
      <div class="book-items">
        <div class="main-book-wrap">
          <div class="book-cover">
            <div class="book-inside"></div>
            <div class="book-image">
              <Image
                src={note.bookCover.url}
                alt={note.title}
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

export default BookNote;
