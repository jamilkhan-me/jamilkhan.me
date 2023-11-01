import Image from "next/image";

function FeaturedPost({ post }) {
  return (
    <div className=" flex flex-row justify-start w-full gap-6">
      <div className="w-2/5">
        <Image
          src={post.featuredImage.url}
          className="w-96 h-60 border-2 rounded-xl"
          alt={post.title}
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-start">
        <p className="font-semibold text-md">{post.excerpt}</p>
        <h1 className="text-2xl font-bold my-2">{post.title}</h1>
        <p className="font-light capitalize">
          while your current research focus may not directly align with becoming
          a software engineer, the skills you have developed in understanding
          human behavior and motivation can be invaluable in your career
          journey.
        </p>
        <div className="flex flex-row justify-between px-2 mt-2 ">
          <h2 className="font-semibold text-md">#webtech #ML-Algorithm</h2>
          <h1 className="font-light text-gray-500">5 min read</h1>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
