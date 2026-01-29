"use client";
import { useState } from "react";
import Header from "@/components/Header";
import CreateNew from "@/components/CreateNew";
import ListItem, { ListItemProps } from "@/components/ListItem";
import { Todo } from '@/types/todo'

interface Props {
  todos: Todo[]
}

export default function TodoList({ todos } : Props) {
  const [activeModal, setActiveModal] = useState<"add" | "search" | null>(null);
  const [todoList, setTodoList] = useState<Todo[]>(todos)

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
                // onDelete={}
                // onEdit={}
                // onOpen={}
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
    </div>
  );
}