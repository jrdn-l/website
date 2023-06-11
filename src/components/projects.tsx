'use client';

import { useState } from 'react';
import Modal from './modal';
import Card from './card';


export default function Projects() {
  
  const [showDiscordModal, setShowDiscordModal] = useState(false);
  const [showRushMateModal, setShowRushMateModal] = useState(false);
  const [showCGAModal, setShowCGAModal] = useState(false);
  

  const s = ""
  return (
    <div id="projects">
      <h1>Projects</h1>
      <Modal showModal={showDiscordModal} setShowModal={setShowDiscordModal} title="Discord Bot" description={s} />
      <Modal showModal={showRushMateModal} setShowModal={setShowRushMateModal} title="RushMate App" description={s} />
      <Modal showModal={showCGAModal} setShowModal={setShowCGAModal} title="Covid Go Away Website" description={s} />
      <Card setShowModal={setShowDiscordModal} title="Discord Bot" description='Discord bot that allows users to play some games and listen to music'/>
      <Card setShowModal={setShowRushMateModal} title="RushMate App" description='Android and iOS app developed with React Native to help with finding a less croweded location with user given "tags".' />
      <Card setShowModal={setShowCGAModal} title="Covid Go Away Website" description='Card game inspired by Sushi Go on the web.' />
    
    </div>


  )
} 