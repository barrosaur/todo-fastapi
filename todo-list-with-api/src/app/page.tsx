import TodoList from "@/components/TodoList"
import { Todo } from "@/types/todo"

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo_list`, {
    cache: 'no-cache'
  })

  const todos: Todo[] = await res.json()

  return <TodoList todos={todos} />
}