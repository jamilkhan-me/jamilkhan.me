import Link from "next/link";
import useScrollingEffect from "./hook/use-scroll";

function Logo() {
  const scrollDirection = useScrollingEffect();
  const navClass = scrollDirection === "down" ? "" : "opacity-25 duration-500";
  return (
    <div
      className={`fixed rounded-b-2xl inset-x-0 top-0 flex flex-col justify-center items-center w-full py-1 z-10 bg-gray-100  dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg md:hidden ${navClass} `}
    >
      <Link href="/">
        <h1 className="text-xl font-bold font-mono">Jamil Khan</h1>
        <p className="text-xs uppercase tracking-widest font-thin font-mono">
          Digital Garden
        </p>
      </Link>
    </div>
  );
}

export default Logo;
