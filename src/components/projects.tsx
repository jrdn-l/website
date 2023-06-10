'use client';

import { useState } from 'react';
import Modal from './modal';
import Card from './card';

export default function Projects() {

  const [showModal, setShowModal] = useState(false);
  const [showRushMateModal, setShowRushMateModal] = useState(false);

  const s = "This was a bot I made in my first year of univeristy. I initially started this project because my friends and I were really into another bot managed by a third-party called Pokecord. Pokecord was a bot that would occationally send messages with pokemon that you could catch. The occurance depended on the amount of messages sent that the bot could see, so I made this bot to send messages so that Pokecord would release more pokemon in our Discord server (I later found out that it didn't matter since Pokecord would only trackuser messages and not bots D: ). The bot ran using python since that was the language I was most familiar with at the time due to my first year computer science courses using python as well.In addition to python I also had to use an external library called Discord py to get the bot up and running as it was an implementation of the discord API for python. From there I also thought that having the option to stream music from youtubewould be a nice feature which lead me into the working with YoutubeDL, a youtube video downloader made with python. This project introduced me to quite a few things like async calls, coroutines, working with Ubuntu in the command line as well as SSHing into an AWS E2C."
  const ss = 'This app was a project for School done with a group. Since it was written with React Native, the app works on both iOS and Android platforms. Inspired by COVID-19, this app was supposed to help users get to locations that were less busy so that they would come into contact with less people. Using the google maps API and our own sorting and recommending algorithm using the business trends and if there were other similar locations that provide the same service. It would also use the above factors to recommend places based on "Tags" which could be user defined or users could use the default tags we have included. During my time working on this project I worked on both front-end tasks and back-end tasks. For the front end I was in charge with setting up the map, location permissions and location markers (this would be like the pins you place down as well as user location) and the coding the designed Sign Up and Login page. For the backend, I had to set-up the login/registration process with MongoDB for the sign up and login pages and then link the buttons to submit a request to the restful API; I also had to modify the backend to support saving a users favourite "Tag" to the database and accessing it.'
  return (
    <div id="projects">
      <h1>Projects</h1>
      <Modal showModal={showModal} setShowModal={setShowModal} title="Discord Bot" description={s} />
      <Modal showModal={showRushMateModal} setShowModal={setShowRushMateModal} title="RushMate App" description={ss}/>
      <Card setShowModal={setShowModal} title="Discord Bot" description='Discord bot that allows users to play some games and listen to music'/>
      <Card setShowModal={setShowRushMateModal} title="RushMate App" description='Android and iOS app developed with React Native to help with finding a less croweded location with user given "tags".' />
    
    </div>


  )
} 