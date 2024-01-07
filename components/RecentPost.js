import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";

function RecentPost({ post }) {
  return (
    <div className=" cursor-pointer  hover:skew-x-6 gap-4 my-8">
      <Link href={`/blog/${post.slug}`}>
        <h1 className="text-4xl">{post.title}</h1>
        <div className="flex flex-row gap-3 items-center my-3">
          <MdOutlineDateRange />
          <p>{post.publishedDate}</p>
          <RiTimerLine />
          <p>3 mins read</p>
        </div>
        <hr />
      </Link>
    </div>
  );
}

export default RecentPost;
