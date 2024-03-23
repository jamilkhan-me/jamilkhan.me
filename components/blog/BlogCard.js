import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function BlogCard({ blog }) {
  return (
    <>
      <Link
        className="relative group  w-auto h-[35rem] duration-500 hover:-translate-y-2 overflow-hidden"
        href={`/blog/${blog.slug}`}
      >
        <div class="absolute rounded-3xl w-full h-full z-20 bg-gradient-to-t from-slate-700 from-0% to-30%"></div>
        <Image
          src={blog.featuredImage.url}
          alt={blog.slug}
          className="rounded-3xl absolute w-full h-full "
          width={800}
          height={800}
        />

        <FaArrowRightLong
          size={25}
          className="z-50 -rotate-45 duration-500 group-hover:rotate-0 bg-n-1 text-n-6 w-auto h-auto p-2 rounded-full  absolute top-5 right-5"
        />

        <h1 className="absolute z-30 bottom-10 px-8 font-mono text-2xl font-semibold ">
          {blog.title}
        </h1>
      </Link>
    </>
  );
}

export default BlogCard;
