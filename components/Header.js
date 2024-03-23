// import { getPosts } from "@/services";
import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import MobileNav from "./MobileNav";
import Image from "next/image";
// import ThemeSwitch from "./ThemeSwitch";
// import SearchButton from "./SearchButton";

function Header() {
  return (
    <>
      <header className="font-mono flex flex-row justify-between my-10">
        <div className="">
          <Link href="/" className="flex flex-row">
            <Image
              src="/favicon.ico"
              alt="logo"
              className="mt-[-7px]"
              width={40}
              height={50}
            />
            <span className="font-bold text-xl pl-3">Jamil</span>
          </Link>
        </div>
        <div>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="sm:hidden nav">
              /{link.title}
            </Link>
          ))}
        </div>
      </header>
      <MobileNav />
    </>
  );
}

export default Header;
