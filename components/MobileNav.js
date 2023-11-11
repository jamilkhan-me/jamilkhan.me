import Link from "next/link";
import { Icon } from "@iconify/react";
import useScrollingEffect from "./hook/use-scroll";
import useNavigation from "./hook/use-navigation";

function MobileNav() {
  const scrollDirection = useScrollingEffect();
  const navClass = scrollDirection === "up" ? "" : "opacity-25 duration-500";

  const {
    isHomeActive,
    isAboutActive,
    isBlogActive,
    isProjectActive,
    isBookActive,
  } = useNavigation();
  return (
    <div
      className={`fixed rounded-t-2xl inset-x-0 bottom-0 flex justify-center items-center w-full py-4 z-10 bg-gray-100  dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg md:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex items-center">
          {isHomeActive ? (
            <Icon icon="ri:home-4-fill" width="34" height="34" />
          ) : (
            <Icon icon="ri:home-4-line" width="34" height="34" />
          )}
        </Link>
        <Link href="/about" className="flex items-center">
          {isAboutActive ? (
            <Icon icon="clarity:user-solid" width="32" height="32" />
          ) : (
            <Icon icon="clarity:user-line" width="32" height="32" />
          )}
        </Link>
        <Link href="/blog" className="flex items-center">
          {isBlogActive ? (
            <Icon icon="mdi:post-it-note-edit" width="32" height="32" />
          ) : (
            <Icon icon="mdi:post-it-note-edit-outline" width="32" height="32" />
          )}
        </Link>
        <Link href="/projects" className="flex items-center">
          {isProjectActive ? (
            <Icon icon="uis:web-grid-alt" width="32" height="32" />
          ) : (
            <Icon icon="uil:web-grid-alt" width="32" height="32" />
          )}
        </Link>
        <Link href="/notes" className="flex items-center">
          {isBookActive ? (
            <Icon icon="ion:book" width="32" height="32" />
          ) : (
            <Icon icon="ion:book-outline" width="32" height="32" />
          )}
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
