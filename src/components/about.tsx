'use client'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import { particles } from "./particlesjs-config";

export default function About() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);



  return (
    <div className="h-screen">
      <Particles className="absolute left-0 w-screen h-screen z-0"
        id="tsparticles" options={particles} init={particlesInit} />
      <div className="absolute left-1/4 bottom-1/2">
        <p className="justify-center max-w-xl">
          Welcome to my website. I initially created this website originally to learn some HTML, CSS and Javascript.
          I also wanted to try learning React so this website became my side project to become familiar with it.
          At the top are links to my Github page and a link to my Jailbreak Repo.</p>
      </div>
    </div>
  )
}