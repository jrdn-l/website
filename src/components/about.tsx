'use client'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine, Container } from "tsparticles-engine";
import { particles } from "./particlesjs-config";

export default function About() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);


  return (
    <>
      <Particles
        id="tsparticles" options={particles} init={particlesInit} loaded={particlesLoaded} />
      <div>
        <h1>Home</h1>
        <p className="justify-center max-w-xl">
          Welcome to my website. I initially created this website originally to learn some HTML, CSS and Javascript.
          I also wanted to try learning React so this website became my side project to become familiar with it.
          At the top are links to my Github page and a link to my Jailbreak Repo.</p>
      </div>
    </>
  )
}