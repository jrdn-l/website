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

      {showModal ? (<Modal setShowModal={setShowModal} />) : null}
    </div>
  )
}