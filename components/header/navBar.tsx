import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [header, setHeader] = useState<boolean>();
  const scrollHeader = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  console.log(header);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  const liStyle = `hover:scale-125 duration-300 ease-in-out origin-top p-1 text-xl`;
  return (
    <div
      className={`w-full h-fit flex flex-row z-20 top-0 ${
        header ? "fixed bg-white" : "absolute bg-white"
      }`}
    >
      <nav className="w-full h-fit z-10 flex items-center justify-center top-0">
        <ul
          className={`z-50 text-black flex flex-row w-1/2 right-0 items-end justify-evenly mr-10`}
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
      <div className="z-10 absolute right-20 mt-2">
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
}
