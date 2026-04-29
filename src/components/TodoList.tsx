import { TodoItem, type TodoItemData } from './TodoItem'

type TodoListProps = {
  items: TodoItemData[]
  onDeleteTodo: (id: string) => void
  onToggleTodo: (id: string) => void
}

export function TodoList({ items, onDeleteTodo, onToggleTodo }: TodoListProps) {
  return (
    <ul className="mt-6 flex list-none flex-col gap-3 p-0">
      {items.map((item) => (
        <li key={item.id}>
          <TodoItem {...item} onDelete={onDeleteTodo} onToggle={onToggleTodo} />
        </li>
      ))}
    </ul>
  )
}
