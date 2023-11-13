import { getBookNotes } from "@/services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdIosShare, MdOutlineTimer } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import Image from "next/image";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import moment from "moment";

function Note({ note }) {
  const [count, setCount] = useState(1);

  function likeCount() {
    setCount(count + 1);
  }
  return (
    <div className="mt-48 flex flex-row sm:flex-col justify-between gap-8">
      <div className="w-2/3 sm:w-full">
        <div className="mr-12 sm:mr-2">
          <h1 className="text-2xl sm:text-xl font-bold">Book Summary</h1>
          <h1 className="text-6xl sm:text-4xl font-bold my-5">
            {note.title}, <br /> by {note.author}
          </h1>
          <div className="flex flex-row justify-between gap-5 my-5 border-y-2 py-2">
            <div className="flex flex-row gap-8 sm:gap-2 text-sm">
              <h1 className="flex flex-row gap-3 font-md text-gray-600">
                <LuCalendarDays size={20} />{" "}
                {moment(note.createdAt).format("MMMM DD, YYYY")}
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
      <div className="w-1/3 sm:w-full flex flex-col gap-5">
        <div className="w-full  h-auto bg-gray-200 p-5 shadow-lg divide-y-2 divide-gray-300 rounded-lg ">
          <div className="flex items-center justify-center mb-8">
            <Image
              src={note.bookCover.url}
              className="rounded-lg w-72 h-96 object-cover object-center  "
              alt={note.title}
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col py-8 ">
            <h1 className="text-3xl font-bold">{note.title}</h1>
            <h1 className="text-xl font-semibold">by {note.author}</h1>
          </div>
          <div className="py-10">
            <h1 className="font-bold pb-3 uppercase">Genres</h1>
            <li>Success, Personal development, Motivation, Self-help</li>
          </div>
          <div className="py-10">
            <h1 className="font-bold pb-3 uppercase">Date read</h1>
            <li>{moment(note.createdAt).format("MMMM DD, YYYY")}</li>
          </div>
          <div className="py-10">
            <h1 className="font-bold pb-3 uppercase">Share</h1>
            <LinkedinShareButton
              url={`https://jamilkhan.me/notes/slug`}
              title={note.title}
            >
              <LinkedinIcon className="mr-3" size={35} round />
            </LinkedinShareButton>
            <TwitterShareButton
              url={`https://jamilkhan.me/notes/slug`}
              title={note.title}
            >
              <TwitterIcon className="mr-3" size={35} round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://jamilkhan.me/notes/slug`}
              title={note.title}
            >
              <FacebookIcon className="mr-3" size={35} round />
            </FacebookShareButton>

            <WhatsappShareButton
              url={`https://jamilkhan.me/notes/slug`}
              title={note.title}
            >
              <WhatsappIcon size={35} round />
            </WhatsappShareButton>
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
    revalidate: 600,
  };
}
