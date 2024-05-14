import Image from "next/image";
import { CustomLink } from "./link";
// import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 w-full flex flex-center items-center justify-evenly p-10 bg-slate-50 dark:bg-black">
        <CustomLink className="text-sm font-semibold leading-6" href="/">Home</CustomLink>
        <CustomLink className="text-sm font-semibold leading-6" href="#aboutMe">About Me</CustomLink>
        <CustomLink className="text-sm font-semibold leading-6" href="#projects">Projects</CustomLink>
        <a rel="noopener noreferrer" target="_blank" className="text-sm font-semibold leading-6" href="/Resume.pdf">Resume</a>

        <a rel="noopener noreferrer" target="_blank" href="https://github.com/jrdn-l" className="-m-1.5 px-3">
          <picture>
            <source srcSet={"/github-mark-white.svg"} media="(prefers-color-scheme: dark)" />
            <Image className="h-8 w-auto" width={240} height={240} src={"/github-mark.svg"} alt="Github" />
          </picture>
        </a>
      </nav>
    </header>
  );
}