"use client";
import { useState } from "react";
import Header from "@/components/Header";
import CreateNew from "@/components/CreateNew";
import ListItem, { ListItemProps } from "@/components/ListItem";
import { Todo, TodoOut } from '@/types/todo'
import OpenTodoTab from "./OpenTodoTab";

interface Props {
  todos: Todo[]
}

export default function TodoList({ todos } : Props) {
  const [activeModal, setActiveModal] = useState<"add" | "search" | null>(null);
  const [todoList, setTodoList] = useState<Todo[]>(todos)
  const [mode, setMode] = useState<"open" | "edit" | null>(null)
  const [todo, setTodo] = useState<TodoOut>()

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo_list/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error("Failed to Delete todo")
      }

      setTodoList(todoList.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const handleOpen = async (id: string) => {
    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo_list/${id}`)
      const result: TodoOut = await res.json()

      setTodo(result)
      setMode('open')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto">
      <Header
        onAddList={() => setActiveModal("add")}
        onSearchClick={() => setActiveModal("search")}
      />
      <div className="flex flex-col gap-3 my-9 mx-16 border-2 border-solid border-gray-950 overflow-x-hidden overflow-y-auto h-3/4 py-3 px-3">
        { todoList.length === 0 ? 
          (
            <h2 className="text-3xl text-gray-300">List empty...</h2>
          ) : (
            todoList.map((todo) => (
              <ListItem
                key={todo.todo_id}
                {...todo}
                onDelete={() => handleDelete(todo.todo_id)}
                // onEdit={}
                onOpen={() => handleOpen(todo.todo_id)}
              />
            ))
          ) 
        }
      </div>

      {activeModal === "add" && (
        <div className="fixed bg-transparent inset-0 flex justify-center items-center z-50">
          <CreateNew onClose={() => setActiveModal(null)} />
        </div>
      )}

      {activeModal === 'search' && (
        <div></div>
      )}

      {mode === "open" && (
        <div className="fixed bg-transparent inset-0 flex justify-center items-center z-50">
          <OpenTodoTab
            title={todo.title}
            content={todo.content}
            updated_at={todo.updated_at}
            todo_id={todo.todo_id}
            onClose={() => setMode(null)}
          />
        </div>
      )}
    </div>
  );
}