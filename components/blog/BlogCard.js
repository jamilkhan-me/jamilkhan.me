import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
function BlogCard({ blog }) {
  return (
    <div className="flex flex-col hover:bg-gray-100 p-5 cursor-pointer">
      <h1 className="text-2xl font-bold capitalize my-3">{blog.title}</h1>
      <div className="flex flex-row gap-10 mb-3">
        <h1 className="flex flex-row gap-3 font-md text-gray-600">
          <LuCalendarDays size={23} /> {blog.publishedDate}
        </h1>
        <h1 className="flex flex-row gap-3 font-md text-gray-600">
          <MdOutlineTimer size={23} /> 3 min read
        </h1>
      </div>
      <h1 className="mb-5 font-light bg-gray-200 w-32 flex justify-center py-1 px-2 rounded-2xl">
        Javascript
      </h1>
      <h1 className="text-justify mb-3">{blog.excerpt}</h1>
    </div>
  );
}

export default BlogCard;
