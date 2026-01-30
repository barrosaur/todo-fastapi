import Button from "./Button"

export interface ListItemProps {
  title: string,
  updated_at: string,
  todo_id: string,
  onOpen: () => void,
  onDelete: () => void,
  onEdit: () => void
}

const ListItem = ({ title, updated_at, todo_id, onOpen, onDelete, onEdit } : ListItemProps) => {
  return (
    <div className="border-2 border-solid flex p-5 gap-20 w-full h-35 mr-3 rounded-2xl">
      <div className="flex flex-col flex-1">
        <h1 className="font-bold text-4xl">{title}</h1>
        <h3 className="text-gray-500">Updated at: {updated_at}</h3>
        <p className="mt-3">{todo_id}</p>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <Button
          label='Open'
          onClick={onOpen}
          className="flex items-center justify-center text-center bg-green-700 py-1 px-5 font-bold text-white hover:bg-green-800 w-24 h-10"
          imgSrc=""
        />
        <Button
          label='Edit'
          onClick={onEdit}
          className="flex items-center justify-center text-center bg-gray-800 py-1 px-5 font-bold text-white hover:bg-gray-900 w-24 h-10"
          imgSrc=""
        />
        <Button
          label='Delete'
          onClick={onDelete}
          className="flex items-center justify-center text-center bg-red-600 py-1 px-5 font-bold text-white hover:bg-red-700 w-24 h-10"
          imgSrc=""
        />
      </div>
    </div>
  )
}

export default ListItem