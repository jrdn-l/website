export default function Card({ setShowModal, title, description, className, backgroundImg }: { setShowModal: (showModal: boolean) => void, title: string, description: string, className?: string, backgroundImg?: any }) {
  return (
    <div className={"drop-shadow-lg rounded-lg bg-slate-50 dark:bg-gray-800 bg-cover bg-center bg-no-repeat hover:opacity-90 hover:scale-105 overflow-hiddens" + (className ? " " + className : "")}
    onClick={() => { setShowModal(true) }} style={{backgroundImage: `url(${backgroundImg})`}}>
      <h2 className="font-bold text-xl p-4">{title}</h2>
      <p className="text-sm p-4">{description}</p>
    </div>
  )
}