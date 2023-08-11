import Link from "next/link";
import { FaGithub, FaLaptop, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-slate-600 p-4 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row">
        <h1 className="mb-2 grid place-content-center text-3xl font-bold text-white md:mb-0">
          <Link
            href="/next06"
            className="text-white/90 no-underline hover:text-white"
          >
            Dave Gray
          </Link>
        </h1>
        <div className="flex flex-row justify-center gap-4 align-middle text-4xl text-white sm:justify-evenly lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.youtube.com/@DaveGrayTeachesCode"
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://courses.davegray.codes/"
          >
            <FaLaptop />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/gitdagray"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://twitter.com/yesdavidgray"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
