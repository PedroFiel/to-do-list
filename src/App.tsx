import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import type { TodoItemData } from './components/TodoItem'
import { useState } from 'react'

const MOCK_TODOS: TodoItemData[] = [
  { id: '1', title: 'Revisar requisitos do trabalho', done: false },
  { id: '2', title: 'Montar wireframe da lista de tarefas', done: true },
  { id: '3', title: 'Definir contrato da API (futuro)', done: false },
]

function App() {
      const [todos, setTodos] = useState<TodoItemData[]>(MOCK_TODOS)

      function deleteTodo(id: string) {
        setTodos((prev) => prev.filter((item) => item.id !== id))
      }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Front-end estático
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Lista de tarefas
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Layout pronto para o time conectar estado, API e persistência.
          </p>
        </header>

        <main className="flex flex-1 flex-col">
          <section
            className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-md shadow-slate-200/50 backdrop-blur-sm sm:p-6"
            aria-labelledby="todo-form-heading"
          >
            <h2 id="todo-form-heading" className="sr-only">
              Adicionar tarefa
            </h2>
            <TodoForm />
          </section>

          <section className="mt-8 flex flex-1 flex-col" aria-labelledby="todo-list-heading">
            <div className="flex items-baseline justify-between gap-2">
              <h2 id="todo-list-heading" className="text-lg font-semibold text-slate-900">
                Suas tarefas
              </h2>
              <span className="text-xs text-slate-500">dados de exemplo</span>
            </div>
            <TodoList items={todos} onDeleteTodo={deleteTodo} />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
