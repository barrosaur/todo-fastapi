import TodoList from "@/components/TodoList"
import { Todo } from "@/types/todo"

export default async function Home() {
  const res = await fetch('http://localhost:8000/todo_list', {
    cache: 'no-cache'
  })

  const todos: Todo[] = await res.json()

  return <TodoList todos={todos} />
}