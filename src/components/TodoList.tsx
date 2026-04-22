import { TodoItem, type TodoItemData } from './TodoItem'

type TodoListProps = {
  items: TodoItemData[]
}

export function TodoList({ items }: TodoListProps) {
  return (
    <ul className="mt-6 flex list-none flex-col gap-3 p-0">
      {items.map((item) => (
        <li key={item.id}>
          <TodoItem {...item} />
        </li>
      ))}
    </ul>
  )
}
