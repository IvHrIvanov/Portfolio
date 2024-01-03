import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeButton from "../themeButton/themeButton";

export default function NavBar() {
  const [header, setHeader] = useState<boolean>();
  const scrollHeader = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  const liStyle = `hover:scale-125 duration-300 ease-in-out origin-top p-1 text-xl`;

  return (
    <div
      className={`w-full h-fit flex flex-row z-20 top-0 bg-white ${
        header ? "fixed shadow-md" : "absolute"
      }`}
    >
      <nav className="w-full h-fit z-10 flex items-center justify-center top-0">
        <ul
          className={`z-50 text-black flex flex-row w-1/2 right-0 items-end justify-evenly mr-10 `}
        >
          <li className={liStyle}>
            <Link href="/about">About</Link>
          </li>
          <li className={liStyle}>
            <Link href="/about/share">About Share</Link>
          </li>
          <li className={liStyle}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={liStyle}>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li className={liStyle}>
            <Link href="/projects/project-1">Projects</Link>
          </li>
        </ul>
      </nav>
      <ThemeButton />
    </div>
  );
}
