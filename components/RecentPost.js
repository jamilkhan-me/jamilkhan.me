import Image from "next/image";

function RecentPost({ post }) {
  return (
    <div className="flex flex-row justify-start gap-4 my-4">
      <div className="w-[64px] h-[64px]">
        <Image
          src={post.featuredImage.url}
          alt="post image"
          className=" w-[64px] h-[50px] rounded-full  object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className=" w-96 flex flex-col justify-center ">
        <h1 className="text-md font-bold">{post.title}</h1>

        <div className="flex flex-row justify-between  mt-3 font-light text-gray-500">
          <p>3 mins read</p>
          <p>Oct 15, 2023</p>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
