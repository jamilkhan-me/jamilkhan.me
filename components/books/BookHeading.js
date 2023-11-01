import Link from "next/link";

function BookHeading() {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2 mx-20">
        <h1 className="text-2xl font-bold">Welcome to my</h1>
        <h1 className="text-6xl font-bold mb-5 text-yellow-500 ">
          Digital Bookself
        </h1>
        <p className=" text-lg text-justify capitalize">
          Much of the valuable knowledge I've gained has been sourced from
          books, articles, talks, and various forms of media. Inspired by{" "}
          <Link href="google.com">Derek Sivers</Link> and how he shares his
          notes on books, I've chosen to make my own summaries and notes from my
          readings publicly available.
        </p>
        <h1 className="text-xl font-bold my-3">
          Click on any Thumbnail below to get the notes
        </h1>
      </div>
      <div className="flex flex-col justify-center mx-20 border-2 p-5 shadow-xl rounded-xl">
        <h1 className="text-lg font-semibold flex justify-center mb-3">
          Currently reading{" "}
        </h1>
        <img src="/static/avatar.png" alt="book image" />
      </div>
    </div>
  );
}

export default BookHeading;
