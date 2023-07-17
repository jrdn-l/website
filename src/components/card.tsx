export default function Card({ setShowModal, title, description, className }: { setShowModal: (showModal: boolean) => void, title: string, description: string, className?: string }) {
  return (
    <div className={"drop-shadow-lg rounded-lg bg-slate-50 dark:bg-gray-800 hover:opacity-90 hover:scale-105 overflow-hiddens" + (className ? " " + className : "")}
      onClick={() => { setShowModal(true) }}>
      <h2 className="font-bold text-xl p-4">{title}</h2>
      <p className="text-sm p-4">{description}</p>
    </div>
  )
}