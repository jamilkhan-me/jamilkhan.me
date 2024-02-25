import Link from "next/link";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import moment from "moment";
import Image from "next/image";
function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="flex flex-row gap-5 border-2 rounded-xl my-5 hover:bg-gray-100 p-5 cursor-pointer">
        <div className="w-2/5 relative max-w-xs overflow-hidden">
          <Image
            src={blog.featuredImage.url}
            alt={blog.slug}
            className="w-80 h-64 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-125"
            width={400}
            height={200}
          />
        </div>
        <div className="w-3/5">
          <h1 className="text-2xl font-bold capitalize ">{blog.title}</h1>

          <h1 className="text-justify my-5">{blog.excerpt}</h1>
          <div className="flex flex-row gap-10 mb-3">
            <h1 className="flex flex-row gap-3 font-md text-gray-600">
              <LuCalendarDays size={23} />
              {moment(blog.createdAt).format("MMM DD, YYYY")}
            </h1>
            <h1 className="flex flex-row gap-3 font-md text-gray-600">
              <MdOutlineTimer size={23} /> 3 min read
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
