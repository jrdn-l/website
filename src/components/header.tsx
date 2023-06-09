import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black">
      <nav className="flex flex-center items-center justify-evenly p-6">
        <button className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Home</button>
        <button className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Projects</button>

        <a rel="noopener noreferrer" target="_blank" href="https://github.com/jrdn-l" className="-m-1.5 px-3">
          <Image className="h-8 w-auto" width={240} height={240} src={"/github-mark.svg"} alt="Github" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://jrdn-l.github.io/myrepo/" className="-m-1.5 px-3">
          <Image className="h-8 w-auto" width={240} height={240} src="/icons8-cydia-240.svg" alt="Cydia" />
        </a>
      </nav>
    </header>
  );
}