import Link from "next/link";
import siteMetadata from "@/data/siteMetaData";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import socialMedialinks from "@/data/socialMedialinks";
import headerNavLinks from "@/data/headerNavLinks";
import Image from "next/image";
function Footer() {
  return (
    <footer className="h-full sm:w-[38rem] py-16">
      <h1 className="text-4xl uppercase font-righteous my-10 sm:flex sm:items-center">
        Let Work together
      </h1>
      <div className="flex flex-row gap-8">
        <div className=" w-1/2 h-32 p-6 bg-n-7 border-t-2 border-n-4 rounded-2xl cursor-pointer duration-500 hover:-translate-y-2">
          <p className="font-mono">Say hello!</p>
          <h3 className="font-mono text-2xl font-semibold mt-3">
            jamilkhan.nu@gmail.com
          </h3>
        </div>
        <div className="w-1/2 flex flex-row gap-8">
          {socialMedialinks.map((link) => (
            <Link
              target="_blank"
              className="w-48 h-32 bg-n-7 border-t-2 border-n-4 rounded-2xl px-5 flex flex-row items-center duration-500 hover:-translate-y-2"
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
