export function TodoForm() {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
      aria-label="Nova tarefa (layout estático)"
      noValidate
    >
      <label className="sr-only" htmlFor="todo-title">
        Título da tarefa
      </label>
      <input
        id="todo-title"
        name="title"
        type="text"
        placeholder="Digite uma nova tarefa…"
        className="min-h-11 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none ring-emerald-500/30 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2"
      />
      <button
        type="button"
        className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-5 font-medium text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        Adicionar
      </button>
    </form>
  )
}
