import Link from "next/link";
import siteMetadata from "@/data/siteMetaData";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <FaGithubSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaLinkedin size={30} />
          <FaTwitterSquare size={30} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Built by {siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/jamilkhan-nu">
            <span>Made with NextJS, Tailwindcss, GraphCMS & Vercel</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
