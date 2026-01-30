import React from 'react'

interface OpenTodoTabProps {
  onClose: () => void,
  title: string,
  updated_at: string,
  todo_id: string,
  content: string
}

const OpenTodoTab = ({ onClose, title, updated_at, todo_id, content } : OpenTodoTabProps) => {
  return (
    <div className='w-1/2 px-10 py-5 rounded-2xl shadow-all-sides flex flex-col bg-white'>
      <div className='flex justify-end'>
        <button
          className='text-2xl rounded-half flex justify-center items-center px-2.5 py-1 hover:bg-gray-200 cursor-pointer transition-all'
          onClick={onClose}
        >
          ✖
        </button>
      </div>
      <div className='flex flex-col mb-2.5'>
        <h1 className='text-3xl font-bold mb-1.5'>{title}</h1>
        <p className='text-sm text-gray-400'>{todo_id}</p>
        <p>Updated at: {updated_at}</p>
      </div>
      <textarea
        className='border border-solid border-black rounded-md p-3 h-96'
      >
        {content}
      </textarea>
    </div>
  )
}

export default OpenTodoTab