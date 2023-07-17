import About from "@/components/about";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around w-full flex-1 px-20 text-center">
      <About/>
      <Image width={240} height={240} src={"/hello-wave.gif"} alt="Github" />
      <Projects/>
    </main>
  )
}
