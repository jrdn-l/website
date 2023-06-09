import Layout from "@/components/layout"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image width={240} height={240} src={"/hello-wave.gif"} alt="Github" />
      </main>
    </Layout>
  )
}
