import About from "@/components/about";
import Landing from "@/components/landing";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around w-full flex-1 text-center">
      <Landing/>
      <About/>
      <Projects/>
    </main>
  )
}
