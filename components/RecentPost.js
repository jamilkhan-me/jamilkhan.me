import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function RecentPost({ post }) {
  return (
    <div className="px-5 py-5  group">
      <Link
        className="flex flex-row pb-3 relative duration-500 hover:-translate-y-2"
        href={`/blog/${post.slug}`}
      >
        <FaPlus
          size={25}
          className="mt-1 mr-5 duration-500 group-hover:rotate-45"
        />
        <h1 className="font-mono text-2xl font-semibold">{post.title}</h1>
        <span className="flex flex-row absolute right-0 text-lg font-mono">
          <MdOutlineDateRange className="mt-1 mr-3" />
          <p>{post.publishedDate}</p>
        </span>
      </Link>
    </div>
  );
}

export default RecentPost;
