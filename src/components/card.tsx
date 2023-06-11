export default function Card({ setShowModal, title, description }: { setShowModal: (showModal: boolean) => void, title: string, description: string }) {
  return (
    <div className="drop-shadow-lg rounded-lg p-4 m-4 bg-slate-50 dark:bg-gray-800 hover:opacity-90 hover:scale-105 max-w-md max-h-60 overflow-hiddens"
      onClick={() => { setShowModal(true) }}>
      <h2 className=" font-bold text-xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  )
}