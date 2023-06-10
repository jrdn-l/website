import About from "@/components/about";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Image width={240} height={240} src={"/hello-wave.gif"} alt="Github" />
      <About/>
      <Projects/>
    </main>
  )
}
