import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between gap-10">
      <div className="w-2/3 h-auto">
        <p className="font-mono rounded-full py-1 px-4 bg-n-5  w-max">
          <span className="text-xs ">🟢</span> Available for hire
        </p>
        <h1 className="text-6xl font-righteous tracking-wider font-bold my-10">
          Hi, I&apos;m Jamil Khan, <br /> a software engineer <br /> based in
          London.
        </h1>
        <p className="font-mono text-xl ">
          My passion for developing software that not only functions flawlessly
          but also delights users with its aesthetic appeal and intuitive
          design. With my unique skill set, I&apos;m confident in my ability to
          contribute positively to any software development project.
        </p>
      </div>
      <div>
        <Image
          src="/cartonimage.png"
          alt="carton image"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};

export default HeroSection;
