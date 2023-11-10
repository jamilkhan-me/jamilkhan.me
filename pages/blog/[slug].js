import { getPosts } from "@/services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdIosShare, MdOutlineTimer } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import Link from "next/link";
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

function BlogDetails({ post }) {
  const [count, setCount] = useState(1);

  function likeCount() {
    setCount(count + 1);
  }
  return (
    <div className="flex flex-row sm:flex-col justify-between gap-10 mt-48">
      <div className="w-2/3 sm:w-full">
        <h1 className="text-4xl sm:text-3xl font-bold my-5">{post.title}</h1>
        <div className="flex flex-row justify-between gap-5 my-5 border-y-2 py-2">
          <div className="flex flex-row gap-8 sm:gap-2 text-sm">
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
        <div className="flex justify-center object-contain object-center">
          <Image
            src={post.featuredImage.url}
            className="rounded-lg w-full  h-96 object-cover object-center my-5"
            alt={post.title}
            width={500}
            height={500}
          />
        </div>
        <div className="prose">
          <RichText content={post.content.raw} />
        </div>
      </div>
      <div className="w-1/3 sm:w-full flex flex-col gap-5">
        <div className="w-full  h-auto bg-gray-200 p-5 shadow-lg divide-y-2 divide-gray-300 rounded-lg ">
          <h1 className="text-xl font-bold uppercase">Written by</h1>
          <div className="flex flex-row gap-5 my-5 pt-5">
            <Image
              src="/static/profile.png"
              className="bg-white rounded-full w-24 h-24 "
              alt="Jamil Khan"
              width={100}
              height={100}
            />
            <span className="flex flex-col ">
              <h1 className="text-lg font-bold">Jamil Khan</h1>
              <Link className="text-blue-600" href="/">
                <h1>@jamilkhan</h1>
              </Link>
            </span>
          </div>
          <div className="py-10">
            <h1 className="font-bold pb-3 uppercase">Post Details</h1>
            <li>Published November 03, 2023</li>
          </div>
          <div className="py-10">
            <h1 className="font-bold pb-3">CATEGORY</h1>
            <li>Frontend</li>
          </div>
          <div className="py-10">
            <h1 className="font-bold pb-3 uppercase">Tags</h1>
            <h1 className="font-semibold">#redux, #api, #javascript</h1>
          </div>
          <div className="py-10">
            <h1 className="font-bold pb-3 uppercase">Share</h1>
            <LinkedinShareButton
              url={`https://jamilkhan.me/blog/${post.slug}`}
              title={post.title}
            >
              <LinkedinIcon className="mr-3" size={35} round />
            </LinkedinShareButton>
            <TwitterShareButton
              url={`https://jamilkhan.me/blog/${post.slug}`}
              title={post.title}
            >
              <TwitterIcon className="mr-3" size={35} round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://jamilkhan.me/blog/${post.slug}`}
              title={post.title}
            >
              <FacebookIcon className="mr-3" size={35} round />
            </FacebookShareButton>

            <WhatsappShareButton
              url={`https://jamilkhan.me/blog/${post.slug}`}
              title={post.title}
            >
              <WhatsappIcon size={35} round />
            </WhatsappShareButton>
          </div>
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
    revalidate: 600,
  };
}
