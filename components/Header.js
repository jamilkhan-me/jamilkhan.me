// import { getPosts } from "@/services";
import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import Image from "next/image";
import SectionContainer from "./SectionContainer";
import Navbar from "./MobileNav";
// import ThemeSwitch from "./ThemeSwitch";

// import SearchButton from "./SearchButton";

function Header() {
  return (
    <header className=" ">
      <div className="flex flex-row justify-between z-50 fixed backdrop-blur-sm  rounded-lg gap-[30rem]  p-5">
        <div>
          <Link href="/">
            <div className="flex items-center justify-between">
              <h1 className=" text-3xl  text-sky font-semibold font-Soul">
                JK
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6 ">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="sm:hidden text-lg font-bold text-gray-900 dark:text-gray-100 sm:block nav"
            >
              {link.title}
            </Link>
          ))}
          {/* <Navigation /> */}
          {/* <Navbar /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
