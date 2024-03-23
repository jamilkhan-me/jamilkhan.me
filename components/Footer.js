import Link from "next/link";
import siteMetadata from "@/data/siteMetaData";
import { FaArrowRightLong } from "react-icons/fa6";
import socialMedialinks from "@/data/socialMedialinks";

import Image from "next/image";
function Footer() {
  return (
    <footer className="h-full sm:w-[38rem] py-16">
      <h1 className="text-4xl uppercase font-righteous my-10 sm:flex sm:items-center">
        Let&apos;s Work together
      </h1>
      <div className="flex flex-row gap-8">
        <div className=" w-1/2 h-32 p-6 bg-n-7 border-t-2 border-n-2 rounded-2xl cursor-pointer group duration-500 hover:-translate-y-2 flex flex-row justify-between">
          <span>
            <p className="font-mono">Say hello!</p>
            <h3 className="font-mono text-2xl font-semibold mt-3">
              jamilkhan.nu@gmail.com
            </h3>
          </span>
          <FaArrowRightLong
            size={25}
            className="mr-5 duration-500 -rotate-45 group-hover:rotate-0"
          />
        </div>
        <div className="w-1/2 flex flex-row gap-8">
          {socialMedialinks.map((link) => (
            <Link
              target="_blank"
              className="w-48 h-32 bg-n-7 border-t-2 border-n-2 rounded-2xl px-5 flex flex-row items-center duration-500 hover:-translate-y-2"
              key={link.name}
              href={link.link}
            >
              <Image
                src={link.image}
                alt={link.name}
                width={300}
                height={300}
                className="w-12 h-12 m-5"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex font-mono mt-32 gap-2">
        <h1>
          {`© ${new Date().getFullYear()} `}
          {siteMetadata.author},
        </h1>
        <p>Built in NextJS, TailwindCSS, GraphQL, HygraphCMS & Vercel.</p>
      </div>
    </footer>
  );
}

export default Footer;
