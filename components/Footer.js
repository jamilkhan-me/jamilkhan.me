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
function Footer() {
  return (
    <footer className="h-full sm:w-[38rem] border-t-2 py-16">
      <div className="flex flex-col gap-40">
        <div className="flex flex-col items-center  sm:items-center">
          <h1 className="text-9xl font-bold">Let&apos;s Talk</h1>
          <h3 className="text-4xl font-semibold sm:w-[38rem] w-[60rem] pt-8">
            Good design and development can make a real difference in the world.
            I love the challenge of taking someone&apos;s vision and turning it
            into a reality.
          </h3>
        </div>
        <div className="flex flex-col justify-between  sm:items-center py-10">
          <h1 className="text-6xl sm:text-4xl font-semibold ">
            jamilkhan.nu@gmail.com
          </h1>
          <div className="flex flex-row sm:flex-col justify-between pt-4">
            <div>
              {socialMedialinks.map((link) => (
                <button
                  className="py-1 px-2 border-2 mr-4 rounded-2xl hover:skew-y-6"
                  key={link.name}
                >
                  <Link target="_blank" href={link.link}>
                    {link.name}
                  </Link>
                </button>
              ))}
            </div>
            <div className="flex flex-row">
              <h1>
                {siteMetadata.author} {` • `}
                {`© ${new Date().getFullYear()}`}
              </h1>
              <div className="flex flex-row">
                {headerNavLinks.map((link) => (
                  <Link
                    href={link.href}
                    className="px-2 cursor-pointer hover:skew-y-6"
                    key={link.title}
                  >
                    {` • `} {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
