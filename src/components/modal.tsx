
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
          <div className="fixed inset-0 bg-black bg-opacity-40 dark:bg-gray-500 dark:bg-opacity-40" aria-hidden="true" />
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
          <div className="fixed inset-0 overflow-y-auto">

            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="dark:bg-gray-900 rounded-lg bg-white">
                <Dialog.Title className="my-4 flex justify-center" as="div">
                  <h2 className="text-center text-lg left-0">{title}</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute w-7 h-7 right-7" onClick={() => setShowModal(false)}>
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </Dialog.Title>
                <Dialog.Description className="px-12 pb-12">
                  {description}
                </Dialog.Description>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>

  )
}