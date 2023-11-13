// import { getPosts } from "@/services";
import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
// import ThemeSwitch from "./ThemeSwitch";
// import SearchButton from "./SearchButton";

function Header() {
  return (
    <header>
      <Logo />
      <div className="sm:hidden flex flex-row justify-between z-50 fixed backdrop-blur-sm  rounded-lg gap-[32rem] p-3">
        <div>
          <Link href="/">
            <div className="flex flex-col items-center justify-start">
              <h1 className=" text-xl  text-sky capitalize font-bold font-mono">
                Jamil khan
              </h1>
              <span className="text-xs tracking-widest font-light font-mono">
                Digital Garden
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-8 leading-5 sm:space-x-6 ">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-lg font-bold text-gray-900 dark:text-gray-100 sm:block nav"
            >
              {link.title}
            </Link>
          ))}
          {/* <Navigation /> */}
          {/* <Navbar /> */}
        </div>
      </div>
      <MobileNav />
    </header>
  );
}

export default Header;
