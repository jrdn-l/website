import Image from "next/image";
import { CustomLink } from "./link";
// import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex flex-center items-center justify-evenly p-6">
        <CustomLink className="text-sm font-semibold leading-6" href="/">Home</CustomLink>
        <CustomLink className="text-sm font-semibold leading-6" href="#projects" scroll={false}>Projects</CustomLink>
        <a rel="noopener noreferrer" target="_blank" className="text-sm font-semibold leading-6" href="/Resume.pdf">Resume</a>

        <a rel="noopener noreferrer" target="_blank" href="https://github.com/jrdn-l" className="-m-1.5 px-3">
          <picture>
            <source srcSet={"/github-mark-white.svg"} media="(prefers-color-scheme: dark)" />
            <Image className="h-8 w-auto" width={240} height={240} src={"/github-mark.svg"} alt="Github" />
          </picture>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://jrdn-l.github.io/myrepo/" className="-m-1.5 px-3">
          <picture>
            <Image className="h-8 w-auto" width={240} height={240} src="/icons8-cydia-240.svg" alt="Cydia" />
          </picture>
        </a>
      </nav>
    </header>
  );
}