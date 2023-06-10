'use client';

import { useState } from 'react';
import Modal from './modal';

export default function Projects() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div id="projects">
      <h1>Projects</h1>

      <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal} title="Hello" description="World" />

      <div className="drop-shadow-lg rounded-lg p-4 bg-slate-100 dark:bg-gray-800 hover:opacity-90 hover:scale-105">
        <h2>Project 1</h2>
        <p>Project 1 Description</p>
      </div>
    </div>


  )
} 