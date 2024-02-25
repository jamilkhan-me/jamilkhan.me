import Image from "next/image";
import Link from "next/link";

function BookHeading() {
  return (
    <div className="flex flex-row sm:flex-col justify-between">
      <div className="w-1/2 sm:w-[35rem] mx-20 sm:mx-2 ">
        <h1 className="text-2xl font-bold">Welcome to my</h1>
        <h1 className="text-6xl font-bold mb-5 text-yellow-500 ">
          Digital Bookself
        </h1>
        <p className=" text-lg text-justify capitalize">
          Much of the valuable knowledge I have gained has been sourced from
          books, articles, talks, and various forms of media. Inspired by
          <Link href="google.com">Derek Sivers</Link> and how he shares his
          notes on books, I have chosen to make my own summaries and notes from
          my readings publicly available.
        </p>
        <h1 className="text-xl font-bold my-3">
          Click on any Thumbnail below to get the notes
        </h1>
      </div>
      <div className="flex flex-col sm:w-48 sm:h-auto justify-center mx-20 border-2 p-5 shadow-xl rounded-xl">
        <h1 className="text-lg font-semibold flex justify-center mb-3">
          Currently reading{" "}
        </h1>
        <Image
          src="/static/digitalMinimalism.jpeg"
          alt="book image"
          className="w-36 h-52"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default BookHeading;
