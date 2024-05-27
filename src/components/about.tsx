"use client";

import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  let [isComputerOpen, setIsComputerOpen] = useState(false);
  let [isNASOpen, setIsNASOpen] = useState(false);
  let [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  return (
    <div className="dark:bg-gray-600 w-full">
      <div
        id="aboutMe"
        className="h-screen flex flex-col items-center justify-center"
      >
        <Image
          width={240}
          height={240}
          src={"/hello-wave.gif"}
          alt="Github"
          unoptimized={true}
        />
        <br />
        <p>
          Hi I'm Jordan. I am a software developer that graduated from the
          University of Toronto.
        </p>
        <p>
          I have experience with TypeScript, JavaScript, HTML, CSS, Java,
          Python, C, C++, C#.
        </p>
        <br />
        <div className="flex flex-row">
          <div className="p-10">
            <p> Favourite Game Series: Legend of Zelda</p>
            <p> Games I am currently playing</p>
            <ul>
              <li>Valorant</li>
              <li>Teamfight Tactics</li>
              <li>Persona 3 Reload</li>
              <li>Final Fantasy 7 Rebirth</li>
            </ul>
          </div>
          <div className="p-10">
            <p>Some cool things I've done for myself!</p>
            <ul>
              <li
                onClick={() => setIsComputerOpen(true)}
              >
                <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 drop-shadow-lg">
                  {"🖥️  My Computer"}
                </Button>
                <Dialog open={isComputerOpen} onClose={() => setIsComputerOpen(false)}>
                  <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border dark: bg-black p-12">
                      <DialogTitle className="font-bold">My Rig</DialogTitle>
                      <Description>
                        This is my primary computer that I use for gaming and
                        software developement.
                      </Description>
                      <ul>
                        <li> CPU: AMD Ryzen 5600x</li>
                        <li> GPU: Nvidia RTX 3060 Ti</li>
                        <li> RAM: 32 GB DDR4</li>
                        <li> Storage: 2 TB NVMe SSD</li>
                        <li> Cooling: Artic Liquid Freezer II 240</li>
                        <li> Case: Lian Li Lan Cool II</li>
                        <li> Monitor: LG 27GP850-B</li>
                        <li> Keyboard: Zoom 75 </li>
                        <li> Mouse: Pulsar X2V2 </li>
                        <li> OS: Windows 11</li>
                      </ul>
                    </DialogPanel>
                  </div>
                </Dialog>
              </li>
              <li>
                {"☁️ NAS"}
                <Dialog open={isNASOpen} onClose={() => setIsNASOpen(false)}>
                  <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border dark: bg-black p-12">
                      <DialogTitle className="font-bold">NAS</DialogTitle>
                      <Description>
                        This is my NAS that I use for storing media and backups.
                      </Description>
                      <ul>
                        <li> CPU: Intel i5-11400 </li>
                        <li> RAM: 64 GB DDR4</li>
                        <li> Storage: 6x 10 TB HDD</li>
                        <li> Case: Fractal Design Node 804</li>
                        <li> OS: TrueNAS Scale </li>
                      </ul>
                    </DialogPanel>
                  </div>
                </Dialog>
              </li>
              <li> Keyboard </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
