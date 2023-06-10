'use client';

import { useState } from 'react';
import Modal from './modal';

export default function Projects() {

  const [showModal, setShowModal] = useState(false);

  const s = "This was a bot I made in my first year of univeristy. I initially started this project because my friends and I were really into another bot managed by a third-party called Pokecord. Pokecord was a bot that would occationally send messages with pokemon that you could catch. The occurance depended on the amount of messages sent that the bot could see, so I made this bot to send messages so that Pokecord would release more pokemon in our Discord server (I later found out that it didn't matter since Pokecord would only trackuser messages and not bots D: ). The bot ran using python since that was the language I was most familiar with at the time due to my first year computer science courses using python as well.In addition to python I also had to use an external library called Discord py to get the bot up and running as it was an implementation of the discord API for python. From there I also thought that having the option to stream music from youtubewould be a nice feature which lead me into the working with YoutubeDL, a youtube video downloader made with python. This project introduced me to quite a few things like async calls, coroutines, working with Ubuntu in the command line as well as SSHing into an AWS E2C."

  return (
    <div id="projects">
      <h1>Projects</h1>
      <Modal showModal={showModal} setShowModal={setShowModal} title="Discord Bot" description={s} />

      <div className="drop-shadow-lg rounded-lg p-4 bg-slate-50 dark:bg-gray-800 hover:opacity-90 hover:scale-105" onClick={() => { setShowModal(true) }}>
        <h2>Discord bot</h2>
        <p>python that allows users to play some games and listen to music</p>
      </div>
    </div>


  )
} 