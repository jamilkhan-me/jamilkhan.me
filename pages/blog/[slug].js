import { getPosts } from "@/services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdIosShare, MdOutlineTimer } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

function BlogDetails({ post }) {
  const [count, setCount] = useState(1);

  function likeCount() {
    setCount(count + 1);
  }
  return (
    <div className="flex flex-row justify-between gap-10 mt-48">
      <div className="w-2/3">
        <h1 className="text-4xl font-bold my-5">{post.title}</h1>
        <div className="flex flex-row justify-between gap-5 my-5 border-y-2 py-2">
          <div className="flex flex-row gap-8 text-sm">
            <h1 className="flex flex-row gap-3 font-md text-gray-600">
              <LuCalendarDays size={20} /> Nov 04, 2023
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
        <div className="flex justify-center">
          <Image
            src={post.featuredImage.url}
            className="rounded-lg w-[35rem] h-80 object-cover object-center my-5"
            alt={post.title}
            width={500}
            height={500}
          />
        </div>
        <div className="prose">
          <RichText content={post.content.raw} />
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-5">
        <div className="w-full  h-auto bg-gray-200 p-5 shadow-lg rounded-lg ">
          <h1 className="text-xl font-bold uppercase">About me</h1>
          <Image
            src="/static/profile.png"
            className="bg-white rounded-xl w-32 h-32 my-5"
            alt="Jamil Khan"
            width={100}
            height={100}
          />
          <h1>
            Hello and Welcome to my little digital garden. <br /> My name is
            Jamil Khan. I am a software developer who is passionate about
            creating digital products.I love to write clean code and staying
            current with industry trends
          </h1>
          <h1>
            Beyond coding, I love reading technical articles and non-fictional
            books. I strongly believe in continunous learning and improving
            myself
          </h1>
        </div>
        <div className="w-full  h-auto bg-gray-200 p-5 shadow-lg rounded-lg gap-5">
          <h1>Post Details</h1>
          <li>Published November 03, 2023</li>
          <h1>CATEGORY</h1>
          <li>Frontend</li>
          <h1>Tags</h1>
          <h1>#redux, #api, #javascript</h1>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await getPosts();
  const post = posts.find((x) => x.slug === slug);

  return {
    props: { post },
  };
}
