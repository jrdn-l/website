
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({ showModal, setShowModal, title, description }: { showModal: boolean, setShowModal: CallableFunction, title: string, description: string }) {
  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog onClose={() => setShowModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 dark:bg-gray-500 dark:bg-opacity-40" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="dark:bg-gray-900 rounded-lg bg-white">
              <Dialog.Title className="dark:text-white text-gray-900">{title}</Dialog.Title>
              <Dialog.Description className="dark:text-white text-gray-900">
                {description}
              </Dialog.Description>
              <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => setShowModal(false)}>Close</button>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}